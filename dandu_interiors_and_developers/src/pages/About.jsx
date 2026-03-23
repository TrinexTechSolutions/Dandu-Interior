import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Target, Eye, Shield, Heart } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#1A1A1A] text-white pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Discover the passion, precision, and people behind Dandu Interiors & Developers.</p>
      </div>

      {/* Intro Section */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#C49A45] font-bold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1A1A1A]">Not Just a Name – It's a Brand</h2>
            <div className="w-20 h-1 bg-[#C49A45] mb-6"></div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Dandu Interiors & Developers was founded on a simple premise: to redefine the standards of interior design and construction. We believe every space has a story waiting to be told, and we are the craftsmen who bring that story to life.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From humble beginnings to becoming a trusted name in luxury residential and dynamic commercial spaces, our journey is fueled by an unwavering commitment to quality, transparency, and innovation. We don't just build spaces; we build lifelong relationships with our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=75&w=800" alt="Interior" loading="lazy" className="rounded-xl w-full h-64 object-cover" />
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=75&w=800" alt="Development" loading="lazy" className="rounded-xl w-full h-64 object-cover mt-8" />
          </div>
        </div>
      </SectionWrapper>

      {/* Brand Ethos */}
      <SectionWrapper bgClass="bg-[#F8F5F2]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We Don't Just Do the Work — We Set the Standard</h2>
          <div className="w-24 h-1 bg-[#C49A45] mx-auto rounded-full mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow-sm text-center card-hover border-t-4 border-[#C49A45]">
            <Target size={48} className="text-[#C49A45] mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">To deliver exceptional interior and construction solutions that enhance the quality of life and business operations for our clients, executing every project with integrity and precision.</p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm text-center card-hover border-t-4 border-[#1A1A1A]">
            <Eye size={48} className="text-[#1A1A1A] mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">To be the most trusted and innovative premier interiors and developers brand, recognized for transforming visions into enduring realities.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper bgClass="bg-[#1A1A1A] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">We Construct. We Maintain. We Refurbish. We Care.</h2>
            <div className="w-24 h-1 bg-[#C49A45] rounded-full mb-8"></div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our core values dictate every sketch we draw, every brick we lay, and every client interaction. We believe that true success is measured by the satisfaction of the people who inhabit the spaces we create.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
              <Shield className="text-[#C49A45] mb-4" size={32} />
              <h4 className="font-bold text-lg mb-2">Integrity</h4>
              <p className="text-sm text-gray-400">Honest pricing, transparent processes, and no hidden surprises.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
              <Heart className="text-[#C49A45] mb-4" size={32} />
              <h4 className="font-bold text-lg mb-2">Passion</h4>
              <p className="text-sm text-gray-400">We love what we do, and it reflects in the meticulous details of our finishings.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
              <Target className="text-[#C49A45] mb-4" size={32} />
              <h4 className="font-bold text-lg mb-2">Excellence</h4>
              <p className="text-sm text-gray-400">Settling for 'good enough' is not in our vocabulary. We strive for perfection.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
              <Heart className="text-[#C49A45] mb-4" size={32} />
              <h4 className="font-bold text-lg mb-2">Client-First</h4>
              <p className="text-sm text-gray-400">Your vision drives our direction. We are here to serve your needs.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Slogan Full Width */}
      <section className="py-24 text-center bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] font-light italic leading-tight">
            "One Team. All Solutions. <br/><span className="font-bold text-[#C49A45] not-italic">Built on Trust.</span>"
          </h2>
        </div>
      </section>
    </div>
  );
};

export default About;
