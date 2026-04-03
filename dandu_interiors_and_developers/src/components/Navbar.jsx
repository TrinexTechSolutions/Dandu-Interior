import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import brandLogo from '../assets/logos_and_bg_images/dandu_logo.svg';
import { useModal } from '../context/ModalContext';

const SERVICES = [
  { name: 'Interior Design', path: '/services/interior-design' },
  { name: 'Masonry', path: '/services/masonry' },
  { name: 'Renovation', path: '/services/renovation' },
  { name: 'Office Partitions', path: '/services/office-partitions' },
  { name: 'Painting', path: '/services/painting' },
  { name: 'Electrical', path: '/services/electrical' },
  { name: 'Plumbing', path: '/services/plumbing' },
  { name: 'Handyman', path: '/services/handyman' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const { openQuoteModal, isDetailDrawerOpen } = useModal();
  const navRef = React.useRef(null);
  const dropdownTimeoutRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 250); // Increased grace period to 250ms
  };

  const parallaxPaths = ['/about', '/contact', '/design-ideas', '/projects'];
  const isParallaxPage = parallaxPaths.some(path => location.pathname.startsWith(path));

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-[50] py-3 transition-all duration-500 border-b ${
        isDetailDrawerOpen ? 'backdrop-blur-xl bg-[#F8F5F2]/40 opacity-50 pointer-events-none' : ''
      } ${
        !isDetailDrawerOpen && location.pathname === '/' && !scrolled
          ? 'bg-transparent border-[#37302F]/15'
          : 'bg-[#F8F5F2] border-[#37302F]/5'
      }`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center relative">
          
          {/* Left: Logo */}
          <div className="flex-1 lg:flex-none flex items-center justify-start z-10 relative">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center group py-1">
              <img src={brandLogo} alt="Dandu Interiors & Developers" className="h-10 w-auto transition-opacity" />
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center gap-2 absolute left-1/2 -translate-x-1/2 w-max pointer-events-auto z-20">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' }
            ].map((item) => (
              <NavLink 
                key={item.name}
                to={item.path} 
                end={item.path === '/'}
                className={({ isActive }) => `text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 transition-all duration-300 text-[#37302F] ${
                  isActive 
                  ? 'border-b border-[#37302F]' 
                  : 'border-b border-transparent hover:border-[#37302F]/30'
                }`}
              >
                {item.name}
              </NavLink>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 transition-all duration-300 text-[#37302F] ${
                  location.pathname.startsWith('/services')
                  ? 'border-b border-[#37302F]'
                  : 'border-b border-transparent hover:border-[#37302F]/30'
                }`}
              >
                Services <ChevronDown size={10} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Container with "Bridge" - using 80% top to ensure a thick overlap zone */}
              <div className={`absolute top-[80%] left-1/2 -translate-x-1/2 pt-8 transition-all duration-300 origin-top z-[110] ${servicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                {/* Invisible hover bridge */}
                <div className="absolute top-0 left-0 w-full h-8 cursor-default" />
                <div className="w-[520px] bg-[#F8F5F2] shadow-2xl border border-[#37302F]/10 p-6">
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {SERVICES.map((service, idx) => (
                      <NavLink 
                        key={idx} 
                        to={service.path}
                        className={({ isActive }) => `flex items-center gap-4 p-3 transition-colors group/item text-[#37302F] ${
                          isActive 
                          ? 'bg-[#37302F]/5' 
                          : 'hover:bg-[#37302F]/5'
                        }`}
                      >
                        <span className="font-serif italic text-xs opacity-40">{String(idx + 1).padStart(2, '0')}</span>
                        <span className="font-medium text-[11px] tracking-wider uppercase">{service.name}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {[
              { name: 'Projects', path: '/projects' },
              { name: 'Design Ideas', path: '/design-ideas' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <NavLink 
                key={item.name}
                to={item.path} 
                end={item.path === '/'}
                className={({ isActive }) => `text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 transition-all duration-300 text-[#37302F] ${
                  isActive 
                  ? 'border-b border-[#37302F]' 
                  : 'border-b border-transparent hover:border-[#37302F]/30'
                }`}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Right: Social Icons & Mobile Button */}
          <div className="flex items-center justify-end flex-1 lg:flex-none gap-5 z-10 relative">
            {/* Social Icons - Desktop Only */}
            <div className="hidden lg:flex items-center gap-5">
              <a href="https://wa.me/919866166612" target="_blank" rel="noreferrer" className="text-[#37302F] hover:opacity-70 transition-opacity" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03a11.948 11.948 0 001.597 5.968l-1.612 5.88 6.015-1.578a11.921 11.921 0 005.626 1.424h.005c6.635 0 12.032-5.396 12.035-12.03 0-3.216-1.252-6.241-3.53-8.514" />
                </svg>
              </a>
              <a href="https://www.instagram.com/danduinteriordesigns?igsh=bmtlaTA1bXBndmtq" target="_blank" rel="noopener noreferrer" className="text-[#37302F] hover:opacity-70 transition-opacity" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-[#37302F] hover:opacity-70 transition-opacity" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" stroke="none"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z"/></svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-[#37302F]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-[#F8F5F2] border-t border-[#37302F]/5 shadow-xl transition-all duration-300 origin-top overflow-y-auto ${isOpen ? 'max-h-[calc(100dvh-80px)] py-8 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="w-full px-6 flex flex-col gap-6 pb-12">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' }
          ].map((item) => (
            <NavLink 
              key={item.name}
              to={item.path} 
              end={item.path === '/'}
              onClick={() => setIsOpen(false)} 
              className={({ isActive }) => `w-fit text-[10px] font-bold tracking-[0.3em] uppercase p-2 transition-colors text-[#37302F] ${
                isActive 
                ? 'border-b border-[#37302F]' 
                : 'border-b border-transparent'
              }`}
            >
              {item.name}
            </NavLink>
          ))}
          
          <div className="flex flex-col">
            <button 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex justify-between items-center w-full text-[10px] font-bold tracking-[0.3em] uppercase p-2 text-left transition-colors text-[#37302F] ${
                location.pathname.startsWith('/services')
                ? 'border-b border-[#37302F]'
                : 'border-b border-transparent'
              }`}
            >
              Services
              <ChevronDown size={14} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`flex flex-col overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[600px] mt-4' : 'max-h-0'}`}>
              <div className="pl-4 border-l border-[#37302F]/10 ml-2 py-2 flex flex-col gap-2">
                {SERVICES.map((service, idx) => (
                  <NavLink 
                    key={idx} 
                    to={service.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `text-[10px] font-medium tracking-wider uppercase p-2 transition-colors text-[#37302F] ${
                      isActive 
                      ? 'bg-[#37302F]/5' 
                      : 'hover:bg-[#37302F]/5'
                    }`}
                  >
                    {service.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {[
            { name: 'Projects', path: '/projects' },
            { name: 'Design Ideas', path: '/design-ideas' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <NavLink 
              key={item.name}
              to={item.path} 
              onClick={() => setIsOpen(false)} 
              className={({ isActive }) => `w-fit text-[10px] font-bold tracking-[0.3em] uppercase p-2 transition-colors text-[#37302F] ${
                isActive 
                ? 'border-b border-[#1A1A1A]' 
                : 'border-b border-transparent'
              }`}
            >
              {item.name}
            </NavLink>
          ))}

          {/* Social Icons - Mobile Only */}
          <div className="flex items-center gap-6 mt-4 pt-6 pl-2 border-t border-[#37302F]/10">
            <a href="https://wa.me/919866166612" target="_blank" rel="noreferrer" className="text-[#37302F] hover:opacity-70 transition-opacity" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03a11.948 11.948 0 001.597 5.968l-1.612 5.88 6.015-1.578a11.921 11.921 0 005.626 1.424h.005c6.635 0 12.032-5.396 12.035-12.03 0-3.216-1.252-6.241-3.53-8.514" />
              </svg>
            </a>
            <a href="https://www.instagram.com/danduinteriordesigns?igsh=bmtlaTA1bXBndmtq" target="_blank" rel="noopener noreferrer" className="text-[#37302F] hover:opacity-70 transition-opacity" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="text-[#37302F] hover:opacity-70 transition-opacity" aria-label="Pinterest">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" stroke="none"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
