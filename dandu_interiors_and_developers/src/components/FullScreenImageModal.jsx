import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const FullScreenImageModal = ({ isOpen, images = [], initialIndex = 0, onClose, showNavigation = true }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Sync internal index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (typeof document === 'undefined') return null;

  const currentImage = images[currentIndex];
  const total = images.length;

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && currentImage && (
        <motion.div
          key="full-screen-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 sm:p-8 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            type="button"
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-all z-[10002] bg-white/10 p-2 rounded-full backdrop-blur-md border border-white/10 hover:bg-white/20 active:scale-90"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <X size={28} />
          </button>

          {/* Navigation Arrows (Visible only if more than one image and navigation is enabled) */}
          {total > 1 && showNavigation && (
            <>
              <button
                type="button"
                className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all z-[10002] bg-white/5 p-3 sm:p-4 rounded-full backdrop-blur-sm border border-white/5 hover:bg-white/10 active:scale-90"
                onClick={handlePrev}
              >
                <ChevronLeft size={36} />
              </button>
              <button
                type="button"
                className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all z-[10002] bg-white/5 p-3 sm:p-4 rounded-full backdrop-blur-sm border border-white/5 hover:bg-white/10 active:scale-90"
                onClick={handleNext}
              >
                <ChevronRight size={36} />
              </button>
            </>
          )}

          {/* Counter (Visible only if more than one image and navigation is enabled) */}
          {total > 1 && showNavigation && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm font-light tracking-widest z-[10002]">
              {currentIndex + 1} / {total}
            </div>
          )}

          {/* Image Container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="relative w-full h-full flex items-center justify-center p-4 sm:p-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage}
              alt={`Preview ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain select-none shadow-2xl rounded-sm"
              draggable={false}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default FullScreenImageModal;
