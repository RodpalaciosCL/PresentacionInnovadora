import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";
import { useCounter } from "@/hooks/use-counter";
import { MapPin } from "lucide-react";
import { fadeIn, slideInLeft, slideInRight, pulseAnimation } from "@/lib/animations";

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  // Animated counters
  const stationsCount = useCounter({ target: 450, duration: 2500 });
  const hectaresCount = useCounter({ target: 1700, duration: 2500 });
  const roiCount = useCounter({ target: 40, duration: 2500 });
  const paybackCount = useCounter({ target: 20, duration: 2500 });

  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-light text-white pt-24 pb-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-20 bg-cover bg-center" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=864')" }}>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            className="lg:col-span-7"
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-2xl sm:text-3xl font-light mb-8 text-white/80">
              {t("hero.subtitle")}
            </p>
            <p className="text-lg max-w-2xl mb-10">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#financiero">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300 inline-block"
                >
                  {t("hero.explore")}
                </motion.a>
              </Link>
              <Link href="#mapa">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-neutral-100 text-primary border border-white hover:border-neutral-100 px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300 inline-flex items-center"
                >
                  {t("hero.locations")} <MapPin className="ml-2 h-5 w-5" />
                </motion.a>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-5 relative mt-8 lg:mt-0"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            <motion.div 
              variants={pulseAnimation}
              animate="pulse"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg"
            >
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-white/10 rounded-lg">
                  <p className="text-4xl font-mono font-bold mb-2">{stationsCount}</p>
                  <p className="text-sm uppercase tracking-wider">{t("hero.stations")}</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <p className="text-4xl font-mono font-bold mb-2">{hectaresCount}</p>
                  <p className="text-sm uppercase tracking-wider">{t("hero.hectares")}</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <p className="text-4xl font-mono font-bold mb-2">{roiCount}%+</p>
                  <p className="text-sm uppercase tracking-wider">{t("hero.roi")}</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <p className="text-4xl font-mono font-bold mb-2">{paybackCount} M</p>
                  <p className="text-sm uppercase tracking-wider">{t("hero.payback")}</p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent rounded-full opacity-20 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
