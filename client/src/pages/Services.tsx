/**
 * Services.tsx - Services page for Invenor 2.0
 * Comprehensive services and why us section
 */

import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Building, Cpu, Globe, Rocket } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-emerald-400">SERVICIOS</span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
              Soluciones integrales para el desarrollo y gestión de activos estratégicos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Service 1: Asset Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-6 border border-slate-700 hover:border-emerald-400 transition-all duration-300 bg-slate-800/20 hover:bg-slate-800/40">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-400 flex items-center justify-center mr-4">
                    <Building className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Asset Management & Consulting Services
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-emerald-400 mr-3 mt-2 flex-shrink-0"></div>
                    <span>Gestión de activos inmobiliarios</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-emerald-400 mr-3 mt-2 flex-shrink-0"></div>
                    <span>Gestión de inversiones inmobiliarias</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-emerald-400 mr-3 mt-2 flex-shrink-0"></div>
                    <span>Consultoría estratégica de inversión</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-emerald-400 mr-3 mt-2 flex-shrink-0"></div>
                    <span>Consultoría estratégica de desarrollo de negocio</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-emerald-400 mr-3 mt-2 flex-shrink-0"></div>
                    <span>Implementación, gestión y soporte de soluciones basadas en assets tácticos</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Service 2: AI Factory */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-6 border border-slate-700 hover:border-purple-400 transition-all duration-300 bg-slate-800/20 hover:bg-slate-800/40">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-400 flex items-center justify-center mr-4">
                    <Cpu className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    AI First Business & Prototyping Factory
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 mr-3 mt-2 flex-shrink-0"></div>
                    <span>Desarrollo de soluciones basadas en AI para gestión eficiente de operación, recursos, revenue y performance</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 mr-3 mt-2 flex-shrink-0"></div>
                    <span>Factory de testeo de oportunidades para logística, comercio, operación de activos y movilización operativa multi punto</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 mr-3 mt-2 flex-shrink-0"></div>
                    <span>Dronesolutions con naves no tripuladas para operaciones de cientos de kilómetros</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Service 3: Energy & Mining Center */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-6 border border-slate-700 hover:border-blue-400 transition-all duration-300 bg-slate-800/20 hover:bg-slate-800/40">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-400 flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    Energy, Mining, Logistics, Utilities & Smart Cities Envisioning Center
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 mr-3 mt-2 flex-shrink-0"></div>
                    <span>Centro de prueba de soluciones, MVPs y nuevas tecnologías</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 mr-3 mt-2 flex-shrink-0"></div>
                    <span>Early testing para tecnologías emergentes, en terreno</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 mr-3 mt-2 flex-shrink-0"></div>
                    <span>Centro de pruebas en el norte de Chile</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 mr-3 mt-2 flex-shrink-0"></div>
                    <span>Omni Logistic, con capacidad ferroviaria, aérea y terrestre, con high & advanced tracking</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Service 4: Capital Injection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-6 border border-slate-700 hover:border-yellow-400 transition-all duration-300 bg-slate-800/20 hover:bg-slate-800/40">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center mr-4">
                    <Rocket className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    Capital Injection & Unicorn Boost
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Conversamos, proponemos, ideamos, implementamos y operamos negocios desde su concepción, hasta su máxima amplificación
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              ¿POR QUÉ <span className="text-emerald-400">NOSOTROS?</span>
            </h2>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800/30 border border-slate-700 p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column - Main Text */}
              <div className="space-y-6">
                <p className="text-xl text-slate-200 leading-relaxed">
                  Porque llevamos más de <span className="text-emerald-400 font-bold">20 años</span> gestionando negocios, 
                  implementando soluciones y monetizando oportunidades para las <span className="text-emerald-400 font-bold">industrias más desafiantes</span> 
                  actualmente existentes, y para los <span className="text-emerald-400 font-bold">clientes más grandes del mundo</span>.
                </p>
                
                <p className="text-lg text-slate-300 leading-relaxed">
                  Hoy tenemos una oportunidad de explotación única, de assets altamente cualificados 
                  para transformar cualquier income que se tenga en mente, y transformarnos en el main revenue 
                  del negocio al cual aportemos o nos acoplemos.
                </p>

                <div className="pt-4">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 bg-emerald-400 hover:bg-emerald-500 text-slate-900 px-6 py-3 font-semibold transition-all duration-300"
                    >
                      <span>Conoce más</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Right Column - Industry Highlights */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6">Industrias que transformamos:</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-slate-600 hover:border-emerald-400 transition-colors bg-slate-700/30">
                    <span className="text-slate-200 font-medium">Comunicaciones</span>
                  </div>
                  <div className="p-4 border border-slate-600 hover:border-blue-400 transition-colors bg-slate-700/30">
                    <span className="text-slate-200 font-medium">Logística Trascendental</span>
                  </div>
                  <div className="p-4 border border-slate-600 hover:border-purple-400 transition-colors bg-slate-700/30">
                    <span className="text-slate-200 font-medium">Operación Minera 24/7</span>
                  </div>
                  <div className="p-4 border border-slate-600 hover:border-yellow-400 transition-colors bg-slate-700/30">
                    <span className="text-slate-200 font-medium">Energía del Presente</span>
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

export default Services;
