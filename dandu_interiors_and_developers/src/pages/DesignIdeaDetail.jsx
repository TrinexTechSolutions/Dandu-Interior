import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { designIdeas } from '../data/designIdeas';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import { X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const DesignIdeaDetail = () => {
  const { id } = useParams();
  const { openQuoteModal } = useModal();
  
  const idea = designIdeas.find(i => i.title.toLowerCase().replace(/\s+/g, '-') === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Prevent body scroll when viewing on mobile as a drawer
  useEffect(() => {
    const isMobile = window.innerWidth < 768; // Matching md:hidden logic
    if (isMobile) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!idea) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F5F2]">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Design Idea Not Found</h2>
          <Link to="/design-ideas" className="text-[#1A1A1A] flex items-center justify-center gap-2">
            Back to Ideas <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    );
  }

  // Placeholder images for the gallery since we only have 1 image in data
  const galleryImages = [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1510629681534-11029c9df37c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <div className="bg-white min-h-screen text-gray-900 relative">
      <div className="hidden md:block">
        {/* Transparent Sticky Header (Desktop) */}
        <div className="fixed top-6 lg:top-8 left-0 w-full z-[70] pointer-events-none">
          <div className="w-full bg-transparent h-28 flex items-center justify-between px-16 pointer-events-auto transition-transform duration-300 relative">
            <div className="text-white drop-shadow-md font-extrabold tracking-widest text-base uppercase flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#1A1A1A] shadow-sm"></span>
              {idea.title}
            </div>
            <Link 
              to="/design-ideas" 
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
            alt={idea.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-16 lg:p-24 max-w-7xl mx-auto w-full">
            <div className="inline-block px-4 py-1 bg-[#1A1A1A] text-white text-sm font-bold uppercase tracking-widest mb-4 w-fit rounded">
              {idea.count}
            </div>
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
            Explore our handpicked curation of {idea.count.toLowerCase()} specifically crafted for your {idea.title.toLowerCase()}. We blend modern functional utility with timeless premium elegance to make your space completely uniquely yours.
          </p>
        </div>

        {/* Desktop Image Gallery */}
        <div className="max-w-7xl mx-auto px-8 mb-32">
          <h3 className="text-3xl font-bold mb-10 text-[#1A1A1A]">Curated Inspiration Gallery</h3>
          <div className="grid grid-cols-12 auto-rows-[300px] gap-6">
            <div className="group relative overflow-hidden rounded-3xl col-span-8 row-span-2 shadow-lg">
              <img src={galleryImages[0]} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="group relative overflow-hidden rounded-3xl col-span-4 row-span-1 shadow-lg">
              <img src={galleryImages[1]} alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="group relative overflow-hidden rounded-3xl col-span-4 row-span-1 shadow-lg">
              <img src={galleryImages[2]} alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="group relative overflow-hidden rounded-3xl col-span-6 row-span-1 shadow-lg">
              <img src={galleryImages[3]} alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="group relative overflow-hidden rounded-3xl col-span-6 row-span-1 shadow-lg">
              <img src={galleryImages[4]} alt="Gallery 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>

        <CallToAction />
        <div className="hidden md:block">
          <Footer />
        </div>
      </div>

      {/* Mobile view as a drawer */}
      <div className="md:hidden">
        {/* Drawer Backdrop simulation */}
        <div className="fixed inset-0 bg-black/40 z-[90]"></div>
        
        <motion.div 
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-[#F8F5F2] rounded-t-[32px] max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        >
          {/* Handle Bar */}
          <div className="w-full flex justify-center pt-4 pb-2">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between px-6 pb-4 border-b border-black/5 sticky top-0 bg-[#F8F5F2] z-10">
            <h2 className="text-xs font-bold text-[#1A1A1A] tracking-[0.2em] uppercase">{idea.title}</h2>
            <Link 
              to="/design-ideas" 
              className="p-2 hover:bg-black/5 rounded-full transition-colors text-black"
              aria-label="Close"
            >
              <X size={24} />
            </Link>
          </div>

            {/* Content Area */}
            <div className="overflow-y-auto flex-grow flex flex-col custom-scrollbar scroll-smooth" data-lenis-prevent>
              <div className="pt-8 pb-4 px-4 max-w-7xl mx-auto flex-grow">
                <div className="inline-block px-4 py-1 bg-[#1A1A1A] text-white text-[10px] font-bold uppercase tracking-widest mb-6 w-fit rounded">
                  {idea.count}
                </div>
                <h1 className="text-5xl font-light tracking-tighter text-[#1A1A1A] mb-8 leading-[0.85]">{idea.title}</h1>
                <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                  Explore our handpicked curation of {idea.count.toLowerCase()} specifically crafted for your {idea.title.toLowerCase()}. We blend modern functional utility with timeless premium elegance to make your space completely uniquely yours.
                </p>
                
                {/* Main Image */}
                <div className="w-full h-[40vh] rounded-[2rem] overflow-hidden shadow-lg mt-8 mb-12">
                  <img src={idea.image} alt={idea.title} className="w-full h-full object-cover" />
                </div>

                {/* Mobile Image Gallery Grid (Like Project Detail) */}
                <div className="mb-12">
                  <h2 className="text-3xl text-gray-900 mb-12 font-light">
                    Image <span className="font-bold">Gallery</span>
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-4 auto-rows-[250px]">
                    <div className="group relative overflow-hidden rounded-[2rem] row-span-2 shadow-md">
                      <img src={galleryImages[0]} alt="Gallery 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="group relative overflow-hidden rounded-t-[5rem] rounded-b-[2rem] row-span-1 shadow-md">
                      <img src={galleryImages[1]} alt="Gallery 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="group relative overflow-hidden rounded-[3rem] row-span-1 shadow-md">
                      <img src={galleryImages[2]} alt="Gallery 3" className="w-full h-full object-cover" />
                    </div>
                    <div className="group relative overflow-hidden rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl row-span-1 shadow-md">
                      <img src={galleryImages[3]} alt="Gallery 4" className="w-full h-full object-cover" />
                    </div>
                    <div className="group relative overflow-hidden rounded-[2rem] row-span-1 shadow-md">
                      <img src={galleryImages[4]} alt="Gallery 5" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                <CallToAction />
              </div>

              {/* Sticky Mobile Quote Button (Floating) */}
              <div className="px-4 pb-12 pt-4 sticky bottom-0 z-20 pointer-events-none">
                <button 
                  onClick={openQuoteModal}
                  className="w-full py-4 bg-[#1A1A1A] text-white rounded-2xl font-bold text-sm hover:bg-black/90 transition-all duration-300 shadow-2xl pointer-events-auto"
                >
                  Get Free Quote
                </button>
              </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DesignIdeaDetail;
