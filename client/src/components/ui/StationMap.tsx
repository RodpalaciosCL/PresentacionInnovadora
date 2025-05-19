import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Map, Search, Sliders, MapPin } from "lucide-react";

// Interface for station data
interface Station {
  id: number;
  name: string;
  area: number; // in square meters
  lat: number;
  lng: number;
  status: "available" | "rented";
}

// Sample station data for the map
const sampleStations: Station[] = [
  { id: 1, name: "La Calera", area: 15000, lat: -32.787, lng: -71.206, status: "available" },
  { id: 2, name: "Llay Llay", area: 12000, lat: -32.841, lng: -70.966, status: "available" },
  { id: 3, name: "Los Andes", area: 8500, lat: -32.833, lng: -70.597, status: "available" },
  { id: 4, name: "San Felipe", area: 10200, lat: -32.751, lng: -70.725, status: "available" },
  { id: 5, name: "Cabildo", area: 9800, lat: -32.419, lng: -71.076, status: "available" },
  { id: 6, name: "Illapel", area: 18500, lat: -31.636, lng: -71.166, status: "available" },
  { id: 7, name: "Ovalle", area: 22000, lat: -30.601, lng: -71.199, status: "available" },
  { id: 8, name: "La Serena", area: 30000, lat: -29.907, lng: -71.252, status: "rented" },
  { id: 9, name: "Vallenar", area: 25000, lat: -28.576, lng: -70.759, status: "available" },
  { id: 10, name: "Copiapó", area: 35000, lat: -27.366, lng: -70.332, status: "available" },
  { id: 11, name: "Chañaral", area: 16000, lat: -26.345, lng: -70.620, status: "available" },
  { id: 12, name: "Antofagasta", area: 40000, lat: -23.650, lng: -70.400, status: "available" },
  { id: 13, name: "Tocopilla", area: 18000, lat: -22.092, lng: -70.193, status: "available" },
  { id: 14, name: "Iquique", area: 50000, lat: -20.213, lng: -70.152, status: "available" },
];

const StationMap: React.FC = () => {
  const { t } = useLanguage();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [activeStation, setActiveStation] = useState<Station | null>(null);
  const [hoverStation, setHoverStation] = useState<Station | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true });

  // Generate positions for the stations in the visual map
  const calculateStationPosition = (station: Station) => {
    // Convert lat/lng to a relative position in the container
    // Normalize latitude between -35 and -20 (roughly northern Chile) to 0-100%
    const y = ((station.lat + 35) / 15) * 100;
    // Normalize longitude between -72 and -69 to 0-100%
    const x = ((station.lng + 72) / 3) * 100;
    
    return { x, y };
  };
  
  // Initialize the static map visualization
  useEffect(() => {
    if (!mapContainerRef.current) return;
    
    // Create the static map container
    mapContainerRef.current.innerHTML = '';
    mapContainerRef.current.className = "absolute inset-0 bg-neutral-100 rounded-md overflow-hidden";
    
    // Add a stylized map background - simplified outline of northern Chile
    const mapBackground = document.createElement('div');
    mapBackground.className = "absolute inset-0";
    mapBackground.style.background = "linear-gradient(135deg, #e9f5f8 0%, #edf2f7 100%)";
    mapContainerRef.current.appendChild(mapBackground);
    
    // Add region outlines (stylized)
    const regionOutline = document.createElement('div');
    regionOutline.className = "absolute inset-0";
    regionOutline.innerHTML = `
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M30,95 C35,85 40,70 45,60 C50,50 55,35 60,25 C65,15 70,5 75,0 L85,0 L90,10 L95,20 L100,30 L100,100 L0,100 L0,90 Z" 
              fill="#dde9f3" stroke="#c2d5e5" stroke-width="0.5" />
        <path d="M0,85 L10,85 L20,80 L30,75" stroke="#c2d5e5" stroke-width="0.3" fill="none" stroke-dasharray="1,1" />
        <line x1="0" y1="70" x2="15" y2="65" stroke="#c2d5e5" stroke-width="0.3" stroke-dasharray="1,1" />
      </svg>
    `;
    mapContainerRef.current.appendChild(regionOutline);
    
    // Add city markers
    const markersContainer = document.createElement('div');
    markersContainer.className = "absolute inset-0";
    
    sampleStations.forEach(station => {
      const { x, y } = calculateStationPosition(station);
      
      // Create marker container
      const marker = document.createElement('div');
      marker.className = "absolute cursor-pointer group";
      marker.style.left = `${x}%`;
      marker.style.top = `${y}%`;
      marker.style.transform = "translate(-50%, -50%)";
      
      // Create marker dot
      const dot = document.createElement('div');
      dot.className = `w-3 h-3 rounded-full shadow-md transition-transform duration-200 
                        group-hover:scale-150 group-hover:z-10
                        ${station.status === "available" ? "bg-primary" : "bg-secondary"}`;
      
      // Create marker label
      const label = document.createElement('div');
      label.className = "absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs font-medium text-neutral-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity";
      label.textContent = station.name;
      
      // Add event listeners
      marker.addEventListener('mouseenter', () => {
        setHoverStation(station);
      });
      
      marker.addEventListener('mouseleave', () => {
        setHoverStation(null);
      });
      
      marker.addEventListener('click', () => {
        setActiveStation(station);
      });
      
      // Assemble and add to container
      marker.appendChild(dot);
      marker.appendChild(label);
      markersContainer.appendChild(marker);
    });
    
    mapContainerRef.current.appendChild(markersContainer);
    
    // Add a compass rose
    const compass = document.createElement('div');
    compass.className = "absolute top-4 right-4 w-16 h-16 bg-white bg-opacity-80 rounded-full shadow-md flex items-center justify-center p-1";
    compass.innerHTML = `
      <svg viewBox="0 0 24 24" width="100%" height="100%">
        <circle cx="12" cy="12" r="10" fill="none" stroke="#64748b" stroke-width="0.5"></circle>
        <path d="M12,2 L12,22" stroke="#64748b" stroke-width="0.5"></path>
        <path d="M2,12 L22,12" stroke="#64748b" stroke-width="0.5"></path>
        <text x="12" y="5" text-anchor="middle" font-size="3" fill="#334155">N</text>
        <text x="12" y="21" text-anchor="middle" font-size="3" fill="#334155">S</text>
        <text x="5" y="12.5" text-anchor="middle" font-size="3" fill="#334155">O</text>
        <text x="19" y="12.5" text-anchor="middle" font-size="3" fill="#334155">E</text>
      </svg>
    `;
    mapContainerRef.current.appendChild(compass);
    
    // Add region labels
    const regions = [
      { name: "Antofagasta", x: 60, y: 30 },
      { name: "Atacama", x: 55, y: 50 },
      { name: "Coquimbo", x: 50, y: 70 },
      { name: "Valparaíso", x: 40, y: 85 }
    ];
    
    const regionsContainer = document.createElement('div');
    regionsContainer.className = "absolute inset-0 pointer-events-none";
    
    regions.forEach(region => {
      const label = document.createElement('div');
      label.className = "absolute text-neutral-500 text-xs font-light italic";
      label.style.left = `${region.x}%`;
      label.style.top = `${region.y}%`;
      label.textContent = region.name;
      regionsContainer.appendChild(label);
    });
    
    mapContainerRef.current.appendChild(regionsContainer);
    
    // Add ocean
    const ocean = document.createElement('div');
    ocean.className = "absolute left-0 top-0 bottom-0 w-1/4";
    ocean.style.background = "linear-gradient(90deg, #a8dadc 0%, rgba(168, 218, 220, 0) 100%)";
    ocean.style.opacity = "0.5";
    mapContainerRef.current.appendChild(ocean);
    
    const oceanLabel = document.createElement('div');
    oceanLabel.className = "absolute text-blue-800 text-sm italic font-light opacity-50";
    oceanLabel.style.left = "5%";
    oceanLabel.style.top = "50%";
    oceanLabel.style.transform = "translateY(-50%) rotate(-90deg)";
    oceanLabel.textContent = "Océano Pacífico";
    mapContainerRef.current.appendChild(oceanLabel);
    
  }, []);

  // Update tooltip position on hover
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (tooltipRef.current && hoverStation) {
        tooltipRef.current.style.left = `${e.pageX + 10}px`;
        tooltipRef.current.style.top = `${e.pageY + 10}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hoverStation]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-xl overflow-hidden"
    >
      <div className="p-4 bg-primary text-white flex justify-between items-center">
        <h3 className="font-montserrat font-semibold flex items-center">
          <Map className="h-4 w-4 mr-2" />
          {t("map.interactive")}
        </h3>
        <div className="flex space-x-3">
          <motion.button 
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            className="px-3 py-1 bg-white/10 rounded-md text-sm transition-colors flex items-center"
          >
            <Sliders className="h-4 w-4 mr-2" />
            {t("map.filter")}
          </motion.button>
          <motion.button 
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            className="px-3 py-1 bg-white/10 rounded-md text-sm transition-colors flex items-center"
          >
            <Search className="h-4 w-4 mr-2" />
            {t("map.search")}
          </motion.button>
        </div>
      </div>
      
      <div className="relative h-[500px]">
        <div ref={mapContainerRef} className="absolute inset-0" />
        
        {/* Map legend */}
        <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md z-10">
          <div className="text-sm font-semibold mb-2">{t("map.legend")}</div>
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
            <span className="text-xs">Terrenos disponibles</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-secondary rounded-full mr-2"></div>
            <span className="text-xs">Terrenos arrendados</span>
          </div>
        </div>
        
        {/* Active station info */}
        <AnimatePresence>
          {activeStation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md z-10 max-w-xs"
            >
              <h4 className="font-bold text-lg mb-1">{activeStation.name}</h4>
              <p className="text-neutral-600 text-sm mb-2">
                {activeStation.area.toLocaleString()} m²
              </p>
              <div className="flex items-center">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeStation.status === "available" 
                    ? "bg-primary/10 text-primary" 
                    : "bg-secondary/10 text-secondary"
                }`}>
                  {activeStation.status === "available" 
                    ? t("map.available") 
                    : t("map.rented")}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Tooltip */}
        <div 
          ref={tooltipRef} 
          className={`fixed bg-neutral-800 text-white px-3 py-2 rounded-md text-sm z-50 shadow-xl pointer-events-none transition-opacity ${
            hoverStation ? "opacity-100" : "opacity-0"
          }`}
        >
          {hoverStation && `${hoverStation.name}: ${hoverStation.area.toLocaleString()} m²`}
        </div>
      </div>
      
      <div className="p-4 border-t border-neutral-200 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
        <div>
          <span className="font-medium">{t("map.stats.total")}:</span> 450
        </div>
        <div>
          <span className="font-medium">{t("map.stats.area")}:</span> 3.000 - 50.000 m²
        </div>
        <div>
          <span className="font-medium">{t("map.stats.hectares")}:</span> +1.700
        </div>
        <div>
          <span className="font-medium">{t("map.stats.available")}:</span> 430
        </div>
      </div>
    </motion.div>
  );
};

export default StationMap;
