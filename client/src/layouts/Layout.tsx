/**
 * Layout.tsx - Main layout component for Invenor 2.0
 * Provides consistent header, footer and page structure
 */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Search, Menu, X } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { GlobalSearch } from "@/components/ui/GlobalSearch";
import { ChatWidget } from "@/components/ui/ChatWidget";
import logoImage from "@assets/N - LOGO.png";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ 
  children, 
  title = "Inversiones del Norte | Inversiones Estratégicas en el Norte de Chile",
  description = "Desarrollamos activos estratégicos en el norte de Chile, transformando infraestructura en oportunidades de inversión sostenibles y rentables."
}: LayoutProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Quiénes Somos", href: "/about" },
    { label: "Oportunidades", href: "/opportunities" },
    { label: "Proyecciones", href: "/projections" },
    { label: "Contacto", href: "/contact" }
  ];

  // Cerrar menú mobile al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Manejar teclas de acceso rápido
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Izquierda */}
            <Link href="/">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="cursor-pointer"
              >
                <img 
                  src={logoImage}
                  alt="Inversiones del Norte Logo"
                  className="h-12 w-auto"
                />
              </motion.div>
            </Link>
            
            {/* Desktop Navigation - Centro */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <motion.span
                    whileHover={{ y: -2 }}
                    className={`cursor-pointer transition-colors duration-200 ${
                      location === item.href 
                        ? "text-emerald-400 font-semibold" 
                        : "text-slate-300 hover:text-emerald-400"
                    }`}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}
            </div>
            
            {/* Botones de acción - Derecha */}
            <div className="flex items-center space-x-3">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSearchOpen(true)}
                className="p-2.5 rounded-lg bg-slate-800/70 hover:bg-slate-700 transition-all duration-200 border border-slate-600/50"
                aria-label="Search"
              >
                <Search className="h-4 w-4 text-slate-300" />
              </motion.button>
              

            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                aria-label="Search"
              >
                <Search className="h-4 w-4 text-slate-400" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 text-slate-400" />
                ) : (
                  <Menu className="h-5 w-5 text-slate-400" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-700 py-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <div
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                        location === item.href
                          ? "text-emerald-400 bg-slate-800"
                          : "text-slate-300 hover:text-emerald-400 hover:bg-slate-800"
                      }`}
                    >
                      {item.label}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Global Components */}
      <ScrollToTop />
      <GlobalSearch 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
      />
      <ChatWidget />
    </div>
  );
}