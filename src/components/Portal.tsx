import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Inline SVG botanical elements
const LeafSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2C8 6 4 10 4 14c0 4 3.5 8 8 8s8-4 8-8c0-4-4-8-8-12zm0 4c2 3 4 5 4 8 0 2-1.8 4-4 4s-4-2-4-4c0-3 2-5 4-8z" opacity="0.8"/>
  </svg>
);

const PetalSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <ellipse cx="12" cy="12" rx="4" ry="8" opacity="0.7"/>
  </svg>
);

const VineSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
    <path d="M4 20c4-4 8-8 16-16" opacity="0.6"/>
    <circle cx="8" cy="16" r="2" fill="currentColor" opacity="0.5"/>
    <circle cx="16" cy="8" r="2" fill="currentColor" opacity="0.5"/>
  </svg>
);

interface FloatingBotanicalElementProps {
  variant: 'leaf' | 'petal' | 'vine';
  size: number;
  delay: number;
  xRange: [number, number];
  yRange: [number, number];
  isHovered: boolean;
}

const FloatingBotanicalElement: React.FC<FloatingBotanicalElementProps> = ({ variant, size, delay, xRange, yRange, isHovered }) => {
  const icons = {
    leaf: <LeafSVG />,
    petal: <PetalSVG />,
    vine: <VineSVG />,
  };

  return (
    <motion.div
      className="absolute text-[#c9a227]/60 pointer-events-none"
      animate={{
        x: isHovered ? 0 : [xRange[0], xRange[1], xRange[0]],
        y: isHovered ? 0 : [yRange[0], yRange[1], yRange[0]],
        rotate: isHovered ? 180 : [0, 15, -15, 0],
        opacity: isHovered ? 0.9 : [0.3, 0.6, 0.4, 0.3],
        scale: isHovered ? 1.4 : [0.7, 1, 0.85, 0.7],
      }}
      transition={{
        duration: isHovered ? 0.6 : 5 + delay * 2,
        ease: "easeInOut",
        repeat: isHovered ? 0 : Infinity,
      }}
      style={{ width: size, height: size }}
    >
      {icons[variant]}
    </motion.div>
  );
};

interface PortalProps {
  to: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function Portal({ to, title, subtitle, icon, delay = 0 }: PortalProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={to}>
      <motion.div
        className="relative group cursor-pointer overflow-visible" // Changed overflow-hidden to overflow-visible to allow particles to move freely
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: delay + 0.5, ease: [0.22, 1, 0.36, 1] }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover="hover"
      >
        {/* Smoke gathering effect on hover - Layer 1 */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-t from-stone-800/70 to-transparent blur-xl"
          variants={{
            initial: { opacity: 0, scale: 0.8 },
            hover: { opacity: 1.3, scale: 0.9 }, // Increased opacity and made more concentrated
          }}
          transition={{ duration: 2.0, ease: "easeOut" }}
        />

        {/* Vortex/Gathering Effect - Layer 2 */}
        <motion.div
          className="absolute inset-[-20%] rounded-full opacity-0"
          variants={{
            initial: { opacity: 0, rotate: 0, scale: 1.2 },
            hover: { opacity: 0.4, rotate: [0, 180, 360], scale: 0.8 },
          }}
          transition={{ duration: 3, ease: "easeInOut", rotate: { duration: 5, repeat: Infinity, ease: "linear" } }}
          style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(201, 162, 39, 0.1), transparent)',
          }}
        />

        {/* Floating botanical elements - distributed around the portal */}
        {/* Top */}
        <FloatingBotanicalElement variant="leaf" size={18} delay={0} xRange={[-20, 20]} yRange={[-90, -70]} isHovered={isHovered} />
        <FloatingBotanicalElement variant="petal" size={14} delay={0.8} xRange={[30, 50]} yRange={[-80, -60]} isHovered={isHovered} />
        {/* Right */}
        <FloatingBotanicalElement variant="vine" size={20} delay={0.3} xRange={[70, 90]} yRange={[-20, 20]} isHovered={isHovered} />
        <FloatingBotanicalElement variant="leaf" size={16} delay={1.2} xRange={[80, 100]} yRange={[30, 50]} isHovered={isHovered} />
        {/* Bottom */}
        <FloatingBotanicalElement variant="petal" size={15} delay={0.5} xRange={[10, -10]} yRange={[75, 95]} isHovered={isHovered} />
        <FloatingBotanicalElement variant="vine" size={18} delay={1.5} xRange={[-40, -20]} yRange={[70, 90]} isHovered={isHovered} />
        {/* Left */}
        <FloatingBotanicalElement variant="leaf" size={17} delay={0.7} xRange={[-90, -70]} yRange={[0, 20]} isHovered={isHovered} />
        <FloatingBotanicalElement variant="petal" size={13} delay={1.0} xRange={[-85, -65]} yRange={[-40, -20]} isHovered={isHovered} />

        {/* Outer glow ring - Intensified */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: 'radial-gradient(circle, rgba(201, 162, 39, 0.2) 0%, transparent 70%)',
            transform: 'scale(1.5)',
          }}
        />

        {/* Smoke gathering effect on hover (second layer) */}
        <motion.div
          className="absolute inset-0 rounded-full"
          variants={{
            initial: { opacity: 0, scale: 1 },
            hover: { opacity: 0.6, scale: 1.1 },
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-t from-[#f5f0e6]/10 to-transparent blur-xl" />
        </motion.div>

        {/* Main portal container */}
        <motion.div
          className="relative w-48 h-48 md:w-56 md:h-56 rounded-full portal-glow ceremonial-border bg-gradient-to-b from-[#1a120d]/80 to-[#0a0908]/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 transition-all duration-500 group-hover:scale-105"
          animate={{
            scale: [1, 1.015, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: delay * 0.5,
          }}
        >
          {/* Icon */}
          <motion.div
            className="text-[#c9a227] mb-4 w-12 h-12 md:w-14 md:h-14 group-hover:text-[#e6c866] transition-colors duration-500"
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: delay * 0.3,
            }}
          >
            {icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl text-[#f5f0e6] font-light tracking-wide text-center glow-gold group-hover:text-[#e6c866] transition-colors duration-500">
            {title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-[#f5f0e6]/50 mt-2 text-center font-light tracking-wider uppercase">
            {subtitle}
          </p>

          {/* Inner ember glow */}
          <motion.div
            className="absolute bottom-6 w-2 h-2 rounded-full bg-[#c9a227]"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
              boxShadow: [
                '0 0 10px rgba(201, 162, 39, 0.3)',
                '0 0 20px rgba(201, 162, 39, 0.6)',
                '0 0 10px rgba(201, 162, 39, 0.3)',
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: delay * 0.2,
            }}
          />
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        />
      </motion.div>
    </Link>
  );
}
