/**
 * src/components/Hero.tsx
 *
 * Hero section for Zenith Journal landing page.
 * Quiet Confidence redesign: Typography-first, warm minimalism, no gradients/orbs.
 *
 * Midnight Clarity pivot (Apr 2026): Headline and subhead now lead with the evening
 * clarity capture angle — cortisol drops at night make thoughts feel clear, Zenith
 * captures that clarity and transforms it into morning actions via overnight AI
 * processing. Longitudinal AI learning retained as supporting proof in subhead.
 * Source: Reddit r/productivity (824 upvotes, 42 comments).
 * Thread: https://www.reddit.com/r/productivity/comments/1s1r1kn/
 * Key insight: "cortisol dropping at night... brain mistakes that for having things
 * figured out" — Zenith turns that fleeting clarity into durable action.
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

        {/* Headline - Midnight clarity capture as the lead hook */}
        <motion.h1
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-8 leading-tight tracking-tight"
        >
          Capture midnight clarity.
          <br />
          <span className="text-ember">Act on it tomorrow.</span>
        </motion.h1>

        {/* Subhead - Evening capture → overnight AI → morning actions; closes with longitudinal learning moat */}
        <motion.p
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
          className="text-lg sm:text-xl text-stone mb-12 max-w-2xl mx-auto leading-relaxed font-body"
        >
          Late at night, everything feels clear — but by morning, it's gone. Zenith captures your evening intentions, processes them overnight, and wakes you with 1–3 specific actions. Over time, it learns your patterns and turns fleeting clarity into lasting change.
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
          <span>Evening Capture → Morning Actions</span>
          <span className="hidden sm:inline text-stone/30">|</span>
          <span>AI That Learns You Over Time</span>
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
