import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, ArrowDown, Users, Award, Target, TrendingUp, Building, Zap, MapPin, Wifi, Truck, Factory, DollarSign, Calendar, BarChart3, Network, Calculator, PieChart, LineChart, Percent, Mail, Phone, MessageSquare, Send } from "lucide-react";

const InvenorHome: React.FC = () => {
  const [activeTab, setActiveTab] = useState("estaciones");
  const [selectedProject, setSelectedProject] = useState("estaciones");
  const [investmentAmount, setInvestmentAmount] = useState(1000000);
  const [scenario, setScenario] = useState("moderado");

  // Financial calculations
  const calculateMetrics = () => {
    const projectData = {
      estaciones: {
        conservador: { roi: 15, tir: 18, van: 1.2, payback: 4.2 },
        moderado: { roi: 22, tir: 25, van: 1.8, payback: 3.1 },
        agresivo: { roi: 35, tir: 38, van: 2.5, payback: 2.3 }
      },
      puchuncavi: {
        conservador: { roi: 44, tir: 28, van: 1.4, payback: 2.8 },
        moderado: { roi: 67, tir: 35, van: 2.1, payback: 2.2 },
        agresivo: { roi: 167, tir: 55, van: 3.8, payback: 1.5 }
      },
      hubnorte: {
        conservador: { roi: 18, tir: 22, van: 1.3, payback: 3.8 },
        moderado: { roi: 28, tir: 32, van: 2.0, payback: 2.9 },
        agresivo: { roi: 42, tir: 48, van: 3.2, payback: 2.1 }
      },
      fibra: {
        conservador: { roi: 25, tir: 28, van: 1.6, payback: 3.2 },
        moderado: { roi: 38, tir: 42, van: 2.4, payback: 2.4 },
        agresivo: { roi: 55, tir: 62, van: 3.6, payback: 1.8 }
      }
    };

    const data = projectData[selectedProject as keyof typeof projectData][scenario as keyof typeof projectData.estaciones];
    const projectedValue = investmentAmount * (1 + data.roi / 100);
    const annualReturn = investmentAmount * (data.roi / 100);
    
    return {
      ...data,
      projectedValue,
      annualReturn,
      vanAmount: investmentAmount * data.van
    };
  };

  const metrics = calculateMetrics();

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

      {/* Oportunidades Actuales Section */}
      <section id="oportunidades" className="py-20 bg-slate-900">
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
              Oportunidades <span className="text-emerald-400">Actuales</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Portafolio diversificado de activos estratégicos con potencial de crecimiento 
              sostenible en el ecosistema del norte de Chile
            </p>
          </motion.div>

          {/* Tabs Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { id: "estaciones", label: "500+ Estaciones", icon: MapPin },
              { id: "puchuncavi", label: "Puchuncaví", icon: Factory },
              { id: "hub-norte", label: "Hub Norte", icon: Building },
              { id: "fibra", label: "Fibra Oscura", icon: Network }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-emerald-500 text-white shadow-lg"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-[600px]"
          >
            {/* 500+ Estaciones Tab */}
            {activeTab === "estaciones" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Mapa Visual */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <MapPin className="h-6 w-6 text-emerald-400 mr-3" />
                    Distribución Geográfica
                  </h3>
                  
                  {/* Simplified Map */}
                  <div className="relative h-80 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-emerald-400/5">
                      {/* Map Points */}
                      {[
                        { x: "20%", y: "15%", status: "active" },
                        { x: "35%", y: "25%", status: "active" },
                        { x: "45%", y: "35%", status: "pending" },
                        { x: "25%", y: "45%", status: "active" },
                        { x: "55%", y: "55%", status: "active" },
                        { x: "30%", y: "65%", status: "pending" },
                        { x: "65%", y: "75%", status: "active" }
                      ].map((point, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className={`absolute w-4 h-4 rounded-full ${
                            point.status === "active" ? "bg-emerald-400" : "bg-yellow-400"
                          } shadow-lg`}
                          style={{ left: point.x, top: point.y }}
                        >
                          <motion.div
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className={`absolute inset-0 rounded-full ${
                              point.status === "active" ? "bg-emerald-400/30" : "bg-yellow-400/30"
                            }`}
                          />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                          <span className="text-white">Disponibles</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <span className="text-white">En Desarrollo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Cards por tipo */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Categorías de Estaciones</h3>
                  
                  {[
                    {
                      title: "Estaciones Urbanas",
                      count: "180+",
                      revenue: "US$2.5M/año",
                      description: "Centros urbanos con alta demanda logística",
                      color: "emerald"
                    },
                    {
                      title: "Estaciones Mineras",
                      count: "240+",
                      revenue: "US$4.2M/año",
                      description: "Puntos estratégicos cerca de operaciones mineras",
                      color: "blue"
                    },
                    {
                      title: "Estaciones Energéticas",
                      count: "120+",
                      revenue: "US$3.8M/año",
                      description: "Infraestructura para proyectos renovables",
                      color: "yellow"
                    }
                  ].map((station, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-semibold text-white">{station.title}</h4>
                        <span className={`text-2xl font-bold text-${station.color}-400`}>
                          {station.count}
                        </span>
                      </div>
                      <p className="text-slate-300 text-sm mb-3">{station.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-emerald-400 font-semibold">{station.revenue}</span>
                        <div className="flex items-center text-slate-400 text-sm">
                          <BarChart3 className="h-4 w-4 mr-1" />
                          Ingreso proyectado
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}

            {/* Puchuncaví Tab */}
            {activeTab === "puchuncavi" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Factory className="h-6 w-6 text-emerald-400 mr-3" />
                    Proyecto Puchuncaví
                  </h3>
                  
                  {/* Showcase Visual */}
                  <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl h-64 flex items-center justify-center">
                    <div className="text-center">
                      <Factory className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                      <p className="text-white font-semibold">Desarrollo Industrial Estratégico</p>
                      <p className="text-slate-300 text-sm">250 hectáreas - Zona Industrial</p>
                    </div>
                  </div>

                  {/* Métricas */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                      <div className="text-2xl font-bold text-emerald-400">250</div>
                      <div className="text-slate-300 text-sm">Hectáreas</div>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                      <div className="text-2xl font-bold text-emerald-400">US$45M</div>
                      <div className="text-slate-300 text-sm">Valor Actual</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h4 className="text-xl font-semibold text-white">Oportunidades de Uso</h4>
                  
                  {[
                    {
                      title: "Venta Directa",
                      value: "US$65M",
                      roi: "44% ROI",
                      timeline: "12-18 meses",
                      description: "Venta completa a desarrollador industrial"
                    },
                    {
                      title: "Desarrollo por Fases",
                      value: "US$120M",
                      roi: "167% ROI",
                      timeline: "3-5 años",
                      description: "Desarrollo y venta por sectores"
                    },
                    {
                      title: "Arriendo Largo Plazo",
                      value: "US$8.5M/año",
                      roi: "19% anual",
                      timeline: "20+ años",
                      description: "Contratos de arriendo industriales"
                    }
                  ].map((option, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-slate-800 rounded-xl p-6 border border-slate-700"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h5 className="font-semibold text-white">{option.title}</h5>
                        <span className="text-emerald-400 font-bold">{option.roi}</span>
                      </div>
                      <div className="text-2xl font-bold text-white mb-2">{option.value}</div>
                      <p className="text-slate-300 text-sm mb-3">{option.description}</p>
                      <div className="flex items-center text-slate-400 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {option.timeline}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}

            {/* Hub Norte Tab */}
            {activeTab === "hub-norte" && (
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                    <Building className="h-6 w-6 text-emerald-400 mr-3" />
                    Hub de Innovación Norte
                  </h3>
                  <p className="text-slate-300 max-w-3xl mx-auto">
                    Centro tecnológico estratégico para empresas mineras, energéticas y de innovación
                  </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-emerald-400/30"></div>
                  
                  {[
                    {
                      phase: "Fase 1",
                      title: "Infraestructura Base",
                      period: "2024 Q1-Q2",
                      investment: "US$15M",
                      description: "Construcción de edificios principales y servicios básicos"
                    },
                    {
                      phase: "Fase 2", 
                      title: "Equipamiento Tecnológico",
                      period: "2024 Q3-Q4",
                      investment: "US$25M",
                      description: "Instalación de laboratorios y centros de datos"
                    },
                    {
                      phase: "Fase 3",
                      title: "Operación Comercial",
                      period: "2025 Q1",
                      investment: "US$5M",
                      description: "Apertura y comercialización de espacios"
                    }
                  ].map((phase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.3 }}
                      className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}
                    >
                      <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-emerald-400 font-semibold">{phase.phase}</span>
                            <span className="text-slate-400 text-sm">{phase.period}</span>
                          </div>
                          <h4 className="text-lg font-semibold text-white mb-2">{phase.title}</h4>
                          <p className="text-slate-300 text-sm mb-3">{phase.description}</p>
                          <div className="text-emerald-400 font-bold">{phase.investment}</div>
                        </div>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full border-4 border-slate-900"></div>
                    </motion.div>
                  ))}
                </div>

                {/* Proyección Financiera */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
                >
                  <h4 className="text-xl font-semibold text-white mb-6">Proyección Financiera</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">85%</div>
                      <div className="text-slate-300 text-sm">Ocupación Proyectada</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">US$12M</div>
                      <div className="text-slate-300 text-sm">Ingresos Anuales</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">22%</div>
                      <div className="text-slate-300 text-sm">ROI Anual</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
                      <div className="text-slate-300 text-sm">Empresas Objetivo</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Fibra Oscura Tab */}
            {activeTab === "fibra" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Network className="h-6 w-6 text-emerald-400 mr-3" />
                    Red de Fibra Oscura
                  </h3>
                  
                  {/* Network Visualization */}
                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <div className="relative h-64 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg overflow-hidden">
                      {/* Network lines */}
                      <svg className="absolute inset-0 w-full h-full">
                        <path
                          d="M 50 50 Q 200 100 350 50 Q 500 80 650 60"
                          stroke="#10b981"
                          strokeWidth="3"
                          fill="none"
                          className="opacity-60"
                        />
                        <path
                          d="M 50 150 Q 200 120 350 140 Q 500 160 650 150"
                          stroke="#10b981"
                          strokeWidth="3"
                          fill="none"
                          className="opacity-60"
                        />
                      </svg>
                      
                      {/* Network nodes */}
                      {[
                        { x: "10%", y: "20%" },
                        { x: "30%", y: "40%" },
                        { x: "50%", y: "25%" },
                        { x: "70%", y: "35%" },
                        { x: "90%", y: "30%" }
                      ].map((node, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.2 }}
                          className="absolute w-3 h-3 bg-emerald-400 rounded-full"
                          style={{ left: node.x, top: node.y }}
                        >
                          <motion.div
                            animate={{ scale: [1, 2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-emerald-400/30 rounded-full"
                          />
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">1,200 km</div>
                      <div className="text-slate-300">Red de Fibra Disponible</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h4 className="text-xl font-semibold text-white">Clientes Potenciales</h4>
                  
                  {[
                    {
                      sector: "Telecomunicaciones",
                      clients: "5+ operadores",
                      monthly: "US$180K/mes",
                      description: "Backbone para redes móviles y fijas"
                    },
                    {
                      sector: "Minería",
                      clients: "12+ faenas",
                      monthly: "US$320K/mes", 
                      description: "Conectividad crítica para operaciones remotas"
                    },
                    {
                      sector: "Gobierno",
                      clients: "8+ entidades",
                      monthly: "US$95K/mes",
                      description: "Redes seguras para servicios públicos"
                    },
                    {
                      sector: "Energía Renovable",
                      clients: "15+ proyectos",
                      monthly: "US$210K/mes",
                      description: "Monitoreo y control de plantas solares/eólicas"
                    }
                  ].map((client, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-slate-800 rounded-xl p-6 border border-slate-700"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h5 className="font-semibold text-white">{client.sector}</h5>
                        <span className="text-emerald-400 font-bold">{client.monthly}</span>
                      </div>
                      <div className="text-slate-300 text-sm mb-2">{client.clients}</div>
                      <p className="text-slate-300 text-sm">{client.description}</p>
                    </motion.div>
                  ))}

                  {/* Total Revenue */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-xl p-6 border border-emerald-400/30"
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">US$9.7M</div>
                      <div className="text-white font-semibold mb-1">Ingresos Anuales Proyectados</div>
                      <div className="text-slate-300 text-sm">Basado en 80% de ocupación de la red</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Proyecciones Financieras Section */}
      <section id="proyecciones" className="py-20 bg-slate-800">
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
              Proyecciones <span className="text-emerald-400">Financieras</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Simulador interactivo para evaluar el retorno de inversión en nuestros proyectos estratégicos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Simulador Inputs */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-700 rounded-2xl p-8 border border-slate-600"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Calculator className="h-6 w-6 text-emerald-400 mr-3" />
                Simulador de Inversión
              </h3>
              
              {/* Project Selection */}
              <div className="mb-6">
                <label className="block text-white font-semibold mb-3">Tipo de Proyecto</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "estaciones", label: "Estaciones", icon: MapPin },
                    { id: "puchuncavi", label: "Puchuncaví", icon: Factory },
                    { id: "hubnorte", label: "Hub Norte", icon: Building },
                    { id: "fibra", label: "Fibra Oscura", icon: Network }
                  ].map((project) => {
                    const Icon = project.icon;
                    return (
                      <motion.button
                        key={project.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedProject(project.id)}
                        className={`flex items-center space-x-2 p-3 rounded-lg font-medium transition-all duration-200 ${
                          selectedProject === project.id
                            ? "bg-emerald-500 text-white"
                            : "bg-slate-600 text-slate-300 hover:bg-slate-500"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-sm">{project.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Investment Amount */}
              <div className="mb-6">
                <label className="block text-white font-semibold mb-3">Monto de Inversión (USD)</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-400" />
                  <input
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 bg-slate-600 text-white rounded-lg border border-slate-500 focus:border-emerald-400 focus:outline-none"
                    placeholder="1,000,000"
                    min="100000"
                    step="100000"
                  />
                </div>
                <div className="mt-2 flex space-x-2">
                  {[500000, 1000000, 2500000, 5000000].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setInvestmentAmount(amount)}
                      className="px-3 py-1 text-xs bg-slate-600 text-slate-300 rounded hover:bg-slate-500 transition-colors"
                    >
                      ${(amount / 1000000).toFixed(1)}M
                    </button>
                  ))}
                </div>
              </div>

              {/* Scenario Selection */}
              <div className="mb-8">
                <label className="block text-white font-semibold mb-3">Escenario de Proyección</label>
                <div className="space-y-2">
                  {[
                    { id: "conservador", label: "Conservador", color: "blue", desc: "Proyecciones cautelosas" },
                    { id: "moderado", label: "Moderado", color: "emerald", desc: "Escenario base esperado" },
                    { id: "agresivo", label: "Agresivo", color: "yellow", desc: "Máximo potencial" }
                  ].map((scenarioOption) => (
                    <motion.button
                      key={scenarioOption.id}
                      whileHover={{ scale: 1.01 }}
                      onClick={() => setScenario(scenarioOption.id)}
                      className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                        scenario === scenarioOption.id
                          ? `border-${scenarioOption.color}-400 bg-${scenarioOption.color}-500/10`
                          : "border-slate-600 bg-slate-600/50 hover:border-slate-500"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className={`font-semibold ${
                            scenario === scenarioOption.id ? `text-${scenarioOption.color}-400` : "text-white"
                          }`}>
                            {scenarioOption.label}
                          </div>
                          <div className="text-sm text-slate-300">{scenarioOption.desc}</div>
                        </div>
                        <div className={`w-4 h-4 rounded-full ${
                          scenario === scenarioOption.id ? `bg-${scenarioOption.color}-400` : "bg-slate-500"
                        }`} />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Results Dashboard */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <BarChart3 className="h-6 w-6 text-emerald-400 mr-3" />
                Resultados Proyectados
              </h3>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-slate-700 rounded-xl p-6 border border-slate-600"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 text-sm">ROI</span>
                    <Percent className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-emerald-400">{metrics.roi}%</div>
                  <div className="text-xs text-slate-400">Retorno sobre inversión</div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-slate-700 rounded-xl p-6 border border-slate-600"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 text-sm">TIR</span>
                    <TrendingUp className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-emerald-400">{metrics.tir}%</div>
                  <div className="text-xs text-slate-400">Tasa interna de retorno</div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-slate-700 rounded-xl p-6 border border-slate-600"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 text-sm">VAN</span>
                    <DollarSign className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-emerald-400">{metrics.van.toFixed(1)}</div>
                  <div className="text-xs text-slate-400">Valor actual neto (múltiplo)</div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-slate-700 rounded-xl p-6 border border-slate-600"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 text-sm">Payback</span>
                    <Calendar className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-emerald-400">{metrics.payback}</div>
                  <div className="text-xs text-slate-400">Años para recuperar inversión</div>
                </motion.div>
              </div>

              {/* Financial Projection */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-slate-700 rounded-xl p-6 border border-slate-600"
              >
                <h4 className="text-lg font-semibold text-white mb-4">Proyección Financiera</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Inversión Inicial</span>
                    <span className="font-mono text-white">
                      ${investmentAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Valor Proyectado</span>
                    <span className="font-mono text-emerald-400 font-semibold">
                      ${metrics.projectedValue.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Ganancia Anual</span>
                    <span className="font-mono text-emerald-400 font-semibold">
                      ${metrics.annualReturn.toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t border-slate-600 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">VAN Absoluto</span>
                      <span className="font-mono text-emerald-400 font-bold text-lg">
                        ${metrics.vanAmount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Animated Progress Bars */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-slate-700 rounded-xl p-6 border border-slate-600"
              >
                <h4 className="text-lg font-semibold text-white mb-4">Comparación de Escenarios</h4>
                <div className="space-y-4">
                  {["conservador", "moderado", "agresivo"].map((scenarioType, index) => {
                    const scenarioMetrics = calculateMetrics();
                    const tempScenario = scenario;
                    // Temporarily calculate for each scenario
                    const isActive = scenarioType === scenario;
                    
                    return (
                      <div key={scenarioType} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className={isActive ? "text-emerald-400 font-semibold" : "text-slate-300"}>
                            {scenarioType.charAt(0).toUpperCase() + scenarioType.slice(1)}
                          </span>
                          <span className={isActive ? "text-emerald-400 font-semibold" : "text-slate-300"}>
                            {isActive ? `${scenarioMetrics.roi}%` : ""}
                          </span>
                        </div>
                        <div className="w-full bg-slate-600 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: isActive ? `${Math.min(scenarioMetrics.roi, 100)}%` : "0%" }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className={`h-2 rounded-full ${
                              scenarioType === "conservador" ? "bg-blue-400" :
                              scenarioType === "moderado" ? "bg-emerald-400" : "bg-yellow-400"
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-slate-900 to-emerald-900/20">
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
              Únete a la <span className="text-emerald-400">Transformación</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Forma parte de la nueva era de inversiones estratégicas en el norte de Chile. 
              Conecta con nosotros para explorar oportunidades exclusivas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
              
              {/* Contact Cards */}
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-emerald-500/20 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Email Corporativo</h4>
                      <p className="text-slate-300">contacto@invenor.cl</p>
                      <p className="text-slate-400 text-sm">Respuesta en 24 horas</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-emerald-500/20 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Línea Directa</h4>
                      <p className="text-slate-300">+56 2 2XXX XXXX</p>
                      <p className="text-slate-400 text-sm">Lunes a Viernes, 9:00 - 18:00</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-emerald-500/20 p-3 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">WhatsApp Business</h4>
                      <p className="text-slate-300">+56 9 XXXX XXXX</p>
                      <p className="text-slate-400 text-sm">Consultas inmediatas</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Investment Minimums */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-emerald-500/10 border border-emerald-400/30 rounded-xl p-6"
              >
                <h4 className="text-lg font-semibold text-emerald-400 mb-4">Mínimos de Inversión</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Estaciones</span>
                    <span className="text-white font-semibold">US$ 500K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Puchuncaví</span>
                    <span className="text-white font-semibold">US$ 2M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Hub Norte</span>
                    <span className="text-white font-semibold">US$ 1.5M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Fibra Oscura</span>
                    <span className="text-white font-semibold">US$ 750K</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Solicita una Reunión</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                      placeholder="juan@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                      placeholder="+56 9 XXXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Monto de Inversión
                    </label>
                    <select className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none transition-colors">
                      <option value="">Seleccionar rango</option>
                      <option value="500k-1m">US$ 500K - 1M</option>
                      <option value="1m-5m">US$ 1M - 5M</option>
                      <option value="5m-10m">US$ 5M - 10M</option>
                      <option value="10m+">US$ 10M+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Proyecto de Interés
                  </label>
                  <select className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none transition-colors">
                    <option value="">Seleccionar proyecto</option>
                    <option value="estaciones">500+ Estaciones</option>
                    <option value="puchuncavi">Puchuncaví</option>
                    <option value="hub-norte">Hub Norte</option>
                    <option value="fibra">Fibra Oscura</option>
                    <option value="portafolio">Portafolio Completo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                    placeholder="Cuéntanos sobre tus objetivos de inversión y preferencias..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar Solicitud</span>
                </motion.button>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-600">
                <p className="text-slate-400 text-sm text-center">
                  Al enviar este formulario, aceptas que un representante de Invenor se ponga en contacto contigo 
                  para discutir oportunidades de inversión.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Final CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-2xl p-8 border border-emerald-400/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Listo para Transformar tu Portafolio?
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Únete a los inversionistas visionarios que están construyendo el futuro del norte de Chile. 
                Oportunidades limitadas disponibles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Agendar Reunión
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Descargar Executive Summary
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-emerald-400 font-bold text-xl mb-4 md:mb-0">
              Invenor
            </div>
            <div className="text-slate-400 text-sm">
              © 2024 Invenor. Todos los derechos reservados. | Inversiones Estratégicas del Norte
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InvenorHome;