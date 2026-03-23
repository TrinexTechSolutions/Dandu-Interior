import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './layouts/Layout';
import { ModalProvider } from './context/ModalContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import DesignIdeas from './pages/DesignIdeas';
import DesignIdeaDetail from './pages/DesignIdeaDetail';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// WhatsApp Floating Button Component
const WhatsAppButton = () => (
  <a 
    href="https://wa.me/919866166612" 
    target="_blank" 
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
    aria-label="Chat on WhatsApp"
  >
    <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21.15 10A10.05 10.05 0 0 0 12 2a10 10 0 0 0-9.87 11.53l-1.63 5.48L5.78 17.5A10 10 0 0 0 12 22a10.05 10.05 0 0 0 9.15-8z"></path><path d="M16 14.5c.34-.17.66-.5.66-.5s.31-.38.16-.6c-.16-.23-.6-.35-.6-.35s-.7-.35-1.17-.6c-.46-.23-.74-.38-.97-.05-.23.35-.47.6-.6.82-.16.23-.35.25-.66.12-.31-.14-.86-.33-1.62-.97-.6-.5-1.02-1.12-1.13-1.35-.13-.23-.03-.35.1-.47.11-.11.23-.25.35-.38.11-.13.16-.23.23-.35.08-.16.03-.31-.02-.42-.05-.12-.46-1.13-.64-1.57-.16-.42-.31-.35-.42-.35h-.35c-.14 0-.35.05-.55.25-.2.23-.74.72-.74 1.77s.78 2.05.88 2.2c.1.14 1.48 2.3 3.61 3.2.5.21.9.35 1.25.46.5.14.97.12 1.34.08.41-.05 1.24-.5 1.41-.98.17-.46.17-.86.12-.95-.05-.08-.17-.14-.35-.23z"></path></svg>
    <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded shadow-md text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Chat with us</span>
  </a>
);

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <ScrollToTop />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:id" element={<Services />} />
            <Route path="projects" element={<Projects />} />
            <Route path="design-ideas" element={<DesignIdeas />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/design-ideas/:id" element={<DesignIdeaDetail />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
