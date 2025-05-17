import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { fadeIn, timelineHover } from "@/lib/animations";

interface TimelineItemProps {
  title: string;
  description: string;
  period: string;
  phase: number;
  isRight?: boolean;
  delay?: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  description, 
  period, 
  phase, 
  isRight = false,
  delay = 0
}) => {
  return (
    <motion.div 
      className="timeline-item flex items-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <div className={`w-1/2 ${isRight ? "pr-8 text-right" : "pl-8"}`}>
        {isRight ? (
          <motion.div 
            whileHover="hover"
            initial="idle"
            variants={timelineHover}
            className="bg-white p-6 rounded-xl shadow-md inline-block"
          >
            <h3 className="font-montserrat font-bold text-xl mb-2 text-primary">{title}</h3>
            <p className="text-neutral-600">
              {description}
            </p>
          </motion.div>
        ) : (
          <div className="text-neutral-500 font-medium">
            {period}
          </div>
        )}
      </div>
      <div className={`absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full ${phase === 4 ? "bg-secondary" : "bg-primary"} flex items-center justify-center text-white font-bold shadow-lg`}>
        {phase}
      </div>
      <div className={`w-1/2 ${isRight ? "pl-8" : "pr-8 text-right"}`}>
        {isRight ? (
          <div className="text-neutral-500 font-medium">
            {period}
          </div>
        ) : (
          <motion.div 
            whileHover="hover"
            initial="idle"
            variants={timelineHover}
            className="bg-white p-6 rounded-xl shadow-md inline-block"
          >
            <h3 className={`font-montserrat font-bold text-xl mb-2 ${phase === 4 ? "text-secondary" : "text-primary"}`}>{title}</h3>
            <p className="text-neutral-600">
              {description}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Timeline: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true });

  return (
    <section className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          className="text-center mb-12"
          variants={fadeIn}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <h2 className="text-3xl font-montserrat font-bold text-primary">{t("timeline.title")}</h2>
          <p className="text-lg text-neutral-600 mt-4 max-w-3xl mx-auto">
            {t("timeline.description")}
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary/20 transform -translate-x-1/2"
            initial={{ height: 0 }}
            animate={isIntersecting ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5 }}
          ></motion.div>
          
          {/* Timeline items */}
          <div className="relative z-10">
            <TimelineItem 
              title={t("timeline.phase1.title")}
              description={t("timeline.phase1.description")}
              period={t("timeline.phase1.period")}
              phase={1}
              isRight={true}
              delay={0.3}
            />
            
            <TimelineItem 
              title={t("timeline.phase2.title")}
              description={t("timeline.phase2.description")}
              period={t("timeline.phase2.period")}
              phase={2}
              isRight={false}
              delay={0.6}
            />
            
            <TimelineItem 
              title={t("timeline.phase3.title")}
              description={t("timeline.phase3.description")}
              period={t("timeline.phase3.period")}
              phase={3}
              isRight={true}
              delay={0.9}
            />
            
            <TimelineItem 
              title={t("timeline.phase4.title")}
              description={t("timeline.phase4.description")}
              period={t("timeline.phase4.period")}
              phase={4}
              isRight={false}
              delay={1.2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
