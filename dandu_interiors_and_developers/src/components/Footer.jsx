import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import brandLogo from '../assets/logos_and_bg_images/dandu_logo.svg';
import { useModal } from '../context/ModalContext';

const Footer = () => {
  const { openQuoteModal } = useModal();
  const trackWhatsAppClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'whatsapp_click', {
        'event_category': 'contact',
        'event_label': 'Footer WhatsApp'
      });
      console.log('GA4 Tracked: WhatsApp Click (Footer)');
    }
  };

  const trackPhoneClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'phone_call_click', {
        'event_category': 'contact',
        'event_label': 'Footer Phone'
      });
      console.log('GA4 Tracked: Phone Click (Footer)');
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#F8F5F2] pt-10 pb-6 relative z-[20]">
      <div className="container-custom px-6 lg:px-12">

        {/* Top: Brand & Social */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-6 border-b border-white/5 pb-6">
          <Link to="/" className="inline-block">
            <img src={brandLogo} alt="Dandu Interiors" className="h-12 w-auto brightness-200 invert grayscale" />
          </Link>

          <div className="flex gap-8">
            {[
              { 
                name: 'WhatsApp', 
                url: `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '919866166612'}`,
                icon: ({ size, ...props }) => (
                  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03a11.948 11.948 0 001.597 5.968l-1.612 5.88 6.015-1.578a11.921 11.921 0 005.626 1.424h.005c6.635 0 12.032-5.396 12.035-12.03 0-3.216-1.252-6.241-3.53-8.514" />
                  </svg>
                )
              },
              { 
                name: 'Instagram', 
                url: 'https://www.instagram.com/danduinteriordesigns?igsh=bmtlaTA1bXBndmtq', 
                icon: Instagram 
              },
              { 
                name: 'Pinterest', 
                url: 'https://pin.it/6mmj6yDoB', 
                icon: ({ size, ...props }) => (
                  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z"/>
                  </svg>
                )
              }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (social.name === 'WhatsApp') trackWhatsAppClick();
                }}
                className="text-white hover:text-white/70 transition-colors duration-300 flex items-center justify-center w-8 h-8"
                aria-label={social.name}
              >
                <social.icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Middle: Grid Restructuring */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-8 items-start">

          {/* Navigation Section */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white">Navigation</span>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: 'About', path: '/about' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Design Ideas', path: '/design-ideas' },
                { name: 'Contact', path: '/contact' },
                { name: 'Services', path: '/services' },
                { name: 'Get Quote', onClick: openQuoteModal }
              ].map((link) => (
                link.onClick ? (
                  <button
                    key={link.name}
                    onClick={link.onClick}
                    className="text-[10px] text-left font-medium tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Primary Services Section */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white">Primary Services</span>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Designs', path: '/services/designs' },
                { name: 'Interior Works', path: '/services/interior-works' },
                { name: 'Civil Works', path: '/services/civil-works' },
                { name: 'Renovation works', path: '/services/renovation-works' },
                { name: 'Building Maintenance', path: '/services/building-maintenance' }
              ].map((service) => (
                <Link 
                  key={service.name} 
                  to={service.path}
                  className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details Full-Width Horizontal Section */}
          <div className="lg:col-span-12 pt-8 border-t border-white/5">
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 items-start">
              
              <div className="flex flex-col gap-4 lg:flex-1">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white">Hyderabad Office</span>
                <p className="text-[13px] font-light leading-relaxed text-white/50 max-w-sm">
                  D-603, Vertex Pristine, Nizampet Road, Hyderabad, Telangana.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:flex-1">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white">Bapatla Office</span>
                <p className="text-[13px] font-light leading-relaxed text-white/50 max-w-sm">
                  Dr No: 9-4-12/B, Kamaraju Vari Street, Bapatla, Andhra Pradesh 522101.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:min-w-[280px]">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white">Direct Contact</span>
                <div className="flex flex-col gap-3">
                  <a 
                    href={`tel:+${import.meta.env.VITE_WHATSAPP_NUMBER || '919866166612'}`} 
                    onClick={trackPhoneClick}
                    className="text-[14px] font-medium tracking-[0.1em] text-white/70 hover:text-white transition-colors leading-none"
                  >
                    +{import.meta.env.VITE_WHATSAPP_NUMBER || '919866166612'}
                  </a>
                  <a href="mailto:danduinteriordesigns@gmail.com" className="text-[14px] font-medium tracking-[0.1em] text-white/70 hover:text-white transition-colors leading-none">
                    danduinteriordesigns@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom: Legal & Credits */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold tracking-widest uppercase text-white/20 text-center md:text-left">
            Developed by{' '}
            <a
              href="https://www.trinextechsolutions.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/50 transition-colors"
            >
              Trinex Tech Solutions
            </a>
            <span className="mx-2 opacity-50">|</span> &copy; {new Date().getFullYear()} Dandu Interiors <span className="mx-2 opacity-50">/</span> Built with Precision
          </p>
          <div className="flex gap-10">
            <Link to="/privacy-policy" className="text-[10px] font-bold tracking-widest uppercase text-white/20 hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-[10px] font-bold tracking-widest uppercase text-white/20 hover:text-white/50 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
