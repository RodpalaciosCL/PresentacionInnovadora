/**
 * GlobalSearch.tsx - Global search component with Cmd+K shortcut
 * Searches through projects, content and FAQs using Fuse.js
 */

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, ArrowRight, MapPin, Calculator, Users, MessageCircle } from "lucide-react";
import Fuse from "fuse.js";
import { useLocation } from "wouter";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  route: string;
  icon: React.ComponentType<any>;
}

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [, setLocation] = useLocation();

  // Search data index - content from actual website sections
  const searchData: SearchResult[] = [
    {
      id: "home",
      title: "Inicio",
      description: "Invenor — Infraestructura que se convierte en rentabilidad",
      category: "Página",
      route: "/",
      icon: Search
    },
    {
      id: "about",
      title: "Quiénes Somos",
      description: "Equipo fundador y valores de Invenor",
      category: "Página",
      route: "/about",
      icon: Users
    },
    {
      id: "opportunities",
      title: "Oportunidades de Inversión",
      description: "Portafolio de activos estratégicos y oportunidades de negocio",
      category: "Página",
      route: "/opportunities",
      icon: MapPin
    },
    {
      id: "projections",
      title: "Proyecciones Financieras",
      description: "Calculadora de ROI, TIR, VAN y análisis financiero",
      category: "Página",
      route: "/projections",
      icon: Calculator
    },
    {
      id: "contact",
      title: "Contacto",
      description: "Información de contacto y formulario",
      category: "Página",
      route: "/contact",
      icon: MessageCircle
    },
    // Projects
    {
      id: "terrenos",
      title: "500+ Terrenos Estratégicos",
      description: "Red de terrenos en ubicaciones estratégicas del norte de Chile",
      category: "Proyecto",
      route: "/opportunities",
      icon: MapPin
    },
    {
      id: "puchuncavi",
      title: "Proyecto Puchuncaví",
      description: "250 hectáreas para desarrollo industrial con alto potencial",
      category: "Proyecto",
      route: "/opportunities",
      icon: MapPin
    },
    {
      id: "hub-norte",
      title: "Hub Norte",
      description: "Centro tecnológico para empresas mineras e innovación",
      category: "Proyecto",
      route: "/opportunities",
      icon: MapPin
    },
    {
      id: "fibra-oscura",
      title: "Fibra Oscura",
      description: "Red de telecomunicaciones de 1,200 km con ingresos recurrentes",
      category: "Proyecto",
      route: "/opportunities",
      icon: MapPin
    },
    // Financial content
    {
      id: "roi-calculator",
      title: "Calculadora de ROI",
      description: "Simula el retorno de inversión según diferentes escenarios",
      category: "Herramienta",
      route: "/projections",
      icon: Calculator
    },
    {
      id: "financial-analysis",
      title: "Análisis Financiero",
      description: "TIR, VAN, Payback y métricas avanzadas de inversión",
      category: "Herramienta",
      route: "/projections",
      icon: Calculator
    }
  ];

  // Fuse.js configuration for fuzzy search
  const fuseOptions = {
    keys: [
      { name: "title", weight: 0.7 },
      { name: "description", weight: 0.3 },
      { name: "category", weight: 0.2 }
    ],
    threshold: 0.3,
    distance: 100,
    minMatchCharLength: 2
  };

  const fuse = useMemo(() => new Fuse(searchData, fuseOptions), []);
  
  const searchResults = useMemo(() => {
    if (!query.trim()) return searchData.slice(0, 6);
    return fuse.search(query).map(result => result.item).slice(0, 8);
  }, [query, fuse]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (!isOpen) {
          // Open search handled by parent component
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleResultClick = (route: string) => {
    setLocation(route);
    onClose();
    setQuery("");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-[10vh]"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="bg-slate-800 rounded-2xl border border-slate-600 shadow-2xl w-full max-w-2xl mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="flex items-center p-6 border-b border-slate-700">
            <Search className="h-5 w-5 text-slate-400 mr-3" />
            <input
              type="text"
              placeholder="Buscar proyectos, páginas y contenido..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-slate-400 text-lg focus:outline-none"
              autoFocus
            />
            <div className="flex items-center space-x-1 text-slate-400 text-sm">
              <Command className="h-3 w-3" />
              <span>K</span>
            </div>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {searchResults.length > 0 ? (
              <div className="p-2">
                {searchResults.map((result, index) => {
                  const Icon = result.icon;
                  return (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleResultClick(result.route)}
                      className="flex items-center p-4 rounded-xl hover:bg-slate-700/50 cursor-pointer transition-colors group"
                    >
                      <div className="bg-emerald-500/20 p-3 rounded-lg mr-4 group-hover:bg-emerald-500/30 transition-colors">
                        <Icon className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-white font-semibold truncate">
                            {result.title}
                          </h3>
                          <span className="text-xs bg-slate-600 text-slate-300 px-2 py-1 rounded ml-2">
                            {result.category}
                          </span>
                        </div>
                        <p className="text-slate-300 text-sm mt-1 truncate">
                          {result.description}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="p-8 text-center">
                <Search className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-400">
                  No se encontraron resultados para "{query}"
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-700 text-center">
            <p className="text-slate-400 text-sm">
              Presiona <kbd className="bg-slate-600 px-1 rounded text-xs">↵</kbd> para navegar • <kbd className="bg-slate-600 px-1 rounded text-xs">Esc</kbd> para cerrar
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};