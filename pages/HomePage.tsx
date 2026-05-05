import React from 'react';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import Clients from '../components/Clients';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';

interface HomePageProps {
  isLoading: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ isLoading }) => {
  return (
    <>
      <Hero isLoading={isLoading} />
      <div className="py-20 text-center px-4 bg-cream">
        <p className="font-serif text-2xl text-forest max-w-3xl mx-auto italic opacity-80">
          "The landscape is a canvas, and we are the artists who breathe life into every stroke."
        </p>
      </div>
      <Philosophy />
      <Clients />
      <Services />
      <Portfolio />
      <Testimonials />
    </>
  );
};

export default HomePage;