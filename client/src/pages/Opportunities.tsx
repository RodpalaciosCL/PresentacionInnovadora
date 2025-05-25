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
      label: "Ver Terrenos", 
      icon: MapPin,
      description: "500+ terrenos estratégicos en el norte de Chile"
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Roadmap Vertical */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Building className="h-6 w-6 text-emerald-400 mr-3" />
                    Hub Norte - Roadmap
                  </h3>
                  
                  <div className="relative space-y-8">
                    {/* Timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-emerald-400"></div>
                    
                    {[
                      {
                        phase: "Fase 1",
                        title: "Adquisición de Terreno",
                        status: "completed",
                        timeline: "Q1 2024",
                        description: "15 hectáreas en zona industrial de Antofagasta"
                      },
                      {
                        phase: "Fase 2", 
                        title: "Infraestructura Base",
                        status: "in-progress",
                        timeline: "Q2-Q3 2024",
                        description: "Servicios básicos, caminos y telecomunicaciones"
                      },
                      {
                        phase: "Fase 3",
                        title: "Centros de Datos",
                        status: "planned",
                        timeline: "Q4 2024",
                        description: "Construcción de 2 data centers especializados"
                      },
                      {
                        phase: "Fase 4",
                        title: "Laboratorios I+D",
                        status: "planned", 
                        timeline: "Q1 2025",
                        description: "Espacios para innovación minera y tecnológica"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="relative flex items-start space-x-4"
                      >
                        <div className={`w-4 h-4 rounded-full border-2 z-10 ${
                          item.status === "completed" ? "bg-emerald-400 border-emerald-400" :
                          item.status === "in-progress" ? "bg-yellow-400 border-yellow-400" :
                          "bg-slate-600 border-slate-400"
                        }`}></div>
                        
                        <div className="bg-slate-800 rounded-xl p-4 flex-1 border border-slate-700">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-white">{item.title}</h4>
                            <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">
                              {item.phase}
                            </span>
                          </div>
                          <p className="text-slate-300 text-sm mb-2">{item.description}</p>
                          <div className="text-emerald-400 text-xs font-semibold">{item.timeline}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* KPIs y Mini Charts */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h4 className="text-xl font-semibold text-white">Métricas del Proyecto</h4>
                  
                  {/* KPI Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                      <div className="text-2xl font-bold text-emerald-400">US$28M</div>
                      <div className="text-slate-300 text-sm">VAN Proyectado</div>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                      <div className="text-2xl font-bold text-emerald-400">32%</div>
                      <div className="text-slate-300 text-sm">TIR Esperada</div>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                      <div className="text-2xl font-bold text-emerald-400">4.2 años</div>
                      <div className="text-slate-300 text-sm">Payback</div>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                      <div className="text-2xl font-bold text-emerald-400">85%</div>
                      <div className="text-slate-300 text-sm">Ocupación Est.</div>
                    </div>
                  </div>

                  {/* Revenue Breakdown */}
                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h5 className="text-white font-semibold mb-4">Fuentes de Ingresos Proyectadas</h5>
                    <div className="space-y-3">
                      {[
                        { source: "Arriendo Data Centers", percentage: 45, value: "US$2.1M/año" },
                        { source: "Laboratorios I+D", percentage: 30, value: "US$1.4M/año" },
                        { source: "Oficinas Tech", percentage: 20, value: "US$950K/año" },
                        { source: "Servicios Adicionales", percentage: 5, value: "US$240K/año" }
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-300">{item.source}</span>
                            <span className="text-emerald-400 font-semibold">{item.value}</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${item.percentage}%` }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                              className="bg-emerald-400 h-2 rounded-full"
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Fibra Oscura Tab */}
            {activeTab === "fibra-oscura" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Canvas con Trazado de Red */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Network className="h-6 w-6 text-emerald-400 mr-3" />
                    Red de Fibra Oscura - 1,200 km
                  </h3>
                  
                  {/* Interactive Network Map */}
                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 h-80">
                    <svg viewBox="0 0 400 300" className="w-full h-full">
                      {/* Background Grid */}
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                      
                      {/* Network Routes */}
                      <motion.path
                        d="M50,50 Q150,20 250,60 T350,80"
                        stroke="#10b981"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2 }}
                      />
                      <motion.path
                        d="M50,150 L150,120 L250,140 L350,160"
                        stroke="#10b981"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                      />
                      <motion.path
                        d="M50,250 Q150,220 250,240 T350,220"
                        stroke="#10b981"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                      
                      {/* Network Nodes */}
                      {[
                        { x: 50, y: 50, label: "Arica" },
                        { x: 150, y: 80, label: "Iquique" },
                        { x: 250, y: 120, label: "Antofagasta" },
                        { x: 350, y: 140, label: "Copiapó" },
                        { x: 200, y: 200, label: "La Serena" }
                      ].map((node, index) => (
                        <motion.g key={index}>
                          <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r="8"
                            fill="#10b981"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.3 + 1 }}
                          />
                          <motion.text
                            x={node.x}
                            y={node.y - 15}
                            textAnchor="middle"
                            fill="white"
                            fontSize="12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.3 + 1.5 }}
                          >
                            {node.label}
                          </motion.text>
                        </motion.g>
                      ))}
                    </svg>
                  </div>

                  {/* Network Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-800 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">1,200</div>
                      <div className="text-slate-300 text-sm">Kilómetros</div>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">144</div>
                      <div className="text-slate-300 text-sm">Pares de Fibra</div>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">99.9%</div>
                      <div className="text-slate-300 text-sm">Uptime</div>
                    </div>
                  </div>
                </motion.div>

                {/* Simulador de Ingresos */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h4 className="text-xl font-semibold text-white">Simulador de Ingresos</h4>
                  
                  {/* Fiber Pairs Slider */}
                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <label className="block text-white font-semibold mb-4">
                      Pares de Fibra a Comercializar
                    </label>
                    <input
                      type="range"
                      min="12"
                      max="144"
                      defaultValue="72"
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                      onChange={(e) => {
                        const pairs = parseInt(e.target.value);
                        const monthlyRevenue = pairs * 850; // US$850 per pair/month
                        document.getElementById('fiber-pairs')!.textContent = pairs.toString();
                        document.getElementById('monthly-revenue')!.textContent = `US$${monthlyRevenue.toLocaleString()}`;
                        document.getElementById('annual-revenue')!.textContent = `US$${(monthlyRevenue * 12).toLocaleString()}`;
                      }}
                    />
                    <div className="flex justify-between text-sm text-slate-400 mt-2">
                      <span>12 pares</span>
                      <span>144 pares</span>
                    </div>
                  </div>

                  {/* Revenue Calculation */}
                  <div className="space-y-4">
                    <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Pares Seleccionados:</span>
                        <span id="fiber-pairs" className="text-emerald-400 font-bold">72</span>
                      </div>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Ingreso Mensual:</span>
                        <span id="monthly-revenue" className="text-emerald-400 font-bold">US$61,200</span>
                      </div>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Ingreso Anual:</span>
                        <span id="annual-revenue" className="text-emerald-400 font-bold">US$734,400</span>
                      </div>
                    </div>
                  </div>

                  {/* Investment Details */}
                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h5 className="text-white font-semibold mb-4">Detalles de Inversión</h5>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Inversión por par:</span>
                        <span className="text-white">US$5,200</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Contrato típico:</span>
                        <span className="text-white">5-10 años</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">ROI anual:</span>
                        <span className="text-emerald-400 font-semibold">16.4%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Payback:</span>
                        <span className="text-emerald-400 font-semibold">6.1 años</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Opportunities;