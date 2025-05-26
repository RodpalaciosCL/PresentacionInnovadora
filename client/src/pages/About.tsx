/**
 * About.tsx - Quiénes Somos page
 * Founders profiles and company timeline
 */

import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Target, Lightbulb, Handshake, Globe, Zap, Network, TrendingUp } from "lucide-react";
import { FounderCard } from "@/components/ui/FounderCard";
import { founders, companyApproach } from "@/data/company";

const About: React.FC = () => {
  // Company values
  const companyValues = [
    {
      icon: Shield,
      title: "Integridad",
      description: "Actuamos con transparencia y honestidad en todas nuestras relaciones comerciales."
    },
    {
      icon: Target,
      title: "Excelencia",
      description: "Buscamos la excelencia operacional en cada proyecto que desarrollamos."
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Aplicamos soluciones innovadoras para maximizar el valor de los activos."
    },
    {
      icon: Handshake,
      title: "Compromiso",
      description: "Mantenemos un compromiso inquebrantable con nuestros inversionistas y socios."
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajamos en equipo para alcanzar objetivos comunes y crear valor compartido."
    },
    {
      icon: Globe,
      title: "Sostenibilidad",
      description: "Desarrollamos proyectos que generan impacto positivo a largo plazo."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quiénes <span className="text-emerald-400">Somos</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Somos un equipo de profesionales con más de 20 años de experiencia 
              en desarrollo de infraestructura, inversiones y gestión de activos estratégicos.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 max-w-5xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-emerald-400 mb-4 text-center">Nuestra Misión</h2>
            <p className="text-lg text-slate-300 text-center leading-relaxed">
              Transformar infraestructura estratégica en oportunidades de inversión rentables y sostenibles, 
              conectando capital con activos de alto potencial en el norte de Chile para generar valor 
              compartido entre inversionistas, comunidades y el desarrollo económico regional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
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
              Socios <span className="text-emerald-400">Fundadores</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Líderes con experiencia comprobada en desarrollo de proyectos de infraestructura 
              y gestión de inversiones en el sector minero y energético.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <FounderCard key={founder.id} founder={founder} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Approach */}
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
              Nuestro <span className="text-emerald-400">Enfoque</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Metodología y estrategia de inversión en sectores innovadores y tecnológicos
            </p>
          </motion.div>

          {/* Interactive Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Central connecting line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-400 via-blue-500 to-emerald-400 rounded-full opacity-40"></div>
            
            {companyApproach.map((approach, index) => {
              const IconComponent = approach.icon === 'Target' ? Target : 
                                   approach.icon === 'Zap' ? Zap :
                                   approach.icon === 'Network' ? Network : TrendingUp;
              
              const isLeft = index % 2 === 0;
              const colors = [
                'from-emerald-500 to-emerald-600',
                'from-blue-500 to-blue-600', 
                'from-emerald-400 to-blue-500',
                'from-blue-400 to-emerald-500'
              ];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.3, type: "spring", bounce: 0.3 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-16 ${isLeft ? 'justify-start' : 'justify-end flex-row-reverse'}`}
                >
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className={`relative group max-w-lg ${isLeft ? 'mr-12' : 'ml-12'}`}
                  >
                    <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 shadow-2xl group-hover:border-emerald-400/50 transition-all duration-500">
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start mb-6">
                          <div className={`w-14 h-14 bg-gradient-to-br ${colors[index]} rounded-2xl flex items-center justify-center mr-4 shadow-xl transform group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">{approach.title}</h3>
                            <div className={`w-12 h-1 bg-gradient-to-r ${colors[index]} rounded-full`}></div>
                          </div>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-lg">{approach.description}</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Central Node */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${colors[index]} rounded-full flex items-center justify-center shadow-2xl border-4 border-slate-900 z-10`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  {/* Connecting Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.3 + 0.4 }}
                    className={`absolute top-1/2 w-8 h-1 bg-gradient-to-r ${colors[index]} rounded-full ${isLeft ? 'right-1/2 mr-8' : 'left-1/2 ml-8'} transform -translate-y-1/2`}
                  ></motion.div>
                </motion.div>
              );
            })}
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-20"
                  animate={{
                    y: [-20, -100, -20],
                    x: [Math.random() * 100, Math.random() * 200, Math.random() * 100],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
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
              Nuestros <span className="text-emerald-400">Valores</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Los principios que guían cada decisión y definen nuestra cultura corporativa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600 hover:border-emerald-400/50 transition-all duration-300 group"
                >
                  <div className="bg-emerald-500/20 p-4 rounded-lg w-fit mx-auto mb-6 group-hover:bg-emerald-500/30 transition-colors">
                    <Icon className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    {value.title}
                  </h3>
                  <p className="text-slate-300 text-center leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900/20 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Quieres conocer más sobre nuestro equipo?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Agenda una reunión para conocer en detalle nuestra experiencia y visión de negocio.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Agendar Reunión
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;