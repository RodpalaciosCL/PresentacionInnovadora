/**
 * Home.tsx - Landing page for Invenor 2.0
 * Hero section with value proposition and key metrics
 */

import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, ArrowDown, Target, TrendingUp, Building } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="text-emerald-400">Invenor:</span>
              <br />
              infraestructura que se convierte en{" "}
              <span className="text-emerald-400">rentabilidad</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto">
              Desarrollamos activos estratégicos en el norte de Chile, 
              transformando infraestructura en oportunidades de inversión sostenibles y rentables.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/opportunities">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center space-x-2 text-lg"
                >
                  <span>Explorar Oportunidades</span>
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
              </Link>
              
              <Link href="/projections">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
                >
                  Ver Proyecciones
                </motion.button>
              </Link>
            </div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-slate-400"
            >
              <ArrowDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nuestro Propósito Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestro <span className="text-emerald-400">Propósito</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Conectamos infraestructura estratégica con inversionistas visionarios, 
              creando valor sostenible en el ecosistema económico del norte de Chile.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Visión Estratégica",
                description: "Identificamos y desarrollamos activos de alto potencial en ubicaciones estratégicas del norte de Chile."
              },
              {
                icon: TrendingUp,
                title: "Rentabilidad Sostenible",
                description: "Generamos retornos consistentes a través de modelos de negocio probados y diversificados."
              },
              {
                icon: Building,
                title: "Infraestructura Clave",
                description: "Desarrollamos activos esenciales para el crecimiento económico regional y nacional."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600 hover:border-emerald-400/50 transition-all duration-300"
                >
                  <div className="bg-emerald-500/20 p-4 rounded-lg w-fit mx-auto mb-6">
                    <Icon className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-center">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* En Números Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              En <span className="text-emerald-400">Números</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Nuestro track record habla por sí solo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Estaciones Gestionadas", suffix: "" },
              { number: "2,500", label: "Hectáreas Desarrolladas", suffix: "+" },
              { number: "1,200", label: "Kilómetros de Fibra", suffix: " km" },
              { number: "US$85M", label: "En Activos Gestionados", suffix: "" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900/20 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para formar parte del futuro?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Descubre cómo nuestros activos estratégicos pueden transformar tu portafolio de inversiones.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Contacta con Nosotros
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;