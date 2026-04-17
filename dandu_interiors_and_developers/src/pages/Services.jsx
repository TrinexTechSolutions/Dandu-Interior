import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { useModal } from '../context/ModalContext';

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
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        if (contentRef.current) {
          const top = contentRef.current.getBoundingClientRect().top;
          const navHeight = document.querySelector('nav')?.offsetHeight || 84;
          setIsCardMode(top > navHeight);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check on mount to ensure correct state if starting scrolled
    handleScroll();
    
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
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
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-[#37302F] relative z-10 leading-none pb-1 whitespace-nowrap lg:whitespace-normal">
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
                        alt={sub.name}
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

      {/* Horizontal Bottom Navigation for All Services */}
      <section className="relative py-8 lg:py-12 overflow-hidden border-t-2 border-[#1A1A1A]/20">
        {/* Background Overlay - No Filter, Full Width */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=75&w=1600"
            alt="Interior Ambience"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="bg-[#1A1A1A] p-6 md:p-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row items-center gap-6 lg:gap-10 border border-white/5 max-w-7xl mx-auto">

            {/* Left Side: Content & Button */}
            <div className="w-full lg:w-1/2 text-left">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">Explore Our Services</h3>
              <div className="w-12 h-1 bg-[#1A1A1A] rounded-full mb-4 relative"></div>
              <p className="text-white/70 text-sm md:text-base tracking-wide font-light leading-relaxed mb-6 max-w-xl">
                From visionary interior design to robust structural masonry, our multi-disciplinary approach ensures every phase of your project is handled with precision.
              </p>
              <div className="w-full max-w-xl flex justify-end">
                <button onClick={openQuoteModal} className="bg-white text-[#1A1A1A] hover:bg-gray-100 px-6 py-3 rounded-md font-bold inline-flex items-center justify-center transition-transform hover:-translate-y-1 shadow-2xl text-xs md:text-sm">
                  Get a Free Quote
                </button>
              </div>
            </div>

            {/* Right Side: Links */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col w-full divide-y divide-white/10 border border-white/10 rounded-2xl overflow-hidden">
                {services.map(service => {
                  const isActive = rootService && rootService.id === service.id;
                  return (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className={`
                        flex items-center justify-between gap-x-3 transition-all 
                        p-4 md:px-6 md:py-4 
                        text-sm md:text-base
                        ${isActive 
                           ? 'bg-white text-[#1A1A1A] font-bold shadow-[inset_0_4px_10px_rgba(0,0,0,0.1)]' 
                           : 'bg-transparent text-white/70 hover:bg-white/5 hover:text-white'
                        }
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <service.icon size={20} strokeWidth={isActive ? 2.5 : 2} className="flex-shrink-0" />
                        <span className="tracking-wide whitespace-nowrap">{service.title}</span>
                      </div>
                      <ArrowRight size={18} className={`flex-shrink-0 transition-transform ${isActive ? 'text-[#1A1A1A] translate-x-1' : 'text-white/30'}`} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
