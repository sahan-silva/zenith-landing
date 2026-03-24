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
 * Related: ZenithLanding.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Just Talk',
      description:
        "Talk four times faster than you type—so every minute you give Zenith returns four times the insight. No blank page, no wasted session. Just clarity at the speed of thought.",
    },
    {
      title: 'Your Life, Organized',
      description:
        'Zenith reads between the lines. It automatically surfaces your goals, dreams, and recurring themes—so five minutes with Zenith delivers what hours of scattered note-taking never could.',
    },
    {
      title: 'A Friend Who Remembers',
      description:
        'Weekly insights from an AI that knows your story. Not generic advice—reflections drawn from your own words, your own patterns, your own journey. Your time, honoured.',
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
            The journal that{' '}
            <span className="text-ember">respects your time</span>
          </h2>
          <p className="text-stone text-lg max-w-2xl mx-auto font-body">
            Zenith is an AI companion that listens, remembers, and delivers
            real value with every session — not just more data to scroll through.
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
