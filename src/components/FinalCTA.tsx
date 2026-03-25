/**
 * src/components/FinalCTA.tsx
 *
 * Final Call-to-Action section for Zenith Journal landing page.
 * Quiet Confidence redesign: Simple incentive list, no animated orbs.
 *
 * Anti-engagement pivot (Mar 2026): Headline and incentive list updated to close
 * on the value-per-minute contract. "Begin your story" replaced with the direct
 * value promise: the CTA now names what you walk away with, not just what you join.
 *
 * Related: EmailForm.tsx, ZenithLanding.tsx, AntiEngagementManifesto.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';
import EmailForm from './EmailForm';

const FinalCTA: React.FC = () => {
  const incentives = [
    'Early access to the beta',
    'Shape the features we build — we only ship what earns its place',
    'Founding member pricing',
    'Be first to experience a journal that measures what you leave with',
    'More clarity per minute than any app you\'ve tried',
  ];

  // Single fade-in animation (Quiet Confidence constraint)
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
  };

  return (
    <section className="relative py-24 sm:py-32 bg-ink font-body overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          {...fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4 tracking-tight">
            Leave every session{' '}
            <span className="text-ember">better off.</span>
          </h2>
          <p className="text-stone text-lg max-w-xl mx-auto font-body">
            Join the waitlist. Zenith measures what you walk away with — not how long you stayed.
          </p>
        </motion.div>

        {/* Incentives - Simple text list */}
        <motion.div
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.1 }}
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12 text-stone"
        >
          {incentives.map((incentive) => (
            <span key={incentive} className="flex items-center gap-2">
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
          No spam. No engagement tricks. Just one update when Zenith is ready for you.
        </motion.p>
      </div>
    </section>
  );
};

export default FinalCTA;
