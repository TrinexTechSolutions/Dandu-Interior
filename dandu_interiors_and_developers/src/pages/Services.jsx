import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import SectionWrapper from '../components/SectionWrapper';
import { useModal } from '../context/ModalContext';

const Services = () => {
  const { id } = useParams();
  const [activeService, setActiveService] = useState(null);
  const [isCardMode, setIsCardMode] = useState(true);
  const { openQuoteModal } = useModal();
  const contentRef = React.useRef(null);
  const heroRef = React.useRef(null);
  const [heroOffset, setHeroOffset] = useState(0);

  const { scrollY } = useScroll();
  const heroTranslateY = useTransform(scrollY, [0, 500], [0, -125]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      const found = services.find(s => s.id === id);
      setActiveService(found || services[0]);
    } else {
      setActiveService(services[0]);
    }

    const updateHeight = () => {
      if (heroRef.current) {
        // Measure height + top padding/navbar space
        const rect = heroRef.current.getBoundingClientRect();
        const navHeight = document.querySelector('nav')?.offsetHeight || 80;
        setHeroOffset(rect.height + navHeight + 80); // 80px base buffer
      }
    };

    const handleScroll = () => {
      if (contentRef.current) {
        const top = contentRef.current.getBoundingClientRect().top;
        const navHeight = document.querySelector('nav')?.offsetHeight || 0;
        setIsCardMode(top > navHeight);
      }
    };

    updateHeight();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeight);
    };
  }, [id, activeService]);

  if (id && !services.find(s => s.id === id)) {
    return <Navigate to="/services" replace />;
  }

  if (!activeService) return null;

  return (
    <div className="bg-[#F8F5F2] min-h-screen pb-0 relative">

      {/* Static Fixed Header Section - Content slides OVER this */}
      <motion.div
        className={`fixed top-0 left-0 w-full flex flex-col justify-start overflow-hidden z-0 bg-[#F8F5F2] pt-24 md:pt-28 transition-opacity duration-300 ${isCardMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ height: heroOffset ? `${heroOffset}px` : '50vh', y: heroTranslateY }}
      >
        <div ref={heroRef} className="w-full relative px-4 md:px-8">

          {/* Static Header Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] xl:text-[9.5rem] font-medium tracking-tighter text-[#37302F] leading-[0.85] ml-[-0.04em] select-none max-w-[95%]">
            {activeService.title.split(' ').length > 1 ? (
              <>
                {activeService.title.split(' ').slice(0, -1).join(' ')} <span className="font-serif italic text-[#37302F]/70">{activeService.title.split(' ').slice(-1)}</span>
              </>
            ) : (
              activeService.title
            )}
          </h1>

          {/* Static Description - Positioned directly under and to the right */}
          <div className="w-full flex flex-col items-end mt-2 md:mt-4">
            <div className="max-w-[260px] md:max-w-sm text-right mb-6 md:mb-8">
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed font-semibold tracking-wide">
                {activeService.fullDesc.split('.')[0]}.
              </p>
            </div>

            {/* animated Button Group */}
            <div className="flex items-center gap-2 group cursor-pointer transition-all duration-500 ease-in-out hover:gap-0 h-12 md:h-14">
              <button
                onClick={openQuoteModal}
                className="bg-[#1A1A1A] text-white h-full px-8 rounded-l-full rounded-r-md group-hover:rounded-r-none transition-all duration-500 font-bold text-sm md:text-base whitespace-nowrap shadow-xl flex items-center"
              >
                Book a call
              </button>
              <button
                onClick={openQuoteModal}
                className="bg-[#1A1A1A] text-white h-full px-4 rounded-r-full rounded-l-md group-hover:rounded-l-none transition-all duration-500 flex items-center justify-center shadow-xl border-l border-white/10 group-hover:border-transparent"
              >
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Main Content Sections - Seamlessly sliding OVER the fixed header */}
      <div
        id="services-content"
        ref={contentRef}
        className={`relative z-10 bg-white will-change-transform transition-all duration-500 ease-out ${isCardMode ? 'rounded-t-2xl md:rounded-t-[32px] mx-2 md:mx-6 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100' : 'rounded-t-none mx-0 shadow-none border-transparent'}`}
        style={{ marginTop: heroOffset ? `${heroOffset}px` : '50vh' }}
      >
        {/* Minimal reveal margin */}
        <div className="h-[2vh] md:h-[4vh] bg-white rounded-t-2xl md:rounded-t-[32px]"></div>
        {activeService.subServices.map((sub, index) => (
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
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {sub.desc}
                  </p>
                  <button
                    onClick={openQuoteModal}
                    className="inline-flex items-center gap-3 font-bold text-[10px] tracking-[0.3em] uppercase text-[#1A1A1A] hover:bg-black hover:text-white px-8 py-4 rounded-xl border border-black/5 transition-all group"
                  >
                    Request Service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 lg:drop-shadow-2xl">
                  <div className={`relative shadow-2xl lg:shadow-none overflow-hidden aspect-[4/3] group w-full h-full ${index % 2 === 0 ? 'rounded-2xl lg:rounded-r-none lg:rounded-l-3xl lg:[clip-path:polygon(0%_0%,_75%_0%,_100%_100%,_0%_100%)]' : 'rounded-2xl lg:rounded-l-none lg:rounded-r-3xl lg:[clip-path:polygon(25%_0%,_100%_0%,_100%_100%,_0%_100%)]'}`}>
                    <img
                      src={sub.image}
                      alt={sub.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=75&w=800";
                      }}
                    />
                    <div className="absolute inset-0 border-4 border-[#1A1A1A]/20 rounded-2xl pointer-events-none lg:hidden"></div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Horizontal Bottom Navigation for All Services */}
      <section className="relative py-20 lg:py-24 overflow-hidden border-t-2 border-[#1A1A1A]/20">
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
          <div className="bg-[#1A1A1A] p-8 md:p-14 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row items-center gap-12 lg:gap-16 border border-white/5 max-w-7xl mx-auto">

            {/* Left Side: Content & Button */}
            <div className="w-full lg:w-1/2 text-left">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Explore Our Services</h3>
              <div className="w-16 h-1 bg-[#1A1A1A] rounded-full mb-6 relative"></div>
              <p className="text-white/70 text-base md:text-lg tracking-wide font-light leading-relaxed mb-10 max-w-xl">
                From visionary interior design to robust structural masonry, our multi-disciplinary approach ensures every phase of your project is handled with precision.
              </p>
              <button onClick={openQuoteModal} className="bg-white text-[#1A1A1A] hover:bg-gray-100 px-8 py-4 rounded-md font-bold inline-flex items-center justify-center transition-transform hover:-translate-y-1 shadow-2xl text-sm md:text-base">
                Get a Free Quote
              </button>
            </div>

            {/* Right Side: Links */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-wrap justify-start lg:justify-end gap-3 max-w-2xl">
                {services.map(service => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className={`flex items-center gap-2 px-4 py-3 rounded-full transition-all border text-xs md:text-sm ${activeService.id === service.id ? 'bg-white border-white text-[#1A1A1A] shadow-xl shadow-black/30 scale-105' : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white hover:border-white/20 hover:shadow-md'}`}
                  >
                    <service.icon size={16} strokeWidth={2} />
                    <span className="font-semibold tracking-wide whitespace-nowrap">{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
