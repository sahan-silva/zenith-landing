/**
 * src/components/ZenithLanding.tsx
 *
 * Main landing page component for Zenith Journal waitlist.
 * Combines all sections into a cohesive page.
 *
 * Section order: Hero → Problem → AntiSetup → AntiEngagementManifesto → Benefits → Privacy → NoSubscription → WhoItsFor → FinalCTA
 * AntiSetup (Apr 2026) sits between Problem and AntiEngagementManifesto — it names the
 * specific setup friction (templates, plugins, workflows, vault organisation) that
 * prevents journaling-intent users from starting, positioning Zenith as zero-setup.
 * AntiEngagementManifesto then broadens to Zenith's full design philosophy before
 * Benefits present the concrete value props — making the narrative flow:
 * "here is the pain" → "here is the specific blocker" → "here is our philosophy" → "here is what you get".
 * NoSubscription (Mar 2026) follows Privacy to stack the two zero-cost-to-user
 * differentiators: no data cost, then no money cost.
 *
 * Related: App.tsx, Hero.tsx, Problem.tsx, AntiSetup.tsx, AntiEngagementManifesto.tsx, Benefits.tsx, Privacy.tsx, NoSubscription.tsx, WhoItsFor.tsx, FinalCTA.tsx
 */

import React from 'react';
import Hero from './Hero';
import Problem from './Problem';
import AntiSetup from './AntiSetup';
import AntiEngagementManifesto from './AntiEngagementManifesto';
import Benefits from './Benefits';
import Privacy from './Privacy';
import NoSubscription from './NoSubscription';
import WhoItsFor from './WhoItsFor';
import FinalCTA from './FinalCTA';
import ZenithFooter from './ZenithFooter';

const ZenithLanding: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-ink">
      <Hero />
      <Problem />
      <AntiSetup />
      <AntiEngagementManifesto />
      <Benefits />
      <Privacy />
      <NoSubscription />
      <WhoItsFor />
      <FinalCTA />
      <ZenithFooter />
    </main>
  );
};

export default ZenithLanding;
