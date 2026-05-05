import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const steps = [
  { num: '01', title: 'Deep Discovery', icon: '→', desc: 'We begin with a profound analysis of your site\'s DNA. Studying sun orientation, soil salinity, and existing architecture to ensure your garden has a permanent foundation for success.' },
  { num: '02', title: 'Conceptual Poetry', icon: '✦', desc: 'Translating your dreams into artistic blueprints. We balance the pragmatic needs of the desert with the poetic flow of high-end design, creating spaces that feel as good as they look.' },
  { num: '03', title: 'Precision Engineering', icon: '◆', desc: 'Detailing the unseen. From complex automatic irrigation systems to structural civil engineering, we ensure every technical aspect is flawlessly planned for longevity.' },
  { num: '04', title: 'Master Craftsmanship', icon: '✧', desc: 'The build phase where vision becomes reality. Our in-house team of 75+ artisans manages every stone, plant, and wire with surgical precision.' },
  { num: '05', title: 'Eternal Evolution', icon: '∞', desc: 'A garden is a living legacy. Through our Landscape Improvement Plan and dedicated maintenance, we guide your landscape as it matures and gains value year after year.' }
];

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-title', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
        opacity: 0, y: 50, duration: 1.2
      });

      gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: 'top 85%' },
          opacity: 0, 
          y: 60, 
          duration: 1, 
          ease: 'power3.out'
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} className="py-[20vh] px-[4vw] bg-sand text-deep-green overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-40">
           <span className="text-xs tracking-[0.5em] uppercase opacity-50 block mb-6">The Way We Work</span>
           <h2 className="process-title font-serif text-6xl sm:text-8xl font-bold text-forest tracking-tighter">
             Method of <br/><span className="italic">Excellence</span>
           </h2>
        </div>

        <div className="relative">
          {/* Timeline Backbone */}
          <div className="absolute left-[30px] lg:left-1/2 top-0 w-[1px] h-full bg-forest/10 -translate-x-1/2"></div>

          {steps.map((step, index) => (
            <div key={step.num} className="timeline-item flex flex-col lg:flex-row gap-12 lg:gap-32 mb-40 lg:mb-64 relative last:mb-0">
              
              {/* Central Number Circle */}
              <div className="absolute left-[30px] lg:left-1/2 top-0 -translate-x-1/2 w-[60px] h-[60px] bg-forest text-cream rounded-full flex items-center justify-center font-serif text-xl z-10 shadow-xl border-4 border-sand">
                {step.num}
              </div>

              {/* Icon Visual */}
              <div className={`hidden lg:flex flex-1 justify-center items-center ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                <div className="w-[300px] h-[400px] bg-white p-2 shadow-2xl">
                    <div className="w-full h-full border border-forest/5 flex items-center justify-center">
                        <span className="font-serif text-8xl opacity-10 italic">{step.icon}</span>
                    </div>
                </div>
              </div>

              {/* Content Card */}
              <div className={`flex-1 pl-[80px] lg:pl-0 ${index % 2 === 0 ? 'order-2' : 'order-1 lg:text-right'}`}>
                <div className="pt-2">
                    <h3 className="font-serif text-4xl font-bold text-forest mb-6">{step.title}</h3>
                    <p className="text-lg leading-relaxed text-deep-green/80 max-w-[500px] ml-auto mr-auto lg:mr-0 lg:ml-auto">
                      {step.desc}
                    </p>
                    <div className="mt-8 flex gap-4 lg:justify-end">
                        <span className="w-8 h-[1px] bg-gold self-center"></span>
                        <span className="text-[10px] tracking-widest uppercase text-gold font-bold">Inquiry Stage</span>
                    </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;