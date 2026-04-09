import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [callService, setCallService] = useState('');
  const [isDetailDrawerOpen, setIsDetailDrawerOpen] = useState(false);
  
  // Storage for global drawer content
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIdea, setSelectedIdea] = useState(null);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);
  const openCallModal = (service = '') => {
    setCallService(service);
    setIsCallModalOpen(true);
  };
  const closeCallModal = () => {
    setIsCallModalOpen(false);
    setCallService('');
  };

  const setDetailDrawerOpen = (isOpen) => setIsDetailDrawerOpen(isOpen);

  const openProjectDrawer = (project) => {
    setSelectedProject(project);
    setIsDetailDrawerOpen(true);
  };

  const closeProjectDrawer = () => {
    setIsDetailDrawerOpen(false);
    // Delay clearing data to allow exit animations to finish
    setTimeout(() => setSelectedProject(null), 500);
  };

  const openIdeaDrawer = (ideaId) => {
    setSelectedIdea(ideaId);
    setIsDetailDrawerOpen(true);
  };

  const closeIdeaDrawer = () => {
    setIsDetailDrawerOpen(false);
    setTimeout(() => setSelectedIdea(null), 500);
  };

  const openQuoteFromDrawer = () => {
    setIsDetailDrawerOpen(false);
    // Wait for the drawer exit animation to finish before opening the quote modal
    setTimeout(() => {
      setIsQuoteModalOpen(true);
    }, 400); 
  };

  return (
    <ModalContext.Provider value={{ 
      isQuoteModalOpen, 
      openQuoteModal, 
      closeQuoteModal,
      isCallModalOpen,
      openCallModal,
      closeCallModal,
      callService,
      isDetailDrawerOpen,
      setDetailDrawerOpen,
      selectedProject,
      openProjectDrawer,
      closeProjectDrawer,
      selectedIdea,
      openIdeaDrawer,
      closeIdeaDrawer,
      openQuoteFromDrawer
    }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
