import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const testimonials = [
  { quote: "They didn't just design our garden—they understood our family's rhythm, our love of gathering, our need for private sanctuaries. Every corner tells our story.", initials: 'SM', name: 'Sarah & Mohammed Al-Hashimi', loc: 'Palm Jumeirah Residence' },
  { quote: "The transformation exceeded every expectation. What was once a barren rooftop is now the heart of our home—a living, breathing masterpiece.", initials: 'JC', name: 'James Chen', loc: 'Dubai Marina Penthouse' },
  { quote: "Palm Garden brought a level of sophistication and ecological thinking that transformed our entire campus. Our employees actually want to be outside now.", initials: 'LN', name: 'Layla Nasser', loc: 'Emirates Technology Park' },
  { quote: "Working with them felt like collaborating with artists who truly understood the desert's poetry. The result is pure magic.", initials: 'RK', name: 'Robert Khoury', loc: 'Arabian Ranches Estate' }
];

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonials-title', {
        scrollTrigger: { trigger: '#testimonials', start: 'top 70%' },
        opacity: 0, y: 60, duration: 1
      });

      gsap.from('.testimonial-card', {
        scrollTrigger: { trigger: '.testimonials-grid', start: 'top 70%' },
        opacity: 0, y: 80, stagger: 0.2, duration: 0.8, ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={containerRef} className="py-[15vh] px-[4vw] bg-deep-green text-cream">
      <h2 className="testimonials-title font-serif text-5xl sm:text-7xl md:text-8xl font-bold text-center mb-32 tracking-tight">
        Client Voices
      </h2>

      <div className="testimonials-grid max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card p-8 sm:p-16 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <p className="font-serif text-2xl sm:text-3xl italic leading-relaxed mb-12 text-sand">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center font-serif text-xl font-bold text-white shrink-0">
                {t.initials}
              </div>
              <div>
                <h4 className="font-semibold text-lg">{t.name}</h4>
                <p className="text-sm opacity-70">{t.loc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;