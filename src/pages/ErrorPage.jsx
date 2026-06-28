import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

export default function ErrorPage() {
  // 🚀 Hook untuk mengambil detail eror yang terjadi
  const error = useRouteError(); 
  
  // Tetap log di console biar kamu sebagai developer bisa inspect (F12)
  console.error("System Crash Log:", error); 

  return (
    <div className="min-h-screen bg-[#0b1536] text-slate-100 flex flex-col items-center justify-center p-6 text-center font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-2xl text-rose-400 text-2xl mb-4 animate-bounce">
        <FaExclamationTriangle />
      </div>

      <h1 className="text-2xl md:text-3xl font-black text-rose-500 uppercase tracking-wider mb-2">
        System Exception Detected!
      </h1>
      <p className="text-slate-400 mb-6 text-xs md:text-sm max-w-md leading-relaxed">
        Inti core engine mendeteksi adanya kegagalan instruksi. Tenang, data permainan kamu diamankan.
      </p>

      {/* 📊 KOTAK DETAIL ERROR (Seperti yang kamu lihat di browser tadi) */}
      <div className="w-full max-w-2xl bg-slate-950/80 border border-slate-800 rounded-xl p-4 font-mono text-left text-xs text-rose-400/90 shadow-2xl overflow-x-auto mb-8 max-h-60">
        <p className="font-bold text-slate-400 border-b border-slate-900 pb-1.5 mb-2 uppercase tracking-widest text-[10px]">
          Crash Dump Log:
        </p>
        {/* Menampilkan pesan eror spesifiknya */}
        <p className="font-bold mb-1">Message: {error?.message || error?.statusText || "Unknown Runtime Error"}</p>
        {error?.stack && (
          <pre className="text-[10px] text-slate-500 whitespace-pre-wrap leading-normal mt-2">
            {error.stack}
          </pre>
        )}
      </div>

      {/* Tombol Penyelamat untuk balik ke Home */}
      <Link to="/" className="h-10 px-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-indigo-600/20">
        <FaHome />
        <span>Reboot to Home</span>
      </Link>
    </div>
  );
}