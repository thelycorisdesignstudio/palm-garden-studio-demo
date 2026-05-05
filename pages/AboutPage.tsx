import React from 'react';
import Philosophy from '../components/Philosophy';
import Process from '../components/Process';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 bg-cream">
      <div className="px-[4vw] mb-20">
        <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl text-forest mb-12">Heritage of <br/>Greenery</h1>
        <p className="text-xl max-w-2xl text-deep-green leading-relaxed">
          Founded in 2008 in the heart of the UAE, Palm Gardens was born from a singular vision: to prove that nature can flourish anywhere with the right touch of artistry and science.
        </p>
      </div>
      
      <Philosophy />
      
      <div className="py-32 px-[4vw] bg-forest text-cream">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-serif text-4xl sm:text-6xl mb-12">The Founder's Message</h2>
            <p className="text-lg opacity-80 leading-relaxed mb-8">
              "Every project at Palm Gardens reflects our deep commitment to quality, innovation, and environmental stewardship. We strive to exceed our clients' expectations by bringing their visions to life with care and precision."
            </p>
            <div className="flex items-center gap-6">
               <div className="w-16 h-[1px] bg-sand"></div>
               <span className="font-serif text-xl">Reji Thomas, CEO & Founder</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 border border-white/10">
              <h3 className="text-gold text-4xl font-bold mb-2">15+</h3>
              <p className="text-xs uppercase tracking-widest">Years of Experience</p>
            </div>
            <div className="bg-white/5 p-8 border border-white/10">
              <h3 className="text-gold text-4xl font-bold mb-2">75+</h3>
              <p className="text-xs uppercase tracking-widest">Trained Experts</p>
            </div>
            <div className="bg-white/5 p-8 border border-white/10">
              <h3 className="text-gold text-4xl font-bold mb-2">400+</h3>
              <p className="text-xs uppercase tracking-widest">Maintenance Sites</p>
            </div>
            <div className="bg-white/5 p-8 border border-white/10">
              <h3 className="text-gold text-4xl font-bold mb-2">7</h3>
              <p className="text-xs uppercase tracking-widest">Emirates Covered</p>
            </div>
          </div>
        </div>
      </div>

      <Process />
    </div>
  );
};

export default AboutPage;