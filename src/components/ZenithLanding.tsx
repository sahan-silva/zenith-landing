/**
 * src/components/ZenithLanding.tsx
 *
 * Main landing page component for Zenith Journal waitlist.
 * Combines all sections into a cohesive page.
 *
 * Section order:
 *   Hero → Problem → EmotionalSafety → AntiSetup → AntiEngagementManifesto →
 *   Benefits → Privacy → NoSubscription → WhoItsFor → SwitchFromDaylio → FinalCTA
 *
 * EmotionalSafety (Apr 2026) sits between Problem and AntiSetup — it validates the
 * emotional barrier (fear of journaling: blank page, painful re-reads) right after
 * naming the pain, before showing how Zenith removes setup friction. Narrative flow:
 * "here is the pain" → "it's okay to feel this way" → "here is how we remove barriers".
 * Source: Reddit r/Journaling, 115 engagement, top comment 98 upvotes.
 *
 * SwitchFromDaylio (Apr 2026) sits between WhoItsFor and FinalCTA — it intercepts
 * users who identified with the checklist and are already using mood-tracking apps.
 * Positions Zenith as the AI intelligence layer on top of existing habits.
 * Source: Reddit r/Daylio — explicit ask for AI weekly summaries.
 *
 * AntiSetup (Apr 2026) sits between EmotionalSafety and AntiEngagementManifesto —
 * names the specific setup friction (templates, plugins, workflows, vault organisation)
 * that prevents journaling-intent users from starting, positioning Zenith as zero-setup.
 * AntiEngagementManifesto then broadens to Zenith's full design philosophy before
 * Benefits present the concrete value props.
 *
 * NoSubscription (Mar 2026) follows Privacy to stack the two zero-cost-to-user
 * differentiators: no data cost, then no money cost.
 *
 * Related: App.tsx, Hero.tsx, Problem.tsx, EmotionalSafety.tsx, AntiSetup.tsx,
 * AntiEngagementManifesto.tsx, Benefits.tsx, Privacy.tsx, NoSubscription.tsx,
 * WhoItsFor.tsx, SwitchFromDaylio.tsx, FinalCTA.tsx
 */

import React from 'react';
import Hero from './Hero';
import Problem from './Problem';
import EmotionalSafety from './EmotionalSafety';
import AntiSetup from './AntiSetup';
import AntiEngagementManifesto from './AntiEngagementManifesto';
import Benefits from './Benefits';
import Privacy from './Privacy';
import NoSubscription from './NoSubscription';
import WhoItsFor from './WhoItsFor';
import SwitchFromDaylio from './SwitchFromDaylio';
import FinalCTA from './FinalCTA';
import ZenithFooter from './ZenithFooter';

const ZenithLanding: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-ink">
      <Hero />
      <Problem />
      <EmotionalSafety />
      <AntiSetup />
      <AntiEngagementManifesto />
      <Benefits />
      <Privacy />
      <NoSubscription />
      <WhoItsFor />
      <SwitchFromDaylio />
      <FinalCTA />
      <ZenithFooter />
    </main>
  );
};

export default ZenithLanding;
