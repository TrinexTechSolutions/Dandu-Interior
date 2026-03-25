import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { designIdeas } from '../data/designIdeas';

const HomeDesignIdeas = () => {
  // We take exactly 6 items for our special masonry grid
  const displayIdeas = designIdeas.slice(0, 6);

  // Define responsive grid classes to match the asymmetrical layout from the user's screenshot
  // Total of 4 columns on large screens.
  // 1: Left tall (1 col, 2 row)
  // 2: Top middle wide (2 col, 1 row)
  // 3: Top right small (1 col, 1 row)
  // 4, 5, 6: Bottom right smalls (1 col, 1 row each)
  const gridClasses = [
    "lg:col-span-1 lg:row-span-2 md:col-span-2 md:row-span-1 col-span-1 aspect-square lg:aspect-auto", // Item 1
    "lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-1 aspect-video lg:aspect-auto", // Item 2
    "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 aspect-square lg:aspect-auto", // Item 3
    "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 aspect-square lg:aspect-auto", // Item 4
    "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 aspect-square lg:aspect-auto", // Item 5
    "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 aspect-square lg:aspect-auto"  // Item 6
  ];

  return (
    <SectionWrapper>
      <div className="relative mb-16 flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-[#1A1A1A] text-center mb-4 leading-none">
          Design <span className="font-serif italic text-black/30">Ideas</span>
        </h2>
        <div className="w-20 h-[1px] bg-black/10"></div>
        <Link to="/design-ideas" className="mt-8 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A] hover:bg-black hover:text-white px-6 py-2 rounded-full border border-black/5 transition-all">
          Explore All <ChevronRight size={14} />
        </Link>
      </div>

      {/* Asymmetric CSS Grid matching the user's screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[250px] gap-4">
        {displayIdeas.map((idea, idx) => (
          <Link 
            to={`/design-ideas/${idea.title.toLowerCase().replace(/\s+/g, '-')}`} 
            key={idx} 
            className={`group relative overflow-hidden block rounded-xl ${gridClasses[idx]}`}
            data-cursor-text="VIEW"
          >
            <img 
              src={idea.image} 
              alt={idea.title} 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Title Text positioned exactly as in screenshot */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-2xl md:text-3xl font-light tracking-tighter leading-none drop-shadow-md">
                {idea.title.split(' ')[0]} <br />
                <span className="font-serif italic text-white/40">{idea.title.split(' ').slice(1).join(' ')}</span>
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default HomeDesignIdeas;
