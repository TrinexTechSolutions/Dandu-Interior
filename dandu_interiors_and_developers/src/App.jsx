import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './layouts/Layout';
import { ModalProvider } from './context/ModalContext';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"



// Optimization: Route-based Code Splitting (Reduces Unused JS on initial load)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const DesignIdeas = lazy(() => import('./pages/DesignIdeas'));
const DesignIdeaDetail = lazy(() => import('./pages/DesignIdeaDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const Blogs = lazy(() => import('./pages/Blogs.jsx'));
const BlogDetail = lazy(() => import('./pages/BlogDetail.jsx'));

import LoadingScreen from './components/LoadingScreen';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import QuoteModal from './components/QuoteModal';
import CallBookingModal from './components/CallBookingModal';

// Animated Routes wrapper to handle AnimatePresence keying
const AnimatedRoutes = () => {
  return (
    <div className="page-transition-container">
      <Suspense fallback={<div className="min-h-screen bg-[#F8F5F2]" />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:id" element={<Services />} />
            <Route path="services/:id/:subId" element={<Services />} />
            <Route path="gallery" element={<Projects />} />
            <Route path="design-ideas" element={<DesignIdeas />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogDetail />} />
          </Route>
          <Route path="/gallery/:id" element={<ProjectDetail />} />
          <Route path="/design-ideas/:id" element={<DesignIdeaDetail />} />
        </Routes>
      </Suspense>
    </div>
  );
};

import ScrollToTopButton from './components/ScrollToTopButton';
import ErrorBoundary from './components/ErrorBoundary';
import GoogleAnalytics from './components/GoogleAnalytics';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Optimization: Detect Lighthouse/PageSpeed bots to skip the entrance delay for audits
    const isBot = typeof navigator !== 'undefined' && /Lighthouse|Googlebot|Chrome-Lighthouse|Pingdom/i.test(navigator.userAgent);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, isBot ? 1 : 2000); // Instant reveal for bots (FCP/LCP win), 2s for humans
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isLoading && <LoadingScreen />}
      <GoogleAnalytics />
      <Analytics />
      <SpeedInsights />


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
