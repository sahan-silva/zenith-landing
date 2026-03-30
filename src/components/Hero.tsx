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
 * Anti-engagement pivot (Mar 2026): Headline restructured to lead with value-delivered
 * as the primary narrative arc, not just a subhead qualifier. The contrast between
 * "not time logged" and "value delivered" is now the core promise — surfaced in both
 * the headline and subhead to establish the anti-engagement positioning immediately.
 *
 * Emotional lightness pivot (Mar 2026): Primary emotional outcome is now "feel lighter"
 * — sourced from Reddit r/Journaling where users describe journaling as feeling lighter
 * and treating it as a date with themselves. The anti-engagement contrast remains; the
 * lightness framing makes the visceral benefit land before the intellectual argument.
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

        {/* Headline - Emotional lightness as primary outcome; anti-engagement as the why */}
        <motion.h1
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-8 leading-tight tracking-tight"
        >
          Leave lighter
          <br />
          <span className="text-ember">than you arrived.</span>
        </motion.h1>

        {/* Subhead - Lightness as the emotional promise; still contrasts with attention-harvesting apps */}
        <motion.p
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
          className="text-lg sm:text-xl text-stone mb-12 max-w-2xl mx-auto leading-relaxed font-body"
        >
          Most apps measure how long you stay. Zenith measures how light you feel when you go. Just talk — every session lifts the weight of unprocessed thoughts and leaves you with the clarity that actually moves your life forward.
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
          <span>Zero Cloud Exposure</span>
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
