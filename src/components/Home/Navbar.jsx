import { useState } from 'react';
import { FaGamepad, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export default function Navbar() {

  const [soundOn, setSoundOn] = useState(true);

  return (
    <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10">
      <div className="flex items-center gap-2 font-black text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
        <FaGamepad className="text-indigo-400 text-3xl animate-spin-slow" /> MEMO{`{CARD}`}
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-900/80 border border-slate-800 rounded-full text-xs text-slate-400">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
          Project Ready to Play
        </div>
        <button 
          onClick={() => setSoundOn(!soundOn)}
          className="p-3 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-full transition-all border border-slate-800"
        >
          {soundOn ? <FaVolumeUp /> : <FaVolumeMute />}
        </button>
      </div>
    </header>
  );
}