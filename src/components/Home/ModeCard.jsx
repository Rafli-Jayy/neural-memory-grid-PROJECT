import React from 'react';
import { motion } from 'framer-motion';
import { FaHourglassHalf, FaHeart, FaArrowRight } from 'react-icons/fa';

export default function ModeCard({ mode, variants }) {
  return (
    <motion.div
      variants={variants}
      // 🚀 Hanya aktifkan hover mengangkat kartu di layar desktop biar scroll HP gak seret
      whileHover={window.innerWidth > 768 ? { y: -6 } : {}}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
      // 🛠️ DI HP PAKAI BG SOLID (bg-slate-900), DI DESKTOP BARU TRANSPARAN BLUR (md:backdrop-blur-xl)
      className={`will-change-transform border p-6 rounded-2xl flex flex-col justify-between group transition-colors duration-300 ${mode.cardBg}
        bg-slate-900 md:bg-slate-950/40 md:backdrop-blur-xl shadow-xl md:shadow-2xl`}
    >
      <div>
        {/* Top: Icon & Difficulty Badge */}
        <div className="flex justify-between items-start mb-5">
          <motion.div 
            variants={window.innerWidth > 768 ? { hover: { scale: 1.1 } } : {}}
            transition={{ duration: 0.2 }}
            className="will-change-transform p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 shadow-inner"
          >
            {mode.icon}
          </motion.div>
          <span className={`will-change-transform text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${mode.diffColor}`}>
            {mode.difficulty}
          </span>
        </div>

        {/* Title (group-hover warna teks hanya aktif di desktop md:) */}
        <h3 className="text-xl font-bold tracking-wide md:group-hover:text-indigo-400 transition-colors duration-200 mb-4">
          {mode.title}
        </h3>

        {/* Stats Box */}
        <div className="grid grid-cols-2 gap-2 bg-slate-950/50 p-2.5 rounded-xl border border-slate-900 mb-5 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-1.5 border-r border-slate-800/60">
            <FaHourglassHalf className="text-indigo-400 text-[10px]" />
            <span>{mode.stats.timer}</span>
          </div>
          <div className="flex items-center gap-1.5 pl-1.5">
            <FaHeart className="text-rose-500 text-[10px]" />
            <span>{mode.stats.lives}</span>
          </div>
        </div>
        
        {/* Rules List */}
        <div className="space-y-2 border-t border-slate-800/40 pt-4 mb-6">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Gameplay Flow:</p>
          {mode.gameplay.map((rule, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
              <span className="w-1 h-1 bg-indigo-400 rounded-full mt-2 shrink-0" />
              <span>{rule}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer & CTA Button */}
      <div className="pt-4 border-t border-slate-900 flex flex-col gap-3">
        <span className="text-[11px] font-medium text-slate-400 italic bg-slate-950/30 p-2 rounded-lg text-center">
          {mode.footer}
        </span>
        
        {/* 📱 Versi anti-nyangkut: whileTap dikunci khusus layar HP (<= 768px) */}
        <motion.button 
          whileTap={
            window.innerWidth <= 768 
              ? { backgroundColor: "#4f46e5", color: "#ffffff" } 
              : {}
          }
          transition={{ duration: 0.1 }}
          className="w-full py-2.5 bg-slate-900 border border-slate-800 text-slate-300 font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200
            md:hover:bg-indigo-600 md:hover:border-transparent md:hover:text-white md:active:scale-95 md:group-hover:shadow-lg md:group-hover:shadow-indigo-500/10"
        >
          Play Mode <FaArrowRight className="text-[10px]" />
        </motion.button>
      </div>
    </motion.div>
  );
}