import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { fadeIn, slideInLeft, slideInRight } from "@/lib/animations";
import { 
  Building, 
  Cpu, 
  Factory, 
  Leaf, 
  MapPin, 
  Mountain, 
  Sun, 
  Truck, 
  Warehouse, 
  Waves 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const HubNorte: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="hub-norte" ref={ref} className="py-24 bg-neutral-50 relative">
      {/* Background decorations */}
      <div className="absolute right-0 top-0 w-1/3 h-64 bg-primary/5 rounded-bl-[100px] -z-10"></div>
      <div className="absolute left-0 bottom-0 w-1/4 h-48 bg-primary/5 rounded-tr-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Hub Norte
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Proyectos estratégicos para el desarrollo económico e industrial del norte de Chile
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                <MapPin className="h-4 w-4 mr-2" /> Proyecto Estratégico
              </div>
              
              <h3 className="text-3xl font-bold text-neutral-800">Terreno de Puchuncaví</h3>
              
              <div className="prose prose-lg text-neutral-700">
                <p>
                  El terreno de Puchuncaví representa uno de nuestros activos estratégicos más valiosos, con una ubicación privilegiada para el desarrollo industrial y tecnológico.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <MapPin className="h-3 w-3 text-secondary" />
                    </div>
                    <span>Ubicación estratégica con acceso a carretera principal</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <Mountain className="h-3 w-3 text-secondary" />
                    </div>
                    <span>Extensa superficie de más de 25 hectáreas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <Factory className="h-3 w-3 text-secondary" />
                    </div>
                    <span>Ideal para desarrollo industrial y logístico</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <Leaf className="h-3 w-3 text-secondary" />
                    </div>
                    <span>Potencial para proyectos de energía verde e iniciativas sostenibles</span>
                  </li>
                </ul>
              </div>
              
              <a href="/puchuncavi">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Ver Detalles del Terreno
                </Button>
              </a>
            </div>
            
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
              className="rounded-2xl overflow-hidden shadow-xl h-[400px] bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center"
            >
              <div className="text-center p-6">
                <Building className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-neutral-600">Imagen del Terreno de Puchuncaví</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-neutral-800 mb-8 text-center">
            Negocios Potenciales en el Hub Norte
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden"
            >
              <div className="h-2 bg-primary"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Warehouse className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Centros Logísticos</h4>
                <p className="text-neutral-600 mb-4">
                  Desarrollo de complejos logísticos modernos para almacenamiento y distribución, con espacios adaptables a las necesidades de cada cliente.
                </p>
                <div className="text-sm font-medium text-primary">Contratos a 20+ años</div>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden"
            >
              <div className="h-2 bg-secondary"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-secondary" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Data Centers</h4>
                <p className="text-neutral-600 mb-4">
                  Instalaciones para centros de datos con infraestructura de alta velocidad, seguridad avanzada y sistemas eficientes de refrigeración.
                </p>
                <div className="text-sm font-medium text-secondary">Alta rentabilidad</div>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden"
            >
              <div className="h-2 bg-accent"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-accent" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Plantas Solares</h4>
                <p className="text-neutral-600 mb-4">
                  Desarrollo de granjas solares fotovoltaicas con capacidad para generar energía limpia y contribuir a la matriz energética renovable.
                </p>
                <div className="text-sm font-medium text-accent">Alto impacto ambiental positivo</div>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden"
            >
              <div className="h-2 bg-primary"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Centros de Distribución</h4>
                <p className="text-neutral-600 mb-4">
                  Plataformas para distribución de mercancías con conectividad estratégica a los principales ejes de transporte del norte de Chile.
                </p>
                <div className="text-sm font-medium text-primary">Ubicación privilegiada</div>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden"
            >
              <div className="h-2 bg-secondary"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-secondary" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Hoteles de Servicio</h4>
                <p className="text-neutral-600 mb-4">
                  Complejos hoteleros orientados al servicio de la industria minera y logística con servicios especializados para el sector.
                </p>
                <div className="text-sm font-medium text-secondary">Demanda constante</div>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden"
            >
              <div className="h-2 bg-accent"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Waves className="h-6 w-6 text-accent" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Plantas Desalinizadoras</h4>
                <p className="text-neutral-600 mb-4">
                  Desarrollo de infraestructura de desalinización para proveer agua a proyectos industriales y comunidades del norte.
                </p>
                <div className="text-sm font-medium text-accent">Recurso estratégico</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="text-center"
        >
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 h-auto text-lg font-semibold">
            Solicitar Información Detallada
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HubNorte;