/**
 * Opportunities.tsx - Negocios & Oportunidades page
 * Interactive tabs for different business opportunities
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Factory, Building, Network, DollarSign, TrendingUp, Users, BarChart3, ChevronRight } from "lucide-react";
import { EstacionesTab } from "@/components/opportunities/EstacionesTab";
import { investmentOpportunities } from "@/data/company";
import dataCenterImage from "@assets/image_1748283427285.png";
import puchuncaviMap from "@assets/Captura de pantalla 2025-05-26 a la(s) 14.11.31.png";

const Opportunities: React.FC = () => {
  const [activeTab, setActiveTab] = useState("estaciones");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Project details data
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
        stations: [
          { name: "Centro de Convenciones", location: "Desierto de Atacama", area: "2,000", fee: "Desde US$8,000", status: "En Desarrollo", statusColor: "orange" },
          { name: "3 Espacios de Cowork", location: "Desierto de Atacama", area: "900", fee: "Desde US$1,800", status: "Disponible", statusColor: "emerald" },
          { name: "5 Laboratorios de Innovación", location: "Desierto de Atacama", area: "1,500", fee: "Desde US$4,500", status: "Disponible", statusColor: "emerald" },
          { name: "+100 Oficinas Modulares", location: "Desierto de Atacama", area: "8,000", fee: "Desde US$2,500", status: "Disponible", statusColor: "emerald" },
          { name: "Cafetería, Restaurant, Gimnasio", location: "Desierto de Atacama", area: "1,200", fee: "Desde US$3,200", status: "En Desarrollo", statusColor: "orange" },
          { name: "200 Estacionamientos", location: "Desierto de Atacama", area: "1,400", fee: "Incluido", status: "Planificado", statusColor: "blue" }
        ],
        specialNote: "Un hub donde confluyen mineras, compañías de oil&gas, de energía, universidades y otros, donde se respirará y vivirá la innovación."
      },
      "Terrenos disponibles": {
        title: "Red de Terrenos Estratégicos",
        subtitle: "500+ Predios Norte de Chile",
        fee: "US$8,300",
        feeLabel: "Arriendo Promedio/Mes",
        area: "300.000",
        areaLabel: "Hectáreas Totales",
        stations: [
          { name: "Terreno Antofagasta Norte", location: "Antofagasta", area: "2.500", fee: "US$8,500", status: "Disponible", statusColor: "emerald" },
          { name: "Terreno Calama Industrial", location: "Calama", area: "3.200", fee: "US$12,000", status: "Arrendado", statusColor: "yellow" },
          { name: "Terreno Iquique Puerto", location: "Iquique", area: "1.800", fee: "US$6,500", status: "Disponible", statusColor: "emerald" },
          { name: "Terreno Atacama Central", location: "Copiapó", area: "2.800", fee: "US$9,500", status: "En Desarrollo", statusColor: "orange" },
          { name: "Terreno Coquimbo Hub", location: "La Serena", area: "2.200", fee: "US$7,800", status: "Disponible", statusColor: "emerald" },
          { name: "Terreno Arica Frontera", location: "Arica", area: "1.600", fee: "US$5,500", status: "Arrendado", statusColor: "yellow" }
        ]
      },
      "Puchuncaví": {
        title: "Terreno Puchuncaví Premium",
        subtitle: "Desarrollo Inmobiliario",
        fee: "US$15,000",
        feeLabel: "Precio por Hectárea/Mes",
        area: "300",
        areaLabel: "Hectáreas Totales",
        stations: [
          { name: "Sector Norte Premium", location: "Puchuncaví", area: "80", fee: "US$18,000", status: "Disponible", statusColor: "emerald" },
          { name: "Sector Central Industrial", location: "Puchuncaví", area: "120", fee: "US$15,000", status: "En Desarrollo", statusColor: "orange" },
          { name: "Sector Sur Residencial", location: "Puchuncaví", area: "100", fee: "US$12,000", status: "Disponible", statusColor: "emerald" }
        ]
      },
      "Data Center": {
        title: "Centro de Datos Norte",
        subtitle: "Infraestructura Tecnológica",
        fee: "US$25,000",
        feeLabel: "Arriendo Mensual/Rack",
        area: "5,000",
        areaLabel: "m² de Instalaciones",
        stations: [
          { name: "Data Center Antofagasta", location: "Antofagasta", area: "2,000", fee: "US$30,000", status: "Disponible", statusColor: "emerald" },
          { name: "Centro Procesamiento Calama", location: "Calama", area: "1,500", fee: "US$22,000", status: "En Desarrollo", statusColor: "orange" },
          { name: "Hub Digital Iquique", location: "Iquique", area: "1,500", fee: "US$23,000", status: "Disponible", statusColor: "emerald" }
        ]
      },
      "Fibra Oscura": {
        title: "Red de Fibra Oscura Nacional",
        subtitle: "Infraestructura de Telecomunicaciones",
        fee: "US$12,500",
        feeLabel: "Arriendo km/Mes",
        area: "1,200",
        areaLabel: "km de Red",
        stations: [
          { name: "Tramo Arica-Iquique", location: "Norte", area: "300", fee: "US$15,000", status: "Disponible", statusColor: "emerald" },
          { name: "Tramo Iquique-Antofagasta", location: "Norte", area: "450", fee: "US$12,000", status: "Arrendado", statusColor: "yellow" },
          { name: "Tramo Antofagasta-Calama", location: "Norte", area: "200", fee: "US$10,000", status: "Disponible", statusColor: "emerald" },
          { name: "Tramo Copiapó-La Serena", location: "Norte", area: "250", fee: "US$13,500", status: "En Desarrollo", statusColor: "orange" }
        ]
      },
      "Energía Solar": {
        title: "Parques Solares del Norte",
        subtitle: "Energía Renovable",
        fee: "US$85,000",
        feeLabel: "Ingresos MW/Mes",
        area: "2,500",
        areaLabel: "Hectáreas Totales",
        stations: [
          { name: "Parque Solar Atacama", location: "Atacama", area: "800", fee: "US$95,000", status: "Disponible", statusColor: "emerald" },
          { name: "Central Solar Antofagasta", location: "Antofagasta", area: "600", fee: "US$78,000", status: "En Desarrollo", statusColor: "orange" },
          { name: "Planta Solar Tarapacá", location: "Tarapacá", area: "700", fee: "US$88,000", status: "Disponible", statusColor: "emerald" },
          { name: "Parque Solar Coquimbo", location: "Coquimbo", area: "400", fee: "US$75,000", status: "Arrendado", statusColor: "yellow" }
        ]
      },
      "Storage de Baterías Industriales": {
        title: "Sistema de Almacenamiento",
        subtitle: "Storage de Energía Industrial",
        fee: "US$45,000",
        feeLabel: "Arriendo MWh/Mes",
        area: "150",
        areaLabel: "MWh Capacidad",
        stations: [
          { name: "Storage Antofagasta Norte", location: "Antofagasta", area: "50", fee: "US$48,000", status: "Disponible", statusColor: "emerald" },
          { name: "Battery Hub Calama", location: "Calama", area: "40", fee: "US$42,000", status: "En Desarrollo", statusColor: "orange" },
          { name: "Centro Storage Iquique", location: "Iquique", area: "35", fee: "US$45,000", status: "Disponible", statusColor: "emerald" },
          { name: "Storage Copiapó", location: "Copiapó", area: "25", fee: "US$40,000", status: "Arrendado", statusColor: "yellow" }
        ]
      },
      "Puerto Seco": {
        title: "Terminal Multimodal Norte",
        subtitle: "Logística y Transporte",
        fee: "US$18,500",
        feeLabel: "Arriendo/Container",
        area: "85,000",
        areaLabel: "m² Terminal",
        stations: [
          { name: "Terminal Antofagasta", location: "Antofagasta", area: "35,000", fee: "US$20,000", status: "Disponible", statusColor: "emerald" },
          { name: "Hub Logístico Calama", location: "Calama", area: "25,000", fee: "US$17,500", status: "En Desarrollo", statusColor: "orange" },
          { name: "Puerto Seco Iquique", location: "Iquique", area: "15,000", fee: "US$18,000", status: "Disponible", statusColor: "emerald" },
          { name: "Terminal Copiapó", location: "Copiapó", area: "10,000", fee: "US$16,000", status: "Arrendado", statusColor: "yellow" }
        ]
      },
      "Estaciones de Servicio": {
        title: "Red de Estaciones Combustible",
        subtitle: "Infraestructura Energética",
        fee: "US$8,750",
        feeLabel: "Ingresos/Estación/Mes",
        area: "45",
        areaLabel: "Estaciones Activas",
        stations: [
          { name: "Estación Ruta 5 Norte", location: "Antofagasta", area: "1,200", fee: "US$9,500", status: "Disponible", statusColor: "emerald" },
          { name: "Estación Calama Centro", location: "Calama", area: "800", fee: "US$8,200", status: "Arrendado", statusColor: "yellow" },
          { name: "Estación Iquique Puerto", location: "Iquique", area: "1,000", fee: "US$8,800", status: "Disponible", statusColor: "emerald" },
          { name: "Estación Copiapó Sur", location: "Copiapó", area: "900", fee: "US$8,500", status: "En Desarrollo", statusColor: "orange" },
          { name: "Estación La Serena", location: "Coquimbo", area: "1,100", fee: "US$9,000", status: "Disponible", statusColor: "emerald" }
        ]
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
              },
              { 
                title: "Terrenos disponibles", 
                description: "Red de +500 predios disponibles en 1.200kms de extensión",
                image: "https://static.twproject.com/blog/wp-content/uploads/2020/12/master-plan-scaled.jpg"
              },
              { 
                title: "Puchuncaví", 
                description: "+300 hectáreas para desarrollo Inmobiliario Premium",
                image: puchuncaviMap
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
                className="bg-slate-700/50 rounded-xl overflow-hidden border border-slate-600 hover:border-emerald-400/50 transition-all duration-300 flex flex-col"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project.title);
                      // Scroll suave hacia la sección de detalles
                      setTimeout(() => {
                        const detailsSection = document.getElementById('project-details');
                        if (detailsSection) {
                          detailsSection.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'start' 
                          });
                        }
                      }, 100);
                    }}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    Ver Detalle →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Section - Shows when a project is selected */}
      {selectedProject && (
        <section id="project-details" className="py-20 bg-slate-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden"
            >
              {/* Clean Header */}
              <div className="p-8 border-b border-slate-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                      <Building className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">
                        {getProjectDetails(selectedProject).title}
                      </h2>
                      <p className="text-emerald-300 text-lg">
                        {getProjectDetails(selectedProject).subtitle}
                      </p>
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
                        src={selectedProject === "Hub Norte" 
                          ? "https://media.licdn.com/dms/image/v2/C4E12AQHTZ7pyTmCfEw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1541423067327?e=2147483647&v=beta&t=9abkfOQ8EpfquDBzmeLUFCXCEUxTEm2GtpvaBMOOEnw"
                          : "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        }
                        alt={selectedProject === "Hub Norte" ? "Hub de Innovación Minera" : "Proyecto"}
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
                    {selectedProject === "Hub Norte" && (
                      <div className="bg-slate-700/30 rounded-xl p-6">
                        <p className="text-slate-200 leading-relaxed text-lg">
                          Oportunidad única para participar en la creación y desarrollo del primer hub de innovación minera de la región, emplazado en el desierto más árido del mundo donde confluyen las mineras más grandes del planeta.
                        </p>
                      </div>
                    )}

                    {/* Components Grid */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span>Componentes del Proyecto</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {getProjectDetails(selectedProject).stations.map((station, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50 hover:border-emerald-500/50 transition-all duration-200"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-white font-medium leading-tight">
                                  {station.name}
                                </h4>
                                <p className="text-slate-400 text-sm">
                                  {station.area} m²
                                </p>
                              </div>
                              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                                station.statusColor === "emerald" 
                                  ? "bg-emerald-500/20 text-emerald-300" 
                                  : station.statusColor === "yellow"
                                  ? "bg-yellow-500/20 text-yellow-300"
                                  : station.statusColor === "blue"
                                  ? "bg-blue-500/20 text-blue-300"
                                  : "bg-orange-500/20 text-orange-300"
                              }`}>
                                {station.status}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Vision */}
                    {selectedProject === "Hub Norte" && (
                      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <TrendingUp className="h-5 w-5 text-emerald-400" />
                          </div>
                          <div>
                            <h4 className="text-emerald-300 font-semibold mb-2">Visión del Proyecto</h4>
                            <p className="text-emerald-100 leading-relaxed">
                              Un hub donde confluyen mineras, compañías de oil&gas, de energía, universidades y otros, donde se respirará y vivirá la innovación.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
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

export default Opportunities;
                  <div className="flex items-center space-x-3 mb-6">
                    <MapPin className="h-6 w-6 text-emerald-400" />
                    <h3 className="text-2xl font-bold text-white">
                      {getProjectDetails(selectedProject).title}
                    </h3>
                  </div>
                  
                  {/* Interactive Map Area */}
                  <div className="bg-slate-700 rounded-xl p-6 min-h-[400px] relative">
                    <div className="text-center">
                      <img 
                        src={selectedProject === "Hub Norte" 
                          ? "https://media.licdn.com/dms/image/v2/C4E12AQHTZ7pyTmCfEw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1541423067327?e=2147483647&v=beta&t=9abkfOQ8EpfquDBzmeLUFCXCEUxTEm2GtpvaBMOOEnw"
                          : "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        }
                        alt={selectedProject === "Hub Norte" ? "Hub de Innovación Minera" : "Mapa del Norte de Chile"}
                        className="w-full h-60 object-cover rounded-lg opacity-80"
                      />
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="flex space-x-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                            <span className="text-sm text-slate-300">Estaciones Disponibles</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-slate-500 rounded-full"></div>
                            <span className="text-sm text-slate-300">Otras Regiones</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Summary Cards */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-slate-600 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-emerald-400">
                          {getProjectDetails(selectedProject).stations.length}
                        </div>
                        <div className="text-sm text-slate-300">Estaciones Total</div>
                      </div>
                      <div className="bg-slate-600 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-emerald-400">
                          {getProjectDetails(selectedProject).stations.filter(s => s.status === "Disponible").length}
                        </div>
                        <div className="text-sm text-slate-300">Disponibles</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Details */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <BarChart3 className="h-6 w-6 text-emerald-400" />
                    <h3 className="text-2xl font-bold text-white">
                      {getProjectDetails(selectedProject).subtitle}
                    </h3>
                  </div>
                  
                  {/* Description and Special Note */}
                  {getProjectDetails(selectedProject).description && (
                    <div className="bg-slate-800/50 rounded-xl p-6 mb-6">
                      <p className="text-slate-300 leading-relaxed mb-4">
                        {getProjectDetails(selectedProject).description}
                      </p>
                      {getProjectDetails(selectedProject).specialNote && (
                        <div className="border-l-4 border-emerald-400 pl-4">
                          <p className="text-emerald-300 italic">
                            {getProjectDetails(selectedProject).specialNote}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Summary Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700 rounded-xl p-6">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">
                        {getProjectDetails(selectedProject).fee}
                      </div>
                      <div className="text-sm text-slate-300">
                        {getProjectDetails(selectedProject).feeLabel}
                      </div>
                    </div>
                    <div className="bg-slate-700 rounded-xl p-6">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">
                        {getProjectDetails(selectedProject).area}
                      </div>
                      <div className="text-sm text-slate-300">
                        {getProjectDetails(selectedProject).areaLabel}
                      </div>
                    </div>
                  </div>

                  {/* Stations Table */}
                  <div className="bg-slate-700 rounded-xl overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-600">
                      <div className="grid grid-cols-4 gap-4 text-sm font-medium text-slate-300 uppercase tracking-wider">
                        <div>Estación</div>
                        <div className="text-center">Área (M²)</div>
                        <div className="text-center">Fee/Mes</div>
                        <div className="text-center">Estado</div>
                      </div>
                    </div>
                    <div className="divide-y divide-slate-600">
                      {getProjectDetails(selectedProject).stations.map((station, index) => (
                        <div key={index} className="px-6 py-4">
                          <div className="grid grid-cols-4 gap-4 items-center">
                            <div>
                              <div className="text-white font-medium">{station.name}</div>
                              <div className="text-sm text-slate-400">{station.location}</div>
                            </div>
                            <div className="text-center text-slate-300">{station.area}</div>
                            <div className="text-center text-emerald-400 font-semibold">{station.fee}</div>
                            <div className="text-center">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                station.statusColor === "emerald" 
                                  ? "bg-emerald-100 text-emerald-800" 
                                  : station.statusColor === "yellow"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : station.statusColor === "blue"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-orange-100 text-orange-800"
                              }`}>
                                {station.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                      Volver a Oportunidades
                    </button>
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

export default Opportunities;