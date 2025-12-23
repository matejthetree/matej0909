import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ParallaxBackground from '../components/ParallaxBackground';
import PageTransition from '../components/PageTransition';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';

const BirchDecor = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 100 150" className={className} fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M50 150 L50 0" opacity="0.3" />
    <path d="M50 20 L30 5" opacity="0.4" />
    <path d="M50 40 L70 20" opacity="0.4" />
    <path d="M50 60 L25 40" opacity="0.4" />
    <path d="M50 80 L75 55" opacity="0.4" />
    <ellipse cx="28" cy="4" rx="10" ry="6" fill="currentColor" opacity="0.2" />
    <ellipse cx="72" cy="18" rx="9" ry="5" fill="currentColor" opacity="0.2" />
    <ellipse cx="23" cy="38" rx="11" ry="6" fill="currentColor" opacity="0.2" />
    <ellipse cx="77" cy="53" rx="10" ry="5" fill="currentColor" opacity="0.2" />
  </svg>
);

export default function Events() {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <ParallaxBackground variant="events" />

      <div className="relative z-10 min-h-screen noise-overlay">
        {/* Hero Section */}
        <section className="min-h-[50vh] flex items-center justify-center px-6 pt-24">
          <motion.div
            className="text-center max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-xs tracking-[0.4em] uppercase text-[#c9a227]/60">{t('events.label')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gold-gradient glow-gold mb-8">
              {t('events.title')}
            </h1>

            <p className="text-xl text-[#f5f0e6]/60 font-light leading-relaxed max-w-2xl mx-auto">
              {t('events.intro')}
            </p>
          </motion.div>
        </section>

        {/* Featured Event - White Birch Diet */}
        <section className="px-6 py-16">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Featured label */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/20 text-[#c9a227] text-sm tracking-wider">
                <motion.span
                  className="w-2 h-2 rounded-full bg-[#c9a227]"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {t('events.upcoming')}
              </span>
            </motion.div>

            {/* Main featured card */}
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-[#f5f0e6]/5 shadow-2xl backdrop-blur-md"
              style={{
                boxShadow: '0 0 20px rgba(201, 162, 39, 0.15), inset 0 0 60px rgba(201, 162, 39, 0.05)',
                backgroundImage: 'linear-gradient(to bottom right, rgba(245, 240, 230, 0.05), rgba(245, 240, 230, 0.02))',
              }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5 }}
            >
              {/* Parchment texture overlay */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  mixBlendMode: 'overlay'
                }}
              />

              {/* Golden edge gradient border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom right, rgba(201, 162, 39, 0.4), transparent 40%, transparent 60%, rgba(201, 162, 39, 0.4)) border-box',
                  WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}
              />
              <div className="absolute top-0 left-0 w-32 h-48 text-[#2d4a2d] opacity-40 -translate-x-1/4 -translate-y-1/4">
                <BirchDecor className="w-full h-full" />
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-48 text-[#2d4a2d] opacity-40 translate-x-1/4 translate-y-1/4 transform scale-x-[-1]">
                <BirchDecor className="w-full h-full" />
              </div>

              {/* Golden accent glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-[#c9a227]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 p-8 md:p-12 lg:p-16">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                  {/* Left side - Event info */}
                  <div className="flex-1">
                    <motion.div
                      className="flex items-center gap-3 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="text-4xl">🌿</span>
                      <div>
                        <h2 className="text-3xl md:text-4xl text-[#f5f0e6] glow-gold">
                          {t('events.whiteBirch.title')}
                        </h2>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex flex-wrap gap-4 mb-8"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <span className="flex items-center gap-2 text-[#f5f0e6]/70">
                        <svg className="w-5 h-5 text-[#c9a227]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <path d="M3 10h18" />
                          <path d="M8 2v4M16 2v4" />
                        </svg>
                        {t('events.whiteBirch.date')}
                      </span>
                      <span className="flex items-center gap-2 text-[#f5f0e6]/70">
                        <svg className="w-5 h-5 text-[#c9a227]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        {t('events.whiteBirch.duration')}
                      </span>
                      <span className="flex items-center gap-2 text-[#f5f0e6]/70">
                        <svg className="w-5 h-5 text-[#c9a227]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="12" cy="10" r="3" />
                          <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                        </svg>
                        {t('events.whiteBirch.location')}
                      </span>
                    </motion.div>

                    <motion.p
                      className="text-[#f5f0e6]/60 text-lg leading-relaxed mb-8 max-w-xl"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      {t('events.whiteBirch.description')}
                    </motion.p>
                  </div>

                  {/* Right side - Pricing */}
                  <motion.div
                    className="lg:w-80 p-6 rounded-xl bg-[#0a0908]/50 ceremonial-border"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="text-center mb-6">
                      <span className="text-sm text-[#c9a227]/60 uppercase tracking-wider">{t('events.whiteBirch.basePrice')}</span>
                      <div className="text-4xl md:text-5xl text-[#c9a227] font-light mt-2 glow-gold">
                        €900
                      </div>
                    </div>

                    <div className="space-y-4 border-t border-[#c9a227]/10 pt-6">
                      <div className="flex justify-between items-start text-sm">
                        <span className="text-[#f5f0e6]/50">{t('events.whiteBirch.liveCeremonies')}</span>
                        <span className="text-[#f5f0e6]/80 text-right">
                          {t('events.whiteBirch.liveCeremoniesPrice')}
                          <span className="block text-xs text-[#f5f0e6]/40">{t('events.whiteBirch.liveCeremoniesLocation')}</span>
                        </span>
                      </div>
                      <div className="flex justify-between items-start text-sm">
                        <span className="text-[#f5f0e6]/50">{t('events.whiteBirch.dietResidence')}</span>
                        <span className="text-[#f5f0e6]/80 text-right">
                          {t('events.whiteBirch.dietResidencePrice')}
                          <span className="block text-xs text-[#f5f0e6]/40">{t('events.whiteBirch.dietResidenceNote')}</span>
                        </span>
                      </div>
                    </div>

                    <motion.a
                      href="mailto:info@matej0909.com?subject=White%20Birch%20Diet%20Inquiry"
                      className="block w-full mt-8 px-6 py-4 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/30 text-center text-[#c9a227] hover:bg-[#c9a227]/20 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t('events.whiteBirch.inquireButton')}
                    </motion.a>
                  </motion.div>
                </div>
              </div>

              {/* Bottom golden accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent" />
            </motion.div>
          </motion.div>
        </section>

        {/* Future Events Section */}
        <section className="px-6 py-16">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-[#f5f0e6]/40 font-light mb-4">{t('events.moreGatherings')}</h3>
            <p className="text-[#f5f0e6]/30 italic mb-8">
              {t('events.moreGatheringsNote')}
            </p>

            <Newsletter />
          </motion.div>
        </section>

        <Contact variant="section" />
        <Contact variant="footer" />
      </div>

      <Contact variant="floating" />
    </PageTransition>
  );
}
