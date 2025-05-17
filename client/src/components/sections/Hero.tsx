import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";
import { useCounter } from "@/hooks/use-counter";
import { ArrowRight, ChevronDown, MapPin, LineChart, Clock3, Compass } from "lucide-react";
import { fadeIn, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Animated counters
  const stationsCount = useCounter({ target: 450, duration: 2500 });
  const hectaresCount = useCounter({ target: 1700, duration: 2500 });
  const roiCount = useCounter({ target: 484, duration: 2500 });
  const paybackCount = useCounter({ target: 6, startAt: 0, duration: 2000 });

  // Scroll to next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('vision');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16">
      {/* Background with stylized pattern and gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-primary-dark z-0">
        <div className="absolute inset-0 opacity-5 bg-[url('/images/grid-pattern.svg')]"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-900/20 to-transparent"></div>
      <div className="absolute top-1/3 right-0 transform -translate-y-1/2 w-96 h-96 bg-secondary opacity-20 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/3 left-0 transform translate-y-1/2 w-80 h-80 bg-accent opacity-15 rounded-full filter blur-[80px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 w-full">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <motion.div 
            variants={slideInLeft}
            className="lg:col-span-7 text-white"
          >
            <motion.div
              variants={fadeIn}
              className="flex items-center space-x-3 mb-6 bg-white/10 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-white/20"
            >
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide text-white/90">Presentación Estratégica 2025</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Inversiones del Norte
              <span className="text-secondary block mt-1">Activos Ferroviarios</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl sm:text-2xl font-light mb-8 text-white/80 max-w-3xl"
            >
              Transformando el patrimonio ferroviario del norte de Chile en oportunidades 
              de inversión estratégica con alto retorno y bajo riesgo.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap gap-5 mb-16"
            >
              <Link href="#financiero">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white px-8 py-7 h-auto text-lg font-semibold shadow-lg group"
                >
                  Explorar Simulador Financiero
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="#mapa">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent hover:bg-white/10 text-white border-white/30 hover:border-white/50 px-8 py-7 h-auto text-lg font-semibold"
                >
                  Ver Estaciones <MapPin className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-6 mt-8"
            >
              <div>
                <div className="flex items-center mb-2">
                  <Clock3 className="text-secondary mr-3 h-6 w-6" />
                  <span className="text-xl font-semibold text-white">{paybackCount} meses</span>
                </div>
                <p className="text-white/60 text-sm">Payback sobre la inversión</p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <LineChart className="text-secondary mr-3 h-6 w-6" />
                  <span className="text-xl font-semibold text-white">+{roiCount}%</span>
                </div>
                <p className="text-white/60 text-sm">Tasa de retorno anual</p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Compass className="text-secondary mr-3 h-6 w-6" />
                  <span className="text-xl font-semibold text-white">{stationsCount}</span>
                </div>
                <p className="text-white/60 text-sm">Estaciones ferroviarias</p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <MapPin className="text-secondary mr-3 h-6 w-6" />
                  <span className="text-xl font-semibold text-white">{hectaresCount} ha</span>
                </div>
                <p className="text-white/60 text-sm">Superficie total</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={slideInRight}
            className="lg:col-span-5 mt-2 lg:mt-0"
          >
            <div className="relative w-full h-auto aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/80 z-10"></div>
              <img 
                src="/images/hero-map.jpg" 
                alt="Mapa de Estaciones Ferroviarias" 
                className="object-cover w-full h-full" 
              />
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 z-20"
              >
                <h3 className="text-white font-semibold mb-2">$15.2 millones USD</h3>
                <p className="text-white/80 text-sm">Valor Actual Neto (VAN) proyectado para la inversión total en 20 años.</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={scrollToNextSection}
      >
        <span className="text-white/70 text-sm mb-2">Conocer más</span>
        <ChevronDown className="text-white/70 animate-bounce h-6 w-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
