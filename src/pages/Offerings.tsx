import { motion } from 'framer-motion';
import ParallaxBackground from '../components/ParallaxBackground';
import PageTransition from '../components/PageTransition';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';

const TobaccoLeafIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={`w-full h-full ${className}`}
    fill="currentColor"
    // Custom path for a tobacco leaf
  >
    <path d="M50 0C35 20 20 40 20 60C20 80 35 95 50 100C65 95 80 80 80 60C80 40 65 20 50 0Z M50 20C55 35 55 55 50 85C45 55 45 35 50 20Z" />
  </svg>
);

const CeremonialVesselIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={`w-full h-full ${className}`}
    fill="currentColor"
    // Custom path for a ceremonial vessel
  >
    <path d="M30 90H70V80H30V90ZM25 75H75L70 10H30L25 75ZM40 30H60L55 15H45L40 30Z" />
  </svg>
);

const BirchBranchIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={`w-full h-full ${className}`}
    fill="currentColor"
    // Custom path for a birch branch with leaves
  >
    <path d="M50 5C45 15 40 30 40 40M50 5C55 15 60 30 60 40M40 40C30 45 20 55 20 65M60 40C70 45 80 55 80 65M20 65C10 70 5 80 5 90M80 65C90 70 95 80 95 90" />
  </svg>
);

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
    icon: <TobaccoLeafIcon className="w-full h-full text-amber-700 opacity-60" />,
    cornerIcon: TobaccoLeafIcon,
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
    icon: <CeremonialVesselIcon className="w-full h-full text-emerald-700 opacity-60" />,
    cornerIcon: CeremonialVesselIcon,
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
    icon: <BirchBranchIcon className="w-full h-full text-stone-600 opacity-60" />,
    cornerIcon: BirchBranchIcon,
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
    cornerIcon: TobaccoLeafIcon, // Reusing TobaccoLeafIcon for talks
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

const CornerDecorations = ({ Icon }: { Icon: React.ComponentType<{ className?: string }> }) => {
  if (!Icon) return null;
  return (
    <>
      {/* Top Left */}
      <motion.div
        className="absolute -top-4 -left-4 w-12 h-12 text-[#c9a227] pointer-events-none opacity-10"
        variants={{
          hover: { opacity: 0.3, rotate: 15, scale: 1.1 }
        }}
        transition={{ duration: 0.8 }}
      >
        <Icon className="w-full h-full" />
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        className="absolute -bottom-4 -right-4 w-12 h-12 text-[#c9a227] pointer-events-none opacity-10"
        variants={{
          hover: { opacity: 0.3, rotate: -15, scale: 1.1 }
        }}
        transition={{ duration: 0.8 }}
      >
        <Icon className="w-full h-full transform scale-x-[-1]" />
      </motion.div>
    </>
  );
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
                whileHover="hover"
                className={`grid md:grid-cols-2 gap-8 items-center relative p-6 rounded-2xl transition-colors duration-500 hover:bg-[#1a120d]/30 ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                {/* Corner Decorations */}
                {offering.cornerIcon && <CornerDecorations Icon={offering.cornerIcon} />}

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

      {/* Fixed Contact Symbol */}
      <Contact variant="floating" />
    </PageTransition>
  );
}
