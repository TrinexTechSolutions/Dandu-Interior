import React, { useEffect } from 'react';
import { X, ClipboardList, UploadCloud, ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { useModal } from '../context/ModalContext';

const QuoteModal = () => {
  const { isQuoteModalOpen, closeQuoteModal } = useModal();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isQuoteModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isQuoteModalOpen]);

  if (!isQuoteModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={closeQuoteModal}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[95vh] bg-white rounded-[2rem] shadow-3xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-500">
        
        {/* Close Button */}
        <button 
          onClick={closeQuoteModal}
          className="absolute top-6 right-6 z-20 p-2 bg-black/5 hover:bg-black text-[#1A1A1A] hover:text-white rounded-full transition-all duration-300"
        >
          <X size={20} />
        </button>

        {/* Info Sidebar (Desktop Only) */}
        <div className="hidden md:flex bg-[#1A1A1A] p-12 text-white w-[35%] flex-col justify-between relative overflow-hidden">
          {/* Subtle branding accent */}
          <div className="absolute top-[-10%] right-[-10%] text-[20rem] font-serif italic text-white/[0.03] pointer-events-none select-none">
            Q
          </div>
          
          <div className="relative z-10">
            <div className="mb-12">
              <ClipboardList size={40} strokeWidth={1} className="text-white/40" />
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter leading-[0.9] text-white mb-8">
              Request <br />
              <span className="font-serif italic text-white/30">A Quote</span>
            </h2>
            <p className="text-white/50 text-[13px] font-light leading-relaxed max-w-[220px]">
              Our estimation team will review your requirements and get back to you with a comprehensive proposal within 24 hours.
            </p>
          </div>
          
          <div className="relative z-10 border-t border-white/5 pt-10">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 block mb-4">Direct Inquiry</span>
            <a href="tel:+919866166612" className="text-2xl font-light tracking-tighter text-white hover:text-white/70 transition-colors">
              +91 98661 66612
            </a>
          </div>
        </div>

        {/* Form Content */}
        <div className="w-full md:w-[65%] bg-[#F8F5F2] p-8 md:p-14 overflow-y-auto custom-scrollbar">
          <div className="md:hidden mb-10">
            <h2 className="text-4xl font-light tracking-tighter text-[#1A1A1A] leading-none mb-2">
              Request <span className="font-serif italic text-black/30">A Quote</span>
            </h2>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); closeQuoteModal(); alert('Quote Request Sent!'); }} className="space-y-10">
            
            {/* Form Section: Personal Details */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-black/20 block">01. Personal Details</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 ml-1">Full Name</label>
                  <input type="text" className="w-full bg-white border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-black/10 outline-none transition-shadow placeholder:text-black/10" placeholder="John Doe" required />
                </div>
                <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 ml-1">Phone Number</label>
                  <input type="tel" className="w-full bg-white border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-black/10 outline-none transition-shadow placeholder:text-black/10" placeholder="+91 00000 00000" required />
                </div>
              </div>
            </div>

            {/* Form Section: Project Scope */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-black/20 block">02. Project Scope</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 ml-1">Email Address</label>
                  <input type="email" className="w-full bg-white border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-black/10 outline-none transition-shadow placeholder:text-black/10" placeholder="hello@example.com" />
                </div>
                <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 ml-1">Location</label>
                  <input type="text" className="w-full bg-white border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-black/10 outline-none transition-shadow placeholder:text-black/10" placeholder="City or Landmark" />
                </div>
              </div>
              
              <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 ml-1">Service Type</label>
                <div className="relative">
                  <select className="w-full bg-white border-none rounded-xl p-4 text-sm appearance-none focus:ring-1 focus:ring-black/10 outline-none transition-shadow cursor-pointer" required defaultValue="">
                    <option value="" disabled>Select a theme or service</option>
                    {services.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                    <option value="multiple">Full Project Development</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-black/20">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section: Budget */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-black/20 block">03. Estimated Budget</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['Under 1L', '1L - 5L', '5L - 25L', '25L+'].map((range, idx) => (
                  <label key={idx} className="relative group cursor-pointer">
                    <input type="radio" name="modal_budget" value={range} className="peer absolute opacity-0" />
                    <div className="bg-white border border-transparent peer-checked:border-black peer-checked:bg-black peer-checked:text-white rounded-xl p-4 text-center transition-all duration-300 group-hover:shadow-lg">
                      <span className="text-[10px] font-bold tracking-widest uppercase">{range}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <button type="submit" className="w-full bg-[#1A1A1A] text-white py-5 rounded-2xl font-bold text-sm tracking-[0.3em] uppercase hover:bg-black transition-all duration-300 shadow-2xl hover:shadow-black/20 group flex items-center justify-center gap-4">
                Submit Requirement
                <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <p className="text-center text-[9px] text-black/20 font-bold tracking-[0.1em] uppercase mt-6">
                By submitting, you agree to our contact terms.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
