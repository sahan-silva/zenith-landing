/**
 * src/components/Differentiator.tsx
 *
 * Differentiator section for Zenith Journal landing page.
 *
 * Ports the Burlit differentiator grammar (aramuna-landing-page/components/trademate/
 * TradieMateDifferentiator.tsx): "Why Zenith" eyebrow → display H2 with ember em-accent
 * → 2-column compare ("Other journaling apps" vs "Zenith") with hairline vertical
 * divider on lg+ → italic closing statement.
 *
 * Consolidates content from three previous sections (AntiEngagementManifesto, Privacy,
 * NoSubscription) into the 4 strongest contrast pairs per the 2026-05-11 design spec.
 * The four pairs each pull from a different Reddit-intel positioning seam, updated
 * Sep 2026 so every claim matches build 17 and the published privacy policy:
 *   1. Time as product vs value delivered     (AntiEngagementManifesto, principle 1)
 *   2. Dark patterns vs an honest streak       (the Journey tab has a streak — say so)
 *   3. Data resold/trained-on vs never sold, delete any time (privacy policy)
 *   4. Paywalled basics vs free journaling + one Premium plan after a 14-day trial
 *
 * Detail beyond these 4 pairs survives in commit history and can be relocated to a
 * future /zenith/why-private sub-page once the landing has a router.
 *
 * Related: ZenithLanding.tsx, Problem.tsx, Benefits.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const othersPoints: string[] = [
  'Designed to keep you scrolling — your time IS the product',
  'Streaks and notifications engineered to manufacture anxiety',
  'Your entries quietly resold, or used to train someone else\'s model',
  'Paywalls on the basics — write a line, hit a wall',
];

const usPoints: Array<{ text?: string; bold: string }> = [
  { text: '', bold: 'Measures value delivered, not time spent' },
  { text: 'Zero dark patterns.', bold: 'Your Journey streak is a record of showing up, not a leash.' },
  { text: 'Never sold, never used to train AI models.', bold: 'Delete everything, any time.' },
  { text: 'Journaling is free.', bold: 'One Premium plan for the AI, after a 14-day free trial.' },
];

const Differentiator: React.FC = () => {
  return (
    <section id="diff" className="relative bg-ink py-20 font-body sm:py-28">
      <div className="container mx-auto max-w-[1120px] px-7">
        <motion.div {...fadeUp} className="mb-16 text-center">
          <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-stone before:inline-block before:h-px before:w-6 before:bg-stone">
            Why Zenith
          </span>
          <h2
            className="mt-5 font-display font-bold leading-[1.05] tracking-tight text-cream"
            style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
          >
            What makes Zenith{' '}
            <em className="not-italic text-ember">different</em>?
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-[960px] gap-12 lg:grid-cols-[1fr_1px_1fr] lg:gap-x-14 lg:gap-y-0">
          {/* Others column */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
            <h3 className="mb-5 font-display text-[1.25rem] font-bold tracking-tight text-stone/70">
              Other journaling apps
            </h3>
            <ul className="m-0 flex list-none flex-col gap-4 p-0">
              {othersPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[15.5px] leading-[1.55] text-stone"
                >
                  <span className="w-3.5 flex-none text-stone/50">—</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Divider — vertical on lg+, horizontal hairline on mobile */}
          <div className="hidden bg-stone/20 lg:block" />
          <div className="h-px w-full bg-stone/20 lg:hidden" />

          {/* Zenith column */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.14 }}>
            <h3 className="mb-5 font-display text-[1.25rem] font-bold tracking-tight text-ember">
              Zenith Journal
            </h3>
            <ul className="m-0 flex list-none flex-col gap-4 p-0">
              {usPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[15.5px] leading-[1.55] text-cream"
                >
                  <svg
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 flex-none text-ember"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    {point.text && <>{point.text} </>}
                    <strong className="font-bold text-cream">{point.bold}</strong>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="mx-auto mt-16 border-t border-stone/20 pt-12 text-center font-display italic tracking-tight text-cream"
          style={{ fontSize: 'clamp(1.375rem, 2.2vw, 1.875rem)' }}
        >
          Your reflection deserves a tool built to respect you — not exploit you.
        </motion.p>
      </div>
    </section>
  );
};

export default Differentiator;
