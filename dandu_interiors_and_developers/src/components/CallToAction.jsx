import React from 'react';
import { useModal } from '../context/ModalContext';

const CallToAction = () => {
  const { openQuoteModal } = useModal();
  
  return (
    <section className="bg-[#F8F5F2] py-20 px-4 text-center">
      <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#1A1A1A] mb-8 leading-none">
        Ready to <span className="font-serif italic text-black/30">Transform</span> Your Space?
      </h2>
      <p className="text-black/50 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10">
        Contact us today for a free consultation and let's discuss how we can bring your dream project to life.
      </p>
      <button onClick={openQuoteModal} className="bg-[#1A1A1A] hover:bg-black text-white px-10 py-5 rounded-2xl font-bold text-sm tracking-[0.2em] uppercase inline-block transition-all hover:shadow-2xl hover:-translate-y-1 shadow-xl">
        Get Started Now
      </button>
    </section>
  );
};

export default CallToAction;
