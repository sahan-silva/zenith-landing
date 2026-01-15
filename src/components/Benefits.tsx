/**
 * src/components/Benefits.tsx
 *
 * Benefits section for Zenith Journal landing page.
 * Quiet Confidence redesign: Simple text blocks, ember accent, no glassmorphism.
 *
 * Related: ZenithLanding.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Clarity',
      description:
        "See patterns you've been missing. Zenith's AI surfaces recurring themes, emotions, and insights from your reflections—without ever sending your words to the cloud.",
    },
    {
      title: 'Momentum',
      description:
        'Turn insights into action. Get personalized prompts and action items based on your own patterns. Stop journaling into the void.',
    },
    {
      title: 'Privacy',
      description:
        'Your words never leave your device. Unlike other AI tools, Zenith runs entirely locally. Your journal is truly yours.',
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
            Journaling that actually{' '}
            <span className="text-ember">works for you</span>
          </h2>
          <p className="text-stone text-lg max-w-2xl mx-auto font-body">
            Zenith combines the power of AI with the privacy of local-first
            software.
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
