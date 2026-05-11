/**
 * src/components/FinalCTA.tsx
 *
 * Final call-to-action section for Zenith Journal landing page.
 *
 * Ports the Burlit final-CTA grammar (aramuna-landing-page/components/trademate/
 * TradieMateFinalCTA.tsx): bottom-radial ember glow → "Zenith Co-creators" eyebrow →
 * display H2 with ember em-accent → flex row of incentives (each `+ label`) → EmailForm
 * → stone trust note.
 *
 * Headline keeps the Apr 2026 "Midnight Clarity" arc — Tonight's clarity, tomorrow's
 * action (Reddit r/productivity midnight clarity thread, 824 upvotes). Incentive list
 * trimmed from 6 → 4 for Burlit parity; the dropped items survive in commit history
 * and can move into a future /zenith/why-join page.
 *
 * Related: ZenithLanding.tsx, EmailForm.tsx, ZenithWordmarkBar.tsx (the floating CTA
 * that targets this section's #waitlist anchor).
 */

import React from 'react';
import { motion } from 'framer-motion';
import EmailForm from './EmailForm';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const incentives = [
  'Early access to the beta',
  'Founding member pricing',
  'Shape the features we ship',
  'AI insights included — no subscription, ever',
];

const FinalCTA: React.FC = () => {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-ink py-20 font-body sm:py-28"
    >
      {/* Ember radial glow blooming from the bottom edge — the only warmth allowed
          on a body section, mirroring Burlit's lime-glow CTA bloom. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-[200px] h-[400px]"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(201,122,74,0.10) 0%, transparent 65%)',
        }}
      />

      <div className="container relative z-10 mx-auto max-w-[1120px] px-7">
        <div className="mx-auto max-w-[680px] text-center">
          <motion.span
            {...fadeUp}
            className="inline-flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-stone before:inline-block before:h-px before:w-6 before:bg-stone"
          >
            Zenith Co-creators
          </motion.span>

          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.06 }}
            className="mt-5 font-display font-bold leading-[1.05] tracking-tight text-cream"
            style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
          >
            Tonight's clarity.{' '}
            <em className="not-italic text-ember">Tomorrow's action.</em>
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.12 }}
            className="mx-auto mt-4 max-w-[520px] text-[1.0625rem] leading-relaxed text-stone sm:text-[1.125rem]"
          >
            Join the waitlist. Zenith captures what you think at night and turns it into what you do in the morning.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.18 }}
            className="mb-10 mt-10 flex flex-wrap justify-center gap-x-7 gap-y-3.5"
          >
            {incentives.map((incentive) => (
              <span
                key={incentive}
                className="inline-flex items-center gap-2 text-[14.5px] text-stone"
              >
                <span className="font-bold text-ember">+</span>
                {incentive}
              </span>
            ))}
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.24 }}
            className="mx-auto w-full max-w-[320px] sm:max-w-[460px]"
          >
            <EmailForm buttonText="Join the Waitlist" />
            <p className="mt-5 text-center text-[12.5px] text-stone/70 sm:text-left">
              No spam. No engagement tricks. Just one update when Zenith is ready for you.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
