import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto text-center px-6 mt-16 mb-20 relative z-10">
      <motion.span 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="will-change-transform px-4 py-1.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-300 rounded-full text-xs font-semibold tracking-widest uppercase border border-indigo-500/20 shadow-sm"
      >
        🎮 Choose Your Game Mode
      </motion.span>
      
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="will-change-transform text-4xl md:text-6xl font-black mt-6 tracking-tight bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent leading-none py-2"
      >
        Memory Card Arena
      </motion.h1>
      
      <p className="mt-4 text-slate-400 text-base md:text-lg max-w-xl mx-auto font-medium">
        Uji seberapa kuat ingatan jangka pendek dan kecepatan tanganmu. Pilih salah satu dari 6 mode brutal di bawah!
      </p>
    </section>
  );
}