import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

export const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(parseInt(e.target.value));
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleResize = () => {
      // Reset slider position on resize
      setSliderPosition(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Before image */}
      <img
        src={beforeImage}
        alt={beforeAlt}
        className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700"
        style={{ opacity: 1 }}
      />
      
      {/* After image with clip-path based on slider position */}
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <img
          src={afterImage}
          alt={afterAlt}
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Slider control */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full px-8">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleSliderChange}
            className="w-full appearance-none h-1 bg-white/50 rounded-full outline-none"
            style={{
              background: "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.7))",
            }}
          />
          <div className="flex justify-between text-xs mt-2 text-white">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="bg-black/30 px-2 py-1 rounded cursor-pointer"
              onClick={() => setSliderPosition(0)}
            >
              {t('assets.transformation.before')}
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="bg-black/30 px-2 py-1 rounded cursor-pointer"
              onClick={() => setSliderPosition(100)}
            >
              {t('assets.transformation.after')}
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};
