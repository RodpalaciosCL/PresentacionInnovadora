import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Train, Building2, Handshake, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { fadeIn, staggerContainer } from "@/lib/animations";

const BusinessModel: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true });

  return (
    <section id="modelo" ref={ref} className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          variants={fadeIn}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <h2 className="text-3xl font-montserrat font-bold text-primary">{t("model.title")}</h2>
          <p className="text-lg text-neutral-600 mt-4 max-w-3xl mx-auto">
            {t("model.description")}
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-xl shadow-xl overflow-hidden"
          variants={fadeIn}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <div className="p-8">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
            >
              {/* Propietarios Card */}
              <motion.div 
                variants={fadeIn}
                className="rounded-xl bg-primary/5 p-6 border border-primary/10"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="text-primary h-8 w-8" />
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-3 text-primary">Propietarios de Terrenos</h3>
                <p className="text-neutral-600 mb-4">
                  Entidades que poseen los derechos de los terrenos estratégicos en ubicaciones premium
                </p>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-3"></div>
                    <span>Titulares legales de los terrenos estratégicos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-3"></div>
                    <span>Reciben ingresos por arriendo (UF mensual por m²)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-3"></div>
                    <span>Mantienen derechos legales sobre los terrenos</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Inversiones del Norte Card */}
              <motion.div 
                variants={fadeIn}
                className="rounded-xl bg-secondary/5 p-6 border border-secondary/10"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Handshake className="text-secondary h-8 w-8" />
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-3 text-secondary">{t("model.inversiones.title")}</h3>
                <p className="text-neutral-600 mb-4">
                  {t("model.inversiones.description")}
                </p>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 mr-3"></div>
                    <span>{t("model.inversiones.point1")}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 mr-3"></div>
                    <span>{t("model.inversiones.point2")}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 mr-3"></div>
                    <span>{t("model.inversiones.point3")}</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Investor Card */}
              <motion.div 
                variants={fadeIn}
                className="rounded-xl bg-accent/5 p-6 border border-accent/10"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <ChevronRight className="text-accent h-8 w-8" />
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-3 text-accent">{t("model.investor.title")}</h3>
                <p className="text-neutral-600 mb-4">
                  {t("model.investor.description")}
                </p>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 mr-3"></div>
                    <span>{t("model.investor.point1")}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 mr-3"></div>
                    <span>{t("model.investor.point2")}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 mr-3"></div>
                    <span>{t("model.investor.point3")}</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
            
            <div className="mt-12">
              <div className="flex items-center mb-6">
                <div className="h-1 flex-grow bg-neutral-200 rounded-full"></div>
                <span className="px-4 text-neutral-500 font-medium">{t("model.flow.title")}</span>
                <div className="h-1 flex-grow bg-neutral-200 rounded-full"></div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative w-full max-w-3xl">
                  {/* Flow diagram */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.3 }}
                      className="border border-neutral-200 rounded-xl p-4 text-center"
                    >
                      <div className="text-lg font-medium">Inversiones del Norte</div>
                      <div className="text-sm text-neutral-500">Gestión de activos estratégicos</div>
                      <ChevronRight className="mx-auto my-2 text-neutral-400 transform rotate-90" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.5 }}
                      className="border border-neutral-200 rounded-xl p-4 text-center transform translate-y-6"
                    >
                      <div className="text-lg font-medium">Socio Estratégico</div>
                      <div className="text-sm text-neutral-500">15% de participación en el negocio</div>
                    </motion.div>
                  </div>
                  
                  {/* Alternativas estratégicas */}
                  <div className="mt-8 bg-neutral-50 p-5 rounded-xl border border-neutral-100">
                    <h4 className="font-semibold text-neutral-800 mb-4">Alternativas Estratégicas</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.6 }}
                        className="bg-white rounded-lg p-4 border border-neutral-200"
                      >
                        <div className="text-lg font-medium text-primary">Broker Inmobiliario</div>
                        <div className="text-sm text-neutral-600 my-2">
                          Contratar servicios de broker especializado para gestionar arriendos de terrenos estratégicos.
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.7 }}
                        className="bg-white rounded-lg p-4 border border-neutral-200"
                      >
                        <div className="text-lg font-medium text-primary">Private Equity</div>
                        <div className="text-sm text-neutral-600 my-2">
                          Transferencia completa del proyecto a un fondo de inversión para maximizar su valor y escala.
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Arrows - hidden on mobile, visible on desktop */}
                  <div className="hidden md:block absolute left-[16%] top-[50%] w-[68%] h-0.5 bg-neutral-200"></div>
                  <div className="hidden md:block absolute left-[16%] top-[50%] w-0.5 h-[25%] bg-neutral-200"></div>
                  <div className="hidden md:block absolute right-[16%] top-[50%] w-0.5 h-[25%] bg-neutral-200"></div>
                </div>
              </div>
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate={isIntersecting ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              >
                <motion.div variants={fadeIn} className="bg-neutral-50 rounded-lg p-4">
                  <div className="text-center mb-3">
                    <p className="text-sm text-neutral-500">Ingreso Mensual Total</p>
                    <p className="text-2xl font-mono font-bold text-primary">$358.140.150</p>
                    <p className="text-xs text-neutral-500">CLP</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="bg-neutral-50 rounded-lg p-4">
                  <div className="text-center mb-3">
                    <p className="text-sm text-neutral-500">Utilidad Inversiones del Norte</p>
                    <p className="text-2xl font-mono font-bold text-secondary">$304.419.128</p>
                    <p className="text-xs text-neutral-500">CLP (85%)</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="bg-neutral-50 rounded-lg p-4">
                  <div className="text-center mb-3">
                    <p className="text-sm text-neutral-500">Utilidad Socio Estratégico</p>
                    <p className="text-2xl font-mono font-bold text-accent">$53.721.022</p>
                    <p className="text-xs text-neutral-500">CLP (15% del negocio)</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.9 }}
          className="mt-10 text-center"
        >
          <p className="text-lg mb-6">
            <span className="font-medium">Todos los contratos de arriendo se estructuran a largo plazo (mínimo 20+ años), con cláusulas de reajuste y consolidación.</span>
          </p>
          <Link href="#financiero">
            <a className="inline-flex items-center text-primary hover:text-primary-dark font-medium">
              {t("model.financial")} <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessModel;
