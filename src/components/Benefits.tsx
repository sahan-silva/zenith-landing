/**
 * src/components/Benefits.tsx
 *
 * Benefits section for Zenith Journal landing page.
 * Quiet Confidence redesign: Simple text blocks, ember accent, no glassmorphism.
 *
 * Value-centric pivot (Mar 2026): Section header and benefit descriptions updated to
 * emphasise time-efficiency and value-per-minute. The "Just Talk" benefit now leads
 * with the 4× speed advantage as a concrete value prop, not just a feature.
 *
 * Anti-engagement pivot (Mar 2026): Section header and benefit descriptions updated
 * with explicit contrast language — "not to log your time, but to return value on it".
 * Each benefit now names the anti-engagement stance: speed > blank-page scroll traps,
 * automatic synthesis > hours of scattered effort, honest reflection > generic advice.
 *
 * Emotional lightness pivot (Mar 2026): Each benefit now closes with the physical/emotional
 * sensation of relief — "the weight lift", "walk away lighter", "send you forward" — framing
 * the product as a date with yourself that you leave feeling better for having kept.
 *
 * Related: ZenithLanding.tsx, AntiEngagementManifesto.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Just Talk',
      // Lightness lens: talking is faster AND lifts the weight — the physical relief of externalising thoughts
      description:
        "Talk four times faster than you type — and feel the weight lift as you do. No blank page. No scroll trap. No session that ends heavier than it started. Just clarity at the speed of thought, the moment you need it.",
    },
    {
      title: 'Your Life, Organized',
      // Lightness lens: the exhaustion of fragmentation is lifted when Zenith does the synthesis for you
      description:
        'Zenith reads between the lines and automatically surfaces your goals, dreams, and recurring themes. Walk away lighter — without the hours of scattered note-taking, app-switching, or the mental weight of carrying it all yourself.',
    },
    {
      title: 'A Friend Who Remembers',
      // Lightness lens: being truly heard — by something that remembers — is what makes you feel lighter after
      description:
        'Weekly insights drawn from your own words, your own patterns, your own journey. Not generic advice designed to keep you coming back — real reflection, from a friend who remembers, that sends you forward lighter than you arrived.',
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
            Built to{' '}
            <span className="text-ember">leave you lighter.</span>
            <br />
            Not to hold you longer.
          </h2>
          <p className="text-stone text-lg max-w-2xl mx-auto font-body">
            Zenith is an AI companion designed with one constraint: every session must leave you lighter than when you arrived. Not more data to scroll through — the actual weight lifted. Real clarity you can act on.
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
