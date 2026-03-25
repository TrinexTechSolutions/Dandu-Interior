import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { designIdeas } from '../data/designIdeas';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import { X, ArrowRight } from 'lucide-react';

const DesignIdeaDetail = () => {
  const { id } = useParams();
  
  const idea = designIdeas.find(i => i.title.toLowerCase().replace(/\s+/g, '-') === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
    <div className="bg-white min-h-screen text-gray-900 relative pt-4 md:pt-6 lg:pt-8">
      {/* Permanent Fixed Solid Top Mask for Scrolling Frame Continuity */}
      <div className="fixed top-0 left-0 w-full h-4 md:h-6 lg:h-8 bg-white z-[60] pointer-events-none"></div>

      {/* Deepened Top Screen Corner Masks */}
      <svg className="fixed top-4 md:top-6 lg:top-8 left-0 w-10 h-10 md:w-24 md:h-24 text-white fill-current pointer-events-none z-[60]" viewBox="0 0 24 24">
        <path d="M 0 0 L 24 0 C 10.745 0 0 10.745 0 24 Z" />
      </svg>
      <svg className="fixed top-4 md:top-6 lg:top-8 right-0 w-10 h-10 md:w-24 md:h-24 text-white fill-current pointer-events-none z-[60]" viewBox="0 0 24 24">
        <path d="M 0 0 L 24 0 L 24 24 C 24 10.745 13.255 0 0 0 Z" />
      </svg>

      {/* Transparent Sticky Header */}
      <div className="fixed top-4 md:top-6 lg:top-8 left-0 w-full z-[70] pointer-events-none">
        <div className="w-full bg-transparent h-24 md:h-28 flex items-center justify-between px-8 md:px-16 pointer-events-auto transition-transform duration-300 relative">
          <div className="text-white drop-shadow-md font-extrabold tracking-widest text-sm md:text-base uppercase flex items-center gap-3">
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

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={idea.image} 
          alt={idea.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-16 lg:p-24 max-w-7xl mx-auto w-full">
          <div className="inline-block px-4 py-1 bg-[#1A1A1A] text-white text-sm font-bold uppercase tracking-widest mb-4 w-fit rounded">
            {idea.count}
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white leading-[0.9] tracking-tighter">
            {idea.title}
          </h1>
        </div>
      </div>

      {/* Intro Text */}
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl text-[#1A1A1A] font-light leading-relaxed mb-8">
          Incredible <span className="font-bold">design concepts</span> tailored to elevate your {idea.title.toLowerCase()} aesthetics.
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Explore our handpicked curation of {idea.count.toLowerCase()} specifically crafted for your {idea.title.toLowerCase()}. We blend modern functional utility with timeless premium elegance to make your space completely uniquely yours.
        </p>
      </div>

      {/* Image Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20 md:mb-32">
        <h3 className="text-2xl md:text-3xl font-bold mb-10 text-[#1A1A1A]">Curated Inspiration Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] gap-4 md:gap-6">
          <div className="group relative overflow-hidden rounded-3xl md:col-span-8 row-span-2 shadow-lg">
            <img src={galleryImages[0]} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="group relative overflow-hidden rounded-3xl md:col-span-4 row-span-1 shadow-lg">
            <img src={galleryImages[1]} alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="group relative overflow-hidden rounded-3xl md:col-span-4 row-span-1 shadow-lg">
            <img src={galleryImages[2]} alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="group relative overflow-hidden rounded-3xl md:col-span-6 row-span-1 shadow-lg">
            <img src={galleryImages[3]} alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="group relative overflow-hidden rounded-3xl md:col-span-6 row-span-1 shadow-lg">
            <img src={galleryImages[4]} alt="Gallery 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </div>

      {/* Footer & CTA */}
      <div>
        <CallToAction />
        <Footer />
      </div>

    </div>
  );
};

export default DesignIdeaDetail;
