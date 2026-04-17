import React from 'react';
import { useModal } from '../context/ModalContext';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const { openQuoteModal } = useModal();
  
  return (
    <section className="bg-[#F8F5F2] pt-8 pb-16 lg:pt-12 lg:pb-24 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-8 h-px bg-[#1A1A1A]/20"></span>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#1A1A1A]/30">Serving Hyderabad & Bapatla</span>
          <span className="w-8 h-px bg-[#1A1A1A]/20"></span>
        </div>

        <h2 className="text-[2.8rem] md:text-5xl lg:text-7xl font-sans font-medium tracking-tighter leading-[0.9] text-[#1A1A1A] mb-10">
          READY TO <span className="font-serif italic text-[#1A1A1A]/60">TRANSFORM</span> <br className="hidden md:block" /> YOUR SPACE?
        </h2>
        
        <p className="text-[#1A1A1A]/50 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-14">
          Contact us today for a free consultation and let's discuss how we can bring your dream project to life with precision and luxury.
        </p>

        <div className="flex flex-col items-center gap-6">
          <button 
            onClick={openQuoteModal} 
            className="group relative inline-flex items-center justify-center px-10 py-6 bg-[#1A1A1A] text-white font-bold uppercase tracking-widest text-[11px] rounded-full overflow-hidden transition-all duration-500 hover:bg-black hover:px-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)]"
          >
            <span className="relative z-10">Get Started Now</span>
            <ArrowRight size={18} className="ml-3 transition-transform duration-500 group-hover:translate-x-2" />
          </button>
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/20">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Free Consultation Included
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
