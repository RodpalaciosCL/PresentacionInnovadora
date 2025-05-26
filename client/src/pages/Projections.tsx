/**
 * Projections.tsx - Proyecciones Financieras page
 * Financial calculator and projections
 */

import React from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, BarChart3, DollarSign, Download, FileText } from "lucide-react";
import { FinancialCalculator } from "@/components/financial/FinancialCalculator";

const Projections: React.FC = () => {
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
              Proyecciones <span className="text-emerald-400">Financieras</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Herramientas avanzadas de análisis financiero para evaluar el retorno de inversión 
              en nuestros activos estratégicos
            </p>
          </motion.div>

          {/* Features Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Calculator,
                title: "Simulador Interactivo",
                description: "Calcula ROI, TIR, VAN y Payback en tiempo real según tus parámetros de inversión"
              },
              {
                icon: BarChart3,
                title: "Análisis Comparativo",
                description: "Compara diferentes escenarios y proyectos para optimizar tu portafolio"
              },
              {
                icon: FileText,
                title: "Reportes Detallados",
                description: "Genera reportes profesionales con proyecciones y análisis de sensibilidad"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center"
                >
                  <div className="bg-emerald-500/20 p-4 rounded-lg w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Financial Calculator */}
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
              Simulador de <span className="text-emerald-400">Inversiones</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Evalúa el potencial de retorno de cada oportunidad de inversión con datos reales del mercado
            </p>
          </motion.div>

          <FinancialCalculator />
        </div>
      </section>

      {/* Comparative Analysis */}
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
              Análisis <span className="text-emerald-400">Comparativo</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Compara el rendimiento de diferentes activos en nuestro portafolio
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-300 uppercase tracking-wider">
                      Proyecto
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-slate-300 uppercase tracking-wider">
                      ROI Moderado
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-slate-300 uppercase tracking-wider">
                      TIR
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-slate-300 uppercase tracking-wider">
                      Payback
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-slate-300 uppercase tracking-wider">
                      Inversión Mín.
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-slate-300 uppercase tracking-wider">
                      Riesgo
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {[
                    { name: "Hub Norte", roi: "28%", tir: "32%", payback: "2.9 años", minInv: "US$1.5M", risk: "Medio" },
                    { name: "Terrenos disponibles", roi: "22%", tir: "25%", payback: "3.1 años", minInv: "US$500K", risk: "Bajo" },
                    { name: "Puchuncaví", roi: "67%", tir: "35%", payback: "2.2 años", minInv: "US$2M", risk: "Medio" },
                    { name: "Fibra Oscura", roi: "38%", tir: "42%", payback: "2.4 años", minInv: "US$750K", risk: "Bajo" },
                    { name: "Data Center", roi: "32%", tir: "36%", payback: "2.7 años", minInv: "US$3M", risk: "Medio" },
                    { name: "Energía Solar", roi: "34%", tir: "38%", payback: "2.5 años", minInv: "US$2.5M", risk: "Bajo" },
                    { name: "Storage de Baterías", roi: "36%", tir: "42%", payback: "2.3 años", minInv: "US$4M", risk: "Medio" },
                    { name: "Puerto Seco", roi: "26%", tir: "30%", payback: "3.2 años", minInv: "US$8M", risk: "Alto" },
                    { name: "Estaciones de Servicio", roi: "24%", tir: "28%", payback: "3.4 años", minInv: "US$1.2M", risk: "Bajo" }
                  ].map((project, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="hover:bg-slate-700/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="text-white font-medium">{project.name}</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-emerald-400 font-bold text-lg">{project.roi}</span>
                      </td>
                      <td className="px-6 py-4 text-center text-slate-300">{project.tir}</td>
                      <td className="px-6 py-4 text-center text-slate-300">{project.payback}</td>
                      <td className="px-6 py-4 text-center text-slate-300">{project.minInv}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          project.risk === "Bajo" 
                            ? "bg-emerald-100 text-emerald-800" 
                            : project.risk === "Medio"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}>
                          {project.risk}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Export and Reports */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Reportes y Documentación
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Accede a análisis detallados y documentación técnica para tus decisiones de inversión
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Descargar Executive Summary</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 font-semibold px-8 py-4 rounded-lg transition-colors flex items-center space-x-2"
              >
                <FileText className="h-5 w-5" />
                <span>Ver Due Diligence</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projections;