/**
 * FounderCard.tsx - Founder profile card component
 * Displays founder photo, bio, achievements and contact links
 */

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, CheckCircle } from "lucide-react";
import { LazyImage } from "./LazyImage";
import { Skeleton } from "./skeleton";
import type { Founder } from "@/data/company";
import robertoPhoto from "../../assets/roberto.jpeg";
import rodrigoPhoto from "../../../attached_assets/Sin título.png";

interface FounderCardProps {
  founder: Founder;
  index: number;
}

export const FounderCard: React.FC<FounderCardProps> = ({ founder, index }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600 hover:border-emerald-400/50 transition-all duration-300 group"
    >
      {/* Profile Photo */}
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-emerald-400/20 group-hover:border-emerald-400/50 transition-colors">
          {!imageLoaded && (
            <Skeleton className="w-full h-full rounded-full" />
          )}
          <img
            src={founder.id === 'founder-1' ? robertoPhoto : rodrigoPhoto}
            alt={`${founder.name} - ${founder.role}`}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        {/* Role Badge */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Fundador
          </div>
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          {founder.name}
        </h3>
        <p className="text-emerald-400 font-semibold text-lg">
          {founder.role}
        </p>
      </div>

      {/* Bio */}
      <div className="mb-6">
        <p className="text-slate-300 leading-relaxed text-center">
          {founder.bio}
        </p>
      </div>



      {/* Contact Link */}
      {founder.linkedin && (
        <div className="text-center">
          <motion.a
            href={founder.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </motion.a>
        </div>
      )}
    </motion.div>
  );
};