import React, { useEffect, useState } from 'react';
import CallToAction from '../components/CallToAction';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FounderImg from '../assets/about_page_images/Founder_img_3.webp';
import heroArchitectureImg from '../assets/About/hero_architecture.webp';
import structuralIntegrityImg from '../assets/About/structural_integrity.webp';
import obsessiveDetailImg from '../assets/About/obsessive_detail.webp';
import engineeringMasteryImg from '../assets/About/engineering_mastery.webp';
import visionaryReachImg from '../assets/About/visionary_reach.webp';
import designerShowcaseImg from '../assets/about_page_images/Nikhil_designer_img.png';
import SEO from '../components/SEO';

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
      img: structuralIntegrityImg
    },
    {
      id: '02',
      title: 'Obsessive Detail',
      desc: 'Our passion is reflected in the meticulous, microscopic details of every joint, tile, and light fixture.',
      img: obsessiveDetailImg
    },
    {
      id: '03',
      title: 'Engineering Mastery',
      desc: 'Settling for "good enough" is never in our vocabulary. Technical perfection is our absolute baseline.',
      img: engineeringMasteryImg
    },
    {
      id: '04',
      title: 'Visionary Reach',
      desc: 'Your aspirations, engineered. We exist to translate your dreams into technically sound, beautifully realized realities.',
      img: visionaryReachImg
    }
  ];

  return (
    <>
      <SEO
        title="Interior Design Excellence in Hyderabad & Bapatla"
        description="Dandu Interiors & Developers blends civil engineering precision with premium interior design. Leading interior designers serving Hyderabad and Bapatla with obsessive quality."
        keywords="About Dandu Interiors, Interior Design Firm Hyderabad, Civil Engineering Bapatla, Premium Home Renovations, D. Anudeep Founder, Nikhil Designer"
      />
      <div className="bg-[#F8F5F2] min-h-screen text-[#37302F] selection:bg-[#37302F] selection:text-[#F8F5F2] font-sans overflow-hidden">

        {/* 1. Editorial Hero */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-24 px-6 md:px-12 max-w-[1600px] mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch relative z-10 w-full">

            <div className="lg:col-span-7 xl:col-span-8 z-10">
              <span className="text-[#37302F]/60 text-xs font-bold tracking-[0.3em] uppercase mb-4 md:mb-8 block">Dandu Interiors & Developers</span>
              <h1 className="text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[9rem] font-medium leading-[0.9] tracking-tighter mb-6 md:mb-8">
                Our <br /> <span className="font-serif italic text-[#37302F]/70 pr-4 block lg:inline">Practice.</span>
              </h1>
              <p className="text-base md:text-2xl lg:text-4xl font-light text-[#37302F] max-w-4xl leading-relaxed">
                We blend the strength and precision of civil engineering
                with elegant, thoughtfully crafted interiors
                to create spaces that not only look exceptional
                but are built to last for generations.
              </p>
            </div>

            <div className="lg:col-span-5 xl:col-span-4 relative h-[60vw] md:h-[50vw] lg:h-full w-full overflow-hidden filter grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
              <img
                src={heroArchitectureImg}
                alt="Architectural Precision and Structural Civil Works by Dandu Interiors"
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
              "Where engineering meets architectural art. We blend technical precision with creative context to craft spaces that balance form, function, and feeling, forging foundations that are as structurally sound as they are aesthetically timeless."
            </h2>
          </div>
        </section>

        {/* Breakline Removed */}

        {/* 3. The Principal (Founder Profile) */}
        <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 lg:gap-24">

            {/* Portrait - Matching Content Height */}
            <div className="xl:col-span-5 w-full relative overflow-hidden bg-white">
              <div className="relative w-full aspect-[4/5] xl:aspect-auto xl:h-full overflow-hidden">
                <img
                  src={FounderImg}
                  alt="D. Anudeep - Founder and Principal Engineer of Dandu Interiors Hyderabad & Bapatla"
                  className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8 text-white text-xs tracking-widest font-bold uppercase mix-blend-screen flex items-center gap-3">
                  <span className="w-8 h-px bg-white block"></span> Founder & Director
                </div>
              </div>
            </div>

            {/* Minimalist Data */}
            <div className="xl:col-span-7 flex flex-col py-0 xl:py-8">
              <div>
                <h3 className="text-5xl md:text-7xl font-serif italic text-[#37302F] mb-16 tracking-tight">D. Anudeep</h3>

                <div className="py-10">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#37302F]/40 block mb-6">Philosophy</span>
                  <p className="text-2xl md:text-3xl font-light leading-[1.4] tracking-tight">
                    " To deliver high-quality construction and interior services through timely execution, reliability, and teamwork—bringing our clients dream homes to life. "
                  </p>
                </div>

                <div className="py-10">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#37302F]/40 block mb-6">Expertise Focus</span>
                  {/* Tablet/Desktop: clean editorial list in three columns only on desktop */}
                  <div className="hidden lg:grid lg:grid-cols-3 gap-x-10 gap-y-10 text-sm uppercase tracking-widest font-bold text-[#37302F]">
                    {['Civil Engineering', 'Structural Integrity', 'Luxury Interiors', 'Full-Scale Renovations', 'Turnkey Solutions'].map(tag => (
                      <div key={tag} className="flex items-center gap-4 group cursor-default transition-all duration-500">
                        <span className="w-2 h-[1px] bg-[#37302F]/20 group-hover:w-8 group-hover:bg-[#37302F] transition-all duration-700 shrink-0"></span>
                        <span className="group-hover:text-[#37302F]/60 transition-colors whitespace-nowrap">{tag}</span>
                      </div>
                    ))}
                  </div>
                  {/* Mobile/Tablet: clean stacked divider list */}
                  <div className="flex flex-col lg:hidden divide-y divide-[#37302F]/10">
                    {['Civil Engineering', 'Structural Integrity', 'Luxury Interiors', 'Full-Scale Renovations', 'Turnkey Solutions'].map(tag => (
                      <span key={tag} className="py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#37302F]">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-24">
              <div className="xl:col-span-8 order-2 xl:order-1 flex flex-col py-2">
                <div className="max-w-2xl">
                  <div>
                    <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-[#37302F]/60 mb-4 flex items-center gap-4">
                      <span className="w-8 h-px bg-[#37302F]/30 block"></span> Meet Our Designer
                    </h2>

                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif italic tracking-tight text-[#37302F] mb-2">
                      Ar. T. Nikhileswar
                    </h3>
                    <p className="text-[#37302F]/40 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                      Registered Architect
                    </p>

                    <p className="text-lg md:text-xl font-light leading-snug text-[#37302F] max-w-2xl mb-5">
                      Dedicated to creating thoughtful, functional, and timeless spaces. We specialize in residential, commercial, and real estate projects, blending innovation with practicality to transform ideas into architectural excellence.
                    </p>

                    <div className="space-y-6 pt-6 border-t border-[#37302F]/5">
                      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#37302F]/40 block">Design Philosophy</span>
                      <p className="text-xl md:text-2xl font-light leading-relaxed tracking-tight text-[#37302F]">
                        "At Dandu, we believe every space tells a story. Our approach combines creativity, context, and technology to craft environments that inspire and endure. From private homes to large-scale developments, we design spaces that balance form, function, and feeling."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-6 pt-4 border-t border-[#37302F]/10">
                  <div className="border border-[#37302F]/10 p-4">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#37302F]/45 mb-1">Experience</p>
                    <p className="text-xl md:text-2xl font-light text-[#37302F]">4+ Years</p>
                  </div>
                  <div className="border border-[#37302F]/10 p-4">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#37302F]/45 mb-1">Projects</p>
                    <p className="text-xl md:text-2xl font-light text-[#37302F]">50+ Spaces</p>
                  </div>
                  <div className="border border-[#37302F]/10 p-4">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#37302F]/45 mb-1">Role</p>
                    <p className="text-xl md:text-2xl font-light text-[#37302F]">Architect and interior designer</p>
                  </div>
                </div>
              </div>

              <div className="xl:col-span-4 order-1 xl:order-2">
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-white">
                  <img
                    src={designerShowcaseImg}
                    alt="Nikhil - Lead Interior Designer at Dandu Interiors & Developers"
                    className="absolute inset-0 w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 text-white text-[10px] md:text-xs tracking-widest font-bold uppercase mix-blend-screen flex items-center gap-3">
                    <span className="w-8 h-px bg-white block"></span> Lead Designer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. The Practice (Interactive Vertical Index) */}
        <section className="pt-16 pb-24 md:pt-24 md:pb-32 bg-[#1A1A1A] text-[#F8F5F2] px-6 md:px-12 relative overflow-hidden">
          {/* Floating Hover Image Generator */}
          {hoveredValue && (
            <div className="hidden lg:block fixed top-1/2 left-1/2 -translate-y-1/2 w-[35vw] h-[65vh] pointer-events-none z-50 transition-opacity duration-500 ease-out shadow-2xl animate-fade-in mix-blend-lighten opacity-80">
              <img
                src={coreValues.find(v => v.id === hoveredValue)?.img}
                alt={`Dandu Interiors Core Value: ${coreValues.find(v => v.id === hoveredValue)?.title} Illustration`}
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
                    className={`foundation-step-card group flex flex-col lg:flex-row lg:items-center justify-between py-12 lg:py-20 transition-all duration-700 lg:cursor-crosshair cursor-default px-6 lg:px-12 -mx-6 lg:-mx-12 ${isActive ? 'bg-[#F8F5F2] text-[#1A1A1A]' : 'lg:hover:bg-[#F8F5F2] lg:hover:text-[#1A1A1A]'}`}
                    onMouseEnter={() => {
                      if (window.innerWidth >= 1024) setHoveredValue(value.id);
                    }}
                    onMouseLeave={() => {
                      if (window.innerWidth >= 1024) setHoveredValue(null);
                    }}
                  >
                    <div className="flex items-start lg:items-center gap-8 lg:gap-16 mb-8 lg:mb-0">
                      <span className={`text-xl md:text-3xl font-bold tracking-widest transition-colors ${isActive ? 'text-[#37302F]/60' : 'text-[#37302F]/40 lg:group-hover:text-[#37302F]/60'}`}>
                        {value.id}
                      </span>
                      <h4 className={`text-4xl md:text-5xl lg:text-[5rem] font-medium tracking-tighter transition-transform duration-700 ease-out ${isActive ? 'translate-x-8' : 'lg:group-hover:translate-x-8'}`}>
                        {value.title}
                      </h4>
                    </div>
                    <div className="lg:w-1/3 xl:w-1/4">
                      <p className={`text-lg lg:text-xl font-light transition-colors duration-700 leading-relaxed ${isActive ? 'text-[#1A1A1A]' : 'text-white/50 lg:group-hover:text-[#1A1A1A]'}`}>
                        {value.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. Statement & Call To Action */}
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
    </>
  );
};

export default About;
