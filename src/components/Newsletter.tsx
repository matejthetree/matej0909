import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, FormEvent } from 'react';

interface NewsletterProps {
  variant?: 'card' | 'inline';
  title?: string;
  description?: string;
}

export default function Newsletter({
  variant = 'card',
  title,
  description,
}: NewsletterProps) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const displayTitle = title || t('newsletter.title');
  const displayDescription = description || t('newsletter.description');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const formData = new FormData();
      formData.append('form-name', 'newsletter');
      formData.append('email', email);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const getButtonText = () => {
    switch (status) {
      case 'submitting': return t('newsletter.sending', 'Sending...');
      case 'success': return t('newsletter.success', 'Subscribed ✓');
      case 'error': return t('newsletter.error', 'Try Again');
      default: return t('newsletter.subscribe');
    }
  };

  if (variant === 'inline') {
    return (
      <motion.form
        name="newsletter"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <span className="text-[#f5f0e6]/50 text-sm">{displayDescription}</span>
        <div className="flex gap-3">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('newsletter.placeholder')}
            required
            disabled={status === 'submitting' || status === 'success'}
            className="px-4 py-2 rounded-full bg-[#0a0908]/50 border border-[#c9a227]/20 text-[#f5f0e6] placeholder-[#f5f0e6]/30 focus:outline-none focus:border-[#c9a227]/50 transition-colors text-sm disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'submitting' || status === 'success'}
            className="px-5 py-2 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/30 text-[#c9a227] hover:bg-[#c9a227]/20 transition-colors text-sm whitespace-nowrap disabled:opacity-50"
          >
            {getButtonText()}
          </button>
        </div>
      </motion.form>
    );
  }

  // Card variant (default)
  return (
    <motion.form
      name="newsletter"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-8 rounded-xl ceremonial-border bg-[#1a120d]/30 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <h4 className="text-xl text-[#c9a227] mb-4">{displayTitle}</h4>
      <p className="text-[#f5f0e6]/50 text-sm mb-6">{displayDescription}</p>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('newsletter.placeholder')}
          required
          disabled={status === 'submitting' || status === 'success'}
          className="flex-1 px-4 py-3 rounded-full bg-[#0a0908]/50 border border-[#c9a227]/20 text-[#f5f0e6] placeholder-[#f5f0e6]/30 focus:outline-none focus:border-[#c9a227]/50 transition-colors disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'submitting' || status === 'success'}
          className="px-6 py-3 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/30 text-[#c9a227] hover:bg-[#c9a227]/20 transition-colors whitespace-nowrap disabled:opacity-50"
        >
          {getButtonText()}
        </button>
      </div>
    </motion.form>
  );
}
