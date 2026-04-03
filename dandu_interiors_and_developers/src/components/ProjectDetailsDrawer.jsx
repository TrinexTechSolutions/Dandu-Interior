import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { X, MapPin, Tag } from 'lucide-react';
import ScrollToTopButton from './ScrollToTopButton';
import { useModal } from '../context/ModalContext';

const ProjectDetailsDrawer = ({ isOpen, onClose, project }) => {
  const scrollContainerRef = useRef(null);
  const dragControls = useDragControls();
  const { openQuoteFromDrawer } = useModal();

  // Prevent body scroll when drawer is open
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    
    if (isOpen) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
    } else {
      html.style.overflow = 'unset';
      body.style.overflow = 'unset';
    }
    return () => {
      html.style.overflow = 'unset';
      body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && project && (() => {
        const galleryImages = [project.image, ...(project.galleryImages || [])];
        
        return (
          <>
            {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[998] backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[999] bg-[#F8F5F2] rounded-t-[32px] overflow-hidden max-h-[92dvh] flex flex-col shadow-2xl"
            drag="y"
            dragControls={dragControls}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100 || info.velocity.y > 500) {
                onClose();
              }
            }}
          >
            {/* Handle Bar */}
            <div 
              className="w-full flex justify-center pt-4 pb-2 cursor-grab active:cursor-grabbing touch-none"
              onPointerDown={(e) => dragControls.start(e)}
            >
              <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 pb-4 border-b border-black/5 bg-[#F8F5F2]/80 backdrop-blur-md sticky top-0 z-10">
              <h2 className="text-sm font-bold text-[#1A1A1A] tracking-[0.2em] uppercase">{project.title}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Area */}
            <div 
              className="overflow-y-auto flex-1 custom-scrollbar" 
              data-lenis-prevent
            >
              <div className="px-4 md:px-8 py-6 max-w-5xl mx-auto space-y-12">
                
                {/* Hero section */}
                <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-lg border border-black/5">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>

                {/* Description and Title */}
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl lg:text-8xl font-light tracking-tighter text-[#1A1A1A] leading-[0.85]">
                    {project.title.split(' ')[0]} <br />
                    <span className="font-serif italic text-black/30">{project.title.split(' ').slice(1).join(' ')}</span>
                  </h1>
                  <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
                    {project.description} This meticulously crafted space harmonizes aesthetic elegance with functional brilliance, utilizing top-tier materials and bespoke design elements. Every corner has been thoughtfully curated to elevate the everyday experience, bringing a sense of warmth, luxury, and timeless appeal to the environment.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 py-10 border-t border-b border-black/10 relative overflow-hidden">
                  <div className="flex flex-col items-center justify-center text-center space-y-2 relative z-10">
                    <Tag size={20} />
                    <span className="text-xl font-bold text-[#1A1A1A]">{project.category || 'Villa'}</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Category</span>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center text-center space-y-2 relative z-10">
                    <MapPin size={20} />
                    <span className="text-xl font-bold text-[#1A1A1A]">{project.location}</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Location</span>
                  </div>
                </div>

                {/* Photo Gallery Grid */}
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl md:text-3xl font-light tracking-tighter text-[#1A1A1A]">Project <span className="font-serif italic opacity-30">Gallery</span></h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {galleryImages.slice(0, 3).map((img, idx) => (
                      <div 
                        key={idx}
                        className={`group relative overflow-hidden rounded-2xl shadow-sm ${idx === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square'}`}
                      >
                        <img 
                          src={img} 
                          alt={`Gallery ${idx + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Sticky Floating CTA */}
            <div className="p-4 md:p-6 bg-[#F8F5F2] border-t border-black/5 flex items-center justify-between gap-4">
              <div className="hidden sm:block">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Ready to start?</p>
                <p className="text-lg font-bold text-[#1A1A1A]">Get a free quote today</p>
              </div>
              <button 
                onClick={openQuoteFromDrawer}
                className="flex-1 sm:flex-none py-4 px-8 bg-[#1A1A1A] text-white rounded-2xl font-bold hover:bg-black/90 transition-all duration-300 shadow-xl"
              >
                Get free quote
              </button>
            </div>
          </motion.div>
        </>
        );
      })()}
    </AnimatePresence>
  );
};

export default ProjectDetailsDrawer;
