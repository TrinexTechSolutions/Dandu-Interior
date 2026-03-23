import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-grow relative">
        <Outlet />
      </main>
      <Footer />
      <QuoteModal />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
