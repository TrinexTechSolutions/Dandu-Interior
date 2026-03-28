import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  // Smooth scroll progress for the SVG ring
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Toggle visibility after 20% scroll
  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      setIsVisible(v > 0.15);
    });
    return () => unsub();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-10 right-6 md:bottom-auto md:top-1/2 md:right-8 md:-translate-y-1/2 z-[100] cursor-pointer group"
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Progress Ring Background */}
          <div className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#1A1A1A] rounded-full shadow-2xl border border-white/10">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              {/* Background circle (track) */}
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                className="stroke-white/10 fill-transparent"
                strokeWidth="1.2"
              />
              {/* Progress circle */}
              <motion.circle
                cx="50%"
                cy="50%"
                r="45%"
                className="stroke-[#F8F5F2] fill-transparent"
                strokeWidth="1.2"
                strokeLinecap="round"
                style={{
                  pathLength: pathLength,
                }}
              />
            </svg>

            {/* Icon/Text Container */}
            <div className="relative flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isHovered ? (
                  <motion.span
                    key="text"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-[7px] font-bold tracking-[0.05em] uppercase text-[#F8F5F2] font-sans"
                  >
                    TOP
                  </motion.span>
                ) : (
                  <motion.div
                    key="icon"
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -2 }}
                  >
                    <ChevronUp className="text-[#F8F5F2]/40 group-hover:text-[#F8F5F2] transition-colors" size={14} strokeWidth={1.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Magnetic Outer Glow (on hover) */}
          <motion.div
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              opacity: isHovered ? 0.2 : 0,
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 rounded-full bg-white blur-xl -z-10"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
