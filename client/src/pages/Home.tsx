import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Hero from "@/components/sections/Hero";
import Vision from "@/components/sections/Vision";
import Map from "@/components/sections/Map";
import Assets from "@/components/sections/Assets";
import BusinessModel from "@/components/sections/BusinessModel";
import Financial from "@/components/sections/Financial";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import HubNorte from "@/components/sections/HubNorte";
import NextSteps from "@/components/sections/NextSteps";
import Contact from "@/components/sections/Contact";

const Home: React.FC = () => {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        if (!id) return;
        
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <motion.div
      className="relative bg-neutral-50 text-neutral-800"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Navbar />
      
      <main>
        <Hero />
        <Vision />
        <Map />
        <Assets />
        <BusinessModel />
        <Financial />
        <Projects />
        <Timeline />
        <HubNorte />
        <NextSteps />
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
};

export default Home;
