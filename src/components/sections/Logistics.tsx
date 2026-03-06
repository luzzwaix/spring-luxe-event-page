import React from 'react';
import { Calendar, Clock, MapPin, Navigation } from 'lucide-react';

export const Logistics = () => {
  const details = [
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      label: "Дата",
      value: "Понедельник, 9 марта",
      sub: "Выходной день"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      label: "Время",
      value: "17:30",
      sub: "Сбор гостей"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      label: "Локация",
      value: "TonyBar Lounge",
      sub: "ул. Навои, 208"
    }
  ];

  return (
    <section id="logistics" className="py-32 px-6 bg-black relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {details.map((item, index) => (
            <div 
              key={index} 
              className="animate-on-scroll flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-full border border-primary/20 group-hover:border-primary/50 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-primary uppercase tracking-widest text-xs mb-2">{item.label}</h3>
              <p className="text-2xl font-serif mb-1">{item.value}</p>
              <p className="text-foreground/40 text-sm">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 animate-on-scroll">
          <div className="relative rounded-2xl overflow-hidden glass aspect-[16/6] min-h-[300px]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1686317516001-7dbaf5561b87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')] bg-cover bg-center opacity-30 grayscale" />
            <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
              <h2 className="text-3xl font-serif mb-4">ЖК Шахристан</h2>
              <p className="text-foreground/60 mb-8 max-w-md mx-auto">
                Элитный жилой комплекс, где уют встречается с роскошью. TonyBar Karaoke & Lounge ждет вас.
              </p>
              <a 
                href="https://maps.app.goo.gl/YourMapLink" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm uppercase tracking-widest transition-all"
              >
                <Navigation className="w-4 h-4" />
                Открыть в картах
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
