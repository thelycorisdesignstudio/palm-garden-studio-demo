import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import Logo from './Logo';

interface NavbarProps {
  isLoading: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoading }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('is-locked');
      gsap.fromTo('.mobile-nav-item', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power2.out', delay: 0.3 }
      );
    } else {
      // Small delay to prevent layout snapping
      const timer = setTimeout(() => {
        const loader = document.querySelector('.loader-exists-check'); // If loader is visible
        if (!loader) document.body.classList.remove('is-locked');
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isAtTop = location.pathname === '/' && !scrolled && !isMenuOpen;

  return (
    <>
      <nav className={`fixed left-0 w-full z-[60] transition-all duration-700 ${isLoading ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'} ${scrolled ? 'top-4 left-4 right-4 w-[calc(100%-2rem)] rounded-3xl bg-forest/80 backdrop-blur-md shadow-2xl py-4 px-[4vw]' : 'top-0 w-full py-8 bg-transparent px-[4vw]'}`}>
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <Link to="/" className={`font-serif text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-500 flex items-center gap-2 ${isAtTop || scrolled ? 'text-cream' : 'text-forest'}`}>
            <Logo className="w-8 h-8" />
            <span className="hidden sm:inline">Palm Garden</span>
          </Link>

          <ul className={`hidden lg:flex gap-14 transition-colors duration-500 ${isAtTop || scrolled ? 'text-cream/70' : 'text-forest/70'}`}>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.href}
                  className={`text-[10px] tracking-[0.3em] uppercase relative group transition-all duration-300 hover:text-white ${location.pathname === item.href ? 'text-white font-bold' : ''}`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1.5 left-0 h-[1.5px] bg-gold transition-all duration-500 ${location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5 sm:gap-10">
              <Link 
                  to="/contact"
                  className={`hidden sm:inline-block px-10 py-3.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-500 hover:scale-105 ${isAtTop || scrolled ? 'bg-cream text-forest hover:bg-white' : 'bg-forest text-cream hover:bg-sage'}`}
              >
                  Start Journey
              </Link>

              <button 
                  className={`flex flex-col gap-1.5 w-10 h-10 justify-center items-end group focus:outline-none ${isAtTop || scrolled || isMenuOpen ? 'text-cream' : 'text-forest'}`}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle Menu"
              >
                  <span className={`h-[1px] bg-current transition-all duration-500 ${isMenuOpen ? 'w-full -rotate-45 translate-y-1.25' : 'w-full group-hover:w-2/3'}`}></span>
                  <span className={`h-[1px] bg-current transition-all duration-500 ${isMenuOpen ? 'opacity-0' : 'w-2/3 group-hover:w-full'}`}></span>
                  <span className={`h-[1px] bg-current transition-all duration-500 ${isMenuOpen ? 'w-full rotate-45 -translate-y-1.25' : 'w-1/3 group-hover:w-2/3'}`}></span>
              </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-forest z-[55] flex flex-col justify-center px-[10vw] transition-all duration-700 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-[800px] w-full mx-auto flex flex-col gap-12 sm:gap-16">
            {navItems.map((item) => (
                <Link 
                    key={item.name}
                    to={item.href}
                    className="mobile-nav-item font-serif text-5xl sm:text-7xl md:text-8xl text-cream hover:text-gold transition-all duration-300 transform"
                >
                    {item.name}
                </Link>
            ))}
            <div className="w-full h-[1px] bg-cream/10 mobile-nav-item"></div>
            <Link 
                to="/contact" 
                className="mobile-nav-item text-xs tracking-[0.4em] uppercase text-sand hover:text-white inline-flex items-center gap-4"
            >
                Start Your Transformation Today <span className="text-xl">→</span>
            </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;