import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import { designIdeas } from '../data/designIdeas';
import { MoveRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useModal } from '../context/ModalContext';
import SEO from '../components/SEO';
import commercialDesignImage from '../assets/Services/Commercial Design.webp';

const DesignIdeas = () => {
  const navigate = useNavigate();
  const { 
    setDetailDrawerOpen, 
    openIdeaDrawer, 
    closeIdeaDrawer, 
    openQuoteModal,
    isDetailDrawerOpen: isGlobalDrawerOpen,
    selectedIdea: globalSelectedIdea
  } = useModal();

  const [isCardMode, setIsCardMode] = useState(true);
  const [heroOffset, setHeroOffset] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const contentRef = useRef(null);
  const heroTitleRef = useRef(null);

  const handleIdeaClick = useCallback((idea) => {
    if (windowWidth < 768) {
      const id = idea.title.toLowerCase().replace(/[\s,]+/g, '-');
      openIdeaDrawer(id);
    } else {
      navigate(`/design-ideas/${idea.title.toLowerCase().replace(/[\s,]+/g, '-')}`);
    }
  }, [windowWidth, navigate, openIdeaDrawer]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const measureHero = () => {
      if (heroTitleRef.current) {
        const titleTop = heroTitleRef.current.offsetTop;
        const titleHeight = heroTitleRef.current.offsetHeight;
        // Responsive gap: 100px for mobile, 140px for desktop
        const baseGap = windowWidth < 768 ? 100 : 140;
        setHeroOffset(titleTop + titleHeight + baseGap); 
      }
    };

    measureHero();
    const ro = new ResizeObserver(measureHero);
    if (heroTitleRef.current) ro.observe(heroTitleRef.current);
    window.addEventListener('resize', measureHero);
    
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measureHero);
    };
  }, [windowWidth]);

  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 500], [0, -350]);
  const heroTranslateY = useSpring(yRange, { stiffness: 160, damping: 15 });

  // Ensure the body background matches the page to prevent "white leaks" during parallax
  useEffect(() => {
    const originalBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#F8F5F2';
    return () => {
      document.body.style.backgroundColor = originalBg;
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    let rafId;
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (contentRef.current) {
          const top = contentRef.current.getBoundingClientRect().top;
          const navEl = document.querySelector('nav');
          const navHeight = navEl ? navEl.offsetHeight : 0;
          setIsCardMode(top > navHeight);
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <SEO 
        title="Design Inspiration & Ideas"
        description="Explore curated interior design ideas by Dandu Interiors & Developers. From modular kitchens to master bedrooms and space-saving solutions, get inspired for your next renovation."
      />
      <div className="bg-[#F8F5F2] min-h-screen pb-0 relative">
      <style>{`
        .design-ideas-hero-title {
          font-family: "Inter", "Inter Placeholder", sans-serif;
          font-style: normal;
          font-weight: 500;
          line-height: 100%;
          text-align: left;
          color: #37302F;
          font-size: clamp(38px, 11vw, 56px);
          letter-spacing: -2px;
        }
        @media (min-width: 640px) {
          .design-ideas-hero-title { font-size: clamp(56px, 10vw, 80px); letter-spacing: -4px; }
        }
        @media (min-width: 1024px) {
          .design-ideas-hero-title { font-size: clamp(80px, 11vw, 119px); letter-spacing: -10.2px; }
        }
      `}</style>

      {/* Hero Section */}
      <motion.div
        style={{ y: heroTranslateY }}
        className={`fixed top-0 left-0 h-screen w-full flex flex-col justify-start z-0 bg-[#F8F5F2] pt-24 md:pt-32 transition-opacity duration-300 gpu-accelerated ${isCardMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="w-full relative px-4 md:px-8">
          <h1 ref={heroTitleRef} className="design-ideas-hero-title select-none whitespace-nowrap leading-[0.85]">
            Design <span className="font-serif italic text-[#37302F]/70">Ideas</span>
          </h1>
        </div>
      </motion.div>

      {/* Content Section */}
      <div
        ref={contentRef}
        style={{ marginTop: heroOffset > 0 ? `${heroOffset}px` : '38vh' }}
        className="relative z-10 bg-[#F8F5F2] gpu-accelerated"
      >
        <SectionWrapper bgClass="bg-transparent" paddingClass="pt-0.5 pb-0" containerClass="w-full px-4 lg:px-8">
          <div className="w-full flex justify-start mt-6 mb-8 md:mb-16">
            <div className="text-left max-w-4xl">
              <p
                className="text-[#1d322d] text-[16px] font-medium leading-[1.5] tracking-[-0.02em] text-left line-clamp-2"
                style={{ fontFamily: '"Inter", "Inter Placeholder", sans-serif' }}
              >
                Explore handpicked design themes for every corner of your home. Dive into curated collections blending premium materials, breathtaking aesthetics to instantly elevate your everyday lifestyle.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
            {designIdeas.map((idea, idx) => (
              <div 
                key={idx} 
                onClick={() => handleIdeaClick(idea)}
                className="block group relative rounded-2xl overflow-hidden cursor-pointer aspect-square bg-[#F8F5F2] z-10 pointer-events-auto"
              >
                <img
                  src={idea.image}
                  alt={idea.title}
                  className="w-full h-full object-cover"
                />

                {/* Center Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 z-10 text-center">
                  <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.1] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-md">
                    {idea.title}
                  </h2>
                </div>

                {/* Top-Left Cutout Layer (Name) */}
                <div className="absolute top-0 left-0 bg-[#F8F5F2] max-w-[80%] pb-3 pr-4 rounded-tl-2xl rounded-br-[24px] z-20 pointer-events-none">
                  <svg className="absolute top-0 w-6 h-6 text-[#F8F5F2] fill-current pointer-events-none" style={{ left: 'calc(100% - 1px)' }} viewBox="0 0 24 24">
                    <path d="M 0 0 L 24 0 C 10.745 0 0 10.745 0 24 Z" />
                  </svg>
                  <svg className="absolute left-0 w-6 h-6 text-[#F8F5F2] fill-current pointer-events-none" style={{ top: 'calc(100% - 1px)' }} viewBox="0 0 24 24">
                    <path d="M 0 0 L 24 0 C 10.745 0 0 10.745 0 24 Z" />
                  </svg>

                  <div className="px-4 pt-4 text-xs sm:text-sm font-extrabold text-[#1d322d] tracking-widest uppercase bg-transparent whitespace-nowrap truncate relative z-10">
                    {idea.title}
                  </div>
                </div>

                {/* Bottom-Right Cutout Layer (Explore button) */}
                <div className="absolute bottom-0 right-0 bg-[#F8F5F2] max-w-[80%] pt-4 pl-4 rounded-br-2xl rounded-tl-[24px] z-20 pointer-events-none">
                  <svg className="absolute right-0 w-6 h-6 text-[#F8F5F2] fill-current pointer-events-none" style={{ bottom: 'calc(100% - 1px)' }} viewBox="0 0 24 24">
                    <path d="M 24 24 L 0 24 C 13.255 24 24 13.255 24 0 Z" />
                  </svg>
                  <svg className="absolute bottom-0 w-6 h-6 text-[#F8F5F2] fill-current pointer-events-none" style={{ right: 'calc(100% - 1px)' }} viewBox="0 0 24 24">
                    <path d="M 24 24 L 0 24 C 13.255 24 24 13.255 24 0 Z" />
                  </svg>

                  <div className="px-4 pb-4 flex items-center justify-end text-xs sm:text-sm font-extrabold text-[#1d322d] tracking-widest uppercase bg-transparent whitespace-nowrap relative z-10">
                    <span className="transition-colors duration-300">EXPLORE</span>
                    <MoveRight size={16} className="w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* CTA Section - Redesigned Light Theme Pattern */}
        <section className="relative py-24 lg:py-40 overflow-hidden bg-[#F8F5F2]">
          <div className="container-custom relative z-10 w-full px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
              
              {/* Left Column: Heading & Local SEO */}
              <div className="lg:col-span-7 pr-0 lg:pr-20">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-[#1A1A1A]/20"></span>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#1A1A1A]/40">Serving Hyderabad & Bapatla</span>
                </div>
                <h2 className="text-[2.8rem] md:text-5xl lg:text-7xl font-sans font-medium tracking-tighter leading-[0.9] text-[#37302F] mb-8">
                  FOUND SOMETHING <br /> <span className="font-serif italic text-[#37302F]/70">YOU LIKE?</span>
                </h2>
                <p className="text-[#37302F]/60 text-base md:text-xl font-light leading-relaxed max-w-xl">
                  Let our expert designers customize these ideas to fit your space perfectly. Book a free consultation today.
                </p>
              </div>

              {/* Right Column: Curvy High-Conversion Button */}
              <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-6 w-full">
                <button 
                  onClick={openQuoteModal}
                  className="group relative inline-flex items-center justify-center px-10 py-6 bg-[#1A1A1A] text-white font-bold uppercase tracking-widest text-[11px] rounded-full overflow-hidden transition-all duration-500 hover:bg-black hover:px-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] w-full lg:w-fit"
                >
                  <span className="relative z-10">Book Free Consultation</span>
                  <MoveRight size={18} className="ml-3 transition-transform duration-500 group-hover:translate-x-2" />
                </button>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#37302F]/30 pr-4">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Expert Guidance Included
                </div>
              </div>

            </div>
          </div>
        </section>
    </div>
    </div>
  </>
);
};

export default DesignIdeas;
