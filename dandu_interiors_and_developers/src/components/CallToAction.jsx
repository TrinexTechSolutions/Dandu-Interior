import React from 'react';
import { useModal } from '../context/ModalContext';

const CallToAction = () => {
  const { openQuoteModal } = useModal();
  
  return (
    <section className="bg-[#C49A45] py-20 px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
      <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
        Contact us today for a free consultation and let's discuss how we can bring your dream project to life.
      </p>
      <button onClick={openQuoteModal} className="bg-[#1A1A1A] hover:bg-black text-white px-10 py-5 rounded-md font-bold text-lg inline-block transition-transform hover:-translate-y-1 shadow-2xl">
        Get Started Now
      </button>
    </section>
  );
};

export default CallToAction;
