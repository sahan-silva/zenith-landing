/**
 * src/components/EmotionalSafety.tsx
 *
 * Emotional Safety section for Zenith Journal landing page.
 * Quiet Confidence redesign: Warm, reassuring — no clinical language.
 *
 * Source: Reddit r/Journaling post (115 engagement) — "I'm afraid of journaling".
 * Top comment, 98 upvotes: "anything worth doing is worth doing badly."
 * Fear of blank pages, fear of confronting emotions, and fear of re-reading painful
 * entries are the #1 adoption barrier. This section names those fears directly and
 * positions Zenith as the emotionally safe starting point.
 * Notion task: https://notion.so/332fb7321349817f9e8cd13a1a9da0c6
 *
 * Placement: After Problem, before AntiSetup — addresses the emotional barrier
 * right after naming the core pain, before showing how Zenith removes friction.
 * Narrative flow: "here is the pain" → "it's okay to feel this way" → "here is
 * how we remove the barriers" → "here is our philosophy".
 *
 * Related: ZenithLanding.tsx, Problem.tsx, AntiSetup.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const EmotionalSafety: React.FC = () => {
  // Specific fears named and answered — each one drawn from Reddit thread
  const fears = [
    {
      fear: 'The blank page.',
      answer: 'Zenith always shows up with a question. You never have to figure out where to start — it meets you where you are and asks the one thing worth thinking about today.',
    },
    {
      fear: 'Confronting what you actually feel.',
      answer: 'You don\'t have to go deep. A single sentence counts. Zenith follows your lead — if you want to go further, it\'ll walk with you. If you don\'t, it won\'t push.',
    },
    {
      fear: 'Re-reading painful entries.',
      answer: 'Your entries are yours alone. Zenith surfaces patterns, not a museum of your worst days. And when it does reference the past, it\'s in service of where you\'re going — not where you\'ve been.',
    },
  ];

  // Single fade-in (Quiet Confidence constraint)
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
  };

  return (
    <section className="relative py-24 sm:py-32 bg-ink font-body">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header — Lead with validation, not a feature pitch */}
        <motion.div
          {...fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4 tracking-tight">
            You don't need to know
            <br />
            <span className="text-ember">what to write.</span>
          </h2>
          <p className="text-stone text-lg max-w-2xl mx-auto font-body leading-relaxed">
            The fear of journaling is real. Blank page. Emotions you're not ready for.
            Entries you're afraid to revisit. You're not alone in feeling this —
            and you don't have to be ready to start.
          </p>
        </motion.div>

        {/* Fears — Named directly, answered warmly */}
        <div className="space-y-10">
          {fears.map((item, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative pl-6 border-l-2 border-ember/40"
            >
              {/* The fear — named plainly */}
              <p className="text-cream text-xl font-medium mb-2 font-body">
                {item.fear}
              </p>
              {/* The answer — warm, specific, never preachy */}
              <p className="text-stone text-lg leading-relaxed font-body">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Community wisdom — restated naturally, not quoted as a slogan */}
        <motion.div
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-stone/70 text-lg italic font-body mb-4">
            "Anything worth doing is worth doing badly."
          </p>
          <p className="text-stone text-base font-body">
            Imperfect journaling still counts. One sentence still counts.
            Zenith is built for the days you only have one sentence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalSafety;
