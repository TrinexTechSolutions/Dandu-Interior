import React, { useState, useMemo } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data/projects';
import { ArrowRight, Filter } from 'lucide-react';

const Projects = () => {
  const quotes = [
    { text: "We treat every project as our own, ensuring meticulous care and unwavering dedication to your vision.", bg: "bg-[#FDF6E3]", text_col: "text-[#8B6E32]", h: 1.3 },
    { text: "Transforming your personal ideas into reality with transparent communication at every step.", bg: "bg-[#EBF4F6]", text_col: "text-[#3B5B66]", h: 1.0 },
    { text: "Your satisfaction is our ultimate masterpiece. We build unbreakable trust before we build walls.", bg: "bg-[#F4EBED]", text_col: "text-[#7A4B54]", h: 1.4 },
    { text: "We don't just design spaces; we craft environments that inspire and elevate your everyday life.", bg: "bg-[#EAF1EA]", text_col: "text-[#3F6340]", h: 1.3 },
    { text: "Every brick laid and every color chosen reflects our commitment to your unique lifestyle.", bg: "bg-[#F3E8FF]", text_col: "text-[#6B21A8]", h: 1.6 },
    { text: "Innovative solutions that blend breathtaking aesthetics with uncompromising architectural integrity.", bg: "bg-[#FFF0F5]", text_col: "text-[#9D174D]", h: 1.0 },
    { text: "We listen intently, act transparently, and deliver beyond your expectations every single time.", bg: "bg-[#ECFDF5]", text_col: "text-[#065F46]", h: 1.4 },
    { text: "Where your imagination sets the blueprint, our seasoned expertise builds the rock-solid foundation.", bg: "bg-[#EFF6FF]", text_col: "text-[#1E40AF]", h: 1.0 }
  ];

  // Memoize the distribution logic so it only runs once
  const finalItems = useMemo(() => {
    const aspectClasses = ['aspect-[4/5]', 'aspect-[2/3]', 'aspect-[3/4]', 'aspect-square', 'aspect-[3/5]'];
    const aspectHeights = [1.25, 1.5, 1.33, 1.0, 1.66];
    const quoteIndices = [1, 5, 10, 13, 14, 19, 22, 25]; 

    const projectItems = projects.map((p, idx) => ({ 
      type: 'project', 
      ...p, 
      itemId: `p-${p.id}`, 
      aspect: aspectClasses[idx % aspectClasses.length], 
      h: aspectHeights[idx % aspectHeights.length] 
    }));

    const flatItems = [];
    let pIdx = 0;
    let qIdx = 0;
    for (let i = 0; i < 28; i++) {
      if (quoteIndices.includes(i) && qIdx < quotes.length) {
        const q = quotes[qIdx++];
        flatItems.push({ type: 'quote', ...q, itemId: `q-${qIdx}`, aspect: q.h === 1.0 ? 'aspect-square' : q.h >= 1.5 ? 'aspect-[2/3]' : q.h >= 1.3 ? 'aspect-[3/4]' : 'aspect-[4/5]' });
      } else if (pIdx < projectItems.length) {
        flatItems.push(projectItems[pIdx++]);
      }
    }

    const columns = Array.from({ length: 4 }, () => []);
    const colHeights = Array(4).fill(0);
    
    flatItems.forEach((item, idx) => {
      const targetIdx = Math.floor(idx / 7);
      if (columns[targetIdx]) {
        columns[targetIdx].push(item);
        colHeights[targetIdx] += item.h;
      }
    });

    const maxHeight = Math.max(...colHeights);
    columns.forEach((col, idx) => {
      const diff = maxHeight - colHeights[idx];
      if (diff > 0.05) {
        col.push({ 
          type: 'filler', 
          itemId: `f-${idx}`, 
          h: diff,
          bg: idx % 2 === 0 ? 'bg-[#FDF6E3]' : 'bg-[#F4EBED]' 
        });
      }
    });

    return columns.flat();
  }, [projects]); // Only recompute if projects data changes

  return (
    <div className="bg-[#FAFAFA]">
      <div className="bg-[#1A1A1A] text-white pt-32 pb-20 px-4 text-center border-b border-white/5">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Projects</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Explore our portfolio of completed masterworks.</p>
      </div>

      <SectionWrapper>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {finalItems.map((item, index) => {
            if (item.type === 'quote') {
              return (
                <div key={item.itemId} className={`break-inside-avoid relative rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 w-full ${item.aspect} ${item.bg} flex flex-col justify-center items-center p-6 sm:p-10 text-center mb-0`}>
                  <span className={`text-6xl absolute -top-1 left-4 ${item.text_col} opacity-[0.1] font-serif leading-none`}>"</span>
                  <p className={`font-medium text-sm md:text-base lg:text-lg leading-relaxed ${item.text_col} relative z-10 font-serif italic line-clamp-4`}>{item.text}</p>
                </div>
              );
            }

            if (item.type === 'filler') {
              return (
                <div key={item.itemId} className={`break-inside-avoid w-full ${item.bg} rounded-3xl opacity-[0.4]`} style={{ aspectRatio: `1 / ${item.h}` }}>
                </div>
              );
            }

            return (
              <div key={item.itemId} className="break-inside-avoid group relative rounded-3xl overflow-hidden bg-white cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 mb-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading={index < 8 ? "eager" : "lazy"}
                  fetchPriority={index < 4 ? "high" : "auto"}
                  className={`w-full ${item.aspect} object-cover transition-transform duration-500 group-hover:scale-110`} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[#C49A45] text-xs font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
                  <h3 className="text-white text-lg md:text-xl font-bold leading-tight mb-1">{item.title}</h3>
                  <div className="flex items-center gap-1.5 text-gray-300 text-xs md:text-sm">
                    <span>📍</span> {item.location}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Projects;
