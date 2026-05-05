import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-24 px-[4vw] bg-forest text-cream/80 border-t border-cream/5">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        
        <div className="footer-col">
          <h3 className="font-serif text-2xl font-semibold mb-8 text-white">Palm Gardens</h3>
          <p className="leading-relaxed mb-6">
            A well-established landscaping business based in Sharjah, serving all seven Emirates with exceptional green solutions since 2008.
          </p>
          <p className="leading-relaxed mb-6">
            Sharjah: +971 6 5350355<br/>
            Dubai: +971 4 2858711<br/>
            Abu Dhabi: +971 2 5658699<br/>
            Email: palmg@eim.ae
          </p>
        </div>

        <div className="footer-col">
          <h3 className="font-serif text-2xl font-semibold mb-8 text-white">Discover</h3>
          <ul className="space-y-4">
            <li><Link to="/about" className="hover:text-gold hover:pl-2 transition-all duration-300 block">About Studio</Link></li>
            <li><Link to="/services" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Our Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="font-serif text-2xl font-semibold mb-8 text-white">Ventures</h3>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-gold hover:pl-2 transition-all duration-300 block">FlowerPoint.ae</a></li>
            <li><a href="#" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Palm Trading</a></li>
            <li><a href="#" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Landscape Care</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="font-serif text-2xl font-semibold mb-8 text-white">Connect</h3>
          <ul className="space-y-4">
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:pl-2 transition-all duration-300 block">LinkedIn</a></li>
            <li><a href="#" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Pinterest</a></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-cream/10 pt-16 text-center opacity-60 text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; 2026 Palm Gardens Plants & Flowers. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <p>A Venture of Palm Gardens LLC</p>
          <button onClick={scrollToTop} className="uppercase tracking-widest hover:text-white transition-colors">
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;