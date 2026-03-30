/**
 * src/components/Problem.tsx
 *
 * Problem section for Zenith Journal landing page.
 * Quiet Confidence redesign: Typography-driven hierarchy, warm stone accents.
 *
 * Value-centric pivot (Mar 2026): Added attention-harvesting pain point to connect
 * with users seeking apps that give back as much as they take. The subheader now
 * frames self-awareness as something apps should respect, not compete with.
 *
 * Anti-engagement pivot (Mar 2026): Pain points now explicitly name the time-spent
 * vs value-delivered contrast drawn from Reddit sentiment. The third pain point
 * calls out engagement-maximizing design by name — "designed to keep you scrolling,
 * not to help you grow" — to resonate with users who recognise the pattern.
 *
 * Emotional lightness pivot (Mar 2026): Added a pain point naming emotional heaviness
 * directly — journaling should lift the weight, not add to it. Source: Reddit
 * r/Journaling where users describe the friction of blank-page journaling as adding
 * effort without releasing the weight they came to shed.
 *
 * Related: ZenithLanding.tsx, AntiEngagementManifesto.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const Problem: React.FC = () => {
  const painPoints = [
    {
      emphasis: 'You carry thoughts that have nowhere to go...',
      // Emotional heaviness named as a pain point: journaling should lift weight, not add to it
      detail: 'The mental load builds — unprocessed feelings, half-formed plans, things you need to say to yourself. It sits heavy. And the blank page makes it heavier.',
    },
    {
      emphasis: 'You have goals scattered across a dozen apps...',
      detail: 'Tasks in one place, notes in another, voice memos you never listen to again. Fragmentation is the enemy of self-knowledge.',
    },
    {
      emphasis: 'You sense patterns in your life but can\'t quite name them...',
      detail: 'The same feelings keep coming up. The same obstacles. If only you could step back and see it clearly.',
    },
    {
      emphasis: 'Every other app measures time spent — not value delivered...',
      detail: 'They\'re designed to keep you scrolling, not to help you grow. Their metric is your attention. Yours should be your progress.',
    },
    {
      emphasis: 'And when you do reflect, nothing sticks...',
      detail: 'Insights fade. Intentions get lost. You\'re left wondering: what was that breakthrough I had last month?',
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
            Reflecting should
            <br />
            lift the weight.
          </h2>
          <p className="font-display text-2xl sm:text-3xl text-stone">
            Not add to it. But most apps are designed to keep you in — not to send you away lighter.
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
          What if there was a journal that only succeeded when you left lighter than you arrived?
        </motion.p>
      </div>
    </section>
  );
};

export default Problem;
