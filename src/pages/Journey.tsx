import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ParallaxBackground from '../components/ParallaxBackground';
import PageTransition from '../components/PageTransition';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';

const journeySections = [
  {
    id: 'beginning',
    title: 'The Beginning',
    content: `[Your early life and the seeds that were planted for this path. What drew you initially? What were you seeking?]`,
    placeholder: true,
  },
  {
    id: 'calling',
    title: 'The Calling',
    content: `[The moment or period when the plants called you. Your first encounters with sacred medicine. The recognition that this was your path.]`,
    placeholder: true,
  },
  {
    id: 'apprenticeship',
    title: 'Meeting the Plants',
    content: `[Your training and apprenticeship. The teachers, human and plant, who guided you. The dietas, ceremonies, and lessons learned.]`,
    placeholder: true,
  },
  {
    id: 'present',
    title: 'The Path Now',
    content: `[Where you are today. Your approach to healing work. Your vision and what you offer to those who come to you.]`,
    placeholder: true,
  },
];

// Decorative floating leaf
const FloatingLeaf = ({ delay = 0, side = 'left', scrollYProgress }: { delay?: number; side?: 'left' | 'right', scrollYProgress: any }) => {
  // Adjusted for section-relative progress (0 to 1)
  // 0: entering viewport (from bottom)
  // 0.5: center of viewport
  // 1: leaving viewport (to top)

  // Create a gentle floating effect that tracks the section
  const leafY = useTransform(scrollYProgress, [0, 0.5, 1], [-50, 0, 50]);
  const leafOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
        className={`absolute top-1/2 transform -translate-y-1/2 ${side === 'left' ? '-left-8 md:-left-16' : '-right-8 md:-right-16'} w-12 h-16 text-[#2d4a2d]/30 pointer-events-none`}
        style={{ y: leafY, opacity: leafOpacity }}
        transition={{ delay, duration: 1 }}
    >
        <motion.svg
        viewBox="0 0 40 60"
        fill="currentColor"
        className="w-full h-full"
        animate={{
            y: [0, -15, 0],
            rotate: side === 'left' ? [0, 10, 0] : [0, -10, 0],
        }}
        transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay,
        }}
        >
        <path d="M20 0 C10 12 3 25 3 38 C3 51 10 58 20 60 C30 58 37 51 37 38 C37 25 30 12 20 0 Z" />
        <path d="M20 15 C22 25 22 40 20 55" fill="none" stroke="#1a2e1a" strokeWidth="1" opacity="0.5" />
        </motion.svg>
    </motion.div>
  );
};

const JourneySection = ({ section, index }: { section: typeof journeySections[0], index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Decorative leaves synchronized with this section */}
      <FloatingLeaf delay={index * 0.2} side={index % 2 === 0 ? 'left' : 'right'} scrollYProgress={scrollYProgress} />

      {/* Timeline node */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 -top-6 w-4 h-4 rounded-full bg-[#1a120d] border-2 border-[#c9a227]/50 hidden md:block z-10"
        whileInView={{
          boxShadow: [
            '0 0 0 0 rgba(201, 162, 39, 0)',
            '0 0 20px 10px rgba(201, 162, 39, 0.2)',
            '0 0 0 0 rgba(201, 162, 39, 0)',
          ],
        }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Content */}
      <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
        <motion.span
          className="text-xs tracking-[0.3em] uppercase text-[#c9a227]/50 mb-3 block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Chapter {index + 1}
        </motion.span>

        <h2 className="text-3xl md:text-4xl text-[#f5f0e6] mb-6 glow-gold">
          {section.title}
        </h2>

        <div className={`text-lg leading-relaxed ${section.placeholder ? 'text-[#f5f0e6]/30 italic' : 'text-[#f5f0e6]/60'}`}>
          {section.content.split('\n').map((paragraph, i) => (
            <p key={i} className="mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Decorative underline */}
        <motion.div
          className="w-16 h-px bg-gradient-to-r from-[#c9a227]/40 to-transparent mt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Progress line animation
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <PageTransition>
      <ParallaxBackground variant="journey" />

      <div ref={containerRef} className="relative z-10 min-h-screen noise-overlay">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex items-center justify-center px-6 pt-24">
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
              <span className="text-xs tracking-[0.4em] uppercase text-[#c9a227]/60">The Path</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gold-gradient glow-gold mb-8">
              My Journey
            </h1>

            {/* Optional: Photo or silhouette placeholder */}
            <motion.div
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#1a120d]/50 to-[#0a0908]/80 ceremonial-border flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-[#c9a227]/30 text-4xl">✦</span>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-[#f5f0e6]/50 font-light italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {/* Placeholder for your essence/tagline */}
              "The plants chose me, as they choose all who walk this path with sincerity."
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="flex flex-col items-center gap-2 text-[#c9a227]/40"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-xs tracking-[0.2em] uppercase">Read my story</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Journey Narrative */}
        <section className="relative px-6 py-20">
          {/* Central timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
            <div className="w-full h-full bg-[#c9a227]/10" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#c9a227]/50 to-[#c9a227]/20"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-32">
            {journeySections.map((section, index) => (
              <JourneySection key={section.id} section={section} index={index} />
            ))}
          </div>
        </section>

        {/* Closing invitation */}
        <section className="px-6 py-20">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Decorative element */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="w-16 h-px bg-[#c9a227]/20" />
              <motion.span
                className="w-3 h-3 rounded-full border border-[#c9a227]/40"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <span className="w-16 h-px bg-[#c9a227]/20" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl text-[#c9a227] mb-6 glow-gold">
              If My Path Resonates With Yours...
            </h3>

            <p className="text-xl text-[#f5f0e6]/50 font-light leading-relaxed mb-8">
              {/* Placeholder */}
              I welcome sincere seekers who feel called to this work.
              Reach out, and let us see what medicine wants to unfold.
            </p>
          </motion.div>
        </section>

        {/* Newsletter Section */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <Newsletter
              title="Walk With Me"
              description="Receive occasional updates on teachings, events, and reflections."
            />
          </div>
        </section>

        {/* Contact */}
        <Contact variant="section" />
        <Contact variant="footer" />
      </div>

      {/* Fixed Contact Symbol */}
      <Contact variant="floating" />
    </PageTransition>
  );
}
