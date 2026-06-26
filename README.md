# 🧠 NEURAL MEMORY GRID — Cyberpunk Arcade Matcher

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer-motion&logoColor=F024B6)](https://www.framer.com/motion/)

A high-intensity, ultra-glow sci-fi memory card matching game. Built with React and powered by Vite, featuring custom deck archetypes and smooth cybernetic transitions.

---

## ⚡ Key Features

* 🔮 **Ultra-Glow Cyber Arena:** Immersive interface with neon ambient lights, dynamic radar background grid, and pulsating nebula glow effects.
* 🎭 **Deck Archetypes Selector:** 5 pre-loaded emoji themes (Cyber Hack, Retro Gaming, Spooky Night, Expressions, and Snack Break).
* 📱 **Responsive Grid System:** Pixel-perfect adaptive layout ensuring zero overlap from mobile screens to 4K monitors.
* 🎬 **Fluid Animations:** Powered by Framer Motion for stagger delays and reactive card states.

---

## 🗺️ Project Structure

```text
MemoryApp/
├── src/
│   ├── components/
│   │   ├── GameArena/        # Game core view panels
│   │   └── Home/             # Landing page sub-components
│   │       ├── ThemeSelector.jsx  # Adaptive grid deck picker
│   │       └── ModeCard.jsx       # Staggered game mode cards
│   ├── data/
│   │   ├── gameModes.js      # Difficulty levels configuration
│   │   └── themes.jsx        # Core emoji deck datasets
│   └── pages/
│       ├── LandingPage.jsx   # Main entry hub
│       └── GameArena.jsx     # Active game playground