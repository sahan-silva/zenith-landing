/**
 * src/components/Problem.tsx
 *
 * Problem section for Zenith Journal landing page.
 * Quiet Confidence redesign: Typography-driven hierarchy, warm stone accents.
 *
 * Pattern Recognition variant (Apr 2026): Pain points reframed around system fatigue,
 * app fragmentation, and the "everything journal" gap. Reddit intel (2026-04-07):
 * r/Journaling 157 engagement on "everything journal" search, r/ADHD 76 engagement
 * on "removing decisions", r/productivity 93 engagement on brain fog epidemic.
 * Notion task: https://notion.so/334fb7321349811a97c5f89be5437bd1
 *
 * Related: ZenithLanding.tsx, AntiEngagementManifesto.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const Problem: React.FC = () => {
  const painPoints = [
    {
      emphasis: 'You\'ve tried five apps. None of them talk to each other.',
      detail: 'A mood tracker here, a gratitude journal there, a habit app on another screen. Your life is scattered across tools that each capture a fragment but never show you the whole picture.',
    },
    {
      emphasis: 'You spend more time maintaining your system than using it.',
      detail: 'Templates, plugins, workflows, vault organisation. You set up elaborate structures, colour-coded and categorised — then spend more time tending the system than actually reflecting. Removing decisions is underrated.',
    },
    {
      emphasis: 'You sense patterns in your life but can\'t quite name them.',
      detail: 'The same feelings keep surfacing. The same obstacles reappear. You know something is there — a recurring thread — but without a way to step back across weeks and months, you can\'t see it clearly.',
    },
    {
      emphasis: 'Every other app measures time spent — not value delivered.',
      detail: 'They\'re designed to keep you scrolling, not to help you grow. Their metric is your attention. Yours should be your progress.',
    },
    {
      emphasis: 'Your best insights vanish before you can act on them.',
      detail: 'A breakthrough at 2 AM, a moment of clarity during a walk — gone by the time you could write it down. No capture, no pattern, no follow-through.',
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
            You don't need another app.
            <br />
            You need one that sees the whole picture.
          </h2>
          <p className="font-display text-2xl sm:text-3xl text-stone">
            Journaling tools fragment your life into categories. You need one place for everything — and an AI that connects the dots.
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
          What if one journal could hold all of it — and show you what you can't see on your own?
        </motion.p>
      </div>
    </section>
  );
};

export default Problem;
