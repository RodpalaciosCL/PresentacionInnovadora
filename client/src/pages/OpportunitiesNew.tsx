/**
 * OpportunitiesNew.tsx - Redesigned Opportunities page with cool bullet design
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Factory, Building, Network, DollarSign, TrendingUp, Users, BarChart3, ChevronRight } from "lucide-react";
import { EstacionesTab } from "@/components/opportunities/EstacionesTab";
import { investmentOpportunities } from "@/data/company";
import dataCenterImage from "@assets/image_1748283427285.png";
import puchuncaviMap from "@assets/Captura de pantalla 2025-05-26 a la(s) 14.11.31.png";

const OpportunitiesNew: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Project details data - redesigned
  const getProjectDetails = (projectTitle: string) => {
    const projectData = {
      "Hub Norte": {
        title: "Hub de Innovación Minera",
        subtitle: "Primer hub de innovación minera del desierto más árido del mundo",
        fee: "Desde US$2,500",
        feeLabel: "Arriendo/Módulo/Mes",
        area: "15,000",
        areaLabel: "m² de Innovación",
        description: "Oportunidad única para participar en la creación y desarrollo del primer hub de innovación minera de la región, emplazado en el desierto más árido del mundo donde confluyen las mineras más grandes del planeta.",
        features: [
          { name: "Centro de Convenciones", area: "2,000", status: "En Desarrollo", statusColor: "orange" },
          { name: "3 Espacios de Cowork", area: "900", status: "Disponible", statusColor: "emerald" },
          { name: "5 Laboratorios de Innovación", area: "1,500", status: "Disponible", statusColor: "emerald" },
          { name: "+100 Oficinas Modulares", area: "8,000", status: "Disponible", statusColor: "emerald" },
          { name: "Cafetería, Restaurant, Gimnasio", area: "1,200", status: "En Desarrollo", statusColor: "orange" },
          { name: "200 Estacionamientos", area: "1,400", status: "Planificado", statusColor: "blue" }
        ],
        specialNote: "Un hub donde confluyen mineras, compañías de oil&gas, de energía, universidades y otros, donde se respirará y vivirá la innovación."
      }
    };
    
    return projectData[projectTitle as keyof typeof projectData] || projectData["Hub Norte"];
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Negocios & <span className="text-emerald-400">Oportunidades</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Portafolio diversificado de activos estratégicos con potencial de crecimiento
              sostenible y retornos atractivos para inversionistas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Investment Opportunities Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Selecciona cualquier proyecto para ver información detallada
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Hub Norte", 
                description: "Centro de Innovación Minera",
                image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1748282529/hub_norte_websab.jpg"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/50 rounded-xl overflow-hidden border border-slate-600 hover:border-emerald-400/50 transition-all duration-300 flex flex-col"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-300 text-sm flex-grow">{project.description}</p>
                  <button
                    onClick={() => setSelectedProject(project.title)}
                    className="mt-4 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Ver Detalle</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Cool Project Details Section */}
      {selectedProject && (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900/10 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-800/80 via-slate-900/90 to-emerald-900/20 rounded-3xl border border-emerald-500/20 overflow-hidden backdrop-blur-sm shadow-2xl"
            >
              {/* Header */}
              <div className="relative p-8 pb-0">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/30 to-emerald-600/20 rounded-2xl flex items-center justify-center border border-emerald-500/30">
                      <Building className="h-8 w-8 text-emerald-400" />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent">
                        {getProjectDetails(selectedProject).title}
                      </h2>
                      <p className="text-emerald-300 text-lg mt-1">
                        {getProjectDetails(selectedProject).subtitle}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-12 h-12 bg-slate-700/50 hover:bg-slate-600/50 rounded-xl flex items-center justify-center transition-all duration-200 group border border-slate-600/50"
                  >
                    <svg className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-8 pt-0">
                {/* Left Side - Image and Stats */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Hero Image */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 group">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/C4E12AQHTZ7pyTmCfEw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1541423067327?e=2147483647&v=beta&t=9abkfOQ8EpfquDBzmeLUFCXCEUxTEm2GtpvaBMOOEnw"
                      alt="Hub de Innovación Minera"
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center space-x-2 text-white">
                        <MapPin className="h-5 w-5 text-emerald-400" />
                        <span className="text-sm font-medium">Desierto de Atacama, Chile</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Summary Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-xl p-6 hover:from-emerald-500/30 hover:to-emerald-600/20 transition-all duration-300"
                    >
                      <div className="text-3xl font-bold text-emerald-400 mb-2">
                        {getProjectDetails(selectedProject).area}
                      </div>
                      <div className="text-sm text-emerald-200 uppercase tracking-wide font-medium">
                        {getProjectDetails(selectedProject).areaLabel}
                      </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-xl p-6 hover:from-blue-500/30 hover:to-blue-600/20 transition-all duration-300"
                    >
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        {getProjectDetails(selectedProject).fee}
                      </div>
                      <div className="text-sm text-blue-200 uppercase tracking-wide font-medium">
                        {getProjectDetails(selectedProject).feeLabel}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="lg:col-span-3 space-y-8">
                  {/* Description */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="bg-gradient-to-r from-slate-800/30 to-slate-700/20 border border-slate-700/50 rounded-2xl p-8"
                  >
                    <p className="text-slate-200 leading-relaxed text-lg">
                      {getProjectDetails(selectedProject).description}
                    </p>
                  </motion.div>

                  {/* Features Grid */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                      <h3 className="text-2xl font-bold text-white">Componentes del Proyecto</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {getProjectDetails(selectedProject).features.map((feature, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="group"
                        >
                          <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-slate-600/50 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-slate-800/70 hover:shadow-lg hover:shadow-emerald-500/10">
                            <div className="absolute top-3 right-3">
                              <span className={`inline-flex w-3 h-3 rounded-full ${
                                feature.statusColor === "emerald" 
                                  ? "bg-emerald-400 shadow-lg shadow-emerald-400/50" 
                                  : feature.statusColor === "yellow"
                                  ? "bg-yellow-400 shadow-lg shadow-yellow-400/50"
                                  : feature.statusColor === "blue"
                                  ? "bg-blue-400 shadow-lg shadow-blue-400/50"
                                  : "bg-orange-400 shadow-lg shadow-orange-400/50"
                              }`}></span>
                            </div>
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/30 transition-colors border border-emerald-500/30">
                                <div className="w-6 h-6 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-white font-semibold mb-2 leading-tight group-hover:text-emerald-100 transition-colors">
                                  {feature.name}
                                </h4>
                                <div className="flex items-center justify-between">
                                  <span className="text-slate-400 text-sm font-medium">
                                    {feature.area} m²
                                  </span>
                                  <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${
                                    feature.statusColor === "emerald" 
                                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" 
                                      : feature.statusColor === "yellow"
                                      ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                                      : feature.statusColor === "blue"
                                      ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                                      : "bg-orange-500/20 text-orange-300 border-orange-500/30"
                                  }`}>
                                    {feature.status}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Special Note */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-blue-500/10 border border-emerald-500/30 rounded-2xl p-8"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 border border-emerald-500/30">
                        <TrendingUp className="h-6 w-6 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="text-emerald-300 font-semibold mb-3 text-lg">Visión del Proyecto</h4>
                        <p className="text-emerald-100 leading-relaxed">
                          {getProjectDetails(selectedProject).specialNote}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default OpportunitiesNew;