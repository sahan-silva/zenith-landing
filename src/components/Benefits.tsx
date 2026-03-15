/**
 * src/components/Benefits.tsx
 *
 * Benefits section for Zenith Journal landing page.
 * Japanese Aesthetic + Liquid Glass redesign: glass-interactive benefit cards
 * with rounded-lg radii.
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
        "No blank page anxiety. Speak your thoughts and Zenith transcribes them instantly. Talk four times faster than you type—your stream of consciousness becomes a searchable record.",
    },
    {
      title: 'Your Life, Organized',
      description:
        "Zenith reads between the lines. It automatically surfaces your goals, dreams, and recurring themes—building a picture of who you are and who you're becoming.",
    },
    {
      title: 'A Friend Who Remembers',
      description:
        'Weekly insights from an AI that knows your story. Not generic advice—reflections drawn from your own words, your own patterns, your own journey.',
    },
  ];

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
  };

  return (
    <section className="relative py-24 sm:py-32 font-body">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          {...fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-4 tracking-tight">
            The journal that{' '}
            <span className="text-ember">understands you</span>
          </h2>
          <p className="text-stone text-lg max-w-2xl mx-auto font-body">
            Zenith is an AI companion that listens, remembers, and helps you
            see the bigger picture of your life.
          </p>
        </motion.div>

        {/* Benefits - glass-interactive cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="glass-interactive rounded-[var(--radius-lg)] p-6 text-center md:text-left"
            >
              {/* Title with ember accent */}
              <h3 className="font-display text-2xl font-bold text-cream mb-4 tracking-tight">
                <span className="text-ember mr-2">--</span>
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
