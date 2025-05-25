/**
 * FinancialCalculator.tsx - Interactive financial calculator component
 * Calculates ROI, TIR, VAN and Payback for different investment scenarios
 */

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, TrendingUp, Clock, BarChart3, Download, FileText } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

interface CalculatorInputs {
  project: string;
  amount: number;
  term: number;
  scenario: "conservador" | "moderado" | "agresivo";
}

interface FinancialResults {
  roi: number;
  tir: number;
  van: number;
  payback: number;
  monthlyReturn: number;
  totalReturn: number;
}

export const FinancialCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    project: "estaciones",
    amount: 1000000,
    term: 5,
    scenario: "moderado"
  });

  // Financial calculation logic based on real project data
  const calculateMetrics = useMemo((): FinancialResults => {
    const projectRates = {
      estaciones: {
        conservador: { roi: 15, tir: 18, vanMultiplier: 1.2, payback: 4.2 },
        moderado: { roi: 22, tir: 25, vanMultiplier: 1.8, payback: 3.1 },
        agresivo: { roi: 35, tir: 38, vanMultiplier: 2.5, payback: 2.3 }
      },
      puchuncavi: {
        conservador: { roi: 44, tir: 28, vanMultiplier: 1.4, payback: 2.8 },
        moderado: { roi: 67, tir: 35, vanMultiplier: 2.1, payback: 2.2 },
        agresivo: { roi: 167, tir: 55, vanMultiplier: 3.8, payback: 1.5 }
      },
      hubnorte: {
        conservador: { roi: 18, tir: 22, vanMultiplier: 1.3, payback: 3.8 },
        moderado: { roi: 28, tir: 32, vanMultiplier: 2.0, payback: 2.9 },
        agresivo: { roi: 42, tir: 48, vanMultiplier: 3.2, payback: 2.1 }
      },
      fibra: {
        conservador: { roi: 25, tir: 28, vanMultiplier: 1.6, payback: 3.2 },
        moderado: { roi: 38, tir: 42, vanMultiplier: 2.4, payback: 2.4 },
        agresivo: { roi: 55, tir: 62, vanMultiplier: 3.6, payback: 1.8 }
      }
    };

    const rates = projectRates[inputs.project as keyof typeof projectRates][inputs.scenario];
    const annualReturn = (inputs.amount * rates.roi) / 100;
    const monthlyReturn = annualReturn / 12;
    const totalReturn = inputs.amount * (1 + (rates.roi / 100));
    const van = inputs.amount * rates.vanMultiplier;

    return {
      roi: rates.roi,
      tir: rates.tir,
      van: van,
      payback: rates.payback,
      monthlyReturn,
      totalReturn
    };
  }, [inputs]);

  const projects = [
    { id: "estaciones", name: "500+ Estaciones", minInvestment: 500000 },
    { id: "puchuncavi", name: "Puchuncaví", minInvestment: 2000000 },
    { id: "hubnorte", name: "Hub Norte", minInvestment: 1500000 },
    { id: "fibra", name: "Fibra Oscura", minInvestment: 750000 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Input Controls */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
      >
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
          <Calculator className="h-6 w-6 text-emerald-400 mr-3" />
          Calculadora de Inversión
        </h3>

        {/* Project Selection */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-3">Tipo de Proyecto</label>
          <div className="grid grid-cols-1 gap-3">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setInputs({ ...inputs, project: project.id })}
                className={`text-left p-4 rounded-lg border transition-all duration-200 ${
                  inputs.project === project.id
                    ? "border-emerald-400 bg-emerald-500/10 text-emerald-400"
                    : "border-slate-600 bg-slate-700/50 text-slate-300 hover:border-slate-500"
                }`}
              >
                <div className="font-semibold">{project.name}</div>
                <div className="text-sm opacity-80">
                  Inversión mín: US${(project.minInvestment / 1000)}K
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Investment Amount */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-3">Monto de Inversión (USD)</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-400" />
            <input
              type="number"
              value={inputs.amount}
              onChange={(e) => setInputs({ ...inputs, amount: Number(e.target.value) })}
              className="w-full pl-10 pr-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none"
              min="100000"
              step="100000"
            />
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {[500000, 1000000, 2500000, 5000000].map((amount) => (
              <button
                key={amount}
                onClick={() => setInputs({ ...inputs, amount })}
                className="px-3 py-1 text-xs bg-slate-600 text-slate-300 rounded hover:bg-slate-500 transition-colors"
              >
                ${(amount / 1000000).toFixed(1)}M
              </button>
            ))}
          </div>
        </div>

        {/* Investment Term */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-3">Plazo de Inversión (años)</label>
          <select
            value={inputs.term}
            onChange={(e) => setInputs({ ...inputs, term: Number(e.target.value) })}
            className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none"
          >
            <option value={3}>3 años</option>
            <option value={5}>5 años</option>
            <option value={10}>10 años</option>
            <option value={15}>15 años</option>
            <option value={20}>20 años</option>
          </select>
        </div>

        {/* Scenario Selection */}
        <div className="mb-8">
          <label className="block text-white font-semibold mb-3">Escenario de Proyección</label>
          <div className="space-y-2">
            {[
              { id: "conservador", label: "Conservador", color: "blue", desc: "Proyecciones cautelosas" },
              { id: "moderado", label: "Moderado", color: "emerald", desc: "Escenario base esperado" },
              { id: "agresivo", label: "Agresivo", color: "yellow", desc: "Máximo potencial" }
            ].map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setInputs({ ...inputs, scenario: scenario.id as any })}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                  inputs.scenario === scenario.id
                    ? `border-${scenario.color}-400 bg-${scenario.color}-500/10`
                    : "border-slate-600 bg-slate-600/50 hover:border-slate-500"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`font-semibold ${
                      inputs.scenario === scenario.id ? `text-${scenario.color}-400` : "text-white"
                    }`}>
                      {scenario.label}
                    </div>
                    <div className="text-sm text-slate-300">{scenario.desc}</div>
                  </div>
                  <div className={`w-4 h-4 rounded-full ${
                    inputs.scenario === scenario.id ? `bg-${scenario.color}-400` : "bg-slate-500"
                  }`} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Results Dashboard */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
          <BarChart3 className="h-6 w-6 text-emerald-400 mr-3" />
          Resultados Proyectados
        </h3>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-800 rounded-xl p-6 border border-slate-700"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-300 text-sm">ROI</span>
              <TrendingUp className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold text-emerald-400">{calculateMetrics.roi}%</div>
            <div className="text-xs text-slate-400">Retorno sobre inversión</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800 rounded-xl p-6 border border-slate-700"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-300 text-sm">TIR</span>
              <BarChart3 className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold text-emerald-400">{calculateMetrics.tir}%</div>
            <div className="text-xs text-slate-400">Tasa interna de retorno</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-800 rounded-xl p-6 border border-slate-700"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-300 text-sm">VAN</span>
              <DollarSign className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold text-emerald-400">
              ${(calculateMetrics.van / 1000000).toFixed(1)}M
            </div>
            <div className="text-xs text-slate-400">Valor actual neto</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-800 rounded-xl p-6 border border-slate-700"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-300 text-sm">Payback</span>
              <Clock className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold text-emerald-400">{calculateMetrics.payback}</div>
            <div className="text-xs text-slate-400">Años para recuperar</div>
          </motion.div>
        </div>

        {/* Financial Projection Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-800 rounded-xl p-6 border border-slate-700"
        >
          <h4 className="text-lg font-semibold text-white mb-4">Proyección Financiera</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-slate-600">
              <span className="text-slate-300">Inversión Inicial</span>
              <span className="font-mono text-white font-semibold">
                ${inputs.amount.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-600">
              <span className="text-slate-300">Retorno Mensual</span>
              <span className="font-mono text-emerald-400 font-semibold">
                ${calculateMetrics.monthlyReturn.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-600">
              <span className="text-slate-300">Retorno Anual</span>
              <span className="font-mono text-emerald-400 font-semibold">
                ${(calculateMetrics.monthlyReturn * 12).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-600">
              <span className="text-slate-300">Valor Total ({inputs.term} años)</span>
              <span className="font-mono text-emerald-400 font-bold text-lg">
                ${calculateMetrics.totalReturn.toLocaleString()}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Interactive Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-800 rounded-xl p-6 border border-slate-700"
        >
          <h4 className="text-lg font-semibold text-white mb-4">Proyección de Flujo de Caja</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={Array.from({ length: inputs.term }, (_, i) => {
                const year = i + 1;
                const cumulativeReturn = calculateMetrics.monthlyReturn * 12 * year;
                return {
                  año: year,
                  retorno: Math.round(cumulativeReturn),
                  acumulado: Math.round(inputs.amount + cumulativeReturn)
                };
              })}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="año" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #475569',
                    borderRadius: '8px',
                    color: '#f8fafc'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="retorno" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  name="Retorno Anual"
                />
                <Line 
                  type="monotone" 
                  dataKey="acumulado" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  name="Valor Acumulado"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Export Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-slate-800 rounded-xl p-6 border border-slate-700"
        >
          <h4 className="text-lg font-semibold text-white mb-4">Exportar Análisis</h4>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                // Mock CSV export
                const csvData = [
                  ['Proyecto', projects.find(p => p.id === inputs.project)?.name],
                  ['Inversión', `$${inputs.amount.toLocaleString()}`],
                  ['ROI', `${calculateMetrics.roi}%`],
                  ['TIR', `${calculateMetrics.tir}%`],
                  ['VAN', `$${Math.round(calculateMetrics.van).toLocaleString()}`],
                  ['Payback', `${calculateMetrics.payback} años`]
                ].map(row => row.join(',')).join('\n');
                
                const blob = new Blob([csvData], { type: 'text/csv' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'proyeccion-financiera.csv';
                a.click();
                window.URL.revokeObjectURL(url);
              }}
              className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Descargar CSV</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                // Mock PDF export
                alert('Función de exportación PDF disponible próximamente. Los datos actuales se pueden descargar en formato CSV.');
              }}
              className="flex-1 border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 font-semibold px-4 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <FileText className="h-4 w-4" />
              <span>Generar PDF</span>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};