/**
 * Timeline.tsx - Animated company timeline component
 * Shows company milestones and achievements over time
 */

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Star, TrendingUp } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-400/30"></div>
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex items-start space-x-8"
          >
            {/* Timeline Dot */}
            <div className="relative flex-shrink-0">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="w-4 h-4 bg-emerald-400 rounded-full border-4 border-slate-900"
              />
              
              {/* Pulse Animation */}
              <motion.div
                className="absolute inset-0 w-4 h-4 bg-emerald-400/30 rounded-full"
                animate={{ scale: [1, 2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
              />
            </div>
            
            {/* Content */}
            <div className="flex-1 pb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.4 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300"
              >
                {/* Year Badge */}
                <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{item.year}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <Star className="h-5 w-5 text-emerald-400 mr-2" />
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};