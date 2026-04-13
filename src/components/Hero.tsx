/**
 * src/components/Hero.tsx
 *
 * Hero section for Zenith Journal landing page.
 * Quiet Confidence redesign: Typography-first, warm minimalism, no gradients/orbs.
 *
 * Pattern Recognition variant (Apr 2026): Headline leads with invisible AI pattern
 * recognition and "everything journal" positioning. Reddit intel (2026-04-07) surfaced
 * three converging themes: "everything journal" gap (r/Journaling, 157 engagement),
 * system fatigue / "removing decisions" (r/ADHD, 76 engagement), and demand for AI
 * that disappears rather than becoming another tool to manage (r/aiagents).
 * Notion task: https://notion.so/334fb7321349811a97c5f89be5437bd1
 *
 * Previous variant: "Never face a blank page again" (blank-page anxiety angle from
 * r/Journaling). Preserved in git history for rollback.
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

        {/* Headline - Pattern recognition + everything journal positioning */}
        <motion.h1
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-8 leading-tight tracking-tight"
        >
          Your life has patterns.
          <br />
          <span className="text-ember">Zenith reveals them.</span>
        </motion.h1>

        {/* Subhead - Everything journal + invisible AI + zero decisions */}
        <motion.p
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
          className="text-lg sm:text-xl text-stone mb-12 max-w-2xl mx-auto leading-relaxed font-body"
        >
          Your everything journal — reflection, tracking, goals, life, all in one place. Just write. Zenith's AI works invisibly across your entries, surfacing emotional patterns, recurring obstacles, and breakthroughs you'd never spot on your own. No setup. No categories. No decisions.
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
          <span>Pattern Recognition</span>
          <span className="hidden sm:inline text-stone/30">|</span>
          <span>Everything Journal</span>
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
