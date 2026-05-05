import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Philosophy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Text
      gsap.from('.phil-content > *', {
        scrollTrigger: { 
          trigger: containerRef.current, 
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0, 
        y: 40, 
        stagger: 0.15, 
        duration: 1.2,
        ease: 'power3.out'
      });

      // Parallax Visuals
      gsap.to('.phil-visual-main', {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
      
      gsap.to('.phil-visual-sub', {
        y: -180,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="philosophy" className="philosophy py-[15vh] px-[4vw] bg-cream text-deep-green overflow-hidden">
      <div className="max-w-[1500px] mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-20 lg:gap-32 items-center">
        
        <div className="phil-content relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-gold"></span>
            <span className="text-xs tracking-[0.4em] uppercase text-gold font-bold">Our Philosophy</span>
          </div>
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold leading-[1] text-forest mb-12 tracking-tight">
            Crafting the <br/><span className="italic text-sage font-medium">Future of Nature</span>
          </h2>
          <div className="space-y-8 max-w-[600px]">
            <p className="text-lg sm:text-xl leading-relaxed text-deep-green/90 font-medium">
              Since 2008, Palm Gardens has evolved from a boutique operation to one of the UAE's most respected landscape architecture studios. We believe a garden is not a static object, but a living dialogue between architecture and ecology.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-deep-green/70">
              Our multidisciplinary team of 75+ experts handles everything from rigorous soil science to poetic spatial design. We specialize in creating "Climate-Smart" landscapes that thrive in the desert's unique conditions while minimizing environmental impact.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <li className="flex items-start gap-4">
                <span className="text-gold text-xl">✦</span>
                <span className="text-sm uppercase tracking-widest font-bold">Holistic Stewardship</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold text-xl">✦</span>
                <span className="text-sm uppercase tracking-widest font-bold">Botanical Precision</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold text-xl">✦</span>
                <span className="text-sm uppercase tracking-widest font-bold">Artisan Craft</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold text-xl">✦</span>
                <span className="text-sm uppercase tracking-widest font-bold">Legacy Focused</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative h-[600px] sm:h-[800px] flex items-center">
          {/* Main Card */}
          <div className="phil-visual-main relative w-[80%] aspect-[4/5] bg-forest shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=1200" 
               className="w-full h-full object-cover opacity-60"
               alt="Landscape Detail"
             />
             <div className="absolute inset-0 p-12 flex flex-col justify-end text-cream">
                <span className="font-serif text-8xl font-bold mb-4">16</span>
                <span className="text-sm tracking-[0.3em] uppercase opacity-60">Years of Growth</span>
             </div>
          </div>

          {/* Floater Card */}
          <div className="phil-visual-sub absolute bottom-10 -right-4 sm:-right-10 w-[60%] aspect-[5/4] bg-sand p-10 shadow-2xl z-20 flex flex-col justify-center">
             <div className="text-forest">
                <span className="font-serif text-5xl sm:text-6xl font-bold block mb-4">400+</span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold opacity-70">Completed & Managed Environments Across the Emirates</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;