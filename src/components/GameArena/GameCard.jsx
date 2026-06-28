import React from 'react';
import { motion } from 'framer-motion';

export default function GameCard({ emoji, cardWidthClass }) {
  // Pagar pembatas deteksi desktop
  const isDesktop = typeof window !== 'undefined' && window.innerWidth > 768;

  return (
    <motion.div
      className={`aspect-square cursor-pointer rounded-xl border flex items-center justify-center overflow-hidden p-px will-change-transform touch-manipulation active:opacity-80 ${cardWidthClass}
        bg-linear-to-b from-slate-900/90 to-slate-950/90 border-slate-800/60
        md:hover:border-indigo-500/80 md:hover:shadow-[0_4px_20px_rgba(99,102,241,0.2)]`}
    >
      <div className="w-full h-full rounded-[10px] bg-slate-950/30 flex items-center justify-center relative group pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-indigo-500/3 to-transparent" />
        
        {/* Emoji - dikunci select-none agar aman */}
        <span className="text-base sm:text-lg md:text-2xl lg:text-3xl drop-shadow-md select-none">
          {emoji}
        </span>

        {/* Garis neon pemanis di bawah kartu */}
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-slate-800/60 md:group-hover:bg-indigo-500/60 transition-colors" />
      </div>
    </motion.div>
  );
}