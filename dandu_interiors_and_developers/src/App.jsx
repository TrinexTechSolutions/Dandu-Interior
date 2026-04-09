import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import LoadingScreen from './components/LoadingScreen';

import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import QuoteModal from './components/QuoteModal';
import CallBookingModal from './components/CallBookingModal';

// Animated Routes wrapper to handle AnimatePresence keying
const AnimatedRoutes = () => {
  return (
    <div className="page-transition-container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="design-ideas" element={<DesignIdeas />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        </Route>
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/design-ideas/:id" element={<DesignIdeaDetail />} />
      </Routes>
    </div>
  );
};

import ScrollToTopButton from './components/ScrollToTopButton';
import ErrorBoundary from './components/ErrorBoundary';
import GoogleAnalytics from './components/GoogleAnalytics';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds allows for full animation + curtain exit transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isLoading && <LoadingScreen />}
      <GoogleAnalytics />
      <SmoothScroll>
        <ErrorBoundary>
          <ModalProvider>
            <CustomCursor />
            <AnimatedRoutes />
            <QuoteModal />
            <CallBookingModal />
            <ScrollToTopButton />
          </ModalProvider>
        </ErrorBoundary>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
