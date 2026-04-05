/**
 * src/components/AntiSetup.tsx
 *
 * Anti-Setup positioning section for Zenith Journal landing page.
 * Quiet Confidence visual style: Typography-first, ember accents, left-border pattern
 * consistent with AntiEngagementManifesto.tsx and Problem.tsx.
 *
 * Positions Zenith narrowly as the journal for people who want to start immediately —
 * not against Notion or Obsidian as tools, but against the setup friction those tools
 * impose when used for journaling. Reddit intel (engagement 147) validated this pain
 * point: journaling-intent users spend hours on templates/plugins before writing a word.
 *
 * Copy tone: confident, honest, not aggressive. Notion and Obsidian are powerful —
 * they are just overkill for journaling. State friction as fact, not insult.
 *
 * Placement: Between Problem and AntiEngagementManifesto in ZenithLanding.tsx.
 *
 * Source: Reddit intel — https://notion.so/32ffb7321349813cad37ff2dc79f2557
 * Related: Problem.tsx, AntiEngagementManifesto.tsx, ZenithLanding.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const frictions = [
  {
    title: 'Pick a template. No, a different template.',
    body: 'You opened a new tool to journal. Forty-five minutes later you are comparing Daily Note structures and have written exactly nothing about your day.',
  },
  {
    title: 'Install one more plugin.',
    body: 'Your vault is almost ready. Just the tagging plugin, the graph plugin, and the one that cross-links mood entries. The journal itself will start tomorrow.',
  },
  {
    title: 'Design the workflow.',
    body: 'Weekly review links to daily notes. Daily notes link to projects. Projects link to goals. The architecture is elegant. There is still no journal.',
  },
  {
    title: 'Organise the pages.',
    body: 'Should feelings go in the personal workspace or the life-os database? Does this count as a reflection or a brain dump? The blank page waits while you decide.',
  },
];

// Fade-in animation — consistent with Problem.tsx and AntiEngagementManifesto.tsx (Quiet Confidence constraint)
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const AntiSetup: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-ink font-body border-t border-stone/10">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          {...fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          {/* Overline — understated, consistent with AntiEngagementManifesto.tsx */}
          <p className="text-xs sm:text-sm uppercase tracking-widest text-stone/60 font-medium mb-4">
            Why People Never Start
          </p>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-6 tracking-tight">
            Other tools ask you to{' '}
            <span className="text-ember">build a system.</span>
            <br />
            Zenith asks you to speak.
          </h2>

          <p className="text-stone text-lg max-w-2xl mx-auto font-body leading-relaxed">
            Notion and Obsidian are genuinely powerful. They are also built for
            knowledge management — not journaling. When you use them to journal, the
            tool becomes the project. The writing never starts.
          </p>
        </motion.div>

        {/* Friction points — left-border style matching Problem.tsx and AntiEngagementManifesto.tsx */}
        <div className="space-y-10">
          {frictions.map((friction, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative pl-6 border-l-2 border-ember/40"
            >
              <p className="text-xl sm:text-2xl text-cream font-medium mb-2 font-body">
                {friction.title}
              </p>
              <p className="text-stone text-lg font-body leading-relaxed">
                {friction.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement — italic stone, consistent with Problem.tsx and AntiEngagementManifesto.tsx */}
        <motion.p
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-stone/70 text-lg mt-20 italic font-body"
        >
          Zenith has no templates to pick, no plugins to install, no pages to organise.
          Open it. Talk. Done.
        </motion.p>
      </div>
    </section>
  );
};

export default AntiSetup;
