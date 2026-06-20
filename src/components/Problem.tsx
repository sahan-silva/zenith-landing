/**
 * src/components/Problem.tsx
 *
 * Problem section for Zenith Journal landing page.
 *
 * Ports the Burlit problem-section grammar (aramuna-landing-page/components/trademate/
 * TradieMateProblem.tsx): "The reality" eyebrow → display H2 + italic stone subtitle →
 * left-border ember pain points → italic stone transition. Consolidates content from
 * three previous sections (Problem, AntiSetup, AntiAesthetic) into 5 sharpest pain
 * points per the 2026-05-11 design spec.
 *
 * Reddit-intel positioning preserved:
 *   - r/Journaling 157 engagement on "everything journal" gap (point 1)
 *   - r/ADHD 76 engagement on "removing decisions" / system maintenance (point 2)
 *   - Reddit setup-friction intel (point 3) — was AntiSetup template/plugin pain
 *   - Reddit anti-aesthetic intel 315 upvotes (point 4) — was AntiAesthetic
 *   - r/aiagents demand for AI that disappears (point 5) — patterns you can't see
 *
 * Related: ZenithLanding.tsx, Benefits.tsx, Differentiator.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const painPoints = [
  {
    emphasis: 'You\'ve tried five apps. None of them talk to each other.',
    detail:
      'A mood tracker here, a gratitude journal there, a habit app on another screen. Your life is scattered across tools that each capture a fragment but never show you the whole picture.',
  },
  {
    emphasis: 'You spend more time maintaining your system than using it.',
    detail:
      'Templates, plugins, workflows, vault organisation. You set up elaborate structures, colour-coded and categorised — then spend more time tending the system than actually reflecting.',
  },
  {
    emphasis: 'Templates and plugins replace the writing itself.',
    detail:
      'You open a tool to journal. Forty-five minutes later you\'re comparing daily-note structures and have written exactly nothing about your day. The architecture is elegant. There is still no journal.',
  },
  {
    emphasis: 'Colour-coding your emotions isn\'t the same as processing them.',
    detail:
      'A red dot for anger, a blue dot for sadness, a green dot for calm. The system is beautiful. It also tells you nothing about why you felt that way or what to do about it. Categorising is not understanding.',
  },
  {
    emphasis: 'You sense patterns in your life but can\'t quite name them.',
    detail:
      'The same feelings keep surfacing. The same obstacles reappear. You know something is there — a recurring thread — but without a way to step back across weeks and months, you can\'t see it clearly.',
  },
];

const Problem: React.FC = () => {
  return (
    <section id="problem" className="relative bg-ink py-20 font-body sm:py-28">
      <div className="container mx-auto max-w-[1120px] px-7">
        <motion.div {...fadeUp} className="mx-auto mb-16 max-w-[760px] text-center sm:mb-20">
          <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-stone before:inline-block before:h-px before:w-6 before:bg-stone">
            The reality
          </span>
          <h2
            className="mt-5 font-display font-bold leading-[1.05] tracking-tight text-cream"
            style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
          >
            You don't need another app.
          </h2>
          <p
            className="mt-3.5 font-display italic text-stone"
            style={{
              fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            You need one that sees the whole picture.
          </p>
        </motion.div>

        <div className="mx-auto flex max-w-[760px] flex-col gap-9">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.08 }}
              className="relative border-l-2 border-ember/40 py-1 pl-7"
            >
              <p
                className="mb-2 font-body font-semibold leading-snug text-cream"
                style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)' }}
              >
                {point.emphasis}
              </p>
              <p className="m-0 text-base leading-relaxed text-stone">{point.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.25 }}
          className="mt-20 text-center font-display italic text-stone"
          style={{ fontSize: '1.1875rem' }}
        >
          What if one journal could hold all of it — and show you what you can't see on your own?
        </motion.p>
      </div>
    </section>
  );
};

export default Problem;
