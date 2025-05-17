import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ComparisonSlider } from "@/components/ui/ComparisonSlider";
import { CheckCircle, Repeat } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

const Assets: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true });

  return (
    <section id="activos" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          variants={fadeIn}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <h2 className="text-3xl font-montserrat font-bold text-primary">{t("assets.title")}</h2>
          <p className="text-lg text-neutral-600 mt-4 max-w-3xl mx-auto">
            {t("assets.description")}
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Railway Lands Card */}
          <motion.div 
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <img 
              src="https://pixabay.com/get/gfa54f5e9224579990934e18b0e891cac21806cdcc33b30d6f8ab5313ef874e69636c84e0636c4508b339830499ccd5481aebfb9b873cbdb6a3cc92e056ae4a35_1280.jpg" 
              alt="Terreno ferroviario con infraestructura de carga" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-montserrat font-bold text-xl mb-3 text-neutral-800">{t("assets.railway.title")}</h3>
              <p className="text-neutral-600 mb-4">
                {t("assets.railway.description")}
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="text-success mr-3 h-5 w-5" />
                  <span>{t("assets.railway.point1")}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-success mr-3 h-5 w-5" />
                  <span>{t("assets.railway.point2")}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-success mr-3 h-5 w-5" />
                  <span>{t("assets.railway.point3")}</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Intermodal Connection Card */}
          <motion.div 
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <img 
              src="https://pixabay.com/get/g6444a0147b8e24ef52336d794c8594d5546f9d87207d87493dd516e318ac3d6a90896a9efa1bda04a6d695dfed2453404a537e822b356055196ca86c1e4b56b3_1280.jpg" 
              alt="Centro logístico moderno con opciones de transporte intermodal" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-montserrat font-bold text-xl mb-3 text-neutral-800">{t("assets.intermodal.title")}</h3>
              <p className="text-neutral-600 mb-4">
                {t("assets.intermodal.description")}
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="text-success mr-3 h-5 w-5" />
                  <span>{t("assets.intermodal.point1")}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-success mr-3 h-5 w-5" />
                  <span>{t("assets.intermodal.point2")}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-success mr-3 h-5 w-5" />
                  <span>{t("assets.intermodal.point3")}</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Development Potential Card */}
          <motion.div 
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
              alt="Zona de desarrollo industrial con instalaciones modernas" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-montserrat font-bold text-xl mb-3 text-neutral-800">{t("assets.potential.title")}</h3>
              <p className="text-neutral-600 mb-4">
                {t("assets.potential.description")}
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="text-success mr-3 h-5 w-5" />
                  <span>{t("assets.potential.point1")}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-success mr-3 h-5 w-5" />
                  <span>{t("assets.potential.point2")}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-success mr-3 h-5 w-5" />
                  <span>{t("assets.potential.point3")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="mt-16 bg-gradient-to-r from-primary to-primary-light rounded-xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-white text-2xl font-montserrat font-bold mb-4">{t("assets.transformation.title")}</h3>
              <p className="text-white/80 mb-6">
                {t("assets.transformation.description")}
              </p>
              <div className="space-y-4 text-white">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-white text-primary mt-0.5">
                    <Repeat className="h-4 w-4" />
                  </div>
                  <p className="ml-3">{t("assets.transformation.point1")}</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-white text-primary mt-0.5">
                    <Repeat className="h-4 w-4" />
                  </div>
                  <p className="ml-3">{t("assets.transformation.point2")}</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-white text-primary mt-0.5">
                    <Repeat className="h-4 w-4" />
                  </div>
                  <p className="ml-3">{t("assets.transformation.point3")}</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden h-[400px]">
              <ComparisonSlider 
                beforeImage="https://images.unsplash.com/photo-1517309230475-6736d926b979?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                afterImage="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                beforeAlt="Estación ferroviaria abandonada antes de transformación" 
                afterAlt="Centro logístico moderno después de transformación" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Assets;
