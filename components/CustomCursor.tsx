import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    const ticker = gsap.ticker.add(() => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      if (cursor) {
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      }
    });

    const hoverElements = document.querySelectorAll('a, button, .hover-trigger');
    
    const onMouseEnter = () => {
        if(cursor) {
            cursor.classList.add('scale-[3]', 'bg-terracotta');
            cursor.classList.remove('bg-deep-green');
        }
    };
    
    const onMouseLeave = () => {
        if(cursor) {
            cursor.classList.remove('scale-[3]', 'bg-terracotta');
            cursor.classList.add('bg-deep-green');
        }
    };

    // We use event delegation or re-attach logic in a real app, 
    // but for this structure we'll attach to body to catch bubbling 
    // or use a mutation observer. For simplicity, we attach to window over and over
    // in a more complex app, but here we can just delegate.
    
    const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('a') || target.closest('button') || target.closest('.hover-trigger')) {
            onMouseEnter();
        } else {
            onMouseLeave();
        }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-deep-green rounded-full pointer-events-none z-[10000] mix-blend-difference transition-colors duration-200 ease-out -ml-1.5 -mt-1.5"
    />
  );
};

export default CustomCursor;