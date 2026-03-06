import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-center bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-serif font-bold gold-text uppercase tracking-widest">
          TonyBar
        </div>
        <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/30">
          Created for the Private Class of 2026 • Almaty
        </div>
        <div className="flex gap-6 text-foreground/40 text-xs">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">Location</a>
        </div>
      </div>
    </footer>
  );
};
