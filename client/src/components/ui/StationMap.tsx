import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Map, Search, Sliders } from "lucide-react";
import mapboxgl from "mapbox-gl";

// Mapbox access token
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || "pk.eyJ1IjoiZGVtby1hY2NvdW50IiwiYSI6ImNrbmhuNHpncjA2eHcycG55aG0wNWs3MHAifQ.u9f04rjFo0NNBJaWNHcjdw";

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
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [activeStation, setActiveStation] = useState<Station | null>(null);
  const [hoverStation, setHoverStation] = useState<Station | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true });

  // Initialize map when component mounts
  useEffect(() => {
    if (!mapContainerRef.current || map) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    const newMap = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-70.5, -27.0], // Center of Chile
      zoom: 4,
    });

    newMap.on("load", () => {
      setMap(newMap);
    });

    return () => {
      newMap.remove();
    };
  }, [map]);

  // Add station markers when map is loaded
  useEffect(() => {
    if (!map) return;

    // Add station markers
    sampleStations.forEach((station) => {
      const markerEl = document.createElement("div");
      markerEl.className = "map-dot w-3 h-3 rounded-full shadow-lg cursor-pointer";
      markerEl.style.backgroundColor = station.status === "available" ? "#00529B" : "#FF8200";
      markerEl.style.transition = "transform 0.3s, opacity 0.3s";
      
      markerEl.addEventListener("mouseenter", () => {
        markerEl.style.transform = "scale(1.5)";
        markerEl.style.zIndex = "10";
        setHoverStation(station);
      });
      
      markerEl.addEventListener("mouseleave", () => {
        markerEl.style.transform = "scale(1)";
        markerEl.style.zIndex = "1";
        setHoverStation(null);
      });
      
      markerEl.addEventListener("click", () => {
        setActiveStation(station);
        map.flyTo({
          center: [station.lng, station.lat],
          zoom: 8,
          duration: 1500,
        });
      });
      
      new mapboxgl.Marker(markerEl)
        .setLngLat([station.lng, station.lat])
        .addTo(map);
    });

    // Add reset control
    const resetButton = document.createElement("button");
    resetButton.className = "bg-white p-2 rounded shadow-md";
    resetButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>';
    resetButton.addEventListener("click", () => {
      map.flyTo({
        center: [-70.5, -27.0],
        zoom: 4,
        duration: 1500,
      });
      setActiveStation(null);
    });
    
    const resetControl = new mapboxgl.NavigationControl();
    map.addControl(resetControl, "top-right");
  }, [map]);

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
      
      <div className="relative h-screen-70">
        <div ref={mapContainerRef} className="absolute inset-0" />
        
        {/* Map legend */}
        <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md z-10">
          <div className="text-sm font-semibold mb-2">{t("map.legend")}</div>
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
            <span className="text-xs">{t("map.available")}</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-secondary rounded-full mr-2"></div>
            <span className="text-xs">{t("map.rented")}</span>
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
