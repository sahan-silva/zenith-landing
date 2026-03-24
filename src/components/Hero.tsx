/**
 * src/components/Hero.tsx
 *
 * Hero section for Zenith Journal landing page.
 * Quiet Confidence redesign: Typography-first, warm minimalism, no gradients/orbs.
 *
 * Trust badge updated (Mar 2026): "100% Private" → "Privacy-First Wellness" to reinforce
 * the wellness-as-privacy positioning running through the Privacy section below.
 *
 * Value-centric pivot (Mar 2026): Subheading and first trust badge updated to position
 * Zenith against attention-harvesting apps. Every minute with Zenith should deliver
 * clarity — not just time logged. Source: Reddit r/Futurology user signals.
 *
 * Related: EmailForm.tsx, ZenithLanding.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';
import EmailForm from './EmailForm';

const Hero: React.FC = () => {
  // Single, simple fade-in animation (Quiet Confidence constraint)
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-ink font-body">
      {/* Content - Typography-first, no background effects */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
        {/* Status badge - understated */}
        <motion.div
          {...fadeIn}
          className="inline-flex items-center gap-2 px-4 py-2 mb-10 border border-stone/30 rounded-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-ember" />
          <span className="text-sm text-stone font-body">Coming Soon</span>
        </motion.div>

        {/* Headline - Serif display font for authority */}
        <motion.h1
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-8 leading-tight tracking-tight"
        >
          Your life has a story.
          <br />
          <span className="text-ember">Zenith helps you see it.</span>
        </motion.h1>

        {/* Subhead - Body font, warm stone color */}
        <motion.p
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
          className="text-lg sm:text-xl text-stone mb-12 max-w-2xl mx-auto leading-relaxed font-body"
        >
          Just talk. Zenith turns every minute of reflection into real clarity — surfacing the goals, patterns, and moments that matter. Not time logged. Value delivered.
        </motion.p>

        {/* Email Form */}
        <motion.div
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.3 }}
          className="max-w-md mx-auto mb-16"
        >
          <EmailForm />
        </motion.div>

        {/* Trust badges - Simple text, no icons */}
        <motion.div
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-stone text-sm"
        >
          <span>Every Minute Counts</span>
          <span className="hidden sm:inline text-stone/30">|</span>
          <span>AI That Remembers You</span>
          <span className="hidden sm:inline text-stone/30">|</span>
          <span>Privacy-First Wellness</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
