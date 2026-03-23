import React, { useEffect } from 'react';
import { X, ClipboardList, UploadCloud } from 'lucide-react';
import { services } from '../data/services';
import { useModal } from '../context/ModalContext';

const QuoteModal = () => {
  const { isQuoteModalOpen, closeQuoteModal } = useModal();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isQuoteModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isQuoteModalOpen]);

  if (!isQuoteModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={closeQuoteModal}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={closeQuoteModal}
          className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-[#C49A45] rounded-full text-white md:text-gray-400 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Info Sidebar (Desktop Only) */}
        <div className="hidden md:flex bg-[#1A1A1A] p-10 text-white w-1/3 flex-col justify-between">
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

        {/* Form Content */}
        <div className="w-full md:w-2/3 p-6 md:p-10 overflow-y-auto">
          <div className="md:hidden flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#C49A45] rounded-xl flex items-center justify-center">
              <ClipboardList size={20} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold">Request a Quote</h2>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); closeQuoteModal(); alert('Quote Request Sent!'); }} className="flex flex-col gap-6">
            
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
                <input type="text" className="w-full bg-[#F8F5F2] border-none rounded-lg p-3 focus:ring-2 focus:ring-[#C49A45] outline-none" placeholder="e.g., Jubilee Hills" />
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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['Under 1L', '1L-5L', '5L-25L', '25L+'].map((range, idx) => (
                  <label key={idx} className="bg-[#F8F5F2] hover:bg-[#C49A45]/10 border border-transparent hover:border-[#C49A45] rounded-lg p-3 text-center cursor-pointer transition-colors relative">
                    <input type="radio" name="modal_budget" value={range} className="absolute opacity-0" />
                    <span className="text-xs font-medium">{range}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
              <textarea rows="3" className="w-full bg-[#F8F5F2] border-none rounded-lg p-3 focus:ring-2 focus:ring-[#C49A45] outline-none resize-none" placeholder="What are you looking to achieve?"></textarea>
            </div>

            <button type="submit" className="bg-[#1A1A1A] text-white hover:bg-[#C49A45] w-full py-4 rounded-lg font-bold text-lg transition-colors mt-2 shadow-lg">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
