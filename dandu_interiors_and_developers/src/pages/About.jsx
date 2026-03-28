import React, { useEffect, useState } from 'react';
import CallToAction from '../components/CallToAction';
import { ArrowRight } from 'lucide-react';
import { useScroll, useTransform, motion } from 'framer-motion';
import FounderImg from '../assets/about_page_images/Founder_img_3.jpeg';

const About = () => {
  const [hoveredValue, setHoveredValue] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      // Only auto-highlight on mobile/tablet (< 1024px)
      if (window.innerWidth >= 1024) return;

      const stepElements = document.querySelectorAll('.foundation-step-card');
      const centerY = window.innerHeight / 2;
      const triggerZone = window.innerHeight * 0.2; // 20% of screen height as trigger zone
      
      let currentActiveId = null;
      let minDistance = Infinity;

      stepElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - elCenter);

        if (distance < minDistance) {
          minDistance = distance;
          currentActiveId = el.getAttribute('data-id');
        }
      });

      // Only set if card is actually in the center zone
      if (minDistance < triggerZone) {
        setHoveredValue(currentActiveId);
      } else {
        setHoveredValue(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const coreValues = [
    {
      id: '01',
      title: 'Structural Integrity',
      desc: 'Transparent budgets and honest engineering. We stand by our word from the first slab to the final handover.',
      img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '02',
      title: 'Obsessive Detail',
      desc: 'Our passion is reflected in the meticulous, microscopic details of every joint, tile, and light fixture.',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '03',
      title: 'Engineering Mastery',
      desc: 'Settling for "good enough" is never in our vocabulary. Technical perfection is our absolute baseline.',
      img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '04',
      title: 'Visionary Reach',
      desc: 'Your aspirations, engineered. We exist to translate your dreams into technically sound, beautifully realized realities.',
      img: 'https://images.unsplash.com/photo-1510629681534-11029c9df37c?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="bg-[#F8F5F2] min-h-screen text-[#37302F] selection:bg-[#37302F] selection:text-[#F8F5F2] font-sans overflow-hidden">

      {/* 1. Editorial Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-24 px-6 md:px-12 max-w-[1600px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start relative z-10">

          <div className="lg:col-span-7 xl:col-span-8 z-10">
            <span className="text-[#37302F]/60 text-xs font-bold tracking-[0.3em] uppercase mb-4 md:mb-8 block">Dandu Interiors & Developers</span>
            <h1 className="text-[3.5rem] sm:text-6xl md:text-8xl lg:text-[7rem] xl:text-[9rem] font-medium leading-[0.9] tracking-tighter mb-6 md:mb-8">
              Our <br /> <span className="font-serif italic text-[#37302F]/70 pr-4 block lg:inline">Practice.</span>
            </h1>
            <p className="text-base md:text-2xl lg:text-4xl font-light text-[#37302F] max-w-4xl leading-relaxed">
              We blend the strength and precision of civil engineering
              with elegant, thoughtfully crafted interiors
              to create spaces that not only look exceptional
              but are built to last for generations.
            </p>
          </div>

          <div className="lg:col-span-5 xl:col-span-4 relative h-[45vw] max-h-[400px] lg:h-[75vh] lg:max-h-none w-full overflow-hidden filter grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
              alt="Hero Architecture"
              className="w-full h-full object-cover object-center absolute inset-0 transform hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>

        {/* Abstract Background Typography */}
        <div className="absolute top-32 right-0 text-[15vw] font-black text-[#37302F]/5 select-none pointer-events-none leading-none -z-10 tracking-tighter">
          DESIGN
        </div>
      </section>

      {/* Breakline Removed */}

      {/* 2. The Manifesto (Oversized Scroll) */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.3] text-[#37302F] tracking-tight">
            "Founded on the principle that the spaces we inhabit must be masterpieces of both engineering and art. We blend structural integrity with refined luxury to forge lifelong foundations."
          </h2>
        </div>
      </section>

      {/* Breakline Removed */}

      {/* 3. The Principal (Founder Profile) */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Portrait */}
          <div className="lg:col-span-5 h-[60vh] md:h-[80vh] w-full relative overflow-hidden">
            <img
              src={FounderImg}
              alt="D. Anudeep - Founder"
              className="w-full h-full object-cover object-top grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-8 left-8 text-white text-xs tracking-widest font-bold uppercase mix-blend-screen flex items-center gap-3">
              <span className="w-8 h-px bg-white block"></span> Founder & Director
            </div>
          </div>

          {/* Minimalist Data */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full py-0 lg:py-8">
            <div>
              <h3 className="text-5xl md:text-7xl font-serif italic text-[#37302F] mb-16 tracking-tight">D. Anudeep</h3>

              <div className="py-10">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#37302F]/40 block mb-6">Philosophy</span>
                <p className="text-2xl md:text-3xl font-light leading-[1.4] tracking-tight">
                  "As a degreed Civil Engineer, my approach is rooted in structural integrity and technical precision. We provide 360° services—from luxury interior curation and architectural masonry to complex electrical and plumbing systems—ensuring every project is as robust as it is beautiful."
                </p>
              </div>

              <div className="py-10">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#37302F]/40 block mb-6">Expertise Focus</span>
                {/* Desktop: clean editorial list in two lines */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-10 gap-y-10 text-sm uppercase tracking-widest font-bold text-[#37302F]">
                  {['Civil Engineering', 'Structural Integrity', 'Luxury Interiors', 'Full-Scale Renovations', 'Turnkey Solutions'].map(tag => (
                    <div key={tag} className="flex items-center gap-4 group cursor-default transition-all duration-500">
                      <span className="w-2 h-[1px] bg-[#37302F]/20 group-hover:w-8 group-hover:bg-[#37302F] transition-all duration-700 shrink-0"></span>
                      <span className="group-hover:text-[#37302F]/60 transition-colors whitespace-nowrap">{tag}</span>
                    </div>
                  ))}
                </div>
                {/* Mobile: clean stacked divider list */}
                <div className="flex flex-col md:hidden divide-y divide-[#37302F]/10">
                  {['Civil Engineering', 'Structural Integrity', 'Luxury Interiors', 'Full-Scale Renovations', 'Turnkey Solutions'].map(tag => (
                    <span key={tag} className="py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#37302F]">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. The Practice (Interactive Vertical Index) */}
      <section className="pt-16 pb-24 md:pt-24 md:pb-32 bg-[#1A1A1A] text-[#F8F5F2] px-6 md:px-12 relative overflow-hidden">
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
          <div className="mb-24 md:mb-40 flex justify-between items-end pb-12">
            <div>
              <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-[#F8F5F2]/60 mb-8 flex items-center gap-4">
                <span className="w-12 h-px bg-[#F8F5F2]/40 block"></span> Our Practice
              </h2>
              <h3 className="text-5xl md:text-7xl lg:text-[7rem] font-light tracking-tighter leading-[0.9] text-[#F8F5F2]">
                Our <span className="font-serif italic text-[#F8F5F2]/70">Foundation.</span>
              </h3>
            </div>
          </div>

          <div className="flex flex-col relative z-10">
            {coreValues.map((value) => {
              const isActive = hoveredValue === value.id;
              return (
                <div
                  key={value.id}
                  data-id={value.id}
                  className={`foundation-step-card group flex flex-col lg:flex-row lg:items-center justify-between py-12 lg:py-20 transition-all duration-700 cursor-crosshair px-6 lg:px-12 -mx-6 lg:-mx-12 ${isActive ? 'bg-[#F8F5F2] text-[#1A1A1A]' : 'hover:bg-[#F8F5F2] hover:text-[#1A1A1A]'}`}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 1024) setHoveredValue(value.id);
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth >= 1024) setHoveredValue(null);
                  }}
                >
                  <div className="flex items-start lg:items-center gap-8 lg:gap-16 mb-8 lg:mb-0">
                    <span className={`text-xl md:text-3xl font-bold tracking-widest transition-colors ${isActive ? 'text-[#37302F]/60' : 'text-[#37302F]/40 group-hover:text-[#37302F]/60'}`}>
                      {value.id}
                    </span>
                    <h4 className={`text-4xl md:text-6xl lg:text-[5rem] font-medium tracking-tighter transition-transform duration-700 ease-out ${isActive ? 'translate-x-8' : 'group-hover:translate-x-8'}`}>
                      {value.title}
                    </h4>
                  </div>
                  <div className="lg:w-1/3 xl:w-1/4">
                    <p className={`text-lg lg:text-xl font-light transition-colors duration-700 leading-relaxed ${isActive ? 'text-[#1A1A1A]' : 'text-white/50 group-hover:text-[#1A1A1A]'}`}>
                      {value.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Statement & Call To Action */}
      <section className="bg-[#F8F5F2]">
        <div className="pt-16 pb-0 md:py-32 px-6 relative overflow-hidden flex flex-col items-center">
          <div className="max-w-[1400px] mx-auto relative z-10 w-full">
            <h2 className="text-[2.4rem] sm:text-6xl md:text-8xl lg:text-[10rem] font-sans text-[#37302F] tracking-tighter font-light leading-[0.9]">
              <span className="block text-left">One Team.</span>
              <span className="text-[#37302F]/40 italic font-serif block text-center">All Solutions.</span>
              <span className="font-bold text-[#37302F]/80 tracking-tighter block text-[2.6rem] sm:text-7xl md:text-9xl lg:text-[12rem] text-right">Built on Trust.</span>
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
