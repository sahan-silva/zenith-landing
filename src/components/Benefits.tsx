/**
 * src/components/Benefits.tsx
 *
 * Benefits section for Zenith Journal landing page.
 * Quiet Confidence redesign: Simple text blocks, ember accent, no glassmorphism.
 *
 * Value-centric pivot (Mar 2026): Section header and benefit descriptions updated to
 * emphasise time-efficiency and value-per-minute. The "Just Talk" benefit now leads
 * with the 4× speed advantage as a concrete value prop, not just a feature.
 *
 * Anti-engagement pivot (Mar 2026): Section header and benefit descriptions updated
 * with explicit contrast language — "not to log your time, but to return value on it".
 * Each benefit now names the anti-engagement stance: speed > blank-page scroll traps,
 * automatic synthesis > hours of scattered effort, honest reflection > generic advice.
 *
 * Emotional processing pivot (Mar 2026): "A Friend Who Remembers" reframed as
 * "Your Emotional Processing Protocol" — names the concrete HOW steps (talk, AI
 * identifies patterns, weekly reflection surfaces what's really going on, leave with
 * clarity) that generic journaling advice consistently fails to provide.
 * Source: r/Journaling — users want structure, not blank-page platitudes.
 *
 * Related: ZenithLanding.tsx, AntiEngagementManifesto.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Just Talk',
      description:
        "Talk four times faster than you type — so every minute returns four times the insight. No blank page. No scroll trap. No wasted session. Just clarity at the speed of thought, the moment you need it.",
    },
    {
      title: 'Your Life, Organized',
      description:
        'Zenith reads between the lines and automatically surfaces your goals, dreams, and recurring themes. Five minutes with Zenith delivers what hours of scattered note-taking — and endless app-switching — never could.',
    },
    {
      title: 'Your Emotional Processing Protocol',
      description:
        'Talk through what\'s weighing on you. Zenith\'s AI identifies emotional patterns across your entries. Your weekly reflection surfaces what\'s really going on beneath the surface. You leave with actionable clarity — not a blank page and a vague suggestion to "journal your feelings."',
    },
  ];

  // Single fade-in animation (Quiet Confidence constraint)
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
  };

  return (
    <section className="relative py-24 sm:py-32 bg-ink font-body">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          {...fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-4 tracking-tight">
            Built to{' '}
            <span className="text-ember">return value.</span>
            <br />
            Not to consume it.
          </h2>
          <p className="text-stone text-lg max-w-2xl mx-auto font-body">
            Zenith is an AI companion designed with one constraint: every session must leave you better off than when you arrived. Not more data to scroll through. Real clarity you can act on.
          </p>
        </motion.div>

        {/* Benefits - Simple text blocks with typography hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="text-center md:text-left"
            >
              {/* Title with ember accent */}
              <h3 className="font-display text-2xl font-bold text-cream mb-4 tracking-tight">
                <span className="text-ember mr-2">—</span>
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-stone leading-relaxed font-body">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
