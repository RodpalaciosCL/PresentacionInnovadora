/**
 * CentroLogistico.tsx - Centro Logístico Baquedano
 * Detailed project information and investment opportunity
 */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { MapPin, ArrowLeft, Building, Truck, Train, DollarSign, TrendingUp, Calendar, Users, BarChart3, Download, Expand, Target, ChevronLeft, ChevronRight } from "lucide-react";
import { AccessModal } from "@/components/ui/AccessModal";
import { useTypewriter } from "@/hooks/useTypewriter";

const CentroLogistico = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [showAccessModal, setShowAccessModal] = useState(false);
  const [, setLocation] = useLocation();
  const { displayText: typewriterText } = useTypewriter({ 
    text: "Donde opera lo mejor de la minería global", 
    speed: 100 
  });

  useEffect(() => {
    // Check if user has access with expiration
    const storedAccess = localStorage.getItem('centro-logistico-access');
    const accessTimestamp = localStorage.getItem('centro-logistico-timestamp');
    
    if (storedAccess === '2026' && accessTimestamp) {
      const now = Date.now();
      const accessTime = parseInt(accessTimestamp);
      const sessionDuration = 30 * 60 * 1000; // 30 minutes in milliseconds
      
      if (now - accessTime < sessionDuration) {
        setHasAccess(true);
      } else {
        // Access expired, clear storage and show modal
        localStorage.removeItem('centro-logistico-access');
        localStorage.removeItem('centro-logistico-timestamp');
        setShowAccessModal(true);
      }
    } else {
      setShowAccessModal(true);
    }
  }, []);

  const handleAccessSuccess = () => {
    const timestamp = Date.now().toString();
    localStorage.setItem('centro-logistico-access', '2026');
    localStorage.setItem('centro-logistico-timestamp', timestamp);
    setHasAccess(true);
    setShowAccessModal(false);
  };

  const handleAccessClose = () => {
    setLocation('/opportunities');
  };

  if (!hasAccess) {
    return (
      <AccessModal
        isOpen={showAccessModal}
        onClose={handleAccessClose}
        onSuccess={handleAccessSuccess}
        title="Acceso al Centro Logístico"
        description="Ingresa la clave de acceso para ver información detallada del proyecto"
      />
    );
  }
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link href="/opportunities">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-8"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Volver a Oportunidades</span>
              </motion.button>
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Centro <span className="text-emerald-400">Logísticos</span>
              <br />
              <span className="text-3xl md:text-4xl text-slate-300">Estratégicos</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mb-8">
              Ubicaciones para desarrollar Centros de logística, acopio, parking, puerto seco y mucho más.
            </p>

            <div className="max-w-4xl space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                Disponemos de ubicaciones altamente estratégicas y muy demandadas, dado el alto flujo operacional minero y la dificultad de poder obtener predios, permisos y aprobaciones para operar en ellos.
              </p>
              
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <p className="text-slate-300 leading-relaxed">
                  Lo anterior, sumado a que todos tienen no sólo acceso vía carretera, sino también vía ferrocarril, lo cual le entrega un atributo extra, sin dejar de lado que el socio principal del proyecto es <span className="text-emerald-400 font-semibold">Ferronor</span>, una pieza clave para la validación del proyecto, la seriedad del mismo y el know how de la operación del negocio.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Mining Companies Carousel */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">Tenemos assets estratégicos</h2>
            <p className="text-lg text-emerald-400 max-w-3xl mx-auto">
              {typewriterText}
            </p>
          </motion.div>

          {/* Carousel */}
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: [0, -100 * 7] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex space-x-16 items-center"
            >
              {/* Duplicate logos for seamless loop */}
              {[...Array(2)].map((_, setIndex) => (
                <React.Fragment key={setIndex}>
                  <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                    <img 
                      src="https://ccm-eleva.cl/wp-content/uploads/2023/10/05-logo-Codelco.png" 
                      alt="Codelco" 
                      className="h-30 w-auto object-contain max-w-full"
                    />
                  </div>
                  <div className="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                    <img 
                      src="https://proveedorescomunitarios.cl/wp-content/uploads/2022/11/antofagasta_minerals-1024x891.png" 
                      alt="Antofagasta Minerals" 
                      className="h-18 w-auto object-contain max-w-full"
                    />
                  </div>
                  <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                    <img 
                      src="https://eligecrecer.cl/wp-content/uploads/2024/10/logo-teck.png" 
                      alt="Teck" 
                      className="h-14 w-auto object-contain max-w-full"
                    />
                  </div>
                  <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                    <img 
                      src="https://companieslogo.com/img/orig/AAL.L_BIG.D-7893f0b4.png?t=1720244490" 
                      alt="Anglo American" 
                      className="h-16 w-auto object-contain max-w-full"
                    />
                  </div>
                  <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                    <img 
                      src="https://content.bhp.com/inclusion-en/files/mobile-ext/appLogoIcon.png?200211062438" 
                      alt="BHP" 
                      className="h-10 w-auto object-contain max-w-full"
                    />
                  </div>
                  <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                    <img 
                      src="https://www.sgscm-hse-reporting.cl/Resources/Logo/logo_login.png" 
                      alt="Sierra Gorda" 
                      className="h-10 w-auto object-contain max-w-full"
                    />
                  </div>
                  <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                    <img 
                      src="https://companieslogo.com/img/orig/CS.TO_BIG.D-7b634d87.png?t=1720244491" 
                      alt="Capstone" 
                      className="h-10 w-auto object-contain max-w-full"
                    />
                  </div>
                  <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                    <img 
                      src="https://expandemineria.cl/wp-content/uploads/2021/11/logosinfondoSQM-300x157.png" 
                      alt="SQM" 
                      className="h-12 w-auto object-contain max-w-full"
                    />
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Main Stations */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Nuestras Estaciones Estratégicas</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Tres ubicaciones clave que definen el futuro de la logística minera en Chile
            </p>
          </motion.div>

          <div className="space-y-20">
            {/* Baquedano */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700"
            >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-emerald-400">Baquedano</h3>
                    <p className="text-lg text-slate-300">Epicentro Actual</p>
                  </div>
                </div>
                
                {/* Información del Proyecto */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg">
                    <Building className="w-8 h-8 text-emerald-400" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Superficie Total</h4>
                      <p className="text-slate-300">22 hectáreas iniciales, ampliable a 60 hectáreas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg">
                    <MapPin className="w-8 h-8 text-blue-400" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Ubicación</h4>
                      <p className="text-slate-300">Baquedano, Región de Antofagasta</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg">
                    <Train className="w-8 h-8 text-purple-400" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Acceso Ferroviario</h4>
                      <p className="text-slate-300">Conexión directa a la red ferroviaria nacional</p>
                    </div>
                  </div>
                </div>

                {/* Ubicación Estratégica */}
                <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600">
                  <h4 className="text-xl font-semibold text-white mb-4">Ubicación Estratégica</h4>
                  <div className="space-y-3 text-slate-300">
                    <p>• <strong className="text-emerald-400">Nodo logístico clave</strong> entre Antofagasta y Calama</p>
                    <p>• <strong className="text-emerald-400">Acceso directo</strong> a la red ferroviaria del norte</p>
                    <p>• <strong className="text-emerald-400">Proximidad</strong> a los principales puertos del norte</p>
                    <p>• <strong className="text-emerald-400">Conectividad</strong> con la red vial nacional</p>
                    <p>• <strong className="text-emerald-400">Centro de distribución</strong> para la industria minera</p>
                  </div>
                </div>
              </div>
                
                <div className="bg-slate-700/30 p-8 rounded-lg border border-slate-600">
                  <h4 className="text-xl font-semibold text-white mb-4">Mapa de Ubicación</h4>
                  <div className="w-full h-64 bg-slate-600 rounded-lg flex items-center justify-center">
                    <span className="text-slate-400">Mapa de Baquedano</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Escondida */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mr-4">
                      <Building className="w-8 h-8 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-blue-400">Escondida</h3>
                      <p className="text-lg text-slate-300">Estratégica por Excelencia</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300">Proximidad a la mina de cobre más grande del mundo</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300">Terminal de carga especializado</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300">Centro de distribución estratégico</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300">Servicios logísticos especializados</p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:order-1 bg-slate-700/30 p-8 rounded-lg border border-slate-600">
                  <h4 className="text-xl font-semibold text-white mb-4">Mapa de Ubicación</h4>
                  <div className="w-full h-64 bg-slate-600 rounded-lg flex items-center justify-center">
                    <span className="text-slate-400">Mapa de Escondida</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Anglo-Teck */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mr-4">
                      <Train className="w-8 h-8 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-purple-400">Anglo-Teck</h3>
                      <p className="text-lg text-slate-300">Epicentro Futuro</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300">Ubicación en Iquique para operaciones logísticas</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300">Puertos secos entre Puerto de Iquique y faenas mineras</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300">Conexión con Collahuasi y Quebrada Blanca</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300">Ruta estratégica de la minería chilena</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-700/30 p-8 rounded-lg border border-slate-600">
                  <h4 className="text-xl font-semibold text-white mb-4">Mapa de Ubicación</h4>
                  <div className="w-full h-64 bg-slate-600 rounded-lg flex items-center justify-center">
                    <span className="text-slate-400">Mapa de Anglo-Teck Iquique</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terrain Composition */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Composición del Terreno</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Terreno optimizado para desarrollo logístico con acceso directo a infraestructura ferroviaria
            </p>
          </motion.div>

          {/* Placeholder for terrain map */}
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
            <div className="h-64 bg-slate-700 rounded-lg flex items-center justify-center mb-6">
              <p className="text-slate-400">Mapa de composición del terreno</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Área Construible</h3>
                <p className="text-slate-300">85% del terreno</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Accesos Viales</h3>
                <p className="text-slate-300">Múltiples puntos de entrada</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Train className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Rieles</h3>
                <p className="text-slate-300">Acceso directo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Modelo de Negocio</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Arrendamiento de terrenos desde 5,000 m² con precios competitivos y términos flexibles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pricing Table */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-lg border border-slate-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Estructura de Precios</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-3 text-emerald-400 font-semibold">Concepto</th>
                      <th className="text-right py-3 text-emerald-400 font-semibold">Valor</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-700">
                      <td className="py-3">Valor UF</td>
                      <td className="text-right py-3 font-semibold">$39,200</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3">Precio por m²</td>
                      <td className="text-right py-3 font-semibold">0.06 UF</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3">m² Disponibles</td>
                      <td className="text-right py-3 font-semibold">200,000</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3">m² Mínimos</td>
                      <td className="text-right py-3 font-semibold">5,000</td>
                    </tr>
                    <tr>
                      <td className="py-3">Arriendo Mínimo</td>
                      <td className="text-right py-3 font-semibold">6 meses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-emerald-400/10 border border-emerald-400/20 rounded-lg">
                <p className="text-emerald-400 font-semibold">
                  Precio por m²: $2,352 CLP/mes
                </p>
                <p className="text-sm text-slate-400">
                  Basado en UF $39,200
                </p>
              </div>
            </motion.div>

            {/* Investment Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-lg border border-slate-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Inversión Requerida</h3>
              <p className="text-3xl font-bold text-emerald-400 mb-6">$1.7M USD</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Permisos</span>
                  <span className="font-semibold text-white">15%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Construcción</span>
                  <span className="font-semibold text-white">35%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Operación</span>
                  <span className="font-semibold text-white">25%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Marketing</span>
                  <span className="font-semibold text-white">10%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Desarrollo TI</span>
                  <span className="font-semibold text-white">8%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Sueldos</span>
                  <span className="font-semibold text-white">7%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expansion Potential */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Potencial de Expansión</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Baquedano es el primer paso hacia una red logística integral en el norte de Chile
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-lg border border-slate-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Fases de Desarrollo</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-900 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">Fase 1: Baquedano</h4>
                    <p className="text-slate-300 text-sm">22 hectáreas - Centro logístico multimodal</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-900 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Fase 2: Expansión</h4>
                    <p className="text-slate-300 text-sm">60 hectáreas - Ampliación del centro logístico</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-900 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Fase 3: Red</h4>
                    <p className="text-slate-300 text-sm">30+ estaciones - Red logística integral</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-lg border border-slate-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Mercado Objetivo</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Industria Minera</span>
                  <span className="font-semibold text-emerald-400">$50B+</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Logística Industrial</span>
                  <span className="font-semibold text-blue-400">$15B+</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Servicios Corporativos</span>
                  <span className="font-semibold text-purple-400">$8B+</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Tecnología Minera</span>
                  <span className="font-semibold text-yellow-400">$3B+</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-emerald-400/10 border border-emerald-400/20 rounded-lg">
                <p className="text-emerald-400 font-semibold text-center">
                  Total de Mercado: $76B+ USD
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Oportunidad de Inversión</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Proyecciones financieras atractivas con retornos consistentes y crecimiento sostenible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 text-center"
            >
              <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-2">ROI Proyectado</h3>
              <p className="text-4xl font-bold text-white mb-2">24%</p>
              <p className="text-slate-400">anual</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 text-center"
            >
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Payback Period</h3>
              <p className="text-4xl font-bold text-white mb-2">4.2</p>
              <p className="text-slate-400">años</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 text-center"
            >
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-purple-400 mb-2">Revenue Anual</h3>
              <p className="text-4xl font-bold text-white mb-2">$2.8M</p>
              <p className="text-slate-400">USD (año 3)</p>
            </motion.div>
          </div>

          {/* What we're looking for */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">¿Qué Buscamos?</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full"></div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Investor */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-7 rounded-xl border border-slate-600/50 backdrop-blur-sm shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-semibold text-emerald-400">Inversionista</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-3 bg-slate-700/30 rounded-md border-l-2 border-emerald-400 hover:bg-slate-700/50 transition-all duration-300">
                      <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-slate-200 font-medium text-base">Capital para desarrollo inicial</p>
                    </div>
                    <div className="flex items-start space-x-4 p-3 bg-slate-700/30 rounded-md border-l-2 border-emerald-400 hover:bg-slate-700/50 transition-all duration-300">
                      <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-slate-200 font-medium text-base">Experiencia en desarrollo logístico</p>
                    </div>
                    <div className="flex items-start space-x-4 p-3 bg-slate-700/30 rounded-md border-l-2 border-emerald-400 hover:bg-slate-700/50 transition-all duration-300">
                      <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-slate-200 font-medium text-base">Red de contactos en la industria</p>
                    </div>
                    <div className="flex items-start space-x-4 p-3 bg-slate-700/30 rounded-md border-l-2 border-emerald-400 hover:bg-slate-700/50 transition-all duration-300">
                      <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-slate-200 font-medium text-base">Visión a largo plazo</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-7 rounded-xl border border-slate-600/50 backdrop-blur-sm shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-semibold text-blue-400">Beneficios y Expansión</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-3.5 bg-slate-700/20 rounded-md hover:bg-slate-700/40 transition-all duration-300 group">
                      <div className="w-2.5 h-2.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                      <p className="text-slate-200 text-base">
                        <span className="text-blue-400 font-semibold">Participación en ingresos recurrentes</span>
                      </p>
                    </div>
                    <div className="flex items-start space-x-4 p-3.5 bg-slate-700/20 rounded-md hover:bg-slate-700/40 transition-all duration-300 group">
                      <div className="w-2.5 h-2.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                      <p className="text-slate-200 text-base">
                        <span className="text-blue-400 font-semibold">Valorización del activo</span> a largo plazo
                      </p>
                    </div>
                    <div className="flex items-start space-x-4 p-3.5 bg-slate-700/20 rounded-md hover:bg-slate-700/40 transition-all duration-300 group">
                      <div className="w-2.5 h-2.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                      <p className="text-slate-200 text-base">
                        <span className="text-blue-400 font-semibold">Diversificación de portafolio</span>
                      </p>
                    </div>
                    <div className="flex items-start space-x-4 p-3.5 bg-slate-700/20 rounded-md hover:bg-slate-700/40 transition-all duration-300 group">
                      <div className="w-2.5 h-2.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                      <p className="text-slate-200 text-base">
                        <span className="text-blue-400 font-semibold">Acceso a mercado minero</span> de $50B+
                      </p>
                    </div>
                    <div className="flex items-start space-x-4 p-3.5 bg-slate-700/20 rounded-md hover:bg-slate-700/40 transition-all duration-300 group">
                      <div className="w-2.5 h-2.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                      <p className="text-slate-200 text-base">
                        <span className="text-blue-400 font-semibold">Expansión a 60 hectáreas</span> en fase 2
                      </p>
                    </div>
                    <div className="flex items-start space-x-4 p-3.5 bg-slate-700/20 rounded-md hover:bg-slate-700/40 transition-all duration-300 group">
                      <div className="w-2.5 h-2.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                      <p className="text-slate-200 text-base">
                        <span className="text-blue-400 font-semibold">Réplica en 30+ estaciones</span> estratégicas
                      </p>
                    </div>
                    <div className="flex items-start space-x-4 p-3.5 bg-slate-700/20 rounded-md hover:bg-slate-700/40 transition-all duration-300 group">
                      <div className="w-2.5 h-2.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                      <p className="text-slate-200 text-base">
                        <span className="text-blue-400 font-semibold">Sinergias con red ferroviaria</span> de 1,200 km
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12 space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Solicitar Información Detallada
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Simulate download
                  const link = document.createElement('a');
                  link.href = '#'; // In a real app, this would be the PDF URL
                  link.download = 'Business-Case-Centro-Logistico-Baquedano.pdf';
                  link.click();
                }}
                className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Descargar Business Case</span>
              </motion.button>
            </div>
            
            <p className="text-sm text-slate-400 max-w-2xl mx-auto">
              El business case incluye análisis financiero detallado, proyecciones de mercado, 
              estudios de viabilidad y estrategias de implementación para el Centro Logístico Baquedano.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CentroLogistico;
