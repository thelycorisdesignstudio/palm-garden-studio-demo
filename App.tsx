import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

// Standard Registration
gsap.registerPlugin(ScrollTrigger);

const ScrollManager = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Always unlock scrolling when a route is active. This prevents the loader lock
    // from surviving if an animation is interrupted on mobile/Safari.
    document.body.classList.remove('is-locked');
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    
    // Safety check for ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
      // Kill old triggers to avoid "ghosting"
      const allTriggers = ScrollTrigger.getAll();
      allTriggers.forEach(t => t.kill());
      
      // Refresh with delay to ensure new page layout is measured correctly
      const timer = setTimeout(() => {
        ScrollTrigger.refresh(true);
      }, 150);
      
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
};

const AppContent: React.FC<{ isLoading: boolean; onComplete: () => void }> = ({ isLoading, onComplete }) => {
  return (
    <div className="relative min-h-screen bg-cream text-charcoal font-sans selection:bg-sage selection:text-white">
      <CustomCursor />
      <ScrollManager />
      
      {isLoading && <Loader onComplete={onComplete} />}

      <div className="relative z-10">
        <Navbar isLoading={isLoading} />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage isLoading={isLoading} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock only while the intro loader is visible, with a fail-safe unlock so
    // scrolling never gets stuck if GSAP/onComplete is interrupted.
    document.body.classList.add('is-locked');
    const fallbackUnlock = window.setTimeout(() => {
      document.body.classList.remove('is-locked');
      setIsLoading(false);
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh(true);
    }, 5000);

    return () => {
      window.clearTimeout(fallbackUnlock);
      document.body.classList.remove('is-locked');
    };
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    document.body.classList.remove('is-locked');
    
    // Refresh ScrollTrigger after loader animation finishes
    setTimeout(() => {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    }, 500);
  };

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppContent isLoading={isLoading} onComplete={handleLoaderComplete} />
    </BrowserRouter>
  );
};

export default App;