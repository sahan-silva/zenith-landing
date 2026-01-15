/**
 * src/components/Privacy.tsx
 *
 * Privacy Difference section for Zenith Journal landing page.
 * Quiet Confidence redesign: Clean comparison, no colored panels or gradients.
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
            What makes Zenith <span className="text-ember">different</span>?
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
                <span>Send your most private thoughts to remote servers</span>
              </li>
              <li className="flex items-start gap-3 text-stone">
                <span className="text-stone/40 mt-1">-</span>
                <span>Your data used to train AI models</span>
              </li>
              <li className="flex items-start gap-3 text-stone">
                <span className="text-stone/40 mt-1">-</span>
                <span>No internet? No access to your own journal.</span>
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
                  Runs <strong>entirely on your device</strong>
                </span>
              </li>
              <li className="flex items-start gap-3 text-cream">
                <span className="text-ember mt-1">+</span>
                <span>
                  Your words <strong>never leave your computer</strong>
                </span>
              </li>
              <li className="flex items-start gap-3 text-cream">
                <span className="text-ember mt-1">+</span>
                <span>
                  Works offline. <strong>Your data, your control.</strong>
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
            Your journal is <span className="text-ember">yours</span>. Period.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;
