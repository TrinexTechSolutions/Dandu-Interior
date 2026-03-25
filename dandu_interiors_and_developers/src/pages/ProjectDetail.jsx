import React, { useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { X } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find project
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const galleryImages = useMemo(() => {
    if (!project) return [];
    return [
      project.image,
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
    ];
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-blue-600 hover:underline">Return to Projects</Link>
      </div>
    );
  }

  // Generate some semi-dynamic stats for the UI to look full
  const area = project.category === 'Commercial' ? '4500' : '3200';
  const val = project.category === 'Commercial' ? '1.2 Cr' : '75 Lakhs';

  return (
    <div className="bg-white min-h-screen text-gray-900 relative">
      
      {/* Top Right Close Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="absolute top-6 right-6 md:top-10 md:right-10 z-50 bg-black text-white p-3 rounded-full hover:scale-110 hover:bg-gray-800 transition-all shadow-xl"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Top Banner section */}
      <div className="pt-24 md:pt-32 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-[10rem] font-light tracking-tighter text-[#1A1A1A] mb-12 leading-[0.85]">{project.title}</h1>
        <p className="text-gray-600 max-w-4xl text-lg md:text-2xl leading-relaxed mb-16 font-light">
          {project.description} This meticulously crafted space harmonizes aesthetic elegance with functional brilliance, utilizing top-tier materials and bespoke design elements. Every corner has been thoughtfully curated to elevate the everyday experience, bringing a sense of warmth, luxury, and timeless appeal to the environment.
        </p>

        {/* Stats Section with Divider styling exactly as requested */}
        <div className="border-t border-b border-gray-300 py-10 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-2xl text-gray-900 mb-2">{project.category || 'Villa'}</span>
              <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">Configuration</span>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-2xl text-gray-900 mb-2">{area}</span>
              <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">Square Feet Area</span>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-2xl text-gray-900 mb-2">{project.location}</span>
              <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">Location</span>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-2xl text-gray-900 mb-2">{val}</span>
              <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">Value</span>
            </div>
          </div>

          {/* Slanted lines behind text - absolute positioned across grid */}
          <div className="hidden md:block absolute top-[15%] bottom-[15%] left-1/4 w-[1px] bg-gray-300 -skew-x-[20deg]"></div>
          <div className="hidden md:block absolute top-[15%] bottom-[15%] left-2/4 w-[1px] bg-gray-300 -skew-x-[20deg]"></div>
          <div className="hidden md:block absolute top-[15%] bottom-[15%] left-3/4 w-[1px] bg-gray-300 -skew-x-[20deg]"></div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20 md:mb-32">
        <h2 className="text-3xl md:text-4xl text-gray-900 mb-12 font-light">
          Image <span className="font-bold">Gallery</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {/* Main Large Image */}
          <div className="group relative overflow-hidden rounded-[2rem] md:rounded-[3rem] md:col-span-8 row-span-2">
            <img 
              src={galleryImages[0]} 
              alt={`${project.title} gallery 1`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Arch Shape Top Right */}
          <div className="group relative overflow-hidden rounded-t-[10rem] rounded-b-[2rem] md:col-span-4 row-span-2 hidden md:block">
            <img 
              src={galleryImages[1]} 
              alt={`${project.title} gallery 2`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="group relative overflow-hidden rounded-t-[5rem] rounded-b-[2rem] md:col-span-4 row-span-1 block md:hidden">
            <img 
              src={galleryImages[1]} 
              alt={`${project.title} gallery 2`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Pill Shape Bottom Row */}
          <div className="group relative overflow-hidden rounded-[3rem] md:rounded-full md:col-span-5 row-span-1">
            <img 
              src={galleryImages[2]} 
              alt={`${project.title} gallery 3`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Square with asymmetrical rounded corners */}
          <div className="group relative overflow-hidden rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl md:col-span-3 row-span-1">
            <img 
              src={galleryImages[3]} 
              alt={`${project.title} gallery 4`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Standard soft rounded square */}
          <div className="group relative overflow-hidden rounded-[2rem] md:col-span-4 row-span-1 border border-gray-100">
            <img 
              src={galleryImages[4]} 
              alt={`${project.title} gallery 5`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div>
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetail;
