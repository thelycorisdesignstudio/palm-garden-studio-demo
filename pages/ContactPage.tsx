import React from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 bg-cream">
      <div className="px-[4vw] mb-20 text-center">
        <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl text-forest mb-12">Connect <br/>With Us</h1>
        <p className="text-xl max-w-2xl text-deep-green leading-relaxed mx-auto">
          We operate across all seven Emirates with offices in Sharjah, Dubai, and Abu Dhabi. Start your transformation today.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-1 px-[4vw] mb-32">
        <div className="bg-forest text-cream p-12">
            <h3 className="font-serif text-3xl mb-6">Head Office</h3>
            <p className="opacity-70 leading-relaxed mb-8">
                Industrial Area 11,<br/>
                Sharjah, UAE
            </p>
            <a href="tel:+97165350355" className="text-sand block mb-2 underline">+971 6 5350355</a>
            <a href="mailto:palmg@eim.ae" className="text-sand underline">palmg@eim.ae</a>
        </div>
        <div className="bg-sage text-white p-12">
            <h3 className="font-serif text-3xl mb-6">Dubai Studio</h3>
            <p className="opacity-80 leading-relaxed mb-8">
                Al Quoz Industrial,<br/>
                Dubai, UAE
            </p>
            <a href="tel:+97142858711" className="text-cream block mb-2 underline">+971 4 2858711</a>
            <span className="text-cream block">Available for Site Visits</span>
        </div>
        <div className="bg-deep-green text-cream p-12">
            <h3 className="font-serif text-3xl mb-6">Abu Dhabi</h3>
            <p className="opacity-70 leading-relaxed mb-8">
                Mussafah Area,<br/>
                Abu Dhabi, UAE
            </p>
            <a href="tel:+97125658699" className="text-sand block mb-2 underline">+971 2 5658699</a>
            <span className="text-sand block">Regional Support Center</span>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default ContactPage;