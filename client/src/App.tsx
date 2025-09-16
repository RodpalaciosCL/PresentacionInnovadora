import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Layout from "@/layouts/Layout";
import { Suspense, lazy } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy-loaded pages for code splitting
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Opportunities = lazy(() => import("@/pages/OpportunitiesClean"));
const Projections = lazy(() => import("@/pages/Projections"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Legacy routes (can be lazy-loaded too)
const Puchuncavi = lazy(() => import("@/pages/Puchuncavi"));
const HubInnovacion = lazy(() => import("@/pages/HubInnovacion"));
const InvenorHome = lazy(() => import("@/pages/InvenorHome"));
import { ProgressBar } from "./components/ui/ProgressBar";
import { AnimatePresence } from "framer-motion";

// Loader distintivo tipo "corredor/ruta" para infraestructura
const PageLoader = () => {
  // Definir los estilos de animación
  const loaderStyles = `
    .trace-path {
      animation: tracePath 1.8s ease-in-out infinite;
    }
    
    .move-node-1 {
      animation: moveNode1 2s ease-in-out infinite;
    }
    
    .move-node-2 {
      animation: moveNode2 2.2s ease-in-out infinite 0.3s;
    }
    
    @keyframes tracePath {
      0% { stroke-dashoffset: 60; opacity: 0.3; }
      50% { stroke-dashoffset: 0; opacity: 1; }
      100% { stroke-dashoffset: -60; opacity: 0.3; }
    }
    
    @keyframes moveNode1 {
      0% { transform: translateX(0) translateY(0); opacity: 0.6; }
      25% { transform: translateX(8px) translateY(-2px); opacity: 1; }
      50% { transform: translateX(16px) translateY(0); opacity: 1; }
      75% { transform: translateX(24px) translateY(2px); opacity: 0.8; }
      100% { transform: translateX(32px) translateY(0); opacity: 0.4; }
    }
    
    @keyframes moveNode2 {
      0% { transform: translateX(0) translateY(0); opacity: 0.4; }
      25% { transform: translateX(6px) translateY(-1px); opacity: 0.8; }
      50% { transform: translateX(12px) translateY(0); opacity: 1; }
      75% { transform: translateX(18px) translateY(1px); opacity: 0.6; }
      100% { transform: translateX(24px) translateY(0); opacity: 0.3; }
    }
    
    @media (prefers-reduced-motion: reduce) {
      .trace-path, .move-node-1, .move-node-2 {
        animation: none !important;
      }
    }
  `;

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <style dangerouslySetInnerHTML={{ __html: loaderStyles }} />
      
      <div className="flex flex-col items-center space-y-6">
        {/* Corredor SVG animado */}
        <div className="w-24 h-16 relative">
          <svg viewBox="0 0 96 64" className="w-full h-full">
            {/* Línea base del corredor */}
            <path
              d="M8 32 Q32 16, 56 32 Q80 48, 88 32"
              stroke="rgb(52, 211, 153)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 2"
              className="opacity-40"
            />
            {/* Línea principal que se traza */}
            <path
              d="M8 32 Q32 16, 56 32 Q80 48, 88 32"
              stroke="rgb(52, 211, 153)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="60"
              strokeDashoffset="60"
              className="trace-path"
            />
            {/* Nodos que avanzan */}
            <circle
              cx="20"
              cy="28"
              r="2"
              fill="rgb(52, 211, 153)"
              className="move-node-1"
            />
            <circle
              cx="35"
              cy="25"
              r="1.5"
              fill="rgb(52, 211, 153)"
              className="opacity-70 move-node-2"
            />
          </svg>
        </div>
        
        {/* Texto con espaciado elegante */}
        <div className="text-emerald-400 text-sm font-medium tracking-wide">
          Cargando
          <span className="inline-block animate-pulse ml-1">...</span>
        </div>
      </div>
    </div>
  );
};

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        {/* New structured routes with Layout */}
        <Route path="/">
          {() => (
            <Layout>
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            </Layout>
          )}
        </Route>
        <Route path="/about">
          {() => (
            <Layout>
              <Suspense fallback={<PageLoader />}>
                <About />
              </Suspense>
            </Layout>
          )}
        </Route>
        <Route path="/opportunities">
          {() => (
            <Layout>
              <Suspense fallback={<PageLoader />}>
                <Opportunities />
              </Suspense>
            </Layout>
          )}
        </Route>
        <Route path="/projections">
          {() => (
            <Layout>
              <Suspense fallback={<PageLoader />}>
                <Projections />
              </Suspense>
            </Layout>
          )}
        </Route>
        <Route path="/contact">
          {() => (
            <Layout>
              <Suspense fallback={<PageLoader />}>
                <Contact />
              </Suspense>
            </Layout>
          )}
        </Route>
        
        {/* Legacy routes (keep for backward compatibility) */}
        <Route path="/invenor">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <InvenorHome />
            </Suspense>
          )}
        </Route>
        <Route path="/puchuncavi">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <Puchuncavi />
            </Suspense>
          )}
        </Route>
        <Route path="/hub-innovacion">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <HubInnovacion />
            </Suspense>
          )}
        </Route>
        
        {/* 404 */}
        <Route>
          {() => (
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          )}
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <ProgressBar />
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
