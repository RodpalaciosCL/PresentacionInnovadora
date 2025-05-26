import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={`bg-white fixed w-full z-50 ${scrolled ? 'shadow-lg' : ''} transition-shadow duration-300`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <img src="/images/logo.png" alt="Invenor Logo" className="h-14" />
            </a>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-9">
              <a 
                href="#vision" 
                className="text-neutral-700 hover:text-primary border-transparent hover:border-primary inline-flex items-center px-2 pt-1 border-b-2 text-base font-medium transition-colors duration-200"
              >
                Visión
              </a>
              <a 
                href="#activos" 
                className="text-neutral-700 hover:text-primary border-transparent hover:border-primary inline-flex items-center px-2 pt-1 border-b-2 text-base font-medium transition-colors duration-200"
              >
                Activos
              </a>
              <a 
                href="#modelo" 
                className="text-neutral-700 hover:text-primary border-transparent hover:border-primary inline-flex items-center px-2 pt-1 border-b-2 text-base font-medium transition-colors duration-200"
              >
                Modelo
              </a>
              <a 
                href="#financiero" 
                className="text-neutral-700 hover:text-primary border-transparent hover:border-primary inline-flex items-center px-2 pt-1 border-b-2 text-base font-medium transition-colors duration-200"
              >
                Financiero
              </a>
              <a 
                href="#proyectos" 
                className="text-neutral-700 hover:text-primary border-transparent hover:border-primary inline-flex items-center px-2 pt-1 border-b-2 text-base font-medium transition-colors duration-200"
              >
                Proyectos
              </a>
              <a 
                href="#contacto" 
                className="text-neutral-700 hover:text-primary border-transparent hover:border-primary inline-flex items-center px-2 pt-1 border-b-2 text-base font-medium transition-colors duration-200"
              >
                Contacto
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-8 sm:flex sm:items-center">
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-6 h-auto rounded-md text-base font-semibold transition-colors duration-200 shadow-md"
              onClick={() => {
                const element = document.getElementById('financiero');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Simulador <Calculator className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-primary hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <X className="block h-7 w-7" />
              ) : (
                <Menu className="block h-7 w-7" />
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
            className="sm:hidden shadow-lg"
            id="mobile-menu"
          >
            <div className="pt-3 pb-4 space-y-2 bg-white">
              <a 
                href="#vision" 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-neutral-700 hover:bg-primary/10 hover:text-primary block px-4 py-3 text-base font-medium"
              >
                Visión
              </a>
              <a 
                href="#activos" 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-neutral-700 hover:bg-primary/10 hover:text-primary block px-4 py-3 text-base font-medium"
              >
                Activos
              </a>
              <a 
                href="#modelo" 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-neutral-700 hover:bg-primary/10 hover:text-primary block px-4 py-3 text-base font-medium"
              >
                Modelo
              </a>
              <a 
                href="#financiero" 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-neutral-700 hover:bg-primary/10 hover:text-primary block px-4 py-3 text-base font-medium"
              >
                Financiero
              </a>
              <a 
                href="#proyectos" 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-neutral-700 hover:bg-primary/10 hover:text-primary block px-4 py-3 text-base font-medium"
              >
                Proyectos
              </a>
              <a 
                href="#contacto" 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-neutral-700 hover:bg-primary/10 hover:text-primary block px-4 py-3 text-base font-medium"
              >
                Contacto
              </a>
            </div>
            <div className="pt-4 pb-5 border-t border-neutral-200 bg-white">
              <div className="px-4">
                <a 
                  href="#financiero"
                  onClick={() => setMobileMenuOpen(false)} 
                  className="flex w-full items-center justify-center bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-md text-base font-semibold shadow-md"
                >
                  Simulador <Calculator className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
