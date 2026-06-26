import React from 'react';
import { FaArrowLeft, FaClock, FaHeart, FaTrophy, FaVolumeUp, FaRedo } from 'react-icons/fa';

export default function Scoreboard() {
  return (
    <header className="w-full max-w-6xl bg-gradient-to-r from-slate-950/20 via-slate-900/10 to-slate-950/20 border border-slate-800/30 p-3 md:p-4 rounded-2xl backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 relative z-10">
      
      {/* 🧭 BLOK 1: NAVIGATION & IDENTIFIER (Kiri) */}
      <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-4">
        <button className="h-10 px-4 bg-slate-950/40 hover:bg-indigo-600/10 hover:text-indigo-400 text-slate-400 rounded-xl border border-slate-800/60 hover:border-indigo-500/30 transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-2 group active:scale-95">
          <FaArrowLeft className="group-hover:-translate-x-0.5 transition-transform" /> 
          <span>Exit</span>
        </button>
        <div className="text-right sm:text-left">
          <span className="text-[9px] font-black text-indigo-500/80 uppercase tracking-widest block leading-none mb-1">Neural Net</span>
          <h1 className="text-xs md:text-sm font-black text-slate-200 uppercase tracking-wide">Memory Matrix</h1>
        </div>
      </div>

      {/* 📊 BLOK 2: DATA INDICATORS (Tengah - Super Responsive Grid di Mobile) */}
      <div className="w-full sm:w-auto grid grid-cols-3 gap-2 font-mono flex-grow max-w-md sm:px-4">
        {/* Timer Indikator */}
        <div className="bg-slate-950/50 border border-slate-800/40 px-3 py-2 rounded-xl flex flex-col items-center justify-center relative overflow-hidden group hover:border-amber-500/20 transition-colors">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center gap-1.5 mb-0.5">
            <FaClock className="text-amber-400 text-[10px]" />
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Time</span>
          </div>
          <span className="text-xs md:text-sm font-black text-amber-400/90 tracking-wide">02:45</span>
        </div>

        {/* Lives Indikator */}
        <div className="bg-slate-950/50 border border-slate-800/40 px-3 py-2 rounded-xl flex flex-col items-center justify-center relative overflow-hidden group hover:border-rose-500/20 transition-colors">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center gap-1.5 mb-0.5">
            <FaHeart className="text-rose-500 text-[10px] animate-pulse" />
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Lives</span>
          </div>
          <span className="text-xs md:text-sm font-black text-rose-400/90 tracking-wide">03</span>
        </div>

        {/* Score Indikator */}
        <div className="bg-slate-950/50 border border-slate-800/40 px-3 py-2 rounded-xl flex flex-col items-center justify-center relative overflow-hidden group hover:border-cyan-500/20 transition-colors">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center gap-1.5 mb-0.5">
            <FaTrophy className="text-cyan-400 text-[10px]" />
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Score</span>
          </div>
          <span className="text-xs md:text-sm font-black text-cyan-400/90 tracking-wide">1,420</span>
        </div>
      </div>

      {/* ⚙️ BLOK 3: HARDWARE UTILITIES (Kanan) */}
      <div className="w-full sm:w-auto flex items-center justify-center sm:justify-end gap-2 border-t border-slate-900 sm:border-0 pt-2 sm:pt-0">
        <button className="flex-1 sm:flex-initial h-9 w-12 bg-slate-950/40 hover:bg-slate-800/50 text-slate-400 hover:text-slate-200 border border-slate-800/50 rounded-xl transition-all flex items-center justify-center text-xs active:scale-95">
          <FaVolumeUp />
        </button>
        <button className="flex-1 sm:flex-initial h-9 w-12 bg-slate-950/40 hover:bg-slate-800/50 text-slate-400 hover:text-indigo-400 border border-slate-800/50 rounded-xl transition-all flex items-center justify-center text-xs active:scale-95">
          <FaRedo className="text-[10px]" />
        </button>
      </div>

    </header>
  );
}