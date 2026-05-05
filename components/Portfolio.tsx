import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
  {
    category: 'Commercial / Dubai',
    title: 'Global Village',
    desc: 'A vibrant landscape transformation for one of Dubai\'s premier cultural destinations. Creating immersive green spaces that welcome millions of visitors.',
    details: 'Our work at Global Village involved extensive landscape design and implementation to complement the diverse cultural pavilions. We integrated durable hardscapes capable of handling high foot traffic with colorful seasonal softscapes that enhance the festive atmosphere. The project required precise coordination to ensure all green spaces were perfectly manicured for the opening season.',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2670&auto=format&fit=crop'
  },
  {
    category: 'Hospitality / Dubai',
    title: 'Jumeirah Hotels',
    desc: 'Celebrating "World Happiness Day" with a massive, living smiley face installation. A testament to technical precision and joyful design.',
    details: 'For Jumeirah Hotels, we were tasked with a unique challenge: creating a visible landmark for World Happiness Day. We utilized contrasting turf shades and precise softscaping to create a giant smiley face visible from the surrounding high-rises. This project highlighted our ability to execute creative, unconventional concepts with horticultural expertise.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2670&auto=format&fit=crop'
  },
  {
    category: 'Corporate / Abu Dhabi',
    title: 'ADNOC HQ',
    desc: 'Integrating serenity into the corporate world with a custom Japanese Garden and innovative Moss Walls. A fusion of nature and modern business infrastructure.',
    details: 'For the ADNOC Headquarters, we aimed to create a sanctuary within the workplace. The project featured a meticulously designed Japanese Garden, utilizing specific gravel raking techniques and bonsai styling. Inside, we installed vibrant green moss walls that not only beautify the space but also improve air quality and acoustics, fostering a healthier work environment.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2669&auto=format&fit=crop'
  },
  {
    category: 'Healthcare / Sharjah',
    title: 'Al Qasimi Hospital',
    desc: 'Creating safe, healing environments with specialized rubberized flooring and therapeutic garden spaces for patients and visitors.',
    details: 'Healthcare landscapes require a balance of safety and serenity. At Al Qasimi Hospital, we installed high-grade, shock-absorbent rubberized flooring for play areas and walkways, ensuring safety for all ages. Complementing this were low-allergen plant selections and wheelchair-accessible paths, proving that functional design can also be beautiful.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2666&auto=format&fit=crop'
  },
  {
    category: 'Residential / Dubai',
    title: 'Dubai Hills',
    desc: 'Modern, sustainable landscaping for a luxury villa in Dubai Hills. Focusing on water-wise planting without sacrificing lush aesthetics.',
    details: 'This private residence in Dubai Hills demanded a modern aesthetic that aligned with the architectural lines of the villa. We used a palette of native grasses, sculptural succulents, and smart irrigation systems to create a "Jewel Box" garden that looks lush year-round while minimizing water usage. The hardscape featured large-format porcelain pavers floating on decorative gravel.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop'
  },
  {
    category: 'Luxury Retail / Abu Dhabi',
    title: 'Rolls Royce Showroom',
    desc: 'Sophisticated minimalist landscaping that complements the elegance of the world\'s finest automobiles. Precision, restraint, and perfection.',
    details: 'The landscape for Rolls Royce demanded the same attention to detail as the cars themselves. We employed a minimalist approach with sharp, clean lines in the hardscape and perfectly manicured topiary. The selection of flora was restrained to emphasize structure and form over riotous color, creating a dignified and high-end arrival experience for clients.',
    image: 'https://images.unsplash.com/photo-1606744837646-177b96057c70?q=80&w=2670&auto=format&fit=crop'
  }
];

const Portfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.from('.portfolio-title', {
        scrollTrigger: { trigger: '#portfolio', start: 'top 70%' },
        opacity: 0, y: 60, duration: 1
      });

      // Project Items Animation
      const items = gsap.utils.toArray<HTMLElement>('.portfolio-item');
      items.forEach((item) => {
        const content = item.querySelector('.portfolio-content');
        const bg = item.querySelector('.portfolio-bg');
        
        if (content) {
          gsap.from(content, {
            scrollTrigger: { trigger: item, start: 'top 80%' },
            opacity: 0, y: 100, duration: 1, ease: 'power3.out'
          });
        }

        if (bg) {
          gsap.to(bg, {
            y: -150,
            ease: 'none',
            scrollTrigger: { trigger: item, start: 'top bottom', end: 'bottom top', scrub: true }
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('is-locked');
    } else {
      document.body.classList.remove('is-locked');
    }
  }, [selectedProject]);

  return (
    <section id="portfolio" ref={containerRef} className="bg-cream">
      <div className="py-[15vh]">
        <h2 className="portfolio-title px-[4vw] font-serif text-5xl sm:text-7xl md:text-8xl font-bold text-center mb-32 text-forest tracking-tight">
            Selected Works
        </h2>

        <div className="portfolio-grid grid grid-cols-1">
            {projects.map((project, index) => (
            <div 
                key={index} 
                className="portfolio-item relative h-screen w-full overflow-hidden group cursor-pointer hover-trigger"
                onClick={() => setSelectedProject(project)}
            >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="portfolio-bg absolute top-0 left-0 w-full h-[120%] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 will-change-scroll"
                />
                
                <div className="portfolio-content relative z-10 h-full px-[4vw] pb-[8vh] flex flex-col justify-end text-white">
                  <div className="text-sm tracking-[0.15em] uppercase opacity-80 mb-6">
                    {project.category}
                  </div>
                  <h3 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-8 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xl max-w-2xl leading-relaxed opacity-90 mb-12">
                    {project.desc}
                  </p>
                  <button className="inline-flex items-center gap-4 text-sm tracking-widest uppercase pb-2 border-b border-white hover:border-gold hover:pl-4 transition-all duration-300 self-start">
                    Explore Project <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
            <div 
                className="absolute inset-0 bg-forest/95 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
            ></div>
            <div className="relative z-10 bg-cream text-forest w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl animate-[fadeIn_0.5s_ease-out]">
                <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-forest text-cream flex items-center justify-center hover:bg-terracotta transition-colors z-20"
                >
                    ✕
                </button>
                
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-[300px] sm:h-[400px] object-cover" />
                
                <div className="p-8 sm:p-16">
                    <span className="text-sm tracking-[0.15em] uppercase text-sage mb-4 block">{selectedProject.category}</span>
                    <h3 className="font-serif text-4xl sm:text-6xl font-bold mb-8 leading-none">{selectedProject.title}</h3>
                    <p className="text-xl leading-relaxed mb-8 opacity-90 font-medium">
                        {selectedProject.desc}
                    </p>
                    <div className="w-20 h-[1px] bg-forest/20 mb-8"></div>
                    <h4 className="font-serif text-2xl font-bold mb-4">The Vision</h4>
                    <p className="text-lg leading-relaxed opacity-80 mb-12">
                        {selectedProject.details}
                    </p>
                    <a 
                        href="#contact" 
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedProject(null);
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-block px-8 py-4 bg-forest text-cream text-sm tracking-widest uppercase hover:bg-sage transition-colors"
                    >
                        Inquire About Similar Projects
                    </a>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;