import React from 'react';
import heroBg from '../assets/herosection_banners/hero1.jpeg';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Award, Users, ChevronRight, ChevronLeft, Star } from 'lucide-react';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import SectionWrapper from '../components/SectionWrapper';
import CallToAction from '../components/CallToAction';
import HomeDesignIdeas from '../components/HomeDesignIdeas';
import { useModal } from '../context/ModalContext';

const heroImage = heroBg;

const Home = () => {
  const { openQuoteModal } = useModal();
  const [expandedTestimonial, setExpandedTestimonial] = React.useState(null);
  const scrollRef = React.useRef(null);
  const [isInteracting, setIsInteracting] = React.useState(false);
  const [isManualScroll, setIsManualScroll] = React.useState(false);
  const testimonialScrollRef = React.useRef(null);
  const [isTestimonialInteracting, setIsTestimonialInteracting] = React.useState(false);
  const [activeProcessStep, setActiveProcessStep] = React.useState(() => {
    // Start with 0 on desktop for auto-loop, -1 on mobile for scroll-driven
    return typeof window !== 'undefined' && window.innerWidth < 1024 ? -1 : 0;
  });
  const [isHoveringProcess, setIsHoveringProcess] = React.useState(false);

  // Timer refs for resuming auto-scroll
  const serviceResumeTimer = React.useRef(null);
  const testimonialResumeTimer = React.useRef(null);

  const resetServiceInteraction = () => {
    if (serviceResumeTimer.current) clearTimeout(serviceResumeTimer.current);
    serviceResumeTimer.current = setTimeout(() => {
      setIsInteracting(false);
      setIsManualScroll(false);
    }, 4000); // Resume auto-scroll after 4s of no activity
  };

  const resetTestimonialInteraction = () => {
    if (testimonialResumeTimer.current) clearTimeout(testimonialResumeTimer.current);
    testimonialResumeTimer.current = setTimeout(() => {
      setIsTestimonialInteracting(false);
    }, 4000);
  };

  // Auto-loop for process steps on desktop
  React.useEffect(() => {
    // Only auto-loop on desktop (>= 1024px). For mobile, expansion is scroll-driven.
    const interval = setInterval(() => {
      const isMobile = window.innerWidth < 1024;
      if (!isMobile && !isHoveringProcess) {
        setActiveProcessStep((prev) => (prev + 1) % 4);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
      if (serviceResumeTimer.current) clearTimeout(serviceResumeTimer.current);
      if (testimonialResumeTimer.current) clearTimeout(testimonialResumeTimer.current);
    };
  }, [isHoveringProcess]);

  // Mobile scroll tracking with precise center detection
  React.useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    const handleScroll = () => {
      const stepElements = document.querySelectorAll('.process-step-card');
      const centerY = window.innerHeight / 2;
      const triggerRange = window.innerHeight * 0.15; // 15% of screen height as trigger zone

      let currentActive = -1;

      stepElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;

        // Only activate if the card is literally in the center zone
        if (Math.abs(centerY - elCenter) < triggerRange) {
          currentActive = index;
        }
      });

      setActiveProcessStep(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth auto-scroll for Core Services
  React.useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Force initial scroll position to 0 to prevent "sticky" start on iOS
    scrollContainer.scrollLeft = 0;

    let animationId;
    let lastTime = 0;
    const speed = 0.5; // Constant base speed

    const animate = (time) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      if (!isInteracting && !isManualScroll) {
        // Normalize speed based on frame time (targets 60fps)
        const frameAdjust = deltaTime / (1000 / 60);
        
        // Prevent huge jumps if tab was suspended/resumed
        if (!isNaN(frameAdjust) && frameAdjust < 10) {
          scrollContainer.scrollLeft += speed * frameAdjust;
        }

        // Loop detection: reset to 0 once we've scrolled half the total (duplicated) content
        // iOS Safari uses fractional scrollLeft - we use a larger 2px buffer for robustness
        const halfWidth = scrollContainer.scrollWidth / 2;
        if (halfWidth > 0 && scrollContainer.scrollLeft >= halfWidth - 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isInteracting, isManualScroll]);

  // Auto-scroll for Testimonials (Now mobile-only to maintain static desktop grid)
  React.useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    const scrollContainer = testimonialScrollRef.current;
    if (!scrollContainer) return;

    // Force initial scroll position to 0
    scrollContainer.scrollLeft = 0;

    let animationId;
    let lastTime = 0;
    const speed = 0.45;

    const animate = (time) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      if (!isTestimonialInteracting) {
        const frameAdjust = deltaTime / (1000 / 60);
        
        if (!isNaN(frameAdjust) && frameAdjust < 10) {
          scrollContainer.scrollLeft += speed * frameAdjust;
        }

        const halfWidth = scrollContainer.scrollWidth / 2;
        if (halfWidth > 0 && scrollContainer.scrollLeft >= halfWidth - 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isTestimonialInteracting]);

  const handleManualScroll = (direction) => {
    setIsManualScroll(true);
    resetServiceInteraction(); // Start the resume timer
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.4;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const infiniteServices = [...services.slice(0, 8), ...services.slice(0, 8)];
  const infiniteTestimonials = [...testimonials, ...testimonials];

  return (
    <div>
      {/* Banner with Refined Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Dandu Interior Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />


        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-[#37302F] text-xs font-bold tracking-[0.4em] uppercase mb-8 block lg:mb-12">
            Dandu Interiors & Developers
          </h2>
          <h1 className="text-[#37302F] text-5xl md:text-8xl font-light tracking-tighter mb-8 max-w-5xl leading-[0.9] filter">
            Elevating <span className="font-serif italic text-[#37302F]/50">Spaces</span>, <br />
            Exceeding <span className="font-serif italic text-[#37302F]/50">Expectations</span>.
          </h1>
          <p className="text-[#37302F] text-base md:text-lg max-w-2xl font-light mb-12 tracking-wide uppercase">
            The Finest Interior Designers and Construction Experts in the Region.
          </p>
          <button
            onClick={openQuoteModal}
            className="bg-transparent text-[#37302F] border border-[#37302F]/30 backdrop-blur-md px-10 py-4 rounded-full font-bold tracking-[0.2em] uppercase text-[10px] hover:bg-[#37302F] hover:text-[#F8F5F2] transition-all"
          >
            Get a Quote
          </button>
        </div>
      </section>

      {/* Services Preview */}
      <SectionWrapper
        bgClass="bg-[#F8F5F2]"
        id="services-preview"
        paddingClass="pt-24 pb-32"
        onMouseLeave={() => {
          // No immediate reset here, let the 4s timer handle it for better control
        }}
        onTouchEnd={() => {
          // No immediate reset here, let the 4s timer handle it for better control
        }}
      >
        <div
          className="text-center mb-20 px-4"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#1A1A1A] mb-4 leading-none">
            Core <span className="font-serif italic text-black/30">Services</span>
          </h2>
          <div className="w-20 h-[1px] bg-black/10 mx-auto mb-8"></div>
          <p className="text-black/60 text-base md:text-lg font-light max-w-4xl mx-auto leading-relaxed">
            At Dandu Interior & Developers, we don't just build spaces; we craft life-enhancing environments. Our team of certified professionals and visionary designers bring together years of multidisciplinary expertise in structural engineering, premium interior aesthetics, and seamless project management. We treat every project as a landmark of trust, ensuring your investment results in a space that is as durable as it is beautiful.
          </p>
        </div>

        {/* Scrollable Area with flush blur overlays dentro do container original */}
        <div
          className="relative group/scroll -mx-4 md:-mx-8"
        >
          {/* Manual Scroll Controls - Positioned over side blurs */}
          <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center z-[60] pointer-events-none px-0 md:px-4">
            <button
              onClick={() => handleManualScroll('left')}
              className="pointer-events-auto p-4 text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-all hover:-translate-x-1"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => handleManualScroll('right')}
              className="pointer-events-auto p-4 text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-all hover:translate-x-1"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
            </button>
          </div>

          {/* Side Blur Overlays (Perfectly flush com a borda do container) */}
          <div className="absolute left-0 inset-y-0 w-12 md:w-32 bg-gradient-to-r from-[#F8F5F2] via-[#F8F5F2]/80 to-transparent backdrop-blur-[2px] z-40 pointer-events-none rounded-l-2xl"></div>
          <div className="absolute right-0 inset-y-0 w-12 md:w-32 bg-gradient-to-l from-[#F8F5F2] via-[#F8F5F2]/80 to-transparent backdrop-blur-[2px] z-40 pointer-events-none rounded-r-2xl"></div>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 px-4 md:px-8 relative hide-scrollbar"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollBehavior: 'auto !important'  // Disable smooth-scroll conflict with JS loop
            }}
            onMouseEnter={() => {
              setIsInteracting(true);
              if (serviceResumeTimer.current) clearTimeout(serviceResumeTimer.current);
            }}
            onMouseLeave={() => resetServiceInteraction()}
            onTouchStart={() => {
              if (window.innerWidth >= 1024) {
                setIsInteracting(true);
                if (serviceResumeTimer.current) clearTimeout(serviceResumeTimer.current);
              }
            }}
            onTouchEnd={() => {
              if (window.innerWidth >= 1024) resetServiceInteraction();
            }}
          >
            <style>{`
              .hide-scrollbar::-webkit-scrollbar { display: none !important; }
              .hide-scrollbar { 
                -ms-overflow-style: none !important; 
                scrollbar-width: none !important;
                -webkit-overflow-scrolling: auto !important; /* Disable OS momentum logic during JS loop */
              }
            `}</style>

            {infiniteServices.map((service, idx) => {
              const uniqueId = `${service.id}-${idx}`;

              return (
                <div
                  key={uniqueId}
                  className="relative w-[85vw] md:w-[45vw] lg:w-[calc(25%-1.5rem)] shrink-0 h-[370px] flex flex-col items-start group/card"
                >
                  {/* Top-Left Cutout Layer (Design matching DesignIdeas) */}
                  <div className="absolute top-0 left-0 bg-[#F8F5F2] max-w-[85%] pb-3 pr-5 rounded-tl-2xl rounded-br-[32px] z-30 pointer-events-none">
                    <svg className="absolute top-0 w-6 h-6 text-[#F8F5F2] fill-current pointer-events-none" style={{ left: 'calc(100% - 1px)' }} viewBox="0 0 24 24">
                      <path d="M 0 0 L 24 0 C 10.745 0 0 10.745 0 24 Z" />
                    </svg>
                    <svg className="absolute left-0 w-6 h-6 text-[#F8F5F2] fill-current pointer-events-none" style={{ top: 'calc(100% - 1px)' }} viewBox="0 0 24 24">
                      <path d="M 0 0 L 24 0 C 10.745 0 0 10.745 0 24 Z" />
                    </svg>

                    <div className="px-5 pt-5 text-[10px] font-extrabold text-[#1A1A1A] tracking-widest uppercase whitespace-nowrap truncate relative z-10">
                      {service.title}
                    </div>
                  </div>

                  {/* Main Body with tightly packed content and more matter */}
                  <div className="bg-white flex-grow w-full rounded-2xl p-2 pt-14 flex flex-col relative z-20 border border-black/5 overflow-hidden">

                    {/* Text Content Area */}
                    <div className="transition-all duration-300 flex flex-col px-3 relative pt-2">
                      <p className="text-[#1A1A1A]/70 font-medium leading-[1.5] text-[12px] line-clamp-[12]">
                        {service.description || "Providing professional and premium services tailored to your needs. We blend modern functional utility with timeless premium elegance to make your space completely uniquely yours. Our expert team ensures every detail is handled with precision and care."}
                      </p>

                      {/* Explore Button - Now tightly following the text */}
                      <div className="mt-2 mb-4">
                        <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2 text-[8px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A] hover:bg-black hover:text-white px-3 py-1.5 rounded-full border border-black/10 transition-all">
                          Explore <ChevronRight size={12} />
                        </Link>
                      </div>
                    </div>

                    {/* Image Container */}
                    <div className="overflow-hidden border border-black/5 shadow-sm group h-[140px] w-full rounded-xl mt-auto relative">
                      <img
                        src={service.image || service.subServices?.[0]?.image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 scale-110 group-hover:scale-100"
                      />
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Corner Blur Overlay (Perfectly flush com a borda do container) */}
          <div className="absolute right-0 inset-y-0 w-8 md:w-24 bg-gradient-to-l from-[#F8F5F2] via-[#F8F5F2]/80 to-transparent backdrop-blur-[2px] z-40 pointer-events-none rounded-r-2xl"></div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper bgClass="bg-[#1A1A1A] text-white" paddingClass="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-6 leading-none">
              Why <span className="font-serif italic text-white/30">Choose Us?</span>
            </h2>
            <div className="w-20 h-[1px] bg-white/10 rounded-full mb-8"></div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We are not just a name - it's a brand built on trust and excellence. With years of experience and a multi-disciplinary team, we manage your project from concept to completion, ensuring it is delivered on time, within budget, and beyond expectations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: 'Premium Quality', desc: 'Sourcing only the best materials.' },
                { icon: Clock, title: 'On-Time Delivery', desc: 'Strict adherence to project timelines.' },
                { icon: Award, title: 'Expert Craftsmanship', desc: 'Highly skilled and certified workers.' },
                { icon: Users, title: 'Client Centric', desc: 'Transparent and continuous communication.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-white/50 mt-1 shrink-0"><item.icon size={24} strokeWidth={1.5} /></div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=75&w=800"
              alt="Craftsmanship"
              loading="lazy"
              className="rounded-2xl shadow-2xl relative z-10"
            />
            <div className="absolute -inset-4 bg-[#1A1A1A]/20 rounded-2xl z-0 translate-x-4 -translate-y-4"></div>
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Projects - Cinematic Redesign */}
      <SectionWrapper>
        <div className="relative mb-20 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#1A1A1A] text-center mb-4 leading-none">
            Our <span className="font-serif italic text-black/30">Gallery</span>
          </h2>
          <div className="w-20 h-[1px] bg-black/10"></div>
          <Link to="/gallery" className="mt-8 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A] hover:bg-black hover:text-white px-6 py-2 rounded-full border border-black/5 transition-all">
            View All Work <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-1 auto-rows-[240px] md:auto-rows-[320px]">
          {projects.slice(0, 6).map((project) => {
            return (
              <Link
                key={project.id}
                to={`/gallery`}
                className="group relative rounded-2xl overflow-hidden shadow-sm block transition-all duration-700 hover:shadow-2xl h-full"
                data-cursor-text="VIEW"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 scale-110 group-hover:scale-100"
                />

                {/* Immersive Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content Overlay - Precision Glassmorphism */}
                <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 lg:p-5">
                  <div className="flex flex-col items-start gap-2 lg:gap-3">

                    <div className="overflow-hidden">
                      <h3 className="text-white font-light tracking-tighter leading-none transition-all duration-700 group-hover:tracking-normal group-hover:scale-[1.02] origin-left drop-shadow-lg text-sm sm:text-lg lg:text-xl">
                        {project.title.split(' ')[0]} <br />
                        <span className="font-serif italic text-white/40 group-hover:text-white/60 transition-colors duration-500">{project.title.split(' ').slice(1).join(' ')}</span>
                      </h3>
                    </div>

                    <div className="hidden sm:flex items-center gap-3 mt-2 lg:mt-4 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                      <p className="text-white/60 font-light tracking-[0.1em] uppercase border-l border-white/30 pl-3 text-[7px] lg:text-[9px]">
                        {project.location}
                      </p>
                      <div className="w-8 lg:w-12 h-[1px] bg-white/30"></div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </SectionWrapper>

      {/* How It Works - Compact Minimalist Redesign */}
      <SectionWrapper bgClass="bg-[#F8F5F2]" paddingClass="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[#37302F]/40 text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
              Our Process
            </h2>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-[#1A1A1A] leading-none mb-8">
              How It <span className="font-serif italic text-black/20">Works</span>
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-4 border border-black/5 rounded-2xl overflow-hidden bg-white/50 backdrop-blur-sm shadow-sm transition-all duration-700"
            onMouseEnter={() => setIsHoveringProcess(true)}
            onMouseLeave={() => setIsHoveringProcess(false)}
          >
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your aspirations, lifestyle, and project parameters.' },
              { step: '02', title: 'Design & Planning', desc: 'Development of detailed 3D models and structural blueprints.' },
              { step: '03', title: 'Execution', desc: 'Master craftsmanship and project oversight with a focus on quality.' },
              { step: '04', title: 'Handover', desc: 'A final meticulous walkthrough and successful transition of your space.' }
            ].map((item, idx) => {
              const isActive = activeProcessStep === idx;
              return (
                <div
                  key={idx}
                  data-step-index={idx}
                  className={`process-step-card p-8 md:p-10 relative flex flex-col items-start transition-all duration-700 ${isActive ? 'bg-white shadow-2xl scale-[1.02] z-20' : 'bg-transparent filter grayscale-[0.5] opacity-60'} ${idx !== 3 ? 'md:border-r border-b md:border-b-0 border-black/5' : ''}`}
                >
                  {/* Step Marker */}
                  <div className={`text-[32px] font-serif italic mb-6 transition-all duration-700 ${isActive ? 'text-[#37302F] scale-110' : 'text-black/10'}`}>
                    {item.step}
                  </div>

                  <h3 className={`text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-700 mb-4 ${isActive ? 'text-[#37302F] translate-x-1' : 'text-[#1A1A1A]'}`}>
                    {item.title}
                  </h3>

                  <p className={`text-[13px] leading-relaxed font-light transition-all duration-700 ${isActive ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/60'}`}>
                    {item.desc}
                  </p>

                  {/* Accent Detail */}
                  <div className={`absolute bottom-6 left-8 md:left-10 h-[1px] transition-all duration-1000 ${isActive ? 'w-24 bg-[#37302F]' : 'w-4 bg-black/5'}`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Design Ideas Section */}
      <HomeDesignIdeas />

      {/* Client Testimonials - Enhanced Scroll for Mobile */}
      <SectionWrapper 
        bgClass="bg-[#F8F5F2]"
        onMouseLeave={() => resetTestimonialInteraction()}
        onTouchEnd={() => resetTestimonialInteraction()}
      >
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A]">Client Testimonials</h2>
          <div className="w-24 h-1 bg-[#1A1A1A] mx-auto rounded-full mb-6"></div>
          <p className="text-black/50 text-[13px] tracking-wide font-light max-w-2xl mx-auto uppercase">Real stories of trust, excellence, and transformed environments.</p>
        </div>

        <div className="relative group/testimonials -mx-4 md:-mx-8">
          {/* Side Blur Overlays (Only visible on mobile scroll) */}
          <div className="absolute left-0 inset-y-0 w-8 md:w-20 bg-gradient-to-r from-[#F8F5F2] via-[#F8F5F2]/80 to-transparent backdrop-blur-[2px] z-40 pointer-events-none rounded-l-2xl md:hidden"></div>
          <div className="absolute right-0 inset-y-0 w-8 md:w-20 bg-gradient-to-l from-[#F8F5F2] via-[#F8F5F2]/80 to-transparent backdrop-blur-[2px] z-40 pointer-events-none rounded-r-2xl md:hidden"></div>

          <div
            ref={testimonialScrollRef}
            className="flex lg:grid lg:grid-cols-4 overflow-x-auto lg:overflow-hidden gap-6 md:gap-8 pb-12 px-4 md:px-8 relative hide-scrollbar"
            onMouseEnter={() => {
              setIsTestimonialInteracting(true);
              if (testimonialResumeTimer.current) clearTimeout(testimonialResumeTimer.current);
            }}
            onMouseLeave={() => resetTestimonialInteraction()}
            onTouchStart={() => {
              if (window.innerWidth >= 1024) {
                setIsTestimonialInteracting(true);
                if (testimonialResumeTimer.current) clearTimeout(testimonialResumeTimer.current);
              }
            }}
            onTouchEnd={() => {
              if (window.innerWidth >= 1024) resetTestimonialInteraction();
            }}
          >
            {/* Desktop: Static 4-column grid | Mobile: Infinite flex scroll */}
            {(typeof window !== 'undefined' && window.innerWidth >= 1024 ? testimonials.slice(0, 4) : infiniteTestimonials).map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] relative mt-8 flex flex-col h-[400px] lg:h-full min-w-[85vw] md:min-w-0 lg:min-w-0 group transition-all duration-300 hover:shadow-2xl justify-between"
              >
                <div className="absolute -top-6 left-8 w-12 h-12 bg-[#1A1A1A] text-white flex items-center justify-center rounded-full text-3xl font-serif">"</div>

                <div className="flex gap-1 mb-4 text-[#1A1A1A] mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                  ))}
                </div>

                <p className="text-gray-600 italic mb-6 text-sm leading-relaxed flex-grow">"{testimonial.content}"</p>

                <div className="pt-4 border-t border-gray-50">
                  <h4 className="font-bold text-[#1A1A1A]">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CallToAction />

    </div>
  );
};

export default Home;
