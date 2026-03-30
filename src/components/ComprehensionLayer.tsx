/**
 * src/components/ComprehensionLayer.tsx
 *
 * Comprehension Layer section for Zenith Journal landing page.
 * Quiet Confidence visual style: Typography-first, ember accents, left-border pattern
 * consistent with AntiEngagementManifesto.tsx, Problem.tsx, and Benefits.tsx.
 *
 * Positions Zenith as the "Comprehension Layer" — the place founders slow down and
 * ensure they actually understand what AI is building for them and why.
 * Driven by the Reddit "vibe coding comprehension gap" intel (2026-03-31):
 * AI execution is outpacing human comprehension. Founders ship features they can't explain.
 *
 * Placement: Between Benefits and Privacy in ZenithLanding.tsx.
 *
 * Related: AntiEngagementManifesto.tsx, Benefits.tsx, Privacy.tsx, ZenithLanding.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const principles = [
  {
    title: 'AI builds fast. Understanding takes longer.',
    body: 'Speed without comprehension is just sophisticated guessing. The gap between what you shipped and what you understand is where strategy goes to die.',
  },
  {
    title: 'You should be able to explain what you shipped.',
    body: "If you can't articulate why a decision was made, you didn't make it — your tools did. Zenith is where you reclaim authorship over your own building decisions.",
  },
  {
    title: "Growth you don't understand isn't growth.",
    body: "Revenue, users, features — none of it compounds if you can't name the patterns driving it. Comprehension is what turns activity into momentum.",
  },
  {
    title: "Reflection is the layer AI can't replace.",
    body: 'AI can generate, summarize, and optimize. Only you can decide what it all means for your life and your company. That decision requires reflection — not more output.',
  },
];

// Fade-in animation — consistent with AntiEngagementManifesto.tsx (Quiet Confidence constraint)
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const ComprehensionLayer: React.FC = () => {
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
            The Comprehension Layer
          </p>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-6 tracking-tight">
            AI moves fast.
            <br />
            <span className="text-ember">Make sure you keep up.</span>
          </h2>

          <p className="text-stone text-lg max-w-2xl mx-auto font-body leading-relaxed">
            The greatest risk of building with AI is not moving too slowly — it is moving so
            fast you stop understanding what you are building. Zenith is where founders pause,
            reflect, and stay the author of their own story.
          </p>
        </motion.div>

        {/* Principles — left-border style matching AntiEngagementManifesto.tsx */}
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

        {/* Closing statement — italic stone, consistent with AntiEngagementManifesto.tsx */}
        <motion.p
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-stone/70 text-lg mt-20 italic font-body"
        >
          Vibe coding got you here. Zenith keeps you in the driver's seat.
        </motion.p>
      </div>
    </section>
  );
};

export default ComprehensionLayer;
