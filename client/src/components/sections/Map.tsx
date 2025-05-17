import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import StationMap from "@/components/ui/StationMap";
import { fadeIn } from "@/lib/animations";

const Map: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true });

  return (
    <section id="mapa" ref={ref} className="py-16 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          variants={fadeIn}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <h2 className="text-3xl font-montserrat font-bold text-primary">{t("map.title")}</h2>
          <p className="text-lg text-neutral-600 mt-4 max-w-3xl mx-auto">
            {t("map.description")}
          </p>
        </motion.div>
        
        <StationMap />
      </div>
    </section>
  );
};

export default Map;
