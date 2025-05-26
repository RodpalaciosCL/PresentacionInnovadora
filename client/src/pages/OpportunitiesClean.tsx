/**
 * OpportunitiesClean.tsx - Diseño nuevo, limpio y sin menciones de dinero
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Building, TrendingUp, CheckCircle, Clock, AlertCircle } from "lucide-react";

const OpportunitiesClean: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Data del Hub Norte sin menciones de dinero
  const hubNorteData = {
    title: "Hub de Innovación Minera",
    subtitle: "Primer hub de innovación minera del desierto más árido del mundo",
    description: "Oportunidad única para participar en la creación y desarrollo del primer hub de innovación minera de la región, emplazado en el desierto más árido del mundo donde confluyen las mineras más grandes del planeta.",
    components: [
      { name: "Centro de Convenciones", area: "2.000", status: "En Desarrollo", icon: "🏢" },
      { name: "3 Espacios de Cowork", area: "900", status: "Disponible", icon: "💼" },
      { name: "5 Laboratorios de Innovación", area: "1.500", status: "Disponible", icon: "🔬" },
      { name: "+100 Oficinas Modulares", area: "8.000", status: "Disponible", icon: "🏗️" },
      { name: "Cafetería, Restaurant, Gimnasio", area: "1.200", status: "En Desarrollo", icon: "🍽️" },
      { name: "200 Estacionamientos", area: "1.400", status: "Planificado", icon: "🚗" }
    ],
    vision: "Un hub donde confluyen mineras, compañías de oil&gas, de energía, universidades y otros, donde se respirará y vivirá la innovación."
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Disponible": return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "En Desarrollo": return "bg-orange-500/20 text-orange-300 border-orange-500/30";
      case "Planificado": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      default: return "bg-slate-500/20 text-slate-300 border-slate-500/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Disponible": return <CheckCircle className="h-4 w-4" />;
      case "En Desarrollo": return <Clock className="h-4 w-4" />;
      case "Planificado": return <AlertCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-emerald-900/20">
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
              sostenible en el norte de Chile
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/C4E12AQHTZ7pyTmCfEw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1541423067327?e=2147483647&v=beta&t=9abkfOQ8EpfquDBzmeLUFCXCEUxTEm2GtpvaBMOOEnw"
                alt="Hub Norte"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Hub Norte</h3>
                <p className="text-slate-300 text-sm mb-4">Centro de Innovación Minera</p>
                <button
                  onClick={() => setSelectedProject("Hub Norte")}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  Ver Detalle
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      {selectedProject === "Hub Norte" && (
        <section className="py-20 bg-slate-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden"
            >
              {/* Header */}
              <div className="p-8 border-b border-slate-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                      <Building className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{hubNorteData.title}</h2>
                      <p className="text-emerald-300 text-lg">{hubNorteData.subtitle}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-slate-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left - Image */}
                  <div className="lg:col-span-1">
                    <div className="relative rounded-xl overflow-hidden">
                      <img 
                        src="https://media.licdn.com/dms/image/v2/C4E12AQHTZ7pyTmCfEw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1541423067327?e=2147483647&v=beta&t=9abkfOQ8EpfquDBzmeLUFCXCEUxTEm2GtpvaBMOOEnw"
                        alt="Hub de Innovación Minera"
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                          <div className="flex items-center space-x-2 text-white">
                            <MapPin className="h-4 w-4 text-emerald-400" />
                            <span className="text-sm font-medium">Desierto de Atacama, Chile</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Description */}
                    <div className="bg-slate-700/30 rounded-xl p-6">
                      <p className="text-slate-200 leading-relaxed text-lg">
                        {hubNorteData.description}
                      </p>
                    </div>

                    {/* Components Grid */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span>Componentes del Proyecto</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {hubNorteData.components.map((component, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50 hover:border-emerald-500/50 transition-all duration-200"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="text-2xl">
                                {component.icon}
                              </div>
                              <div className="flex-1">
                                <h4 className="text-white font-medium leading-tight">
                                  {component.name}
                                </h4>
                                <p className="text-slate-400 text-sm">
                                  {component.area} m²
                                </p>
                              </div>
                              <div className={`flex items-center space-x-1 px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(component.status)}`}>
                                {getStatusIcon(component.status)}
                                <span>{component.status}</span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Vision */}
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="h-5 w-5 text-emerald-400" />
                        </div>
                        <div>
                          <h4 className="text-emerald-300 font-semibold mb-2">Visión del Proyecto</h4>
                          <p className="text-emerald-100 leading-relaxed">
                            {hubNorteData.vision}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default OpportunitiesClean;