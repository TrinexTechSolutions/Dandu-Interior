import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import brandLogo from '../assets/logos_and_bg_images/dandu_logo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#F8F5F2] pt-24 pb-12">
      <div className="container-custom px-6 lg:px-12">
        
        {/* Top: Brand & Social */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16 border-b border-white/5 pb-16">
          <Link to="/" className="inline-block">
            <img src={brandLogo} alt="Dandu Interiors" className="h-12 w-auto brightness-200 invert grayscale" />
          </Link>
          
          <div className="flex gap-8">
            {[
              { name: 'Instagram', icon: Instagram },
              { name: 'Facebook', icon: Facebook },
              { name: 'Pinterest', icon: Twitter },
              { name: 'LinkedIn', icon: Linkedin }
            ].map((social) => (
              <a 
                key={social.name}
                href="#" 
                className="text-white/40 hover:text-white transition-colors duration-300"
                aria-label={social.name}
              >
                <social.icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Middle: Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          <div className="lg:col-span-4 flex flex-col gap-6">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/30">Navigation</span>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'About', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Design Ideas', path: '/design-ideas' },
                { name: 'Contact', path: '/contact' },
                { name: 'Services', path: '/services' },
                { name: 'Get Quote', path: '/get-quote' }
              ].map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/30">Primary Services</span>
            <div className="flex flex-col gap-3">
              {[
                'Interior Design',
                'Home Renovation',
                'Masonry Works',
                'Structural Planning'
              ].map((service) => (
                <span key={service} className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/50">
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/30">Contact</span>
            <div className="flex flex-col gap-4">
              <p className="text-[12px] font-light leading-relaxed text-white/50 max-w-[200px]">
                Vertex Pristine, Nizampet Road, Hyderabad.
              </p>
              <div className="flex flex-col gap-2">
                <a href="tel:+919866166612" className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors leading-none">
                  +91 98661 66612
                </a>
                <a href="mailto:danduinteriordesigns@gmail.com" className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors leading-none">
                  danduinteriordesigns@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Legal & Credits */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold tracking-widest uppercase text-white/20">
            &copy; {new Date().getFullYear()} Dandu Interiors <span className="mx-2 opacity-50">/</span> Built with Precision
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-[10px] font-bold tracking-widest uppercase text-white/20 hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold tracking-widest uppercase text-white/20 hover:text-white/50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
