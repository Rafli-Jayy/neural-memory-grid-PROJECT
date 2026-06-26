import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center mt-24 text-xs text-slate-600 tracking-wider relative z-10">
      &copy; {new Date().getFullYear()} MemoGame Hub &bull; Let's build a clean and fast code, broh!
    </footer>
  );
}