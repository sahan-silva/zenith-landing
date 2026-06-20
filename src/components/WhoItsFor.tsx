/**
 * src/components/WhoItsFor.tsx
 *
 * "Who it's for" section for Zenith Journal landing page.
 *
 * Ports the Burlit who-it's-for grammar (aramuna-landing-page/components/trademate/
 * TradieMateWhoItsFor.tsx): "Who it's for" eyebrow → display H2 "Is this you?" with
 * ember em-accent → chevron-pill checklist (small ember-tinted square with `>` glyph) →
 * stone closing line.
 *
 * Chevron-pill marker is deliberately different from the checkmark used in
 * Differentiator — chevron signals "this points TO you," checkmark signals "we deliver
 * this." Same product, two distinct ideas, two distinct affordances.
 *
 * Checklist preserved verbatim from previous WhoItsFor.tsx (Reddit intel, Apr 2026):
 *   - "Removing decisions is so underrated" (r/ADHD, 76 engagement)
 *   - System-fatigue (Notion/Daylio/Day One)
 *   - Pattern-naming difficulty (r/Journaling)
 *   - Anti-engagement audience (r/aiagents)
 *
 * Related: ZenithLanding.tsx, Differentiator.tsx, Benefits.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const checklist: string[] = [
  'You\'ve tried Notion, Daylio, Day One — and none of them stuck',
  'You want to just write — no templates, no plugins, no vault organisation',
  'You sense patterns in your life but struggle to name them',
  'You\'re done with apps that count your time spent and call it progress',
  'You want a tool that removes decisions, not adds them',
  'You want clarity about who you are and where you\'re going',
];

const WhoItsFor: React.FC = () => {
  return (
    <section id="who" className="relative bg-ink py-20 font-body sm:py-28">
      <div className="container mx-auto max-w-[1120px] px-7">
        <motion.div {...fadeUp} className="mx-auto mb-14 max-w-[600px] text-center">
          <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-stone before:inline-block before:h-px before:w-6 before:bg-stone">
            Who it's for
          </span>
          <h2
            className="mt-5 font-display font-bold leading-[1.05] tracking-tight text-cream"
            style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
          >
            Is this <em className="not-italic text-ember">you</em>?
          </h2>
          <p className="mt-3.5 text-[1.0625rem] leading-relaxed text-stone sm:text-[1.125rem]">
            Zenith is for people who are done maintaining systems — and ready for one that maintains itself.
          </p>
        </motion.div>

        <div className="mx-auto flex max-w-[680px] flex-col gap-5">
          {checklist.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.06 }}
              className="flex items-start gap-4"
            >
              {/* Chevron pill — "this points to you". Differentiated from
                  Differentiator's checkmark (which signals "we deliver this"). */}
              <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-md border border-ember/35 bg-ember/10 text-ember">
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
              <p className="m-0 text-[17px] leading-[1.55] text-cream">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
          className="mt-14 text-center text-base text-stone"
        >
          If any of these land, Zenith was built for you — one place for everything, zero decisions required.
        </motion.p>
      </div>
    </section>
  );
};

export default WhoItsFor;
