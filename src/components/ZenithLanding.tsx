/**
 * src/components/ZenithLanding.tsx
 *
 * Main landing page for Zenith Journal waitlist.
 *
 * Section order (6 sections, Burlit parity per docs/superpowers/specs/
 * 2026-05-11-zenith-burlit-parity-design.md):
 *   1. Hero       — copy + phone mock + feature card column
 *   2. Problem    — merges previous Problem + AntiSetup + AntiAesthetic
 *   3. Benefits   — three pillars (Just Write / Everything Journal / Patterns)
 *   4. Differentiator — merges AntiEngagementManifesto + Privacy + NoSubscription
 *   5. WhoItsFor  — chevron-pill checklist
 *   6. FinalCTA   — radial ember glow + incentive row + EmailForm
 *
 * Chrome (mirrors Burlit's TradieMateLanding):
 *   - ZenithWordmarkBar: fixed top, scroll-revealed "Join waitlist" pill
 *   - ZenithScrollRail:  fixed right edge, hover/scroll-revealed section nav
 *
 * Replaces the previous 10-section structure. Reddit-intel positioning preserved
 * by relocation, not loss — see each section's header docblock for which intel
 * thread its content was sourced from.
 *
 * Related: Hero.tsx, Problem.tsx, Benefits.tsx, Differentiator.tsx, WhoItsFor.tsx,
 * FinalCTA.tsx, ZenithFooter.tsx, ZenithWordmarkBar.tsx, ZenithScrollRail.tsx
 */

import React from 'react';
import ZenithWordmarkBar from './ZenithWordmarkBar';
import ZenithScrollRail from './ZenithScrollRail';
import Hero from './Hero';
import Problem from './Problem';
import Benefits from './Benefits';
import Differentiator from './Differentiator';
import WhoItsFor from './WhoItsFor';
import FinalCTA from './FinalCTA';
import ZenithFooter from './ZenithFooter';

const ZenithLanding: React.FC = () => {
  return (
    <main
      className="relative min-h-screen bg-ink text-cream"
      style={{ scrollBehavior: 'smooth' }}
    >
      <ZenithWordmarkBar />
      <ZenithScrollRail />
      <Hero />
      <Problem />
      <Benefits />
      <Differentiator />
      <WhoItsFor />
      <FinalCTA />
      <ZenithFooter />
    </main>
  );
};

export default ZenithLanding;
