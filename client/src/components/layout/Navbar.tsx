import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <nav className={`bg-white fixed w-full z-50 ${scrolled ? 'shadow-md' : ''} transition-shadow duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/">
              <a className="flex-shrink-0 flex items-center">
                <span className="font-montserrat font-bold text-primary text-xl">Inversiones del Norte</span>
              </a>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="#vision">
                <a className="text-neutral-600 hover:text-primary border-transparent hover:border-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  {t("nav.vision")}
                </a>
              </Link>
              <Link href="#activos">
                <a className="text-neutral-600 hover:text-primary border-transparent hover:border-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  {t("nav.assets")}
                </a>
              </Link>
              <Link href="#modelo">
                <a className="text-neutral-600 hover:text-primary border-transparent hover:border-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  {t("nav.model")}
                </a>
              </Link>
              <Link href="#financiero">
                <a className="text-neutral-600 hover:text-primary border-transparent hover:border-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  {t("nav.financial")}
                </a>
              </Link>
              <Link href="#proyectos">
                <a className="text-neutral-600 hover:text-primary border-transparent hover:border-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  {t("nav.projects")}
                </a>
              </Link>
              <Link href="#contacto">
                <a className="text-neutral-600 hover:text-primary border-transparent hover:border-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  {t("nav.contact")}
                </a>
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="#financiero">
              <Button variant="default" className="bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                {t("nav.simulator")} <Calculator className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <div className="ml-3 relative">
              <button
                type="button"
                className="flex text-sm rounded-full focus:outline-none"
                onClick={toggleLanguage}
              >
                <span className="sr-only">Change language</span>
                <div className="flex items-center px-3 py-1 rounded-full border border-neutral-200">
                  <Globe className="mr-2 h-4 w-4 text-neutral-600" />
                  <span>{language.toUpperCase()}</span>
                </div>
              </button>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden"
            id="mobile-menu"
          >
            <div className="pt-2 pb-3 space-y-1">
              <Link href="#vision">
                <a onClick={() => setMobileMenuOpen(false)} className="text-neutral-600 hover:bg-primary-light hover:text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
                  {t("nav.vision")}
                </a>
              </Link>
              <Link href="#activos">
                <a onClick={() => setMobileMenuOpen(false)} className="text-neutral-600 hover:bg-primary-light hover:text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
                  {t("nav.assets")}
                </a>
              </Link>
              <Link href="#modelo">
                <a onClick={() => setMobileMenuOpen(false)} className="text-neutral-600 hover:bg-primary-light hover:text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
                  {t("nav.model")}
                </a>
              </Link>
              <Link href="#financiero">
                <a onClick={() => setMobileMenuOpen(false)} className="text-neutral-600 hover:bg-primary-light hover:text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
                  {t("nav.financial")}
                </a>
              </Link>
              <Link href="#proyectos">
                <a onClick={() => setMobileMenuOpen(false)} className="text-neutral-600 hover:bg-primary-light hover:text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
                  {t("nav.projects")}
                </a>
              </Link>
              <Link href="#contacto">
                <a onClick={() => setMobileMenuOpen(false)} className="text-neutral-600 hover:bg-primary-light hover:text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
                  {t("nav.contact")}
                </a>
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-neutral-200">
              <div className="flex items-center px-4">
                <Link href="#financiero">
                  <a onClick={() => setMobileMenuOpen(false)} className="flex-shrink-0 w-full bg-secondary hover:bg-secondary-dark text-white py-2 px-4 rounded-md text-base font-medium">
                    {t("nav.simulator")}
                  </a>
                </Link>
              </div>
              <div className="mt-3 flex items-center px-4">
                <button
                  className="flex items-center text-neutral-600 hover:text-primary"
                  onClick={toggleLanguage}
                >
                  <Globe className="mr-2 h-5 w-5" />
                  <span>
                    {language === "es" ? "Change to English" : "Cambiar a Español"}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
