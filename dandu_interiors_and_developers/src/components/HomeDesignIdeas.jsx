import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { designIdeas } from '../data/designIdeas';
import { useModal } from '../context/ModalContext';

const HomeDesignIdeas = () => {
  const navigate = useNavigate();
  const { openIdeaDrawer } = useModal();
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleIdeaClick = (e, idea) => {
    const isMobile = windowWidth < 1024; // Matching Home.jsx mobile breakpoint
    if (isMobile) {
      e.preventDefault();
      const id = idea.title.toLowerCase().replace(/[\s,]+/g, '-');
      openIdeaDrawer(id);
    }
  };

  // We take exactly 6 items for our special masonry grid
  const displayIdeas = designIdeas.slice(0, 6);

  // Desktop Grid Classes (Original Masonry)
  const desktopGridClasses = [
    "lg:col-span-1 lg:row-span-2 lg:aspect-auto", // Item 1 (Tall Left)
    "lg:col-span-2 lg:row-span-1 lg:aspect-auto", // Item 2 (Top middle wide)
    "lg:col-span-1 lg:row-span-1 lg:aspect-auto", // Item 3 (Top right small)
    "lg:col-span-1 lg:row-span-1 lg:aspect-auto", // Item 4 (Bottom right smalls)
    "lg:col-span-1 lg:row-span-1 lg:aspect-auto", // Item 5
    "lg:col-span-1 lg:row-span-1 lg:aspect-auto"  // Item 6
  ];

  // Mobile Rhythmic Layout (1 Rectangle - 2 Squares - 2 Squares - 1 Rectangle)
  const mobileGridClasses = [
    "col-span-2 aspect-video lg:aspect-auto", // Item 1: Rectangle (Wide)
    "col-span-1 aspect-square lg:aspect-auto", // Item 2: Square
    "col-span-1 aspect-square lg:aspect-auto", // Item 3: Square
    "col-span-1 aspect-square lg:aspect-auto", // Item 4: Square
    "col-span-1 aspect-square lg:aspect-auto", // Item 5: Square
    "col-span-2 aspect-video lg:aspect-auto"  // Item 6: Rectangle (Wide Closing)
  ];

  return (
    <SectionWrapper>
      <div className="relative mb-20 flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-[#1A1A1A] text-center mb-4 leading-none">
          Design <span className="font-serif italic text-black/30">Ideas</span>
        </h2>
        <div className="w-20 h-[1px] bg-black/10"></div>
        <Link to="/design-ideas" className="mt-8 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A] hover:bg-black hover:text-white px-6 py-2 rounded-full border border-black/5 transition-all">
          Explore All <ChevronRight size={14} />
        </Link>
      </div>

      <div className="relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:auto-rows-[250px] gap-4">
          {displayIdeas.map((idea, idx) => (
            <Link 
              to={`/design-ideas/${idea.title.toLowerCase().replace(/[\s,]+/g, '-')}`} 
              key={idx} 
              onClick={(e) => handleIdeaClick(e, idea)}
              className={`
                group relative overflow-hidden block rounded-xl transition-all duration-700 hover:shadow-2xl
                ${mobileGridClasses[idx]}
                ${desktopGridClasses[idx]}
              `}
              data-cursor-text="VIEW"
            >
              <img 
                src={idea.image} 
                alt={idea.title} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              
              {/* Immersive Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Content Overlay */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8">
                <h3 className="text-white text-xl md:text-2xl lg:text-4xl font-light tracking-tighter leading-none drop-shadow-lg transition-all duration-500 group-hover:tracking-normal group-hover:scale-[1.02] origin-left">
                  {idea.title.split(' ')[0]} <br />
                  <span className="font-serif italic text-white/40 group-hover:text-white/70 transition-colors duration-500">
                    {idea.title.split(' ').slice(1).join(' ')}
                  </span>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HomeDesignIdeas;

