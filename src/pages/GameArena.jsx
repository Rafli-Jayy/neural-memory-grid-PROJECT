import React from 'react';
import Scoreboard from '../components/GameArena/Scoreboard';
import GameBoard from '../components/GameArena/GameBoard';

export default function GameArena() {
  const mockCards = Array(36).fill({ emoji: '🧠' });

  return (
    /* 🔥 ULTRA GLOW UPDATE: 
       - Background diubah ke warna biru siber pekat (#0b1536) agar warna gak mati.
       - Garis grid menggunakan rgba putih agar lebih kontras dan menyala di layar.
    */
    <div 
      className="min-h-screen bg-[#0b1536] text-slate-100 font-sans p-4 md:p-6 flex flex-col justify-between items-center relative overflow-hidden select-none"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, transparent 10%, #060a1f 90%),
          linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 4rem 4rem, 4rem 4rem'
      }}
    >
      
      {/* 🔮 NEON AMBIENT LIGHTS (Intensitas cahaya dinaikkan drastis biar bener-bener terang) */}
      <div className="absolute -top-40 -left-20 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-indigo-500/30 rounded-full blur-[130px] pointer-events-none z-0 animate-pulse [animation-duration:6s]" />
      <div className="absolute -bottom-45 -right-20 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-purple-500/30 rounded-full blur-[130px] pointer-events-none z-0 animate-pulse [animation-duration:9s]" />
      
      {/* Lampu sorot tambahan warna Cyan tepat di belakang papan kartu */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[650px] h-[300px] bg-cyan-500/25 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* 1. PANEL ATAS (Floating Scoreboard) */}
      <div className="w-full max-w-6xl relative z-10">
        <Scoreboard />
      </div>

      {/* 2. PAPAN ARENA UTAMA (Cards Container) */}
      <div className="w-full flex-grow flex items-center justify-center relative z-10 my-4">
        <GameBoard cards={mockCards} />
      </div>

      {/* 3. FOOTER STATUS BAR */}
      <footer className="w-full max-w-6xl text-center text-[10px] text-cyan-400/60 font-mono tracking-widest uppercase relative z-10 border-t border-slate-700/30 pt-3 shadow-[0_-1px_10px_rgba(6,182,212,0.05)]">
        Blocks Loaded: {mockCards.length} // Core Engine: Operational // Lighting: Max Intensity
      </footer>
    </div>
  );
}