
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-bg-beige">
      {/* Page Heading Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24 text-center md:text-left">
        <div className="max-w-3xl">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs block mb-4">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
            Contact <br/><span className="text-primary italic font-serif">Herb & Hearth</span>
          </h1>
          <p className="text-neutral-grey text-lg md:text-xl leading-relaxed max-w-2xl">
            We'd love to hear from you. Reach out for reservations, private event inquiries, or simply to share your dining experience with us.
          </p>
        </div>
      </section>

      {/* Contact Split Layout */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl border border-primary/5 shadow-xl shadow-primary/5">
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-grey">Full Name</span>
                  <input 
                    className="w-full h-14 bg-bg-beige border-none rounded-xl px-4 focus:ring-2 focus:ring-primary transition-all text-sm font-medium" 
                    placeholder="Jane Doe" 
                    type="text"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-grey">Email Address</span>
                  <input 
                    className="w-full h-14 bg-bg-beige border-none rounded-xl px-4 focus:ring-2 focus:ring-primary transition-all text-sm font-medium" 
                    placeholder="jane@example.com" 
                    type="email"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-grey">Subject</span>
                <select className="w-full h-14 bg-bg-beige border-none rounded-xl px-4 focus:ring-2 focus:ring-primary transition-all text-sm font-medium appearance-none cursor-pointer">
                  <option value="">Select a topic</option>
                  <option value="reservation">Table Reservation</option>
                  <option value="event">Private Event Booking</option>
                  <option value="career">Career Opportunities</option>
                  <option value="feedback">Guest Feedback</option>
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-grey">Your Message</span>
                <textarea 
                  className="w-full bg-bg-beige border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all resize-none text-sm font-medium" 
                  placeholder="Tell us how we can help..." 
                  rows={5}
                ></textarea>
              </label>
              <button 
                className="w-full md:w-auto px-12 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20" 
                type="submit"
              >
                Send Message
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>

          {/* Right: Contact Details */}
          <div className="lg:col-span-5 space-y-10">
            <div className="bg-primary text-white p-10 rounded-3xl shadow-xl shadow-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 size-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-8">Branch Contact</h3>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="bg-white/10 p-2.5 rounded-xl">
                    <span className="material-symbols-outlined text-white">location_on</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Main Sanctuary</p>
                    <p className="text-white/70 text-sm leading-relaxed">124 Artisan Row, Garden District<br/>Portland, OR 97201</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white/10 p-2.5 rounded-xl">
                    <span className="material-symbols-outlined text-white">call</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Direct Line</p>
                    <p className="text-white/70 text-sm leading-relaxed">+1 (503) 555-0198</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white/10 p-2.5 rounded-xl">
                    <span className="material-symbols-outlined text-white">mail</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">General Enquiries</p>
                    <p className="text-white/70 text-sm leading-relaxed">hello@herbandhearth.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-primary/5">
              <h3 className="text-2xl font-bold mb-8">Opening Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-bg-beige">
                  <span className="font-semibold">Mon — Thu</span>
                  <span className="text-neutral-grey font-medium">11:00 AM - 9:30 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-bg-beige">
                  <span className="font-semibold">Fri — Sat</span>
                  <span className="text-neutral-grey font-medium">11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Sunday</span>
                  <span className="text-neutral-grey font-medium">10:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Scale Map Section */}
      <section className="w-full h-[550px] relative overflow-hidden group">
        <img 
          alt="Map showing location" 
          className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-primary/10 pointer-events-none transition-opacity group-hover:opacity-0"></div>
        
        {/* Floating Map Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-5 animate-bounce-slow border border-primary/5">
            <div className="size-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20">
              <span className="material-symbols-outlined text-2xl">restaurant</span>
            </div>
            <div>
              <p className="font-black text-lg text-neutral-charcoal leading-none">Herb & Hearth</p>
              <p className="text-sm text-neutral-grey mt-1">Join us for dinner tonight</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 z-20">
          <button className="bg-white px-8 py-4 rounded-xl font-bold text-sm shadow-2xl hover:bg-primary hover:text-white transition-all flex items-center gap-3">
             Directions <span className="material-symbols-outlined text-base">near_me</span>
          </button>
        </div>
      </section>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-10%); }
          50% { transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;
