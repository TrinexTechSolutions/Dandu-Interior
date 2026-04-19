import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, User, Tag } from 'lucide-react';
import { blogs } from '../data/blogs';
import SectionWrapper from '../components/SectionWrapper';
import CallToAction from '../components/CallToAction';
import SEO from '../components/SEO';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  const nextBlog = blogs.find(b => b.id !== id);

  return (
    <>
      <SEO 
        title={`${blog.title} | Dandu Interiors Journal`}
        description={blog.excerpt}
        keywords={`${blog.category}, ${blog.author}, Interior Design Tips, Construction Insights Hyderabad`}
      />
      <div className="bg-[#F8F5F2] min-h-screen text-[#37302F]">
        
        {/* Editorial Header */}
        <section className="pt-24 pb-12 px-6 md:px-12 max-w-[1600px] mx-auto">
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#37302F]/50 hover:text-[#37302F] mb-12 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Journal
          </Link>

          <div className="max-w-5xl">
            <div className="flex flex-wrap items-center gap-6 mb-8 text-[10px] font-bold tracking-[0.4em] uppercase text-[#37302F]/60">
              <span className="bg-[#37302F] text-white px-3 py-1 rounded-sm">{blog.category}</span>
              <span className="flex items-center gap-2"><Clock size={12} /> 6 Min Read</span>
              <span className="flex items-center gap-2 transition-colors hover:text-[#37302F]"><User size={12} /> {blog.author}</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95] mb-10">
              {blog.title}
            </h1>
            
            <p className="text-xl md:text-3xl font-light leading-relaxed text-[#37302F]/80 max-w-3xl border-l-[3px] border-[#37302F] pl-8 mb-16 italic font-serif">
              {blog.excerpt}
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="w-full h-[60vh] md:h-[80vh] overflow-hidden relative">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={blog.image} 
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </section>

        {/* Content Section */}
        <SectionWrapper paddingClass="py-16 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
            
            {/* Sidebar Meta (Desktop) */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
              <div className="flex flex-col gap-12 border-t border-[#37302F]/10 pt-8">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#37302F]/40 block mb-4">Principal Author</span>
                  <p className="text-lg font-medium">{blog.author}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#37302F]/40 block mb-4">Published</span>
                  <p className="text-lg font-medium">{blog.date}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#37302F]/40 block mb-4">Tags</span>
                  <div className="flex flex-wrap gap-2">
                    {['Technical', 'Premium'].map(tag => (
                      <span key={tag} className="text-[9px] font-bold tracking-widest uppercase border border-[#37302F]/20 px-3 py-1 hover:bg-[#37302F] hover:text-[#F8F5F2] transition-all cursor-default">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Article Body */}
            <div className="lg:col-span-8 lg:col-start-5 max-w-3xl">
              <div className="prose prose-xl prose-stone">
                {blog.content.map((block, idx) => {
                  if (block.type === 'heading') {
                    return <h2 key={idx} className="text-3xl md:text-5xl font-medium tracking-tighter mt-16 mb-8 text-[#37302F]">{block.text}</h2>;
                  }
                  if (block.type === 'quote') {
                    return (
                      <blockquote key={idx} className="my-16 relative py-4 border-y border-[#37302F]/10">
                        <span className="absolute -top-6 left-0 text-9xl font-serif text-[#37302F]/5 select-none opacity-50">“</span>
                        <p className="text-3xl md:text-4xl font-serif italic text-[#37302F]/70 leading-snug px-4">
                          {block.text}
                        </p>
                      </blockquote>
                    );
                  }
                  if (block.type === 'drawing') {
                    return (
                      <div key={idx} className="my-16 flex flex-col gap-4">
                        <div className="bg-[#1A1A1A]/5 p-2 md:p-6 border border-[#37302F]/10">
                          <img src={block.image} alt={block.caption} className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                        {block.caption && (
                          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#37302F]/50">
                            {block.caption}
                          </span>
                        )}
                      </div>
                    );
                  }
                  return <p key={idx} className="text-lg md:text-xl font-light leading-[1.8] text-[#37302F]/70 mb-8">{block.text}</p>;
                })}
              </div>

              {/* Technical Sign-off */}
              <div className="mt-20 pt-12 border-t border-[#37302F]/10 flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#37302F] flex items-center justify-center text-[#F8F5F2] font-serif italic text-3xl">
                    {blog.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#37302F]/40 mb-1">Written By</h4>
                    <p className="text-xl font-medium tracking-tight">{blog.author}</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-[#37302F] text-white px-8 py-4 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-black transition-all">
                  Discuss This Concept
                </Link>
              </div>
            </div>
          </div>
        {/* Video Walkthrough Section */}
        {blog.videoUrl && (
          <div className="max-w-5xl mx-auto px-6 md:px-12 pt-16 md:pt-32">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <div className="h-[1px] flex-1 bg-[#37302F]/10"></div>
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#37302F]/40">Project Walkthrough</span>
                <div className="h-[1px] flex-1 bg-[#37302F]/10"></div>
              </div>
              <div className="aspect-video w-full bg-[#1A1A1A] relative shadow-2xl">
                <iframe 
                  src={blog.videoUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Project Walkthrough"
                ></iframe>
              </div>
            </div>
          </div>
        )}
        </SectionWrapper>

        {/* Continue Reading / Next Post */}
        {nextBlog && (
          <section className="bg-white py-24 md:py-32 border-t border-[#37302F]/5">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#37302F]/40 mb-8 block">Continue Journey</span>
                <h3 className="text-4xl md:text-6xl font-medium tracking-tighter mb-8 leading-none">
                  Read our <br /> <span className="font-serif italic text-[#37302F]/40">Next Reflection.</span>
                </h3>
                <Link 
                  to={`/blogs/${nextBlog.id}`} 
                  className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-[#37302F] hover:gap-6 transition-all"
                >
                  Explore "{nextBlog.title}" <ArrowRight size={16} />
                </Link>
              </div>
              <div className="aspect-video overflow-hidden">
                <img src={nextBlog.image} alt="Next Post" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
            </div>
          </section>
        )}

        <CallToAction />
      </div>
    </>
  );
};

export default BlogDetail;
