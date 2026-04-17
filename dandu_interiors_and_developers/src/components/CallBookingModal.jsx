import React, { useEffect } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { X, PhoneCall, ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { useModal } from '../context/ModalContext';

const CallBookingModal = () => {
  const { isCallModalOpen, closeCallModal, callService } = useModal();
  const dragControls = useDragControls();
  const serviceOptions = services.map((service) => service.title);
  const [phoneError, setPhoneError] = React.useState('');
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    serviceType: ''
  });

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isCallModalOpen) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
      setFormData({
        name: '',
        phone: '',
        serviceType: callService || ''
      });
      setPhoneError('');
    } else {
      html.style.overflow = 'unset';
      body.style.overflow = 'unset';
    }

    return () => {
      html.style.overflow = 'unset';
      body.style.overflow = 'unset';
    };
  }, [isCallModalOpen, callService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');

      if (digitsOnly.length > 10) {
        setPhoneError('Enter valid phone number');
      } else {
        setPhoneError('');
      }

      setFormData((prev) => ({ ...prev, phone: digitsOnly.slice(0, 10) }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      setPhoneError('Enter valid phone number');
      return;
    }

    // Prepare API Payload
    const payload = {
      ...formData,
      source: 'call'
    };

    // Trigger Lead capture (Wait for completion)
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      console.log('Call CRM Sync Result:', data);
    } catch (err) {
      console.error('Call Lead Capture Error:', err);
    }

    // Build WhatsApp Message
    const message = `*New Call Request from Dandu Interior Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service Needed:* ${formData.serviceType || 'Not provided'}%0A%0A` +
      `I would like to book a call. Please contact me.`;

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919866166612';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    closeCallModal();
  };

  return (
    <AnimatePresence>
      {isCallModalOpen && (
        <div className="fixed inset-0 z-[160] flex items-end md:items-center justify-center" data-lenis-prevent>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeCallModal}
          />

          <motion.div
            initial={{ y: '100%', opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0.5 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-3xl h-[88dvh] md:h-auto md:max-h-[80vh] bg-[#F8F5F2] rounded-t-[32px] md:rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col md:flex-row m-0 md:m-4"
            drag="y"
            dragControls={dragControls}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100 || info.velocity.y > 500) {
                closeCallModal();
              }
            }}
          >
            <div
              className="w-full flex md:hidden justify-center pt-4 pb-2 cursor-grab active:cursor-grabbing touch-none"
              onPointerDown={(e) => dragControls.start(e)}
            >
              <div className="w-12 h-1 bg-gray-200 rounded-full" />
            </div>



            <div className="hidden md:flex bg-[#1A1A1A] p-10 text-white w-[38%] flex-col justify-between relative overflow-hidden">
              <div className="absolute top-[-5%] right-[-5%] text-[15rem] font-serif italic text-white/[0.03] pointer-events-none select-none">
                C
              </div>

              <div className="relative z-10">
                <div className="mb-8">
                  <PhoneCall size={32} strokeWidth={1} className="text-white/40" />
                </div>
                <h2 className="text-4xl font-light tracking-tighter leading-[0.9] text-white mb-6">
                  Book <br />
                  <span className="font-serif italic text-white/30">A Call</span>
                </h2>
                <p className="text-white/50 text-[12px] font-light leading-relaxed max-w-[220px]">
                  Share your details and preferred service. We will open WhatsApp with your call request ready to send.
                </p>
              </div>

              <div className="relative z-10 border-t border-white/5 pt-8">
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/30 block mb-3">Direct Contact</span>
                <a href={`tel:+${import.meta.env.VITE_WHATSAPP_NUMBER || '919866166612'}`} className="text-xl font-light tracking-tighter text-white hover:text-white/70 transition-colors">
                  +{import.meta.env.VITE_WHATSAPP_NUMBER || '919866166612'}
                </a>
              </div>
            </div>

            <div className="w-full md:w-[62%] bg-[#F8F5F2] flex flex-col h-full overflow-hidden" data-lenis-prevent>
              <form onSubmit={handleSubmit} className="flex flex-col h-full overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 sticky top-0 bg-[#F8F5F2] z-20">
                  <h2 className="text-[10px] font-bold text-[#1A1A1A] tracking-[0.3em] uppercase">Book A Call</h2>
                  <button
                    onClick={closeCallModal}
                    className="p-2 hover:bg-black/5 rounded-full transition-colors text-black"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex-grow overflow-y-auto p-5 md:p-10 custom-scrollbar space-y-5 md:space-y-7">
                <div className="space-y-2.5 md:space-y-4">
                  <div className="space-y-1 focus-within:translate-x-1 transition-transform">
                    <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-black/40 ml-1">Full Name *</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      className="w-full bg-transparent border border-[#37302F]/40 rounded-lg p-3 md:p-3.5 text-xs text-[#37302F] focus:border-[#37302F]/80 focus:ring-1 focus:ring-[#37302F]/20 outline-none transition-all placeholder:text-black/30"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="space-y-1 focus-within:translate-x-1 transition-transform">
                    <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-black/40 ml-1">Phone Number *</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      className={`w-full bg-transparent border rounded-lg p-3 md:p-3.5 text-xs text-[#37302F] outline-none transition-all placeholder:text-black/30 ${phoneError ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-200' : 'border-[#37302F]/40 focus:border-[#37302F]/80 focus:ring-1 focus:ring-[#37302F]/20'}`}
                      placeholder="Enter your number"
                      required
                    />
                    {phoneError && <p className="text-[11px] text-red-600 ml-1">{phoneError}</p>}
                  </div>
                </div>

                <div className="space-y-2.5 md:space-y-4">
                  <div className="space-y-1 focus-within:translate-x-1 transition-transform">
                    <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-black/40 ml-1">Select Service *</label>
                    <div className="relative">
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full bg-transparent border border-[#37302F]/40 rounded-lg p-3 md:p-3.5 text-xs text-[#37302F] appearance-none focus:border-[#37302F]/80 focus:ring-1 focus:ring-[#37302F]/20 outline-none transition-all cursor-pointer"
                        required
                      >
                        <option value="" disabled>Select a service</option>
                        {serviceOptions.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-black/20">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>

                </div>

                <div className="p-5 md:px-10 md:pb-10 md:pt-4 bg-[#F8F5F2] border-t border-black/5">
                  <button type="submit" className="w-full bg-[#1A1A1A] text-white py-3.5 md:py-4 rounded-xl font-bold text-xs tracking-[0.3em] uppercase hover:bg-black transition-all duration-300 shadow-2xl hover:shadow-black/20 group flex items-center justify-center gap-3">
                    Proceed Booking
                    <ArrowRight size={16} className="translate-x-0 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CallBookingModal;
