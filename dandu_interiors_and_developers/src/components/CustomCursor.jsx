import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the trailer with that high-end elastic feel
  const springConfig = { damping: 30, stiffness: 200, mass: 0.6 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check for touch device - standard way to detect mobile/tablets
    const touchCheck = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    setIsTouchDevice(touchCheck);
    
    // If it's a touch device, we don't want any of these listeners consuming CPU
    if (touchCheck) return;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      mouseX.set(x);
      mouseY.set(y);
      
      if (!isVisible) {
        setIsVisible(true);
        trailX.set(x);
        trailY.set(y);
      }

      const target = e.target;
      if (!target) return;

      const interactiveEl = target.closest('a, button, [role="button"], input, select, textarea, .interactive');
      const customTextEl = target.closest('[data-cursor-text]');
      const isText = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'B', 'I', 'LI', 'LABEL'].includes(target.tagName) || 
                     (target.childNodes.length === 1 && target.childNodes[0].nodeType === 3);
      const isImage = target.tagName === 'IMG' || target.tagName === 'SVG' || target.closest('svg');

      if (customTextEl) {
        setCursorType('text');
        setCursorText(customTextEl.getAttribute('data-cursor-text'));
      } else if (interactiveEl) {
        setCursorType('hover');
      } else if (isText || isImage) {
        setCursorType('invert');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseDown = () => setCursorType('click');
    const handleMouseUp = (e) => {
      const target = e.target;
      if (!target) return;
      
      const interactiveEl = target.closest('a, button, [role="button"], input, select, textarea, .interactive');
      const customTextEl = target.closest('[data-cursor-text]');
      const isText = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'B', 'I', 'LI', 'LABEL'].includes(target.tagName) || 
                     (target.childNodes.length === 1 && target.childNodes[0].nodeType === 3);
      const isImage = target.tagName === 'IMG' || target.tagName === 'SVG' || target.closest('svg');

      if (customTextEl) {
        setCursorType('text');
      } else if (interactiveEl) {
        setCursorType('hover');
      } else if (isText || isImage) {
        setCursorType('invert');
      } else {
        setCursorType('default');
      }
    };
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  // Completely return null if on mobile to clear the DOM and prevent any motion processing
  if (isTouchDevice) return null;

  // Cursor Variants
  const variants = {
    default: {
      width: 24,
      height: 24,
      backgroundColor: 'transparent',
      borderColor: 'rgba(26, 26, 26, 0.3)',
      borderWidth: '1px',
    },
    hover: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(26, 26, 26, 0.03)',
      borderColor: 'rgba(26, 26, 26, 0.8)',
      borderWidth: '1px',
    },
    click: {
      width: 20,
      height: 20,
      backgroundColor: '#1A1A1A',
      borderColor: '#1A1A1A',
      borderWidth: '1px',
      scale: 0.9
    },
    text: {
      width: 60,
      height: 60,
      backgroundColor: '#1A1A1A',
      borderColor: '#1A1A1A',
      borderWidth: '1px',
    },
    invert: {
      width: 50,
      height: 50,
      backgroundColor: 'transparent',
      borderColor: 'rgba(26, 26, 26, 0.1)',
      borderWidth: '0.5px',
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none hidden lg:block relative">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Main Dot Pointer */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              style={{
                x: mouseX,
                y: mouseY,
                translateX: '-50%',
                translateY: '-50%',
              }}
              className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#1A1A1A] rounded-full z-20"
            />

            {/* Elastic Trailer Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                backdropFilter: cursorType === 'invert' ? 'invert(100%)' : 'none',
                ...variants[cursorType]
              }}
              exit={{ opacity: 0, scale: 0 }}
              className="fixed top-0 left-0 rounded-full flex items-center justify-center overflow-hidden z-10 will-change-transform"
              style={{
                x: trailX,
                y: trailY,
                translateX: '-50%',
                translateY: '-50%',
              }}
              transition={{ 
                type: 'spring', 
                damping: 30, 
                stiffness: 250, 
                mass: 0.5,
                opacity: { duration: 0.2 }
              }}
            >
              <AnimatePresence>
                {cursorType === 'text' && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-[10px] font-bold tracking-[0.25em] text-[#F8F5F2] uppercase"
                  >
                    {cursorText}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomCursor;

