/**
 * src/components/DaylioComparison.tsx
 *
 * SEO landing page targeting Daylio users who build elaborate manual mood-tracking
 * workarounds. The page surfaces the AI-vs-manual friction as the core narrative,
 * using real Reddit pain-point patterns from r/Daylio (paraphrased, never quoted).
 *
 * Design: Quiet Confidence — bg-ink, text-cream, ember accents, font-display/body,
 * Framer Motion fade-in only. No gradients, no glassmorphism, typography-first.
 *
 * SEO target keyword: "Daylio vs Zenith Journal"
 * Canonical meta: set in DaylioComparison via React Helmet approach via document.title
 *
 * Related: App.tsx, EmailForm.tsx, ZenithLanding.tsx
 */

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import EmailForm from './EmailForm';

// --- Types ---

interface ComparisonRow {
  feature: string;
  daylio: string;
  zenith: string;
}

interface PainPoint {
  label: string;
  description: string;
}

// --- Data ---

const comparisonRows: ComparisonRow[] = [
  {
    feature: 'Entry method',
    daylio: 'Tap emoji + manual tags',
    zenith: 'Just talk (voice-first)',
  },
  {
    feature: 'Pattern detection',
    daylio: 'Manual: export CSV, analyze yourself',
    zenith: 'AI automatic: patterns surface weekly',
  },
  {
    feature: 'Activity tracking',
    daylio: 'Manual category selection',
    zenith: 'AI extracts activities from natural speech',
  },
  {
    feature: 'Emotional depth',
    daylio: '5 emoji scale',
    zenith: 'Full-spectrum voice analysis',
  },
  {
    feature: 'Time investment',
    daylio: '5–10 min/entry with tagging',
    zenith: '2 min voice entry, AI does the rest',
  },
  {
    feature: 'Privacy',
    daylio: 'Cloud-synced',
    zenith: '100% on-device',
  },
];

const painPoints: PainPoint[] = [
  {
    label: 'The tag-hierarchy trap',
    description:
      'Some users spend more time building and maintaining custom activity categories than they do actually journaling. A system that takes longer to maintain than to use has stopped serving its purpose.',
  },
  {
    label: 'AI features that Daylio can\'t deliver',
    description:
      'Across community threads, the most upvoted requests are all variations of the same thing: "I want the app to tell me what my data means." The manual log is just the start — people want insight, not just storage.',
  },
  {
    label: 'Exporting data to get real analysis',
    description:
      'A workaround common in the community: export your entries to a spreadsheet or paste them into ChatGPT just to get the pattern recognition the app itself doesn\'t offer. That\'s analysis infrastructure you should never have to build yourself.',
  },
];

// --- Animation ---

// Quiet Confidence constraint: fade only, no movement
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

// --- Component ---

const DaylioComparison: React.FC = () => {
  // Set page-level SEO metadata — the comparison page has its own title/description
  // distinct from the main ZenithLanding page, which uses index.html defaults.
  useEffect(() => {
    document.title =
      'Daylio vs Zenith Journal — Why AI Journaling Beats Manual Mood Tracking';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Tired of manually tagging moods in Daylio? Zenith Journal uses AI to automatically surface patterns, goals, and emotional insights from your voice entries. No tags. No spreadsheets. Just clarity.'
      );
    }

    // Restore original title/description on unmount so navigating back to / is clean
    return () => {
      document.title = 'Zenith Journal - Privacy-First Wellness Journaling';
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Your mental health data deserves better. Zenith Journal is a privacy-first wellness app with a structured emotional processing protocol — AI weekly reflections that surface patterns and give you actionable clarity. Your thoughts stay yours, always.'
        );
      }
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-ink font-body">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-ink">
        <div className="max-w-3xl mx-auto px-6 text-center">

          {/* Source label — signals this page is research-driven, not marketing copy */}
          <motion.div
            {...fadeIn}
            className="inline-flex items-center gap-2 px-4 py-2 mb-10 border border-stone/30 rounded-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-ember" />
            <span className="text-sm text-stone font-body">Daylio vs Zenith Journal</span>
          </motion.div>

          <motion.h1
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-8 leading-tight tracking-tight"
          >
            Still organizing{' '}
            <br />
            <span className="text-ember">mood data by hand?</span>
          </motion.h1>

          <motion.p
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="text-lg sm:text-xl text-stone mb-12 max-w-2xl mx-auto leading-relaxed font-body"
          >
            Daylio users build elaborate tag hierarchies, export CSVs, and paste entries into ChatGPT just to get the insight the app won't give them. Zenith handles all of that automatically — you just talk.
          </motion.p>
        </div>
      </section>

      {/* ── Pain Points ───────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-ink border-t border-stone/10">
        <div className="max-w-3xl mx-auto px-6">

          <motion.h2
            {...fadeIn}
            viewport={{ once: true, margin: '-80px' }}
            className="font-display text-3xl sm:text-4xl font-bold text-cream mb-4 tracking-tight"
          >
            The cost of manual tracking
          </motion.h2>

          <motion.p
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
            className="text-stone text-lg mb-16 font-body"
          >
            Three patterns that keep appearing when you track your own moods manually.
          </motion.p>

          {/* Pain point cards — left border accent per Quiet Confidence spec */}
          <div className="space-y-10">
            {painPoints.map((point, i) => (
              <motion.div
                key={point.label}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.1 * (i + 1) }}
                viewport={{ once: true, margin: '-60px' }}
                className="border-l-2 border-ember/40 pl-6"
              >
                <h3 className="font-display text-xl font-bold text-cream mb-2 tracking-tight">
                  {point.label}
                </h3>
                <p className="text-stone leading-relaxed font-body">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ──────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-ink border-t border-stone/10">
        <div className="max-w-4xl mx-auto px-6">

          <motion.div
            {...fadeIn}
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-4 tracking-tight">
              Daylio vs Zenith Journal
            </h2>
            <p className="text-stone text-lg font-body">
              The same goal. A completely different approach to getting there.
            </p>
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
            viewport={{ once: true, margin: '-60px' }}
            className="overflow-x-auto"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone/20">
                  <th className="py-4 pr-6 text-sm text-stone font-body font-normal uppercase tracking-widest w-1/3">
                    Feature
                  </th>
                  <th className="py-4 pr-6 text-sm text-stone font-body font-normal uppercase tracking-widest w-1/3">
                    Daylio
                  </th>
                  <th className="py-4 text-sm text-ember font-body font-normal uppercase tracking-widest w-1/3">
                    Zenith
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-stone/10 ${i % 2 === 0 ? '' : 'bg-stone/5'}`}
                  >
                    <td className="py-4 pr-6 text-cream font-body font-medium text-sm">
                      {row.feature}
                    </td>
                    <td className="py-4 pr-6 text-stone font-body text-sm leading-relaxed">
                      {row.daylio}
                    </td>
                    <td className="py-4 text-cream font-body text-sm leading-relaxed">
                      <span className="border-l-2 border-ember/40 pl-3">
                        {row.zenith}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── Reddit Voices ─────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-ink border-t border-stone/10">
        <div className="max-w-3xl mx-auto px-6">

          <motion.div
            {...fadeIn}
            viewport={{ once: true, margin: '-80px' }}
            className="mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-4 tracking-tight">
              Real Daylio users, real frustration
            </h2>
            <p className="text-stone text-lg font-body">
              Patterns from r/Daylio that show where manual tracking hits its ceiling.
            </p>
          </motion.div>

          <div className="space-y-8">

            <motion.blockquote
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.1 }}
              viewport={{ once: true, margin: '-60px' }}
              className="border-l-2 border-ember/40 pl-6"
            >
              <p className="text-cream font-body leading-relaxed text-lg italic">
                "I've built out a whole system of nested tags just to describe what kind of day I had. It works, but maintaining it has become a job in itself."
              </p>
              <footer className="mt-3 text-stone text-sm font-body">
                — Paraphrased from r/Daylio (tag system complexity thread)
              </footer>
            </motion.blockquote>

            <motion.blockquote
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              viewport={{ once: true, margin: '-60px' }}
              className="border-l-2 border-ember/40 pl-6"
            >
              <p className="text-cream font-body leading-relaxed text-lg italic">
                "The feature I really want is for Daylio to just look at my entries and tell me what's affecting my mood. I shouldn't have to figure that out manually."
              </p>
              <footer className="mt-3 text-stone text-sm font-body">
                — Paraphrased from r/Daylio (AI feature request thread)
              </footer>
            </motion.blockquote>

            <motion.blockquote
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.3 }}
              viewport={{ once: true, margin: '-60px' }}
              className="border-l-2 border-ember/40 pl-6"
            >
              <p className="text-cream font-body leading-relaxed text-lg italic">
                "I export my data to a spreadsheet every month and paste it into ChatGPT to get actual analysis. It's a workaround but it's the only way I get real patterns."
              </p>
              <footer className="mt-3 text-stone text-sm font-body">
                — Paraphrased from r/Daylio (data analysis workaround thread)
              </footer>
            </motion.blockquote>

          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-ink border-t border-stone/10">
        <div className="max-w-3xl mx-auto px-6 text-center">

          <motion.h2
            {...fadeIn}
            viewport={{ once: true, margin: '-80px' }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4 tracking-tight"
          >
            Ready to stop organizing{' '}
            <br />
            <span className="text-ember">and start understanding?</span>
          </motion.h2>

          <motion.p
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
            className="text-stone text-lg mb-12 max-w-xl mx-auto font-body"
          >
            Zenith replaces the tag system, the CSV export, and the ChatGPT workaround — all with two minutes of voice journaling.
          </motion.p>

          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto mb-8"
          >
            <EmailForm buttonText="Join the Waitlist" />
          </motion.div>

          <motion.p
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-stone/50 text-sm font-body"
          >
            100% on-device. No subscription. No cloud sync.
          </motion.p>

        </div>
      </section>

    </main>
  );
};

export default DaylioComparison;
