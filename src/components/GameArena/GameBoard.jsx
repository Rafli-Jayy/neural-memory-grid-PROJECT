import React from 'react';
import GameCard from './GameCard';

export default function GameBoard({ cards }) {
  const total = cards.length;
  const cardWidthClass = total > 24 ? "w-[14%] sm:w-[15%] md:w-[7.5%]" : "w-[22%] sm:w-[21%] md:w-[11%]";

  return (
    <main className="w-full max-w-6xl flex-grow flex items-center justify-center relative z-10 my-2 overflow-hidden">
      <div className="w-full h-auto max-h-[66vh] bg-slate-950/[0.15] p-4 md:p-8 rounded-[2rem] flex flex-wrap justify-center items-center gap-2 md:gap-3.5 overflow-y-auto py-8 shadow-[0_0_80px_rgba(99,102,241,0.05)]
        [&::-webkit-scrollbar]:w-1
        [&::-webkit-scrollbar-track]:bg-transparent
        [&::-webkit-scrollbar-thumb]:bg-slate-800/60
        [&::-webkit-scrollbar-thumb]:rounded-full
        hover:[&::-webkit-scrollbar-thumb]:bg-indigo-500/30"
      >
        {cards.map((card, index) => (
          <GameCard 
            key={index} 
            emoji={card.emoji} 
            cardWidthClass={cardWidthClass} 
          />
        ))}
      </div>
    </main>
  );
}