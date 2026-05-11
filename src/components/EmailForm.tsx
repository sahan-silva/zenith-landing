/**
 * src/components/EmailForm.tsx
 *
 * Reusable email capture form for Zenith Journal waitlist.
 *
 * Pill-shaped recipe ported from Burlit's TradieMateEmailForm (aramuna-landing-page/
 * components/trademate/TradieMateEmailForm.tsx) for product-family visual consistency.
 * Both input and button are fully rounded (rounded-full); they stack on mobile and
 * sit side-by-side on sm+. Burlit's accent (dusty lavender) becomes Zenith's ember;
 * accent-hover becomes dawn; accent-glow becomes ember-glow. Supabase plumbing
 * (subscribeToWaitlist) untouched.
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
        className={`flex items-center gap-3 rounded-full border border-ember/35 bg-ember/[0.06] px-5 py-3.5 ${className}`}
        role="status"
      >
        <CheckCircle className="h-4 w-4 flex-shrink-0 text-ember" />
        <p className="m-0 text-sm text-cream font-body">
          You're in! Check your inbox for a welcome message.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:gap-2">
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
          className={`min-w-0 flex-1 rounded-full bg-black/40 px-5 py-3 font-body text-[15px] text-cream placeholder:text-stone/70 transition-all duration-300 ease-out focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/20 disabled:cursor-not-allowed disabled:opacity-50
            ${formState === 'error' ? 'border border-red-500/50' : 'border border-stone/40'}`}
        />
        <motion.button
          type="submit"
          disabled={formState === 'loading' || !email}
          whileHover={{ scale: formState === 'loading' ? 1 : 1.01 }}
          whileTap={{ scale: formState === 'loading' ? 1 : 0.98 }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ember px-6 py-3 font-body text-[15px] font-semibold text-ink transition-all duration-300 ease-out hover:bg-dawn hover:shadow-ember-glow disabled:cursor-not-allowed disabled:opacity-50"
        >
          {formState === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Joining…</span>
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
          transition={{ duration: 0.4, ease: 'easeOut' as const }}
          className="mt-3 flex items-center gap-2 text-sm text-red-400 font-body"
          role="alert"
        >
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </motion.div>
      )}
    </form>
  );
};

export default EmailForm;
