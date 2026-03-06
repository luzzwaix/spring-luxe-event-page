import { motion } from "framer-motion";
import { MapPin, Utensils, Mic, Flower2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  const WHATSAPP_LINK = "https://chat.whatsapp.com/LyLYSs5c9ch4iZMw2L743A?mode=gi_t";

  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      {/* 1. Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://v3b.fal.media/files/b/0a9115b5/_mD7cGoMJntXfWnMTtyK4_QFReDDVX.png"
            alt="TonyBar Event Hero"
            className="w-full h-full object-cover desaturate-[0.4] brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl font-serif text-foreground mb-6 leading-tight">
              TonyBar: <span className="text-primary italic">Вечер весны</span> <br /> и традиций
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-2xl text-foreground/80 font-sans tracking-wide max-w-2xl mx-auto"
            >
              Специальный Ифтар и празднование 8 Марта в кругу одноклассников.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* 2. Logistics Section */}
      <section className="py-48 md:py-64 px-4 flex flex-col items-center justify-center text-center">
        <motion.div {...fadeInUp} className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-serif mb-24 uppercase tracking-[0.2em] text-primary">
            Где и когда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 text-foreground/90 font-sans text-xl md:text-2xl">
            <div className="flex flex-col items-center space-y-4">
              <span className="text-primary text-xs uppercase tracking-[0.4em] font-medium opacity-60">Дата</span>
              <p className="font-light">Понедельник, 9 марта</p>
              <span className="text-xs italic text-primary/40 uppercase tracking-widest">(выходной день)</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <span className="text-primary text-xs uppercase tracking-[0.4em] font-medium opacity-60">Сбор</span>
              <p className="font-light">Ровно в 17:30</p>
              <span className="text-xs italic text-primary/40 uppercase tracking-widest">(подготовка к Ифтару)</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <span className="text-primary text-xs uppercase tracking-[0.4em] font-medium opacity-60">Локация</span>
              <p className="font-light">ЖК Шахристан, ул. Навои, 208</p>
              <span className="text-xs italic text-primary/40 uppercase tracking-widest leading-relaxed">TonyBar Karaoke & Lounge</span>
            </div>
          </div>
          
          <motion.a
            href="https://2gis.kz/almaty/geo/9430047375045163/76.884695,43.207313"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, letterSpacing: "0.4em" }}
            whileTap={{ scale: 0.95 }}
            className="mt-24 inline-flex items-center gap-4 text-primary border-b border-primary/20 pb-4 hover:border-primary transition-all duration-500 tracking-[0.3em] uppercase text-xs font-medium"
          >
            <MapPin className="w-4 h-4" />
            Маршрут в TonyBar
          </motion.a>
        </motion.div>
      </section>

      {/* 3. Event Highlights */}
      <section className="py-48 md:py-64 relative">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-right pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Iftar Card */}
            <motion.div variants={fadeInUp}>
              <Card className="glass border-white/5 p-16 h-full flex flex-col items-center text-center group hover:border-primary/40 transition-all duration-700">
                <div className="w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-500">
                  <Utensils className="w-8 h-8 text-primary font-light" />
                </div>
                <h3 className="text-3xl font-serif mb-8 text-primary/90 tracking-wide">Ифтар</h3>
                <p className="text-foreground/60 leading-relaxed font-sans font-light text-lg">
                  Традиционное разговение в уютной атмосфере. Специальное меню, созданное для этого особенного вечера.
                </p>
              </Card>
            </motion.div>

            {/* Karaoke Card */}
            <motion.div variants={fadeInUp}>
              <Card className="glass border-white/5 p-16 h-full flex flex-col items-center text-center group hover:border-primary/40 transition-all duration-700">
                <div className="w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-500">
                  <Mic className="w-8 h-8 text-primary font-light" />
                </div>
                <h3 className="text-3xl font-serif mb-8 text-primary/90 tracking-wide">Караоке</h3>
                <p className="text-foreground/60 leading-relaxed font-sans font-light text-lg">
                  Премиальный звук и ваши любимые треки. Проведите вечер с песней в лучшем караоке города.
                </p>
              </Card>
            </motion.div>

            {/* March 8 Card */}
            <motion.div variants={fadeInUp}>
              <Card className="glass border-white/5 p-16 h-full flex flex-col items-center text-center group hover:border-accent/40 transition-all duration-700">
                <div className="w-20 h-20 rounded-full border border-accent/20 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-accent/5 transition-all duration-500">
                  <Flower2 className="w-8 h-8 text-accent font-light" />
                </div>
                <h3 className="text-3xl font-serif mb-8 text-accent/90 tracking-wide">8 Марта</h3>
                <p className="text-foreground/60 leading-relaxed font-sans font-light text-lg">
                  Праздничные поздравления и весеннее настроение для наших прекрасных дам.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4 & 5. Important Details & CTA */}
      <section className="py-64 px-4 text-center">
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto space-y-20">
          <p className="text-foreground/50 font-sans tracking-[0.3em] uppercase text-xs leading-loose">
            Пожалуйста, подтвердите свое участие до 8 марта,<br /> 
            чтобы мы забронировали лучший стол.
          </p>
          
          <div className="relative inline-block border-beam p-[1px]">
            <Button 
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-20 py-10 text-2xl font-sans tracking-[0.2em] uppercase h-auto transition-all duration-700 relative z-10"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                <MessageCircle className="w-7 h-7" />
                Я приду!
              </a>
            </Button>
          </div>
          
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.5em] opacity-40">
            Подтверждение будет отправлено в WhatsApp
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/10 text-center">
        <p className="text-muted-foreground text-xs uppercase tracking-[0.3em]">
          TonyBar Karaoke & Lounge • Spring 2026
        </p>
      </footer>
    </div>
  );
}
