/**
 * src/components/Benefits.tsx
 *
 * Benefits section for Zenith Journal landing page.
 *
 * Ports the Burlit benefits-grid grammar (aramuna-landing-page/components/trademate/
 * TradieMateBenefits.tsx): "How it works" eyebrow → display H2 with ember em-accent →
 * 3-column grid where each card is icon tile + 01/02/03 number + display title + body.
 *
 * Three pillars, each mapped to what the build-17 app actually does (Sep 2026):
 *   01 — Just Write (Mic): zero-decision entry, voice or type — journaling is free
 *   02 — Thoughts Become Actions (ListChecks): the Actions tab — AI pulls tasks,
 *        goals and bucket-list items out of plain entries
 *   03 — Patterns You Can't See (Sparkles): the Insights tab + Journey streak/milestones
 * Earlier "everything journal / zibaldone" framing (Reddit intel, Apr 2026) survives in
 * the Hero subhead; it was retired here so the grid describes real tabs.
 *
 * Related: ZenithLanding.tsx, Hero.tsx, Problem.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Mic, ListChecks, Sparkles } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const ICON_CLASS = 'h-[22px] w-[22px] stroke-[2]';

const benefits: Array<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = [
  {
    title: 'Just Write',
    description:
      'Speak it or type it — no templates, no folders, no decisions. Open the Journal tab, add a mood or a tag if you feel like it, and write. Journaling itself is free; the AI only steps in afterwards, and never gets between you and the page.',
    icon: <Mic className={ICON_CLASS} />,
  },
  {
    title: 'Thoughts Become Actions',
    description:
      'Write "I need to call Mum this weekend" and it shows up in the Actions tab as a task — due this weekend. Goals and bucket-list items are pulled out the same way, straight from your own words. Nothing to tag, nothing to file, nothing to remember.',
    icon: <ListChecks className={ICON_CLASS} />,
  },
  {
    title: "Patterns You Can't See",
    description:
      "The Insights tab reads across weeks of entries and surfaces what a single session never could — the moods that follow a walk, the weeks that ran late, the people who keep turning up. The Journey tab keeps your streak and milestones so the practice has a rhythm, not a scoreboard.",
    icon: <Sparkles className={ICON_CLASS} />,
  },
];

const Benefits: React.FC = () => {
  return (
    <section
      id="benefits"
      className="relative bg-ink font-body"
      style={{ paddingTop: 64, paddingBottom: 112 }}
    >
      <div className="container mx-auto max-w-[1120px] px-7">
        <motion.div {...fadeUp} className="mx-auto mb-20 max-w-[720px] text-center">
          <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-stone before:inline-block before:h-px before:w-6 before:bg-stone">
            How it works
          </span>
          <h2
            className="mt-5 font-display font-bold leading-[1.05] tracking-tight text-cream"
            style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
          >
            The journal that sees{' '}
            <em className="not-italic text-ember">what you can't.</em>
          </h2>
          <p className="mt-3.5 text-[1.0625rem] leading-relaxed text-stone sm:text-[1.125rem]">
            Four tabs, zero decisions. Journal what happened, let Zenith turn it into Actions, read the Insights, and watch your Journey take shape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.08 }}
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[12px] border border-ember/30 bg-ember/10 text-ember">
                {benefit.icon}
              </div>
              <div className="mb-3.5 font-body text-[13px] font-bold uppercase tracking-[0.12em] text-ember">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="mb-3.5 font-display text-[1.5rem] font-bold leading-[1.2] tracking-tight text-cream">
                {benefit.title}
              </h3>
              <p className="m-0 text-[15.5px] leading-[1.65] text-stone">
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
