import React from 'react';
import { motion } from 'framer-motion';

import Navbar from '../components/Home/Navbar';
import Hero from '../components/Home/Hero';
import ThemeSelector from '../components/Home/ThemeSelector'; // ← Import komponen baru
import ModeCard from '../components/Home/ModeCard';
import Footer from '../components/Home/Footer';

import { gameModes } from '../data/gameModes';
import useStart from '../hooks/useStart'

export default function LandingPage() {

  const {
    theme,
    onThemeChange
  } = useStart();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 12 } }
  };

  return (
    <div className="min-h-screen bg-[#0b1536] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden pb-24 relative">
      
      {/* Background Glows Premium */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. HERO */}
      <Hero />

      {/* 3. THEME SELECTOR SECTION */}
      <main className="max-w-7xl mx-auto px-6 relative z-10">
        <ThemeSelector 
          selectedTheme={theme} 
          onThemeChange={onThemeChange} 
        />

        {/* Title Section pemanis */}
        <div className="text-center md:text-left mb-6">
          <span className="text-[11px] font-black tracking-widest text-purple-400 uppercase font-mono block mb-1">
             Choose Game Mode
          </span>
        </div>

        {/* 4. GRID CARDS LIST */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {gameModes.map((mode) => (
            <ModeCard 
              key={mode.id} 
              mode={mode} 
              variants={cardVariants} 
            />
          ))}
        </motion.div>
      </main>

      {/* 5. FOOTER */}
      <Footer />
    </div>
  );
}