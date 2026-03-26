/**
 * src/components/Privacy.tsx
 *
 * Privacy Difference section for Zenith Journal landing page.
 * Quiet Confidence redesign: Clean comparison, no colored panels or gradients.
 *
 * Positioning update (Mar 2026): Reframed privacy as a wellness concern — not just
 * a feature checkbox. Mental health data deserves the same protection as medical data.
 * Informed by Reddit r/Futurology discourse on data practices as a long-term health risk.
 *
 * Cloud vulnerability pivot (Mar 2026): Added breach/CVE messaging to contrast
 * Zenith's zero-cloud architecture against cloud database vulnerabilities.
 * Source: Reddit r/docker breach thread.
 *
 * Related: ZenithLanding.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  // Single fade-in animation (Quiet Confidence constraint)
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
  };

  return (
    <section className="relative py-24 sm:py-32 bg-ink font-body overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          {...fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4 tracking-tight">
            Privacy isn't a feature.<br />
            <span className="text-ember">It's self-care.</span>
          </h2>
        </motion.div>

        {/* Comparison - Simple two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Other AI Apps */}
          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-bold text-stone/60 mb-6 tracking-tight">
              Other AI Apps
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-stone">
                <span className="text-stone/40 mt-1">-</span>
                <span>Your innermost thoughts become training data</span>
              </li>
              <li className="flex items-start gap-3 text-stone">
                <span className="text-stone/40 mt-1">-</span>
                <span>Your mental health shared with advertisers</span>
              </li>
              <li className="flex items-start gap-3 text-stone">
                <span className="text-stone/40 mt-1">-</span>
                <span>Your vulnerability monetised, not protected</span>
              </li>
              <li className="flex items-start gap-3 text-stone">
                <span className="text-stone/40 mt-1">-</span>
                <span>One cloud breach away from your deepest thoughts going public</span>
              </li>
            </ul>
          </motion.div>

          {/* Zenith */}
          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-bold text-ember mb-6 tracking-tight">
              Zenith Journal
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-cream">
                <span className="text-ember mt-1">+</span>
                <span>
                  <strong>Your words stay on your device — always</strong>
                </span>
              </li>
              <li className="flex items-start gap-3 text-cream">
                <span className="text-ember mt-1">+</span>
                <span>
                  <strong>Your healing is never sold or shared</strong>
                </span>
              </li>
              <li className="flex items-start gap-3 text-cream">
                <span className="text-ember mt-1">+</span>
                <span>
                  <strong>You are the customer — and your wellbeing is the product</strong>
                </span>
              </li>
              <li className="flex items-start gap-3 text-cream">
                <span className="text-ember mt-1">+</span>
                <span>
                  <strong>No cloud. No breach risk. Zero attack surface.</strong>
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Statement */}
        <motion.div
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center border-t border-stone/20 pt-12"
        >
          <p className="font-display text-2xl sm:text-3xl font-medium text-cream tracking-tight">
            Your mental health deserves <span className="text-ember">privacy by default</span>. Not as an upgrade. Not as a promise. Built in.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;
