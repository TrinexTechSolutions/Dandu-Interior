import React, { useState, useMemo, useEffect, useRef } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data/projects';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const Projects = () => {
  const navigate = useNavigate();
  const [isCardMode, setIsCardMode] = useState(true);
  const [heroContentTop, setHeroContentTop] = useState(0);
  const contentRef = useRef(null);
  const heroTitleRef = useRef(null);
  const gridRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const numCols = useMemo(() => {
    if (windowWidth < 768) return 2;
    if (windowWidth < 1024) return 3;
    return 4;
  }, [windowWidth]);

  // Measure the bottom of the h1 to set content start position
  useEffect(() => {
    const measureHero = () => {
      if (heroTitleRef.current) {
        const rect = heroTitleRef.current.getBoundingClientRect();
        setHeroContentTop(rect.bottom + window.scrollY + 28);
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

  const quotes = [
    { text: "We treat every project as our own, ensuring meticulous care and unwavering dedication to your vision.", bg: "bg-white/60", text_col: "text-[#1A1A1A]", h: 1.3 },
    { text: "Transforming your personal ideas into reality with transparent communication at every step.", bg: "bg-white/40", text_col: "text-[#1A1A1A]", h: 1.0 },
    { text: "Your satisfaction is our ultimate masterpiece. We build unbreakable trust before we build walls.", bg: "bg-white/60", text_col: "text-[#1A1A1A]", h: 1.4 },
    { text: "We don't just design spaces; we craft environments that inspire and elevate your everyday life.", bg: "bg-white/40", text_col: "text-[#1A1A1A]", h: 1.3 },
    { text: "Every brick laid and every color chosen reflects our commitment to your unique lifestyle.", bg: "bg-white/60", text_col: "text-[#1A1A1A]", h: 1.6 },
    { text: "Innovative solutions that blend breathtaking aesthetics with uncompromising architectural integrity.", bg: "bg-white/40", text_col: "text-[#1A1A1A]", h: 1.0 },
    { text: "We listen intently, act transparently, and deliver beyond your expectations every single time.", bg: "bg-white/60", text_col: "text-[#1A1A1A]", h: 1.4 },
    { text: "Where your imagination sets the blueprint, our seasoned expertise builds the rock-solid foundation.", bg: "bg-white/40", text_col: "text-[#1A1A1A]", h: 1.0 }
  ];

  const gridData = useMemo(() => {
    const flatItems = [];
    const quoteIndices = [1, 5, 10, 13, 14, 19, 22, 25];
    let pIdx = 0, qIdx = 0;

    for (let i = 0; i < projects.length + quotes.length; i++) {
      if (quoteIndices.includes(i) && qIdx < quotes.length) {
        const q = quotes[qIdx++];
        flatItems.push({
          type: 'quote', ...q, itemId: `q-${qIdx}`,
          aspect: q.h === 1.0 ? 'aspect-square' : q.h >= 1.5 ? 'aspect-[2/3]' : q.h >= 1.3 ? 'aspect-[3/4]' : 'aspect-[4/5]'
        });
      } else if (pIdx < projects.length) {
        const p = projects[pIdx++];
        const aspectClasses = ['aspect-[4/5]', 'aspect-[2/3]', 'aspect-[3/4]', 'aspect-square', 'aspect-[3/5]'];
        flatItems.push({
          type: 'project', ...p, itemId: `p-${p.id}`,
          aspect: aspectClasses[pIdx % aspectClasses.length]
        });
      }
    }

    const cols = Array.from({ length: numCols }, () => []);
    flatItems.forEach((item, idx) => {
      cols[idx % numCols].push(item);
    });
    return cols;
  }, [numCols]);

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end end"]
  });

  const renderItem = (item, globalIdx) => {
    if (item.type === 'quote') {
      return (
        <div
          key={item.itemId}
          className={`relative overflow-hidden rounded-xl w-full ${item.aspect} ${item.bg} flex flex-col justify-center items-center p-6 sm:p-10 text-center mb-4 sm:mb-6`}
        >
          <span className={`text-6xl absolute -top-1 left-4 ${item.text_col} opacity-[0.1] font-serif leading-none`}>"</span>
          <p className={`font-medium text-sm md:text-base lg:text-lg leading-relaxed ${item.text_col} relative z-10 font-serif italic line-clamp-4`}>{item.text}</p>
        </div>
      );
    }

    return (
      <motion.div
        key={item.itemId}
        whileHover={{ y: -5 }}
        className="group relative overflow-hidden rounded-xl cursor-pointer mb-4 sm:mb-6 shadow-sm hover:shadow-md transition-shadow duration-300"
        onClick={() => navigate(`/projects/${item.id}`)}
      >
        <img
          src={item.image}
          alt={item.title}
          loading={globalIdx < 8 ? 'eager' : 'lazy'}
          className={`w-full ${item.aspect} object-cover transition-transform duration-700 group-hover:scale-110`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <span className="text-[#C49A45] text-xs font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
          <h3 className="text-white text-lg md:text-xl font-bold leading-tight mb-1">{item.title}</h3>
          <div className="flex items-center gap-1.5 text-gray-300 text-xs md:text-sm">
            <span>📍</span> {item.location}
          </div>
        </div>
      </motion.div>
    );
  };

  const Column = ({ col, colIdx, totalCols }) => {
    // Determine relative speeds/offsets
    // We want them to start staggered (not at same level)
    // and align at the end.
    // Let's use a simple staggered progress.
    const speed = [0, 0.15, 0.08, 0.22][colIdx % 4];
    const y = useTransform(scrollYProgress, [0, 1], [colIdx * 40, 0]);

    return (
      <motion.div
        style={{ y }}
        className="flex-1 min-w-0"
      >
        {col.map((item, idx) => renderItem(item, idx * totalCols + colIdx))}
      </motion.div>
    );
  };

  return (
    <div className="bg-[#F8F5F2] min-h-screen pb-0 relative">
      <style>{`
        .projects-hero-title {
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
          .projects-hero-title { font-size: clamp(56px, 10vw, 80px); letter-spacing: -4px; }
        }
        @media (min-width: 1024px) {
          .projects-hero-title { font-size: clamp(80px, 11vw, 119px); letter-spacing: -10.2px; }
        }
      `}</style>

      {/* Hero Section */}
      <motion.div
        style={{ y: heroTranslateY }}
        className={`fixed top-0 left-0 h-screen w-full flex flex-col justify-start z-0 bg-[#F8F5F2] pt-24 md:pt-32 transition-opacity duration-300 ${isCardMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="w-full relative px-4 md:px-8">
          <h1 ref={heroTitleRef} className="projects-hero-title select-none whitespace-nowrap">
            Our Projects
          </h1>
        </div>
      </motion.div>

      {/* Content Section */}
      <div
        ref={contentRef}
        style={{ marginTop: heroContentTop > 0 ? `${heroContentTop}px` : '38vh' }}
        className="relative z-10 bg-[#F8F5F2] will-change-transform"
      >
        <SectionWrapper bgClass="bg-transparent" containerClass="w-full px-4 lg:px-8">
          <div className="w-full flex justify-start mb-8 md:mb-16">
            <div className="text-left max-w-lg">
              <p className="text-[#3a3a3a] text-sm md:text-lg leading-relaxed font-semibold tracking-wide lowercase">
                Explore our portfolio of completed masterworks — each space a
                testament to design, craft, and the vision of those who dare
                to transform the ordinary into the extraordinary.
              </p>
            </div>
          </div>

          <div ref={gridRef} className="flex gap-4 sm:gap-6 pb-32 items-start">
            {gridData.map((col, idx) => (
              <Column key={idx} col={col} colIdx={idx} totalCols={numCols} />
            ))}
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default Projects;
