import { motion } from 'framer-motion';
import ParallaxBackground from '../components/ParallaxBackground';
import PageTransition from '../components/PageTransition';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';

const offerings = [
  {
    id: 'tobacco',
    title: 'Healing Sessions with Tobacco',
    subtitle: 'Private & Group Work',
    description:
      'The sacred tobacco plant has been used for millennia as a powerful ally in healing work. Through ceremonial use, we connect with its spirit to cleanse, protect, and open pathways to deeper understanding.',
    details: [
      'One-on-one private sessions',
      'Small group ceremonies',
      'Online and in-person options',
      'Integration support included',
    ],
    icon: (
      <svg viewBox="0 0 60 100" className="w-full h-full" fill="currentColor" opacity="0.6">
        <path d="M30 0 C15 20 5 40 5 60 C5 80 15 95 30 100 C45 95 55 80 55 60 C55 40 45 20 30 0 Z M30 20 C35 35 35 55 30 85 C25 55 25 35 30 20 Z" />
      </svg>
    ),
  },
  {
    id: 'ceremonies',
    title: 'Plant Ceremonies',
    subtitle: 'Sacred Medicine Gatherings',
    description:
      'Held in ceremonial containers with deep respect for the traditions, these gatherings offer space for profound healing, insight, and connection with the plant spirits.',
    details: [
      'Traditional ceremonial setting',
      'Careful preparation guidance',
      'Safe, held container',
      'Experienced facilitation',
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4v8" />
        <circle cx="24" cy="20" r="8" />
        <path d="M16 28c-4 4-8 12-8 16h32c0-4-4-12-8-16" fill="currentColor" opacity="0.3" />
        <path d="M20 20c0 0 4 4 8 0" />
      </svg>
    ),
  },
  {
    id: 'dieta',
    title: 'Plant Diet School',
    subtitle: 'The Dieta Path',
    description:
      'The traditional plant diet (dieta) is a profound practice of isolation, fasting, and communion with plant spirits. Over weeks of dedicated practice, deep healing and learning unfolds.',
    details: [
      'Multi-week commitments',
      'Various plant allies available',
      'Online guidance throughout',
      'Optional in-person residence',
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 44V24" />
        <path d="M24 24c-8 0-12-8-12-16 4 4 8 4 12 4s8 0 12-4c0 8-4 16-12 16z" fill="currentColor" opacity="0.3" />
        <circle cx="24" cy="8" r="4" />
        <path d="M16 40l8 4 8-4" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: 'talks',
    title: 'Talks & Lectures',
    subtitle: 'Sharing Wisdom',
    description:
      'Educational talks and lectures on plant medicine traditions, healing practices, and the sacred path. Available for conferences, retreats, universities, and private gatherings.',
    details: [
      'Conference presentations',
      'Workshop facilitation',
      'Educational seminars',
      'Online and in-person options',
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="12" r="6" />
        <path d="M12 44v-8c0-4 4-8 12-8s12 4 12 8v8" fill="currentColor" opacity="0.3" />
        <path d="M6 20h8M34 20h8" />
        <path d="M8 16l4 4-4 4M40 16l-4 4 4 4" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Offerings() {
  return (
    <PageTransition>
      <ParallaxBackground variant="offerings" />

      <div className="relative z-10 min-h-screen noise-overlay">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-6 pt-24">
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
              <span className="text-xs tracking-[0.4em] uppercase text-[#c9a227]/60">Sacred Work</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gold-gradient glow-gold mb-8">
              Offerings
            </h1>

            <p className="text-xl text-[#f5f0e6]/60 font-light leading-relaxed max-w-2xl mx-auto">
              {/* Placeholder for your introduction to the work */}
              Each path of healing is unique. Through sacred plants and ceremony, I offer guidance for those
              called to walk this ancient way of transformation and remembrance.
            </p>

            {/* Decorative element */}
            <motion.div
              className="flex items-center justify-center gap-4 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="w-12 h-px bg-[#c9a227]/30" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227]/50" />
              <span className="w-12 h-px bg-[#c9a227]/30" />
            </motion.div>
          </motion.div>
        </section>

        {/* Offerings Grid */}
        <section className="px-6 py-20">
          <motion.div
            className="max-w-6xl mx-auto grid gap-12 md:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.id}
                variants={itemVariants}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                {/* Icon / Visual side */}
                <motion.div
                  className={`relative aspect-square max-w-md mx-auto ${
                    index % 2 === 1 ? 'md:col-start-2' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-radial from-[#c9a227]/10 via-transparent to-transparent" />
                  <div className="absolute inset-8 rounded-full ceremonial-border bg-[#1a120d]/30 backdrop-blur-sm flex items-center justify-center portal-glow">
                    <motion.div
                      className="w-24 h-24 text-[#c9a227]"
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 2, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.5,
                      }}
                    >
                      {offering.icon}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content side */}
                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <span className="text-xs tracking-[0.3em] uppercase text-[#c9a227]/50 mb-3 block">
                    {offering.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl text-[#f5f0e6] mb-6 glow-gold">
                    {offering.title}
                  </h2>
                  <p className="text-[#f5f0e6]/60 text-lg leading-relaxed mb-8">
                    {offering.description}
                  </p>

                  {/* Details list */}
                  <ul className="space-y-3">
                    {offering.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3 text-[#f5f0e6]/50"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227]/60" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.a
                    href="mailto:info@matej0909.com"
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full ceremonial-border bg-[#1a120d]/50 text-[#c9a227] hover:bg-[#1a120d]/80 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Inquire</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Newsletter Section */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl text-[#f5f0e6]/40 font-light mb-8">Stay in the Loop</h3>
            <Newsletter
              title="Join the Circle"
              description="Receive updates on new offerings, ceremonies, and teachings."
            />
          </div>
        </section>

        {/* Contact Section */}
        <Contact variant="section" />
        <Contact variant="footer" />
      </div>
    </PageTransition>
  );
}
