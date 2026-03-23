import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data/projects';
import { ArrowRight, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#1A1A1A] text-white pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Projects</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Explore our portfolio of completed masterworks.</p>
      </div>

      <SectionWrapper>
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex items-center gap-2 text-gray-500 font-medium">
            <Filter size={20} />
            <span>Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-[#C49A45] text-white shadow-md' : 'bg-[#F8F5F2] text-gray-600 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 card-hover flex flex-col h-full cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{project.title}</h3>
                <p className="text-sm text-[#C49A45] font-medium mb-4 flex items-center gap-1">📍 {project.location}</p>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{project.description}</p>
                
                <div className="pt-4 border-t border-gray-100 mt-auto flex justify-between items-center group/btn">
                  <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">{project.servicesUsed[0]} & More</span>
                  <div className="w-10 h-10 rounded-full bg-[#F8F5F2] flex items-center justify-center text-[#1A1A1A] group-hover/btn:bg-[#C49A45] group-hover/btn:text-white transition-colors">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Projects;
