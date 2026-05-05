import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const services = [
  { id: '01', title: 'Landscaping & Irrigation', desc: 'Comprehensive irrigation services ensuring lush, thriving environments. We utilize top-of-the-line commercial equipment for automatic and manual systems.' },
  { id: '02', title: 'Softscape & Planting', desc: 'From carpet lawns to ancient gardens, we specialize in landscape gardening, planting, and creating cool, peaceful atmospheres for homes and offices.' },
  { id: '03', title: 'Carpentry & Composite', desc: 'Beautifully crafted pergolas, gazebos, and composite structures that add style and function. Guaranteed craftsmanship for enduring outdoor beauty.' },
  { id: '04', title: 'Civil & Hardscape', desc: 'Expertly crafted outdoor spaces including stone pathways, custom playgrounds, and distinctive paving designs that dramatically enhance property appeal.' },
  { id: '05', title: 'Electrical & Lighting', desc: 'Custom lighting solutions that highlight landscape beauty, create ambiance, and enhance security. Energy-efficient and durable options for every style.' },
  { id: '06', title: 'Water Features', desc: 'Soothing water features and stylish swimming pools tailored to your vision. We design, install, and maintain serene paradises for homes and businesses.' },
  { id: '07', title: 'Green Walls & Indoor', desc: 'Premium indoor plants and expertly crafted green walls, including moss walls and artificial vertical gardens, transforming interiors with natural beauty.' },
  { id: '08', title: 'Maintenance (AMC)', desc: 'Proactive landscape care for over 400 contracts. Our skilled team handles everything from pruning to pest control, ensuring your investment is protected.' },
  { id: '09', title: 'Artificial Grass', desc: 'High-quality artificial grass for playgrounds, lawns, and football pitches. A durable, low-maintenance option for a lush green look year-round.' },
  { id: '10', title: 'Gravel & Stone', desc: 'Versatile landscaping material adding texture and visual interest. Ideal for pathways, driveways, and decorative borders in various colors and sizes.' },
  { id: '11', title: 'Fresh Flowers', desc: 'One of the UAE\'s top florists since 2008. Exquisite floral arrangements and bouquets for corporate events, hotels, and special occasions.' }
];

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-title', {
        scrollTrigger: { trigger: '#services', start: 'top 70%' },
        opacity: 0, y: 60, duration: 1
      });

      gsap.from('.service-item', {
        scrollTrigger: { trigger: '.services-grid', start: 'top 70%' },
        opacity: 0, y: 80, stagger: 0.1, duration: 0.8, ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-[15vh] px-[4vw] bg-forest text-cream">
      <h2 className="services-title font-serif text-5xl sm:text-7xl md:text-8xl font-bold text-center mb-32 tracking-tight">
        Our Expertise
      </h2>

      <div className="services-grid max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-cream/15">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            id={`service-${service.id}`}
            className="service-item group relative p-12 border-b border-r border-cream/15 lg:border-r lg:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(even)]:border-r-0 lg:[&:nth-child(even)]:border-r overflow-hidden hover-trigger min-h-[320px]"
          >
            {/* Hover Background */}
            <div className="absolute top-0 left-0 w-full h-0 bg-sage transition-all duration-500 ease-out group-hover:h-full z-0"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="font-serif text-4xl font-light text-sand mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                {service.id}
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 tracking-tight leading-none">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity mt-auto">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;