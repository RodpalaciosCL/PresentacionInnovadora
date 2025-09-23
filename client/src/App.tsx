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
const Services = lazy(() => import("@/pages/Services"));
const Opportunities = lazy(() => import("@/pages/Opportunities"));
const CentroLogistico = lazy(() => import("@/pages/CentroLogistico"));
const Projections = lazy(() => import("@/pages/Projections"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Legacy routes (can be lazy-loaded too)
const Puchuncavi = lazy(() => import("@/pages/Puchuncavi"));
const HubInnovacion = lazy(() => import("@/pages/HubInnovacion"));
const InvenorHome = lazy(() => import("@/pages/InvenorHome"));
import { ProgressBar } from "./components/ui/ProgressBar";
import { AnimatePresence } from "framer-motion";

// Loader con barras tipo escalador/pilares - distintivo y elegante
const PageLoader = () => (
  <div className="min-h-screen bg-slate-900 flex items-center justify-center">
    <div className="flex flex-col items-center space-y-6">
      {/* Pilares animados */}
      <div className="flex items-end space-x-2">
        <div 
          className="w-2 bg-emerald-400 rounded-t-sm"
          style={{
            height: '12px',
            animation: 'pillar1 1.4s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="w-2 bg-emerald-400 rounded-t-sm"
          style={{
            height: '18px',
            animation: 'pillar2 1.4s ease-in-out infinite 0.2s'
          }}
        ></div>
        <div 
          className="w-2 bg-emerald-400 rounded-t-sm"
          style={{
            height: '24px',
            animation: 'pillar3 1.4s ease-in-out infinite 0.4s'
          }}
        ></div>
        <div 
          className="w-2 bg-emerald-400 rounded-t-sm"
          style={{
            height: '18px',
            animation: 'pillar4 1.4s ease-in-out infinite 0.6s'
          }}
        ></div>
        <div 
          className="w-2 bg-emerald-400 rounded-t-sm"
          style={{
            height: '12px',
            animation: 'pillar5 1.4s ease-in-out infinite 0.8s'
          }}
        ></div>
      </div>
      
      <div className="text-emerald-400 text-sm font-medium tracking-wider">
        CARGANDO
      </div>
    </div>

    <style>{`
      @keyframes pillar1 {
        0%, 40%, 100% { transform: scaleY(1); opacity: 0.6; }
        20% { transform: scaleY(1.5); opacity: 1; }
      }
      
      @keyframes pillar2 {
        0%, 40%, 100% { transform: scaleY(1); opacity: 0.6; }
        20% { transform: scaleY(1.3); opacity: 1; }
      }
      
      @keyframes pillar3 {
        0%, 40%, 100% { transform: scaleY(1); opacity: 0.6; }
        20% { transform: scaleY(1.2); opacity: 1; }
      }
      
      @keyframes pillar4 {
        0%, 40%, 100% { transform: scaleY(1); opacity: 0.6; }
        20% { transform: scaleY(1.3); opacity: 1; }
      }
      
      @keyframes pillar5 {
        0%, 40%, 100% { transform: scaleY(1); opacity: 0.6; }
        20% { transform: scaleY(1.5); opacity: 1; }
      }
    `}</style>
  </div>
);

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
        <Route path="/services">
          {() => (
            <Layout>
              <Suspense fallback={<PageLoader />}>
                <Services />
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
        {/* Ruta de proyecciones comentada temporalmente
        <Route path="/projections">
          {() => (
            <Layout>
              <Suspense fallback={<PageLoader />}>
                <Projections />
              </Suspense>
            </Layout>
          )}
        </Route>
        */}
        <Route path="/contact">
          {() => (
            <Layout>
              <Suspense fallback={<PageLoader />}>
                <Contact />
              </Suspense>
            </Layout>
          )}
        </Route>
        <Route path="/centro-logistico">
          {() => (
            <Layout>
              <Suspense fallback={<PageLoader />}>
                <CentroLogistico />
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
