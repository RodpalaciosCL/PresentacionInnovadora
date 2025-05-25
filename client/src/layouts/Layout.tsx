/**
 * Layout.tsx - Main layout component for Invenor 2.0
 * Provides consistent header, footer and page structure
 */

import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Moon, Search } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@/context/ThemeContext";
import { GlobalSearch } from "@/components/ui/GlobalSearch";
import { ChatWidget } from "@/components/ui/ChatWidget";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "Invenor — Infraestructura que se convierte en rentabilidad",
  description = "Desarrollamos activos estratégicos en el norte de Chile. Inversiones inmobiliarias con proyecciones financieras sólidas y retornos atractivos."
}) => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const { theme, setTheme, actualTheme } = useTheme();

  // Handle Cmd+K shortcut
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Navigation items
  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Quiénes Somos" },
    { href: "/opportunities", label: "Oportunidades" },
    { href: "/projections", label: "Proyecciones" },
    { href: "/contact", label: "Contacto" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
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
            {/* Logo */}
            <Link href="/">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-emerald-400 cursor-pointer"
              >
                Invenor
              </motion.div>
            </Link>
            
            {/* Desktop Navigation */}
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
              
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                aria-label="Search"
              >
                <Search className="h-4 w-4 text-slate-400" />
              </motion.button>
              
              {/* Fix 3: Theme Toggle mejorado */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(actualTheme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
                aria-label={`Cambiar a modo ${actualTheme === "dark" ? "claro" : "oscuro"}`}
              >
                {actualTheme === "dark" ? (
                  <Sun className="h-4 w-4 text-yellow-400" />
                ) : (
                  <Moon className="h-4 w-4 text-slate-400 dark:text-slate-300" />
                )}
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
              
              {/* Fix 3: Theme Toggle para móvil */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(actualTheme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
                aria-label={`Cambiar a modo ${actualTheme === "dark" ? "claro" : "oscuro"}`}
              >
                {actualTheme === "dark" ? (
                  <Sun className="h-4 w-4 text-yellow-400" />
                ) : (
                  <Moon className="h-4 w-4 text-slate-400 dark:text-slate-300" />
                )}
              </motion.button>
              
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-300 hover:text-emerald-400 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
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
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <div
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-2 text-base font-medium cursor-pointer transition-colors ${
                        location === item.href 
                          ? "text-emerald-400 bg-emerald-500/10" 
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
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="text-emerald-400 font-bold text-2xl mb-4">
                Invenor
              </div>
              <p className="text-slate-300 mb-4 max-w-md">
                Infraestructura que se convierte en rentabilidad. 
                Desarrollamos activos estratégicos en el norte de Chile.
              </p>
              <div className="text-slate-400 text-sm">
                © 2024 Invenor. Todos los derechos reservados.
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
              <div className="space-y-2">
                {navItems.slice(1).map((item) => (
                  <Link key={item.href} href={item.href}>
                    <div className="text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer">
                      {item.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-slate-300">
                <div>contacto@invenor.cl</div>
                <div>+56 2 2XXX XXXX</div>
                <div>Santiago, Chile</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Global Search Modal */}
      <GlobalSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      
      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Layout;