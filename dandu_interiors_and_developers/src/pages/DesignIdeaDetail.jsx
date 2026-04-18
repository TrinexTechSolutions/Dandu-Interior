import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { designIdeas } from '../data/designIdeas';
import { useModal } from '../context/ModalContext';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';
import FullScreenImageModal from '../components/FullScreenImageModal';
import SEO from '../components/SEO';

const DesignIdeaDetail = ({ isDrawer = false, drawerId = null, onClose = null, isOpen = false }) => {
  const { id: routeId } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const id = isDrawer ? drawerId : routeId;
  const { openQuoteFromDrawer, setDetailDrawerOpen } = useModal();
  const dragControls = useDragControls();

  const idea = designIdeas.find(i => i.title.toLowerCase().replace(/[\s,]+/g, '-') === id);

  // If we're on a standalone page, we're effectively "open"
  const isActuallyOpen = isDrawer ? isOpen : true;

  // Handle body scroll for mobile drawer
  useEffect(() => {
    if (isDrawer && isOpen) {
      document.body.style.overflow = 'hidden';
    } else if (isDrawer && !isOpen) {
      document.body.style.overflow = 'unset';
    }

    return () => {
      if (isDrawer) {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isDrawer, isOpen]);

  if (!idea) {
    if (isDrawer) return null; // Safe return for root-level global drawer when no idea is selected

    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center bg-[#F8F5F2]">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Design Idea Not Found</h2>
            <Link to="/design-ideas" className="text-[#1A1A1A] flex items-center justify-center gap-2">
              Back to Ideas <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  const galleryImages = idea.gallery?.length ? idea.gallery : [idea.image];

  const content = (
    <div className={`${isDrawer ? '' : 'bg-[#F8F5F2] min-h-screen'} text-gray-900 relative`}>
      <div className="hidden md:block">
        {/* Transparent Header (Desktop) */}
        <div className="absolute top-6 lg:top-8 left-0 w-full z-[70] pointer-events-none">
          <div className="w-full bg-transparent h-28 flex items-center justify-between px-16 pointer-events-auto transition-transform duration-300 relative">
            <div className="text-white drop-shadow-md font-extrabold tracking-widest text-base uppercase flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#1A1A1A] shadow-sm"></span>
              {idea.title}
            </div>
            <Link
              to="/design-ideas"
              aria-label="Back to Design Ideas"
              className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 shadow-xl group"
            >
              <X size={24} strokeWidth={2.5} className="group-hover:rotate-90 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Desktop Hero Section */}
        <div className="relative h-[70vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src={idea.image}
            alt={`${idea.title} - Luxury Interior Concept - Dandu Interiors Hyderabad & Bapatla`}
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover gpu-accelerated"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-16 lg:p-24 max-w-7xl mx-auto w-full">

            <h1 className="text-8xl lg:text-9xl font-light text-white leading-[0.9] tracking-tighter">
              {idea.title}
            </h1>
          </div>
        </div>

        {/* Desktop Intro Text */}
        <div className="max-w-4xl mx-auto px-8 py-20 text-center flex-col">
          <h2 className="text-4xl text-[#1A1A1A] font-light leading-relaxed mb-8">
            Incredible <span className="font-bold">design concepts</span> tailored to elevate your {idea.title.toLowerCase()} aesthetics.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Explore our handpicked curation of designs specifically crafted for your {idea.title.toLowerCase()}. Available for professional execution in Hyderabad and Bapatla, we blend modern functional utility with timeless premium elegance to make your space completely uniquely yours.
          </p>
        </div>

        {/* Desktop Image Gallery */}
        <div className="max-w-7xl mx-auto px-8 mb-32">
          <h3 className="text-3xl font-bold mb-10 text-[#1A1A1A]">Curated Inspiration Gallery</h3>
          <div className="grid grid-cols-12 auto-rows-[300px] gap-6">
            <div 
              className="group relative overflow-hidden rounded-3xl col-span-8 row-span-2 shadow-lg cursor-pointer"
              onClick={() => setSelectedImageIndex(0)}
            >
              <img src={galleryImages[0]} alt={`${idea.title} Design Inspiration 1 - Dandu Interiors`} decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 gpu-accelerated" />
            </div>
            <div 
              className="group relative overflow-hidden rounded-3xl col-span-4 row-span-1 shadow-lg cursor-pointer"
              onClick={() => setSelectedImageIndex(1)}
            >
              <img src={galleryImages[1]} alt={`${idea.title} Design Inspiration 2 - Dandu Interiors`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div 
              className="group relative overflow-hidden rounded-3xl col-span-4 row-span-1 shadow-lg cursor-pointer"
              onClick={() => setSelectedImageIndex(2)}
            >
              <img src={galleryImages[2]} alt={`${idea.title} Design Inspiration 3 - Dandu Interiors`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div 
              className="group relative overflow-hidden rounded-3xl col-span-6 row-span-1 shadow-lg cursor-pointer"
              onClick={() => setSelectedImageIndex(3)}
            >
              <img src={galleryImages[3]} alt={`${idea.title} Design Inspiration 4 - Dandu Interiors`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div 
              className="group relative overflow-hidden rounded-3xl col-span-6 row-span-1 shadow-lg cursor-pointer"
              onClick={() => setSelectedImageIndex(4)}
            >
              <img src={galleryImages[4]} alt={`${idea.title} Design Inspiration 5 - Dandu Interiors`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
        <CallToAction />
        <Footer />
      </div>

      <div className="md:hidden">
        <AnimatePresence>
          {isActuallyOpen && idea && (
            <>
              {/* Drawer Backdrop with animation to fix the closing glitch */}
              {isDrawer && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/40 z-[998] backdrop-blur-sm"
                  onClick={onClose}
                />
              )}

              <motion.div
                initial={isDrawer ? { y: '100%' } : { opacity: 0 }}
                animate={isDrawer ? { y: 0 } : { opacity: 1 }}
                exit={isDrawer ? { y: '100%' } : { opacity: 0 }}
                transition={{ type: 'spring', damping: 30, stiffness: 220 }}
                className={`${isDrawer ? 'fixed bottom-0 left-0 right-0 z-[999] rounded-t-[32px] max-h-[92dvh] shadow-2xl' : 'min-h-screen relative'} bg-[#F8F5F2] flex flex-col overflow-hidden`}
                drag={isDrawer ? "y" : false}
                dragControls={dragControls}
                dragListener={false}
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={{ top: 0, bottom: 0.5 }}
                onDragEnd={(e, info) => {
                  if (isDrawer && (info.offset.y > 100 || info.velocity.y > 500)) {
                    onClose();
                  }
                }}
              >
                {/* Handle Bar (Only in drawer mode) */}
                {isDrawer && (
                  <div 
                    className="w-full flex justify-center pt-4 pb-2 cursor-grab active:cursor-grabbing touch-none"
                    onPointerDown={(e) => dragControls.start(e)}
                  >
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
                  </div>
                )}

                {/* Header */}
                <div className={`flex items-center justify-between px-6 pb-4 border-b border-black/5 sticky top-0 bg-[#F8F5F2] z-10 ${!isDrawer ? 'pt-6' : ''}`}>
                  <h2 className="text-xs font-bold text-[#1A1A1A] tracking-[0.2em] uppercase">{idea.title} Ideas</h2>
                  <button
                    onClick={isDrawer ? onClose : () => navigate('/design-ideas')}
                    className="p-2 hover:bg-black/5 rounded-full transition-colors text-black"
                    aria-label="Close"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Content Area */}
                <div
                  className="overflow-y-auto flex-grow flex flex-col custom-scrollbar scroll-smooth"
                  data-lenis-prevent
                >
                  <div className="pt-8 pb-4 px-4 max-w-7xl mx-auto flex-grow">

                    <h1 className="text-5xl font-light tracking-tighter text-[#1A1A1A] mb-8 leading-[0.85]">{idea.title}</h1>
                    <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                      Explore our handpicked curation of designs specifically crafted for your {idea.title.toLowerCase()}. Available for expert project execution in Hyderabad and Bapatla, we blend modern functional utility with timeless premium elegance to make your space uniquely yours.
                    </p>

                    {/* Main Image */}
                    <div 
                      className="w-full h-[40vh] rounded-[2rem] overflow-hidden shadow-lg mt-8 mb-12 cursor-pointer"
                      onClick={() => setSelectedImageIndex(0)}
                    >
                      <img src={idea.image} alt={`${idea.title} - Premium Design - Dandu Interiors`} decoding="async" className="w-full h-full object-cover gpu-accelerated" />
                    </div>

                    {/* Mobile Image Gallery Grid */}
                    <div className="mb-12">
                      <h2 className="text-3xl text-gray-900 mb-12 font-light">
                        Image <span className="font-bold">Gallery</span>
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {galleryImages.slice(0, 4).map((img, idx) => (
                          <div
                            key={idx}
                            className="group relative overflow-hidden rounded-2xl shadow-sm aspect-square md:aspect-[4/3] cursor-pointer"
                            onClick={() => setSelectedImageIndex(idx)}
                          >
                            <img
                              src={img}
                              alt={`${idea.title} Gallery Image ${idx + 1}`}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/[0.03] group-hover:bg-transparent transition-colors duration-500" />
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Sticky Mobile Quote Button - Moved outside scroll container for fixed positioning */}
                <div className="p-4 sticky bottom-0 z-20 bg-[#F8F5F2] border-t border-black/5 flex-shrink-0">
                  <button
                    onClick={openQuoteFromDrawer}
                    className="w-full py-4 bg-[#1A1A1A] text-white rounded-2xl font-bold text-sm hover:bg-black/90 transition-all duration-300 shadow-2xl"
                  >
                    Get Free Quote
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  if (isDrawer) return content;

  return (
    <PageTransition>
      <SEO 
        title={`${idea.title} | Premium Design Ideas in Hyderabad & Bapatla`}
        description={`Modern ${idea.title.toLowerCase()} design ideas by Dandu Interiors & Developers. Explore premium ${idea.category.toLowerCase()} concepts and professional execution in Hyderabad and Bapatla.`}
        keywords={`${idea.title}, ${idea.category} Ideas, Interior Designs Hyderabad, Bapatla Home Improvement, Modular Design concepts`}
      />
      {content}
      <FullScreenImageModal
        isOpen={selectedImageIndex !== null}
        images={galleryImages}
        initialIndex={selectedImageIndex || 0}
        onClose={() => setSelectedImageIndex(null)}
      />
    </PageTransition>
  );
};

export default DesignIdeaDetail;

