import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PortalProps {
  to: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function Portal({ to, title, subtitle, icon, delay = 0 }: PortalProps) {
  return (
    <Link to={to}>
      <motion.div
        className="relative group cursor-pointer"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: delay + 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: 'radial-gradient(circle, rgba(201, 162, 39, 0.15) 0%, transparent 70%)',
            transform: 'scale(1.5)',
          }}
        />

        {/* Smoke gathering effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-1000"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
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
