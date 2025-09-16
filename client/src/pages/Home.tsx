/**
 * Home.tsx - Landing page for Invenor 2.0
 * Hero section with value proposition and key metrics
 */

import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, ArrowDown, Target, TrendingUp, Building, Zap, Globe, Users, MapPin } from "lucide-react";
import { useCounter } from "@/hooks/use-counter";
import logoInvenor from "@assets/logo1.png";
import puchuncaviMap from "@assets/Captura de pantalla 2025-05-26 a la(s) 14.11.31.png";
import dataCenterImage from "@assets/image_1748283427285.png";
import { businessMetrics } from "@/data/company";
import { LazyImage } from "@/components/ui/LazyImage";
import { Skeleton } from "@/components/ui/skeleton";
import { useTypewriter } from "@/hooks/useTypewriter";

const TypewriterText: React.FC = () => {
  const { displayText } = useTypewriter({
    text: "infraestructura que se convierte en rentabilidad",
    speed: 120,
    delay: 1000
  });

  const renderText = () => {
    // Dividir el texto para mostrar el salto de línea original
    const fullText = displayText;
    
    if (fullText.includes('convierte en ')) {
      const beforeConvierte = fullText.split('convierte en ')[0];
      const afterConvierte = fullText.slice((beforeConvierte + 'convierte en ').length);
      
      return (
        <>
          {beforeConvierte} se<br />
          convierte en <span className="text-emerald-400">{afterConvierte}</span>
        </>
      );
    }
    
    if (fullText.includes(' se')) {
      return (
        <>
          {fullText}<br />
        </>
      );
    }
    
    return fullText;
  };

  return (
    <div className="text-center">
      {renderText()}
      <span className="animate-pulse text-emerald-400 ml-1">|</span>
    </div>
  );
};

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
              <div className="flex justify-center items-center mb-2">
                <img 
                  src={logoInvenor}
                  alt="Invenor"
                  className="h-48 md:h-56"
                />
              </div>
              <div className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <TypewriterText />
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

      {/* Nuestro Foco Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestro <span className="text-emerald-400">Foco</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Demandas Disruptivas */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-emerald-500/20 p-4 rounded-xl mr-4">
                  <Zap className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Enfoque Disruptivo</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Abordar de manera disruptiva y asertiva las demandas de las industrias más exigentes del mundo, 
                posicionándonos como pioneros en soluciones innovadoras.
              </p>
            </motion.div>

            {/* Portfolio Estratégico */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-emerald-500/20 p-4 rounded-xl mr-4">
                  <MapPin className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Portfolio Estratégico</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Parte esencial de nuestro portfolio de predios disponibles se encuentra en el centro 
                y especialmente el norte de Chile, región clave para el desarrollo económico nacional.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Scope Diversificado */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-emerald-500/20 p-4 rounded-xl mr-4">
                  <Globe className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Scope Diversificado</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Diversificamos nuestro alcance de posibilidades para desarrollar lo que se necesita y requiere, 
                no sólo a nivel industria, sino a nivel nacional.
              </p>
            </motion.div>

            {/* Conexión y Crecimiento */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-emerald-500/20 p-4 rounded-xl mr-4">
                  <Users className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Conexión y Crecimiento</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Conexión no sólo de negocios, sino también de personas, aportando a optimizar, mejorar 
                y disponibilizar oportunidades de crecimiento para el país y quienes viven en él.
              </p>
            </motion.div>
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

          {/* Horizontal Bullets List */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Hub Norte", description: "Centro de Innovación Minera" },
                { title: "Terrenos disponibles", description: "Red de +500 predios disponibles en 1.200kms de extensión" },
                { title: "Centro logístico multimodal", description: "Terminal ferroviaria y centro de distribución" },
                { title: "Fibra Oscura", description: "Infraestructura de telecomunicaciones" },
                { title: "Data Center", description: "Centro de datos de alta tecnología" },
                { title: "Energía Solar", description: "Proyectos de energía renovable" },
                { title: "Storage de Baterías Industriales", description: "Almacenamiento de energía a gran escala" },
                { title: "Puerto Seco", description: "Terminal ferroviaria multimodal" },
                { title: "Estaciones de Servicio", description: "Red de estaciones combustible" }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-slate-700/30 border border-slate-600/50 hover:border-emerald-400/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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