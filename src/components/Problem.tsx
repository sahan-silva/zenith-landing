/**
 * src/components/Problem.tsx
 *
 * Problem section for Zenith Journal landing page.
 * Japanese Aesthetic + Liquid Glass redesign: glass-surface pain-point cards
 * with rounded-lg radii.
 *
 * Related: ZenithLanding.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const Problem: React.FC = () => {
  const painPoints = [
    {
      emphasis: 'You have goals scattered across a dozen apps...',
      detail:
        'Tasks in one place, notes in another, voice memos you never listen to again.',
    },
    {
      emphasis: "You sense patterns in your life but can't quite name them...",
      detail:
        "The same feelings keep coming up. The same obstacles. If only you could step back and see it clearly.",
    },
    {
      emphasis: 'And when you do reflect, nothing sticks...',
      detail:
        "Insights fade. Intentions get lost. You're left wondering: what was that breakthrough I had last month?",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
  };

  return (
    <section className="relative py-24 sm:py-32 font-body">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          {...fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4 tracking-tight">
            Life moves fast.
          </h2>
          <p className="font-display text-2xl sm:text-3xl text-stone">
            Your self-awareness shouldn't get left behind.
          </p>
        </motion.div>

        {/* Pain Points - glass-surface cards */}
        <div className="space-y-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="glass-surface rounded-[var(--radius-lg)] p-6 border-l-2 border-ember/40"
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
          What if you had a companion who remembered everything—and helped you
          see what it all means?
        </motion.p>
      </div>
    </section>
  );
};

export default Problem;
