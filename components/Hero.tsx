import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroProps {
  isLoading: boolean;
}

const Hero: React.FC<HeroProps> = ({ isLoading }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Cinematic Parallax Background
      gsap.to('.hero-image', {
        scale: 1.2,
        y: '10%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Intro Sequence
      tl.from('.hero-subtitle', { opacity: 0, y: 30, duration: 1, delay: 0.3 })
        .from('.hero-word', {
          opacity: 0,
          y: 40,
          stagger: 0.1,
          duration: 1,
          ease: 'power4.out'
        }, '-=0.5')
        .from('.hero-desc', { opacity: 0, y: 20, duration: 1 }, '-=0.6')
        .from('.hero-cta', { opacity: 0, y: 20, duration: 1 }, '-=0.8');

    }, containerRef);

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-forest">
      {/* Background with Optimized Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-forest/40 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/20 via-transparent to-forest/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=2400" 
          alt="Lush Estate Landscape" 
          className="hero-image w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="relative z-20 text-center px-[4vw]">
        <div className="hero-subtitle text-[10px] sm:text-xs tracking-[0.4em] uppercase text-sand mb-6 font-semibold">
          Palm Garden Studio — Established 2008
        </div>

        <h1 className="hero-title font-serif text-cream font-bold leading-[1.05] tracking-tight mb-8 text-5xl sm:text-7xl md:text-8xl lg:text-9xl max-w-[1200px] mx-auto">
          <div className="overflow-hidden">
            <span className="hero-word inline-block mr-4">Where</span>
            <span className="hero-word inline-block">Nature</span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-word inline-block mr-4">Meets</span>
            <span className="hero-word inline-block text-gold italic">Art</span>
          </div>
        </h1>

        <p className="hero-desc text-base sm:text-lg lg:text-xl text-sand/90 max-w-[650px] mx-auto mb-12 leading-relaxed font-light">
          Sculpting high-performance outdoor environments across the Emirates. From boutique private retreats to majestic commercial landmarks.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a href="/portfolio" className="inline-flex items-center justify-center px-10 py-4 bg-sand text-forest text-[11px] font-bold tracking-widest uppercase hover:bg-white hover:scale-105 transition-all duration-500">
              View Portfolio
            </a>
            <a href="/contact" className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-white text-[11px] font-bold tracking-widest uppercase backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-500">
              Start Project
            </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hero-scroll absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-[9px] tracking-[0.3em] uppercase text-sand/60">
        <span className="animate-pulse">Scroll to Explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-sand/60 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;