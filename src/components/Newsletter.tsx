import { motion } from 'framer-motion';

interface NewsletterProps {
  variant?: 'card' | 'inline';
  title?: string;
  description?: string;
}

export default function Newsletter({
  variant = 'card',
  title = 'Stay Connected',
  description = 'Be notified when new events and ceremonies are announced.',
}: NewsletterProps) {
  if (variant === 'inline') {
    return (
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[#f5f0e6]/50 text-sm">{description}</span>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            className="px-4 py-2 rounded-full bg-[#0a0908]/50 border border-[#c9a227]/20 text-[#f5f0e6] placeholder-[#f5f0e6]/30 focus:outline-none focus:border-[#c9a227]/50 transition-colors text-sm"
          />
          <button className="px-5 py-2 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/30 text-[#c9a227] hover:bg-[#c9a227]/20 transition-colors text-sm whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </motion.div>
    );
  }

  // Card variant (default)
  return (
    <motion.div
      className="max-w-md mx-auto p-8 rounded-xl ceremonial-border bg-[#1a120d]/30 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h4 className="text-xl text-[#c9a227] mb-4">{title}</h4>
      <p className="text-[#f5f0e6]/50 text-sm mb-6">{description}</p>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 px-4 py-3 rounded-full bg-[#0a0908]/50 border border-[#c9a227]/20 text-[#f5f0e6] placeholder-[#f5f0e6]/30 focus:outline-none focus:border-[#c9a227]/50 transition-colors"
        />
        <button className="px-6 py-3 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/30 text-[#c9a227] hover:bg-[#c9a227]/20 transition-colors whitespace-nowrap">
          Subscribe
        </button>
      </div>
    </motion.div>
  );
}
