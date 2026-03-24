import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import { designIdeas } from '../data/designIdeas';
import { MoveRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DesignIdeas = () => {
  const [isCardMode, setIsCardMode] = useState(true);
  const [heroContentTop, setHeroContentTop] = useState(0);
  const contentRef = useRef(null);
  const heroTitleRef = useRef(null);

  useEffect(() => {
    const measureHero = () => {
      if (heroTitleRef.current) {
        const rect = heroTitleRef.current.getBoundingClientRect();
        setHeroContentTop(rect.bottom + window.scrollY + 24);
      }
    };
    measureHero();
    const ro = new ResizeObserver(measureHero);
    if (heroTitleRef.current) ro.observe(heroTitleRef.current);
    return () => ro.disconnect();
  }, []);

  const { scrollY } = useScroll();
  const heroTranslateY = useTransform(scrollY, [0, 500], [0, -125]);

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
          font-weight: 600;
          line-height: 100%;
          text-align: left;
          color: #1A1A1A;
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
          <h1 ref={heroTitleRef} className="design-ideas-hero-title select-none whitespace-nowrap">
            Design Ideas
          </h1>
        </div>
      </motion.div>

      {/* Content Section */}
      <div
        ref={contentRef}
        style={{ marginTop: heroContentTop > 0 ? `${heroContentTop}px` : '38vh' }}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-16">
            {designIdeas.map((idea, idx) => (
              <Link to={`/design-ideas/${idea.title.toLowerCase().replace(/\s+/g, '-')}`} key={idx} className="block group relative rounded-2xl overflow-hidden cursor-pointer card-hover aspect-square shadow-sm">
                <img 
                  src={idea.image} 
                  alt={idea.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <span className="text-[#C49A45] font-bold text-sm mb-1 block uppercase tracking-wider">{idea.count}</span>
                  <h3 className="text-white text-xl font-bold mb-0">{idea.title}</h3>
                  
                  <div className="flex items-center gap-2 text-[#C49A45] text-sm font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    Explore Gallery <MoveRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SectionWrapper>
        
        {/* CTA Inline */}
        <SectionWrapper bgClass="bg-transparent">
          <div className="bg-[#1A1A1A] rounded-3xl p-12 text-center relative overflow-hidden mb-16">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#C49A45]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#C49A45]/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Found something you like?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 relative z-10">
              Let our expert designers customize these ideas to fit your space perfectly. Book a free consultation today.
            </p>
            <a href="/get-quote" className="inline-block bg-[#C49A45] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#1A1A1A] transition-colors relative z-10">
              Book Free Consultation
            </a>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default DesignIdeas;
