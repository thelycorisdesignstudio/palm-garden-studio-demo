import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-title', {
        scrollTrigger: { trigger: '#contact', start: 'top 70%' },
        opacity: 0, y: 60, duration: 1
      });
      gsap.from('.contact-p', {
        scrollTrigger: { trigger: '#contact', start: 'top 70%' },
        opacity: 0, y: 40, duration: 0.8, delay: 0.2
      });
      gsap.from('.contact-info', {
        scrollTrigger: { trigger: '#contact', start: 'top 80%' },
        opacity: 0, y: 30, duration: 0.8, delay: 0.3
      });
      gsap.from('.contact-form', {
        scrollTrigger: { trigger: '#contact', start: 'top 70%' },
        opacity: 0, y: 40, duration: 0.8, delay: 0.4
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
        setFormState('success');
        if (formRef.current) formRef.current.reset();
        
        // Reset to idle after showing success message
        setTimeout(() => {
            setFormState('idle');
        }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" ref={containerRef} className="py-[15vh] px-[4vw] bg-cream text-center">
      <h2 className="contact-title font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold text-forest mb-12 leading-none tracking-tight">
        Let's Create Something Extraordinary
      </h2>
      <p className="contact-p text-xl sm:text-2xl text-deep-green max-w-[700px] mx-auto mb-16">
        Ready to transform your outdoor space? Tell us a bit about your vision, and we'll help you bring it to life.
      </p>

      {/* Locations */}
      <div className="contact-info grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[900px] mx-auto mb-16 text-center">
        <div>
            <h4 className="font-serif text-xl font-semibold mb-2 text-forest">Sharjah</h4>
            <a href="tel:+97165350355" className="text-sage hover:text-gold transition-colors">+971 6 5350355</a>
        </div>
        <div>
            <h4 className="font-serif text-xl font-semibold mb-2 text-forest">Dubai</h4>
            <a href="tel:+97142858711" className="text-sage hover:text-gold transition-colors">+971 4 2858711</a>
        </div>
        <div>
            <h4 className="font-serif text-xl font-semibold mb-2 text-forest">Abu Dhabi</h4>
            <a href="tel:+97125658699" className="text-sage hover:text-gold transition-colors">+971 2 5658699</a>
        </div>
        <div>
            <h4 className="font-serif text-xl font-semibold mb-2 text-forest">Mobile</h4>
            <a href="tel:+971509737181" className="text-sage hover:text-gold transition-colors">+971 50 9737181</a>
        </div>
      </div>

      <form ref={formRef} className="contact-form max-w-[900px] mx-auto relative bg-white p-8 sm:p-12 shadow-2xl" onSubmit={handleSubmit}>
        {formState === 'success' ? (
            <div className="absolute inset-0 bg-sage text-white flex flex-col items-center justify-center p-8 rounded animate-[fadeIn_0.5s_ease] z-20">
                <span className="text-6xl mb-4">✦</span>
                <p className="text-xl sm:text-2xl font-serif text-center">Inquiry received successfully.</p>
                <p className="mt-2 opacity-80">Our team will review your details and contact you within 24 hours.</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-deep-green font-semibold">First Name</label>
                    <input type="text" required disabled={formState === 'submitting'} className="w-full p-4 bg-cream/30 border-b-2 border-deep-green/10 focus:border-sage outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-deep-green font-semibold">Last Name</label>
                    <input type="text" required disabled={formState === 'submitting'} className="w-full p-4 bg-cream/30 border-b-2 border-deep-green/10 focus:border-sage outline-none transition-colors" />
                </div>
                
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-deep-green font-semibold">Email Address</label>
                    <input type="email" required disabled={formState === 'submitting'} className="w-full p-4 bg-cream/30 border-b-2 border-deep-green/10 focus:border-sage outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-deep-green font-semibold">Phone Number</label>
                    <input type="tel" disabled={formState === 'submitting'} className="w-full p-4 bg-cream/30 border-b-2 border-deep-green/10 focus:border-sage outline-none transition-colors" />
                </div>

                <div className="space-y-2 md:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-deep-green font-semibold">Project Type</label>
                    <select className="w-full p-4 bg-cream/30 border-b-2 border-deep-green/10 focus:border-sage outline-none transition-colors appearance-none rounded-none">
                        <option>Private Residence Garden</option>
                        <option>Commercial Landscape</option>
                        <option>Hospitality / Resort</option>
                        <option>Fresh Flower Arrangements</option>
                        <option>Maintenance Contract</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-deep-green font-semibold">Tell us about your vision</label>
                    <textarea rows={4} className="w-full p-4 bg-cream/30 border-b-2 border-deep-green/10 focus:border-sage outline-none transition-colors resize-none"></textarea>
                </div>

                <div className="md:col-span-2 mt-8 text-center">
                    <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="w-full sm:w-auto px-16 py-5 bg-forest text-cream font-semibold tracking-widest uppercase hover:bg-sage hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                    {formState === 'submitting' ? 'Submitting...' : 'Send Inquiry'}
                    </button>
                </div>
            </div>
        )}
      </form>
    </section>
  );
};

export default Contact;