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
  const [navbarOffset, setNavbarOffset] = useState(0);
  const location = useLocation();
  const { openQuoteModal } = useModal();
  const navRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const parallaxPaths = ['/services', '/about', '/contact', '/design-ideas', '/projects'];
      const isParallaxPage = parallaxPaths.some(path => location.pathname.startsWith(path));
      
      if (isParallaxPage && navRef.current) {
        const contentEl = document.getElementById('services-content') || document.querySelector('.will-change-transform');
        if (contentEl) {
          const rect = contentEl.getBoundingClientRect();
          const navHeight = navRef.current.offsetHeight;
          
          if (rect.top <= navHeight) {
            setNavbarOffset(Math.max(0, navHeight - rect.top));
          } else {
            setNavbarOffset(0);
          }
        }
      } else {
        setNavbarOffset(0);
      }
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setNavbarOffset(0);
  }, [location.pathname]);

  const parallaxPaths = ['/services', '/about', '/contact', '/design-ideas', '/projects'];
  const isParallaxPage = parallaxPaths.some(path => location.pathname.startsWith(path));

  return (
    <nav 
      ref={navRef}
      style={{ transform: `translateY(-${navbarOffset}px)` }}
      className={`${isParallaxPage ? 'fixed bg-[#F8F5F2]' : 'relative bg-white'} top-0 left-0 w-full z-50 py-4 transition-colors duration-300`}
    >
      <div className="w-full px-4 lg:px-8">
        <div className="flex justify-between items-center relative">
          
          {/* Left: Logo */}
          <div className="flex-1 lg:flex-none flex items-center justify-start z-10 relative">
            <Link to="/" className="flex items-center group py-1">
              <img src={brandLogo} alt="Dandu Interiors & Developers" className="h-10 w-auto drop-shadow-sm group-hover:opacity-90 transition-opacity" />
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center gap-3 absolute left-1/2 -translate-x-1/2 w-max pointer-events-auto z-20">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => `text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 ${
                isActive 
                ? `bg-[#37302F] ${isParallaxPage ? 'text-[#F8F5F2]' : 'text-white'}` 
                : `text-[#37302F] hover:bg-[#37302F] hover:${isParallaxPage ? 'text-[#F8F5F2]' : 'text-white'}`
              }`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 ${
                isActive 
                ? `bg-[#37302F] ${isParallaxPage ? 'text-[#F8F5F2]' : 'text-white'}` 
                : `text-[#37302F] hover:bg-[#37302F] hover:${isParallaxPage ? 'text-[#F8F5F2]' : 'text-white'}`
              }`}
            >
              About
            </NavLink>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 ${
                  location.pathname.startsWith('/services')
                  ? `bg-[#37302F] ${isParallaxPage ? 'text-[#F8F5F2]' : 'text-white'}`
                  : `text-[#37302F] hover:bg-[#37302F] hover:${isParallaxPage ? 'text-[#F8F5F2]' : 'text-white'}`
                }`}
              >
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 origin-top z-50 ${servicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <div className="w-[480px] bg-white shadow-xl rounded-xl p-4 border border-[#1A1A1A]/10">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {SERVICES.map((service, idx) => (
                      <NavLink 
                        key={idx} 
                        to={service.path}
                        className={({ isActive }) => `flex items-center gap-3 p-3 rounded-full transition-colors group/item ${
                          isActive 
                          ? 'bg-[#37302F] text-[#F8F5F2]' 
                          : 'hover:bg-[#37302F] hover:text-[#F8F5F2]'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          location.pathname === service.path ? 'bg-[#F8F5F2]/20 text-[#F8F5F2]' : 'bg-[#37302F]/5 text-[#37302F] group-hover/item:bg-[#F8F5F2]/20 group-hover/item:text-[#F8F5F2]'
                        }`}>
                          <span className="font-bold text-xs">{String(idx + 1).padStart(2, '0')}</span>
                        </div>
                        <span className={`font-medium text-sm transition-colors ${
                          location.pathname === service.path ? 'text-[#F8F5F2]' : 'text-[#37302F] group-hover/item:text-[#F8F5F2]'
                        }`}>{service.name}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <NavLink 
              to="/projects" 
              className={({ isActive }) => `text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 ${
                isActive 
                ? `bg-[#37302F] ${isParallaxPage ? 'text-[#F8F5F2]' : 'text-white'}` 
                : `text-[#37302F] hover:bg-[#37302F] hover:${isParallaxPage ? 'text-[#F8F5F2]' : 'text-white'}`
              }`}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/design-ideas" 
              className={({ isActive }) => `text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 ${
                isActive 
                ? `bg-[#37302F] ${isParallaxPage ? 'text-[#F8F5F2]' : 'text-white'}` 
                : `text-[#37302F] hover:bg-[#37302F] hover:${isParallaxPage ? 'text-[#F8F5F2]' : 'text-white'}`
              }`}
            >
              Design Ideas
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 ${
                isActive 
                ? `bg-[#37302F] ${isParallaxPage ? 'text-[#F8F5F2]' : 'text-white'}` 
                : `text-[#37302F] hover:bg-[#37302F] hover:${isParallaxPage ? 'text-[#F8F5F2]' : 'text-white'}`
              }`}
            >
              Contact
            </NavLink>
          </div>

          {/* Right: Social Icons & Mobile Button */}
          <div className="flex items-center justify-end flex-1 lg:flex-none gap-5 z-10 relative">
            {/* Social Icons - Desktop Only */}
            <div className="hidden lg:flex items-center gap-5">
              <a href="https://wa.me/919866166612" target="_blank" rel="noreferrer" className="text-[#37302F] hover:opacity-70 transition-opacity" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21.15 10A10.05 10.05 0 0 0 12 2a10 10 0 0 0-9.87 11.53l-1.63 5.48L5.78 17.5A10 10 0 0 0 12 22a10.05 10.05 0 0 0 9.15-8z"></path><path d="M16 14.5c.34-.17.66-.5.66-.5s.31-.38.16-.6c-.16-.23-.6-.35-.6-.35s-.7-.35-1.17-.6c-.46-.23-.74-.38-.97-.05-.23.35-.47.6-.6.82-.16.23-.35.25-.66.12-.31-.14-.86-.33-1.62-.97-.6-.5-1.02-1.12-1.13-1.35-.13-.23-.03-.35.1-.47.11-.11.23-.25.35-.38.11-.13.16-.23.23-.35.08-.16.03-.31-.02-.42-.05-.12-.46-1.13-.64-1.57-.16-.42-.31-.35-.42-.35h-.35c-.14 0-.35.05-.55.25-.2.23-.74.72-.74 1.77s.78 2.05.88 2.2c.1.14 1.48 2.3 3.61 3.2.5.21.9.35 1.25.46.5.14.97.12 1.34.08.41-.05 1.24-.5 1.41-.98.17-.46.17-.86.12-.95-.05-.08-.17-.14-.35-.23z"></path></svg>
              </a>
              <a href="#" className="text-[#37302F] hover:opacity-70 transition-opacity" aria-label="Instagram">
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
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 origin-top overflow-y-auto ${isOpen ? 'max-h-[calc(100vh-80px)] py-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="w-full px-4 flex flex-col gap-4 pb-8">
          <NavLink 
            to="/" 
            end
            onClick={() => setIsOpen(false)} 
            className={({ isActive }) => `text-lg font-medium p-2 rounded-full transition-colors ${
              isActive 
              ? 'ring-2 ring-inset ring-[#1A1A1A] text-[#1A1A1A]' 
              : 'hover:bg-gray-50 active:ring-2 active:ring-inset active:ring-[#1A1A1A]'
            }`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            onClick={() => setIsOpen(false)} 
            className={({ isActive }) => `text-lg font-medium p-2 rounded-full transition-colors ${
              isActive 
              ? 'ring-2 ring-inset ring-[#1A1A1A] text-[#1A1A1A]' 
              : 'hover:bg-gray-50 active:ring-2 active:ring-inset active:ring-[#1A1A1A]'
            }`}
          >
            About
          </NavLink>
          
          <div className="flex flex-col">
            <button 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex justify-between items-center w-full text-lg font-medium p-2 rounded-full text-left transition-colors ${
                location.pathname.startsWith('/services')
                ? 'ring-2 ring-inset ring-[#1A1A1A] text-[#1A1A1A]'
                : 'hover:bg-gray-50'
              }`}
            >
              Services
              <ChevronDown size={20} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`flex flex-col overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[400px] mt-2' : 'max-h-0'}`}>
              <div className="pl-4 border-l-2 border-gray-100 ml-4 py-2 flex flex-col gap-1">
                {SERVICES.map((service, idx) => (
                  <NavLink 
                    key={idx} 
                    to={service.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `text-base font-medium p-2 rounded-full transition-colors ${
                      isActive 
                      ? 'ring-2 ring-inset ring-[#1A1A1A] text-[#1A1A1A] bg-[#1A1A1A]/5' 
                      : 'text-gray-600 hover:text-[#1A1A1A] hover:bg-gray-50 active:ring-2 active:ring-inset active:ring-[#1A1A1A]'
                    }`}
                  >
                    {service.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink 
            to="/projects" 
            onClick={() => setIsOpen(false)} 
            className={({ isActive }) => `text-lg font-medium p-2 rounded-full transition-colors ${
              isActive 
              ? 'ring-2 ring-inset ring-[#1A1A1A] text-[#1A1A1A]' 
              : 'hover:bg-gray-50 active:ring-2 active:ring-inset active:ring-[#1A1A1A]'
            }`}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/design-ideas" 
            onClick={() => setIsOpen(false)} 
            className={({ isActive }) => `text-lg font-medium p-2 rounded-full transition-colors ${
              isActive 
              ? 'ring-2 ring-inset ring-[#1A1A1A] text-[#1A1A1A]' 
              : 'hover:bg-gray-50 active:ring-2 active:ring-inset active:ring-[#1A1A1A]'
            }`}
          >
            Design Ideas
          </NavLink>
          <NavLink 
            to="/contact" 
            onClick={() => setIsOpen(false)} 
            className={({ isActive }) => `text-lg font-medium p-2 rounded-full transition-colors ${
              isActive 
              ? 'ring-2 ring-inset ring-[#1A1A1A] text-[#1A1A1A]' 
              : 'hover:bg-gray-50 active:ring-2 active:ring-inset active:ring-[#1A1A1A]'
            }`}
          >
            Contact
          </NavLink>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
