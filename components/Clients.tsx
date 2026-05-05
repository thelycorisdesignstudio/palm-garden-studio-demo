import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const clients = [
  "Emaar", "Damac", "Dubai Properties", "DEWA", "Abu Dhabi University", 
  "Rolls Royce", "Taj Hotels", "Jumeirah Hotels", "Global Village", 
  "Mashreq Bank", "Dubai Hills", "Al Barari", "Emirates Hills", 
  "Palm Jumeirah", "AW Rostamani", "Government of Sharjah", 
  "PepsiCo", "Sanad", "Belhasa Driving Center", "Damas"
];

const Clients: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in title
      gsap.from('.clients-title', {
        scrollTrigger: { trigger: '#clients', start: 'top 80%' },
        opacity: 0, y: 30, duration: 1
      });

      // Infinite Marquee
      const slider = sliderRef.current;
      if (slider) {
        const totalWidth = slider.scrollWidth;
        // We clone the content to make it seamless, so we animate half the width
        gsap.to(slider, {
          x: `-${totalWidth / 2}px`,
          duration: 30,
          ease: "none",
          repeat: -1
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="clients" ref={containerRef} className="py-[10vh] bg-cream border-t border-forest/5 overflow-hidden">
      <div className="px-[4vw] mb-12 text-center">
        <h3 className="clients-title font-serif text-3xl sm:text-4xl text-forest/80">
          Trusted by the Region's Visionaries
        </h3>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 w-[10vw] h-full bg-gradient-to-r from-cream to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-[10vw] h-full bg-gradient-to-l from-cream to-transparent z-10"></div>

        <div ref={sliderRef} className="flex gap-16 sm:gap-32 w-max items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
          {/* First set */}
          {clients.map((client, i) => (
            <span key={i} className="text-xl sm:text-3xl font-serif text-deep-green whitespace-nowrap">
              {client}
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, i) => (
            <span key={`dup-${i}`} className="text-xl sm:text-3xl font-serif text-deep-green whitespace-nowrap">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;