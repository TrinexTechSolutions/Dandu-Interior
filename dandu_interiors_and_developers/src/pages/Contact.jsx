import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import logo from '../assets/logos_and_bg_images/dandu_logo.svg';

const Contact = () => {
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

  return (
    <div className="bg-white min-h-screen relative">
      
      {/* Spectacular Hero Section */}
      <section className="relative pt-20 md:pt-24 bg-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C49A45]/5 to-transparent pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C49A45]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C49A45]/20 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] leading-[1.1] mb-6">
                Let's Build Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C49A45] to-[#D4AF37]">Dream Space.</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                Whether you have a full architectural plan ready or just a vision in your head, our team of expert designers and engineers are ready to bring it to life.
              </p>
            </div>

            {/* Right Images / Composition */}
            <div className="w-full lg:w-1/2 relative hidden md:block">
              {/* Image without background (Transparent Design) */}
              <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center p-8 group">
                <div className="absolute inset-0 bg-[#C49A45]/5 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-1000 pointer-events-none"></div>
                <img 
                  src={logo} 
                  alt="Decorative Design" 
                  className="w-3/4 h-3/4 object-contain relative z-10 opacity-90 drop-shadow-xl transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

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
  );
};

export default Contact;
