import React from 'react';
import Services from '../components/Services';
import FlowerPoint from '../components/FlowerPoint';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-32 bg-forest">
      <div className="px-[4vw] mb-20 text-cream">
        <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl mb-12">Artful <br/>Expertise</h1>
        <p className="text-xl max-w-2xl text-sand leading-relaxed">
          From the precision of hardscape engineering to the delicacy of a fresh bouquet, our services span the entire spectrum of living design.
        </p>
      </div>

      <Services />

      <div className="py-32 px-[4vw] bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-serif text-4xl sm:text-6xl text-forest mb-16">Specialized Solutions</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="group">
              <h3 className="text-2xl font-bold mb-4 border-l-4 border-sage pl-6">Landscape Improvement Plan</h3>
              <p className="text-deep-green/80 leading-relaxed">
                Our unique proactive review system identifies potential issues before they become costly repairs, ensuring your investment matures and appreciates over time.
              </p>
            </div>
            <div className="group">
              <h3 className="text-2xl font-bold mb-4 border-l-4 border-sage pl-6">Annual Maintenance Contracts (AMC)</h3>
              <p className="text-deep-green/80 leading-relaxed">
                Comprehensive care for residential and commercial sites, including irrigation monitoring, pruning, fertilization, and daily waste management.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FlowerPoint />
    </div>
  );
};

export default ServicesPage;