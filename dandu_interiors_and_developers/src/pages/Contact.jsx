import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#1A1A1A] text-white pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Get in touch with our team of experts to discuss your next project.</p>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's build something exceptional together.</h2>
            <div className="w-20 h-1 bg-[#C49A45] mb-8"></div>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Whether you have a full architectural plan ready or just a vision in your head, Dandu Interiors is here to help. Reach out to us via phone, email, or by filling out the form.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F8F5F2] text-[#C49A45] rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Office Location</h4>
                  <p className="text-gray-600">D-603, Vertex Pristine,<br/>Nizampet Road, Hyderabad, Telangana.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F8F5F2] text-[#C49A45] rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-gray-600">+91 9866166612</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F8F5F2] text-[#C49A45] rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-gray-600">danduinteriordesigns@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full bg-[#F8F5F2] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#C49A45] outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-[#F8F5F2] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#C49A45] outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-[#F8F5F2] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#C49A45] outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-[#F8F5F2] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#C49A45] outline-none transition-all" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea rows="5" className="w-full bg-[#F8F5F2] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#C49A45] outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="bg-[#1A1A1A] text-white hover:bg-[#C49A45] w-full py-4 rounded-lg font-bold transition-colors mt-2">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </SectionWrapper>

      {/* Map Iframe */}
      <div className="w-full h-[500px] bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2750371465227!2d78.38466631487779!3d17.50269998801121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f56fa6da1d%3A0xc3dc8f5eb23db71a!2sVertex%20Pristine!5e0!3m2!1sen!2sin!4v1683446400000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
