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

// Page loader component - sutil y elegante
const PageLoader = () => (
  <div className="min-h-screen bg-slate-900 flex items-center justify-center">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="text-emerald-400 text-sm font-medium">Cargando...</div>
    </div>
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
