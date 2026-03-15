/**
 * src/components/FinalCTA.tsx
 *
 * Final Call-to-Action section for Zenith Journal landing page.
 * Japanese Aesthetic + Liquid Glass redesign: glass-hero card wrapping,
 * ember accent CTA button.
 *
 * Related: EmailForm.tsx, ZenithLanding.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';
import EmailForm from './EmailForm';

const FinalCTA: React.FC = () => {
  const incentives = [
    'Early access to the beta',
    'Shape the features we build',
    'Founding member pricing',
    'Start building your story first',
  ];

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
  };

  return (
    <section className="relative py-24 sm:py-32 font-body overflow-hidden px-6">
      <div className="relative z-10 max-w-3xl mx-auto glass-hero rounded-[var(--radius-xl)] p-8 sm:p-12">
        {/* Section Header */}
        <motion.div
          {...fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4 tracking-tight">
            Begin your <span className="text-ember">story</span>
          </h2>
          <p className="text-stone text-lg max-w-xl mx-auto font-body">
            Join the waitlist and be among the first to meet your new companion.
          </p>
        </motion.div>

        {/* Incentives - glass-surface pills */}
        <motion.div
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.1 }}
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {incentives.map((incentive) => (
            <span
              key={incentive}
              className="flex items-center gap-2 glass-surface rounded-[var(--radius-pill)] px-4 py-2 text-stone text-sm"
            >
              <span className="text-ember">+</span>
              <span>{incentive}</span>
            </span>
          ))}
        </motion.div>

        {/* Email Form */}
        <motion.div
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <EmailForm buttonText="Join the Waitlist" />
        </motion.div>

        {/* Trust note */}
        <motion.p
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-stone/50 text-sm mt-8 font-body"
        >
          No spam. Just updates when Zenith is ready for you.
        </motion.p>
      </div>
    </section>
  );
};

export default FinalCTA;
