import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
      when: 'beforeChildren' as const,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const smokeVariants = {
  initial: {
    opacity: 1,
    scale: 1,
  },
  enter: {
    opacity: 0,
    scale: 1.5,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      className="min-h-screen"
    >
      {/* Smoke overlay for transition */}
      <motion.div
        variants={smokeVariants}
        className="fixed inset-0 pointer-events-none z-[200]"
      >
        <div className="absolute inset-0 bg-gradient-radial from-[#f5f0e6]/20 via-[#0a0908]/80 to-[#050403] blur-xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-64 h-64 rounded-full bg-[#c9a227]/10 blur-3xl"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>

      {children}
    </motion.div>
  );
}

// Child element animation variants for stagger effects
export const childVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
