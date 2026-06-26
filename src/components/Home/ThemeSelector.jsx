import React from 'react';
import { FaPalette } from 'react-icons/fa';
import { emojiThemes } from '../../data/themes';

export default function ThemeSelector({ selectedTheme, onThemeChange }) {
  return (
    <section className="w-full max-w-3xl mx-auto bg-slate-950/40 border border-slate-900/60 p-5 md:p-6 rounded-3xl backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.3)] mb-12">
      
      {/* ─── TITLE SECTION ─── */}
      <div className="flex items-center gap-2.5 mb-5 border-b border-slate-900 pb-3">
        <FaPalette className="text-indigo-400 text-sm animate-pulse" />
        <span className="text-[11px] font-black tracking-widest text-indigo-400 uppercase font-mono">
          Step 1: Choose Deck Archetype
        </span>
      </div>

      {/* ─── MAIN CONTAINER ─── */}
      <div className="flex flex-col gap-4">
        
        {/* 🛠️ SYSTEM GRID ADAPTIF (ANTI-JELEK, ANTI-OVERLAP) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {emojiThemes.map((theme) => {
            const isActive = selectedTheme === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => onThemeChange(theme.id)}
                className={`h-11 px-3 rounded-xl border font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 text-center ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 border-transparent text-white shadow-[0_4px_20px_rgba(99,102,241,0.3)] font-black'
                    : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <span className={`text-xs ${isActive ? 'text-white' : 'text-indigo-400'}`}>
                  {theme.icon}
                </span>
                {/* truncate biar kalau teks kepanjangan di HP gak ngrusak box */}
                <span className="truncate">{theme.name}</span>
              </button>
            );
          })}
        </div>

        {/* ─── LIVE PREVIEW BOX ─── */}
        <div className="bg-slate-950/60 border border-slate-900/80 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-3 overflow-hidden group">
          <div className="hidden md:block">
            <span className="text-[10px] font-bold text-slate-500 font-mono uppercase tracking-wider block">Deck Preview</span>
            <span className="text-[11px] text-slate-400 font-sans">Cards initialized with this set</span>
          </div>
          
          {/* Row Display List Emoji */}
          <div className="flex items-center gap-3 md:gap-4 mx-auto md:mx-0 bg-slate-900/30 border border-slate-900/50 px-4 py-2 rounded-xl">
            {emojiThemes.find(t => t.id === selectedTheme)?.emojis.map((emoji, index) => (
              <span 
                key={index} 
                className="text-lg md:text-2xl transition-transform duration-300 transform group-hover:scale-110 drop-shadow-[0_2px_8px_rgba(255,255,255,0.05)]"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}