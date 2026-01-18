
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { locationData } from './Locations';

const LocationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = locationData.find((l) => l.id === id);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-6 bg-bg-cream">
        <h2 className="text-3xl font-bold">Outlet not found</h2>
        <Link to="/locations" className="text-primary font-bold underline">Back to all outlets</Link>
      </div>
    );
  }

  return (
    <div className="bg-bg-cream min-h-screen">
      <main className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-12">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link to="/locations" className="inline-flex items-center gap-2 text-neutral-grey hover:text-primary transition-colors text-sm font-black uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm font-bold">arrow_back</span>
            Back to Sanctuaries
          </Link>
        </div>

        {/* Hero Section */}
        <div className="relative group h-[550px] rounded-[3rem] overflow-hidden mb-16 shadow-2xl shadow-primary/10">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] group-hover:scale-110" 
            style={{ 
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 50%), url("${location.image}")` 
            }}
          ></div>
          <div className="absolute bottom-16 left-12 md:left-20 text-white max-w-3xl">
            <span className="bg-primary/90 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 inline-block backdrop-blur-md">
              Flagship Sanctuary
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
              Jaini Food — {location.city}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed">
              {location.district}. {location.fullDescription}
            </p>
          </div>
        </div>

        {/* Essential Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-12 rounded-[2.5rem] border border-primary/5 shadow-xl shadow-primary/5 group hover:border-primary/20 transition-all">
            <span className="material-symbols-outlined text-primary mb-8 text-4xl">location_on</span>
            <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-4">Find Us</h3>
            <p className="text-lg font-bold leading-relaxed text-neutral-charcoal">{location.address}</p>
            <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="inline-block mt-8 text-[10px] font-black tracking-widest border-b-2 border-primary/20 hover:border-primary transition-colors uppercase">
              Open in Maps
            </a>
          </div>

          <div className="bg-white p-12 rounded-[2.5rem] border border-primary/5 shadow-xl shadow-primary/5 group hover:border-primary/20 transition-all">
            <span className="material-symbols-outlined text-primary mb-8 text-4xl">schedule</span>
            <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-4">Service Hours</h3>
            <div className="space-y-3 text-lg font-bold text-neutral-charcoal">
              <div className="flex justify-between"><span>Mon - Sat</span><span>10:00 — 22:00</span></div>
              <div className="flex justify-between text-secondary"><span>Sunday</span><span>11:00 — 22:30</span></div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[2.5rem] border border-primary/5 shadow-xl shadow-primary/5 group hover:border-primary/20 transition-all">
            <span className="material-symbols-outlined text-primary mb-8 text-4xl">call</span>
            <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-4">Connect</h3>
            <p className="text-lg font-bold text-neutral-charcoal mb-1">{location.phone}</p>
            <p className="text-sm font-medium text-neutral-grey mb-8">{location.email}</p>
            <div className="flex gap-4">
              <a href="#" className="size-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a href="https://api.whatsapp.com/send?phone=919509205025" target="_blank" rel="noreferrer" className="size-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all">
                 <span className="material-symbols-outlined text-xl">chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Local Favorites expanded grid */}
        {location.outletSpecials && location.outletSpecials.length > 0 && (
          <section className="mb-32">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-primary font-accent text-3xl mb-2 lowercase">Must Try</h2>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter">Signature Specialties</h2>
              </div>
              <button className="text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2 group hover:gap-4 transition-all pb-2 border-b-2 border-primary/10 hover:border-primary">
                Explore Full Menu <span className="material-symbols-outlined text-sm font-black">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {location.outletSpecials.map((spec) => (
                <div key={spec.id} className="group cursor-pointer bg-white p-6 rounded-[2rem] shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-all border border-primary/5">
                  <div className="relative overflow-hidden rounded-2xl aspect-square mb-6 shadow-lg">
                    <img 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      src={spec.image} 
                      alt={spec.title} 
                    />
                    {spec.id === 'j1' && (
                        <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] shadow-lg">
                        BEST SELLER
                        </div>
                    )}
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-black text-2xl mb-2 group-hover:text-primary transition-colors leading-none tracking-tight">{spec.title}</h4>
                      <p className="text-sm text-neutral-grey leading-relaxed font-medium">{spec.description}</p>
                    </div>
                    <span className="font-black text-primary text-xl mt-1">{spec.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Atmosphere Gallery expanded grid */}
        {location.gallery && location.gallery.length > 0 && (
          <section className="mb-32">
            <div className="text-center mb-16">
                 <h2 className="text-primary font-accent text-3xl mb-2 lowercase">The Ambiance</h2>
                 <h2 className="text-5xl md:text-6xl font-black tracking-tighter">Inside Our Sanctuary</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 h-[800px] md:h-[900px]">
              <div className="col-span-2 row-span-2 relative rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-white">
                <img 
                  src={location.gallery[0]} 
                  alt="Main dining area"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-black uppercase tracking-widest border-2 border-white px-8 py-3 rounded-full">Explore Space</span>
                </div>
              </div>
              {location.gallery.slice(1, 7).map((img, idx) => (
                <div key={idx} className="relative rounded-[2rem] overflow-hidden shadow-xl group border-4 border-white">
                  <img 
                    src={img} 
                    alt={`Atmosphere ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Directions / Map Section */}
        <section className="mb-12" id="map">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-primary font-accent text-3xl mb-2 lowercase">Location</h2>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter">How to Find Us</h2>
              </div>
              <a href="https://api.whatsapp.com/send?phone=919509205025" target="_blank" rel="noreferrer" className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl flex items-center gap-3">
                 Order Delivery <span className="material-symbols-outlined">electric_moped</span>
              </a>
          </div>
          <div className="relative w-full h-[550px] rounded-[3rem] overflow-hidden shadow-2xl bg-white border-8 border-white group">
            <div 
              className="absolute inset-0 grayscale contrast-125 opacity-40 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-60" 
              style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop")',
                backgroundSize: 'cover'
              }}
            ></div>
            
            {/* Mock Map Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="bg-primary text-white p-6 rounded-[2rem] shadow-2xl animate-bounce-slow">
                <span className="material-symbols-outlined text-4xl">restaurant</span>
              </div>
              <div className="bg-white px-6 py-4 mt-6 rounded-2xl shadow-2xl text-[10px] font-black tracking-[0.2em] whitespace-nowrap border border-primary/10 uppercase">
                Jaini Food — {location.city}
              </div>
            </div>
            
            <div className="absolute bottom-10 right-10 flex flex-col gap-4">
              <button className="bg-white size-14 rounded-2xl shadow-2xl flex items-center justify-center font-black text-2xl hover:bg-primary hover:text-white transition-all">+</button>
              <button className="bg-white size-14 rounded-2xl shadow-2xl flex items-center justify-center font-black text-2xl hover:bg-primary hover:text-white transition-all">−</button>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-15%); }
          50% { transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LocationDetail;
