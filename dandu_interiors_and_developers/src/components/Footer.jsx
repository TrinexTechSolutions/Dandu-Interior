import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import brandLogo from '../assets/logos_and_bg_images/dandu_logo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#37302F] text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center">
              <img src={brandLogo} alt="Dandu Interiors & Developers" className="h-20 w-auto bg-white/90 p-2 rounded-xl" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Furnish your life with style. We construct, we maintain, we refurbish, we care. One team, all solutions, built on trust.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C49A45] hover:text-white transition-colors text-gray-400">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C49A45] hover:text-white transition-colors text-gray-400">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C49A45] hover:text-white transition-colors text-gray-400">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C49A45] hover:text-white transition-colors text-gray-400">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#C49A45] rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-gray-400 hover:text-[#C49A45] transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span> About Us</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-[#C49A45] transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span> Projects Gallery</Link></li>
              <li><Link to="/design-ideas" className="text-gray-400 hover:text-[#C49A45] transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span> Design Ideas</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#C49A45] transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span> Contact Us</Link></li>
              <li><Link to="/get-quote" className="text-gray-400 hover:text-[#C49A45] transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span> Get a Quote</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Core Services
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#C49A45] rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services/interior-design" className="text-gray-400 hover:text-[#C49A45] transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span> Interior Design</Link></li>
              <li><Link to="/services/renovation" className="text-gray-400 hover:text-[#C49A45] transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span> Home Renovation</Link></li>
              <li><Link to="/services/masonry" className="text-gray-400 hover:text-[#C49A45] transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span> Masonry Works</Link></li>
              <li><Link to="/services/painting" className="text-gray-400 hover:text-[#C49A45] transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span> Professional Painting</Link></li>
              <li><Link to="/services" className="text-[#C49A45] hover:text-white transition-colors text-sm font-medium mt-2 block">View all services &rarr;</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#C49A45] rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4 text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#C49A45] transition-colors text-[#C49A45] group-hover:text-white">
                  <MapPin size={18} />
                </div>
                <span className="text-sm pt-2">D-603, Vertex Pristine, Nizampet Road, Hyderabad.</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#C49A45] transition-colors text-[#C49A45] group-hover:text-white">
                  <Phone size={18} />
                </div>
                <a href="tel:+919866166612" className="text-sm">+91 9866166612</a>
              </li>
              <li className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#C49A45] transition-colors text-[#C49A45] group-hover:text-white">
                  <Mail size={18} />
                </div>
                <a href="mailto:danduinteriordesigns@gmail.com" className="text-sm">danduinteriordesigns@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Dandu Interiors. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-[#C49A45] text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-[#C49A45] text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
