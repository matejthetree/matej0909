import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Sacred Fire', subtitle: 'Home' },
  { to: '/offerings', label: 'Offerings', subtitle: 'Sacred Work' },
  { to: '/events', label: 'Events', subtitle: 'Gatherings' },
  { to: '/journey', label: 'My Journey', subtitle: 'The Path' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Fixed header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Logo / Name */}
        <Link to="/" className="group">
          <motion.div
            className="text-[#c9a227] text-xl tracking-widest font-light"
            whileHover={{ scale: 1.02 }}
          >
            <span className="opacity-60 group-hover:opacity-100 transition-opacity">M</span>
            <span className="text-[#f5f0e6]/80 mx-1">·</span>
            <span className="opacity-60 group-hover:opacity-100 transition-opacity">9</span>
            <span className="text-[#f5f0e6]/80 mx-1">·</span>
            <span className="opacity-60 group-hover:opacity-100 transition-opacity">9</span>
          </motion.div>
        </Link>

        {/* Menu button */}
        <motion.button
          onClick={() => setIsOpen(true)}
          className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="w-6 h-px bg-[#c9a227]/60 group-hover:bg-[#c9a227] transition-colors" />
          <span className="w-4 h-px bg-[#c9a227]/60 group-hover:bg-[#c9a227] transition-colors" />
          <span className="w-5 h-px bg-[#c9a227]/60 group-hover:bg-[#c9a227] transition-colors" />
        </motion.button>
      </motion.header>

      {/* Full screen menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background */}
            <motion.div
              className="absolute inset-0 bg-[#050403]/98 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#c9a227]/5 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#1a2e1a]/30 blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
              />
            </div>

            {/* Close button */}
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-6 w-10 h-10 flex items-center justify-center group"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="absolute w-6 h-px bg-[#c9a227]/60 group-hover:bg-[#c9a227] transition-colors rotate-45" />
              <span className="absolute w-6 h-px bg-[#c9a227]/60 group-hover:bg-[#c9a227] transition-colors -rotate-45" />
            </motion.button>

            {/* Navigation links */}
            <nav className="relative z-10 flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="group text-center block"
                  >
                    <motion.div
                      className={`text-4xl md:text-5xl tracking-wide transition-colors duration-300 ${
                        location.pathname === link.to
                          ? 'text-[#c9a227] glow-gold'
                          : 'text-[#f5f0e6]/70 hover:text-[#c9a227]'
                      }`}
                      whileHover={{ scale: 1.05, x: 10 }}
                    >
                      {link.label}
                    </motion.div>
                    <span className="text-xs uppercase tracking-[0.3em] text-[#c9a227]/40 mt-1 block">
                      {link.subtitle}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom decorative line */}
            <motion.div
              className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#c9a227]/30" />
              <span className="w-2 h-2 rounded-full bg-[#c9a227]/30" />
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#c9a227]/30" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
