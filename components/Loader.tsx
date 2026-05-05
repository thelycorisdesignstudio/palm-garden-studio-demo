import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Logo from './Logo';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: onComplete
      });

      // Animate Progress and Logo
      tl.fromTo(logoRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' })
        .to(progressRef.current, {
          width: '100%',
          duration: 2,
          ease: 'power2.inOut'
        }, 0)
        // Slide Up
        .to(containerRef.current, {
          yPercent: -100,
          duration: 1,
          ease: 'power4.inOut',
          delay: 0.2
        });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-forest z-[99999] flex flex-col items-center justify-center text-cream"
    >
      <div ref={logoRef} className="opacity-0">
        <Logo className="w-24 h-24 sm:w-32 sm:h-32 text-cream" />
      </div>
      
      <div ref={barRef} className="w-[200px] h-[1px] bg-cream/20 mt-12 relative overflow-hidden">
        <div ref={progressRef} className="absolute top-0 left-0 h-full w-0 bg-sand"></div>
      </div>
    </div>
  );
};

export default Loader;
