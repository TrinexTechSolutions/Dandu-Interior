import React, { useEffect } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { X, ClipboardList, UploadCloud, ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { useModal } from '../context/ModalContext';

const QuoteModal = () => {
  const { isQuoteModalOpen, closeQuoteModal } = useModal();
  const dragControls = useDragControls();
  const [phoneError, setPhoneError] = React.useState('');

  // Prevent background scrolling when modal is open
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isQuoteModalOpen) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
    } else {
      html.style.overflow = 'unset';
      body.style.overflow = 'unset';
    }
    return () => {
      html.style.overflow = 'unset';
      body.style.overflow = 'unset';
    };
  }, [isQuoteModalOpen]);

  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    customLocation: '',
    serviceType: '',
    budget: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');

      if (digitsOnly.length > 10) {
        setPhoneError('Enter valid phone number');
      } else {
        setPhoneError('');
      }

      setFormData(prev => ({ ...prev, phone: digitsOnly.slice(0, 10) }));
    } else if (name === 'modal_budget') {
      setFormData(prev => ({ ...prev, budget: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleServiceChange = (e) => {
    const nextService = e.target.value;
    setFormData(prev => ({
      ...prev,
      serviceType: nextService,
      budget: nextService === 'Interior Works' ? prev.budget : ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      setPhoneError('Enter valid phone number');
      return;
    }

    const resolvedLocation = formData.location === 'Other'
      ? formData.customLocation
      : formData.location;

    // Prepare API Payload
    const payload = {
      ...formData,
      location: resolvedLocation,
      budget: formData.serviceType === 'Interior Works' ? formData.budget : '',
      source: 'quote'
    };

    // Trigger Lead capture (Wait for completion to prevent cancellation)
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      console.log('CRM Sync Result:', data);
    } catch (err) {
      console.error('Lead Capture Error:', err);
    }

    // Build WhatsApp Message
    const message = `*New Quote Request from Dandu Interior Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || 'Not provided'}%0A` +
      `*Location:* ${resolvedLocation || 'Not provided'}%0A` +
      `*Service:* ${formData.serviceType || 'Not provided'}%0A` +
      `*Budget:* ${formData.serviceType === 'Interior Works' ? (formData.budget || 'Not provided') : 'Not applicable'}`;

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "919866166612";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Send Lead event to GA4
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        'event_category': 'form',
        'event_label': 'Quote Modal',
        'value': 1
      });
    }

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    closeQuoteModal();
  };

  return (
    <AnimatePresence>
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[150] flex items-end md:items-center justify-center" data-lenis-prevent>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeQuoteModal}
          />

          {/* Modal/Drawer Container */}
          <motion.div
            initial={{ y: '100%', opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0.5 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-4xl h-[92dvh] md:h-auto md:max-h-[85vh] bg-[#F8F5F2] rounded-t-[32px] md:rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col md:flex-row m-0 md:m-4"
            drag="y"
            dragControls={dragControls}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100 || info.velocity.y > 500) {
                closeQuoteModal();
              }
            }}
          >

            {/* Handle Bar (Mobile Only) */}
            <div
              className="w-full flex md:hidden justify-center pt-4 pb-2 cursor-grab active:cursor-grabbing touch-none"
              onPointerDown={(e) => dragControls.start(e)}
            >
              <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
            </div>

            {/* Info Sidebar (Desktop Only) */}
            <div className="hidden md:flex bg-[#1A1A1A] p-10 text-white w-[33%] flex-col justify-between relative overflow-hidden">
              <div className="absolute top-[-5%] right-[-5%] text-[15rem] font-serif italic text-white/[0.03] pointer-events-none select-none">
                Q
              </div>

              <div className="relative z-10">
                <div className="mb-8">
                  <ClipboardList size={32} strokeWidth={1} className="text-white/40" />
                </div>
                <h2 className="text-4xl font-light tracking-tighter leading-[0.9] text-white mb-6">
                  Request <br />
                  <span className="font-serif italic text-white/30">A Quote</span>
                </h2>
                <p className="text-white/50 text-[12px] font-light leading-relaxed max-w-[180px]">
                  Our estimation team will review your requirements and get back to you within 24 hours.
                </p>
              </div>

              <div className="relative z-10 border-t border-white/5 pt-8">
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/30 block mb-3">Direct Inquiry</span>
                <a 
                  href={`tel:+${import.meta.env.VITE_WHATSAPP_NUMBER || '919866166612'}`} 
                  onClick={() => {
                    if (typeof window.gtag === 'function') {
                      window.gtag('event', 'phone_call_click', {
                        'event_category': 'contact',
                        'event_label': 'Quote Modal Phone'
                      });
                      console.log('GA4 Tracked: Phone Click (Quote Modal)');
                    }
                  }}
                  className="text-xl font-light tracking-tighter text-white hover:text-white/70 transition-colors"
                >
                  +{import.meta.env.VITE_WHATSAPP_NUMBER || '919866166612'}
                </a>
              </div>
            </div>

            {/* Form Content */}
            <div className="w-full md:w-[67%] bg-[#F8F5F2] flex flex-col h-full overflow-hidden" data-lenis-prevent>
              <form onSubmit={handleSubmit} className="flex flex-col h-full overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 sticky top-0 bg-[#F8F5F2] z-20">
                  <h2 className="text-[10px] font-bold text-[#1A1A1A] tracking-[0.3em] uppercase">Request A Quote</h2>
                  <button
                    onClick={closeQuoteModal}
                    className="p-2 hover:bg-black/5 rounded-full transition-colors text-black"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex-grow overflow-y-auto p-5 md:p-10 hide-scrollbar space-y-4 md:space-y-7">

                {/* Form Section: Personal Details */}
                <div className="space-y-2.5 md:space-y-4">
                  <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-[#1A1A1A] block">Personal Details</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-6">
                    <div className="space-y-1 focus-within:translate-x-1 transition-transform">
                      <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-black/40 ml-1">Full Name *</label>
                      <input name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-transparent border border-[#37302F]/40 rounded-lg p-3 md:p-3.5 text-xs text-[#37302F] focus:border-[#37302F]/80 focus:ring-1 focus:ring-[#37302F]/20 outline-none transition-all placeholder:text-black/30" placeholder="Enter your name" required />
                    </div>
                    <div className="space-y-1 focus-within:translate-x-1 transition-transform">
                      <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-black/40 ml-1">Phone Number *</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} type="tel" inputMode="numeric" maxLength={10} className={`w-full bg-transparent border rounded-lg p-3 md:p-3.5 text-xs text-[#37302F] outline-none transition-all placeholder:text-black/30 ${phoneError ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-200' : 'border-[#37302F]/40 focus:border-[#37302F]/80 focus:ring-1 focus:ring-[#37302F]/20'}`} placeholder="Enter your number" required />
                      {phoneError && <p className="text-[11px] text-red-600 ml-1">{phoneError}</p>}
                    </div>
                  </div>
                </div>

                {/* Form Section: Project Scope */}
                <div className="space-y-2.5 md:space-y-4">
                  <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-[#1A1A1A] block">Project Scope</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-6">
                    <div className="space-y-1 focus-within:translate-x-1 transition-transform">
                      <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-black/40 ml-1">Email Address</label>
                      <input name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-transparent border border-[#37302F]/40 rounded-lg p-3 md:p-3.5 text-xs text-[#37302F] focus:border-[#37302F]/80 focus:ring-1 focus:ring-[#37302F]/20 outline-none transition-all placeholder:text-black/30" placeholder="hello@example.com" />
                    </div>
                    <div className="space-y-1 focus-within:translate-x-1 transition-transform">
                      <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-black/40 ml-1">Location *</label>
                      <div className="relative">
                        <select name="location" value={formData.location} onChange={handleChange} className="w-full bg-transparent border border-[#37302F]/40 rounded-lg p-3 md:p-3.5 text-xs text-[#37302F] appearance-none focus:border-[#37302F]/80 focus:ring-1 focus:ring-[#37302F]/20 outline-none transition-all cursor-pointer" required>
                          <option value="">Select location</option>
                          <option value="Hyderabad">Hyderabad</option>
                          <option value="Bapatla">Bapatla</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-black/20">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {formData.location === 'Other' && (
                    <div className="space-y-1 focus-within:translate-x-1 transition-transform">
                      <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-black/40 ml-1">Enter Location *</label>
                      <input
                        name="customLocation"
                        value={formData.customLocation}
                        onChange={handleChange}
                        type="text"
                        className="w-full bg-transparent border border-[#37302F]/40 rounded-lg p-3 md:p-3.5 text-xs text-[#37302F] focus:border-[#37302F]/80 focus:ring-1 focus:ring-[#37302F]/20 outline-none transition-all placeholder:text-black/30"
                        placeholder="Enter your location"
                        required={formData.location === 'Other'}
                      />
                    </div>
                  )}

                  <div className="space-y-1 focus-within:translate-x-1 transition-transform">
                    <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-black/40 ml-1">Service Type</label>
                    <div className="relative">
                      <select name="serviceType" value={formData.serviceType} onChange={handleServiceChange} className="w-full bg-transparent border border-[#37302F]/40 rounded-lg p-3 md:p-3.5 text-xs text-[#37302F] appearance-none focus:border-[#37302F]/80 focus:ring-1 focus:ring-[#37302F]/20 outline-none transition-all cursor-pointer" required>
                        <option value="" disabled>Select a theme or service</option>
                        {services.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-black/20">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Section: Budget */}
                {formData.serviceType === 'Interior Works' && (
                  <div className="space-y-2.5 md:space-y-4">
                    <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-[#1A1A1A] block">Estimated Budget</span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
                      {['Under 1L', '1L - 5L', '5L - 15L', '15L+'].map((range, idx) => (
                        <label key={idx} className="relative group cursor-pointer">
                          <input type="radio" name="modal_budget" value={range} checked={formData.budget === range} onChange={handleChange} className="peer absolute opacity-0" required={formData.serviceType === 'Interior Works'} />
                          <div className="bg-transparent border border-[#37302F]/40 peer-checked:border-[#1A1A1A] peer-checked:bg-[#1A1A1A] peer-checked:text-white text-[#37302F] rounded-lg md:rounded-xl p-2.5 md:p-3 text-center transition-all duration-300 group-hover:shadow-lg">
                            <span className="text-[8.5px] font-bold tracking-widest uppercase">{range}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                </div>

                <div className="p-5 md:px-10 md:pb-10 md:pt-4 bg-[#F8F5F2] border-t border-black/5">
                  <button type="submit" className="w-full bg-[#1A1A1A] text-white py-3.5 md:py-4 rounded-xl font-bold text-xs tracking-[0.3em] uppercase hover:bg-black transition-all duration-300 shadow-2xl hover:shadow-black/20 group flex items-center justify-center gap-3">
                    Submit Requirement
                    <ArrowRight size={16} className="translate-x-0 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                  <p className="text-center text-[8px] text-black/20 font-bold tracking-[0.1em] uppercase mt-3">
                    By submitting, you agree to our contact terms.
                  </p>
                </div>
              </form>  
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
