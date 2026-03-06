import { MapPin, Utensils, Mic, Flower2, MessageCircle, Calendar, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function App() {
  const WHATSAPP_LINK = "https://chat.whatsapp.com/LyLYSs5c9ch4iZMw2L743A?mode=gi_t";

  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* Hero Section - Mobile First */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-20 md:py-0">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://v3b.fal.media/files/b/0a9115b5/_mD7cGoMJntXfWnMTtyK4_QFReDDVX.png"
            alt="TonyBar Event Hero"
            className="w-full h-full object-cover brightness-[0.5]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center w-full max-w-5xl mx-auto">
          <div data-aos="fade-up" data-aos-duration="1200">
            <p className="text-primary uppercase tracking-[0.25em] text-[10px] md:text-xs mb-4 md:mb-6 font-medium">
              Приглашение на эксклюзивный вечер
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-foreground mb-4 md:mb-6 leading-[1.1]">
              TonyBar: <span className="gold-text italic block sm:inline">Вечер весны</span> 
              <span className="block mt-2">и традиций</span>
            </h1>
          </div>
          
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            data-aos-duration="1000"
            className="text-base sm:text-lg md:text-xl text-foreground/70 font-sans max-w-xl mx-auto leading-relaxed px-4"
          >
            Специальный Ифтар и празднование 8 Марта в кругу одноклассников.
          </p>
          
          <div 
            data-aos="fade-up" 
            data-aos-delay="400"
            className="mt-8 md:mt-12"
          >
            <div className="w-px h-16 md:h-24 bg-gradient-to-b from-primary to-transparent mx-auto" />
          </div>
        </div>
      </section>

      {/* Logistics Section - Mobile Optimized */}
      <section className="py-20 md:py-32 lg:py-48 px-4 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl w-full">
          <h2 
            data-aos="fade-up"
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif mb-12 md:mb-20 uppercase tracking-[0.15em] md:tracking-[0.2em] text-primary"
          >
            Где и когда
          </h2>
          
          <div className="grid grid-cols-1 gap-10 md:gap-16 lg:gap-24 md:grid-cols-3 text-foreground/90 font-sans">
            <div 
              data-aos="fade-up" 
              data-aos-delay="100"
              className="flex flex-col items-center space-y-3 md:space-y-4"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-primary/30 flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <span className="text-primary text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium opacity-60">Дата</span>
              <p className="font-light text-lg md:text-xl lg:text-2xl">Понедельник, 9 марта</p>
              <span className="text-[10px] md:text-xs italic text-primary/40 uppercase tracking-widest">(выходной день)</span>
            </div>
            
            <div 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="flex flex-col items-center space-y-3 md:space-y-4"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-primary/30 flex items-center justify-center mb-2">
                <Clock className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <span className="text-primary text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium opacity-60">Сбор</span>
              <p className="font-light text-lg md:text-xl lg:text-2xl">Ровно в 17:30</p>
              <span className="text-[10px] md:text-xs italic text-primary/40 uppercase tracking-widest">(подготовка к Ифтару)</span>
            </div>
            
            <div 
              data-aos="fade-up" 
              data-aos-delay="300"
              className="flex flex-col items-center space-y-3 md:space-y-4"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-primary/30 flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <span className="text-primary text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium opacity-60">Локация</span>
              <p className="font-light text-lg md:text-xl lg:text-2xl">ЖК Шахристан</p>
              <span className="text-[10px] md:text-xs italic text-primary/40 uppercase tracking-widest leading-relaxed">ул. Навои, 208 • TonyBar</span>
            </div>
          </div>
          
          <a
            data-aos="fade-up"
            data-aos-delay="400"
            href="https://maps.google.com/?q=Almaty+Navoi+208+TonyBar"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 md:mt-20 inline-flex items-center gap-3 md:gap-4 text-primary border border-primary/20 px-6 py-4 md:px-8 md:py-4 hover:bg-primary/5 hover:border-primary/40 transition-all duration-500 tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs font-medium active:scale-95"
          >
            <Navigation className="w-4 h-4" />
            Маршрут в TonyBar
          </a>
        </div>
      </section>

      {/* Event Highlights - Mobile Cards */}
      <section className="py-20 md:py-32 lg:py-48 relative">
        <div className="absolute inset-0 bg-primary/[0.03] -skew-y-2 md:-skew-y-3 transform origin-right pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 
            data-aos="fade-up"
            className="text-2xl sm:text-3xl md:text-4xl font-serif mb-10 md:mb-16 text-center uppercase tracking-[0.15em] text-primary/80"
          >
            Программа вечера
          </h2>
          
          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3">
            {/* Iftar Card */}
            <div data-aos="fade-up" data-aos-delay="100">
              <Card className="glass border-white/5 p-8 md:p-12 lg:p-16 h-full flex flex-col items-center text-center group hover:border-primary/40 transition-all duration-700 active:scale-[0.98]">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-primary/20 flex items-center justify-center mb-6 md:mb-10 group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-500">
                  <Utensils className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4 md:mb-8 text-primary/90 tracking-wide">Ифтар</h3>
                <p className="text-foreground/60 leading-relaxed font-sans font-light text-base md:text-lg">
                  Традиционное разговение в уютной атмосфере. Специальное меню для особенного вечера.
                </p>
              </Card>
            </div>

            {/* Karaoke Card */}
            <div data-aos="fade-up" data-aos-delay="200">
              <Card className="glass border-white/5 p-8 md:p-12 lg:p-16 h-full flex flex-col items-center text-center group hover:border-primary/40 transition-all duration-700 active:scale-[0.98]">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-primary/20 flex items-center justify-center mb-6 md:mb-10 group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-500">
                  <Mic className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4 md:mb-8 text-primary/90 tracking-wide">Караоке</h3>
                <p className="text-foreground/60 leading-relaxed font-sans font-light text-base md:text-lg">
                  Премиальный звук и ваши любимые треки. Лучшее караоке города.
                </p>
              </Card>
            </div>

            {/* March 8 Card */}
            <div data-aos="fade-up" data-aos-delay="300">
              <Card className="glass border-white/5 p-8 md:p-12 lg:p-16 h-full flex flex-col items-center text-center group hover:border-accent/40 transition-all duration-700 active:scale-[0.98]">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-accent/20 flex items-center justify-center mb-6 md:mb-10 group-hover:scale-110 group-hover:bg-accent/5 transition-all duration-500">
                  <Flower2 className="w-7 h-7 md:w-8 md:h-8 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4 md:mb-8 text-accent/90 tracking-wide">8 Марта</h3>
                <p className="text-foreground/60 leading-relaxed font-sans font-light text-base md:text-lg">
                  Праздничные поздравления для наших прекрасных дам.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized Big Button */}
      <section className="py-24 md:py-40 lg:py-64 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-10 md:space-y-16">
          <p 
            data-aos="fade-up"
            className="text-foreground/50 font-sans tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs leading-loose px-4"
          >
            Пожалуйста, подтвердите свое участие до 8 марта,<br /> 
            чтобы мы забронировали лучший стол.
          </p>
          
          <div data-aos="fade-up" data-aos-delay="200">
            <Button 
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-8 md:px-16 md:py-10 text-lg md:text-xl lg:text-2xl font-sans tracking-[0.15em] md:tracking-[0.2em] uppercase h-auto transition-all duration-500 shadow-lg hover:shadow-primary/20 active:scale-95 w-full sm:w-auto min-h-[70px] md:min-h-[80px]"
            >
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-3 md:gap-4"
              >
                <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
                Я приду!
              </a>
            </Button>
          </div>
          
          <p 
            data-aos="fade-up" 
            data-aos-delay="300"
            className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-[0.4em] md:tracking-[0.5em] opacity-40"
          >
            Вступить в группу WhatsApp
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 border-t border-border/10 text-center px-4">
        <p className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em]">
          TonyBar Karaoke & Lounge
        </p>
      </footer>
    </div>
  );
}
