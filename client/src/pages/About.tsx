/**
 * About.tsx - Quiénes Somos page
 * Founders profiles and company timeline
 */

import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Target, Lightbulb, Handshake, Globe, Zap, Network, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { FounderCard } from "@/components/ui/FounderCard";
import { founders, companyApproach } from "@/data/company";

const About: React.FC = () => {
  // Company values
  const companyValues = [
    {
      icon: Shield,
      title: "Integridad",
      description: "Actuamos con transparencia y honestidad en nuestras relaciones comerciales."
    },
    {
      icon: Target,
      title: "Excelencia",
      description: "Buscamos la excelencia operacional en cada proyecto desarrollado."
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Aplicamos soluciones innovadoras para maximizar el valor de activos."
    },
    {
      icon: Handshake,
      title: "Compromiso",
      description: "Mantenemos compromiso inquebrantable con inversionistas y socios."
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajamos en equipo para alcanzar objetivos y crear valor compartido."
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
              en desarrollo de proyectos de alta rentabilidad, para distintas industrias alrededor de todo el mundo.
            </p>
          </motion.div>

          {/* Mission Statement - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-6xl mx-auto"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 rounded-3xl blur-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl border border-emerald-500/20"></div>
            
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-emerald-400/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-400/10 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-5 w-16 h-16 bg-emerald-400/15 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/4 right-10 w-12 h-12 bg-emerald-400/25 rounded-full animate-pulse delay-700"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-12 md:p-16">
              {/* Icon and Title */}
              <motion.div 
                className="text-center mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl mb-6 shadow-lg shadow-emerald-500/25">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 bg-clip-text text-transparent mb-4">
                  Nuestra Misión
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full"></div>
              </motion.div>

              {/* Mission Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light">
                  Transformar <span className="text-emerald-400 font-semibold">infraestructura estratégica</span> en oportunidades de <span className="text-emerald-400 font-semibold">inversión rentables</span>,
                  <br className="hidden md:block" />
                  conectando capital con activos de alto potencial en el <span className="text-emerald-400 font-semibold">norte de Chile</span>.
                </p>
              </motion.div>

              {/* Key Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              >
                <div className="text-center group">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-500/30 transition-colors">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-emerald-400 font-semibold mb-2">Infraestructura</h3>
                  <p className="text-sm text-slate-400">Activos estratégicos</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-500/30 transition-colors">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-emerald-400 font-semibold mb-2">Inversión</h3>
                  <p className="text-sm text-slate-400">Alto rendimiento</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-500/30 transition-colors">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-emerald-400 font-semibold mb-2">Norte de Chile</h3>
                  <p className="text-sm text-slate-400">Potencial estratégico</p>
                </div>
              </motion.div>
            </div>
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
              Un equipo de primer nivel para escalar estratégicamente inversiones
              en oportunidades controladas y únicas del mercado chileno.
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

          {/* Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {companyApproach.map((approach, index) => {
              const IconComponent = approach.icon === 'Target' ? Target : 
                                   approach.icon === 'Zap' ? Zap :
                                   approach.icon === 'Network' ? Network : TrendingUp;
              
              const colors = [
                'from-emerald-500 to-emerald-600',
                'from-blue-500 to-blue-600', 
                'from-emerald-400 to-blue-500',
                'from-blue-400 to-emerald-500'
              ];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                  className="group relative"
                >
                  <div className="relative bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 border border-slate-600/50 shadow-2xl hover:border-emerald-400/60 hover:shadow-emerald-500/20 transition-all duration-200 ease-out overflow-hidden">
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors[index]}`}></div>
                    
                    <div className="relative z-10">
                      {/* Icon and Title */}
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${colors[index]} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                            {approach.title}
                          </h3>
                          <div className={`w-16 h-1 bg-gradient-to-r ${colors[index]} rounded-full mt-2`}></div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-slate-300 leading-relaxed text-base">
                        {approach.description}
                      </p>
                    </div>
                    
                    {/* Subtle corner decoration */}
                    <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <IconComponent className="h-12 w-12 text-emerald-400" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Agendar Reunión
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ¿Por qué <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">nosotros</span>?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-emerald-500/20 shadow-2xl">
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-emerald-400/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-400/20 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-purple-400/30 rounded-full animate-pulse delay-500"></div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div>
                    <div className="mb-8">
                      <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-400 text-sm font-semibold mb-4">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        20+ años de experiencia
                      </div>
                      
                      <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-6">
                        Porque llevamos <span className="text-emerald-400 font-semibold">más de 20 años</span> gestionando negocios, implementando soluciones y monetizando oportunidades para las <span className="text-blue-400 font-semibold">industrias más desafiantes</span> actualmente existentes.
                      </p>

                      <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Trabajamos para los <span className="text-purple-400 font-semibold">clientes más grandes del mundo</span>, y hoy tenemos una oportunidad de explotación única, de assets altamente cualificados para transformar cualquier income que se tenga en mente.
                      </p>

                      <p className="text-lg text-slate-300 leading-relaxed">
                        Nos transformamos en el <span className="text-emerald-400 font-semibold">main revenue</span> del negocio al cual aportemos o nos acoplemos.
                      </p>
                    </div>
                  </div>

                  {/* Right Content - Industries */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Industrias que Transformamos</h3>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <motion.div
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="flex items-center p-4 bg-slate-700/50 rounded-2xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all"
                      >
                        <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Comunicaciones</h4>
                          <p className="text-slate-400 text-sm">Redes de telecomunicaciones avanzadas</p>
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="flex items-center p-4 bg-slate-700/50 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all"
                      >
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Logística Transcedental</h4>
                          <p className="text-slate-400 text-sm">Operación 24/7 con tracking avanzado</p>
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="flex items-center p-4 bg-slate-700/50 rounded-2xl border border-yellow-500/20 hover:border-yellow-400/50 transition-all"
                      >
                        <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Operación Minera 24/7</h4>
                          <p className="text-slate-400 text-sm">Minería sostenible y eficiente</p>
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="flex items-center p-4 bg-slate-700/50 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all"
                      >
                        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Energía del Presente</h4>
                          <p className="text-slate-400 text-sm">Soluciones energéticas actuales y sostenibles</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Bottom Statement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-12 text-center"
                >
                  <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl p-8 border border-emerald-500/20">
                    <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light">
                      Hablamos de participar en la <span className="text-emerald-400 font-semibold">industria de las comunicaciones</span>, la <span className="text-blue-400 font-semibold">logística transcendental</span>, la <span className="text-yellow-400 font-semibold">operación minera 24/7</span>, la <span className="text-purple-400 font-semibold">energía del presente</span> (no del futuro), y la forma de operar <span className="text-emerald-400 font-semibold">100% sostenible y sustentable en el tiempo</span>.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;