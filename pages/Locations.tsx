
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Location } from '../types';

export const locationData: Location[] = [
  {
    id: 'neemuch-main',
    city: 'Neemuch',
    district: 'LIC Road / IDBI Bank Area',
    address: 'Bunglow no.23, LIC Road Opp. IDBI Bank, Neemuch (M.P)',
    status: 'Open Now',
    hours: 'Open Daily: 10 AM - 10 PM',
    icon: 'restaurant',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521017432531-fbd92d744264?q=80&w=800&auto=format&fit=crop'
    ],
    fullDescription: 'Our flagship outlet in Neemuch offers a vibrant atmosphere with dedicated spaces for families and friends. Known for maintaining the highest standards of hygiene and speed. It is the go-to spot for fast food lovers who value quality and taste above all.',
    phone: '+91 95092 05025',
    email: 'jainifood3@gmail.com',
    outletSpecials: [
      { id: 'j1', title: 'Volcano Cheese Pizza', description: 'Molten blend of premium cheeses with seasonal veggies and signature sauce.', price: '₹280', image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=600&auto=format&fit=crop' },
      { id: 'j2', title: 'Cheese Chutney Sandwich', description: 'Jaini special spicy mint chutney, grilled bread, and thick cheese layers.', price: '₹120', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop' },
      { id: 'j3', title: 'Double Cheese Burger', description: 'Two fresh veggie patties, four slices of cheese, and secret herb mayo.', price: '₹140', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' },
      { id: 'j4', title: 'Veg Fried Rice', description: 'Classic Indo-Chinese style rice with wok-charred vegetables and spices.', price: '₹150', image: 'https://images.unsplash.com/photo-1512058560366-cd24270083cd?q=80&w=600&auto=format&fit=crop' },
      { id: 'j5', title: 'Cheese Masala Dosa', description: 'Extra crispy golden dosa filled with spicy potato mash and loads of cheese.', price: '₹160', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop' },
      { id: 'j6', title: 'Paneer Grill Sandwich', description: 'Spiced paneer cubes grilled to perfection with onions, capsicum, and cheese.', price: '₹130', image: 'https://images.unsplash.com/photo-1551410224-699683e15636?q=80&w=600&auto=format&fit=crop' }
    ]
  }
];

const Locations: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <section className="mb-16 text-center lg:text-left">
        <div className="max-w-2xl text-left border-l-8 border-primary pl-8">
          <h1 className="text-6xl lg:text-8xl font-black tracking-tight mb-6 leading-[0.9]">
            Find Our <span className="text-primary italic font-accent lowercase normal-case">Outlet</span>
          </h1>
          <p className="text-xl text-neutral-grey font-medium max-w-xl leading-relaxed">
            Visit us in the heart of Neemuch for a fast, delicious, and completely vegetarian experience. Our space is designed for comfort and joy.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {locationData.map((loc) => (
          <div key={loc.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5 border border-primary/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/10">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={loc.image} alt={loc.city} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur rounded-full px-4 py-1.5 flex items-center gap-2 shadow-sm">
                <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-charcoal">{loc.status}</span>
              </div>
            </div>
            <div className="p-10">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-4xl font-black tracking-tighter">{loc.city}</h3>
                <span className="material-symbols-outlined text-primary text-3xl">{loc.icon}</span>
              </div>
              <p className="text-primary font-bold text-sm mb-6 uppercase tracking-[0.2em]">{loc.district}</p>
              <div className="space-y-3 mb-10">
                 <div className="flex items-center gap-3 text-sm text-neutral-grey font-medium">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-grey font-medium">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                    <span>{loc.hours}</span>
                  </div>
              </div>
              <Link 
                to={`/locations/${loc.id}`}
                className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg hover:brightness-110 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
              >
                View Details & Specials
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        ))}
        
        {/* Family Space Reservation Card */}
        <div className="bg-secondary rounded-[2.5rem] p-10 text-white flex flex-col justify-center items-center text-center gap-8 shadow-2xl shadow-secondary/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <div className="size-24 bg-white/20 rounded-full flex items-center justify-center shadow-xl">
                <span className="material-symbols-outlined text-5xl">groups</span>
            </div>
            <div>
                <h4 className="text-4xl font-black tracking-tight mb-3 uppercase">Family Haven</h4>
                <p className="font-medium text-lg opacity-90 leading-relaxed">Planning a birthday or family outing? We offer a separate, peaceful space for large groups. Book in advance for the best experience!</p>
            </div>
            <a href="https://api.whatsapp.com/send?phone=919509205025" target="_blank" rel="noreferrer" className="bg-white text-secondary px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-transform active:scale-95">
                Reserve Space
            </a>
        </div>
      </section>
    </div>
  );
};

export default Locations;
