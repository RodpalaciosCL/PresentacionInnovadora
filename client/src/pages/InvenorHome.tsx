import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, ArrowDown, Users, Award, Target, TrendingUp, Building, Zap } from "lucide-react";

const InvenorHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-emerald-400"
            >
              Invenor
            </motion.div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link href="#quienes-somos" className="text-slate-300 hover:text-emerald-400 transition-colors duration-200">
                Quiénes Somos
              </Link>
              <Link href="#oportunidades" className="text-slate-300 hover:text-emerald-400 transition-colors duration-200">
                Oportunidades
              </Link>
              <Link href="#proyecciones" className="text-slate-300 hover:text-emerald-400 transition-colors duration-200">
                Proyecciones
              </Link>
              <Link href="#contacto" className="text-slate-300 hover:text-emerald-400 transition-colors duration-200">
                Contacto
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-slate-300 hover:text-emerald-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Infrastructure Pattern */}
        <div className="absolute inset-0">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/20"></div>
          
          {/* Infrastructure Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Animated Infrastructure Elements */}
          <motion.div 
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-32 h-32 border-2 border-emerald-400/30 rounded-full"
          />
          
          <motion.div 
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-32 left-16 w-16 h-40 bg-gradient-to-t from-emerald-400/20 to-transparent"
          />
          
          <motion.div 
            animate={{ 
              opacity: [0.4, 0.7, 0.4],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/4 w-24 h-2 bg-emerald-400/30"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Main Headline */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <span className="text-white">Invenor</span>
              <motion.span 
                className="block text-emerald-400 mt-2"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Transformamos
              </motion.span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <span className="font-semibold text-emerald-400">infraestructura</span> en 
              <span className="font-semibold text-white"> oportunidades de inversión</span>
            </motion.p>
            
            {/* Description */}
            <motion.p 
              className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Desarrollamos proyectos estratégicos de infraestructura que generan valor sostenible 
              para inversionistas visionarios en el norte de Chile.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-xl hover:shadow-emerald-500/25 flex items-center mx-auto"
              >
                Descubre nuestras oportunidades
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="h-6 w-6 text-emerald-400" />
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-emerald-400 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            delay: 0.5
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full"
          animate={{ 
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            delay: 1.2
          }}
        />
      </section>

      {/* Quiénes Somos Section */}
      <section id="quienes-somos" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quiénes <span className="text-emerald-400">Somos</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Un equipo de profesionales experimentados con más de 20 años desarrollando 
              infraestructura estratégica en Chile y Latinoamérica
            </p>
          </motion.div>

          {/* Founders Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Founder 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600 hover:border-emerald-400/50 transition-all duration-300"
            >
              {/* Avatar placeholder */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center"
              >
                <Users className="h-16 w-16 text-white" />
              </motion.div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Carlos Mendoza</h3>
                <p className="text-emerald-400 font-semibold">CEO & Co-Fundador</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Building className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">
                    <span className="font-semibold">15+ años</span> en desarrollo de infraestructura crítica, 
                    liderando proyectos por más de US$500M en minería y energía
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">
                    Ex-Director de Proyectos en <span className="font-semibold">Codelco</span> y 
                    <span className="font-semibold"> SQM</span>, especialista en gestión de activos estratégicos
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">
                    Track record: <span className="font-semibold">12 proyectos exitosos</span> con 
                    retornos promedio del 18% anual
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-600 pt-4">
                <p className="text-slate-400 text-sm italic">
                  "La infraestructura es el motor invisible que impulsa el crecimiento económico. 
                  En Invenor, transformamos esa visión en oportunidades tangibles."
                </p>
              </div>
            </motion.div>

            {/* Founder 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600 hover:border-emerald-400/50 transition-all duration-300"
            >
              {/* Avatar placeholder */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center"
              >
                <Zap className="h-16 w-16 text-white" />
              </motion.div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Patricia Silva</h3>
                <p className="text-emerald-400 font-semibold">CFO & Co-Fundadora</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Building className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">
                    <span className="font-semibold">12+ años</span> en estructuración financiera y 
                    gestión de fondos, especializada en infraestructura y real estate
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">
                    Ex-VP Finanzas en <span className="font-semibold">Antofagasta Minerals</span> y 
                    <span className="font-semibold"> Banco de Chile</span>, MBA Wharton School
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">
                    Estructuró financiamientos por <span className="font-semibold">US$750M+</span> en 
                    proyectos de infraestructura crítica
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-600 pt-4">
                <p className="text-slate-400 text-sm italic">
                  "Los números cuentan una historia, pero la visión estratégica la convierte en realidad. 
                  Creamos valor donde otros ven complejidad."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Company Vision & Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-700/50 to-emerald-900/20 rounded-2xl p-8 md:p-12 border border-slate-600"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Nuestra Visión</h3>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto">
                Ser el partner estratégico líder en el desarrollo de infraestructura del norte de Chile, 
                generando valor sostenible para inversionistas mientras impulsamos el crecimiento regional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Valor 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-emerald-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Visión Estratégica</h4>
                <p className="text-slate-300 text-sm">
                  Identificamos oportunidades donde la infraestructura se convierte en 
                  ventaja competitiva sostenible
                </p>
              </motion.div>

              {/* Valor 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-emerald-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Excelencia Operacional</h4>
                <p className="text-slate-300 text-sm">
                  Ejecutamos con los más altos estándares de calidad, 
                  cumpliendo plazos y superando expectativas
                </p>
              </motion.div>

              {/* Valor 3 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-emerald-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Partnership Auténtico</h4>
                <p className="text-slate-300 text-sm">
                  Construimos relaciones de largo plazo basadas en transparencia, 
                  confianza y resultados medibles
                </p>
              </motion.div>
            </div>

            {/* Diferenciadores */}
            <div className="mt-12 border-t border-slate-600 pt-8">
              <h4 className="text-2xl font-bold text-white text-center mb-8">
                ¿Por qué <span className="text-emerald-400">Invenor</span>?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1">Conocimiento del Territorio</h5>
                    <p className="text-slate-300 text-sm">
                      Profundo entendimiento del ecosistema minero y energético del norte de Chile
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1">Red Estratégica</h5>
                    <p className="text-slate-300 text-sm">
                      Conexiones directas con tomadores de decisión en las principales industrias
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1">Ejecución Probada</h5>
                    <p className="text-slate-300 text-sm">
                      Track record verificable en desarrollo y gestión de activos estratégicos
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1">Enfoque Integral</h5>
                    <p className="text-slate-300 text-sm">
                      Desde la identificación hasta la operación, manejamos todo el ciclo de valor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InvenorHome;