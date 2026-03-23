import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import SectionWrapper from '../components/SectionWrapper';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const { id } = useParams();
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      const found = services.find(s => s.id === id);
      setActiveService(found || services[0]);
    } else {
      setActiveService(services[0]);
    }
  }, [id]);

  if (id && !services.find(s => s.id === id)) {
    return <Navigate to="/services" replace />;
  }

  if (!activeService) return null;

  return (
    <div className="bg-[#F8F5F2] min-h-screen pt-24 pb-20">
      <div className="container-custom flex flex-col lg:flex-row gap-12">
        
        {/* Sidebar Nav */}
        <aside className="lg:w-1/4">
          <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-28 border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-[#1A1A1A] pb-4 border-b">All Services</h3>
            <ul className="flex flex-col gap-2">
              {services.map(service => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.id}`}
                    className={`flex items-center justify-between p-3 rounded-lg transition-all ${activeService.id === service.id ? 'bg-[#1A1A1A] text-white font-medium' : 'hover:bg-[#F8F5F2] text-gray-600 hover:text-[#1A1A1A]'}`}
                  >
                    <span>{service.title}</span>
                    <ChevronRight size={16} className={activeService.id === service.id ? 'text-[#C49A45]' : 'text-gray-400'} />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-[#C49A45]/10 p-6 rounded-xl border border-[#C49A45]/30 text-center">
              <h4 className="font-bold text-[#1A1A1A] mb-2">Need a custom solution?</h4>
              <p className="text-sm text-gray-600 mb-4">We provide tailored packages for large scale projects.</p>
              <Link to="/get-quote" className="text-sm font-bold text-[#C49A45] hover:text-[#1A1A1A] transition-colors uppercase tracking-wider">Contact Us Today</Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4 bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
          <div className="flex items-center gap-4 mb-6 text-[#C49A45]">
            <activeService.icon size={48} strokeWidth={1.5} />
            <h1 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]">{activeService.title}</h1>
          </div>
          
          <div className="w-full h-64 md:h-96 bg-gray-200 rounded-xl mb-10 overflow-hidden relative">
            <img 
              src={`https://source.unsplash.com/800x600/?${activeService.title.replace(' ', ',')},construction,interior`} 
              alt={activeService.title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">{activeService.fullDesc}</p>

            <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {activeService.subServices.map((sub, idx) => (
                <div key={idx} className="bg-[#F8F5F2] p-5 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-lg text-[#1A1A1A] mb-2">{sub.name}</h4>
                  <p className="text-sm text-gray-600">{sub.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {activeService.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#C49A45]" size={20} />
                  <span className="font-medium text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </main>

      </div>
    </div>
  );
};

export default Services;
