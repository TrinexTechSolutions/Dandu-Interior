import React from 'react';
import { useOutlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import PageTransition from '../components/PageTransition';

import { useModal } from '../context/ModalContext';
import ProjectDetailsDrawer from '../components/ProjectDetailsDrawer';

// Fix: Resolve [INEFFECTIVE_DYNAMIC_IMPORT] by making this lazy in Layout as well
const DesignIdeaDetail = React.lazy(() => import('../pages/DesignIdeaDetail'));

const Layout = () => {
  const element = useOutlet();
  const location = useLocation();
  const { 
    isDetailDrawerOpen, 
    selectedProject, 
    closeProjectDrawer,
    selectedIdea,
    closeIdeaDrawer
  } = useModal();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      {/* Global Drawers rendered at root level */}
      <ProjectDetailsDrawer 
        isOpen={isDetailDrawerOpen && !!selectedProject}
        onClose={closeProjectDrawer}
        project={selectedProject}
      />

      <React.Suspense fallback={null}>
        <DesignIdeaDetail 
          isDrawer={true} 
          drawerId={selectedIdea} 
          onClose={closeIdeaDrawer} 
          isOpen={isDetailDrawerOpen && !!selectedIdea}
        />
      </React.Suspense>

      <AnimatePresence>
        <PageTransition key={location.pathname}>
          <main className="flex-grow relative">
            {element}
          </main>
          <Footer />
        </PageTransition>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
