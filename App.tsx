import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
    // Immediate scroll to top
    window.scrollTo(0, 0);
    
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
    // Standardized scroll lock
    document.body.classList.add('is-locked');

    return () => {
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
    <Router>
      <AppContent isLoading={isLoading} onComplete={handleLoaderComplete} />
    </Router>
  );
};

export default App;