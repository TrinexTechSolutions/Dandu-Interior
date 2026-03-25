import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Award, Users, ChevronRight, Star, Maximize2, Minimize2 } from 'lucide-react';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import SectionWrapper from '../components/SectionWrapper';
import CallToAction from '../components/CallToAction';
import HomeDesignIdeas from '../components/HomeDesignIdeas';
import { useModal } from '../context/ModalContext';

const heroImage = "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2600&auto=format&fit=crop";

const Home = () => {
  const { openQuoteModal } = useModal();
  const [expandedTestimonial, setExpandedTestimonial] = React.useState(null);
  const [expandedService, setExpandedService] = React.useState(null);
  const scrollRef = React.useRef(null);
  const [isHoveringServices, setIsHoveringServices] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);

  // Smooth auto-scroll for Core Services
  React.useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let lastTime = performance.now();
    const speed = 0.5;

    const animate = (currentTime) => {
      if (!isHoveringServices && !expandedService) {
        const deltaTime = currentTime - lastTime;
        scrollContainer.scrollLeft += speed * (deltaTime / 16);

        const halfWidth = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= halfWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      lastTime = currentTime;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isHoveringServices, expandedService]);

  const infiniteServices = [...services.slice(0, 8), ...services.slice(0, 8)];
  
  return (
    <div>
        {/* Banner with Refined Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <img 
            src={heroImage} 
            alt="Dandu Interior Banner" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#F8F5F2]/20 backdrop-blur-[1px]"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-[#37302F]/60 text-xs font-bold tracking-[0.4em] uppercase mb-8 block lg:mb-12">
              Dandu Interiors & Developers
            </h2>
            <h1 className="text-[#37302F] text-5xl md:text-8xl font-light tracking-tighter mb-8 max-w-5xl leading-[0.9] filter">
              Elevating <span className="font-serif italic text-[#37302F]/50">Spaces</span>, <br />
              Exceeding <span className="font-serif italic text-[#37302F]/50">Expectations</span>.
            </h1>
            <p className="text-[#37302F]/70 text-base md:text-lg max-w-2xl font-light mb-12 tracking-wide uppercase">
              The Finest Interior Designers and Construction Experts in the Region.
            </p>
            <div className="flex gap-4">
              <Link to="/projects" className="bg-[#37302F] text-[#F8F5F2] px-10 py-4 rounded-full font-bold tracking-[0.2em] uppercase text-[10px] hover:bg-[#37302F]/90 transition-all shadow-xl">
                View Projects
              </Link>
              <button 
                onClick={openQuoteModal} 
                className="bg-transparent text-[#37302F] border border-[#37302F]/30 backdrop-blur-md px-10 py-4 rounded-full font-bold tracking-[0.2em] uppercase text-[10px] hover:bg-[#37302F] hover:text-[#F8F5F2] transition-all"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </section>

      {/* Services Preview */}
        <SectionWrapper 
          bgClass="bg-[#F8F5F2]" 
          id="services-preview"
          paddingClass="pt-24 pb-32"
        >
          <div 
            className="text-center mb-20 px-4"
            onMouseEnter={() => setIsHoveringServices(true)}
            onMouseLeave={() => setIsHoveringServices(false)}
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
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Left Corner Blur Overlay (Perfectly flush com a borda do container) */}
            <div className="absolute left-0 inset-y-0 w-8 md:w-24 bg-gradient-to-r from-[#F8F5F2] via-[#F8F5F2]/80 to-transparent backdrop-blur-[2px] z-40 pointer-events-none rounded-l-2xl"></div>
            
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 pb-8 px-4 md:px-8 relative hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
            <style>{`
              .hide-scrollbar::-webkit-scrollbar { display: none !important; }
              #services-preview .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
  
            {infiniteServices.map((service, idx) => {
              const uniqueId = `${service.id}-${idx}`;
              const isServiceExpanded = expandedService === uniqueId;
  
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
                    
                    {/* Text Content Area - Now part of flow for better spacing, but absolute on expansion */}
                    <div className={`transition-all duration-300 flex flex-col px-3 ${isServiceExpanded ? 'opacity-0 pointer-events-none absolute inset-0 pt-14' : 'opacity-100 relative pt-2'}`}>
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
  
                    {/* Expandable Image Container (Reduced height and very tight space) */}
                    <div 
                      onClick={() => setExpandedService(isServiceExpanded ? null : uniqueId)}
                      className={`cursor-pointer overflow-hidden border border-black/5 shadow-sm group transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-30 ${isServiceExpanded ? 'absolute inset-0 rounded-2xl h-full w-full' : 'h-[140px] w-full rounded-xl mt-auto relative'}`}
                    >
                      <img 
                        src={service.image || service.subServices?.[0]?.image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"} 
                        alt={service.title} 
                        className={`w-full h-full object-cover transition-transform duration-700 ${isServiceExpanded ? 'scale-100' : 'scale-110 group-hover:scale-100'}`} 
                      />
                      
                      {/* Hover Icons */}
                      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm p-3 rounded-full text-white transition-all duration-300 pointer-events-none shadow-xl ${isServiceExpanded ? 'opacity-0' : 'opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100'}`}>
                        <Maximize2 size={18} />
                      </div>
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
                  <div className="text-[#1A1A1A] mt-1 shrink-0"><item.icon size={24} /></div>
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

      {/* Featured Projects */}
      <SectionWrapper>
        <div className="relative mb-20 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#1A1A1A] text-center mb-4 leading-none">
            Featured <span className="font-serif italic text-black/30">Projects</span>
          </h2>
          <div className="w-20 h-[1px] bg-black/10"></div>
          <Link to="/projects" className="mt-8 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A] hover:bg-black hover:text-white px-6 py-2 rounded-full border border-black/5 transition-all">
            View All Work <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <Link key={project.id} to={`/projects`} className="group relative rounded-xl overflow-hidden shadow-md block h-[400px]" data-cursor-text="VIEW">
              <img 
                src={project.image} 
                alt={project.title} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#1A1A1A] text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                <h3 className="text-white text-2xl font-bold mb-1">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.location}</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <span className="text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">View Detail</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper bgClass="bg-[#F8F5F2]">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#1A1A1A] mb-4 leading-none">
            How It <span className="font-serif italic text-black/30">Works</span>
          </h2>
          <div className="w-20 h-[1px] bg-black/10 mx-auto mb-8"></div>
          <p className="text-black/50 text-[13px] tracking-wide font-light max-w-2xl mx-auto uppercase">A seamless, transparent process designed to bring your vision to reality.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-[50px] left-1/8 right-1/8 h-0.5 bg-gray-300 z-0"></div>
          {[
            { step: '01', title: 'Consultation', desc: 'We discuss your needs, budget, and vision.' },
            { step: '02', title: 'Design & Planning', desc: 'Creating 3D models and detailed project plans.' },
            { step: '03', title: 'Execution', desc: 'Our expert team builds everything to specification.' },
            { step: '04', title: 'Handover', desc: 'Final walkthrough and handing over your new space.' }
          ].map((item, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-[6px] border-[#F8F5F2] shadow-xl flex items-center justify-center mb-6 text-3xl font-bold text-[#1A1A1A]">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Design Ideas Section */}
      <HomeDesignIdeas />

      {/* Client Testimonials - Traditional Design Requested */}
      <SectionWrapper bgClass="bg-[#F8F5F2]">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A]">Client Testimonials</h2>
          <div className="w-24 h-1 bg-[#1A1A1A] mx-auto rounded-full mb-6"></div>
          <p className="text-black/50 text-[13px] tracking-wide font-light max-w-2xl mx-auto uppercase">Real stories of trust, excellence, and transformed environments.</p>
        </div>
        
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.slice(0, 4).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] relative mt-8 flex flex-col h-full group transition-all duration-300 hover:shadow-2xl">
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
