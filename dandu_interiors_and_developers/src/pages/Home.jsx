import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Award, Users, ChevronRight, Star } from 'lucide-react';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import SectionWrapper from '../components/SectionWrapper';
import CallToAction from '../components/CallToAction';
import HomeDesignIdeas from '../components/HomeDesignIdeas';
import { useModal } from '../context/ModalContext';

const Home = () => {
  const { openQuoteModal } = useModal();
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1600" 
            alt="Luxury Interior Design" 
            fetchPriority="high"
            className="w-full h-full object-cover filter brightness-[0.75]"
          />
          {/* Light gradient strictly at the top to protect the dark navbar text readability */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#F8F5F2]/60 to-transparent"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-white top-[-50px]">
          <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-light tracking-tighter leading-[0.85] mb-8 text-white drop-shadow-lg">
            Furnish Your Life <br/>
            <span className="font-serif italic text-white/30">With Style</span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
            We Construct. We Maintain. We Refurbish. We Care.
            The premium standard in interior design and development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openQuoteModal} className="bg-[#1A1A1A] hover:bg-[#b0883b] text-white px-8 py-4 rounded-md font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-1">
              Get Free Quote
            </button>
            <Link to="/projects" className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-[#1A1A1A] text-white px-8 py-4 rounded-md font-bold text-lg transition-all">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <SectionWrapper bgClass="bg-[#F8F5F2]" id="services-preview">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#1A1A1A] mb-4 leading-none">
            Core <span className="font-serif italic text-black/30">Services</span>
          </h2>
          <div className="w-20 h-[1px] bg-black/10 mx-auto mb-8"></div>
          <p className="text-black/50 text-[13px] tracking-wide font-light max-w-2xl mx-auto uppercase">Providing end-to-end solutions for all your interior and construction needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.slice(0, 8).map((service) => (
            <Link key={service.id} to={`/services/${service.id}`} className="bg-white p-8 rounded-xl shadow-sm card-hover border border-gray-100 group flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#F8F5F2] flex items-center justify-center mb-6 group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors text-[#1A1A1A]">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-6 flex-grow">{service.shortDesc}</p>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A] flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ChevronRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper bgClass="bg-[#1A1A1A] text-white" paddingClass="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-6 leading-none">
              Why <span className="font-serif italic text-white/30">Choose Us?</span>
            </h2>
            <div className="w-20 h-[1px] bg-white/10 rounded-full mb-8"></div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We are not just a name - it's a brand built on trust and excellence. With years of experience and a multi-disciplinary team, we manage your project from concept to completion, ensuring it is delivered on time, within budget, and beyond expectations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: 'Premium Quality', desc: 'Sourcing only the best materials.' },
                { icon: Clock, title: 'On-Time Delivery', desc: 'Strict adherence to project timelines.' },
                { icon: Award, title: 'Expert Craftsmanship', desc: 'Highly skilled and certified workers.' },
                { icon: Users, title: 'Client Centric', desc: 'Transparent and continuous communication.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-[#1A1A1A] mt-1 shrink-0"><item.icon size={24} /></div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=75&w=800" 
              alt="Craftsmanship" 
              loading="lazy"
              className="rounded-2xl shadow-2xl relative z-10" 
            />
            <div className="absolute -inset-4 bg-[#1A1A1A]/20 rounded-2xl z-0 translate-x-4 -translate-y-4"></div>
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Projects */}
      <SectionWrapper>
        <div className="relative mb-20 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#1A1A1A] text-center mb-4 leading-none">
            Featured <span className="font-serif italic text-black/30">Projects</span>
          </h2>
          <div className="w-20 h-[1px] bg-black/10"></div>
          <Link to="/projects" className="mt-8 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A] hover:bg-black hover:text-white px-6 py-2 rounded-full border border-black/5 transition-all">
            View All Work <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <Link key={project.id} to={`/projects`} className="group relative rounded-xl overflow-hidden shadow-md block h-[400px]" data-cursor-text="VIEW">
              <img 
                src={project.image} 
                alt={project.title} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#1A1A1A] text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                <h3 className="text-white text-2xl font-bold mb-1">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.location}</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <span className="text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">View Detail</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper bgClass="bg-[#F8F5F2]">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#1A1A1A] mb-4 leading-none">
            How It <span className="font-serif italic text-black/30">Works</span>
          </h2>
          <div className="w-20 h-[1px] bg-black/10 mx-auto mb-8"></div>
          <p className="text-black/50 text-[13px] tracking-wide font-light max-w-2xl mx-auto uppercase">A seamless, transparent process designed to bring your vision to reality.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-[50px] left-1/8 right-1/8 h-0.5 bg-gray-300 z-0"></div>
          {[
            { step: '01', title: 'Consultation', desc: 'We discuss your needs, budget, and vision.' },
            { step: '02', title: 'Design & Planning', desc: 'Creating 3D models and detailed project plans.' },
            { step: '03', title: 'Execution', desc: 'Our expert team builds everything to specification.' },
            { step: '04', title: 'Handover', desc: 'Final walkthrough and handing over your new space.' }
          ].map((item, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-[6px] border-[#F8F5F2] shadow-xl flex items-center justify-center mb-6 text-3xl font-bold text-[#1A1A1A]">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Design Ideas Section */}
      <HomeDesignIdeas />

      {/* Testimonials */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-[#1A1A1A] mx-auto rounded-full mb-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] relative mt-8">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-[#1A1A1A] text-white flex items-center justify-center rounded-full text-3xl font-serif">"</div>
              <div className="flex gap-1 mb-4 text-[#1A1A1A] mt-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" stroke="none" />)}
              </div>
              <p className="text-gray-600 italic mb-6 text-sm leading-relaxed">"{testimonial.content}"</p>
              <div>
                <h4 className="font-bold text-[#1A1A1A]">{testimonial.name}</h4>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CallToAction />

    </div>
  );
};

export default Home;
