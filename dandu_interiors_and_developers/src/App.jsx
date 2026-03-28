import React, { useEffect, useState } from 'react';
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
import LoadingScreen from './components/LoadingScreen';

import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import QuoteModal from './components/QuoteModal';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

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
      <SmoothScroll>
        <ModalProvider>
          <CustomCursor />
          <ScrollToTop />
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
          <QuoteModal />
        </ModalProvider>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
