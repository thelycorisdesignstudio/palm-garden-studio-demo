import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FlowerPoint: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fp-content', {
        scrollTrigger: { trigger: '#flower-point', start: 'top 60%' },
        opacity: 0, y: 50, duration: 1
      });
      
      gsap.from('.fp-image', {
        scrollTrigger: { trigger: '#flower-point', start: 'top 60%' },
        scale: 0.9, opacity: 0, duration: 1.2, delay: 0.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="flower-point" ref={containerRef} className="py-[15vh] px-[4vw] bg-terracotta/10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="fp-content order-2 lg:order-1">
          <div className="inline-block px-4 py-2 border border-terracotta rounded-full text-xs tracking-widest uppercase text-terracotta mb-8">
            A Venture of Palm Gardens LLC
          </div>
          <h2 className="font-serif text-5xl sm:text-7xl text-terracotta mb-8 leading-none">
            Flower Point<span className="text-3xl opacity-50">.ae</span>
          </h2>
          <p className="text-xl text-forest/80 mb-8 leading-relaxed">
            Elevating the art of gifting. Established in 2008 as one of the UAE's top florists, we bring the same dedication to fresh flowers that we do to vast landscapes.
          </p>
          <ul className="space-y-4 mb-10 text-forest/90">
            <li className="flex items-center gap-4">
              <span className="w-2 h-2 bg-terracotta rounded-full"></span>
              Exquisite hand-tied bouquets for all occasions
            </li>
            <li className="flex items-center gap-4">
              <span className="w-2 h-2 bg-terracotta rounded-full"></span>
              Corporate floral arrangements for lobbies & events
            </li>
            <li className="flex items-center gap-4">
              <span className="w-2 h-2 bg-terracotta rounded-full"></span>
              Same-day luxury flower delivery across Dubai
            </li>
          </ul>
          <a href="#" className="inline-block border-b border-terracotta text-terracotta pb-1 text-sm tracking-widest uppercase hover:text-forest hover:border-forest transition-all">
            Visit FlowerPoint.ae →
          </a>
        </div>

        <div className="fp-image order-1 lg:order-2 relative h-[400px] sm:h-[600px] w-full bg-white shadow-2xl overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A574] to-[#C45A3C] opacity-90"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
              <span className="font-serif text-8xl sm:text-9xl opacity-20 group-hover:opacity-40 transition-opacity duration-700">✿</span>
              <p className="font-serif text-3xl sm:text-4xl mt-8 relative z-10">Where emotions bloom.</p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default FlowerPoint;