/**
 * src/components/AntiAesthetic.tsx
 *
 * Anti-Aesthetic positioning section for Zenith Journal landing page.
 * Quiet Confidence visual style: Typography-first, ember accents, left-border pattern
 * consistent with AntiSetup.tsx and AntiEngagementManifesto.tsx.
 *
 * Positions Zenith against the aesthetic-pressure trend in journaling — apps and
 * communities that turn reflection into a visual craft project. Reddit intel
 * (r/Journaling, 315 upvotes) validated that a significant segment of journalers
 * are frustrated by the expectation that journals should look beautiful. They want
 * clarity, not decoration.
 *
 * Copy tone: confident, honest, not dismissive. Aesthetic journaling is valid for
 * people who enjoy it — Zenith is simply for people who want substance over style.
 *
 * Placement: Between AntiSetup and AntiEngagementManifesto in ZenithLanding.tsx.
 * Narrative flow: setup friction → aesthetic friction → design philosophy → benefits.
 *
 * Source: Reddit intel — https://notion.so/331fb732134981ba8705cbe3b5691353
 * Related: AntiSetup.tsx, AntiEngagementManifesto.tsx, ZenithLanding.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const frustrations = [
  {
    title: 'Your journal is not an Instagram feed.',
    body: 'Somewhere along the way, journaling became a visual hobby. Colour-coded mood trackers, washi tape borders, hand-lettered headers. If the page does not look curated, it feels like failure. That is not reflection — it is performance.',
  },
  {
    title: 'Colour coding your emotions is not the same as processing them.',
    body: 'A red dot for anger, a blue dot for sadness, a green dot for calm. The system is beautiful. It also tells you nothing about why you felt that way or what to do about it. Categorising is not understanding.',
  },
  {
    title: 'Templates optimise for structure, not honesty.',
    body: 'Fill in the gratitude box. Rate your energy. Check the habit grid. Every template assumes it knows what matters to you today. The most important thought you have might not fit in any box on the page.',
  },
  {
    title: 'The best journal entry you will ever write looks like a mess.',
    body: 'Raw, unformatted, half-finished sentences. No headers, no highlights, no system. Just the truth, written fast, before your inner editor arrives. That is where clarity lives.',
  },
];

// Fade-in animation — consistent with AntiSetup.tsx, Problem.tsx, AntiEngagementManifesto.tsx (Quiet Confidence constraint)
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const AntiAesthetic: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-ink font-body border-t border-stone/10">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          {...fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          {/* Overline — understated, consistent with AntiSetup.tsx and AntiEngagementManifesto.tsx */}
          <p className="text-xs sm:text-sm uppercase tracking-widest text-stone/60 font-medium mb-4">
            Why Journals Collect Dust
          </p>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-6 tracking-tight">
            No templates. No colour coding.
            <br />
            <span className="text-ember">Just clarity.</span>
          </h2>

          <p className="text-stone text-lg max-w-2xl mx-auto font-body leading-relaxed">
            Journaling became a craft project. Beautiful spreads, perfect systems,
            aesthetic pressure that turns reflection into another thing to get right.
            Zenith strips all of that away. You open it, you think, you write.
          </p>
        </motion.div>

        {/* Frustration points — left-border style matching AntiSetup.tsx and AntiEngagementManifesto.tsx */}
        <div className="space-y-10">
          {frustrations.map((frustration, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative pl-6 border-l-2 border-ember/40"
            >
              <p className="text-xl sm:text-2xl text-cream font-medium mb-2 font-body">
                {frustration.title}
              </p>
              <p className="text-stone text-lg font-body leading-relaxed">
                {frustration.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement — italic stone, consistent with AntiSetup.tsx and AntiEngagementManifesto.tsx */}
        <motion.p
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-stone/70 text-lg mt-20 italic font-body"
        >
          The journal that changes your life will not be the prettiest one on your shelf.
        </motion.p>
      </div>
    </section>
  );
};

export default AntiAesthetic;
