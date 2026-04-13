/**
 * src/components/Benefits.tsx
 *
 * Benefits section for Zenith Journal landing page.
 * Quiet Confidence redesign: Simple text blocks, ember accent, no glassmorphism.
 *
 * Pattern Recognition variant (Apr 2026): Benefits reframed around three pillars:
 * zero-decision entry ("Just Write"), everything-journal convergence ("Your Everything
 * Journal"), and invisible AI pattern recognition ("Patterns You Can't See"). Reddit
 * intel (2026-04-07): "everything journal" gap (r/Journaling, 157 engagement),
 * "removing decisions" (r/ADHD, 76 engagement), invisible AI demand (r/aiagents).
 * Notion task: https://notion.so/334fb7321349811a97c5f89be5437bd1
 *
 * Related: ZenithLanding.tsx, AntiEngagementManifesto.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Just Write',
      description:
        'Voice or text — no templates, no folders, no decisions. Zenith adapts to however you think. Four times faster than typing, zero setup required. The AI removes every barrier between you and reflection.',
    },
    {
      title: 'Your Everything Journal',
      description:
        'Reflection, mood tracking, goals, dreams, daily logs — one place for all of it. Zenith reads between the lines and organises your life without asking you to categorise anything. No more five apps that don\'t talk to each other. The modern zibaldone — one notebook for everything, powered by invisible AI that connects every thread.',
    },
    {
      title: 'Patterns You Can\'t See',
      description:
        'Zenith\'s AI works invisibly across weeks and months of your entries. It surfaces emotional patterns, recurring obstacles, and hidden correlations — the threads running through your life that no single journal session could reveal. You never interact with the AI. It just shows you what\'s there.',
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
            The journal that sees{' '}
            <span className="text-ember">what you can't.</span>
          </h2>
          <p className="text-stone text-lg max-w-2xl mx-auto font-body">
            One place for everything. Zero decisions. An AI that works invisibly — surfacing the patterns, connections, and breakthroughs hidden in your own words.
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
