
import React from 'react';
import { Link } from 'react-router-dom';
import { SpecialItem } from '../types';

const Home: React.FC = () => {
  const specials: SpecialItem[] = [
    {
      id: '1',
      title: 'Volcano Cheese Pizza',
      description: 'Our bestseller. A molten core of blended cheeses on a crispy base with fresh toppings.',
      price: '₹280',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: '2',
      title: 'Cheese Chutney Sandwich',
      description: 'The ultimate Neemuch classic. Tangy mint chutney with thick layers of premium cheese.',
      price: '₹120',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: '3',
      title: 'Double Cheese Burger',
      description: 'Juicy vegetable patty, double cheese slices, and our secret Jaini special sauce.',
      price: '₹140',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: '4',
      title: 'Crispy Cheese Dosa',
      description: 'Thin rice crepes filled with a generous amount of melted cheese and spicy potato masala.',
      price: '₹160',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pb-12">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-neutral-charcoal min-h-[640px] flex flex-col justify-center shadow-2xl shadow-primary/10">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
              <img 
                alt="Volcano Cheese Pizza" 
                className="h-full w-full object-cover animate-in fade-in zoom-in duration-1000" 
                src="https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=1200&auto=format&fit=crop" 
              />
            </div>
            <div className="relative z-20 px-8 md:px-16 max-w-2xl flex flex-col gap-8">
              <div className="space-y-4">
                <span className="inline-block px-5 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-black uppercase tracking-widest backdrop-blur-md">
                  Fast & Convenient
                </span>
                <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] tracking-tight">
                  Fresh Taste. <br /><span className="text-primary italic font-accent lowercase normal-case">Jaini</span> Style.
                </h1>
                <p className="text-xl text-white/80 font-medium leading-relaxed max-w-lg">
                  Neemuch's favorite destination for mouthwatering pizzas, sandwiches, and the best double cheese burgers in town.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg hover:scale-[1.05] transition-transform flex items-center gap-3 shadow-xl shadow-primary/30">
                  Order Now
                  <span className="material-symbols-outlined">shopping_cart</span>
                </Link>
                <Link to="/gallery" className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-black text-lg hover:bg-white/20 transition-all">
                  View Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-0 rounded-3xl overflow-hidden shadow-xl -mt-10 relative z-30">
        <div className="bg-primary p-6 flex items-center justify-center gap-4 text-white">
          <span className="material-symbols-outlined">location_on</span>
          <span className="font-bold text-sm">Bunglow no.23, LIC Road, Neemuch</span>
        </div>
        <div className="bg-secondary p-6 flex items-center justify-center gap-4 text-white border-x border-white/10">
          <span className="material-symbols-outlined">schedule</span>
          <span className="font-bold text-sm">Open Daily: 10 AM - 10 PM</span>
        </div>
        <div className="bg-accent p-6 flex items-center justify-center gap-4 text-neutral-charcoal">
          <span className="material-symbols-outlined">call</span>
          <span className="font-black text-sm">+91 95092 05025</span>
        </div>
      </section>

      {/* About Brand Section */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop" className="rounded-3xl shadow-lg border-4 border-white transform rotate-[-2deg]" alt="Jaini Interior" />
                <img src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=400&auto=format&fit=crop" className="rounded-3xl shadow-lg border-4 border-white transform rotate-[3deg]" alt="Happy Customers" />
             </div>
             <div className="pt-12 space-y-4">
                <img src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=400&auto=format&fit=crop" className="rounded-3xl shadow-lg border-4 border-white" alt="Sandwich Preparation" />
                <div className="aspect-square bg-primary rounded-3xl flex flex-col items-center justify-center text-white p-6 text-center transform rotate-[-5deg] shadow-2xl">
                    <span className="text-4xl font-black mb-2 tracking-tighter">100%</span>
                    <span className="text-xs font-bold uppercase tracking-widest leading-tight">Fresh &<br/>Vegetarian</span>
                </div>
             </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-primary font-accent text-3xl lowercase">Our Story</h2>
            <h3 className="text-5xl font-black tracking-tighter leading-tight">Fast Food, <br/><span className="text-secondary underline decoration-accent decoration-4">Done Right.</span></h3>
            <p className="text-neutral-grey text-lg leading-relaxed font-medium">
              Jaini Food Neemuch is your go-to destination for fast and convenient meals that never compromise on taste or quality. From our signature sandwiches to mouthwatering pizzas, every dish is crafted with fresh ingredients and authentic recipes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="flex flex-col items-center text-center gap-3">
                    <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-3xl">restaurant_menu</span>
                    </div>
                    <span className="font-bold text-sm">Fresh Ingredients</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                    <div className="size-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-3xl">verified_user</span>
                    </div>
                    <span className="font-bold text-sm">Hygienic Prep</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                    <div className="size-16 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
                    </div>
                    <span className="font-bold text-sm">Made with Love</span>
                </div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm border-b-2 border-primary/20 hover:border-primary transition-all pb-1">
              Read Our Full Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-24 bg-white/50 border-y border-primary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-primary font-accent text-3xl mb-2 lowercase">Must Try</h2>
              <h3 className="text-5xl font-black tracking-tighter">What We're <span className="text-primary">Famous</span> For</h3>
            </div>
            <p className="text-neutral-grey font-medium max-w-md md:text-right">
              Explore the flavors that made us Neemuch's favorite spot for fast, delicious, and convenient vegetarian dining.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specials.map((item, idx) => (
              <div key={item.id} className="group flex flex-col gap-6 p-4 rounded-[2rem] bg-bg-cream border border-primary/10 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5">
                <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden relative">
                   <img 
                    alt={item.title} 
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src={item.image} 
                  />
                  {idx === 0 && (
                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg animate-pulse">
                      BEST SELLER
                    </div>
                  )}
                </div>
                <div className="px-2 space-y-2">
                   <div className="flex justify-between items-center">
                    <h5 className="text-xl font-black tracking-tight">{item.title}</h5>
                    <span className="text-primary font-black">{item.price}</span>
                  </div>
                  <p className="text-neutral-grey text-sm leading-relaxed font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
