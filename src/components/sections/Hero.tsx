import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="about" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555789766-10dfb507a0e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
          alt="TonyBar Lounge"
          className="h-full w-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary uppercase tracking-[0.3em] text-xs mb-6 font-medium"
        >
          Приглашение на эксклюзивный вечер
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight tracking-tight"
        >
          TonyBar: <br />
          <span className="gold-text">Вечер весны и традиций</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
        >
          Специальный Ифтар и празднование 8 Марта <br /> в изысканном кругу одноклассников.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12"
        >
          <div className="animate-bounce inline-block">
            <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent mx-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
