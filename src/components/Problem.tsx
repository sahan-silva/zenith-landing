/**
 * src/components/Problem.tsx
 *
 * Problem section for Zenith Journal landing page.
 * Quiet Confidence redesign: Typography-driven hierarchy, warm stone accents.
 *
 * Midnight Clarity alignment (Apr 2026): Leading pain point now names the core
 * experience from the Hero — late-night clarity that vanishes by morning. The
 * cortisol insight (r/productivity, 824 upvotes) validates that evening mental
 * clarity is biochemically real but biologically fleeting. Pain points flow:
 * clarity lost → no structure → scattered → engagement-maximizing apps → nothing sticks.
 * Source: Reddit r/productivity — https://www.reddit.com/r/productivity/comments/1s1r1kn/
 *
 * Related: ZenithLanding.tsx, AntiEngagementManifesto.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const Problem: React.FC = () => {
  const painPoints = [
    {
      emphasis: 'At 2 AM, everything makes sense. By 8 AM, it\'s gone.',
      detail: 'Your brain is quieter at night — the stress of the day fades, and suddenly you see your life with startling clarity. But you wake up and it\'s just... gone. No capture, no follow-through.',
    },
    {
      emphasis: 'Everyone says "journal your feelings." No one says how.',
      detail: 'Open a blank page and stare. Write something vague. Feel no different. Generic advice treats the symptom — the blank page — not the gap: you have no protocol for actually processing what\'s weighing on you.',
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
      detail: 'Insights fade. Intentions get lost. You\'re left wondering: what was that breakthrough I had last Tuesday night?',
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
            Your best thinking happens
            <br />
            at the worst time.
          </h2>
          <p className="font-display text-2xl sm:text-3xl text-stone">
            Late-night clarity is real. But without a system to capture it, it vanishes by morning.
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
          What if your late-night clarity didn't have to disappear?
        </motion.p>
      </div>
    </section>
  );
};

export default Problem;
