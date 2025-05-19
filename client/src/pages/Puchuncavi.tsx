import React from "react";
import { motion } from "framer-motion";
import { pageTransition, fadeIn, slideInLeft, slideInRight } from "@/lib/animations";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ArrowLeft, 
  MapPin, 
  Mountain, 
  Truck, 
  Leaf, 
  Building2, 
  Factory, 
  BarChart3, 
  DollarSign 
} from "lucide-react";

const Puchuncavi: React.FC = () => {
  return (
    <motion.div
      className="relative bg-neutral-50 text-neutral-800"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <button 
              onClick={() => window.location.href = '/'}
              className="flex items-center text-white/80 hover:text-white mb-6 inline-block border-none bg-transparent cursor-pointer"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver a Inicio
            </button>
            
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-6">
              <MapPin className="h-4 w-4 mr-2" /> MEGATERRENO
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Puchuncaví: 300 hectáreas
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mb-10">
              Terreno de alto valor estratégico frente al megaproyecto que desarrollará el grupo Luksic, disponible para venta o arriendo a gran escala.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-12">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Ubicación estratégica</p>
                  <p className="text-white/70 text-sm">Acceso costero y vial</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <Truck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Ideal para proyectos</p>
                  <p className="text-white/70 text-sm">Industriales, logísticos o energéticos</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Alto potencial</p>
                  <p className="text-white/70 text-sm">Valorización o desarrollo conjunto</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Detailed Info Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-primary">Descripción del Terreno</h2>
                
                <p className="text-lg text-neutral-700">
                  Este terreno estratégico de 300 hectáreas ubicado en Puchuncaví representa una oportunidad única de inversión por su ubicación privilegiada frente al desarrollo del grupo Luksic. La propiedad cuenta con acceso directo a vías principales y una topografía ideal para el desarrollo de múltiples proyectos industriales y comerciales.
                </p>
                
                <p className="text-lg text-neutral-700">
                  Su potencial para valorización es extraordinario, considerando el crecimiento acelerado de la zona y la creciente demanda de espacios logísticos e industriales en el área.
                </p>
                
                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Características Principales</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <Mountain className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">300 hectáreas de superficie</p>
                        <p className="text-neutral-600">Terreno plano con ligeras pendientes, óptimo para construcción</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <MapPin className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Ubicación frente a megaproyecto</p>
                        <p className="text-neutral-600">Posición privilegiada junto al desarrollo del grupo Luksic</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <Truck className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Accesibilidad excepcional</p>
                        <p className="text-neutral-600">Acceso directo a carreteras principales y proximidad a puertos</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div
                variants={slideInRight}
                initial="hidden"
                animate="visible"
                className="rounded-2xl overflow-hidden h-[500px] shadow-xl"
              >
                <img 
                  src="/attached_assets/7b8cb1febbe739305e41631e61a3bd15alrzu.jpeg" 
                  alt="Terreno de Puchuncaví - Vista aérea" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Potential Uses Section */}
        <section className="py-20 bg-neutral-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-primary">Usos Potenciales</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto mt-4">
                Este terreno estratégico ofrece múltiples posibilidades de desarrollo con alto potencial de valorización
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-3 bg-primary"></div>
                <div className="p-6">
                  <Factory className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Desarrollo Industrial</h3>
                  <p className="text-neutral-600 mb-4">
                    Ideal para plantas industriales de manufactura, procesamiento o almacenamiento. La ubicación estratégica permite una operación logística eficiente.
                  </p>
                  <div className="text-sm font-medium text-primary">Contratos a 20+ años</div>
                </div>
              </motion.div>
              
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-3 bg-primary"></div>
                <div className="p-6">
                  <Building2 className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Parque Logístico</h3>
                  <p className="text-neutral-600 mb-4">
                    Desarrollo de un hub logístico multimodal para operaciones de distribución, almacenaje y transporte conectado con las principales vías.
                  </p>
                  <div className="text-sm font-medium text-primary">Alta demanda en la zona</div>
                </div>
              </motion.div>
              
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-3 bg-primary"></div>
                <div className="p-6">
                  <Leaf className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Proyectos Energéticos</h3>
                  <p className="text-neutral-600 mb-4">
                    Óptimo para el desarrollo de infraestructura energética, incluyendo plantas solares, almacenamiento o instalaciones de generación.
                  </p>
                  <div className="text-sm font-medium text-primary">Oportunidad para energías renovables</div>
                </div>
              </motion.div>
              
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-3 bg-primary"></div>
                <div className="p-6">
                  <DollarSign className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Inversión Inmobiliaria</h3>
                  <p className="text-neutral-600 mb-4">
                    Excelente oportunidad de adquisición para valorización a mediano y largo plazo, considerando el desarrollo de la zona.
                  </p>
                  <div className="text-sm font-medium text-primary">Potencial de valorización exponencial</div>
                </div>
              </motion.div>
              
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden md:col-span-2"
              >
                <div className="h-3 bg-secondary"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Desarrollo Colaborativo</h3>
                  <p className="text-neutral-600 mb-4">
                    Buscamos asociarnos con desarrolladores e inversionistas para maximizar el potencial de este terreno estratégico. Estamos abiertos a:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-semibold text-secondary">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Joint Ventures</p>
                        <p className="text-sm text-neutral-600">Asociación para desarrollo compartido</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-semibold text-secondary">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Venta Total o Parcial</p>
                        <p className="text-sm text-neutral-600">Posibilidad de subdivisión del terreno</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-semibold text-secondary">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Contratos de Arriendo</p>
                        <p className="text-sm text-neutral-600">A largo plazo (20+ años)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-semibold text-secondary">4</span>
                      </div>
                      <div>
                        <p className="font-medium">Proyectos a Medida</p>
                        <p className="text-sm text-neutral-600">Desarrollo según necesidades del cliente</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Investment Details Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-200">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary">Datos de Inversión</h2>
                <p className="text-lg text-neutral-600 mt-4">
                  Información financiera y proyecciones para inversores interesados
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                  <h3 className="text-xl font-semibold text-primary mb-4">Valorización Actual</h3>
                  <p className="text-4xl font-bold font-mono">UF 850.000</p>
                  <p className="text-neutral-500 mt-2">Aproximadamente</p>
                  <div className="h-1 w-20 bg-primary/30 my-4"></div>
                  <p className="text-neutral-600">
                    Valorización basada en tasaciones recientes y condiciones de mercado actual
                  </p>
                </div>
                
                <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                  <h3 className="text-xl font-semibold text-secondary mb-4">Proyección a 5 años</h3>
                  <p className="text-4xl font-bold font-mono">UF 1.250.000</p>
                  <p className="text-neutral-500 mt-2">Estimación conservadora</p>
                  <div className="h-1 w-20 bg-secondary/30 my-4"></div>
                  <p className="text-neutral-600">
                    Considerando desarrollo de infraestructura en la zona y proyectos anunciados
                  </p>
                </div>
                
                <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                  <h3 className="text-xl font-semibold text-accent mb-4">Precio por Hectárea</h3>
                  <p className="text-4xl font-bold font-mono">UF 2.833</p>
                  <p className="text-neutral-500 mt-2">Valor actual</p>
                  <div className="h-1 w-20 bg-accent/30 my-4"></div>
                  <p className="text-neutral-600">
                    Valor competitivo en comparación con terrenos similares en la zona
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 h-auto text-lg font-semibold">
                  Solicitar Dossier Completo
                </Button>
                <p className="text-neutral-500 mt-4">
                  Incluye estudio de mercado, análisis financiero y documentación legal completa
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Interesado en este terreno estratégico?</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
              Contáctenos para coordinar una visita, solicitar información adicional o discutir oportunidades de colaboración
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 h-auto text-lg font-semibold">
                Contactar Ahora
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 h-auto text-lg font-semibold"
                onClick={() => window.location.href = '/'}
              >
                Volver al Inicio
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
};

export default Puchuncavi;