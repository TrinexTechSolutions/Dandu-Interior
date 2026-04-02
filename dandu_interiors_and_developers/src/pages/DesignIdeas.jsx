import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import { designIdeas } from '../data/designIdeas';
import { MoveRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useModal } from '../context/ModalContext';
import commercialDesignImage from '../assets/Services/Commercial Design.webp';

const DesignIdeas = () => {
  const navigate = useNavigate();
  const { 
    setDetailDrawerOpen, 
    openIdeaDrawer, 
    closeIdeaDrawer, 
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
      const id = idea.title.toLowerCase().replace(/\s+/g, '-');
      openIdeaDrawer(id);
    } else {
      navigate(`/design-ideas/${idea.title.toLowerCase().replace(/\s+/g, '-')}`);
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
    const handleScroll = () => {
      if (contentRef.current) {
        const top = contentRef.current.getBoundingClientRect().top;
        const navEl = document.querySelector('nav');
        const navHeight = navEl ? navEl.offsetHeight : 0;
        setIsCardMode(top > navHeight);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
        className={`fixed top-0 left-0 h-screen w-full flex flex-col justify-start z-0 bg-[#F8F5F2] pt-24 md:pt-32 transition-opacity duration-300 ${isCardMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
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
        className="relative z-10 bg-[#F8F5F2] will-change-transform"
      >
        <SectionWrapper bgClass="bg-transparent" paddingClass="pt-0.5 pb-16" containerClass="w-full px-4 lg:px-8">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
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

        {/* CTA Section */}
        <section className="relative py-20 lg:py-24 overflow-hidden border-t border-gray-200 mt-10">
          {/* Background Overlay - Full Width */}
          <div className="absolute inset-0 z-0">
            <img
              src={commercialDesignImage}
              alt="Interior Background"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container-custom relative z-10">
            <div className="bg-[#1A1A1A] p-8 md:p-14 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] text-center relative overflow-hidden border border-white/5 max-w-7xl mx-auto">

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Found something you like?</h2>
              <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10 relative z-10">
                Let our expert designers customize these ideas to fit your space perfectly. Book a free consultation today.
              </p>
              <a href="/get-quote" className="inline-block bg-white text-[#1A1A1A] hover:bg-gray-100 px-8 py-4 rounded-md font-bold transition-transform hover:-translate-y-1 shadow-2xl relative z-10 text-sm md:text-base">
                Book Free Consultation
              </a>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default DesignIdeas;
