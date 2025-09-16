/**
 * OpportunitiesClean.tsx - Diseño nuevo, limpio y sin menciones de dinero
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Building, TrendingUp, CheckCircle, Clock, AlertCircle } from "lucide-react";
// import hubNorteProjectImage from "@assets/Captura de pantalla 2025-05-26 a la(s) 15.46.12.png";
import dataCenterImage from "@assets/image_1748283427285.png";
import puchuncaviMap from "@assets/Captura de pantalla 2025-05-26 a la(s) 14.11.31.png";

const OpportunitiesClean: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [mapModalOpen, setMapModalOpen] = useState(false);

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

      {/* Investment Opportunities Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Hub Norte", 
                description: "Centro de Innovación Minera",
                image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1748282529/hub_norte_websab.jpg"
              },
              { 
                title: "Terrenos disponibles", 
                description: "Lotes industriales estratégicos",
                image: "https://static.twproject.com/blog/wp-content/uploads/2020/12/master-plan-scaled.jpg"
              },
              { 
                title: "Centro logístico multimodal", 
                description: "Terminal ferroviaria y centro de distribución",
                image: "https://lgedesignbuild.com/wp-content/uploads/2023/09/LGE-Airpark-Logistics-Center-5-1.jpg"
              },
              { 
                title: "Fibra Oscura", 
                description: "Infraestructura de telecomunicaciones",
                image: "https://www.kei-ind.com/wp-content/uploads/2023/05/underground-power-cable-blog.jpg"
              },
              { 
                title: "Data Center", 
                description: "Centro de datos de alta tecnología",
                image: dataCenterImage
              },
              { 
                title: "Energía Solar", 
                description: "Proyectos de energía renovable",
                image: "https://media.cnn.com/api/v1/images/stellar/prod/210908100821-solar-farm-california-0711-file-restricted.jpg?q=x_3,y_153,h_1368,w_2431,c_crop/h_833,w_1480"
              },
              { 
                title: "Storage de Baterías Industriales", 
                description: "Almacenamiento de energía a gran escala",
                image: "https://media.cnn.com/api/v1/images/stellar/prod/210908100821-solar-farm-california-0711-file-restricted.jpg?q=x_3,y_153,h_1368,w_2431,c_crop/h_833,w_1480"
              },
              { 
                title: "Puerto Seco", 
                description: "Terminal ferroviaria multimodal",
                image: "https://noriegagrupologistico.com/wp-content/uploads/terminal-ferroviaria.jpg"
              },
              { 
                title: "Estaciones de Servicio", 
                description: "Red de estaciones combustible",
                image: "https://creagermerc.com/wp-content/uploads/2021/02/33808902_s.jpg"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                  <button
                    onClick={() => setSelectedProject(project.title)}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    Ver Detalle
                  </button>
                </div>
              </motion.div>
            ))}
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
                        src="https://lgedesignbuild.com/wp-content/uploads/2023/09/LGE-Airpark-Logistics-Center-5-1.jpg"
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

      {/* Donde las papas queman Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              "¡Donde las papas <span className="text-emerald-400">queman</span>!"
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              En el epicentro de la inversión minera mundial
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Noticia 1: Fusión Anglo American - Teck */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/60 rounded-2xl border border-slate-700 overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src="https://elceo.com/wp-content/uploads/2025/09/Anglo_American_y_Teck_Resources_se_fucionan-1.jpg"
                    alt="Fusión Anglo American y Teck Resources"
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-emerald-500/90 text-white text-sm font-medium rounded-full">
                      FUSIÓN HISTÓRICA
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-slate-400 text-sm mb-2">Enero 2025</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Anglo American y Teck Resources: La mayor transacción minera de la década
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    La confirmada fusión busca consolidar la producción de Collahuasi y Quebrada Blanca en el norte de Chile, 
                    configurando un complejo que podría convertirse en la operación de cobre más grande del planeta hacia 
                    inicios de la década de 2030, superando las <strong className="text-emerald-400">1,35 millones de toneladas anuales</strong>.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="text-emerald-400 font-bold text-lg">$800M</div>
                      <div className="text-slate-400 text-sm">Sinergias anuales</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="text-emerald-400 font-bold text-lg">15km</div>
                      <div className="text-slate-400 text-sm">Cinta transportadora</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Noticia 2: BHP - 14.000 millones */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/60 rounded-2xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src="https://kimberly.cl/wp-content/uploads/2023/07/ESCONDIDA-BHP-LOGO.webp"
                    alt="BHP Escondida inversión"
                    className="w-full h-64 lg:h-full object-contain bg-slate-900 p-6"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500/90 text-white text-sm font-medium rounded-full">
                      MEGA INVERSIÓN
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-slate-400 text-sm mb-2">Noviembre 2024</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    BHP anuncia inversión récord de US$14.000 millones en Chile
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    La minera australiana confirmó que Chile es un "país estable para la inversión" y planea aumentar 
                    su producción de cobre a <strong className="text-blue-400">1,4 millones de toneladas anuales</strong>, 
                    con proyectos en Escondida, Laguna Seca y Pampa Norte hasta 2032.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">Escondida</span>
                        <span className="text-blue-400 font-bold">$7.300M - $9.800M</span>
                      </div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">Pampa Norte</span>
                        <span className="text-blue-400 font-bold">$2.800M - $3.900M</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Noticia 3: Ecosistema minero */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-slate-800/60 rounded-2xl border border-slate-700 overflow-hidden hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative cursor-pointer group" onClick={() => setMapModalOpen(true)}>
                  <div 
                    className="w-full h-64 lg:h-full bg-cover bg-center relative"
                    style={{ 
                      backgroundImage: `url('https://www.nsenergybusiness.com/wp-content/uploads/sites/4/2019/11/Olimpiada-gold-mine-Polyus.png')`
                    }}
                  >
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6l4 2" />
                          </svg>
                        </div>
                        <div className="text-white font-semibold">Ver Mapa Minero</div>
                        <div className="text-amber-300 text-sm">Click para expandir</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-amber-500/90 text-white text-sm font-medium rounded-full">
                      ECOSISTEMA MINERO
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-slate-400 text-sm mb-2">Próximos 10 años</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    El epicentro de billones: Gigantes mineros convergen en el norte
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Minera Sierra Gorda, Capstone, Codelco, Anglo American y BHP están ubicados estratégicamente 
                    cerca de nuestros proyectos. En los próximos 10 años se moverán <strong className="text-amber-400">billones de dólares</strong> 
                    en esta zona, convirtiendo el norte de Chile en el centro neurálgico de la minería mundial.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {['Sierra Gorda', 'Capstone', 'Codelco', 'Anglo American'].map((company, index) => (
                      <div key={index} className="bg-slate-700/50 rounded-lg p-2 text-center">
                        <div className="text-sm text-white font-medium">{company}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-amber-500/20 rounded-lg p-4">
                    <div className="text-amber-400 font-bold text-xl">Zona de Oportunidad Estratégica</div>
                    <div className="text-slate-300 text-sm">Mayor concentración de inversión minera mundial</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal del Mapa Minero */}
      {mapModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-[95vw] h-[95vh] bg-black overflow-hidden"
          >
            <button
              onClick={() => setMapModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center transition-all duration-200"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-full h-full flex items-center justify-center relative">
              <img
                src="https://www.cochilco.cl/web/wp-content/uploads/2024/04/Mapa_Minero_2023_001.png"
                alt="Mapa Minero Detallado del Norte de Chile"
                className="w-auto h-[90vh] max-w-[90vw] object-contain"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 px-4 py-2 rounded-lg">
                <p className="text-slate-300 text-sm text-center">
                  Fuente: COCHILCO - Comisión Chilena del Cobre
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default OpportunitiesClean;