import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHourglassHalf, FaHeart, FaArrowRight } from 'react-icons/fa';

// ✅ Di luar komponen
const ICON_HOVER_VARIANTS = {
  hover: { scale: 1.1, transition: { duration: 0.2 } },
};

const TWEEN_FAST = { type: 'tween', ease: 'easeOut', duration: 0.2 };

// ✅ Hook kecil — reaktif terhadap resize, aman di SSR
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth > 768 : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)');
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isDesktop;
}

export default function ModeCard({ mode, variants }) {
  const isDesktop = useIsDesktop();

  return (
    <motion.div
      variants={variants}
      whileHover={isDesktop ? { y: -6 } : undefined}
      // ✅ opacity jauh lebih ringan dari scale di mobile
      whileTap={{ opacity: 0.85 }}
      transition={TWEEN_FAST}
      style={{ willChange: 'transform, opacity' }}
      className={`border p-6 rounded-2xl flex flex-col justify-between group transition-colors duration-300 ${mode.cardBg}
        bg-slate-900 md:bg-slate-950/40 md:backdrop-blur-xl shadow-xl md:shadow-2xl`}
    >
      <div>
        {/* Icon & Badge */}
        <div className="flex justify-between items-start mb-5">
          <motion.div
            variants={isDesktop ? ICON_HOVER_VARIANTS : undefined}
            transition={TWEEN_FAST}
            style={{ willChange: 'transform' }}
            className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 shadow-inner"
          >
            {mode.icon}
          </motion.div>
          <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${mode.diffColor}`}>
            {mode.difficulty}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-wide md:group-hover:text-indigo-400 transition-colors duration-200 mb-4">
          {mode.title}
        </h3>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 bg-slate-950/50 p-2.5 rounded-xl border border-slate-900 mb-5 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-1.5 border-r border-slate-800/60">
            <FaHourglassHalf className="text-indigo-400 text-[10px]" />
            <span>{mode.stats.timer}</span>
          </div>
          <div className="flex items-center gap-1.5 pl-1.5">
            <FaHeart className="text-rose-500 text-[10px]" />
            <span>{mode.stats.lives}</span>
          </div>
        </div>

        {/* Rules */}
        <div className="space-y-2 border-t border-slate-800/40 pt-4 mb-6">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Gameplay Flow:</p>
          {mode.gameplay.map((rule) => (
            // ✅ Pakai content sebagai key, bukan index
            <div key={rule} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
              <span className="w-1 h-1 bg-indigo-400 rounded-full mt-2 shrink-0" />
              <span>{rule}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer & CTA */}
      <div className="pt-4 border-t border-slate-900 flex flex-col gap-3">
        <span className="text-[11px] font-medium text-slate-400 italic bg-slate-950/30 p-2 rounded-lg text-center">
          {mode.footer}
        </span>

        <motion.button
          // ✅ opacity, bukan backgroundColor — GPU only, tidak repaint
          whileTap={!isDesktop ? { opacity: 0.7 } : undefined}
          transition={{ duration: 0.1 }}
          className="w-full py-2.5 bg-slate-900 border border-slate-800 text-slate-300 font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200
            md:hover:bg-indigo-600 md:hover:border-transparent md:hover:text-white md:active:scale-95 md:group-hover:shadow-lg md:group-hover:shadow-indigo-500/10"
        >
          Play Mode <FaArrowRight className="text-[10px]" />
        </motion.button>
      </div>
    </motion.div>
  );
}