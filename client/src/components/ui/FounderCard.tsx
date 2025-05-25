/**
 * FounderCard.tsx - Founder profile card component
 * Displays founder information with photo, bio and achievements
 */

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Award, TrendingUp } from "lucide-react";
import type { Founder } from "@/data/company";

interface FounderCardProps {
  founder: Founder;
  index: number;
}

export const FounderCard: React.FC<FounderCardProps> = ({ founder, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300"
    >
      {/* Profile Image Placeholder */}
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-3xl font-bold">
          {founder.name.split(' ').map(n => n[0]).join('')}
        </div>
        
        {/* LinkedIn Badge */}
        {founder.linkedin && (
          <motion.a
            href={founder.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="absolute -bottom-2 -right-2 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </motion.a>
        )}
      </div>

      {/* Name and Role */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{founder.name}</h3>
        <p className="text-emerald-400 font-semibold">{founder.role}</p>
      </div>

      {/* Bio */}
      <p className="text-slate-300 text-center mb-6 leading-relaxed">
        {founder.bio}
      </p>

      {/* Achievements */}
      <div className="space-y-3">
        <div className="flex items-center justify-center text-emerald-400 mb-4">
          <Award className="h-5 w-5 mr-2" />
          <span className="font-semibold">Logros Destacados</span>
        </div>
        
        {founder.achievements.map((achievement, achievementIndex) => (
          <motion.div
            key={achievementIndex}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + achievementIndex * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start space-x-3"
          >
            <div className="flex-shrink-0 w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
            <p className="text-slate-300 text-sm">{achievement}</p>
          </motion.div>
        ))}
      </div>

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-emerald-400/5 opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};