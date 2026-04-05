/**
 * src/components/Hero.tsx
 *
 * Hero section for Zenith Journal landing page.
 * Quiet Confidence redesign: Typography-first, warm minimalism, no gradients/orbs.
 *
 * Blank-Page Anxiety variant (Apr 2026): Headline leads with the universal journaling
 * barrier — staring at an empty page — and positions Zenith's AI prompts as the fix.
 * Source: Reddit r/Journaling (engagement: 34). Blank-canvas anxiety surfaced as the
 * most resonant pain point; therapist testimonials reinforce that guided prompts lower
 * the barrier to consistent journaling practice.
 * Notion task: https://notion.so/32ffb732134981448122d78e74c36c2d
 *
 * Previous variant: "Capture midnight clarity / Act on it tomorrow" (midnight-clarity
 * angle from r/productivity, 824 upvotes). Preserved in git history for rollback.
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

        {/* Headline - Blank-page anxiety as the lead hook */}
        <motion.h1
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-8 leading-tight tracking-tight"
        >
          Never face a blank page again.
          <br />
          <span className="text-ember">Just start writing.</span>
        </motion.h1>

        {/* Subhead - Blank-page pain → AI prompts solution → longitudinal learning moat */}
        <motion.p
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
          className="text-lg sm:text-xl text-stone mb-12 max-w-2xl mx-auto leading-relaxed font-body"
        >
          The hardest part of journaling is getting started. Zenith meets you with personalised prompts shaped by your mood, your goals, and what you wrote last time — so you never stare at a blank page wondering what to say. Over time, it learns your patterns and makes reflection effortless.
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
          <span>AI-Powered Prompts</span>
          <span className="hidden sm:inline text-stone/30">|</span>
          <span>Learns Your Patterns</span>
          <span className="hidden sm:inline text-stone/30">|</span>
          <span>Privacy-First</span>
          <span className="hidden sm:inline text-stone/30">|</span>
          <span>No Subscription</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
