import React from 'react';
import CallToAction from '../components/CallToAction';
import { Target, Eye, Shield, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. The Epic Hero */}
      <div className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600" 
            alt="Dandu Interiors Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 mt-16 md:mt-24">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md">
            Established Legacy
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C49A45] to-[#E8D09E]">Dandu.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Crafting extraordinary environments where form meets function, and vision transforms into reality.
          </p>
        </div>
        
        {/* Subtle scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </div>

      {/* 2. The Legacy (Our Story) */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Visual Composition */}
            <div className="relative h-[500px] md:h-[600px] w-full">
              <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl z-10 group">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
                  alt="Interior Planning" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border-8 border-white z-20 group">
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" 
                  alt="Development Execution" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#C49A45]/10 rounded-full blur-3xl -z-10"></div>
            </div>
            
            {/* Content */}
            <div className="relative">
              <div className="absolute -top-20 -left-10 text-[150px] font-black text-gray-50 opacity-60 pointer-events-none select-none tracking-tighter hidden md:block z-0">
                STORY
              </div>
              <div className="relative z-10">
                <span className="text-[#C49A45] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Genesis</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#1A1A1A] leading-[1.1]">
                  Not Just a Name.<br/>It's a <span className="italic font-light text-[#C49A45]">Legacy.</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Dandu Interiors & Developers was founded on a simple premise: to redefine the standards of interior design and construction. We believe every space has a story waiting to be told, and we are the craftsmen who bring that story to life.
                  </p>
                  <p>
                    From humble beginnings to becoming a trusted name in luxury residential and dynamic commercial spaces, our journey is fueled by an unwavering commitment to quality, transparency, and innovation. We don't just build spaces; we build lifelong relationships.
                  </p>
                </div>
                
                <div className="mt-12 flex items-center gap-6 p-6 bg-[#F8F5F2] rounded-2xl border-l-4 border-[#C49A45]">
                  <div className="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden shrink-0">
                     <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" 
                        alt="D. Ramakrishna" 
                        className="w-full h-full object-cover grayscale"
                     />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A1A] text-xl">D. Ramakrishna</p>
                    <p className="text-[#C49A45] text-xs font-bold uppercase tracking-wider">Founder & Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision (Minimalist) */}
      <section className="bg-white px-4 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Mission */}
            <div className="bg-[#1A1A1A] p-16 md:p-24 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-20 text-[300px] font-black text-gray-800 opacity-20 group-hover:scale-110 transition-transform duration-1000 pointer-events-none z-0 leading-none">
                M
              </div>
              <div className="relative z-10 text-white">
                <Target size={48} className="text-[#C49A45] mb-8" />
                <h3 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h3>
                <p className="text-gray-400 text-lg leading-relaxed mix-blend-lighten">
                  To deliver exceptional interior and construction solutions that enhance the quality of life and business operations for our clients, executing every project with integrity and precision.
                </p>
              </div>
            </div>
            
            {/* Vision */}
            <div className="bg-[#F8F5F2] p-16 md:p-24 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-20 text-[300px] font-black text-white/50 opacity-100 group-hover:scale-110 transition-transform duration-1000 pointer-events-none z-0 leading-none">
                V
              </div>
              <div className="relative z-10 text-[#1A1A1A]">
                <Eye size={48} className="text-[#C49A45] mb-8" />
                <h3 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the most trusted and innovative premier interiors and developers brand, recognized universally for transforming visions into enduring realities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values (Bento Grid) */}
      <section className="py-24 md:py-32 bg-[#1A1A1A] relative overflow-hidden">
        {/* Abstract Glowing Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C49A45]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C49A45]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#C49A45] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Foundation</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              We Construct. We Maintain.<br/><span className="italic font-light text-[#C49A45]">We Care.</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Our core values dictate every sketch we draw, every brick we lay, and every client interaction. True success is measured by the satisfaction of the people who inhabit our spaces.
            </p>
          </div>

          {/* Premium Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Integrity (Wide) */}
            <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#C49A45]/20 rounded-full blur-3xl group-hover:bg-[#C49A45]/40 transition-all duration-500"></div>
              <Shield className="text-[#C49A45] mb-6" size={40} />
              <h4 className="font-bold text-3xl text-white mb-4">Integrity</h4>
              <p className="text-lg text-gray-400 max-w-md">Honest pricing, transparent processes, and no hidden surprises. We stand by our word from blueprint to handover.</p>
            </div>

            {/* Passion (Square) */}
            <div className="md:col-span-1 bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
               <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#C49A45]/20 rounded-full blur-3xl group-hover:bg-[#C49A45]/40 transition-all duration-500"></div>
               <Heart className="text-[#C49A45] mb-6" size={40} />
               <h4 className="font-bold text-3xl text-white mb-4">Passion</h4>
               <p className="text-lg text-gray-400">We love what we do, and it reflects in the meticulous details.</p>
            </div>

            {/* Excellence (Square) */}
            <div className="md:col-span-1 bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
               <div className="absolute -left-10 -top-10 w-40 h-40 bg-[#C49A45]/20 rounded-full blur-3xl group-hover:bg-[#C49A45]/40 transition-all duration-500"></div>
               <Target className="text-[#C49A45] mb-6" size={40} />
               <h4 className="font-bold text-3xl text-white mb-4">Excellence</h4>
               <p className="text-lg text-gray-400">Settling for 'good enough' is never in our vocabulary.</p>
            </div>

            {/* Client-First (Wide) */}
            <div className="md:col-span-2 bg-[#C49A45]/10 border border-[#C49A45]/20 rounded-3xl p-10 md:p-14 backdrop-blur-sm relative overflow-hidden group hover:bg-[#C49A45]/20 transition-colors duration-500 flex flex-col justify-end">
               <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#C49A45]/30 rounded-full blur-3xl group-hover:bg-[#C49A45]/50 transition-all duration-500"></div>
               <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-8">
                 <div>
                   <h4 className="font-bold text-3xl text-white mb-4">Client-First</h4>
                   <p className="text-lg text-[#E8D09E] max-w-md">Your vision drives our direction. We are here to serve your needs and continuously exceed expectations.</p>
                 </div>
                 <div className="rounded-full border border-[#C49A45]/30 p-6 self-start shrink-0 mix-blend-screen bg-[#C49A45]/10">
                    <Heart className="text-[#C49A45]" size={40} />
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Statement & Call To Action */}
      <section className="bg-white">
        <div className="py-24 md:py-32 text-center px-4 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#C49A45]/30 to-transparent"></div>
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#1A1A1A] font-light italic leading-tight">
              "One Team. All Solutions. <br/>
              <span className="font-bold text-[#C49A45] not-italic">Built on Trust.</span>"
            </h2>
          </div>
        </div>
        
        {/* Global CTA */}
        <CallToAction />
      </section>

    </div>
  );
};

export default About;
