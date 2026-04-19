import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Filter } from 'lucide-react';
import { blogs } from '../data/blogs';
import SectionWrapper from '../components/SectionWrapper';
import SEO from '../components/SEO';

const CATEGORIES = ['All', 'Luxury Interiors', 'Design Trends'];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <>
      <SEO 
        title="Journal | Interior Design & Construction Insights" 
        description="Expert insights into luxury interiors, architectural precision, and modern construction trends by D. Anudeep and Ar. T. Nikhil at Dandu Interiors."
        keywords="Interior Design Blog, Luxury Living, Architecture Trends Hyderabad, Construction Insights, Design Journal"
      />
      <div className="bg-[#F8F5F2] min-h-screen text-[#37302F]">
        
        {/* Editorial Hero */}
        <section className="pt-20 pb-8 md:pt-32 md:pb-20 px-6 md:px-12 max-w-[1600px] mx-auto border-b border-[#37302F]/5">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-4xl">
              <h1 className="text-[3rem] sm:text-5xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-medium leading-[0.85] tracking-tighter mb-4 ml-[-0.04em]">
                The <span className="font-serif italic text-[#37302F]/40">Journal.</span>
              </h1>
            </div>
            <div className="max-w-xs md:max-w-sm lg:mb-6">
              <p className="text-lg font-light leading-relaxed text-[#37302F]/70">
                A curated selection of technical mastery, design trends, and architectural reflections from the minds behind Dandu Interiors.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-[72px] bg-[#F8F5F2]/80 backdrop-blur-md z-40 py-6 border-b border-[#37302F]/5 px-6 md:px-12">
          <div className="max-w-[1600px] mx-auto flex flex-wrap items-center gap-4 md:gap-10">
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#37302F]/40 pr-4 md:border-r border-[#37302F]/10">
              <Filter size={12} /> Filter by
            </div>
            <div className="flex flex-wrap gap-2 md:gap-8">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-all relative py-2 ${
                    activeCategory === category 
                    ? 'text-[#37302F]' 
                    : 'text-[#37302F]/40 hover:text-[#37302F]/70'
                  }`}
                >
                  {category}
                  {activeCategory === category && (
                    <motion.div 
                      layoutId="category-underline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#37302F]"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <SectionWrapper paddingClass="py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            <AnimatePresence mode="popLayout">
              {filteredBlogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/blogs/${blog.id}`} className="block overflow-hidden relative aspect-[16/10] mb-8 bg-[#1A1A1A]/5 rounded-none shadow-sm transition-all group-hover:shadow-2xl">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 flex flex-col gap-1 pointer-events-none">
                      <span className="bg-white/90 backdrop-blur-sm text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 text-[#37302F] w-fit">
                        {blog.category}
                      </span>
                    </div>
                  </Link>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#37302F]/40">
                      <span>By {blog.author}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#37302F]/10"></span>
                      <span>{blog.date}</span>
                    </div>
                    <Link to={`/blogs/${blog.id}`}>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter leading-[1.1] transition-colors group-hover:text-[#37302F]/70">
                        {blog.title}
                      </h2>
                    </Link>
                    <p className="text-lg font-light text-[#37302F]/60 line-clamp-2 max-w-xl">
                      {blog.excerpt}
                    </p>
                    <Link 
                      to={`/blogs/${blog.id}`} 
                      className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#37302F] mt-4 group/btn"
                    >
                      Read Study <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filteredBlogs.length === 0 && (
            <div className="py-24 text-center">
              <h3 className="text-2xl font-light text-[#37302F]/40 italic serif">No articles found in this category.</h3>
            </div>
          )}
        </SectionWrapper>
      </div>
    </>
  );
};

export default Blogs;
