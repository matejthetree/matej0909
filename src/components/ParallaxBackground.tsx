import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo, useState, useEffect } from 'react';

interface ParallaxBackgroundProps {
  variant?: 'hub' | 'offerings' | 'events' | 'journey';
}

// SVG leaf component
const TobaccoLeaf = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 60 100" className={className} fill="currentColor">
    <path d="M30 0 C15 20 5 40 5 60 C5 80 15 95 30 100 C45 95 55 80 55 60 C55 40 45 20 30 0 Z M30 20 C35 35 35 55 30 85 C25 55 25 35 30 20 Z" />
  </svg>
);

// SVG birch branch
const BirchBranch = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 120 200" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M60 200 L60 0" />
    <path d="M60 30 L30 10" />
    <path d="M60 50 L80 25" />
    <path d="M60 70 L25 50" />
    <path d="M60 90 L85 65" />
    <path d="M60 110 L35 90" />
    <path d="M60 130 L75 105" />
    <path d="M60 150 L40 130" />
    <ellipse cx="30" cy="8" rx="8" ry="5" fill="currentColor" opacity="0.6" />
    <ellipse cx="82" cy="22" rx="7" ry="4" fill="currentColor" opacity="0.6" />
    <ellipse cx="23" cy="48" rx="9" ry="5" fill="currentColor" opacity="0.6" />
  </svg>
);

// Smoke wisp - using gradient instead of blur for performance
const SmokeWisp = ({ delay = 0, x = 0 }: { delay?: number; x?: number }) => (
  <motion.div
    className="absolute bottom-0 w-20 h-40 opacity-20"
    style={{ left: `${x}%`, willChange: 'transform, opacity' }}
    initial={{ y: 0, opacity: 0, scale: 1 }}
    animate={{
      y: [0, -800],
      opacity: [0, 0.3, 0.2, 0],
      scale: [1, 1.5, 2],
      x: [0, 30, -20, 40],
    }}
    transition={{
      duration: 20,
      delay,
      repeat: Infinity,
      ease: 'easeOut',
    }}
  >
    <div
      className="w-full h-full rounded-full"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(245,240,230,0.25) 0%, rgba(245,240,230,0.1) 40%, transparent 70%)'
      }}
    />
  </motion.div>
);

// Ember particle
const Ember = ({ delay = 0, x = 0, y = 0 }: { delay?: number; x?: number; y?: number }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      background: 'radial-gradient(circle, #e6c866 0%, #c9a227 50%, transparent 100%)',
    }}
    animate={{
      opacity: [0.2, 0.8, 0.2],
      scale: [1, 1.5, 1],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

// Golden light ray
const LightRay = ({ angle = 45, x = 50, delay = 0 }: { angle?: number; x?: number; delay?: number }) => (
  <motion.div
    className="absolute top-0 h-screen w-px origin-top"
    style={{
      left: `${x}%`,
      transform: `rotate(${angle}deg)`,
      background: 'linear-gradient(to bottom, rgba(201, 162, 39, 0.15) 0%, transparent 60%)',
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.3, 0] }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

export default function ParallaxBackground({ variant = 'hub' }: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Mobile detection for reduced animations
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Parallax transforms for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  // Generate random positions for elements - reduced on mobile
  const leaves = useMemo(() =>
    Array.from({ length: isMobile ? 2 : 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: 0.3 + Math.random() * 0.4,
      rotation: Math.random() * 360,
      delay: Math.random() * 5,
    })),
  [isMobile]);

  const embers = useMemo(() =>
    Array.from({ length: isMobile ? 4 : 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    })),
  [isMobile]);

  // Background gradient based on variant
  const gradients = {
    hub: 'radial-gradient(ellipse at 50% 100%, #1a2e1a 0%, #0f1a0f 30%, #050403 70%)',
    offerings: 'radial-gradient(ellipse at 50% 100%, #3d2b1f 0%, #1a120d 30%, #050403 70%)',
    events: 'radial-gradient(ellipse at 50% 0%, #1a2e1a 0%, #0f1a0f 40%, #050403 80%)',
    journey: 'radial-gradient(ellipse at 50% 50%, #3d2b1f 0%, #1a120d 40%, #050403 80%)',
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ background: gradients[variant] }}
    >
      {/* Far layer - Birch silhouettes and mist */}
      <motion.div className="absolute inset-0 opacity-20" style={{ y: y1, willChange: 'transform' }}>
        <div className="absolute left-[5%] top-[10%] text-[#2d4a2d]/40 w-32 h-64">
          <BirchBranch className="w-full h-full" />
        </div>
        <div className="absolute right-[10%] top-[5%] text-[#2d4a2d]/30 w-24 h-48 transform scale-x-[-1]">
          <BirchBranch className="w-full h-full" />
        </div>
        <div className="absolute left-[15%] bottom-[20%] text-[#2d4a2d]/25 w-20 h-40">
          <BirchBranch className="w-full h-full" />
        </div>

        {/* Distant mist */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#f5f0e6]/5 to-transparent" />
      </motion.div>

      {/* Mid layer - Floating leaves and smoke */}
      <motion.div className="absolute inset-0" style={{ y: y2, willChange: 'transform' }}>
        {leaves.map((leaf) => (
          <motion.div
            key={leaf.id}
            className="absolute text-[#2d4a2d]/40"
            style={{
              left: `${leaf.x}%`,
              top: `${leaf.y}%`,
              width: `${leaf.scale * 60}px`,
            }}
            animate={{
              y: [0, -20, -10, -25, 0],
              x: [0, 10, -5, 15, 0],
              rotate: [leaf.rotation, leaf.rotation + 5, leaf.rotation - 3, leaf.rotation + 8, leaf.rotation],
            }}
            transition={{
              duration: 15 + leaf.delay,
              delay: leaf.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <TobaccoLeaf />
          </motion.div>
        ))}

        {/* Smoke wisps - skip on mobile for performance */}
        {!isMobile && (
          <>
            <SmokeWisp delay={0} x={20} />
            <SmokeWisp delay={5} x={50} />
            <SmokeWisp delay={10} x={75} />
            <SmokeWisp delay={15} x={35} />
          </>
        )}
      </motion.div>

      {/* Near layer - Embers and light rays */}
      <motion.div className="absolute inset-0" style={{ y: y3, willChange: 'transform' }}>
        {embers.map((ember) => (
          <Ember key={ember.id} x={ember.x} y={ember.y} delay={ember.delay} />
        ))}

        {/* Occasional light rays */}
        <LightRay angle={15} x={30} delay={0} />
        <LightRay angle={-10} x={70} delay={4} />
        <LightRay angle={8} x={85} delay={8} />
      </motion.div>

      {/* Golden ambient glow at center bottom - using gradient instead of blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(201,162,39,0.25) 0%, rgba(201,162,39,0.08) 40%, transparent 70%)'
          }}
        />
      </div>
    </div>
  );
}
