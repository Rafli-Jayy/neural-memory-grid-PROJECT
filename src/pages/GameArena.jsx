import { useState, useEffect } from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Scoreboard from '../components/GameArena/Scoreboard';
import GameBoard from '../components/GameArena/GameBoard';
import ModeInfoModal from '../components/GameArena/InfoModal';
import NotFound from './NotFound';

import useGame from '../hooks/useGame';

export default function GameArena() {
  const mockCards = Array(16).fill({ emoji: '?' });
  const { gameMode, isAuthorized, activeMode } = useGame();

  const [showModal, setShowModal] = useState(true);
  const [countdown, setCountdown] = useState(null); 
  const [isGameRunning, setIsGameRunning] = useState(false);

  useEffect(() => {
    if (countdown === null) return;

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCountdown(null); 
        setIsGameRunning(true); 
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  if (!activeMode || !isAuthorized) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-[#060a1f] text-slate-100 font-sans p-4 md:p-6 flex flex-col justify-between items-center relative overflow-hidden select-none">
      
      {/* ANTERENA 1: Tampilkan MODAL SAJA jika masih aktif (DOM di belakangnya kosong melompong) */}
      <AnimatePresence>
        {showModal && (
          <ModeInfoModal 
            isOpen={showModal} 
            activeMode={activeMode} 
            onStart={() => {
              setShowModal(false);
              setCountdown(3); // Mulai countdown setelah modal hancur
            }} 
          />
        )}
      </AnimatePresence>

      {/* ANTERAN 2: Arena baru dimuat/dirender setelah modal ditutup (!showModal) */}
      {!showModal && (
        <>
          {/* OVERLAY COUNTDOWN */}
          <AnimatePresence mode="wait">
            {countdown !== null && (
              <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/20 pointer-events-none">
                <motion.div
                  key={countdown} 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="font-mono font-black select-none text-center"
                >
                  {countdown === 0 ? (
                    <h1 className="text-6xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.4)] uppercase">
                      READY?!
                    </h1>
                  ) : (
                    <h1 className="text-8xl md:text-12xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-500 drop-shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                      {countdown}
                    </h1>
                  )}
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* GLOW BACKGROUND EFFECT (Baru muncul bareng arena) */}
          <div className="absolute -top-40 -left-20 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-indigo-500/10 md:bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none z-0" />
          <div className="absolute -bottom-45 -right-20 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-purple-500/10 md:bg-purple-500/20 rounded-full blur-[80px] pointer-events-none z-0" />

          {/* SCOREBOARD */}
          <div className="w-full max-w-6xl relative z-10 animate-fade-in">
            <Scoreboard activeMode={activeMode} gameMode={gameMode} isGameRunning={isGameRunning} />
          </div>

          {/* GAMEBOARD */}
          <div className="w-full flex-grow flex items-center justify-center relative z-10 my-4">
            <GameBoard cards={mockCards} isGameRunning={isGameRunning} />
          </div>

          {/* FOOTER */}
          <footer className="w-full max-w-6xl text-center text-[10px] text-cyan-400/40 font-mono tracking-widest uppercase relative z-10 border-t border-slate-800/50 pt-3">
            Blocks Loaded: {mockCards.length} // Memory Optimization: Active
          </footer>
        </>
      )}
    </div>
  );
}