
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const links = [
    { name: 'Menu', path: '/' },
    { name: 'Our Story', path: '/about' },
    { name: 'Find Us', path: '/locations' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-2xl">restaurant</span>
            </div>
            <span className="text-xl font-black tracking-tight text-neutral-charcoal uppercase">
              Jaini <span className="text-primary font-accent lowercase normal-case text-2xl ml-[-4px]">Food</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-neutral-charcoal'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center justify-center rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/30">
              Order Online
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex p-2 text-neutral-charcoal"
            >
              <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-primary/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-bold ${isActive(link.path) ? 'text-primary' : 'text-neutral-charcoal'}`}
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full mt-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-white shadow-lg shadow-primary/20">
            Order Online
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
