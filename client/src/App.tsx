import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./context/LanguageContext";
import Layout from "@/layouts/Layout";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Opportunities from "@/pages/Opportunities";
import Projections from "@/pages/Projections";
import Contact from "@/pages/Contact";
import Puchuncavi from "@/pages/Puchuncavi";
import HubInnovacion from "@/pages/HubInnovacion";
import InvenorHome from "@/pages/InvenorHome";
import { ProgressBar } from "./components/ui/ProgressBar";
import { AnimatePresence } from "framer-motion";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        {/* New structured routes with Layout */}
        <Route path="/">
          {() => (
            <Layout>
              <Home />
            </Layout>
          )}
        </Route>
        <Route path="/about">
          {() => (
            <Layout>
              <About />
            </Layout>
          )}
        </Route>
        <Route path="/opportunities">
          {() => (
            <Layout>
              <Opportunities />
            </Layout>
          )}
        </Route>
        <Route path="/projections">
          {() => (
            <Layout>
              <Projections />
            </Layout>
          )}
        </Route>
        <Route path="/contact">
          {() => (
            <Layout>
              <Contact />
            </Layout>
          )}
        </Route>
        
        {/* Legacy routes (keep for backward compatibility) */}
        <Route path="/invenor" component={InvenorHome} />
        <Route path="/puchuncavi" component={Puchuncavi} />
        <Route path="/hub-innovacion" component={HubInnovacion} />
        
        {/* 404 */}
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">
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
