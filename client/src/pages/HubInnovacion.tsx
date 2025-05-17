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
  Lightbulb, 
  Building, 
  Users, 
  Cpu, 
  Globe, 
  Rocket, 
  Network,
  Handshake
} from "lucide-react";

const HubInnovacion: React.FC = () => {
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
        <section className="pt-24 pb-16 bg-gradient-to-br from-secondary to-secondary-dark text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <Link href="/">
              <a className="flex items-center text-white/80 hover:text-white mb-6 inline-block">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Volver a Inicio
              </a>
            </Link>
            
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-6">
              <Lightbulb className="h-4 w-4 mr-2" /> HUB DE INNOVACIÓN
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hub de Desarrollo e Innovación del Norte
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mb-10">
              Proyecto en etapa avanzada de conceptualización que se construirá junto a las principales mineras del país y marcas líderes de innovación.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-12">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Ubicación estratégica</p>
                  <p className="text-white/70 text-sm">Punto neurálgico del eje logístico minero</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Espacio colaborativo</p>
                  <p className="text-white/70 text-sm">Encuentro empresarial y prototipado</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <Handshake className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Participación abierta</p>
                  <p className="text-white/70 text-sm">Corporativos, startups y gobiernos</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Concept Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-secondary">Concepto del Hub</h2>
                
                <p className="text-lg text-neutral-700">
                  El Hub de Desarrollo e Innovación del Norte es un proyecto visionario diseñado para convertirse en el epicentro de la innovación tecnológica y empresarial en el norte de Chile, con un enfoque especial en soluciones para la industria minera y energética.
                </p>
                
                <p className="text-lg text-neutral-700">
                  Este espacio colaborativo reunirá a grandes corporaciones, startups emergentes, instituciones académicas y entidades gubernamentales para fomentar la innovación abierta, el desarrollo de tecnologías disruptivas y la creación de soluciones sostenibles para los desafíos de la región.
                </p>
                
                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Características Clave</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <Building className="h-3 w-3 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium">Infraestructura de vanguardia</p>
                        <p className="text-neutral-600">Instalaciones diseñadas específicamente para fomentar la colaboración e innovación</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <Network className="h-3 w-3 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium">Ecosistema integrado</p>
                        <p className="text-neutral-600">Red de colaboración con empresas mineras, proveedores y desarrolladores tecnológicos</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <Rocket className="h-3 w-3 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium">Programas de aceleración</p>
                        <p className="text-neutral-600">Plataformas para impulsar startups y proyectos innovadores en etapas tempranas</p>
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
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Hub de Innovación - Espacio moderno de trabajo colaborativo" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Key Components Section */}
        <section className="py-20 bg-neutral-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-secondary">Componentes del Hub</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto mt-4">
                Elementos clave que conformarán este ecosistema de innovación
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
                <div className="h-3 bg-secondary"></div>
                <div className="p-6">
                  <Building className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Centro de Investigación</h3>
                  <p className="text-neutral-600 mb-4">
                    Laboratorios especializados equipados con tecnología avanzada para investigación aplicada y desarrollo de prototipos orientados a la minería y energía.
                  </p>
                  <div className="text-sm font-medium text-secondary">12.000 m² de infraestructura</div>
                </div>
              </motion.div>
              
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-3 bg-secondary"></div>
                <div className="p-6">
                  <Cpu className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Centro de Datos y IA</h3>
                  <p className="text-neutral-600 mb-4">
                    Infraestructura digital de alto rendimiento para procesamiento de datos, simulación de procesos y desarrollo de soluciones basadas en inteligencia artificial.
                  </p>
                  <div className="text-sm font-medium text-secondary">Capacidad de procesamiento de 850 TFLOPS</div>
                </div>
              </motion.div>
              
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-3 bg-secondary"></div>
                <div className="p-6">
                  <Users className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Espacios Colaborativos</h3>
                  <p className="text-neutral-600 mb-4">
                    Áreas diseñadas para promover la interacción entre distintos actores del ecosistema, incluyendo zonas de coworking, salas de reuniones y espacios para eventos.
                  </p>
                  <div className="text-sm font-medium text-secondary">Capacidad para 500+ personas</div>
                </div>
              </motion.div>
              
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-3 bg-secondary"></div>
                <div className="p-6">
                  <Globe className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Centro de Sostenibilidad</h3>
                  <p className="text-neutral-600 mb-4">
                    Dedicado al desarrollo de soluciones para reducir el impacto ambiental de la minería y fomentar prácticas sostenibles en la industria extractiva.
                  </p>
                  <div className="text-sm font-medium text-secondary">Certificación LEED Platinum</div>
                </div>
              </motion.div>
              
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-3 bg-secondary"></div>
                <div className="p-6">
                  <Rocket className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Aceleradora de Startups</h3>
                  <p className="text-neutral-600 mb-4">
                    Programas especializados para impulsar emprendimientos innovadores enfocados en soluciones para la industria minera, energética y logística.
                  </p>
                  <div className="text-sm font-medium text-secondary">30 startups por cohorte</div>
                </div>
              </motion.div>
              
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-3 bg-secondary"></div>
                <div className="p-6">
                  <Network className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Centro de Pruebas</h3>
                  <p className="text-neutral-600 mb-4">
                    Instalaciones para testear soluciones tecnológicas en condiciones reales antes de su implementación en operaciones mineras y energéticas.
                  </p>
                  <div className="text-sm font-medium text-secondary">Validación de tecnología acelerada</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Partners & Participation Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-secondary">Alianzas Estratégicas</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto mt-4">
                Colaboramos con líderes del sector para construir un ecosistema de innovación sin precedentes
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-200 mb-16">
              <h3 className="text-2xl font-bold text-secondary mb-8">Industrias Participantes</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-100">
                  <h4 className="text-xl font-semibold mb-3">Minería</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-secondary mr-3"></div>
                      <span>Grandes operadoras mineras</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-secondary mr-3"></div>
                      <span>Proveedores de servicios mineros</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-secondary mr-3"></div>
                      <span>Empresas de exploración</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-100">
                  <h4 className="text-xl font-semibold mb-3">Tecnología</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-secondary mr-3"></div>
                      <span>Empresas de software y hardware</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-secondary mr-3"></div>
                      <span>Desarrolladores de IA y ML</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-secondary mr-3"></div>
                      <span>Proveedores de IoT industrial</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-100">
                  <h4 className="text-xl font-semibold mb-3">Energía</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-secondary mr-3"></div>
                      <span>Desarrolladores de energía renovable</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-secondary mr-3"></div>
                      <span>Empresas de almacenamiento energético</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-secondary mr-3"></div>
                      <span>Innovadores en hidrógeno verde</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-100">
                  <h4 className="text-xl font-semibold mb-3">Academia</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-secondary mr-3"></div>
                      <span>Universidades nacionales e internacionales</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-secondary mr-3"></div>
                      <span>Centros de investigación aplicada</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-secondary mr-3"></div>
                      <span>Institutos tecnológicos</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-100">
                  <h4 className="text-xl font-semibold mb-3">Gobierno</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-secondary mr-3"></div>
                      <span>Agencias de desarrollo económico</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-secondary mr-3"></div>
                      <span>Entidades de fomento a la innovación</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-secondary mr-3"></div>
                      <span>Gobiernos regionales</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-100">
                  <h4 className="text-xl font-semibold mb-3">Startups</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-secondary mr-3"></div>
                      <span>Emprendimientos en mineTech</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-secondary mr-3"></div>
                      <span>Soluciones en sostenibilidad</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-secondary mr-3"></div>
                      <span>Innovaciones en logística industrial</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-8 border border-secondary/10">
              <h3 className="text-2xl font-bold text-secondary mb-8">Formas de Participación</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Para Empresas</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <span className="font-semibold text-secondary">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Membresía Corporativa</p>
                        <p className="text-sm text-neutral-600">Acceso completo a instalaciones y programas con presencia permanente en el Hub</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <span className="font-semibold text-secondary">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Patrocinio de Programas</p>
                        <p className="text-sm text-neutral-600">Financiamiento de iniciativas específicas alineadas con los intereses de la empresa</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <span className="font-semibold text-secondary">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Laboratorio Corporativo</p>
                        <p className="text-sm text-neutral-600">Establecimiento de un espacio de I+D propio dentro del ecosistema del Hub</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4">Para Startups</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <span className="font-semibold text-secondary">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Programa de Aceleración</p>
                        <p className="text-sm text-neutral-600">Acceso a mentorías, financiamiento e infraestructura para validar y escalar soluciones</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <span className="font-semibold text-secondary">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Residencia</p>
                        <p className="text-sm text-neutral-600">Espacio de trabajo permanente dentro del Hub para startups en fase de crecimiento</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <span className="font-semibold text-secondary">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Desafíos de Innovación</p>
                        <p className="text-sm text-neutral-600">Participación en retos específicos planteados por empresas mineras y energéticas</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 h-auto text-lg font-semibold">
                  Solicitar Información de Participación
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="py-20 bg-neutral-800 text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white">Cronograma del Proyecto</h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto mt-4">
                Hitos clave en el desarrollo del Hub de Innovación
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20"></div>
              
              <div className="space-y-24 relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                    <h3 className="text-xl font-bold text-secondary">2025 Q3-Q4</h3>
                    <h4 className="text-lg font-semibold mb-2">Fase de Conceptualización</h4>
                    <p className="text-white/70">
                      Finalización del diseño conceptual y establecimiento de alianzas estratégicas clave con empresas mineras y tecnológicas.
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-secondary flex items-center justify-center z-10">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-secondary flex items-center justify-center z-10">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 md:text-left">
                    <h3 className="text-xl font-bold text-secondary">2026 Q1-Q2</h3>
                    <h4 className="text-lg font-semibold mb-2">Fase de Diseño y Planificación</h4>
                    <p className="text-white/70">
                      Desarrollo de planes arquitectónicos detallados, obtención de permisos y aprobaciones regulatorias, y aseguramiento de financiamiento.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                    <h3 className="text-xl font-bold text-secondary">2026 Q3-2027 Q4</h3>
                    <h4 className="text-lg font-semibold mb-2">Fase de Construcción</h4>
                    <p className="text-white/70">
                      Inicio de obras de construcción, desarrollo de infraestructura tecnológica avanzada e implementación de sistemas de energía renovable.
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-secondary flex items-center justify-center z-10">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-secondary flex items-center justify-center z-10">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 md:text-left">
                    <h3 className="text-xl font-bold text-secondary">2028 Q1</h3>
                    <h4 className="text-lg font-semibold mb-2">Inauguración</h4>
                    <p className="text-white/70">
                      Apertura oficial del Hub de Innovación y lanzamiento de los primeros programas de innovación abierta, aceleración y residencia.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                    <h3 className="text-xl font-bold text-secondary">2028 Q2 en adelante</h3>
                    <h4 className="text-lg font-semibold mb-2">Expansión y Desarrollo</h4>
                    <p className="text-white/70">
                      Incorporación de nuevos socios estratégicos, expansión de programas y desarrollo de iniciativas internacionales.
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-secondary flex items-center justify-center z-10">
                    <span className="font-bold">5</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-secondary to-secondary-dark text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="text-3xl font-bold mb-6">Sé parte de este proyecto transformador</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
              Únete a nosotros en la creación del primer hub de innovación especializado para la industria minera y energética del norte de Chile
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-secondary hover:bg-white/90 px-8 py-6 h-auto text-lg font-semibold">
                Solicitar Información
              </Button>
              <Link href="/">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 h-auto text-lg font-semibold">
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
};

export default HubInnovacion;