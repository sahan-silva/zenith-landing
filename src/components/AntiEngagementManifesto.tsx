/**
 * src/components/AntiEngagementManifesto.tsx
 *
 * Anti-Engagement Manifesto section for Zenith Journal landing page.
 * Quiet Confidence visual style: Typography-first, ember accents, left-border pattern
 * consistent with Problem.tsx and Benefits.tsx.
 *
 * Declares Zenith's founding design philosophy: "We measure value delivered, not time spent."
 * Four principles drawn from the Reddit anti-engagement sentiment: time as product,
 * feature earn-their-place discipline, success = user leaving fulfilled, and zero dark patterns.
 *
 * Placement: Between Problem and Benefits in ZenithLanding.tsx.
 *
 * Related: Problem.tsx, Benefits.tsx, ZenithLanding.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const principles = [
  {
    title: 'Your time is not our product.',
    body: 'Other apps succeed when you scroll longer. We succeed when you close Zenith having gained something real. Your attention is yours.',
  },
  {
    title: 'Every feature earns its place.',
    body: 'We do not build features that keep you engaged. We build features that make your five minutes more valuable than their thirty. If a feature does not deliver clarity, it does not ship.',
  },
  {
    title: 'We succeed when you leave fulfilled, not when you stay longer.',
    body: 'Our measure of a great session is not session length — it is how clearly you see yourself when it ends. Short, rich, purposeful. That is the standard.',
  },
  {
    title: 'No dark patterns. Ever.',
    body: 'No streaks designed to trigger anxiety. No notifications engineered to manufacture urgency. No infinite feed. Zenith is built to respect your autonomy, not exploit it.',
  },
];

// Fade-in animation — consistent with Problem.tsx and Benefits.tsx (Quiet Confidence constraint)
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const AntiEngagementManifesto: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-ink font-body border-t border-stone/10">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          {...fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          {/* Overline — understated, consistent with Quiet Confidence */}
          <p className="text-xs sm:text-sm uppercase tracking-widest text-stone/60 font-medium mb-4">
            Our Design Philosophy
          </p>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-6 tracking-tight">
            We measure{' '}
            <span className="text-ember">value delivered.</span>
            <br />
            Not time spent.
          </h2>

          <p className="text-stone text-lg max-w-2xl mx-auto font-body leading-relaxed">
            Every decision at Zenith flows from a single question: did this session move you forward?
            Here is what that commitment looks like in practice.
          </p>
        </motion.div>

        {/* Principles — left-border style matching Problem.tsx pain points */}
        <div className="space-y-10">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative pl-6 border-l-2 border-ember/40"
            >
              <p className="text-xl sm:text-2xl text-cream font-medium mb-2 font-body">
                {principle.title}
              </p>
              <p className="text-stone text-lg font-body leading-relaxed">
                {principle.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement — italic stone, consistent with Problem.tsx transition line */}
        <motion.p
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-stone/70 text-lg mt-20 italic font-body"
        >
          This is not a marketing promise. It is the filter every line of code passes through.
        </motion.p>
      </div>
    </section>
  );
};

export default AntiEngagementManifesto;
