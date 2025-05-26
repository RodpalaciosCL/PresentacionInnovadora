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
// Logo como componente inline

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
                className="cursor-pointer relative"
              >
                <svg width="48" height="48" viewBox="0 0 810 1012.5" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto">
                  <defs>
                    <clipPath id="f8bea34b5d">
                      <path d="M 0.199219 0 L 809.800781 0 L 809.800781 1012 L 0.199219 1012 Z M 0.199219 0 " clipRule="nonzero"/>
                    </clipPath>
                    <clipPath id="659c9c90b8">
                      <path d="M 64 264.125 L 770 264.125 L 770 747.636719 L 64 747.636719 Z M 64 264.125 " clipRule="nonzero"/>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#f8bea34b5d)">
                    <path fill="#ffffff" d="M 0.199219 0 L 809.800781 0 L 809.800781 1012 L 0.199219 1012 Z M 0.199219 0 " fillOpacity="1" fillRule="nonzero"/>
                  </g>
                  <g clipPath="url(#659c9c90b8)">
                    <path fill="#12b981" d="M 761.46875 291.972656 C 751.351562 274.539062 733.28125 264.136719 713.125 264.136719 L 562.089844 264.136719 C 541.328125 264.136719 522.023438 275.347656 511.710938 293.371094 L 379.140625 525.394531 L 320.394531 422.5625 C 308.636719 401.984375 287.460938 389.691406 263.761719 389.691406 C 240.0625 389.691406 218.886719 401.984375 207.128906 422.5625 L 72.21875 658.664062 C 61.554688 677.328125 61.628906 699.582031 72.414062 718.171875 C 83.214844 736.757812 102.488281 747.863281 123.996094 747.863281 L 270.394531 747.863281 C 290.746094 747.863281 309.671875 736.878906 319.769531 719.203125 L 379.140625 615.308594 L 435.074219 713.195312 C 447.289062 734.582031 470.183594 747.863281 494.808594 747.863281 L 495.113281 747.863281 C 518.523438 747.863281 540.277344 735.238281 551.882812 714.914062 L 761.652344 347.753906 C 771.644531 330.261719 771.582031 309.40625 761.46875 291.972656 Z M 721.003906 329 L 510.980469 696.601562 C 508.164062 701.527344 502.886719 704.601562 497.199219 704.601562 L 490.808594 704.601562 C 485.089844 704.601562 479.765625 701.515625 476.921875 696.539062 L 404.832031 570.359375 L 555.0625 307.414062 L 708.472656 307.414062 C 713.671875 307.414062 718.34375 310.105469 720.960938 314.609375 C 723.578125 319.09375 723.589844 324.480469 721.003906 329 Z M 353.449219 570.34375 L 276.753906 704.585938 L 127.558594 704.585938 C 121.246094 704.585938 115.570312 701.316406 112.390625 695.855469 C 109.210938 690.394531 109.195312 683.851562 112.332031 678.363281 L 247.316406 442.109375 C 250.726562 436.132812 256.871094 432.574219 263.761719 432.574219 C 270.636719 432.574219 276.78125 436.132812 280.207031 442.109375 Z M 353.449219 570.34375 " fillOpacity="1" fillRule="nonzero"/>
                  </g>
                </svg>
                {/* Punto que recorre la línea del ferrocarril siguiendo la forma de la N */}
                <motion.div
                  className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-sm"
                  animate={{
                    x: [8, 15, 28, 40],
                    y: [4, 12, 8, 16]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.33, 0.66, 1]
                  }}
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