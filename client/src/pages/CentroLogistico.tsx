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

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-emerald-400 rounded-full mt-2"
              />
            </motion.div>
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
                    <p>• <strong className="text-emerald-400">Confluye la mayor cantidad</strong> de mineras de Chile</p>
                    <p>• <strong className="text-emerald-400">Proximidad</strong> a los principales puertos del norte</p>
                    <p>• <strong className="text-emerald-400">Alto flujo</strong> de contratistas y terceros</p>
                    <p>• <strong className="text-emerald-400">Ubicación en ruta minera</strong></p>
                    <p>• <strong className="text-emerald-400">Próximo a Sierra Gorda</strong></p>
                    <p>• <strong className="text-emerald-400">A 12kms de 2 Estaciones nuestras</strong> (extra)</p>
                  </div>
                </div>

                {/* Mineras que Operan */}
                <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600">
                  <h4 className="text-xl font-semibold text-white mb-6">Mineras que Operan</h4>
                  
                  {/* Grupo Codelco */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-emerald-400 mb-3 uppercase tracking-wide">Codelco</h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-emerald-400/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">Chuquicamata</span>
                      <span className="px-3 py-1 bg-emerald-400/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">Ministro Hales</span>
                      <span className="px-3 py-1 bg-emerald-400/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">Radomiro Tomic</span>
                      <span className="px-3 py-1 bg-emerald-400/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">Gabriela Mistral</span>
                    </div>
                  </div>

                  {/* Grupo BHP */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-emerald-400 mb-3 uppercase tracking-wide">BHP</h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-emerald-400/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">Spence</span>
                      <span className="px-3 py-1 bg-emerald-400/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">Escondida</span>
                    </div>
                  </div>

                  {/* Otras Mineras */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-emerald-400 mb-3 uppercase tracking-wide">Otras Mineras</h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-emerald-400/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">Sierra Gorda SCM</span>
                      <span className="px-3 py-1 bg-emerald-400/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">Antofagasta Minerals</span>
                      <span className="px-3 py-1 bg-emerald-400/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">Capstone</span>
                      <span className="px-3 py-1 bg-emerald-400/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">SQM</span>
                      <span className="px-3 py-1 bg-emerald-400/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">Albemarle</span>
                      <span className="px-3 py-1 bg-emerald-400/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">Glencore</span>
                    </div>
                  </div>
                </div>
              </div>
                
                <div className="bg-slate-700/30 p-8 rounded-lg border border-slate-600">
                  <h4 className="text-xl font-semibold text-white mb-2">Mapa de Ubicación</h4>
                  <p className="text-emerald-400 text-sm mb-4 font-medium">📍 Estación Baquedano</p>
                  <div className="w-full h-64 rounded-lg overflow-hidden border border-slate-600 mb-6">
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
                  
                  {/* Información adicional del mapa */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-slate-600/50 rounded-lg">
                      <div className="text-emerald-400 font-semibold text-lg">22-60</div>
                      <div className="text-slate-300 text-xs">Hectáreas</div>
                    </div>
                    <div className="text-center p-3 bg-slate-600/50 rounded-lg">
                      <div className="text-emerald-400 font-semibold text-lg">12</div>
                      <div className="text-slate-300 text-xs">Mineras</div>
                    </div>
                    <div className="text-center p-3 bg-slate-600/50 rounded-lg">
                      <div className="text-emerald-400 font-semibold text-lg">2</div>
                      <div className="text-slate-300 text-xs">Accesos</div>
                    </div>
                    <div className="text-center p-3 bg-slate-600/50 rounded-lg">
                      <div className="text-emerald-400 font-semibold text-lg">100%</div>
                      <div className="text-slate-300 text-xs">Operativo</div>
                    </div>
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
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center mr-4">
                      <Target className="w-8 h-8 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-emerald-400">Escondida</h3>
                      <p className="text-lg text-slate-300">Estación Imilac</p>
                    </div>
                  </div>
                  
                  {/* Información del Proyecto */}
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg">
                      <Building className="w-8 h-8 text-blue-400" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Superficie Total</h4>
                        <p className="text-slate-300">15 hectáreas especializadas en logística minera</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg">
                      <MapPin className="w-8 h-8 text-blue-400" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Ubicación</h4>
                        <p className="text-slate-300">Escondida, Región de Antofagasta</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg">
                      <Train className="w-8 h-8 text-purple-400" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Acceso Ferroviario</h4>
                        <p className="text-slate-300">Conexión directa a la red ferroviaria del norte</p>
                      </div>
                    </div>
                  </div>

                  {/* Ubicación Estratégica */}
                  <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600">
                    <h4 className="text-xl font-semibold text-white mb-4">Ubicación Estratégica</h4>
                    <div className="space-y-3 text-slate-300">
                      <p>• <strong className="text-emerald-400">A 10km de la mina de cobre</strong> más grande del mundo</p>
                      <p>• <strong className="text-emerald-400">Ruta Exclusiva</strong> para Minera Escondida</p>
                      <p>• <strong className="text-emerald-400">Universo de 17 mil millones</strong> de dólares</p>
                      <p>• <strong className="text-emerald-400">Viabilidad acople Ferroviario</strong> (actual)</p>
                      <p>• <strong className="text-emerald-400">Únicos con capacidad operativa</strong> en esta ruta</p>
                    </div>
                  </div>

                  {/* Mineras que Operan */}
                  <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600">
                    <h4 className="text-xl font-semibold text-white mb-4">Mineras que Operan</h4>
                    <div className="grid grid-cols-1 gap-3 text-slate-300">
                      <p>• <strong className="text-emerald-400">BHP Escondida</strong></p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-700/30 p-8 rounded-lg border border-slate-600">
                  <h4 className="text-xl font-semibold text-white mb-2">Mapa de Ubicación</h4>
                  <p className="text-blue-400 text-sm mb-4 font-medium">📍 Estación Imilac</p>
                  <div className="w-full h-64 rounded-lg overflow-hidden border border-slate-600">
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
                    <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center mr-4">
                      <Target className="w-8 h-8 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-emerald-400">Anglo-Teck</h3>
                      <p className="text-lg text-slate-300">Estación Pintados</p>
                    </div>
                  </div>
                  
                  {/* Información del Proyecto */}
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg">
                      <Building className="w-8 h-8 text-purple-400" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Superficie Total</h4>
                        <p className="text-slate-300">20 hectáreas para operaciones logísticas</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg">
                      <MapPin className="w-8 h-8 text-blue-400" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Ubicación</h4>
                        <p className="text-slate-300">Iquique, Región de Tarapacá</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg">
                      <Train className="w-8 h-8 text-purple-400" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Acceso Ferroviario</h4>
                        <p className="text-slate-300">Conexión estratégica a red ferroviaria</p>
                      </div>
                    </div>
                  </div>

                  {/* Ubicación Estratégica */}
                  <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600">
                    <h4 className="text-xl font-semibold text-white mb-4">Ubicación Estratégica</h4>
                    <div className="space-y-3 text-slate-300">
                      <p>• <strong className="text-emerald-400">Ubicación única</strong> en nuevo nodo mundial</p>
                      <p>• <strong className="text-emerald-400">Ubicación estratégica</strong> ruta minera y 5 norte</p>
                      <p>• <strong className="text-emerald-400">Hub en medio del trayecto</strong> a puerto-mina</p>
                      <p>• <strong className="text-emerald-400">Muy baja presencia</strong> de competencia</p>
                      <p>• <strong className="text-emerald-400">Universo de 20 mil millones</strong> de dólares</p>
                    </div>
                  </div>

                  {/* Mineras que Operan */}
                  <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600">
                    <h4 className="text-xl font-semibold text-white mb-4">Mineras que Operan</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
                      <p>• <strong className="text-emerald-400">Angloamerican Collahuasi</strong></p>
                      <p>• <strong className="text-emerald-400">Glencore Collahuasi</strong></p>
                      <p>• <strong className="text-emerald-400">Teck Quebrada Blanca</strong></p>
                      <p>• <strong className="text-emerald-400">Nuevo AngloTeck</strong></p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-700/30 p-8 rounded-lg border border-slate-600">
                  <h4 className="text-xl font-semibold text-white mb-2">Mapa de Ubicación</h4>
                  <p className="text-purple-400 text-sm mb-4 font-medium">📍 Estación Pintados</p>
                  <div className="w-full h-64 rounded-lg overflow-hidden border border-slate-600">
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
