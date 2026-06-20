/**
 * src/components/Benefits.tsx
 *
 * Benefits section for Zenith Journal landing page.
 *
 * Ports the Burlit benefits-grid grammar (aramuna-landing-page/components/trademate/
 * TradieMateBenefits.tsx): "How it works" eyebrow → display H2 with ember em-accent →
 * 3-column grid where each card is icon tile + 01/02/03 number + display title + body.
 *
 * Three pillars preserved verbatim from the previous Benefits content (Reddit intel,
 * Apr 2026 — Notion task: notion.so/334fb7321349811a97c5f89be5437bd1):
 *   01 — Just Write (Mic): zero-decision entry, voice or text, 4× faster
 *   02 — Your Everything Journal (Notebook): one place for reflection/mood/goals/dreams,
 *        the modern zibaldone — wording aligned with Hero subhead and SEO meta
 *   03 — Patterns You Can't See (Sparkles): AI works invisibly across weeks/months
 *
 * Related: ZenithLanding.tsx, Hero.tsx, Problem.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Notebook, Sparkles } from 'lucide-react';

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
      'Voice or text — no templates, no folders, no decisions. Zenith adapts to however you think. Four times faster than typing, zero setup required. The AI removes every barrier between you and reflection.',
    icon: <Mic className={ICON_CLASS} />,
  },
  {
    title: 'Your Everything Journal',
    description:
      'Reflection, mood tracking, goals, dreams, daily logs — one place for all of it. Zenith reads between the lines and organises your life without asking you to categorise anything. The modern zibaldone — one notebook for everything, powered by AI that reads between the lines.',
    icon: <Notebook className={ICON_CLASS} />,
  },
  {
    title: "Patterns You Can't See",
    description:
      "Zenith's AI works invisibly across weeks and months of your entries. It surfaces emotional patterns, recurring obstacles, and hidden correlations — the threads running through your life that no single journal session could reveal. You never interact with the AI. It just shows you what's there.",
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
            One place for everything. Zero decisions. An AI that works invisibly — surfacing the patterns, connections, and breakthroughs hidden in your own words.
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
