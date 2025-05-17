import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { CircleCheck, Users, TrendingUp, ArrowRight } from "lucide-react";
import { fadeIn, slideInLeft, slideInRight } from "@/lib/animations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NextSteps: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="proximos-pasos" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-0 w-1/3 h-1/4 bg-neutral-50 rounded-br-[100px] -z-10"></div>
      <div className="absolute right-0 bottom-0 w-1/4 h-1/4 bg-neutral-50 rounded-tl-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Próximos Pasos
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Estamos buscando 1 socio estratégico que:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-0 shadow-md h-full bg-gradient-to-br from-white to-neutral-50">
              <CardHeader className="pb-2 pt-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle className="text-xl text-neutral-800">Inversión Inicial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  Invierta ~1.000 millones CLP para activar los primeros 100 terrenos.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-0 shadow-md h-full bg-gradient-to-br from-white to-neutral-50">
              <CardHeader className="pb-2 pt-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <CardTitle className="text-xl text-neutral-800">Participación Mensual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  Participe mensualmente con el 10% de la utilidad de Inversiones del Norte.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-0 shadow-md h-full bg-gradient-to-br from-white to-neutral-50">
              <CardHeader className="pb-2 pt-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <CardTitle className="text-xl text-neutral-800">Escalabilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  Acompañe la escalabilidad del proyecto hacia 200, 300 y 400 terrenos.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="bg-neutral-50 rounded-xl p-8 border border-neutral-100 shadow-sm"
        >
          <h3 className="text-xl font-semibold text-neutral-800 mb-6">También se considera:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <CircleCheck className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 mr-3" />
              <span className="text-neutral-700">Participación equity minoritaria</span>
            </div>
            
            <div className="flex items-start">
              <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 mr-3" />
              <span className="text-neutral-700">Tasa de retorno garantizada</span>
            </div>
            
            <div className="flex items-start">
              <Users className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 mr-3" />
              <span className="text-neutral-700">Posibilidad de entrar en fase 2: Hub de Innovación</span>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 h-auto text-lg font-semibold shadow-lg group">
              Solicitar Información Detallada 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NextSteps;