/**
 * src/components/Hero.tsx
 *
 * Hero section for Zenith Journal landing page.
 * Japanese Aesthetic + Liquid Glass redesign: glass-interactive CTAs,
 * ember accent, pill-radius buttons.
 *
 * Related: EmailForm.tsx, ZenithLanding.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';
import EmailForm from './EmailForm';

const Hero: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center font-body">
      {/* Content - Typography-first */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
        {/* Status badge - glass-interactive */}
        <motion.div
          {...fadeIn}
          className="inline-flex items-center gap-2 px-4 py-2 mb-10 glass-interactive rounded-[var(--radius-pill)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-ember" />
          <span className="text-sm text-stone font-body">Coming Soon</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-8 leading-tight tracking-tight"
        >
          Your life has a story.
          <br />
          <span className="text-ember">Zenith helps you see it.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
          className="text-lg sm:text-xl text-stone mb-12 max-w-2xl mx-auto leading-relaxed font-body"
        >
          Just talk. Zenith listens, remembers, and surfaces the goals,
          patterns, and moments that matter—so you can finally connect the dots.
        </motion.p>

        {/* Email Form */}
        <motion.div
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.3 }}
          className="max-w-md mx-auto mb-16"
        >
          <EmailForm />
        </motion.div>

        {/* Trust badges - glass-surface pill */}
        <motion.div
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.4 }}
          className="inline-flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-stone text-sm glass-surface rounded-[var(--radius-pill)] px-6 py-3"
        >
          <span>Voice-First Capture</span>
          <span className="hidden sm:inline text-stone/30">|</span>
          <span>AI That Remembers You</span>
          <span className="hidden sm:inline text-stone/30">|</span>
          <span>100% Private</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
