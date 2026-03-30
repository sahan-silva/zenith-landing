/**
 * src/components/WhoItsFor.tsx
 *
 * Who It's For section for Zenith Journal landing page.
 * Quiet Confidence redesign: Clean checklist, ember accents, no hover effects.
 *
 * Value-centric pivot (Mar 2026): Checklist item updated to name attention-harvesting
 * explicitly — this resonates with users who are consciously rejecting apps that take
 * without giving back. Subtitle layers value-per-minute into the meaning > metrics frame.
 *
 * Anti-engagement pivot (Mar 2026): Checklist sharpened to surface the specific
 * frustration with engagement-trap apps (time-spent metrics, streak anxiety, no real
 * growth). Closing statement updated to reinforce the value-delivered contract.
 *
 * Emotional processing pivot (Mar 2026): Added checklist item for users who want a
 * structured way to process emotions — contrasting against the blank-page + generic
 * advice pattern that Reddit surfaced as the core HOW gap in journaling.
 * Placed adjacent to the "leave lighter" theme (succeeding when you grow).
 *
 * Comprehension gap pivot (Mar 2026): Added checklist item for AI-heavy founders who
 * build faster than they understand — the vibe coding comprehension gap (Reddit intel).
 *
 * Related: ZenithLanding.tsx, AntiEngagementManifesto.tsx, ComprehensionLayer.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const WhoItsFor: React.FC = () => {
  const checklistItems = [
    'You have thoughts worth remembering — but they slip away before you can act on them',
    'You sense patterns in your life but struggle to name them',
    "You're done with apps that count your time spent and call it progress",
    "You want a structured way to process emotions — not just a blank page and generic advice to 'journal your feelings'",
    "You want a tool that succeeds when you grow — not when you're addicted",
    'You want clarity about who you are and where you\'re going',
    // Vibe coding comprehension gap: AI-heavy founders who ship faster than they understand (Mar 2026)
    "You're shipping features with AI but losing track of why you're building them",
  ];

  // Single fade-in animation (Quiet Confidence constraint)
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
  };

  return (
    <section className="relative py-24 sm:py-32 bg-ink font-body">
      <div className="max-w-2xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          {...fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-4 tracking-tight">
            Is this <span className="text-ember">you</span>?
          </h2>
          <p className="text-stone text-lg font-body">
            Zenith is for people who measure self-investment by what they gain — not by how long they stay.
          </p>
        </motion.div>

        {/* Checklist - Simple, typography-driven */}
        <div className="space-y-6">
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="flex items-start gap-4"
            >
              <span className="text-ember text-xl mt-0.5 font-body">+</span>
              <p className="text-cream text-lg leading-relaxed font-body">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.p
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-stone/70 text-lg mt-16 font-body"
        >
          If any of these land, Zenith was built to give you back more than you put in.
        </motion.p>
      </div>
    </section>
  );
};

export default WhoItsFor;
