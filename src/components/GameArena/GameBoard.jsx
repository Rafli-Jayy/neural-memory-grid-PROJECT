import React from 'react';

export default function GameBoard({ cards, isGameRunning }) {
  
  const handleCardClick = (index) => {
    if (!isGameRunning) return;
    console.log(`Card ${index} clicked`);
  };

  return (
    <div 
      // Mengunci interaksi jika game belum jalan
      className={`grid grid-cols-6 gap-2 md:gap-3 transition-opacity duration-300 ${
        !isGameRunning ? 'pointer-events-none opacity-50' : 'opacity-100'
      }`}
    >
      {/* 🚀 INJEKSI ANIMASI NATIVE CSS (Dijalankan langsung oleh GPU, Anti Lag!) */}
      <style>{`
        @keyframes cardAppear {
          0% { opacity: 0; transform: scale(0.7) translateZ(0); }
          100% { opacity: 1; transform: scale(1) translateZ(0); }
        }
        .gpu-card {
          animation: cardAppear 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
      `}</style>

      {cards.map((card, index) => (
        <div 
          key={index}
          onClick={() => handleCardClick(index)}
          className="gpu-card w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-slate-900 border border-slate-800/80 hover:border-cyan-500/50 rounded-xl flex items-center justify-center text-sm md:text-lg cursor-pointer font-mono shadow-md active:scale-95 transition-transform duration-150"
          style={{
            // Efek stagger menggunakan CSS murni (muncul bergilir tiap 12ms)
            animationDelay: `${index * 12}ms`,
            // Memaksa browser mengaktifkan Akselerasi Hardware 3D
            willChange: 'transform, opacity',
            transform: 'translateZ(0)', 
          }}
        >
          {card.emoji}
        </div>
      ))}
    </div>
  );
}