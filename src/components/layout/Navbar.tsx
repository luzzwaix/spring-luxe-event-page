import React from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm bg-black/20">
      <div className="text-xl font-serif font-bold tracking-widest uppercase gold-text">
        TonyBar
      </div>
      <div className="flex gap-8 text-sm uppercase tracking-widest text-foreground/70">
        <a href="#about" className="hover:text-primary transition-colors">О вечере</a>
        <a href="#logistics" className="hover:text-primary transition-colors">Инфо</a>
        <a href="#highlights" className="hover:text-primary transition-colors">Программа</a>
      </div>
      <div className="hidden md:block">
        <a 
          href="#rsvp" 
          className="px-6 py-2 border border-primary/30 rounded-full text-xs uppercase tracking-widest hover:bg-primary/10 transition-all"
        >
          RSVP
        </a>
      </div>
    </nav>
  );
};
