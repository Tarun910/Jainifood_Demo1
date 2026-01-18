
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-primary/5 pt-24 pb-12 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-2xl">restaurant</span>
              </div>
               <span className="text-2xl font-black tracking-tight text-neutral-charcoal uppercase">
                Jaini <span className="text-primary font-accent lowercase normal-case text-3xl ml-[-4px]">Food</span>
              </span>
            </div>
            <p className="text-neutral-grey font-medium text-sm leading-relaxed">
              Neemuch's premium fast food destination. Fast, fresh, and convenient vegetarian dining for the whole family.
            </p>
            <div className="flex gap-4">
              <a href="#" className="size-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a href="#" className="size-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                <span className="material-symbols-outlined text-xl">public</span>
              </a>
            </div>
          </div>

          <div>
            <h6 className="text-primary font-accent text-2xl lowercase mb-8">Quick Links</h6>
            <ul className="space-y-4 text-sm font-bold text-neutral-grey">
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="size-1 bg-primary/30 rounded-full group-hover:w-3 transition-all"></span> Our Menu</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="size-1 bg-primary/30 rounded-full group-hover:w-3 transition-all"></span> Special Combos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="size-1 bg-primary/30 rounded-full group-hover:w-3 transition-all"></span> Family Space</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="size-1 bg-primary/30 rounded-full group-hover:w-3 transition-all"></span> Order Delivery</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-primary font-accent text-2xl lowercase mb-8">Contact Us</h6>
            <ul className="space-y-5 text-sm font-bold text-neutral-grey">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span className="leading-relaxed">Bunglow no.23, LIC Road Opp. IDBI Bank, Neemuch (M.P)</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">call</span>
                +91 95092 05025
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">mail</span>
                jainifood3@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-primary font-accent text-2xl lowercase mb-8">Join the Feast</h6>
            <p className="text-sm font-medium text-neutral-grey mb-6">Stay updated with our latest offers and new menu arrivals.</p>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="w-full px-5 py-4 rounded-2xl bg-bg-cream border-none focus:ring-2 focus:ring-primary text-sm font-bold shadow-inner" 
                placeholder="Enter email address" 
                type="email" 
              />
              <button className="w-full py-4 bg-primary text-white rounded-2xl font-black text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 uppercase tracking-widest">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-neutral-grey/60 font-black uppercase tracking-[0.2em]">
          <p>© 2024 Jaini Food Fast & Convenient Restaurant. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-primary">GST: 23DUCPA6387M1ZE</a>
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
