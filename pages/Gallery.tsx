
import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Moments');

  const categories = ['All Moments', 'Pizza Art', 'Burger Life', 'Our Space', 'Bustling Kitchen'];

  const galleryItems = [
    {
      category: 'Pizza Art',
      title: 'The Volcano Pull',
      desc: 'Capture the perfect cheese pull of our signature Volcano Pizza.',
      aspect: 'aspect-[4/5]',
      img: 'https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=800&auto=format&fit=crop'
    },
    {
      category: 'Our Space',
      title: 'Family Gathering',
      desc: 'Our dedicated space for birthdays and large group celebrations.',
      aspect: 'aspect-square',
      img: 'https://images.unsplash.com/photo-1550966842-286e5f846231?q=80&w=800&auto=format&fit=crop'
    },
    {
      category: 'Burger Life',
      title: 'Double Trouble',
      desc: 'Our Double Cheese Burger stacked high with fresh ingredients.',
      aspect: 'aspect-[3/4]',
      img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop'
    },
    {
      category: 'Pizza Art',
      title: 'Classic Margherita',
      desc: 'Fresh basil and hand-picked tomatoes on a thin crispy crust.',
      aspect: 'aspect-square',
      img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop'
    },
    {
      category: 'Bustling Kitchen',
      title: 'The Sizzle',
      desc: 'Watch our chefs craft your favorite sandwiches in an open kitchen.',
      aspect: 'aspect-video',
      img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop'
    },
    {
      category: 'Bustling Kitchen',
      title: 'Hygienic Prep',
      desc: 'Maintaining extreme cleanliness in every step of food preparation.',
      aspect: 'aspect-[4/5]',
      img: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const filteredItems = activeFilter === 'All Moments' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-bg-cream min-h-screen">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="border-l-8 border-primary pl-8">
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
            The Jaini <br/><span className="text-primary italic font-accent lowercase normal-case">Vibe</span>
          </h1>
          <p className="mt-8 text-xl text-neutral-grey font-medium leading-relaxed max-w-2xl">
            A visual journey through our kitchen, our signature dishes, and the happy moments shared at our Neemuch sanctuary.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-wrap gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-8 py-4 rounded-2xl text-sm font-black transition-all shadow-md ${
                activeFilter === cat 
                ? 'bg-primary text-white shadow-primary/30' 
                : 'bg-white border border-primary/5 hover:bg-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry-style Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx} 
              className="break-inside-avoid group relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-primary/5 transition-all hover:-translate-y-2 hover:shadow-primary/20"
            >
              <div className={`${item.aspect} w-full overflow-hidden`}>
                <img 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={item.img} 
                  alt={item.title} 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-10">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-3">{item.category}</span>
                <h3 className="text-3xl font-black text-white tracking-tight leading-none mb-4">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center gap-8">
          <p className="text-xs font-black text-neutral-grey uppercase tracking-[0.4em]">Experience the Taste in Person</p>
          <button className="group flex items-center gap-4 rounded-[1.5rem] bg-secondary px-12 py-5 text-sm font-black text-white hover:brightness-110 transition-all shadow-xl shadow-secondary/20">
            Follow Our Journey
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
