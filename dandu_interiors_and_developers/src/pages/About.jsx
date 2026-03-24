import React, { useEffect, useState } from 'react';
import CallToAction from '../components/CallToAction';
import { ArrowRight } from 'lucide-react';
import { useScroll, useTransform, motion } from 'framer-motion';

const About = () => {
  const [hoveredValue, setHoveredValue] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      id: '01',
      title: 'Integrity',
      desc: 'Honest pricing and transparent processes. We stand by our word from blueprint to handover.',
      img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '02',
      title: 'Passion',
      desc: 'We love what we do, and it reflects in the meticulous, obsessive details.',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '03',
      title: 'Excellence',
      desc: 'Settling for "good enough" is never in our vocabulary. Perfection is the baseline.',
      img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '04',
      title: 'Client-First',
      desc: 'Your vision drives our direction. We exist to serve and continuously exceed expectations.',
      img: 'https://images.unsplash.com/photo-1510629681534-11029c9df37c?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="bg-[#F8F5F2] min-h-screen text-[#37302F] selection:bg-[#37302F] selection:text-[#F8F5F2] font-sans overflow-hidden">
      
      {/* 1. Editorial Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-[1600px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end relative z-10">
          
          <div className="lg:col-span-7 xl:col-span-8 z-10">
            <span className="text-[#37302F]/60 text-xs font-bold tracking-[0.3em] uppercase mb-8 block">Dandu Interiors & Developers</span>
            <h1 className="text-[5rem] sm:text-8xl md:text-[9rem] lg:text-[10rem] xl:text-[12rem] font-medium leading-[0.8] tracking-tighter mb-10 -ml-2">
              The <br/> <span className="font-serif italic text-[#37302F]/70 pr-4 block lg:inline">Studio.</span>
            </h1>
            <p className="text-xl md:text-3xl font-light text-[#37302F]/70 max-w-xl leading-relaxed">
              We don't just draft blueprints; we curate feelings. Transforming raw geometry into enduring, breathing architecture.
            </p>
          </div>

          <div className="lg:col-span-5 xl:col-span-4 relative h-[60vh] lg:h-[75vh] w-full overflow-hidden filter grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" 
               alt="Hero Architecture" 
               className="w-full h-full object-cover object-center absolute inset-0 transform hover:scale-105 transition-transform duration-1000"
             />
             {/* Decorative Structural lines overlay */}
             <div className="absolute inset-0 border border-white/20 m-4 pointer-events-none"></div>
          </div>
        </div>
        
        {/* Abstract Background Typography */}
        <div className="absolute top-32 right-0 text-[15vw] font-black text-[#37302F]/5 select-none pointer-events-none leading-none -z-10 tracking-tighter">
          DESIGN
        </div>
      </section>

      {/* Breakline */}
      <div className="w-full border-t border-[#37302F]/10"></div>

      {/* 2. The Manifesto (Oversized Scroll) */}
      <section className="py-24 md:py-48 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.3] text-[#37302F] tracking-tight">
            "Founded on a singular uncompromising premise: the spaces we inhabit should profoundly elevate the human experience. We blend timeless elegance with strict functional utility to forge lifelong relationships."
          </h2>
        </div>
      </section>

      {/* Breakline */}
      <div className="w-full border-t border-[#37302F]/10"></div>

      {/* 3. The Principal (Founder Profile) */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Portrait */}
          <div className="lg:col-span-5 h-[60vh] md:h-[80vh] w-full relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" 
              alt="D. Ramakrishna - Founder" 
              className="w-full h-full object-cover grayscale contrast-125 transform group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-8 left-8 text-white text-xs tracking-widest font-bold uppercase mix-blend-screen flex items-center gap-3">
              <span className="w-8 h-px bg-white block"></span> Founder & Director
            </div>
          </div>

          {/* Minimalist Data */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full py-0 lg:py-8">
            <div>
              <h3 className="text-5xl md:text-7xl font-serif italic text-[#37302F] mb-16 tracking-tight">D. Ramakrishna</h3>
              
              <div className="border-t border-[#37302F]/10 py-10">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#37302F]/40 block mb-6">Philosophy</span>
                <p className="text-2xl md:text-4xl font-light leading-[1.4] tracking-tight">
                  "Architecture is fundamentally an act of optimism. Every line we draw is a commitment to a better, more intentional future for our clients."
                </p>
              </div>

              <div className="border-t border-b border-[#37302F]/10 py-10">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#37302F]/40 block mb-6">Expertise Focus</span>
                <div className="flex flex-wrap gap-3 text-xs md:text-sm uppercase tracking-widest font-bold text-[#37302F]">
                  <span className="px-5 py-3 border border-[#37302F]/20 rounded-full hover:bg-[#37302F] hover:text-[#F8F5F2] transition-colors cursor-default">Residential Luxury</span>
                  <span className="px-5 py-3 border border-[#37302F]/20 rounded-full hover:bg-[#37302F] hover:text-[#F8F5F2] transition-colors cursor-default">Commercial Architecture</span>
                  <span className="px-5 py-3 border border-[#37302F]/20 rounded-full hover:bg-[#37302F] hover:text-[#F8F5F2] transition-colors cursor-default">Spatial Planning</span>
                  <span className="px-5 py-3 border border-[#37302F]/20 rounded-full hover:bg-[#37302F] hover:text-[#F8F5F2] transition-colors cursor-default">Execution & Built</span>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-32 relative">
               <span className="text-[20vw] lg:text-[180px] font-medium leading-none text-[#37302F]/5 select-none -ml-2 lg:-ml-4 tracking-tighter block">
                 Vision.
               </span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. The Practice (Interactive Vertical Index) */}
      <section className="pt-24 pb-32 md:pt-40 md:pb-48 bg-[#1A1A1A] text-[#F8F5F2] px-6 md:px-12 relative overflow-hidden">
         {/* Floating Hover Image Generator */}
         {hoveredValue && (
           <div className="hidden lg:block fixed top-1/2 left-1/2 -translate-y-1/2 w-[35vw] h-[65vh] pointer-events-none z-50 transition-opacity duration-500 ease-out shadow-2xl animate-fade-in mix-blend-lighten opacity-80">
             <img 
               src={coreValues.find(v => v.id === hoveredValue)?.img} 
               alt="Core Value Preview" 
               className="w-full h-full object-cover filter grayscale sepia-[0.2]"
             />
           </div>
         )}

         <div className="max-w-[1600px] mx-auto relative z-10">
            <div className="mb-24 md:mb-40 flex justify-between items-end border-b border-white/20 pb-12">
              <div>
                <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-[#37302F]/60 mb-8 flex items-center gap-4">
                  <span className="w-12 h-px bg-[#37302F]/40 block"></span> Our Practice
                </h2>
                <h3 className="text-5xl md:text-7xl lg:text-[7rem] font-light tracking-tighter leading-[0.9]">
                  The <span className="font-serif italic text-[#37302F]/70">Foundation.</span>
                </h3>
              </div>
            </div>

            <div className="flex flex-col border-b border-white/20 relative z-10">
              {coreValues.map((value) => (
                <div 
                  key={value.id}
                  className="group flex flex-col lg:flex-row lg:items-center justify-between border-t border-white/20 py-12 lg:py-20 transition-all duration-700 hover:bg-[#F8F5F2] hover:text-[#1A1A1A] cursor-crosshair px-6 lg:px-12 -mx-6 lg:-mx-12"
                  onMouseEnter={() => setHoveredValue(value.id)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  <div className="flex items-start lg:items-center gap-8 lg:gap-16 mb-8 lg:mb-0">
                    <span className="text-xl md:text-3xl font-bold tracking-widest text-[#37302F]/40 group-hover:text-[#37302F]/60 transition-colors">
                      {value.id}
                    </span>
                    <h4 className="text-4xl md:text-6xl lg:text-[5rem] font-medium tracking-tighter group-hover:translate-x-8 transition-transform duration-700 ease-out">
                      {value.title}
                    </h4>
                  </div>
                  <div className="lg:w-1/3 xl:w-1/4">
                    <p className="text-lg lg:text-xl font-light text-white/50 group-hover:text-[#1A1A1A] transition-colors duration-700 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 5. Statement & Call To Action */}
      <section className="bg-[#F8F5F2]">
        <div className="py-32 md:py-48 text-center px-6 relative overflow-hidden flex flex-col items-center border-b border-[#37302F]/10">
          <div className="max-w-[1400px] mx-auto relative z-10 w-full">
            <h2 className="text-[3rem] sm:text-6xl md:text-8xl lg:text-[10rem] font-sans text-[#37302F] tracking-tighter font-light leading-[0.85] text-left md:text-center">
              One Team.<br/> <span className="text-[#37302F]/40 italic font-serif">All Solutions.</span> <br/>
              <span className="font-bold text-[#37302F]/80 tracking-tighter block mt-8 md:mt-12 text-[4rem] sm:text-7xl md:text-9xl lg:text-[12rem] text-left md:text-right">Built on Trust.</span>
            </h2>
          </div>
        </div>
        
        {/* Global CTA */}
        <CallToAction />
      </section>
    </div>
  );
};

export default About;
