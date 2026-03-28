import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { designIdeas } from '../data/designIdeas';

const HomeDesignIdeas = () => {
  // We take exactly 6 items for our special masonry grid
  const displayIdeas = designIdeas.slice(0, 6);
  const scrollRef = React.useRef(null);
  const [isInteracting, setIsInteracting] = React.useState(false);

  // Auto-scroll for mobile
  React.useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let lastTime = performance.now();
    const speed = 0.4;

    const animate = (currentTime) => {
      if (!isInteracting) {
        const deltaTime = currentTime - lastTime;
        scrollContainer.scrollLeft += speed * (deltaTime / 16);

        // Infinite loop logic
        const halfWidth = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= halfWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      lastTime = currentTime;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isInteracting]);

  // Use doubled array for mobile infinite scroll
  const mobileIdeas = [...displayIdeas, ...displayIdeas];

  const gridClasses = [
    "lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 col-span-1", // Item 1
    "lg:col-span-2 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1", // Item 2
    "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1", // Item 3
    "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1", // Item 4
    "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1", // Item 5
    "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1"  // Item 6
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

      <div className="relative group/ideas -mx-4 md:-mx-8 lg:mx-0">
        {/* Side Blur Overlays (Only visible on mobile scroll) */}
        <div className="absolute left-0 inset-y-0 w-8 md:w-20 bg-gradient-to-r from-[#F8F5F2] via-[#F8F5F2]/80 to-transparent backdrop-blur-[2px] z-40 pointer-events-none lg:hidden"></div>
        <div className="absolute right-0 inset-y-0 w-8 md:w-20 bg-gradient-to-l from-[#F8F5F2] via-[#F8F5F2]/80 to-transparent backdrop-blur-[2px] z-40 pointer-events-none lg:hidden"></div>

        <div 
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-4 lg:auto-rows-[250px] overflow-x-auto lg:overflow-visible gap-4 pb-8 px-4 md:px-8 lg:px-0 relative hide-scrollbar"
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onTouchStart={() => setIsInteracting(true)}
          onTouchEnd={() => {
            setTimeout(() => setIsInteracting(false), 1000);
          }}
        >
          {/* On Desktop we use original, on Mobile we use infinite array */}
          {(window.innerWidth >= 1024 ? displayIdeas : mobileIdeas).map((idea, idx) => (
            <Link 
              to={`/design-ideas/${idea.title.toLowerCase().replace(/\s+/g, '-')}`} 
              key={`${idea.title}-${idx}`} 
              className={`group relative overflow-hidden block rounded-xl shrink-0 w-[85vw] md:w-[45vw] lg:w-full aspect-[4/5] lg:aspect-auto ${gridClasses[idx % 6]}`}
              data-cursor-text="VIEW"
            >
              <img 
                src={idea.image} 
                alt={idea.title} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl md:text-3xl font-light tracking-tighter leading-none drop-shadow-md">
                  {idea.title.split(' ')[0]} <br />
                  <span className="font-serif italic text-white/40">{idea.title.split(' ').slice(1).join(' ')}</span>
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
