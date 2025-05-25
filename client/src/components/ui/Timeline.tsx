/**
 * Timeline.tsx - Animated timeline component for company milestones
 * Displays company history with smooth animations
 */

import React from "react";
import { motion } from "framer-motion";
import { Calendar, TrendingUp } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full"
      />

      {/* Timeline items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              viewport={{ once: true }}
              className="absolute left-1/2 transform -translate-x-1/2 z-10"
            >
              <div
                className={`w-6 h-6 rounded-full border-4 ${
                  item.highlight
                    ? "bg-emerald-400 border-emerald-300"
                    : "bg-slate-700 border-emerald-400"
                } shadow-lg`}
              />
            </motion.div>

            {/* Content card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-emerald-400/50 transition-all duration-300 max-w-md ${
                index % 2 === 0 ? "mr-8" : "ml-8"
              }`}
            >
              {/* Year badge */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-emerald-500/20 p-2 rounded-lg">
                  <Calendar className="h-4 w-4 text-emerald-400" />
                </div>
                <span className="text-emerald-400 font-bold text-lg">
                  {item.year}
                </span>
                {item.highlight && (
                  <div className="bg-emerald-500/20 p-1 rounded-lg">
                    <TrendingUp className="h-4 w-4 text-emerald-400" />
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* End marker */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: items.length * 0.1 }}
        viewport={{ once: true }}
        className="relative flex justify-center mt-12"
      >
        <div className="bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
          Presente
        </div>
      </motion.div>
    </div>
  );
};