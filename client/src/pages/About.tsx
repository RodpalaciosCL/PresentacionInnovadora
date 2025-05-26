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
import { useLanguage } from "@/context/LanguageContext";

const About: React.FC = () => {
  const { t } = useLanguage();
  
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
              {t('about.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              {t('about.hero.subtitle')}
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 max-w-5xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-emerald-400 mb-4 text-center">{t('about.mission.title')}</h2>
            <p className="text-lg text-slate-300 text-center leading-relaxed">
              {t('about.mission.description')}
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
              {t('about.founders.title')}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t('about.founders.subtitle')}
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
              {t('about.approach.title')}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t('about.approach.subtitle')}
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
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="group relative"
                >
                  <div className="relative bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 border border-slate-600/50 shadow-2xl hover:border-emerald-400/60 hover:shadow-emerald-500/20 hover:transform hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden">
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
                            {t(`about.approach.items.${approach.key}.title`)}
                          </h3>
                          <div className={`w-16 h-1 bg-gradient-to-r ${colors[index]} rounded-full mt-2`}></div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-slate-300 leading-relaxed text-base">
                        {t(`about.approach.items.${approach.key}.description`)}
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
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t('about.values.subtitle')}
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
              {t('about.cta.title')}
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              {t('about.cta.subtitle')}
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                {t('about.cta.button')}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;