import React from 'react';

export default function GameCard({ emoji, cardWidthClass }) {
  return (
    <div className={`aspect-square cursor-pointer rounded-xl border border-slate-800/60 bg-gradient-to-b from-slate-900/90 to-slate-950/90 flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-indigo-500/80 hover:scale-105 hover:shadow-[0_4px_20px_rgba(99,102,241,0.2)] active:scale-95 p-[1px] ${cardWidthClass}`}>
      <div className="w-full h-full rounded-[10px] bg-slate-950/30 flex items-center justify-center relative group">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.03] to-transparent pointer-events-none" />
        
        <span className="text-base sm:text-lg md:text-2xl lg:text-3xl drop-shadow-md select-none">
          {emoji}
        </span>

        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-slate-800/60 group-hover:bg-indigo-500/60 transition-colors" />
      </div>
    </div>
  );
}