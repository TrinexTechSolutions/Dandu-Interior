import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { designIdeas } from '../data/designIdeas';
import { MoveRight } from 'lucide-react';

const DesignIdeas = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#1A1A1A] text-white pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Home Interior Designs</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Explore handpicked design themes for every corner of your home.</p>
      </div>

      <SectionWrapper bgClass="bg-[#F8F5F2]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {designIdeas.map((idea, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover aspect-square shadow-sm">
              <img 
                src={idea.image} 
                alt={idea.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6">
                <span className="text-[#C49A45] font-bold text-sm mb-1 block uppercase tracking-wider">{idea.count}</span>
                <h3 className="text-white text-xl font-bold mb-0">{idea.title}</h3>
                
                <div className="flex items-center gap-2 text-[#C49A45] text-sm font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  Explore Gallery <MoveRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
      
      {/* CTA Inline */}
      <SectionWrapper>
        <div className="bg-[#1A1A1A] rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#C49A45]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#C49A45]/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Found something you like?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 relative z-10">
            Let our expert designers customize these ideas to fit your space perfectly. Book a free consultation today.
          </p>
          <a href="/get-quote" className="inline-block bg-[#C49A45] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#1A1A1A] transition-colors relative z-10">
            Book Free Consultation
          </a>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default DesignIdeas;
