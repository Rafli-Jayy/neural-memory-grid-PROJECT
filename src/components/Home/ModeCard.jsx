import React from 'react';
import { motion } from 'framer-motion';
import { FaHourglassHalf, FaHeart, FaArrowRight } from 'react-icons/fa';

export default function ModeCard({ mode, variants }) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`bg-gradient-to-br ${mode.cardBg} border p-6 rounded-2xl backdrop-blur-xl flex flex-col justify-between shadow-2xl group transition-colors duration-300`}
    >
      <div>
        {/* Top: Icon & Difficulty Badge */}
        <div className="flex justify-between items-start mb-5">
          <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 shadow-inner group-hover:scale-110 transition-transform duration-300">
            {mode.icon}
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${mode.diffColor}`}>
            {mode.difficulty}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-wide group-hover:text-indigo-400 transition-colors duration-200 mb-4">
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
              <span className="w-1 h-1 bg-indigo-400 rounded-full mt-2 shrink-0 shadow-glow" />
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
        <button className="w-full py-2.5 bg-slate-900 hover:bg-indigo-600 border border-slate-800 hover:border-transparent text-slate-300 hover:text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-indigo-500/10">
          Play Mode <FaArrowRight className="text-[10px]" />
        </button>
      </div>
    </motion.div>
  );
}