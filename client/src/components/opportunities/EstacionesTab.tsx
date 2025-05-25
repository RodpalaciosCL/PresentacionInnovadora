/**
 * EstacionesTab.tsx - 500+ Estaciones business opportunity component
 * Interactive map and data table for railway stations
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Filter, BarChart3, DollarSign, Users, Zap } from "lucide-react";

interface StationData {
  id: number;
  name: string;
  region: string;
  area: number;
  monthlyFee: number;
  contractType: string;
  status: "available" | "rented" | "development";
}

export const EstacionesTab: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  
  // Station data based on real Invenor portfolio
  const stationsData: StationData[] = [
    { id: 1, name: "Estación Antofagasta Norte", region: "Antofagasta", area: 2500, monthlyFee: 8500, contractType: "20 años", status: "available" },
    { id: 2, name: "Estación Calama Industrial", region: "Antofagasta", area: 3200, monthlyFee: 12000, contractType: "15 años", status: "rented" },
    { id: 3, name: "Estación Iquique Puerto", region: "Tarapacá", area: 1800, monthlyFee: 6500, contractType: "25 años", status: "available" },
    { id: 4, name: "Estación Atacama Central", region: "Atacama", area: 2800, monthlyFee: 9500, contractType: "20 años", status: "development" },
    { id: 5, name: "Estación Coquimbo Hub", region: "Coquimbo", area: 2200, monthlyFee: 7800, contractType: "18 años", status: "available" },
    { id: 6, name: "Estación Arica Frontera", region: "Arica y Parinacota", area: 1600, monthlyFee: 5500, contractType: "22 años", status: "rented" }
  ];

  const regions = ["all", "Antofagasta", "Tarapacá", "Atacama", "Coquimbo", "Arica y Parinacota"];
  
  const filteredStations = selectedRegion === "all" 
    ? stationsData 
    : stationsData.filter(station => station.region === selectedRegion);

  // Calculate metrics
  const totalStations = filteredStations.length;
  const avgMonthlyFee = Math.round(filteredStations.reduce((sum, station) => sum + station.monthlyFee, 0) / totalStations);
  const totalArea = filteredStations.reduce((sum, station) => sum + station.area, 0);
  const availableStations = filteredStations.filter(s => s.status === "available").length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Interactive Map */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
          <MapPin className="h-6 w-6 text-emerald-400 mr-3" />
          Mapa Interactivo - Norte de Chile
        </h3>
        
        {/* Region Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedRegion === region
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              {region === "all" ? "Todas las Regiones" : region}
            </button>
          ))}
        </div>

        {/* SVG Map */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <svg viewBox="0 0 400 600" className="w-full h-80">
            {/* Chile outline (simplified) */}
            <path
              d="M50 50 L80 50 L85 80 L90 120 L85 160 L80 200 L75 240 L70 280 L65 320 L60 360 L55 400 L50 440 L45 480 L40 520 L35 560 L30 580 L50 580 L70 560 L75 520 L80 480 L85 440 L90 400 L95 360 L100 320 L105 280 L110 240 L115 200 L120 160 L115 120 L110 80 L100 50 Z"
              fill="#334155"
              stroke="#64748b"
              strokeWidth="2"
            />
            
            {/* Station Points */}
            {[
              { x: 75, y: 100, region: "Arica y Parinacota", count: 45 },
              { x: 80, y: 140, region: "Tarapacá", count: 85 },
              { x: 85, y: 180, region: "Antofagasta", count: 156 },
              { x: 90, y: 220, region: "Atacama", count: 89 },
              { x: 95, y: 260, region: "Coquimbo", count: 125 }
            ].map((point, index) => (
              <motion.g key={index}>
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r={selectedRegion === "all" || selectedRegion === point.region ? 8 : 4}
                  fill={selectedRegion === "all" || selectedRegion === point.region ? "#10b981" : "#64748b"}
                  className="cursor-pointer"
                  onClick={() => setSelectedRegion(point.region)}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                />
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r={selectedRegion === "all" || selectedRegion === point.region ? 16 : 8}
                  fill="none"
                  stroke={selectedRegion === "all" || selectedRegion === point.region ? "#10b981" : "#64748b"}
                  strokeWidth="2"
                  opacity="0.3"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
                {(selectedRegion === "all" || selectedRegion === point.region) && (
                  <text
                    x={point.x + 15}
                    y={point.y}
                    fill="white"
                    fontSize="12"
                    className="font-semibold"
                  >
                    {point.count}
                  </text>
                )}
              </motion.g>
            ))}
          </svg>
          
          {/* Legend */}
          <div className="flex justify-center items-center space-x-6 mt-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
              <span className="text-slate-300">Estaciones Disponibles</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-slate-500 rounded-full"></div>
              <span className="text-slate-300">Otras Regiones</span>
            </div>
          </div>
        </div>

        {/* Summary Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <div className="text-2xl font-bold text-emerald-400">{totalStations}</div>
            <div className="text-slate-300 text-sm">Estaciones Total</div>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <div className="text-2xl font-bold text-emerald-400">{availableStations}</div>
            <div className="text-slate-300 text-sm">Disponibles</div>
          </div>
        </div>
      </motion.div>

      {/* Data Table */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
          <BarChart3 className="h-6 w-6 text-emerald-400 mr-3" />
          Detalles por Estación
        </h3>

        {/* KPI Summary */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-emerald-400">US${avgMonthlyFee.toLocaleString()}</div>
            <div className="text-slate-300 text-sm">Fee Promedio/Mes</div>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-emerald-400">{totalArea.toLocaleString()}</div>
            <div className="text-slate-300 text-sm">m² Totales</div>
          </div>
        </div>

        {/* Stations Table */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Estación
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Área (m²)
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Fee/Mes
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {filteredStations.map((station, index) => (
                  <motion.tr
                    key={station.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-slate-700/50 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div>
                        <div className="text-white font-medium">{station.name}</div>
                        <div className="text-slate-400 text-sm">{station.region}</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-300">
                      {station.area.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-emerald-400 font-semibold">
                      US${station.monthlyFee.toLocaleString()}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        station.status === "available" 
                          ? "bg-emerald-100 text-emerald-800" 
                          : station.status === "rented"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {station.status === "available" ? "Disponible" : 
                         station.status === "rented" ? "Arrendada" : "En Desarrollo"}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
};