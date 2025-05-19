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
      className="bg-neutral-900 text-white/70 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div variants={fadeIn}>
            <h3 className="text-white font-montserrat font-bold text-xl mb-4">Inversiones del Norte</h3>
            <p className="mb-4">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Linkedin />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Twitter />
              </a>
              <a href="mailto:contacto@inversionesdelnorte.cl" className="text-white hover:text-secondary transition-colors">
                <Mail />
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <h4 className="text-white font-medium text-lg mb-4">{t("footer.links")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#vision" className="hover:text-white transition-colors">
                  {t("footer.links.vision")}
                </Link>
              </li>
              <li>
                <Link href="#activos" className="hover:text-white transition-colors">
                  {t("footer.links.assets")}
                </Link>
              </li>
              <li>
                <Link href="#modelo" className="hover:text-white transition-colors">
                  {t("footer.links.model")}
                </Link>
              </li>
              <li>
                <Link href="#financiero">
                  <a className="hover:text-white transition-colors">
                    {t("footer.links.financial")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#proyectos">
                  <a className="hover:text-white transition-colors">
                    {t("footer.links.projects")}
                  </a>
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <h4 className="text-white font-medium text-lg mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 h-4 w-4" />
                <span>{t("footer.contact.address")}</span>
              </li>
              <li className="flex items-start">
                <Phone className="mt-1 mr-3 h-4 w-4" />
                <span>{t("footer.contact.phone")}</span>
              </li>
              <li className="flex items-start">
                <AtSign className="mt-1 mr-3 h-4 w-4" />
                <span>{t("footer.contact.email")}</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <h4 className="text-white font-medium text-lg mb-4">{t("footer.legal")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.legal.terms")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.legal.privacy")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.legal.memo")}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          variants={fadeIn}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-sm">
            {t("footer.copyright")}
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
