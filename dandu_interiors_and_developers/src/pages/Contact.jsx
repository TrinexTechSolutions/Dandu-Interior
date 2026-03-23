import React, { useEffect, useState, useRef } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

// ...
const Contact = () => {
  const [isCardMode, setIsCardMode] = useState(true);
  const contentRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyLocation: "",
    propertyType: "",
    requirement: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: "" });

    // Simulate form submission
    setTimeout(() => {
      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: "Thank you! Your message has been sent successfully.",
      });
      setFormData({
        name: "",
        phone: "",
        propertyLocation: "",
        propertyType: "",
        requirement: ""
      });
    }, 1500);
  };


  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      if (contentRef.current) {
        const top = contentRef.current.getBoundingClientRect().top;
        const navEl = document.querySelector('nav');
        const navHeight = navEl ? navEl.offsetHeight : 0;
        setIsCardMode(top > navHeight);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen pb-0 relative">
      {/* Static Fixed Header Section */}
      <div className={`fixed top-0 left-0 h-[55vh] md:h-[65vh] w-full flex flex-col justify-start overflow-hidden z-0 bg-white pt-24 md:pt-32 transition-opacity duration-300 ${isCardMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="w-full relative px-4 md:px-8">
          <h1 className="text-[14vw] md:text-[11vw] font-semibold tracking-tighter text-[#1A1A1A] leading-none ml-[-0.04em] select-none whitespace-nowrap">
            Contact Us
          </h1>
          <div className="w-full flex flex-col items-end mt-4 md:mt-6">
            <div className="max-w-[280px] md:max-w-sm text-right mb-8">
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed font-semibold tracking-wide">
                Get in touch with our team of experts to discuss your next project.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div 
        ref={contentRef}
        className={`relative z-10 bg-white mt-[50vh] md:mt-[60vh] will-change-transform transition-all duration-500 ease-out ${isCardMode ? 'rounded-t-2xl md:rounded-t-[32px] mx-2 md:mx-6 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100' : 'rounded-t-none mx-0 shadow-none border-transparent'} overflow-hidden`}
      >
        <div className="h-[2vh] md:h-[4vh]"></div>

      <div className="bg-white pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24">
        {/* Contact Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex justify-around items-center gap-8 flex-wrap">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#F8F5F2] text-[#C49A45] rounded-full flex justify-center items-center shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="text-xl mb-1 text-[#C49A45] font-semibold">Call Us</h3>
                <p className="text-lg text-[#1A1A1A] font-medium">+91 9866166612</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#F8F5F2] text-[#C49A45] rounded-full flex justify-center items-center shrink-0">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="text-xl mb-1 text-[#C49A45] font-semibold">Email Us</h3>
                <p className="text-lg text-[#1A1A1A] font-medium">danduinteriordesigns@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Addresses & Maps */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-[#1A1A1A]">Our Locations</h2>

          <div className="flex flex-col gap-16">
            {/* Hyderabad Row */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
              <div className="flex items-start lg:items-center gap-6">
                <div className="w-14 h-14 bg-[#F8F5F2] text-[#C49A45] rounded-full flex justify-center items-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">Registered Office (Hyderabad)</h3>
                  <p className="text-lg leading-relaxed text-gray-600">D-603, Vertex Pristine, Nizampet Road, Hyderabad, Telangana</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 h-[300px]">
                <iframe
                  title="Hyderabad Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2750371465227!2d78.38466631487779!3d17.50269998801121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f56fa6da1d%3A0xc3dc8f5eb23db71a!2sVertex%20Pristine!5e0!3m2!1sen!2sin!4v1683446400000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full"></div>

            {/* Bapatla Row */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
              <div className="flex items-start lg:items-center gap-6">
                <div className="w-14 h-14 bg-[#F8F5F2] text-[#C49A45] rounded-full flex justify-center items-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">Bapatla Address</h3>
                  <p className="text-lg leading-relaxed text-gray-600">Dr No: 9-4-12/B, Kamaraju Vari Street, Bapatla, Andhra Pradesh 522101</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 h-[300px]">
                <iframe
                  title="Bapatla Office Map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent("Kamaraju Vari Street, Bapatla, Andhra Pradesh 522101")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-[#F8F5F2] py-16 lg:py-24 relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A]">Schedule a Free Design Consultation</h2>
              <p className="text-gray-600 text-lg">
                Reach out to us immediately to arrange for a customised quotation from one of our assessors.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#C49A45] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp mobile number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#C49A45] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Where's your property located?</label>
                  <select
                    name="propertyLocation"
                    value={formData.propertyLocation}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#C49A45] focus:border-transparent outline-none transition-all appearance-none"
                  >
                    <option value="">Select…</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bapatla">Bapatla</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Type of property</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#C49A45] focus:border-transparent outline-none transition-all appearance-none"
                  >
                    <option value="">Select…</option>
                    <option value="Villa">Villa</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Interior Design Requirement</label>
                <select
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#C49A45] focus:border-transparent outline-none transition-all appearance-none"
                >
                  <option value="">Select…</option>
                  <option value="Full Home Interior">Full Home Interior</option>
                  <option value="Kitchen Only">Kitchen Only</option>
                  <option value="Living Room Only">Living Room Only</option>
                  <option value="Wardrobes / Storage">Wardrobes / Storage</option>
                  <option value="Renovation">Renovation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {status.submitted && (
                <div className={`p-4 rounded-xl text-center font-medium ${status.error ? "bg-red-50 text-red-600" : "bg-green-50 text-green-700"}`}>
                  {status.message}
                </div>
              )}

              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="bg-[#1A1A1A] hover:bg-[#C49A45] text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors w-full md:w-auto disabled:opacity-70"
                >
                  {status.submitting ? "Processing..." : "Get Free Consultation"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
