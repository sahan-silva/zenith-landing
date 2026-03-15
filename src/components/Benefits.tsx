/**
 * src/components/Benefits.tsx
 *
 * Benefits section for Zenith Journal landing page.
 * Quiet Confidence redesign: Simple text blocks, ember accent, no glassmorphism.
 *
 * Related: ZenithLanding.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const USE_CAREER_RESILIENCE_POSITIONING = import.meta.env.VITE_USE_CAREER_RESILIENCE_POSITIONING === 'true';

const Benefits: React.FC = () => {
  const benefits = USE_CAREER_RESILIENCE_POSITIONING
    ? [
        {
          title: 'Capture Your Thinking',
          description:
            "Don't lose the insights that make you indispensable. Speak your analysis, decisions, and reasoning\u2014four times faster than typing.",
        },
        {
          title: 'Spot Your Edge',
          description:
            'Zenith identifies the judgment patterns, decision frameworks, and thinking strengths that set you apart from automated workflows.',
        },
        {
          title: 'A Coach That Knows You',
          description:
            'Weekly reflections drawn from your own reasoning history\u2014not generic career advice, but a mirror to your own thinking patterns.',
        },
      ]
    : [
        {
          title: 'Just Talk',
          description:
            "No blank page anxiety. Speak your thoughts and Zenith transcribes them instantly. Talk four times faster than you type\u2014your stream of consciousness becomes a searchable record.",
        },
        {
          title: 'Your Life, Organized',
          description:
            'Zenith reads between the lines. It automatically surfaces your goals, dreams, and recurring themes\u2014building a picture of who you are and who you\'re becoming.',
        },
        {
          title: 'A Friend Who Remembers',
          description:
            'Weekly insights from an AI that knows your story. Not generic advice\u2014reflections drawn from your own words, your own patterns, your own journey.',
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
            {USE_CAREER_RESILIENCE_POSITIONING ? (
              <>The toolkit that{' '}<span className="text-ember">sharpens you</span></>
            ) : (
              <>The journal that{' '}<span className="text-ember">understands you</span></>
            )}
          </h2>
          <p className="text-stone text-lg max-w-2xl mx-auto font-body">
            {USE_CAREER_RESILIENCE_POSITIONING
              ? 'Zenith is a career resilience companion that captures, analyzes, and strengthens the thinking skills that keep you ahead.'
              : 'Zenith is an AI companion that listens, remembers, and helps you see the bigger picture of your life.'}
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
