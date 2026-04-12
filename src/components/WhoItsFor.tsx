/**
 * src/components/WhoItsFor.tsx
 *
 * Who It's For section for Zenith Journal landing page.
 * Quiet Confidence redesign: Clean checklist, ember accents, no hover effects.
 *
 * Pattern Recognition variant (Apr 2026): Checklist reframed for system-fatigued and
 * ADHD-adjacent users who want zero-decision journaling and invisible AI. Reddit intel
 * (2026-04-07): "everything journal" gap (r/Journaling, 157 engagement), "removing
 * decisions is so underrated" (r/ADHD, 76 engagement), app fragmentation pain.
 * Notion task: https://notion.so/334fb7321349811a97c5f89be5437bd1
 *
 * Related: ZenithLanding.tsx, AntiEngagementManifesto.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const WhoItsFor: React.FC = () => {
  const checklistItems = [
    'You\'ve tried Notion, Daylio, Day One — and none of them stuck',
    'You want to just write — no templates, no plugins, no vault organisation',
    'You sense patterns in your life but struggle to name them',
    "You're done with apps that count your time spent and call it progress",
    'You want a tool that removes decisions, not adds them',
    'You want clarity about who you are and where you\'re going',
  ];

  // Single fade-in animation (Quiet Confidence constraint)
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
  };

  return (
    <section className="relative py-24 sm:py-32 bg-ink font-body">
      <div className="max-w-2xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          {...fadeIn}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-4 tracking-tight">
            Is this <span className="text-ember">you</span>?
          </h2>
          <p className="text-stone text-lg font-body">
            Zenith is for people who are done maintaining systems — and ready for one that maintains itself.
          </p>
        </motion.div>

        {/* Checklist - Simple, typography-driven */}
        <div className="space-y-6">
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="flex items-start gap-4"
            >
              <span className="text-ember text-xl mt-0.5 font-body">+</span>
              <p className="text-cream text-lg leading-relaxed font-body">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.p
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-stone/70 text-lg mt-16 font-body"
        >
          If any of these land, Zenith was built for you — one place for everything, zero decisions required.
        </motion.p>
      </div>
    </section>
  );
};

export default WhoItsFor;
