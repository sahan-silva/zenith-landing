/**
 * src/components/WhoItsFor.tsx
 *
 * Who It's For section for Zenith Journal landing page.
 * Quiet Confidence redesign: Clean checklist, ember accents, no hover effects.
 *
 * Related: ZenithLanding.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const WhoItsFor: React.FC = () => {
  const checklistItems = [
    'You coach others but struggle to coach yourself',
    "You believe in the power of reflection but don't make time for it",
    "You're privacy-conscious and tired of apps that monetize your data",
    'You want an AI partner, not an AI overlord',
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
            Zenith is built for people who understand transformation starts
            within.
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
          If you nodded along to any of these, you're exactly who we built
          Zenith for.
        </motion.p>
      </div>
    </section>
  );
};

export default WhoItsFor;
