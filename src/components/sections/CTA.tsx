import React from 'react';
import { MessageSquare } from 'lucide-react';

export const CTA = () => {
  return (
    <section id="rsvp" className="py-48 px-6 text-center bg-black relative">
      <div className="max-w-3xl mx-auto animate-on-scroll">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
          Присоединяйтесь к нам <br />
          <span className="gold-text italic">в этот особенный вечер</span>
        </h2>
        <p className="text-foreground/40 mb-12 max-w-md mx-auto font-light">
          Пожалуйста, подтвердите свое участие до 8 марта, чтобы мы забронировали лучший стол для нашей компании.
        </p>
        
        <div className="relative inline-block group">
          {/* Border Beam Animation Wrapper */}
          <div className="absolute -inset-[2px] rounded-full bg-gradient-gold opacity-30 group-hover:opacity-100 transition-opacity blur-sm" />
          
          <a 
            href="https://wa.me/77011234567?text=%D0%AF%20%D0%BF%D1%80%D0%B8%D0%B4%D1%83!%20%D0%9F%D0%BE%D0%B4%D1%82%D0%B2%D0%B5%D1%80%D0%B6%D0%B4%D0%B0%D1%8E%20%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%B8%D0%B5%20%D0%B2%20TonyBar." 
            className="relative flex items-center gap-3 px-12 py-5 bg-primary text-black font-bold rounded-full text-lg uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-elegant"
          >
            <MessageSquare className="w-6 h-6" />
            Я приду!
          </a>
        </div>

        <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-foreground/20 font-medium">
          #ClassReunion #TonyBarAlmaty
        </p>
      </div>
    </section>
  );
};
