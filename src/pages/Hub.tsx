import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ParallaxBackground from '../components/ParallaxBackground';
import Portal from '../components/Portal';
import PageTransition from '../components/PageTransition';
import Newsletter from '../components/Newsletter';
import Contact from '../components/Contact';

// Icons for portals
const OfferingsIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
    <circle cx="24" cy="24" r="16" />
    <path d="M24 8v32M8 24h32" strokeWidth="1" opacity="0.5" />
    <circle cx="24" cy="24" r="6" />
    <path d="M24 18c3 0 6 2.5 6 6s-3 6-6 6" fill="currentColor" opacity="0.3" />
  </svg>
);

const EventsIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
    <rect x="8" y="12" width="32" height="28" rx="2" />
    <path d="M8 20h32" />
    <path d="M16 8v8M32 8v8" />
    <circle cx="24" cy="30" r="4" fill="currentColor" opacity="0.4" />
  </svg>
);

const JourneyIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
    <path d="M8 40c4-8 8-12 16-24s12-8 16 0" />
    <circle cx="24" cy="16" r="4" />
    <circle cx="38" cy="20" r="3" fill="currentColor" opacity="0.4" />
    <path d="M12 36l4-4 4 4" strokeWidth="1" />
  </svg>
);

export default function Hub() {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <ParallaxBackground variant="hub" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 vignette noise-overlay">
        {/* Main content */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Name / Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-gold-gradient glow-gold animate-flicker tracking-wide flex items-center justify-center gap-2 md:gap-4" style={{ fontVariantNumeric: 'lining-nums' }}>
              <span>M</span>
              <span className="text-[#c9a227]/60 text-3xl md:text-5xl lg:text-6xl leading-none">✦</span>
              <span className="tabular-nums">9</span>
              <span className="text-[#c9a227]/60 text-3xl md:text-5xl lg:text-6xl leading-none">✦</span>
              <span className="tabular-nums">9</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-[#f5f0e6]/60 font-light tracking-wide mb-4"
          >
            {t('hub.tagline')}
          </motion.p>

          {/* Subtitle / Essence */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg text-[#f5f0e6]/40 font-light italic max-w-xl mx-auto mb-16"
          >
            "{t('hub.essence')}"
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <span className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-[#c9a227]/40" />
            <motion.span
              className="w-2 h-2 rounded-full bg-[#c9a227]/60"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <span className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-[#c9a227]/40" />
          </motion.div>

          {/* Three Portals */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
            <Portal
              to="/offerings"
              title={t('hub.portals.offerings')}
              subtitle={t('hub.portals.offeringsSubtitle')}
              icon={<OfferingsIcon />}
              delay={0}
            />
            <Portal
              to="/events"
              title={t('hub.portals.events')}
              subtitle={t('hub.portals.eventsSubtitle')}
              icon={<EventsIcon />}
              delay={0.2}
            />
            <Portal
              to="/journey"
              title={t('hub.portals.journey')}
              subtitle={t('hub.portals.journeySubtitle')}
              icon={<JourneyIcon />}
              delay={0.4}
            />
          </div>

          {/* Newsletter */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Newsletter variant="inline" />
          </motion.div>
        </div>

      </div>

      {/* Fixed Contact Symbol */}
      <Contact variant="floating" />
    </PageTransition>
  );
}
