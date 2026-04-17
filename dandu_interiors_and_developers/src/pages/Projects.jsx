import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import SectionWrapper from '../components/SectionWrapper';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import FullScreenImageModal from '../components/FullScreenImageModal';
import CallToAction from '../components/CallToAction';

// Dynamically import all images from the Projects folder using Vite's eager glob
const projectModules = import.meta.glob('../assets/Projects/*.{webp,png,jpg,jpeg}', { eager: true, import: 'default' });
const galleryImages = Object.values(projectModules).map((src, index) => ({
  id: `gallery-img-${index}`,
  image: src,
  title: `Project ${index + 1}`
}));

const Projects = () => {
  const [heroOffset, setHeroOffset] = useState(0);
  const contentRef = useRef(null);
  const heroTitleRef = useRef(null);
  const gridRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // State for image popup
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

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
  }, []);

  const quotes = [
    { text: "We treat every project as our own, ensuring meticulous care and unwavering dedication to your vision.", bg: "bg-[#AF6E4D]", text_col: "text-white", h: 1.3 },
    { text: "Transforming your personal ideas into reality with transparent communication at every step.", bg: "bg-[#004953]", text_col: "text-white", h: 1.0 },
    { text: "Your satisfaction is our ultimate masterpiece. We build unbreakable trust before we build walls.", bg: "bg-[#8A9A5B]", text_col: "text-white", h: 1.4 },
    { text: "We don't just design spaces; we craft environments that inspire and elevate your everyday life.", bg: "bg-[#C29B61]", text_col: "text-white", h: 1.3 },
    { text: "Every brick laid and every color chosen reflects our commitment to your unique lifestyle.", bg: "bg-[#3A4D39]", text_col: "text-white", h: 1.6 },
    { text: "Innovative solutions that blend breathtaking aesthetics with uncompromising architectural integrity.", bg: "bg-[#722F37]", text_col: "text-white", h: 1.0 },
    { text: "We listen intently, act transparently, and deliver beyond your expectations every single time.", bg: "bg-[#A0522D]", text_col: "text-white", h: 1.4 },
    { text: "Where your imagination sets the blueprint, our seasoned expertise builds the rock-solid foundation.", bg: "bg-[#E1AD01]", text_col: "text-white", h: 1.0 },
    { text: "Your space, your sanctuary. We bring harmony and comfort into every corner of your home.", bg: "bg-[#4A5D23]", text_col: "text-white", h: 1.0 },
    { text: "Excellence in masonry and structural design, ensuring your investment stands the test of time.", bg: "bg-[#5C4033]", text_col: "text-white", h: 1.4 },
    { text: "From conceptual sketches to the final coat of paint, we are pioneers of holistic renovation.", bg: "bg-[#2F4F4F]", text_col: "text-white", h: 1.3 },
    { text: "Every tile placed, every partition perfectly aligned—precision is our default working standard.", bg: "bg-[#36454F]", text_col: "text-white", h: 1.6 }
  ];

  const gridData = useMemo(() => {
    const flatItems = [];
    // Spread quotes throughout the dynamically loaded images
    const quoteIndices = [1, 5, 10, 15, 22, 28, 35, 42, 48, 52, 57, 60];
    let pIdx = 0, qIdx = 0;

    for (let i = 0; i < galleryImages.length + quotes.length; i++) {
      if (quoteIndices.includes(i) && qIdx < quotes.length) {
        const q = quotes[qIdx++];
        flatItems.push({
          type: 'quote', ...q, itemId: `q-${qIdx}`,
          aspect: q.h === 1.0 ? 'aspect-square' : q.h >= 1.5 ? 'aspect-[2/3]' : q.h >= 1.3 ? 'aspect-[3/4]' : 'aspect-[4/5]'
        });
      } else if (pIdx < galleryImages.length) {
        const p = galleryImages[pIdx++];
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
    offset: ["start 112px", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 90, 
    damping: 24, 
    restDelta: 0.001,
    restSpeed: 0.001
  });

  const handleProjectClick = useCallback((item) => {
    // Find index of the clicked image in the galleryImages array
    const imgIndex = galleryImages.findIndex(g => g.id === item.id);
    if (imgIndex !== -1) setSelectedImageIndex(imgIndex);
  }, []);

  const renderItem = useCallback((item, globalIdx) => {
    if (item.type === 'quote') {
      return (
        <div
          key={item.itemId}
          className={`relative overflow-hidden rounded-xl w-full ${item.aspect} ${item.bg} flex flex-col justify-center items-center p-6 sm:p-10 text-center shadow-sm`}
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
        className="group relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
        onClick={() => handleProjectClick(item)}
      >
        <img
          src={item.image}
          alt={item.title}
          loading={globalIdx < 8 ? 'eager' : 'lazy'}
          className={`w-full ${item.aspect} object-cover transition-transform duration-700 group-hover:scale-110`}
        />
      </motion.div>
    );
  }, [handleProjectClick]);

  const Column = ({ col, colIdx, totalCols }) => {
    const colRef = useRef(null);
    const [stats, setStats] = useState({ colHeight: 0, maxHeight: 0 });

    useEffect(() => {
      const measure = () => {
        if (colRef.current && colRef.current.parentElement) {
          const myHeight = colRef.current.offsetHeight;
          const siblings = Array.from(colRef.current.parentElement.children);
          const maxH = Math.max(...siblings.map(s => s.offsetHeight));
          
          if (myHeight > 0 && maxH > 0) {
            setStats(prev => {
              // Only update if change is significant (>2px) to prevent scroll jitter
              if (Math.abs(prev.colHeight - myHeight) > 2 || Math.abs(prev.maxHeight - maxH) > 2) {
                return { colHeight: myHeight, maxHeight: maxH };
              }
              return prev;
            });
          }
        }
      };

      measure();
      window.addEventListener('resize', measure);
      const observer = new ResizeObserver(measure);
      if (colRef.current) observer.observe(colRef.current);
      if (colRef.current && colRef.current.parentElement) observer.observe(colRef.current.parentElement);

      // Staggered re-measure for lazy-loaded assets
      const timers = [500, 1500, 3000].map(t => setTimeout(measure, t));

      return () => {
        window.removeEventListener('resize', measure);
        observer.disconnect();
        timers.forEach(clearTimeout);
      };
    }, [col, totalCols]);

    const deltaY = Math.max(0, stats.maxHeight - stats.colHeight);
    const y = useTransform(smoothProgress, [0, 1], [0, deltaY], { clamp: true });

    return (
      <div ref={colRef} className="flex-1 min-w-0 h-max relative">
        <motion.div style={{ y }} className="flex flex-col gap-4 sm:gap-6 h-max will-change-transform">
          {col.map((item, idx) => renderItem(item, idx * totalCols + colIdx))}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="bg-[#F8F5F2] min-h-screen pb-0 relative">
      <style>{`
        .projects-hero-title {
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
          .projects-hero-title { font-size: clamp(56px, 10vw, 80px); letter-spacing: -4px; }
        }
        @media (min-width: 1024px) {
          .projects-hero-title { font-size: clamp(80px, 11vw, 119px); letter-spacing: -10.2px; }
        }
      `}</style>

      {/* Hero Section */}
      <motion.div
        style={{ y: heroTranslateY }}
        className="fixed top-0 left-0 h-screen w-full flex flex-col justify-start z-0 bg-[#F8F5F2] pt-24 md:pt-32 transition-none"
      >
        <div className="w-full relative px-4 md:px-8">
          <h1 ref={heroTitleRef} className="projects-hero-title select-none whitespace-nowrap leading-[0.85]">
            Our <span className="font-serif italic text-[#37302F]/70">Gallery</span>
          </h1>
        </div>
      </motion.div>

      {/* Content Section */}
      <div
        ref={contentRef}
        style={{ marginTop: heroOffset > 0 ? `${heroOffset}px` : '38vh' }}
        className="relative z-[10] bg-[#F8F5F2] will-change-transform"
      >
        <SectionWrapper bgClass="bg-transparent" paddingClass="pt-0.5 pb-24" containerClass="w-full px-4 lg:px-8">
          <div className="w-full flex justify-start mt-6 mb-8 md:mb-16">
            <div className="text-left max-w-4xl">
              <p 
                className="text-[#1d322d] text-[16px] font-medium leading-[1.5] tracking-[-0.02em] text-left line-clamp-2"
                style={{ fontFamily: '"Inter", "Inter Placeholder", sans-serif' }}
              >
                Explore our portfolio of completed masterworks — each space a testament to design, craft, and the vision of those who dare to transform the ordinary into the extraordinary.
              </p>
            </div>
          </div>

          <div ref={gridRef} className="relative flex gap-4 sm:gap-6 w-full">
            {gridData.map((col, idx) => (
              <Column key={idx} col={col} colIdx={idx} totalCols={numCols} />
            ))}
          </div>
        </SectionWrapper>
      </div>

      <FullScreenImageModal
        isOpen={selectedImageIndex !== null}
        images={galleryImages.map(g => g.image)}
        initialIndex={selectedImageIndex || 0}
        onClose={() => setSelectedImageIndex(null)}
        showNavigation={false}
      />

      <div className="relative z-20 bg-[#F8F5F2]">
        <CallToAction />
      </div>

    </div>
  );
};

export default Projects;
