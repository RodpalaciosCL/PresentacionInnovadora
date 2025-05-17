import { Variants } from "framer-motion";

// Fade in animation variants
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Staggered children fade in animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Scale animation
export const scaleAnimation: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// Slide in from left animation
export const slideInLeft: Variants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Slide in from right animation
export const slideInRight: Variants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Chart bar animation
export const chartBar: Variants = {
  hidden: {
    scaleY: 0,
    transformOrigin: "bottom",
  },
  visible: {
    scaleY: 1,
    transformOrigin: "bottom",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Button hover animation
export const buttonHover: Variants = {
  idle: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Page transition
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Pulse animation
export const pulseAnimation: Variants = {
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Parallax effect
export const parallaxEffect = (y: number = 50): Variants => ({
  initial: {
    y: 0,
  },
  scroll: (scrollProgress: number) => ({
    y: scrollProgress * y,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 30,
    },
  }),
});

// Timeline item hover
export const timelineHover: Variants = {
  idle: {
    y: 0,
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};
