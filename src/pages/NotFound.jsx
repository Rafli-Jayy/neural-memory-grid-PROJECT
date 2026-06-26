import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGhost, FaHome, FaGamepad } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans flex flex-col justify-center items-center px-6 relative overflow-hidden">
      
      {/* Efek Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Konten Utama dengan Animasi Framer Motion */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="text-center max-w-lg z-10"
      >
        {/* Ikon Hantu Arcade */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="inline-block text-red-500 text-7xl md:text-8xl drop-shadow-[0_0_20px_rgba(239,68,68,0.5)] mb-6"
        >
          <FaGhost />
        </motion.div>

        {/* Status Code */}
        <h1 className="text-7xl md:text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-600">
          404
        </h1>

        {/* Pesan Eror */}
        <h2 className="text-xl md:text-2xl font-bold mt-4 tracking-wide text-red-400 uppercase">
          [ PAGE NOT FOUND ]
        </h2>
        
        <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
          Waduh broh, halaman yang lu cari tersesat di dimensi lain atau emang belum lu bikin kode arena-nya. Jangan panik!
        </p>

        {/* Pilihan Tombol Navigasi Kembali */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
          >
            <FaHome className="text-sm" /> Back to Lobby
          </Link>
        </div>
      </motion.div>

      {/* Mini Footer */}
      <footer className="absolute bottom-6 text-[10px] text-slate-600 tracking-widest font-mono uppercase">
        Error Code: ERR_MAP_NOT_FOUND
      </footer>
    </div>
  );
}