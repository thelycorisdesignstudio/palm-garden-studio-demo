import React from 'react';
import Portfolio from '../components/Portfolio';
import Clients from '../components/Clients';

const PortfolioPage: React.FC = () => {
  return (
    <div className="pt-32 bg-cream">
      <div className="px-[4vw] mb-20">
        <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl text-forest mb-12">Living <br/>Masterpieces</h1>
        <p className="text-xl max-w-2xl text-deep-green leading-relaxed">
          A curated selection of our most significant transformations across the UAE—from public landmark installations to private coastal retreats.
        </p>
      </div>

      <Portfolio />
      
      <div className="py-20 bg-forest text-cream text-center">
        <p className="font-serif text-3xl italic opacity-60">
          Excellence trusted by the region's elite.
        </p>
      </div>

      <Clients />
    </div>
  );
};

export default PortfolioPage;