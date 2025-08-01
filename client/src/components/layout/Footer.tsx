import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Linkedin, Twitter, Mail, MapPin, Phone, AtSign } from "lucide-react";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true });

  return (
    <motion.footer
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      className="bg-slate-900 text-white/70 py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div variants={fadeIn} className="mb-4 md:mb-0">
            <h3 className="text-white font-bold text-xl">Inversiones del Norte</h3>
            <p className="text-sm text-slate-400 mt-1">
              Transformando infraestructura en oportunidades de inversión
            </p>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <h4 className="text-white font-medium text-lg mb-2">Contacto</h4>
            <div className="space-y-1 text-sm">
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                <span>Santiago, Chile</span>
              </div>
              <div className="flex items-center">
                <AtSign className="mr-2 h-4 w-4" />
                <span>contacto@invenor.group</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          variants={fadeIn}
          className="mt-6 pt-4 border-t border-white/10 text-center"
        >
          <p className="text-xs text-slate-400">
            © 2024 Inversiones del Norte. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
