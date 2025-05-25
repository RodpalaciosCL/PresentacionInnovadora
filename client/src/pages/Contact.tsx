/**
 * Contact.tsx - Contact page
 * Contact form and company information
 */

import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-emerald-400">Contacto</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Placeholder para la sección de Contacto
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;