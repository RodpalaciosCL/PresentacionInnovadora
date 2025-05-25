/**
 * Opportunities.tsx - Negocios & Oportunidades page
 * Interactive tabs for different business opportunities
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Factory, Building, Network, DollarSign, TrendingUp, Users, BarChart3 } from "lucide-react";
import { EstacionesTab } from "@/components/opportunities/EstacionesTab";
import { investmentOpportunities } from "@/data/company";

const Opportunities: React.FC = () => {
  const [activeTab, setActiveTab] = useState("estaciones");

  // Tab configuration
  const tabs = [
    { 
      id: "estaciones", 
      label: "500+ Estaciones", 
      icon: MapPin,
      description: "Red de estaciones estratégicas en el norte de Chile"
    },
    { 
      id: "puchuncavi", 
      label: "Puchuncaví", 
      icon: Factory,
      description: "250 hectáreas para desarrollo industrial"
    },
    { 
      id: "hub-norte", 
      label: "Hub Norte", 
      icon: Building,
      description: "Centro tecnológico para empresas mineras"
    },
    { 
      id: "fibra-oscura", 
      label: "Fibra Oscura", 
      icon: Network,
      description: "1,200 km de red de telecomunicaciones"
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
              Negocios & <span className="text-emerald-400">Oportunidades</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Portafolio diversificado de activos estratégicos con potencial de crecimiento 
              sostenible y retornos atractivos para inversionistas
            </p>
          </motion.div>

          {/* Investment Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {investmentOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{opportunity.name}</h3>
                  <div className="text-2xl font-bold text-emerald-400">{opportunity.roi}%</div>
                </div>
                <p className="text-slate-300 text-sm mb-4">{opportunity.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Inversión mín.</span>
                  <span className="text-emerald-400 font-semibold">
                    US${(opportunity.investment / 1000)}K
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-12 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center space-y-2 p-6 rounded-xl font-semibold transition-all duration-300 min-w-[200px] ${
                    activeTab === tab.id
                      ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  <Icon className="h-8 w-8" />
                  <span className="text-lg">{tab.label}</span>
                  <span className="text-xs opacity-80 text-center">{tab.description}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-[600px]"
          >
            {/* Estaciones Tab */}
            {activeTab === "estaciones" && <EstacionesTab />}

            {/* Puchuncaví Tab */}
            {activeTab === "puchuncavi" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Factory className="h-6 w-6 text-emerald-400 mr-3" />
                    Proyecto Puchuncaví
                  </h3>
                  
                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h4 className="text-lg font-semibold text-white mb-4">Características del Terreno</h4>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-700 rounded-lg p-4">
                        <div className="text-2xl font-bold text-emerald-400">250</div>
                        <div className="text-slate-300 text-sm">Hectáreas</div>
                      </div>
                      <div className="bg-slate-700 rounded-lg p-4">
                        <div className="text-2xl font-bold text-emerald-400">US$45M</div>
                        <div className="text-slate-300 text-sm">Valor Actual</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-slate-600">
                        <span className="text-slate-300">Zonificación</span>
                        <span className="text-white font-semibold">Industrial</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-600">
                        <span className="text-slate-300">Acceso</span>
                        <span className="text-white font-semibold">Ruta 5 Norte</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-600">
                        <span className="text-slate-300">Servicios</span>
                        <span className="text-white font-semibold">Completos</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h4 className="text-xl font-semibold text-white">Escenarios de Desarrollo</h4>
                  
                  {[
                    {
                      title: "Venta Directa",
                      value: "US$65M",
                      roi: "44% ROI",
                      timeline: "12-18 meses",
                      description: "Venta completa a desarrollador industrial"
                    },
                    {
                      title: "Desarrollo por Fases",
                      value: "US$120M",
                      roi: "167% ROI", 
                      timeline: "3-5 años",
                      description: "Desarrollo y venta por sectores"
                    },
                    {
                      title: "Arriendo Largo Plazo",
                      value: "US$8.5M/año",
                      roi: "19% anual",
                      timeline: "20+ años",
                      description: "Contratos de arriendo industriales"
                    }
                  ].map((scenario, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h5 className="font-semibold text-white">{scenario.title}</h5>
                        <span className="text-emerald-400 font-bold">{scenario.roi}</span>
                      </div>
                      <div className="text-2xl font-bold text-white mb-2">{scenario.value}</div>
                      <p className="text-slate-300 text-sm mb-3">{scenario.description}</p>
                      <div className="flex items-center text-slate-400 text-sm">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        {scenario.timeline}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}

            {/* Hub Norte Tab */}
            {activeTab === "hub-norte" && (
              <div className="text-center py-20">
                <Building className="h-24 w-24 text-emerald-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Hub Norte</h3>
                <p className="text-slate-300 max-w-2xl mx-auto">
                  Centro tecnológico en desarrollo para empresas mineras e innovación.
                  Información detallada próximamente disponible.
                </p>
              </div>
            )}

            {/* Fibra Oscura Tab */}
            {activeTab === "fibra-oscura" && (
              <div className="text-center py-20">
                <Network className="h-24 w-24 text-emerald-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Fibra Oscura</h3>
                <p className="text-slate-300 max-w-2xl mx-auto">
                  Red de telecomunicaciones de 1,200 km con potencial de ingresos recurrentes.
                  Detalles técnicos y comerciales en desarrollo.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Opportunities;