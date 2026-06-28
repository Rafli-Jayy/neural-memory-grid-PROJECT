import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHourglassHalf, FaHeart, FaGamepad, FaPlay } from 'react-icons/fa';

export default function ModeInfoModal({ isOpen, activeMode, onStart }) {
  if (!activeMode) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* 🚀 1. OPTIMASI BACKDROP: Matikan blur di mobile, aktifkan hanya di desktop (md:) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-slate-950/90 md:backdrop-blur-md"
          />

          {/* 2. KOTAK POPUP UTAMA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            // 🚀 OPTIMASI ANIMASI: Ganti dari 'spring' ke 'easeOut' berdurasi cepat biar ringan
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-full max-w-md bg-[#0e173d] border border-slate-800 rounded-2xl p-6 shadow-2xl relative z-10 overflow-hidden text-slate-100 font-sans will-change-transform"
            style={{ transform: 'translateZ(0)' }} // Memaksa akselerasi hardware
          >
            
            {/* 🚀 3. OPTIMASI GLOW: Sembunyikan di mobile (hidden) karena blur-3xl bikin GPU HP drop */}
            <div className="hidden md:block absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="hidden md:block absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* HEADER: Icon & Status */}
            <div className="flex items-center gap-4 mb-5 relative z-10">
              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-indigo-400 text-xl shadow-inner">
                {activeMode.icon || <FaGamepad />}
              </div>
              <div>
                <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border ${activeMode.diffColor || 'border-cyan-500 text-cyan-400'}`}>
                  {activeMode.difficulty || 'Normal'}
                </span>
                <h2 className="text-xl font-black uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-indigo-300 mt-1">
                  {activeMode.title || 'Game Mode'}
                </h2>
              </div>
            </div>

            {/* STATS BRIEFING */}
            <div className="grid grid-cols-2 gap-3 bg-slate-950/60 p-3 rounded-xl border border-slate-800 mb-5 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2 border-r border-slate-800/60">
                <FaHourglassHalf className="text-amber-400" />
                <div>
                  <p className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">Limit Time</p>
                  <p className="font-bold text-slate-300">{activeMode.stats?.timer || 'No Limit'}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pl-2">
                <FaHeart className="text-rose-500" />
                <div>
                  <p className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">Initial Lives</p>
                  <p className="font-bold text-slate-300">{activeMode.stats?.lives || '0'}</p>
                </div>
              </div>
            </div>

            {/* GAMEPLAY FLOW / RULES */}
            <div className="space-y-2.5 border-t border-slate-800/60 pt-4 mb-6">
              <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest font-mono">
                System Objective & Rules:
              </p>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                {activeMode.gameplay?.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_#6366f1]" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FOOTER NOTE & ACTION BUTTON */}
            <div className="space-y-4">
              {activeMode.footer && (
                <p className="text-[10px] font-medium text-slate-400 italic bg-slate-950/40 p-2.5 rounded-xl border border-slate-900 text-center">
                  "{activeMode.footer}"
                </p>
              )}

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={onStart}
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 group cursor-pointer"
              >
                <span>Initiate Matrix</span>
                <FaPlay className="text-[9px] group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}