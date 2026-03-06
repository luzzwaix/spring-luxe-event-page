import React from 'react';
import { Coffee, Music, Heart } from 'lucide-react';

export const Highlights = () => {
  const items = [
    {
      icon: <Coffee className="w-10 h-10 text-primary" />,
      title: "Ифтар",
      description: "Традиционное разговение в уютной атмосфере. Специальное весеннее меню, приготовленное с любовью."
    },
    {
      icon: <Music className="w-10 h-10 text-primary" />,
      title: "Караоке",
      description: "Премиальный звук и ваши любимые треки. Проведите вечер ярко в лучшем караоке города."
    },
    {
      icon: <Heart className="w-10 h-10 text-primary" />,
      title: "8 Марта",
      description: "Праздничные поздравления и особенное весеннее настроение для наших прекрасных дам."
    }
  ];

  return (
    <section id="highlights" className="py-32 px-6 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24 animate-on-scroll">
          <h2 className="text-primary uppercase tracking-[0.2em] text-xs mb-4">Особенности</h2>
          <p className="text-4xl md:text-5xl font-serif font-bold">Программа вечера</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={index}
              className="animate-on-scroll p-10 rounded-3xl glass hover:bg-white/[0.08] transition-all group border-primary/5 hover:border-primary/20"
            >
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
              <p className="text-foreground/50 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
