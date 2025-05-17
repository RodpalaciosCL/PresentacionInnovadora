import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ArrowRight, Check } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true });

  return (
    <section id="proyectos" ref={ref} className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <h2 className="text-3xl font-montserrat font-bold text-white">{t("projects.title")}</h2>
          <p className="text-lg text-white/70 mt-4 max-w-3xl mx-auto">
            {t("projects.description")}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Megasite Project Card */}
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            variants={fadeIn}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
          >
            <img 
              src="https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600" 
              alt="Vista panorámica de terreno industrial costero en Puchuncaví, Chile" 
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="inline-block px-3 py-1 bg-success/20 text-success text-xs rounded-full mb-4">
                {t("projects.megasite.label")}
              </div>
              <h3 className="font-montserrat font-bold text-2xl mb-4">{t("projects.megasite.title")}</h3>
              <p className="text-white/80 mb-6">
                {t("projects.megasite.description")}
              </p>
              <ul className="space-y-3 mb-8 text-white/80">
                <li className="flex items-start">
                  <Check className="text-success mr-3 mt-1 h-5 w-5" />
                  <span>{t("projects.megasite.point1")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-success mr-3 mt-1 h-5 w-5" />
                  <span>{t("projects.megasite.point2")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-success mr-3 mt-1 h-5 w-5" />
                  <span>{t("projects.megasite.point3")}</span>
                </li>
              </ul>
              <motion.button 
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors text-sm font-medium inline-flex items-center"
              >
                {t("projects.details")} <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
          
          {/* Innovation Hub Card */}
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            variants={fadeIn}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600" 
              alt="Hub de innovación moderno con espacios colaborativos y equipamiento tecnológico" 
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary-light text-xs rounded-full mb-4">
                {t("projects.hub.label")}
              </div>
              <h3 className="font-montserrat font-bold text-2xl mb-4">{t("projects.hub.title")}</h3>
              <p className="text-white/80 mb-6">
                {t("projects.hub.description")}
              </p>
              <ul className="space-y-3 mb-8 text-white/80">
                <li className="flex items-start">
                  <Check className="text-secondary-light mr-3 mt-1 h-5 w-5" />
                  <span>{t("projects.hub.point1")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary-light mr-3 mt-1 h-5 w-5" />
                  <span>{t("projects.hub.point2")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary-light mr-3 mt-1 h-5 w-5" />
                  <span>{t("projects.hub.point3")}</span>
                </li>
              </ul>
              <motion.button 
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors text-sm font-medium inline-flex items-center"
              >
                {t("projects.details")} <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 flex justify-center"
          variants={fadeIn}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 max-w-3xl text-center">
            <h3 className="font-montserrat font-bold text-2xl mb-6">{t("projects.attractive.title")}</h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
              variants={staggerContainer}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
            >
              <div>
                <ul className="space-y-4">
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-success text-white mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="ml-3">{t("projects.attractive.point1")}</p>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-success text-white mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="ml-3">{t("projects.attractive.point2")}</p>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-success text-white mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="ml-3">{t("projects.attractive.point3")}</p>
                  </motion.li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-success text-white mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="ml-3">{t("projects.attractive.point4")}</p>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-success text-white mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="ml-3">{t("projects.attractive.point5")}</p>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-success text-white mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="ml-3">{t("projects.attractive.point6")}</p>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
