import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { services } from '../data/services';
import { ClipboardList, UploadCloud } from 'lucide-react';

const GetQuote = () => {
  return (
    <div className="bg-[#F8F5F2] min-h-screen pt-24 pb-12">
      <SectionWrapper bgClass="bg-transparent" paddingClass="py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Sidebar Area */}
          <div className="bg-[#1A1A1A] p-10 text-white md:w-1/3 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-[#C49A45] rounded-2xl flex items-center justify-center mb-8">
                <ClipboardList size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Request a Quote</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Fill out the form with your project details. Our estimation team will review your requirements and get back to you within 24 hours with a comprehensive proposal.
              </p>
            </div>
            
            <div className="border-t border-white/10 pt-8 mt-8">
              <p className="text-sm text-gray-400 mb-2">Need immediate assistance?</p>
              <p className="font-bold text-[#C49A45] text-xl">+91 98661 66612</p>
            </div>
          </div>

          {/* Form Area */}
          <div className="p-10 md:w-2/3">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full bg-[#F8F5F2] border-none rounded-lg p-3 focus:ring-2 focus:ring-[#C49A45] outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                  <input type="tel" className="w-full bg-[#F8F5F2] border-none rounded-lg p-3 focus:ring-2 focus:ring-[#C49A45] outline-none" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-[#F8F5F2] border-none rounded-lg p-3 focus:ring-2 focus:ring-[#C49A45] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Location</label>
                  <input type="text" className="w-full bg-[#F8F5F2] border-none rounded-lg p-3 focus:ring-2 focus:ring-[#C49A45] outline-none" placeholder="e.g., Jubilee Hills, Hyderabad" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Service Required <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full bg-[#F8F5F2] border-none rounded-lg p-3 appearance-none focus:ring-2 focus:ring-[#C49A45] outline-none" required defaultValue="">
                    <option value="" disabled>Select a service type</option>
                    {services.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                    <option value="multiple">Multiple / Full Project</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Budget (₹)</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Under 1L', '1L - 5L', '5L - 25L', '25L+'].map((range, idx) => (
                    <label key={idx} className="bg-[#F8F5F2] hover:bg-[#C49A45]/10 border border-transparent hover:border-[#C49A45] rounded-lg p-3 text-center cursor-pointer transition-colors relative">
                      <input type="radio" name="budget" value={range} className="absolute opacity-0" />
                      <span className="text-sm font-medium">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Project Description</label>
                <textarea rows="4" className="w-full bg-[#F8F5F2] border-none rounded-lg p-3 focus:ring-2 focus:ring-[#C49A45] outline-none resize-none" placeholder="Briefly describe what you're looking to achieve..."></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Floor Plan / Inspirations (Optional)</label>
                <div className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-[#F8F5F2] hover:border-[#C49A45] transition-colors cursor-pointer bg-white">
                  <UploadCloud size={32} className="mb-2 text-[#C49A45]" />
                  <span className="text-sm font-medium">Click to upload files</span>
                  <span className="text-xs mt-1">PNG, JPG, PDF up to 10MB</span>
                  <input type="file" className="hidden" multiple />
                </div>
              </div>

              <button type="submit" className="bg-[#1A1A1A] text-white hover:bg-[#C49A45] w-full py-4 rounded-lg font-bold text-lg transition-colors mt-4 shadow-lg">
                Submit Request
              </button>

            </form>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default GetQuote;
