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
 * Emotional lightness pivot (Mar 2026): Added "date with yourself" language and the
 * desire to feel lighter after reflecting — sourced from Reddit r/Journaling where
 * users describe their journaling practice in exactly these terms.
 *
 * Related: ZenithLanding.tsx, AntiEngagementManifesto.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const WhoItsFor: React.FC = () => {
  const checklistItems = [
    // "Date with yourself" language — from Reddit r/Journaling; treats reflection as self-care, not productivity
    'You want a quiet date with yourself — time to think, not to be harvested',
    'You have thoughts worth remembering — but they slip away before you can act on them',
    'You sense patterns in your life but struggle to name them',
    // Lightness as the desired outcome of reflection — the feeling after is the product
    "You want to leave your journaling sessions feeling lighter, not heavier",
    "You're done with apps that count your time spent and call it progress",
    "You want a tool that succeeds when you grow — not when you're addicted",
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
            Zenith is for people who want to leave reflection feeling lighter — not people who want to log another streak.
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
          If any of these land, Zenith was built so you leave every session lighter than you arrived.
        </motion.p>
      </div>
    </section>
  );
};

export default WhoItsFor;
