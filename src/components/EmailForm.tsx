/**
 * src/components/EmailForm.tsx
 *
 * Reusable email capture form for Zenith Journal waitlist.
 * Japanese Aesthetic + Liquid Glass redesign: glass-surface input,
 * ember accent glass-interactive submit button.
 *
 * Related: utils/waitlist.ts, Hero.tsx, FinalCTA.tsx
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { subscribeToWaitlist } from '../utils/waitlist';

interface EmailFormProps {
  buttonText?: string;
  className?: string;
}

type FormState = 'idle' | 'loading' | 'success' | 'error';

const EmailForm: React.FC<EmailFormProps> = ({
  buttonText = 'Join the Co-Creators',
  className = '',
}) => {
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formState === 'loading') return;

    setFormState('loading');
    setErrorMessage('');

    const result = await subscribeToWaitlist(email);

    if (result.success) {
      setFormState('success');
      setEmail('');
    } else {
      setFormState('error');
      setErrorMessage(result.error || 'Something went wrong');
    }
  };

  if (formState === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className={`flex items-center gap-3 p-4 glass-surface rounded-[var(--radius-lg)] ${className}`}
      >
        <CheckCircle className="w-5 h-5 text-ember flex-shrink-0" />
        <p className="text-cream font-body">
          You're in! Check your inbox for a welcome message.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (formState === 'error') setFormState('idle');
            }}
            placeholder="Enter your email"
            required
            disabled={formState === 'loading'}
            aria-label="Email address"
            aria-describedby={formState === 'error' ? 'email-error' : undefined}
            className={`w-full px-4 py-3 rounded-[var(--radius-lg)] glass-surface font-body
              ${formState === 'error' ? 'border-red-500/50' : ''}
              text-cream placeholder-stone/50
              focus:outline-none focus:border-ember/50 focus:ring-1 focus:ring-ember/20
              transition-all duration-500 ease-out
              disabled:opacity-50 disabled:cursor-not-allowed`}
          />
        </div>
        <motion.button
          type="submit"
          disabled={formState === 'loading' || !email}
          whileHover={{ scale: formState === 'loading' ? 1 : 1.01 }}
          whileTap={{ scale: formState === 'loading' ? 1 : 0.99 }}
          className={`px-6 py-3 rounded-[var(--radius-pill)] font-medium font-body
            bg-ember text-ink glass-interactive
            transition-all duration-500 ease-out
            hover:bg-dawn hover:shadow-ember-glow
            disabled:opacity-50 disabled:cursor-not-allowed
            flex items-center justify-center gap-2 min-w-[180px]`}
        >
          {formState === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Joining...</span>
            </>
          ) : (
            buttonText
          )}
        </motion.button>
      </div>

      {formState === 'error' && (
        <motion.div
          id="email-error"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
          className="flex items-center gap-2 mt-3 text-red-400 text-sm font-body"
          role="alert"
        >
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </motion.div>
      )}
    </form>
  );
};

export default EmailForm;
