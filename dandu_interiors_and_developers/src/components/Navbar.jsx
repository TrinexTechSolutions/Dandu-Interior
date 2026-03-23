import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
      const isServicesPage = location.pathname.startsWith('/services');
      if (isServicesPage && navRef.current) {
        const contentEl = document.getElementById('services-content');
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

  const isServicesPage = location.pathname.startsWith('/services');

  return (
    <nav 
      ref={navRef}
      style={{ transform: `translateY(-${navbarOffset}px)` }}
      className={`${isServicesPage ? 'fixed' : 'relative'} top-0 left-0 w-full z-50 bg-white py-4 transition-colors duration-300`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group py-1">
            <img src={brandLogo} alt="Dandu Interiors & Developers" className="h-10 w-auto drop-shadow-sm group-hover:opacity-90 transition-opacity" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-[#C49A45] transition-colors">Home</Link>
            <Link to="/about" className="text-sm font-medium hover:text-[#C49A45] transition-colors">About</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-sm font-medium hover:text-[#C49A45] transition-colors py-2"
              >
                Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-xl rounded-xl p-6 transition-all duration-300 origin-top ${servicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {SERVICES.map((service, idx) => (
                    <Link 
                      key={idx} 
                      to={service.path}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F8F5F2] transition-colors group/item"
                    >
                      <div className="w-8 h-8 rounded bg-[#1A1A1A]/5 flex items-center justify-center group-hover/item:bg-[#C49A45]/10 group-hover/item:text-[#C49A45] text-gray-600 transition-colors">
                        <span className="font-bold text-xs">{String(idx + 1).padStart(2, '0')}</span>
                      </div>
                      <span className="font-medium text-sm text-gray-800 group-hover/item:text-[#C49A45] transition-colors">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/projects" className="text-sm font-medium hover:text-[#C49A45] transition-colors">Projects</Link>
            <Link to="/design-ideas" className="text-sm font-medium hover:text-[#C49A45] transition-colors">Design Ideas</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-[#C49A45] transition-colors">Contact</Link>
          </div>

          <div className="hidden lg:flex">
            <button onClick={openQuoteModal} className="btn-primary py-2 px-5 text-sm">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-[#1A1A1A]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 origin-top overflow-y-auto ${isOpen ? 'max-h-[calc(100vh-80px)] py-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container-custom flex flex-col gap-4 pb-8">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">About</Link>
          
          <div className="flex flex-col">
            <button 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex justify-between items-center w-full text-lg font-medium p-2 hover:bg-gray-50 rounded-lg text-left"
            >
              Services
              <ChevronDown size={20} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`flex flex-col overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[400px] mt-2' : 'max-h-0'}`}>
              <div className="pl-4 border-l-2 border-gray-100 ml-4 py-2 flex flex-col gap-1">
                {SERVICES.map((service, idx) => (
                  <Link 
                    key={idx} 
                    to={service.path}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium p-2 text-gray-600 hover:text-[#C49A45] hover:bg-gray-50 rounded-lg"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/projects" onClick={() => setIsOpen(false)} className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">Projects</Link>
          <Link to="/design-ideas" onClick={() => setIsOpen(false)} className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">Design Ideas</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">Contact</Link>
          
          <button 
            onClick={() => { setIsOpen(false); openQuoteModal(); }} 
            className="btn-primary mt-4 w-full justify-center"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
