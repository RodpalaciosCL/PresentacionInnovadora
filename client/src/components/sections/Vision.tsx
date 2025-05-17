import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { CheckCircle2, Rocket, Target, TrendingUp } from "lucide-react";
import { fadeIn, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";

const Vision: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="vision" ref={ref} className="py-24 relative overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-[100px] -z-10"></div>
      <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-secondary/5 rounded-tr-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary mb-4">
            Nuestra Visión
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Transformando el Patrimonio<br className="hidden md:block" /> 
            <span className="text-primary">en Oportunidades de Inversión</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Convertimos activos ferroviarios históricos en centros estratégicos de innovación y desarrollo económico sustentable con alto retorno para inversionistas.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-6 order-2 lg:order-1"
            variants={slideInLeft}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
          >
            <div className="space-y-8">
              <div className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/10 shadow-sm">
                <p className="text-xl font-medium text-neutral-800 italic">
                  "Construimos una plataforma que potencia las ciudades del norte a través de la reactivación estratégica de sus estaciones ferroviarias, generando valor compartido entre comunidades e inversionistas."
                </p>
              </div>
              
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isIntersecting ? "visible" : "hidden"}
                className="space-y-6"
              >
                <motion.div variants={fadeIn} className="flex gap-5 p-5 rounded-xl hover:bg-neutral-50 transition-colors duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Solución Estratégica</h3>
                    <p className="text-lg text-neutral-700">
                      Transformamos estaciones ferroviarias en desuso para crear valor inmobiliario con múltiples usos comerciales y alta rentabilidad.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="flex gap-5 p-5 rounded-xl hover:bg-neutral-50 transition-colors duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Alto Rendimiento</h3>
                    <p className="text-lg text-neutral-700">
                      Ofrecemos oportunidades de inversión con TIR superior al 480% anual y un periodo de recuperación de solo 6 meses.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="flex gap-5 p-5 rounded-xl hover:bg-neutral-50 transition-colors duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                      <Rocket className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Impacto Social</h3>
                    <p className="text-lg text-neutral-700">
                      Creamos polos de desarrollo que reactivan economías locales y generan empleo sustentable en comunidades del norte de Chile.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-6 order-1 lg:order-2"
            variants={slideInRight}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/images/vision-main.jpg" 
                  alt="Estación ferroviaria rehabilitada" 
                  className="w-full h-auto aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-bold text-2xl mb-2">Desarrollo Sustentable</h3>
                  <p className="text-white/90 text-lg">Combinamos patrimonio histórico con innovación para crear ecosistemas de negocios sostenibles</p>
                </div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-5 max-w-xs">
                <div className="flex items-center mb-2">
                  <CheckCircle2 className="text-primary mr-2 h-5 w-5" />
                  <h4 className="font-semibold text-neutral-800">Datos Clave</h4>
                </div>
                <div className="space-y-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">Payback</span>
                    <span className="font-mono font-bold text-primary">6.25 meses</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">TIR Anual</span>
                    <span className="font-mono font-bold text-secondary">+484%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">VAN</span>
                    <span className="font-mono font-bold text-green-600">$15.2M USD</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
