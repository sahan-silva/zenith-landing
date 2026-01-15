/**
 * src/components/Problem.tsx
 *
 * Problem section for Zenith Journal landing page.
 * Quiet Confidence redesign: Typography-driven hierarchy, warm stone accents.
 *
 * Related: ZenithLanding.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const Problem: React.FC = () => {
  const painPoints = [
    {
      emphasis: 'You know reflection matters...',
      detail: "It's how you've helped countless clients break through their barriers.",
    },
    {
      emphasis: 'But staring at a blank page feels like one more task...',
      detail: 'After a full day of holding space for others, who has the energy?',
    },
    {
      emphasis: 'And when you do write, where do those insights go?',
      detail: 'Lost in notebooks, forgotten in apps, never connected to the bigger picture.',
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
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          {...fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4 tracking-tight">
            Journaling is powerful.
          </h2>
          <p className="font-display text-2xl sm:text-3xl text-stone">
            But who has the time?
          </p>
        </motion.div>

        {/* Pain Points - Simple left border accent */}
        <div className="space-y-10">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative pl-6 border-l-2 border-ember/40"
            >
              <p className="text-xl sm:text-2xl text-cream font-medium mb-2 font-body">
                {point.emphasis}
              </p>
              <p className="text-stone text-lg font-body">{point.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Transition statement */}
        <motion.p
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-stone/70 text-lg mt-20 italic font-body"
        >
          What if there was a better way?
        </motion.p>
      </div>
    </section>
  );
};

export default Problem;
