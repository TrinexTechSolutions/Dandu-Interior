import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { useModal } from '../context/ModalContext';
import SEO from '../components/SEO';

const Services = () => {
  const { id, subId } = useParams();
  const [rootService, setRootService] = useState(null);
  const [activeDisplayService, setActiveDisplayService] = useState(null);
  const [isCardMode, setIsCardMode] = useState(true);
  const [expandedSubServices, setExpandedSubServices] = useState({});
  const { openQuoteModal, openCallModal } = useModal();
  const contentRef = React.useRef(null);
  const heroRef = React.useRef(null);

  const { scrollY } = useScroll();
  const heroTranslateY = useTransform(scrollY, [0, 500], [0, -125]);

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
    
    // Find Root Service
    const root = services.find(s => s.id === (id || services[0].id));
    setRootService(root);

    // Find Active Service to display
    if (subId && root) {
      const sub = root.subServices.find(s => s.id === subId);
      setActiveDisplayService(sub || root);
    } else {
      setActiveDisplayService(root);
    }

    setExpandedSubServices({});
  }, [id, subId]);

  // Robust scroll listener for card-to-full-screen transition
  useEffect(() => {
    let rafId;
    let cachedNavHeight = 84;

    const updateNavHeight = () => {
      cachedNavHeight = document.querySelector('nav')?.offsetHeight || 84;
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        if (contentRef.current) {
          const top = contentRef.current.getBoundingClientRect().top;
          // Optimization: Use cached height to avoid forced reflow
          setIsCardMode(top > cachedNavHeight);
        }
      });
    };

    updateNavHeight();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateNavHeight);
    
    // Initial check on mount
    handleScroll();
    
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateNavHeight);
    };
  }, []);

  if (id && !services.find(s => s.id === id)) {
    return <Navigate to="/services" replace />;
  }

  if (!activeDisplayService) return null;

  const displayTitle = activeDisplayService.title || activeDisplayService.name;
  const displayDesc = activeDisplayService.description || activeDisplayService.shortDesc || activeDisplayService.desc;
  const itemsToRender = activeDisplayService.subServices || activeDisplayService.nestedServices || [];

  // Unified Hero Content for visual and layout consistency
  const HeroContent = ({ isGhost = false }) => (
    <div 
      className={`w-full relative px-4 md:px-8 ${isGhost ? 'opacity-0 pointer-events-none select-none' : ''}`}
      aria-hidden={isGhost}
    >
      {/* Breadcrumb / Back Navigation */}
      {subId && rootService && (
        <Link 
          to={`/services/${rootService.id}`}
          className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#37302F]/50 hover:text-[#37302F] mb-4 transition-colors group"
        >
          <ArrowRight size={12} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to {rootService.title}
        </Link>
      )}

      {/* Static Header Title */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] xl:text-[9.5rem] font-medium tracking-tighter text-[#37302F] leading-[0.85] ml-[-0.04em] select-none max-w-[95%]">
        {displayTitle.split(' ').length > 1 ? (
          <>
            {displayTitle.split(' ').slice(0, -1).join(' ')} <span className="font-serif italic text-[#37302F]/70">{displayTitle.split(' ').slice(-1)}</span>
          </>
        ) : (
          displayTitle
        )}
      </h1>

      {/* Static Description */}
      <div className="w-full flex flex-col items-end mt-4">
        <div className="max-w-xs md:max-w-sm text-right mb-6 md:mb-8">
          <p
            className="text-gray-500 text-sm md:text-lg leading-relaxed font-semibold tracking-wide"
          >
            {displayDesc}
          </p>
        </div>

        {/* animated Button Group */}
        <div className="flex items-center gap-2 group cursor-pointer transition-all duration-500 ease-in-out hover:gap-0 h-12 md:h-14 mb-6">
          <button
            onClick={() => !isGhost && openCallModal(displayTitle)}
            className="bg-[#1A1A1A] text-white h-full px-8 rounded-l-full rounded-r-md group-hover:rounded-r-none transition-all duration-500 font-bold text-sm md:text-base whitespace-nowrap shadow-xl flex items-center"
          >
            Book a call
          </button>
          <button
            onClick={() => !isGhost && openCallModal(displayTitle)}
            className="bg-[#1A1A1A] text-white h-full px-4 rounded-r-full rounded-l-md group-hover:rounded-l-none transition-all duration-500 flex items-center justify-center shadow-xl border-l border-white/10 group-hover:border-transparent"
          >
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <SEO 
        title={`${displayTitle} | Premium Services in Hyderabad & Bapatla`}
        description={`${displayDesc} Dandu Interiors & Developers offers professional ${displayTitle.toLowerCase()} with technical precision and elegant design in Hyderabad and Bapatla.`}
        keywords={`${displayTitle}, Interior Services Hyderabad, Civil Works Bapatla, Home Renovation Services, ${displayTitle} Experts, Dandu Interiors`}
      />
      <div className="bg-[#F8F5F2] min-h-screen pb-0 relative text-[#1A1A1A]">

      {/* 1. VISIBLE FIXED HEADER (Parallax) */}
      <motion.div
        className={`fixed top-0 left-0 w-full flex flex-col justify-start overflow-visible z-[1] bg-[#F8F5F2] pt-24 md:pt-28 transition-opacity duration-300 gpu-accelerated ${isCardMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ y: heroTranslateY }}
      >
        <HeroContent />
      </motion.div>

      {/* 2. GHOST LAYOUT SPACER (Document Flow) */}
      {/* This invisible div naturally pushes the content down exactly the right amount on any resolution */}
      <div className="pt-24 md:pt-28 select-none relative pointer-events-none">
        <HeroContent isGhost />
        {/* Intersection Sentinel placed at the transition point */}
        {/* Sentinel removed in favor of scroll observer */}
      </div>

      {/* 3. MAIN CONTENT */}
      <div
        id="services-content"
        ref={contentRef}
        className={`relative z-10 transition-all duration-500 ease-out gpu-accelerated ${isCardMode ? 'mx-2 md:mx-6 rounded-t-[32px] md:rounded-t-[48px] shadow-2xl border border-gray-100' : 'mx-0 rounded-t-0 shadow-none border-transparent'} overflow-hidden transform-gpu`}
        style={{ transform: 'translateZ(0)' }}
      >
        {itemsToRender.map((sub, index) => (
          <section key={index} className={`py-8 md:py-16 relative ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8F5F2]'}`}>
            <div className="container-custom">
              <div className={`flex flex-col gap-8 lg:gap-12 items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                  <div className="relative mb-8 mt-12 lg:mt-20 pl-6 flex items-end">
                    <span className="text-7xl md:text-[10rem] font-extrabold text-[#1A1A1A]/15 absolute bottom-0 -left-2 z-0 pointer-events-none select-none leading-[0.75]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-[#37302F] relative z-10 leading-[1.1] md:leading-none pb-1">
                      {sub.name.split(' ')[0]}{' '}
                      <span className="font-serif italic text-[#37302F]/70">{sub.name.split(' ').slice(1).join(' ')}</span>
                    </h2>
                  </div>
                  <div className="w-20 h-[1px] bg-black/10 mb-8"></div>
                  <p
                    className="text-gray-600 text-lg leading-relaxed mb-6"
                  >
                    {sub.desc}
                  </p>
                  
                  {sub.id && sub.nestedServices ? (
                    <Link
                      to={`/services/${rootService.id}/${sub.id}`}
                      className="inline-flex items-center gap-3 font-bold text-[10px] tracking-[0.3em] uppercase text-[#1A1A1A] hover:bg-black hover:text-white px-8 py-4 rounded-xl border border-black/5 transition-all group"
                    >
                      View More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => openQuoteModal(sub.name)}
                      className="inline-flex items-center gap-3 font-bold text-[10px] tracking-[0.3em] uppercase text-[#1A1A1A] hover:bg-black hover:text-white px-8 py-4 rounded-xl border border-black/5 transition-all group"
                    >
                      Request Service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 lg:drop-shadow-2xl">
                  <div className={`relative shadow-2xl lg:shadow-none overflow-hidden aspect-[4/3] group w-full h-full ${index % 2 === 0 ? 'rounded-2xl lg:rounded-r-none lg:rounded-l-3xl lg:[clip-path:polygon(0%_0%,_75%_0%,_100%_100%,_0%_100%)]' : 'rounded-2xl lg:rounded-l-none lg:rounded-r-3xl lg:[clip-path:polygon(25%_0%,_100%_0%,_100%_100%,_0%_100%)]'}`}>
                    {sub.image ? (
                      <img
                        src={sub.image}
                        alt={`${sub.name} - Professional ${rootService?.title || 'Interior'} Service by Dandu Interiors`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=75&w=800";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-[#1A1A1A]/10 flex items-center justify-center font-serif italic text-[#1A1A1A]/30">
                        Image Pending
                      </div>
                    )}
                    <div className="absolute inset-0 border-4 border-[#1A1A1A]/20 rounded-2xl pointer-events-none lg:hidden"></div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Horizontal Bottom Navigation for All Services - Refined SEO & Curvy CTA */}
      <section className="relative py-12 lg:py-20 overflow-hidden bg-[#F8F5F2]">
        <div className="container-custom relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-10 lg:gap-0">
            
            {/* Left Column: Local SEO & Branding */}
            <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-16 py-2">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-[#1A1A1A]/20"></span>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#1A1A1A]/40">Serving Hyderabad & Bapatla</span>
                </div>
                <h3 className="text-[2.5rem] md:text-5xl lg:text-6xl font-sans font-medium tracking-tighter leading-[0.9] text-[#1A1A1A] mb-8">
                  EXPLORE <br /> <span className="font-serif italic text-[#1A1A1A]/60">SERVICES.</span>
                </h3>
                <p className="text-[#1A1A1A]/60 text-sm md:text-base font-light leading-relaxed max-w-sm mb-10">
                  A multi-disciplinary approach ensuring precision from visionary design to final handover.
                </p>
              </div>
              
              <div className="flex flex-col gap-6 items-start">
                <button 
                  onClick={openQuoteModal} 
                  className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#1A1A1A] text-white font-bold uppercase tracking-widest text-[11px] rounded-full overflow-hidden transition-all duration-500 hover:bg-black hover:px-12 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)]"
                >
                  <span className="relative z-10">Get a Free Quote</span>
                  <ArrowRight size={16} className="ml-3 transition-transform duration-500 group-hover:translate-x-2" />
                </button>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/30 pl-4">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Free Site Visit Included
                </div>
              </div>
            </div>

            {/* Right Column: Compact Service Directory */}
            <div className="lg:col-span-7 lg:border-l lg:border-black/5 pl-0 lg:pl-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-px bg-black/5 border border-black/5 rounded-none overflow-hidden">
                {services.map(service => {
                  const isActive = rootService && rootService.id === service.id;
                  return (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className={`
                        flex items-center justify-between gap-x-4 transition-all 
                        p-4 md:px-8 md:py-5
                        bg-[#F8F5F2]
                        hover:bg-white group relative
                        ${isActive ? 'bg-white' : ''}
                      `}
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-[9px] font-bold text-[#1A1A1A]/20 transition-colors group-hover:text-[#1A1A1A]/40 w-4">
                          {service.id.slice(0, 2).toUpperCase()}
                        </span>
                        <div className="flex items-center gap-4">
                          <service.icon size={18} strokeWidth={isActive ? 2 : 1.5} className="text-[#1A1A1A]/70 transition-colors group-hover:text-black shrink-0" />
                          <span className={`text-base md:text-lg tracking-tight transition-all ${isActive ? 'font-medium text-black underline underline-offset-8' : 'font-light text-[#1A1A1A]/50 group-hover:text-black'}`}>
                            {service.title}
                          </span>
                        </div>
                      </div>
                      <ArrowRight size={16} className={`transition-all ${isActive ? 'text-black translate-x-1' : 'text-[#1A1A1A]/10 group-hover:text-black group-hover:translate-x-1'}`} />
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  </>
);
};

export default Services;
