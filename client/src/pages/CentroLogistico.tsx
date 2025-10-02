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
import { FlujoCajaCLShowcase } from "@/components/financial/FlujoCajaCLShowcase";

const CentroLogistico = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
        // Access is valid
        setHasAccess(true);
        setIsLoading(false);
        return; // Exit early to prevent showing modal
      } else {
        // Access expired, clear storage
        localStorage.removeItem('centro-logistico-access');
        localStorage.removeItem('centro-logistico-timestamp');
      }
    }
    
    // If we get here, either no access or access expired
    setHasAccess(false);
    setIsLoading(false);
  }, []);

  const handleAccessSuccess = () => {
    const timestamp = Date.now().toString();
    localStorage.setItem('centro-logistico-access', '2026');
    localStorage.setItem('centro-logistico-timestamp', timestamp);
    setHasAccess(true);
  };

  const handleAccessClose = () => {
    setLocation('/opportunities');
  };

  // Show loading while checking access
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-lg">Cargando...</div>
      </div>
    );
  }

  // Show access modal if no access
  if (!hasAccess) {
    return (
      <AccessModal
        isOpen={true}
        onClose={handleAccessClose}
        onSuccess={handleAccessSuccess}
        title="Acceso al Centro Logístico"
        description="Ingresa la clave de acceso para ver información detallada del proyecto"
      />
    );
  }
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23334155%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
          
          {/* Floating Elements */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-emerald-400/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-40 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 3, 0]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute bottom-40 left-1/4 w-16 h-16 bg-purple-400/10 rounded-full blur-xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <Link href="/opportunities">
              <motion.button
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-all duration-300 mb-6 group"
              >
                <motion.div
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowLeft className="w-5 h-5" />
                </motion.div>
                <span className="font-medium">Volver a Oportunidades</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Title and Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Main Title */}
              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-6xl md:text-7xl font-black text-white leading-tight"
                >
                  Centros{' '}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500">
                      Logísticos
                    </span>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                    />
                  </span>
                </motion.h1>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-3xl md:text-4xl font-bold text-slate-300"
                >
                  Estratégicos
                </motion.h2>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="space-y-6"
              >
                <p className="text-xl text-slate-300 leading-relaxed font-medium">
                  Ubicaciones para desarrollar Centros de logística, acopio, parking, puerto seco y mucho más.
                </p>
                
                <p className="text-lg text-slate-400 leading-relaxed">
                  Disponemos de ubicaciones altamente estratégicas y muy demandadas, dado el alto flujo operacional minero y la dificultad de poder obtener predios, permisos y aprobaciones para operar en ellos.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-6"
            >
              {/* Main Feature Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-emerald-400/20 p-6 rounded-2xl hover:border-emerald-400/40 transition-all duration-500 shadow-2xl">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                      <Train className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Alianza Estratégica</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    <span className="text-emerald-400 font-semibold">Ferronor</span> como socio principal del proyecto, una pieza clave para la validación del proyecto, la seriedad del mismo y el know how de la operación del negocio.
                  </p>
                </div>
              </motion.div>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 p-4 rounded-xl hover:border-blue-400/40 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400/30 to-blue-500/30 rounded-lg flex items-center justify-center mb-3">
                      <MapPin className="w-4 h-4 text-blue-400" />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">Acceso Dual</h4>
                    <p className="text-slate-400 text-xs">Carretera + Ferrocarril</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-purple-400/20 p-4 rounded-xl hover:border-purple-400/40 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400/30 to-purple-500/30 rounded-lg flex items-center justify-center mb-3">
                      <Building className="w-4 h-4 text-purple-400" />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">Factibilidad Operativa</h4>
                    <p className="text-slate-400 text-xs">Aprobado</p>
                  </div>
                </motion.div>
              </div>

              {/* Additional Feature Cards */}
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 p-4 rounded-xl hover:border-emerald-400/40 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-400/30 to-emerald-500/30 rounded-lg flex items-center justify-center mb-3">
                      <Target className="w-4 h-4 text-emerald-400" />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">Ubicaciones Estratégicas</h4>
                    <p className="text-slate-400 text-xs">Epicentros Mineros</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-orange-400/20 p-4 rounded-xl hover:border-orange-400/40 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400/30 to-orange-500/30 rounded-lg flex items-center justify-center mb-3">
                      <TrendingUp className="w-4 h-4 text-orange-400" />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">Escalabilidad</h4>
                    <p className="text-slate-400 text-xs">Ecosistema Cruzado</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

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
            <h2 className="text-3xl font-bold text-white mb-3">Tenemos Assets Únicos!</h2>
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

      {/* Flujo de Caja Centro Logístico */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FlujoCajaCLShowcase />
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
            <h2 className="text-4xl font-bold text-white mb-6">Nuestras Estaciones</h2>
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
            {/* Header amplio de la estación */}
            <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center mr-5">
                    <Target className="w-8 h-8 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-emerald-400 mb-1">Baquedano</h3>
                    <p className="text-lg text-slate-300">Epicentro Actual</p>
                  </div>
                </div>
                
                {/* Estadísticas en el header */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="text-center p-3 bg-slate-600/20 rounded-lg border border-slate-500/30">
                  <div className="text-xl md:text-2xl font-bold text-emerald-400 mb-1">22-60</div>
                  <div className="text-xs text-slate-300 font-medium">Hectáreas</div>
                </div>
                <div className="text-center p-3 bg-slate-600/20 rounded-lg border border-slate-500/30">
                  <div className="text-xl md:text-2xl font-bold text-emerald-400 mb-1">16</div>
                  <div className="text-xs text-slate-300 font-medium">Mineras</div>
                </div>
                <div className="text-center p-3 bg-slate-600/20 rounded-lg border border-slate-500/30">
                  <div className="text-xl md:text-2xl font-bold text-emerald-400 mb-1">2</div>
                  <div className="text-xs text-slate-300 font-medium">Accesos</div>
                </div>
                <div className="text-center p-3 bg-slate-600/20 rounded-lg border border-slate-500/30">
                  <div className="text-xl md:text-2xl font-bold text-emerald-400 mb-1">100%</div>
                  <div className="text-xs text-slate-300 font-medium">Operativo</div>
                </div>
              </div>
              </div>
            </div>

            {/* Información básica - 3 cards horizontales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
              <div className="flex items-center space-x-3 p-5 bg-slate-700/50 rounded-lg">
                <Building className="w-8 h-8 text-emerald-400" />
                <div>
                  <h4 className="text-base font-semibold text-white">Superficie Total</h4>
                  <p className="text-slate-300 text-sm">22 hectáreas iniciales, ampliable a 60 hectáreas</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-5 bg-slate-700/50 rounded-lg">
                <MapPin className="w-8 h-8 text-emerald-400" />
                <div>
                  <h4 className="text-base font-semibold text-white">Ubicación</h4>
                  <p className="text-slate-300 text-sm">Baquedano, Región de Antofagasta</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-5 bg-slate-700/50 rounded-lg">
                <Train className="w-8 h-8 text-emerald-400" />
                <div>
                  <h4 className="text-base font-semibold text-white">Acceso Ferroviario</h4>
                  <p className="text-slate-300 text-sm">Conexión directa a la red de Ferronor</p>
                </div>
              </div>
            </div>

            {/* Mapa principal - más prominente */}
            <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Mapa de Ubicación</h4>
                  <p className="text-emerald-400 text-base font-medium">📍 Estación Baquedano</p>
                </div>
              </div>
              <div className="w-full h-80 rounded-lg overflow-hidden border border-slate-600">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16237.640266912316!2d-69.85061943875016!3d-23.334386186420744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ae5ac5197f02fb%3A0xab725243e9e8aff7!2sMunicipalidad%20Estaci%C3%B3n%20Baquedano!5e1!3m2!1ses-419!2scl!4v1758649714942!5m2!1ses-419!2scl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Estación Baquedano - Centro Logístico"
                />
              </div>
            </div>

            {/* Sección inferior - 3 secciones horizontales */}
            <div className="space-y-6">
              
              {/* Ubicación Estratégica */}
              <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600">
                <h4 className="text-xl font-semibold text-white mb-4">Ubicación Estratégica</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm"><strong className="text-emerald-400">Nodo logístico clave</strong> entre Antofagasta y Calama</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm"><strong className="text-emerald-400">Confluye la mayor cantidad</strong> de mineras de Chile</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm"><strong className="text-emerald-400">Proximidad</strong> a los principales puertos del norte</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm"><strong className="text-emerald-400">Alto flujo</strong> de contratistas y terceros</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm"><strong className="text-emerald-400">Ubicación en ruta minera</strong></p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm"><strong className="text-emerald-400">Próximo a Sierra Gorda</strong></p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm"><strong className="text-emerald-400">A 12kms de 2 Estaciones nuestras</strong> (extra)</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm"><strong className="text-emerald-400">Codelco-Freeport</strong> universo 10 mil millones de dólares</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mineras que Operan */}
              <div className="bg-slate-700/30 p-5 rounded-lg border border-slate-600">
                <h4 className="text-lg font-semibold text-white mb-3">Mineras que Operan</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">Codelco Chuquicamata</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">Codelco Ministro Hales</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">Codelco Radomiro Tomic</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">Codelco Gabriela Mistral</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">Sierra Gorda SCM</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">Antofagasta Minerals Centinela</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">BHP Spence</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">BHP Escondida</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">Capstone</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">SQM</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">Albemarle</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">Glencore Alto Norte</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">Codelco Freeport (*)</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">AMSA Antucoya</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">BHP Cerro Colorado</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">Minera Zaldivar</span>
                  </div>
                </div>
              </div>

              {/* Noticia destacada */}
              <div className="bg-slate-700/30 p-5 rounded-lg border border-slate-600">
                <h4 className="text-lg font-semibold text-white mb-3">Noticia Destacada</h4>
                
                {/* Imagen principal */}
                <div className="mb-3">
                  <img 
                    src="https://gerens.pe/blog/wp-content/uploads/2017/10/gestion-logistica-minera.jpg"
                    alt="Gestión logística minera"
                    className="h-40 object-contain"
                  />
                </div>

                {/* Contenido de la noticia */}
                <div className="space-y-2">
                  <h5 className="text-base font-bold text-white leading-tight">
                    Minería lidera crecimiento de PIB regional en 2024 con Antofagasta a la cabeza
                  </h5>
                  
                  <div className="pt-1">
                    <a 
                      href="https://mundomineria.cl/2025/04/23/mineria-lidera-crecimiento-de-pib-regional-en-2024-con-antofagasta-a-la-cabeza/?utm_source=chatgpt.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-emerald-400 text-slate-900 px-3 py-2 rounded-lg font-semibold text-xs hover:bg-emerald-300 transition-all duration-300"
                    >
                      Leer artículo completo
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Ver detalle de inversión */}
              <div className="text-center pt-6">
                <button className="inline-flex items-center bg-slate-600 hover:bg-slate-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Ver detalle de inversión
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
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
            {/* Header amplio de la estación */}
            <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center mr-5">
                    <Target className="w-8 h-8 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-emerald-400 mb-1">Escondida</h3>
                    <p className="text-lg text-slate-300">Estación Imilac</p>
                  </div>
                </div>
                
                {/* Estadísticas en el header */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  <div className="text-center p-3 bg-slate-600/20 rounded-lg border border-slate-500/30">
                    <div className="text-xl md:text-2xl font-bold text-emerald-400 mb-1">15-45</div>
                    <div className="text-xs text-slate-300 font-medium">Hectáreas</div>
                  </div>
                  <div className="text-center p-3 bg-slate-600/20 rounded-lg border border-slate-500/30">
                    <div className="text-xl md:text-2xl font-bold text-emerald-400 mb-1">3</div>
                    <div className="text-xs text-slate-300 font-medium">Mineras</div>
                  </div>
                  <div className="text-center p-3 bg-slate-600/20 rounded-lg border border-slate-500/30">
                    <div className="text-xl md:text-2xl font-bold text-emerald-400 mb-1">2</div>
                    <div className="text-xs text-slate-300 font-medium">Accesos</div>
                  </div>
                  <div className="text-center p-3 bg-slate-600/20 rounded-lg border border-slate-500/30">
                    <div className="text-xl md:text-2xl font-bold text-emerald-400 mb-1">100%</div>
                    <div className="text-xs text-slate-300 font-medium">Operativo</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Información básica - 3 cards horizontales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
              <div className="flex items-center space-x-3 p-5 bg-slate-700/50 rounded-lg">
                <Building className="w-8 h-8 text-emerald-400" />
                <div>
                  <h4 className="text-base font-semibold text-white">Superficie Total</h4>
                  <p className="text-slate-300 text-sm">15 hectáreas iniciales, ampliable a 45 hectáreas</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-5 bg-slate-700/50 rounded-lg">
                <MapPin className="w-8 h-8 text-emerald-400" />
                <div>
                  <h4 className="text-base font-semibold text-white">Ubicación</h4>
                  <p className="text-slate-300 text-sm">Imilac, Región de Antofagasta</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-5 bg-slate-700/50 rounded-lg">
                <Train className="w-8 h-8 text-emerald-400" />
                <div>
                  <h4 className="text-base font-semibold text-white">Acceso Ferroviario</h4>
                  <p className="text-slate-300 text-sm">Conexión directa a la red de Ferronor</p>
                </div>
              </div>
            </div>

            {/* Mapa principal - más prominente */}
            <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Mapa de Ubicación</h4>
                  <p className="text-emerald-400 text-base font-medium">📍 Estación Imilac</p>
                </div>
              </div>
              <div className="w-full h-80 rounded-lg overflow-hidden border border-slate-600">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129010.09680777308!2d-69.02717546272761!3d-24.22926827692446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a600b19a229733%3A0x3e6061ff01b19a75!2sImilac%2C%20Antofagasta!5e1!3m2!1ses-419!2scl!4v1758649034040!5m2!1ses-419!2scl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Estación Imilac - Centro Logístico"
                />
              </div>
            </div>

            {/* Sección inferior - 3 secciones horizontales */}
            <div className="space-y-6">
              
              {/* Ubicación Estratégica */}
              <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600">
                <h4 className="text-xl font-semibold text-white mb-4">Ubicación Estratégica</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm"><strong className="text-emerald-400">A 10km de la mina de cobre más grande del mundo</strong></p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm"><strong className="text-emerald-400">Ruta Exclusiva para Minera Escondida</strong></p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm"><strong className="text-emerald-400">Universo de 17 mil millones de dólares</strong></p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm"><strong className="text-emerald-400">Viabilidad acople Ferroviario (actual)</strong></p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm"><strong className="text-emerald-400">Únicos con capacidad operativa en esta ruta</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mineras que Operan */}
              <div className="bg-slate-700/30 p-5 rounded-lg border border-slate-600">
                <h4 className="text-lg font-semibold text-white mb-3">Mineras que Operan</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">BHP Escondida</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">Antofagasta Minerals</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">Minera Zaldivar</span>
                  </div>
                </div>
              </div>

              {/* Noticia destacada */}
              <div className="bg-slate-700/30 p-5 rounded-lg border border-slate-600">
                <h4 className="text-lg font-semibold text-white mb-3">Noticia Destacada</h4>
                
                {/* Imagen principal */}
                <div className="mb-3">
                  <img 
                    src="https://www.bhp.com/es/-/media/project/bhp1ip/bhp-com-en/images/_secondary-banner/2021/210628_escondidapit.jpg?w=1920&hash=00253F71FFA9D50DA66500B0D7A010C6"
                    alt="BHP Escondida mina de cobre"
                    className="h-40 object-contain"
                  />
                </div>

                {/* Contenido de la noticia */}
                <div className="space-y-2">
                  <h5 className="text-base font-bold text-white leading-tight">
                    BHP anuncia histórica inversión en Chile: US$13.700 millones para Pampa Norte y Escondida
                  </h5>
                  
                  <div className="pt-1">
                    <a 
                      href="https://www.elmostrador.cl/mercados/2024/11/19/bhp-anuncia-historica-inversion-en-chile-us13-700-millones-para-pampa-norte-y-escondida/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-emerald-400 text-slate-900 px-3 py-2 rounded-lg font-semibold text-xs hover:bg-emerald-300 transition-all duration-300"
                    >
                      Leer artículo completo
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

              {/* Ver detalle de inversión */}
              <div className="text-center pt-6">
                <button className="inline-flex items-center bg-slate-600 hover:bg-slate-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Ver detalle de inversión
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
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
            {/* Header amplio de la estación */}
            <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center mr-5">
                    <Target className="w-8 h-8 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-emerald-400 mb-1">Anglo-Teck</h3>
                    <p className="text-lg text-slate-300">Estación Pintados</p>
                  </div>
                </div>
                
                {/* Estadísticas en el header */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  <div className="text-center p-3 bg-slate-600/20 rounded-lg border border-slate-500/30">
                    <div className="text-xl md:text-2xl font-bold text-emerald-400 mb-1">20-60</div>
                    <div className="text-xs text-slate-300 font-medium">Hectáreas</div>
                  </div>
                  <div className="text-center p-3 bg-slate-600/20 rounded-lg border border-slate-500/30">
                    <div className="text-xl md:text-2xl font-bold text-emerald-400 mb-1">1</div>
                    <div className="text-xs text-slate-300 font-medium">Minera</div>
                  </div>
                  <div className="text-center p-3 bg-slate-600/20 rounded-lg border border-slate-500/30">
                    <div className="text-xl md:text-2xl font-bold text-emerald-400 mb-1">2</div>
                    <div className="text-xs text-slate-300 font-medium">Accesos</div>
                  </div>
                  <div className="text-center p-3 bg-slate-600/20 rounded-lg border border-slate-500/30">
                    <div className="text-xl md:text-2xl font-bold text-emerald-400 mb-1">100%</div>
                    <div className="text-xs text-slate-300 font-medium">Operativo</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Información básica - 3 cards horizontales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
              <div className="flex items-center space-x-3 p-5 bg-slate-700/50 rounded-lg">
                <Building className="w-8 h-8 text-emerald-400" />
                <div>
                  <h4 className="text-base font-semibold text-white">Superficie Total</h4>
                  <p className="text-slate-300 text-sm">20 hectáreas iniciales, ampliable a 60 hectáreas</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-5 bg-slate-700/50 rounded-lg">
                <MapPin className="w-8 h-8 text-emerald-400" />
                <div>
                  <h4 className="text-base font-semibold text-white">Ubicación</h4>
                  <p className="text-slate-300 text-sm">Pintados, Región de Tarapacá</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-5 bg-slate-700/50 rounded-lg">
                <Train className="w-8 h-8 text-emerald-400" />
                <div>
                  <h4 className="text-base font-semibold text-white">Acceso Ferroviario</h4>
                  <p className="text-slate-300 text-sm">Conexión directa a la red de Ferronor</p>
                </div>
              </div>
            </div>

            {/* Mapa principal - más prominente */}
            <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Mapa de Ubicación</h4>
                  <p className="text-emerald-400 text-base font-medium">📍 Estación Pintados</p>
                </div>
              </div>
              <div className="w-full h-80 rounded-lg overflow-hidden border border-slate-600">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66210.4720490293!2d-69.65975109148984!3d-20.60639764358868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9153006ddbc9fc87%3A0xcaf87e58f916e5a!2sPintados%2C%20Pozo%20Almonte%2C%20Tarapac%C3%A1!5e1!3m2!1ses-419!2scl!4v1758648983058!5m2!1ses-419!2scl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Estación Pintados - Centro Logístico"
                />
              </div>
            </div>

            {/* Sección inferior - 3 secciones horizontales */}
            <div className="space-y-6">
              
              {/* Ubicación Estratégica */}
              <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600">
                <h4 className="text-xl font-semibold text-white mb-4">Ubicación Estratégica</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm"><strong className="text-emerald-400">Ubicación única en nuevo nodo mundial</strong></p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm"><strong className="text-emerald-400">Ubicación estratégica ruta minera y 5 norte</strong></p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm"><strong className="text-emerald-400">Hub en medio del trayecto a puerto-mina</strong></p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm"><strong className="text-emerald-400">Muy baja presencia de competencia</strong></p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm"><strong className="text-emerald-400">Universo de 20 mil millones de dólares</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mineras que Operan */}
              <div className="bg-slate-700/30 p-5 rounded-lg border border-slate-600">
                <h4 className="text-lg font-semibold text-white mb-3">Mineras que Operan</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">Angloamerican Collahuasi</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">Glencore Collahuasi</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">Teck Quebrada Blanca</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-slate-600/30 rounded-lg border border-slate-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">Nuevo AngloTeck</span>
                  </div>
                </div>
              </div>

              {/* Noticia destacada */}
              <div className="bg-slate-700/30 p-5 rounded-lg border border-slate-600">
                <h4 className="text-lg font-semibold text-white mb-3">Noticia Destacada</h4>
                
                {/* Imagen principal */}
                <div className="mb-3">
                  <img 
                    src="https://pub-219f6331c6cb413294f3adaedca405df.r2.dev/Captura%20de%20pantalla%202025-09-23%20a%20la(s)%2015.10.16.png"
                    alt="Anglo Teck fusión minera"
                    className="h-40 object-contain"
                  />
                </div>

                {/* Contenido de la noticia */}
                <div className="space-y-2">
                  <h5 className="text-base font-bold text-white leading-tight">
                    Anglo Teck, Los ojos del mundo en la segunda mayor fusión minera de la historia
                  </h5>
                  
                  <div className="pt-1">
                    <a 
                      href="https://www.df.cl/empresas/mineria/anglo-teck-la-segunda-mayor-fusion-minera-de-la-historia-que-ubica-a-chile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-emerald-400 text-slate-900 px-3 py-2 rounded-lg font-semibold text-xs hover:bg-emerald-300 transition-all duration-300"
                    >
                      Leer artículo completo
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

              {/* Ver detalle de inversión */}
              <div className="text-center pt-6">
                <button className="inline-flex items-center bg-slate-600 hover:bg-slate-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Ver detalle de inversión
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terrain Composition */}
      <section className="py-16 bg-slate-900 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Composición de Terrenos y Posibilidades - ACTUALIZADO</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Terrenos estratégicamente ubicados con máxima factibilidad para desarrollo logístico
            </p>
          </motion.div>

          {/* Compact Layout */}
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            
            {/* Terrain Stats - Horizontal Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Composición de Terrenos</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-slate-700/30 rounded-xl border border-slate-600">
                  <Building className="w-10 h-10 text-white mx-auto mb-3" />
                  <div className="text-emerald-400 font-bold text-2xl mb-1">100%</div>
                  <div className="text-slate-300 text-base">Área Construible</div>
                </div>
                <div className="text-center p-6 bg-slate-700/30 rounded-xl border border-slate-600">
                  <Truck className="w-10 h-10 text-white mx-auto mb-3" />
                  <div className="text-emerald-400 font-bold text-2xl mb-1">Todos</div>
                  <div className="text-slate-300 text-base">Accesos Viales</div>
                </div>
                <div className="text-center p-6 bg-slate-700/30 rounded-xl border border-slate-600">
                  <svg className="w-10 h-10 text-white mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <div className="text-emerald-400 font-bold text-2xl mb-1">100%</div>
                  <div className="text-slate-300 text-base">Luz y Agua</div>
                </div>
                <div className="text-center p-6 bg-slate-700/30 rounded-xl border border-slate-600">
                  <svg className="w-10 h-10 text-white mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-emerald-400 font-bold text-2xl mb-1">Todos</div>
                  <div className="text-slate-300 text-base">Permisología</div>
                </div>
              </div>
            </motion.div>

            {/* Possibilities - Grid with Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Posibilidades de Desarrollo</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-slate-700/40 border border-slate-600 hover:border-white/20 transition-all duration-300">
                  <Building className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-slate-200 text-sm font-medium">Centros de acopio</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-slate-700/40 border border-slate-600 hover:border-white/20 transition-all duration-300">
                  <Truck className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-slate-200 text-sm font-medium">Parking de maquinaria</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-slate-700/40 border border-slate-600 hover:border-white/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span className="text-slate-200 text-sm font-medium">Puertos secos</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-slate-700/40 border border-slate-600 hover:border-white/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-slate-200 text-sm font-medium">Abastecimiento eléctrico</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-slate-700/40 border border-slate-600 hover:border-white/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-slate-200 text-sm font-medium">Almacenamiento de baterías</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-slate-700/40 border border-slate-600 hover:border-white/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="text-slate-200 text-sm font-medium">Hub de gestión operacional</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-slate-700/40 border border-slate-600 hover:border-white/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span className="text-slate-200 text-sm font-medium">Manejo de residuos</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-slate-700/40 border border-slate-600 hover:border-white/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-slate-200 text-sm font-medium">Cowork</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-slate-700/40 border border-slate-600 hover:border-white/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  </svg>
                  <span className="text-slate-200 text-sm font-medium">Hotelería</span>
                </div>
              </div>
            </motion.div>
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

            {/* High Level Case */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-lg border border-slate-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Revenue proyectado</h3>
              <p className="text-slate-300 mb-6">Revenue proyectado según estructura de precios utilizada</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                  <div>
                    <span className="text-slate-300 font-medium">50% Ocupación</span>
                    <p className="text-sm text-slate-400">100,000 m² arrendados</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-400 text-lg">$235,200,000</span>
                    <p className="text-sm text-slate-400">millones CLP/mes</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-emerald-400/10 rounded-lg border border-emerald-400/30">
                  <div>
                    <span className="text-emerald-400 font-bold">80% Ocupación</span>
                    <p className="text-sm text-slate-300">160,000 m² arrendados</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-400 text-xl">$376,320,000</span>
                    <p className="text-sm text-slate-300">millones CLP/mes</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                  <div>
                    <span className="text-slate-300 font-medium">100% Ocupación</span>
                    <p className="text-sm text-slate-400">200,000 m² arrendados</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-white text-lg">$470,400,000</span>
                    <p className="text-sm text-slate-400">millones CLP/mes</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-slate-700/40 rounded-lg">
                <p className="text-sm text-slate-400 text-center">
                  Basado en $2,352 CLP/m²/mes • UF $39,200
                </p>
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
              La oportunidad de inversión puede ser por fase, por todo o por parte
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
                    <h4 className="text-lg font-semibold text-emerald-400 mb-3">Fase 1: Primer Asset</h4>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-slate-300 text-sm">Construcción</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-slate-300 text-sm">Ocupación</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-slate-300 text-sm">Información</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-900 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Fase 2: Segundo Asset</h4>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span className="text-slate-300 text-sm">Expansión</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span className="text-slate-300 text-sm">Re distribución</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span className="text-slate-300 text-sm">Consolidación</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-900 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Fase 3: Tercer Asset</h4>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-slate-300 text-sm">Masificación multi zonas</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-slate-300 text-sm">Diversificación de actividades</span>
                      </div>
                    </div>
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

      {/* What we're looking for */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <h3 className="text-4xl font-bold text-white mb-6">¿Qué Buscamos?</h3>
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
                      <p className="text-slate-200 font-medium text-base">Experiencia en logística y/o minería</p>
                    </div>
                    <div className="flex items-start space-x-4 p-3 bg-slate-700/30 rounded-md border-l-2 border-emerald-400 hover:bg-slate-700/50 transition-all duration-300">
                      <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-slate-200 font-medium text-base">Visión a largo plazo y capacidad expansiva</p>
                    </div>
                    <div className="flex items-start space-x-4 p-3 bg-slate-700/30 rounded-md border-l-2 border-emerald-400 hover:bg-slate-700/50 transition-all duration-300">
                      <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-slate-200 font-medium text-base">Apoyo estratégico y estructura</p>
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
                        <span className="text-blue-400 font-semibold">Negocio en una de las industrias</span> más relevantes del mundo
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
                        <span className="text-blue-400 font-semibold">Interacción y relación directa</span> con mineras y proveedores clave
                      </p>
                    </div>
                    <div className="flex items-start space-x-4 p-3.5 bg-slate-700/20 rounded-md hover:bg-slate-700/40 transition-all duration-300 group">
                      <div className="w-2.5 h-2.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                      <p className="text-slate-200 text-base">
                        <span className="text-blue-400 font-semibold">Diversificación y expansión real</span> del negocio
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
            className="text-center mt-40 mb-20 space-y-6"
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
