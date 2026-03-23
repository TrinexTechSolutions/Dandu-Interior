import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-white py-5'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#1A1A1A] text-[#D9C3A9] rounded-lg flex items-center justify-center font-bold text-2xl group-hover:bg-[#C49A45] transition-colors">
              D
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none">DANDU</span>
              <span className="text-[10px] text-gray-500 tracking-wider font-semibold">INTERIORS & DEVELOPERS</span>
            </div>
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
              <button className="flex items-center gap-1 text-sm font-medium hover:text-[#C49A45] transition-colors py-2">
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
            <Link to="/get-quote" className="btn-primary py-2 px-5 text-sm">
              Get Quote
            </Link>
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
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 origin-top overflow-hidden ${isOpen ? 'max-h-[80vh] py-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container-custom flex flex-col gap-4">
          <Link to="/" className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">Home</Link>
          <Link to="/about" className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">About</Link>
          
          <div className="flex flex-col">
            <div className="text-sm font-bold text-gray-400 px-2 py-1 uppercase tracking-wider">Services</div>
            {SERVICES.map((service, idx) => (
              <Link 
                key={idx} 
                to={service.path}
                className="text-base font-medium p-2 pl-4 text-gray-600 hover:text-[#C49A45] hover:bg-gray-50 rounded-lg"
              >
                {service.name}
              </Link>
            ))}
          </div>

          <Link to="/projects" className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">Projects</Link>
          <Link to="/design-ideas" className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">Design Ideas</Link>
          <Link to="/contact" className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">Contact</Link>
          
          <Link to="/get-quote" className="btn-primary mt-4 w-full justify-center">
            Get Free Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
