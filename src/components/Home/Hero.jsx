import React from 'react';
import { motion } from 'framer-motion';

const TRANSITION_BASE = { type: 'spring', stiffness: 300, damping: 25 };

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto text-center px-6 mt-16 mb-20 relative z-10">

      <motion.span
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={TRANSITION_BASE}
        style={{ willChange: 'transform, opacity' }}
        className="inline-block px-4 py-1.5 bg-linear-to-r from-indigo-500/10 to-purple-500/10 text-indigo-300 rounded-full text-xs font-semibold tracking-widest uppercase border border-indigo-500/20 shadow-sm"
      >
        🎮 Choose Your Game Mode
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...TRANSITION_BASE, delay: 0.15 }}
        style={{ willChange: 'transform, opacity' }}
        className="text-4xl md:text-6xl font-black mt-6 tracking-tight bg-linear-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent leading-none py-2"
      >
        Memory Card Arena
      </motion.h1>

      <p className="mt-4 text-slate-400 text-base md:text-lg max-w-xl mx-auto font-medium">
        Uji seberapa kuat ingatan jangka pendek dan kecepatan tanganmu. Pilih salah satu dari 6 mode brutal di bawah!
      </p>

    </section>
  );
}