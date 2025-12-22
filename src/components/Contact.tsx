import { motion } from 'framer-motion';

interface ContactProps {
  variant?: 'footer' | 'section' | 'floating';
}

export default function Contact({ variant = 'footer' }: ContactProps) {
  if (variant === 'floating') {
    return (
      <motion.div
        className="fixed bottom-6 right-6 z-50 group" // Increased z-index to z-50 to ensure visibility above all other content including navigation
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
      >
        {/* Expanded contact info on hover */}
        <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <div className="bg-[#1a120d]/95 backdrop-blur-sm rounded-lg p-4 ceremonial-border min-w-[200px]">
            <a
              href="tel:+385977367486"
              className="flex items-center gap-3 text-[#f5f0e6]/80 hover:text-[#c9a227] transition-colors mb-2"
            >
              <PhoneIcon className="w-4 h-4 text-[#c9a227]/60" />
              <span className="text-sm">+385 97 736 7486</span>
            </a>
            <a
              href="mailto:info@matej0909.com"
              className="flex items-center gap-3 text-[#f5f0e6]/80 hover:text-[#c9a227] transition-colors"
            >
              <EmailIcon className="w-4 h-4 text-[#c9a227]/60" />
              <span className="text-sm">info@matej0909.com</span>
            </a>
          </div>
        </div>

        {/* Sacred symbol button */}
        <motion.div
          className="w-12 h-12 rounded-full bg-[#1a120d]/80 backdrop-blur-sm ceremonial-border portal-glow flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(201, 162, 39, 0.1)',
              '0 0 30px rgba(201, 162, 39, 0.2)',
              '0 0 20px rgba(201, 162, 39, 0.1)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <SacredSymbol className="w-5 h-5 text-[#c9a227]" />
        </motion.div>
      </motion.div>
    );
  }

  if (variant === 'section') {
    return (
      <motion.section
        className="py-20 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl text-[#c9a227] mb-4 glow-gold">
            Ready to Begin?
          </h3>
          <p className="text-[#f5f0e6]/60 mb-8 text-lg">
            Reach out to discuss your journey
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+385977367486"
              className="group flex items-center gap-3 px-6 py-3 rounded-full ceremonial-border bg-[#1a120d]/50 hover:bg-[#1a120d]/80 transition-all duration-300"
            >
              <PhoneIcon className="w-5 h-5 text-[#c9a227]" />
              <span className="text-[#f5f0e6] group-hover:text-[#c9a227] transition-colors">
                +385 97 736 7486
              </span>
            </a>

            <a
              href="mailto:info@matej0909.com"
              className="group flex items-center gap-3 px-6 py-3 rounded-full ceremonial-border bg-[#1a120d]/50 hover:bg-[#1a120d]/80 transition-all duration-300"
            >
              <EmailIcon className="w-5 h-5 text-[#c9a227]" />
              <span className="text-[#f5f0e6] group-hover:text-[#c9a227] transition-colors">
                info@matej0909.com
              </span>
            </a>
          </div>
        </div>
      </motion.section>
    );
  }

  // Footer variant (default)
  return (
    <footer className="relative py-12 px-6 border-t border-[#c9a227]/10 footer-ground bg-[#050403]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <a
            href="tel:+385977367486"
            className="flex items-center gap-2 text-[#f5f0e6]/60 hover:text-[#c9a227] transition-colors"
          >
            <PhoneIcon className="w-4 h-4" />
            <span>+385 97 736 7486</span>
          </a>
          <a
            href="mailto:info@matej0909.com"
            className="flex items-center gap-2 text-[#f5f0e6]/60 hover:text-[#c9a227] transition-colors"
          >
            <EmailIcon className="w-4 h-4" />
            <span>info@matej0909.com</span>
          </a>
        </div>

        {/* Decorative element */}
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-[#c9a227]/20" />
          <SacredSymbol className="w-4 h-4 text-[#c9a227]/40" />
          <span className="w-8 h-px bg-[#c9a227]/20" />
        </div>
      </div>
    </footer>
  );
}

// Icons
const PhoneIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EmailIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const SacredSymbol = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="0.5" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);
