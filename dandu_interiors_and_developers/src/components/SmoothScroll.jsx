import React, { useEffect } from 'react';
import Lenis from 'lenis';

import { useLocation } from 'react-router-dom';

const SmoothScroll = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // RAF (Request Animation Frame) loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Stop Lenis during transitions to prevent "scrolling" feel
    lenis.stop();
    lenis.start();

    // Store lenis on window for PageTransition to access if needed
    window.lenis = lenis;

    // cleanup
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      window.lenis = null;
    };
  }, []);

  // Use location change to pause/start
  useEffect(() => {
    if (window.lenis) {
      window.lenis.stop();
      
      const timer = setTimeout(() => {
        if (window.lenis) window.lenis.start();
      }, 800); // Matching the 0.8s transition duration

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return <>{children}</>;
};

export default SmoothScroll;
