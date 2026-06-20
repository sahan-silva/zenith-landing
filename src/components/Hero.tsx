/**
 * src/components/Hero.tsx
 *
 * Hero section for Zenith Journal landing page.
 *
 * Ports the Burlit hero layout (aramuna-landing-page/components/trademate/TradieMateHero.tsx):
 * left column = status pill + H1 + subhead + email form + trust badges; right column on
 * desktop = phone mock + 6-card feature grid; mobile = stacked with full-width
 * auto-scrolling marquee of feature cards below the phone.
 *
 * Pattern Recognition + Everything Journal positioning preserved from the previous
 * Hero (Reddit intel, Apr 2026 — Notion task: notion.so/334fb7321349811a97c5f89be5437bd1).
 * The H1 is the three-beat rhythm Burlit established: a clean statement, an italic
 * stone middle line, and a closing brand-accent line.
 *
 * Hero renders WITHOUT framer-motion. Above-the-fold entry animations occasionally
 * stall (hidden tabs, reduced-motion, stalled rAF) and blank the headline. Static
 * keeps the page bulletproof. Below-the-fold sections still use the fadeUp pattern.
 *
 * Related: ZenithPhoneMock.tsx, EmailForm.tsx, ZenithLanding.tsx
 */

import React from 'react';
import { Mic, Notebook, Sparkles, Moon } from 'lucide-react';
import EmailForm from './EmailForm';
import ZenithPhoneMock from './ZenithPhoneMock';

const Tick: React.FC = () => (
  <svg className="h-3.5 w-3.5 text-ember" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

interface FeatureCardProps {
  icon: React.ReactNode;
  label: string;
  ariaHidden?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, label, ariaHidden }) => (
  // Mobile: fixed-width + fixed-height card so every marquee tile reads
  // identically regardless of how many lines its label wraps to.
  // Desktop (md+): card sizes itself to the 118px-wide column / 6-row grid.
  <div
    aria-hidden={ariaHidden || undefined}
    className="flex h-[108px] w-[170px] flex-shrink-0 flex-col justify-center gap-2 rounded-[12px] border border-white/5 bg-[rgba(28,26,24,0.92)] p-3 md:h-auto md:w-auto md:gap-[7px] md:p-2.5"
  >
    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] border border-ember/30 bg-ember/[0.10] text-ember">
      {icon}
    </div>
    <p className="m-0 text-[12px] font-semibold leading-[1.3] text-cream/90 [text-wrap:pretty]">
      {label}
    </p>
  </div>
);

// Feature cards rendered in the hero. Lucide icons for consistent stroke + frame
// proportions. Each card names one capability the phone mock demonstrates.
// Trimmed to 4 cards (May 2026, CEO direction): privacy/no-subscription messaging
// lives in the Differentiator section, so the hero column stays focused on the
// four product pillars the phone mock actually shows.
const ICON_CLASS = 'h-[18px] w-[18px] stroke-[2]';
const FEATURE_CARDS: Array<{ label: string; icon: React.ReactNode }> = [
  { label: 'Voice or type — 4× faster than tapping', icon: <Mic className={ICON_CLASS} /> },
  { label: 'One place for reflection, mood, goals, dreams', icon: <Notebook className={ICON_CLASS} /> },
  { label: 'Zenith surfaces patterns you can\'t see', icon: <Sparkles className={ICON_CLASS} /> },
  { label: 'Tonight\'s thoughts become tomorrow\'s actions', icon: <Moon className={ICON_CLASS} /> },
];

const TRUST_BADGES = ['Pattern Recognition', 'Everything Journal', 'Privacy-First'];

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-16 pt-24 font-body text-cream sm:pb-20 sm:pt-[140px] lg:min-h-screen"
    >
      {/* Soft ember radial glow — the only visible "warmth" in the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-100px] z-0 h-[900px] w-[900px] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(circle at center, rgba(201,122,74,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Wider container so the phone + feature-card column sits further right on
          desktop and the H1 keeps horizontal breathing room. */}
      <div className="container relative z-10 mx-auto max-w-[1120px] px-5 sm:px-7 lg:max-w-[1240px]">
        {/* `min-w-0` via grid-cols-[minmax(0,...)] prevents wide content from
            forcing the column past the viewport on mobile. */}
        <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-24">
          {/* Left: copy. Mobile centers everything; desktop reverts to left-aligned. */}
          <div className="text-center sm:text-left">
            <div className="mb-7 flex flex-wrap items-center justify-center gap-3 sm:mb-8 sm:justify-start">
              <span className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-md border border-stone/40 px-3.5 py-1.5 text-[12px] text-stone sm:px-4 sm:py-2 sm:text-[13px]">
                <span
                  className="h-[7px] w-[7px] animate-pulse rounded-full bg-ember"
                  style={{ boxShadow: '0 0 10px rgba(201,122,74,0.6)' }}
                />
                Coming Soon
              </span>
            </div>

            {/* H1 — three-beat rhythm (statement / italic middle / brand line).
                Mobile floor 1.75rem so the headline doesn't dominate the phone. */}
            <h1
              className="mb-5 font-display font-bold leading-[1.08] tracking-tight text-cream sm:mb-6"
              style={{ fontSize: 'clamp(1.75rem, 4.2vw, 3.5rem)' }}
            >
              Your life has patterns.
              <br />
              <span
                className="my-1 inline-block font-normal italic leading-[1.2] text-stone sm:my-1.5"
                style={{ fontSize: 'clamp(1.125rem, 2.6vw, 2.125rem)' }}
              >
                Zenith reveals them.
              </span>
              <br />
              <span className="text-ember">Just write.</span>
            </h1>

            <p className="mb-8 max-w-[560px] font-body text-[15px] leading-relaxed text-stone sm:mb-9 sm:text-[1.0625rem] lg:text-[1.125rem]">
              Your everything journal — reflection, tracking, goals, life, all in one place. Just write. Zenith's AI works invisibly across your entries, surfacing emotional patterns, recurring obstacles, and breakthroughs you'd never spot on your own. No setup. No categories. No decisions.
            </p>

            <div className="mx-auto mb-10 w-full max-w-[320px] sm:mx-0 sm:max-w-[480px]">
              <EmailForm buttonText="Join the Waitlist" />
              <p className="mt-3 text-center text-[11.5px] text-stone sm:text-left sm:text-[12.5px]">
                No spam. No engagement tricks. Just one update when Zenith is ready for you.
              </p>
            </div>

            {/* Trust badges. Mobile tightens gap + shrinks text so three fit on one line. */}
            <div className="flex flex-nowrap justify-center gap-x-3 text-[11.5px] text-stone sm:flex-wrap sm:justify-start sm:gap-x-8 sm:text-[13.5px]">
              {TRUST_BADGES.map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 whitespace-nowrap sm:gap-2">
                  <Tick />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right column on desktop / phone-only on mobile. Marquee lives OUTSIDE
              this container so it spans full viewport width. */}
          <div className="relative flex min-w-0 flex-col items-center gap-8 md:flex-row md:gap-8 lg:min-h-[720px] lg:justify-end">
            <div className="origin-top scale-[0.82] sm:scale-90 md:scale-100">
              <ZenithPhoneMock />
            </div>

            {/* Desktop (md+) only: static 118px-wide vertical column beside the phone.
                4 rows × ~112px + 3 × 6px gap ≈ 466px. md:self-center keeps the
                column vertically balanced against the 720px phone hardware. */}
            <div className="hidden md:grid md:w-auto md:grid-cols-[118px] md:auto-rows-[112px] md:gap-1.5 md:self-center md:flex-none">
              {FEATURE_CARDS.map((c, i) => (
                <FeatureCard key={i} icon={c.icon} label={c.label} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-only auto-scrolling marquee. Spans full viewport. Pauses on
          hover/touch/focus-within so the user can swipe through. */}
      <style>{`
        @keyframes zn-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .zn-marquee-track {
          animation: zn-marquee 32s linear infinite;
        }
        .zn-marquee-viewport:hover .zn-marquee-track,
        .zn-marquee-viewport:active .zn-marquee-track,
        .zn-marquee-viewport:focus-within .zn-marquee-track {
          animation-play-state: paused;
        }
        .zn-marquee-viewport::-webkit-scrollbar { display: none; }
        @media (prefers-reduced-motion: reduce) {
          .zn-marquee-track { animation: none; }
        }
      `}</style>
      <div
        className="zn-marquee-viewport relative mt-10 w-full overflow-x-auto overscroll-x-contain md:hidden"
        style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        <div className="zn-marquee-track flex w-max gap-3 px-3">
          {FEATURE_CARDS.map((c, i) => (
            <FeatureCard key={`a-${i}`} icon={c.icon} label={c.label} />
          ))}
          {FEATURE_CARDS.map((c, i) => (
            <FeatureCard key={`b-${i}`} icon={c.icon} label={c.label} ariaHidden />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
