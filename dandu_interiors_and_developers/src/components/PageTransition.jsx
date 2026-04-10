import React, { useEffect, useRef, useState } from 'react';
import { motion, useIsPresent } from 'framer-motion';

const PageTransition = ({ children }) => {
  const isPresent = useIsPresent();
  const [scrollY, setScrollY] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const containerRef = useRef(null);
  
  // No longer need high-frequency scroll tracking state
  // We will capture it only when transition starts

  useEffect(() => {
    if (!isPresent) {
      // CAPTURE scroll position ONLY at the exact moment exit starts
      // This avoids constant re-renders during normal browsing
      setScrollY(window.scrollY);
      setIsAnimating(true);
    } else {
      // When entering, scroll to top of the NEW page
      // Use immediate: true if lenis is available
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
      setIsAnimating(true);
    }
  }, [isPresent]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh" }}
      onAnimationComplete={() => setIsAnimating(false)}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1], 
      }}
      style={{
        position: isPresent ? "relative" : "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: isPresent ? 2 : 1,
        background: "#F8F5F2", 
        // CRITICAL: Transforms break 'position: fixed' children.
        // We must clear the transform once the animation is done.
        transform: !isAnimating && isPresent ? "none" : undefined,
        willChange: isAnimating ? "transform" : "auto",
      }}
    >
      <div 
        style={{ 
          marginTop: !isPresent ? -scrollY : 0,
          width: "100%",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default PageTransition;

