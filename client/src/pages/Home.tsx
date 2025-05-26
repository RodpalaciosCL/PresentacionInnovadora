/**
 * Home.tsx - Landing page for Invenor 2.0
 * Hero section with value proposition and key metrics
 */

import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, ArrowDown, Target, TrendingUp, Building } from "lucide-react";
import { useCounter } from "@/hooks/use-counter";
import logoInvenor from "@assets/Invenor (Instagram Post (45)).png";
import { businessMetrics } from "@/data/company";
import { LazyImage } from "@/components/ui/LazyImage";
import { Skeleton } from "@/components/ui/skeleton";

const Home: React.FC = () => {
  const [showImageGallery, setShowImageGallery] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/hero-fallback.jpg"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            {/* Fallback image */}
            <LazyImage
              src="/hero-fallback.jpg"
              alt="Infraestructura del norte de Chile"
              className="w-full h-full object-cover"
              priority
            />
          </video>
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-900/60" />
        
        {/* Rieles de tren como fondo */}
        <div className="absolute inset-0 opacity-10">
          {/* Líneas horizontales simulando rieles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-0 right-0 h-0.5 bg-emerald-400"
              style={{
                top: `${20 + i * 12}%`,
                transform: `rotate(${-2 + Math.random() * 4}deg)`
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Puntos simulando clavos/fijaciones de rieles */}
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={`dot-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${5 + (i % 10) * 9}%`,
                top: `${15 + Math.floor(i / 10) * 15}%`
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1
              }}
            />
          ))}
        </div>
        
        {/* Animated background elements (optional) */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 rounded-full bg-emerald-400/10"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <div className="flex justify-center items-center mb-6">
                <img 
                  src={logoInvenor}
                  alt="Inversiones del Norte"
                  className="h-40 md:h-48"
                />
              </div>
              <div className="text-center">
                infraestructura que se<br />
                convierte en <span className="text-emerald-400">rentabilidad</span>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto">
              Desarrollamos activos estratégicos en el norte de Chile, 
              transformando infraestructura en oportunidades de inversión sostenibles y rentables.
            </p>
            
            {/* Fix 1: CTA único centrado */}
            <div className="flex justify-center mb-16">
              <Link href="/opportunities">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-10 py-5 rounded-lg transition-colors flex items-center space-x-3 text-xl shadow-2xl shadow-emerald-500/25"
                >
                  <span>Explorar Oportunidades</span>
                  <ChevronRight className="h-6 w-6" />
                </motion.button>
              </Link>
            </div>
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
              Disponemos de algo único en el mercado
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessMetrics.map((metric, index) => {
              const numericValue = parseInt(metric.value.replace(/[^\d]/g, '')) || 0;
              const count = useCounter({ target: numericValue, duration: 2000 });
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {metric.value.includes('US$') ? `US$${Math.round(count)}M` : 
                     metric.value.includes('+') ? `${Math.round(count)}+` :
                     metric.value.includes('km') ? `${Math.round(count)} km` :
                     Math.round(count)}
                  </motion.div>
                  <div className="text-slate-300 font-medium mb-2">
                    {metric.label}
                  </div>
                  {metric.description && (
                    <div className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      {metric.description}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proyectos Destacados Section - Demo LazyImage y Skeletons */}
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
              Proyectos <span className="text-emerald-400">Destacados</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Descubre nuestros activos estratégicos en desarrollo
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Hub Norte", description: "Centro logístico estratégico" },
              { title: "Estaciones Ferroviarias", description: "Red de 500+ estaciones" },
              { title: "Puchuncaví", description: "Desarrollo inmobiliario premium" },
              { title: "Fibra Oscura", description: "Infraestructura de telecomunicaciones" },
              { title: "Zona Franca", description: "Complejo comercial internacional" },
              { title: "Puerto Seco", description: "Terminal multimodal" }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-600 hover:border-emerald-400/50 transition-all duration-300"
              >
                <LazyImage
                  src={`https://picsum.photos/400/300?random=${index + 1}`}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-300">
                    {project.description}
                  </p>
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