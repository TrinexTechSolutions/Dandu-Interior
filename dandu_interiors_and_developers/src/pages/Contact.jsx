import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2, ChevronDown } from 'lucide-react';

const Contact = () => {
  const heroRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const [heroOffset, setHeroOffset] = React.useState(0);
  const [isCardMode, setIsCardMode] = React.useState(true);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyLocation: "",
    propertyType: "",
    requirement: "",
    customLocation: "",
  });

  const [toast, setToast] = useState({ show: false, message: "" });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: "",
  });

  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 500], [0, -320]);
  const scaleRange = useTransform(scrollY, [0, 500], [1, 1.05]);
  const bouncyY = useSpring(yRange, { stiffness: 160, damping: 15 });
  const bouncyScale = useSpring(scaleRange, { stiffness: 160, damping: 15 });

  React.useEffect(() => {
    const updateHeight = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const navHeight = document.querySelector('nav')?.offsetHeight || 80;
        setHeroOffset(rect.height + navHeight + 40); // 40px buffer
      }
    };

    const handleScroll = () => {
      if (contentRef.current) {
        const top = contentRef.current.getBoundingClientRect().top;
        const navHeight = document.querySelector('nav')?.offsetHeight || 80;
        setIsCardMode(top > navHeight);
      }
    };

    updateHeight();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateHeight);
    window.addEventListener('load', updateHeight);

    // Refresh after a short delay to catch final layout
    const timer = setTimeout(updateHeight, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('load', updateHeight);
      clearTimeout(timer);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: "" });
    setToast({ show: false, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: false, message: "" });

        if (formData.propertyLocation === 'Hyderabad' || formData.propertyLocation === 'Bapatla') {
          setToast({
            show: true,
            message: "Your request has been received. Our team will contact you shortly."
          });
        } else {
          setToast({
            show: true,
            message: "Currently, we don't provide services in that location. We have noted your request."
          });
        }

        // Send Lead event to GA4
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', {
            'event_category': 'form',
            'event_label': 'Contact Form',
            'value': 1
          });
          console.log('GA4 Tracked: Lead Generation (Contact Form)');
        }

        setFormData({
          name: "", phone: "", email: "", propertyLocation: "", propertyType: "", requirement: "", customLocation: ""
        });
      } else {
        const errorData = await response.json();
        console.error("Brevo API Error:", errorData);
        setStatus({
          submitting: false,
          submitted: false,
          error: true,
          message: errorData.message || "Unable to send your message right now."
        });
        setToast({
          show: true,
          message: errorData.message || "Oops! Something went wrong while sending your request."
        });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus({ submitting: false, submitted: false, error: true, message: "An error occurred." });
      setToast({ show: true, message: "Network error. Please check your connection and try again." });
    } finally {
      setTimeout(() => setToast({ show: false, message: "" }), 6000);
    }
  };

  const marqueeText = "Let's Build Your Dream Space. ";

  return (
    <div className="bg-[#F8F5F2] min-h-screen relative font-sans overflow-x-hidden">

      {/* Monumental Marquee Hero Section - FIXED */}
      <section
        className={`fixed top-0 left-0 w-full flex items-center bg-[#F8F5F2] select-none pt-2 md:pt-4 z-0 transition-opacity duration-300 ${isCardMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ height: heroOffset ? `${heroOffset}px` : '50vh' }}
      >
        <motion.div
          ref={heroRef}
          style={{ y: bouncyY, scale: bouncyScale }}
          className="w-full overflow-hidden whitespace-nowrap flex py-4"
        >
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex items-center"
          >
            <h1 className="text-[15vh] md:text-[25vh] font-light tracking-tighter text-[#1A1A1A] leading-none pr-12">
              {marqueeText}
            </h1>
            <h1 className="text-[15vh] md:text-[25vh] font-light tracking-tighter text-[#1A1A1A] leading-none pr-12">
              {marqueeText}
            </h1>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content Sections - Sliding OVER the fixed header */}
      <div
        id="contact-content"
        ref={contentRef}
        className="relative z-10 transition-all duration-300 ease-out"
        style={{ marginTop: heroOffset ? `${heroOffset}px` : '50vh' }}
      >

        {/* Section 1: Minimalist Contact Form */}
        <section className="bg-[#F8F5F2] py-10 lg:py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">

              {/* Left Side: Contact Info & Intent */}
              <div className="flex flex-col justify-start space-y-12">
                <div>
                  <h2 className="text-5xl md:text-7xl font-medium text-[#37302F] mb-8 tracking-tighter leading-none">
                    Let's <span className="font-serif italic text-[#37302F]/70">Connect</span>
                  </h2>
                  <p className="text-gray-500 text-xl md:text-2xl leading-relaxed max-w-2xl font-light mb-10">
                    Have a vision for your dream space? From bespoke luxury interiors to innovative architectural designs, we're here to bring your ideas to life with precision and passion. Reach out and let's create something extraordinary together.
                  </p>
                </div>

                <div className="space-y-10">
                  <div className="flex items-center gap-6 group">
                    <div className="text-[#1A1A1A] group-hover:text-[#1A1A1A] transition-colors duration-300">
                      <Phone size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mb-2">Call Us</p>
                      <a 
                        href={`tel:+${import.meta.env.VITE_WHATSAPP_NUMBER || '919866166612'}`} 
                        onClick={() => {
                          if (typeof window.gtag === 'function') {
                            window.gtag('event', 'phone_call_click', {
                              'event_category': 'contact',
                              'event_label': 'Contact Page Phone'
                            });
                            console.log('GA4 Tracked: Phone Click (Contact Page)');
                          }
                        }}
                        className="text-2xl md:text-3xl font-light text-[#1A1A1A] tracking-tighter hover:opacity-70 transition-opacity"
                      >
                        +{import.meta.env.VITE_WHATSAPP_NUMBER || '919866166612'}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="text-[#1A1A1A] group-hover:text-[#1A1A1A] transition-colors duration-300">
                      <Mail size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mb-2">Email Us</p>
                      <p className="text-xl md:text-2xl font-light text-[#1A1A1A] tracking-tighter break-all">danduinteriordesigns@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Re-styled Form */}
              <div className="bg-[#F8F5F2] p-8 md:p-14 rounded-[20px] border border-[#37302F]/40">
                <h2 className="text-4xl font-medium text-[#37302F] tracking-tighter mb-12 leading-none">
                  Start a <span className="font-serif italic text-[#37302F]/70">Conversation</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 ml-1">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Ex: John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border border-[#37302F]/40 rounded-xl py-4 px-5 focus:border-[#37302F]/80 focus:ring-1 focus:ring-[#37302F]/20 outline-none transition-all text-sm font-medium placeholder:text-black/30 text-[#37302F]"
                      />
                    </div>
                    <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 ml-1">WhatsApp Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border border-[#37302F]/40 rounded-xl py-4 px-5 focus:border-[#37302F]/80 focus:ring-1 focus:ring-[#37302F]/20 outline-none transition-all text-sm font-medium placeholder:text-black/30 text-[#37302F]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="hello@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border border-[#37302F]/40 rounded-xl py-4 px-5 focus:border-[#37302F]/80 focus:ring-1 focus:ring-[#37302F]/20 outline-none transition-all text-sm font-medium placeholder:text-black/30 text-[#37302F]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 ml-1">Location</label>
                      <div className="relative">
                        <select
                          name="propertyLocation"
                          value={formData.propertyLocation}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent border border-[#37302F]/40 rounded-xl py-4 px-5 focus:border-[#37302F]/80 focus:ring-1 focus:ring-[#37302F]/20 outline-none transition-all text-sm font-medium appearance-none cursor-pointer text-[#37302F]"
                        >
                          <option value="">Select Location</option>
                          <option value="Hyderabad">Hyderabad</option>
                          <option value="Bapatla">Bapatla</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#37302F]/40">
                          <ChevronDown size={16} />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 ml-1">Property Type</label>
                      <div className="relative">
                        <select
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent border border-[#37302F]/40 rounded-xl py-4 px-5 focus:border-[#37302F]/80 focus:ring-1 focus:ring-[#37302F]/20 outline-none transition-all text-sm font-medium appearance-none cursor-pointer text-[#37302F]"
                        >
                          <option value="">Select Type</option>
                          <option value="Villa">Villa</option>
                          <option value="Apartment">Apartment</option>
                          <option value="Commercial">Commercial</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#37302F]/40">
                          <ChevronDown size={16} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {formData.propertyLocation === 'Other' && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-1.5 focus-within:translate-x-1 transition-transform col-span-1 md:col-span-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 ml-1">Custom Location</label>
                      <input
                        type="text"
                        name="customLocation"
                        placeholder="Please specify your city or area"
                        value={formData.customLocation}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border border-[#37302F]/40 rounded-xl py-4 px-5 focus:border-[#37302F]/80 focus:ring-1 focus:ring-[#37302F]/20 outline-none transition-all text-sm font-medium placeholder:text-black/30 text-[#37302F]"
                      />
                    </motion.div>
                  )}

                  <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 ml-1">Requirement</label>
                    <div className="relative">
                      <select
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border border-[#37302F]/40 rounded-xl py-4 px-5 focus:border-[#37302F]/80 focus:ring-1 focus:ring-[#37302F]/20 outline-none transition-all text-sm font-medium appearance-none cursor-pointer text-[#37302F]"
                      >
                        <option value="">What do you need?</option>
                        <option value="Full Home Interior">Full Home Interior</option>
                        <option value="Renovation">Renovation</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#37302F]/40">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={status.submitting}
                      className="w-full bg-[#1A1A1A] text-white py-5 rounded-2xl font-bold text-sm tracking-[0.3em] uppercase hover:bg-black transition-all duration-300 shadow-2xl hover:shadow-black/20 group flex items-center justify-center gap-4"
                    >
                      {status.submitting ? "Sending..." : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Precise Locations */}
        <section className="bg-[#F8F5F2] py-20 lg:py-32">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
              <h2 className="text-5xl md:text-8xl font-medium text-[#37302F] tracking-tighter leading-none w-full md:w-auto">
                Our <span className="font-serif italic text-[#37302F]/70">Offices</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  city: "Hyderabad",
                  address: "D-603, Vertex Pristine, Nizampet Rd, Jai Bharat Nagar, Nizampet, Hyderabad, Telangana 500090",
                  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.941160351336!2d78.38548457519106!3d17.51030748339832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91168997ec41%3A0x8046221dc9eac15e!2sDandu%20Interiors%20And%20Developers!5e0!3m2!1sen!2sin!4v1712815152000!5m2!1sen!2sin",
                  directLink: "https://www.google.com/maps/search/?api=1&query=Dandu+Interiors+And+Developers+Hyderabad"
                },
                {
                  city: "Bapatla",
                  address: "Dr No: 9-4-12/B, Kamaraju Vari Street, Bapatla, Andhra Pradesh 522101",
                  mapUrl: `https://maps.google.com/maps?q=${encodeURIComponent("Kamaraju Vari Street, Bapatla, Andhra Pradesh 522101")}&t=&z=15&ie=UTF8&iwloc=&output=embed`,
                  directLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Kamaraju Vari Street, Bapatla, Andhra Pradesh 522101")}`
                }
              ].map((loc, idx) => (
                <div key={idx} className="space-y-6">
                  <div className="rounded-[20px] overflow-hidden h-[400px] border border-black/5 relative bg-[#1A1A1A]/5 group/map">
                    {/* The Iframe (Non-interactive) */}
                    <iframe
                      title={`${loc.city} Office Map`}
                      src={loc.mapUrl}
                      width="100%"
                      height="100%"
                      className="border-0 relative z-10 pointer-events-none"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>

                    {/* Interactive Overlay with "Open in Maps" Button */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/5 opacity-0 group-hover/map:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 pointer-events-auto transform translate-y-4 group-hover/map:translate-y-0 transition-transform duration-500">
                        <MapPin size={16} className="text-[#1A1A1A]" />
                        <a 
                          href={loc.directLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A]"
                        >
                          Open in Maps
                        </a>
                      </div>
                    </div>

                    {/* Mobile/Static Persistent Button */}
                    <div className="absolute bottom-6 right-6 z-30 lg:hidden">
                      <a 
                        href={loc.directLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-[8px] font-bold tracking-[0.1em] uppercase text-[#1A1A1A] border border-black/5"
                      >
                        <MapPin size={12} /> Open
                      </a>
                    </div>
                  </div>
                  <div className="px-2">
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{loc.city}</h3>
                    <p className="text-gray-500 leading-relaxed">{loc.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, x: 50, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 50, y: 0 }}
            className="fixed top-24 right-4 md:right-8 bg-black text-[#F8F5F2] px-6 py-4 rounded-xl shadow-2xl z-[100] flex items-center gap-4 max-w-sm border border-white/10"
          >
            <CheckCircle2 className="text-[#F8F5F2] shrink-0" size={24} />
            <p className="text-sm font-light leading-snug tracking-wide">{toast.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Contact;
