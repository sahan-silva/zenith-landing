/**
 * src/components/NoSubscription.tsx
 *
 * No AI Subscription section for Zenith Journal landing page.
 * Quiet Confidence redesign: Clean comparison, no colored panels or gradients.
 *
 * Cost positioning (Mar 2026): Reddit r/artificial signals show users exhausted by
 * AI subscription stacking — ChatGPT Plus, Copilot, Claude Pro all billed monthly.
 * Zenith's local Ollama architecture runs AI entirely on-device, meaning AI is
 * included in the app price — no cloud billing, no usage caps, no token surprises.
 *
 * Layout mirrors Privacy.tsx comparison pattern (two-column, left-border header,
 * fadeIn animation, stone/cream/ember color roles) for visual consistency.
 *
 * Related: ZenithLanding.tsx, Privacy.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const NoSubscription: React.FC = () => {
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
            AI included.<br />
            <span className="text-ember">No subscription. Ever.</span>
          </h2>
        </motion.div>

        {/* Comparison — two-column layout matching Privacy.tsx */}
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
                <span>Monthly subscriptions that stack up fast</span>
              </li>
              <li className="flex items-start gap-3 text-stone">
                <span className="text-stone/40 mt-1">-</span>
                <span>Per-token billing — more insight, higher bill</span>
              </li>
              <li className="flex items-start gap-3 text-stone">
                <span className="text-stone/40 mt-1">-</span>
                <span>Usage caps that cut off your session mid-thought</span>
              </li>
              <li className="flex items-start gap-3 text-stone">
                <span className="text-stone/40 mt-1">-</span>
                <span>Surprise charges when you actually use the AI</span>
              </li>
            </ul>
          </motion.div>

          {/* Zenith Journal */}
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
                  <strong>Runs on your device — no cloud bills, ever</strong>
                </span>
              </li>
              <li className="flex items-start gap-3 text-cream">
                <span className="text-ember mt-1">+</span>
                <span>
                  <strong>AI included in the app price — forever</strong>
                </span>
              </li>
              <li className="flex items-start gap-3 text-cream">
                <span className="text-ember mt-1">+</span>
                <span>
                  <strong>Unlimited insights — no usage caps, no throttling</strong>
                </span>
              </li>
              <li className="flex items-start gap-3 text-cream">
                <span className="text-ember mt-1">+</span>
                <span>
                  <strong>One price. Every feature. No hidden costs.</strong>
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
            Your AI companion should cost less over time, not <span className="text-ember">more</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NoSubscription;
