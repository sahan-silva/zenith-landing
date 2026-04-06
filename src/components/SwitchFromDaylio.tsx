/**
 * src/components/SwitchFromDaylio.tsx
 *
 * Comparison section for Zenith Journal landing page — targets Daylio users.
 * Quiet Confidence redesign: Typography-first, warm minimalism, no gradients.
 *
 * Source: Reddit r/Daylio — user explicitly asked for AI weekly summaries
 * ("I wish Daylio gave me an AI summary of my week"). This is Zenith's core
 * differentiator. Section intercepts users who already track moods but want
 * the longitudinal intelligence layer Daylio doesn't offer.
 * Notion task: https://notion.so/332fb7321349817f9e8cd13a1a9da0c6
 *
 * Placement: After WhoItsFor, before FinalCTA — catches users who identified
 * with the checklist and are already using journaling/mood-tracking apps.
 *
 * Related: ZenithLanding.tsx, WhoItsFor.tsx, Benefits.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const SwitchFromDaylio: React.FC = () => {
  // What Daylio users are asking for — and not getting
  const gaps = [
    {
      ask: '"I wish it gave me an AI summary of my week."',
      answer: 'Zenith does. Every week, an AI-written reflection surfaces what you felt, what shifted, and what pattern keeps coming up — without you having to do the analysis.',
    },
    {
      ask: '"I track my moods but I don\'t know what to do with the data."',
      answer: 'Mood logs are the input. Zenith turns them into longitudinal understanding — the kind that compounds week over week into something you can actually act on.',
    },
    {
      ask: '"I want prompts that actually fit where I am right now."',
      answer: 'Zenith reads your recent entries and mood before every session. The prompts you get today aren\'t generic — they\'re shaped by what you wrote last Tuesday.',
    },
  ];

  // Single fade-in (Quiet Confidence constraint — no stagger theatrics)
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
            Already tracking your mood?
            <br />
            <span className="text-ember">You're one step away.</span>
          </h2>
          <p className="text-stone text-lg max-w-2xl mx-auto font-body leading-relaxed">
            Daylio taught you the habit. Zenith gives you the insight. The AI weekly
            summary you've been asking for — from day one.
          </p>
        </motion.div>

        {/* Gaps — Left-border accent, question/answer format */}
        <div className="space-y-10">
          {gaps.map((gap, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative pl-6 border-l-2 border-ember/40"
            >
              {/* The ask — what Daylio users are saying */}
              <p className="text-stone text-base italic mb-3 font-body">
                {gap.ask}
              </p>
              {/* Zenith's answer — confident, not boastful */}
              <p className="text-cream text-lg leading-relaxed font-body">
                {gap.answer}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transition nudge — keeps the Quiet Confidence voice */}
        <motion.p
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-stone/70 text-lg mt-20 italic font-body"
        >
          Your existing habit is the foundation. Zenith is what you build on top of it.
        </motion.p>
      </div>
    </section>
  );
};

export default SwitchFromDaylio;
