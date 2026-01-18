
import React from 'react';

const About: React.FC = () => {
  const values = [
    { title: 'Fresh Food', icon: 'nutrition', desc: 'Every sandwich, pizza, and dosa is prepared with fresh produce daily.' },
    { title: 'Clean & Hygienic', icon: 'sanitizer', desc: 'We maintain extreme standards of cleanliness in our open-view kitchen.' },
    { title: 'Fast Delivery', icon: 'electric_moped', desc: 'Commitment to on-time delivery across Neemuch so your food arrives hot.' },
    { title: 'Cooperative Staff', icon: 'handshake', desc: 'Our team is trained to be helpful, polite, and attentive to every guest.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop" 
            alt="Jaini Food Busy Kitchen"
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <span className="text-accent font-black tracking-[0.4em] uppercase text-xs mb-4 block">The Heart of Neemuch</span>
          <h1 className="text-white text-6xl md:text-9xl font-black mb-6 tracking-tighter leading-none">Jaini <span className="text-primary italic font-accent lowercase normal-case">Food</span></h1>
          <p className="text-white text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto mb-10 opacity-90">
            A tradition of fast, fresh, and delicious vegetarian meals served with unparalleled convenience.
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-32 px-6 bg-bg-cream">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-primary font-accent text-4xl mb-6 lowercase">Our Commitment</h2>
          <h3 className="text-neutral-charcoal text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter mb-12">
            Bringing the best taste of fast food to your table while keeping it <span className="text-secondary">clean, quick, and affordable.</span>
          </h3>
          <div className="w-24 h-2 bg-accent mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 px-6 bg-white shadow-inner">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-bg-cream p-10 rounded-[2.5rem] border border-primary/5 text-center hover:border-primary/20 transition-all duration-300 shadow-xl shadow-primary/5 group">
                <div className="size-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                  <span className="material-symbols-outlined text-4xl">{v.icon}</span>
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{v.title}</h3>
                <p className="text-sm text-neutral-grey leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
               <div className="absolute -top-10 -left-10 size-64 bg-accent/10 rounded-full z-0 blur-3xl"></div>
              <img 
                className="rounded-[3rem] relative z-10 shadow-2xl border-8 border-white" 
                src="https://images.unsplash.com/photo-1583394838336-acd977730f5a?q=80&w=800&auto=format&fit=crop" 
                alt="Chef Amit Jain"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-3xl shadow-2xl z-20 transform rotate-3">
                  <span className="font-accent text-3xl">Amit Jain</span>
                  <p className="text-[10px] font-black uppercase tracking-widest mt-1 opacity-80">Founder & Owner</p>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-primary font-accent text-4xl mb-4 lowercase">The Founder's Vision</h2>
              <h3 className="text-5xl font-black tracking-tighter leading-tight">"Taste is our top priority, but service is our soul."</h3>
              <div className="space-y-6 text-neutral-grey text-xl leading-relaxed font-medium">
                <p>Welcome to Jaini Food. I started this journey in Neemuch with a simple goal: to provide high-quality fast food that is both delicious and affordable for every family.</p>
                <p>Every sandwich we grill and every pizza we bake is a result of my personal commitment to freshness. We believe in providing a clean, hygienic space where you can enjoy the best double cheese burgers and special dosas without worry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-primary text-white text-center rounded-[3rem] mx-6 lg:mx-12 mb-12 shadow-2xl shadow-primary/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">Hungry for the Best?</h2>
          <p className="text-white/80 text-xl mb-12 font-medium">Join us at LIC Road or order online for the freshest fast food in Neemuch.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+919509205025" className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl">Order via Phone</a>
            <button className="bg-secondary text-white px-12 py-5 rounded-2xl font-black text-lg hover:brightness-110 transition-all shadow-xl">Menu Highlights</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
