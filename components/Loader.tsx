
import React from 'react';

interface LoaderProps {
  fullScreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ fullScreen = true }) => {
  return (
    <div className={`
      ${fullScreen ? 'fixed inset-0 z-[100] bg-bg-cream flex-col' : 'relative py-20 flex-col'} 
      flex items-center justify-center transition-opacity duration-500
    `}>
      <div className="relative">
        {/* Breathing Ring */}
        <div className="absolute inset-0 scale-150 bg-primary/20 rounded-full animate-ping opacity-30"></div>
        
        {/* Branded Icon */}
        <div className="size-28 bg-primary rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-primary/30 relative z-10 animate-bounce">
          <span className="material-symbols-outlined text-6xl">restaurant</span>
        </div>
      </div>

      <div className="mt-16 text-center space-y-4">
        <h2 className="text-primary font-black tracking-[0.4em] uppercase text-sm animate-pulse">
          Jaini Food Neemuch
        </h2>
        <p className="text-neutral-grey text-lg font-bold italic font-accent lowercase normal-case">
          Fresh. Fast. Tasty.
        </p>
        
        {/* Progress Bar */}
        <div className="w-56 h-2 bg-primary/10 rounded-full overflow-hidden mx-auto shadow-inner">
          <div className="h-full bg-primary rounded-full animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 100%; transform: translateX(0%); }
          100% { width: 0%; transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
