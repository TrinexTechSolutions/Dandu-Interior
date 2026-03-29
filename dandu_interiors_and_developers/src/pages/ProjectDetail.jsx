import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { X } from 'lucide-react';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find project
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-600 hover:underline">Return to Projects</Link>
        </div>
      </PageTransition>
    );
  }

  const galleryImages = [project.image, ...(project.galleryImages || [])];

  return (
    <PageTransition>
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
            <div className="grid grid-cols-2 gap-8 relative z-10">
              <div className="flex flex-col items-center justify-center text-center border-r border-gray-200">
                <span className="text-2xl text-gray-900 mb-2">{project.category || 'Villa'}</span>
                <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">Configuration</span>
              </div>
              
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-2xl text-gray-900 mb-2">{project.location}</span>
                <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">Location</span>
              </div>
            </div>

            {/* Slanted lines behind text - absolute positioned across grid */}
            <div className="hidden md:block absolute top-[15%] bottom-[15%] left-1/2 w-[1px] bg-gray-300 -skew-x-[20deg]"></div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-12 font-light">
            Image <span className="font-bold">Gallery</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.slice(0, 3).map((img, idx) => (
              <div 
                key={idx}
                className={`group relative overflow-hidden rounded-2xl ${idx === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square md:aspect-[4/3]'}`}
              >
                <img 
                  src={img} 
                  alt={`${project.title} gallery ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/[0.03] group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
