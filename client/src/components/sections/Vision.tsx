import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { CheckCircle } from "lucide-react";
import { fadeIn, slideInLeft, slideInRight } from "@/lib/animations";

const Vision: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true });

  return (
    <section id="vision" ref={ref} className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            variants={slideInLeft}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
          >
            <h2 className="text-3xl font-montserrat font-bold text-primary mb-6">{t("vision.title")}</h2>
            <p className="text-lg mb-6">
              {t("vision.description")}
            </p>
            <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg mb-6">
              <p className="text-lg font-medium italic">
                "{t("vision.quote")}"
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-success text-white mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <p className="ml-3 text-lg">{t("vision.point1")}</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-success text-white mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <p className="ml-3 text-lg">{t("vision.point2")}</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-success text-white mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <p className="ml-3 text-lg">{t("vision.point3")}</p>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            variants={slideInRight}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://pixabay.com/get/g0ef84a8329ad7d0954607cd5ff6334ebcfed5d587becf63a2bf881e0001fdf5b6cf9454477d5228741149884da0ddb8ffa27b232712cf696c5ab1acfd6c6b115_1280.jpg" 
                alt={t("vision.image.alt")} 
                className="w-full h-auto transform transition-all duration-700 hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="font-montserrat font-bold text-xl mb-2">{t("vision.image.title")}</h3>
                <p className="text-white/80">{t("vision.image.subtitle")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
