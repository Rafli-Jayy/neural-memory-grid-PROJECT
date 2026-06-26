import React from 'react';
import { FaAtom, FaGamepad, FaSkull, FaSmile, FaAppleAlt } from 'react-icons/fa';

export const emojiThemes = [
  { id: 'cyber-cyber', name: 'Cyber Hack', icon: <FaAtom />, emojis: ['🧠', '⚡', '💀', '🔥', '👁️', '🎯'] },
  { id: 'arcade-retro', name: 'Retro Gaming', icon: <FaGamepad />, emojis: ['🕹️', '👾', '🎮', '🛸', '🪙', '🎲'] },
  { id: 'horror-dark', name: 'Spooky Night', icon: <FaSkull />, emojis: ['👻', '🎃', '🧛', '🧟', '🦇', '🔮'] },
  { id: 'emoji-classic', name: 'Expressions', icon: <FaSmile />, emojis: ['😎', '🤪', '🥳', '😈', '🤠', '👽'] },
  { id: 'food-munch', name: 'Snack Break', icon: <FaAppleAlt />, emojis: ['🍕', '🍔', '🍟', '🍩', '🍦', '🍣'] },
];