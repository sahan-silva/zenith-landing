/**
 * src/components/ZenithLanding.tsx
 *
 * Main landing page component for Zenith Journal waitlist.
 * Combines all sections into a cohesive page.
 *
 * Section order: Hero → Problem → AntiSetup → AntiAesthetic → AntiEngagementManifesto → Benefits → Privacy → NoSubscription → WhoItsFor → FinalCTA
 * AntiSetup (Apr 2026) sits between Problem and AntiEngagementManifesto — it names the
 * specific setup friction (templates, plugins, workflows, vault organisation) that
 * prevents journaling-intent users from starting, positioning Zenith as zero-setup.
 * AntiAesthetic (Apr 2026) follows AntiSetup — it names the aesthetic pressure that
 * turns journaling into a visual craft project, positioning Zenith as substance over
 * style. Source: Reddit r/Journaling (315 upvotes). Narrative arc:
 * "here is the pain" → "here is the setup blocker" → "here is the aesthetic blocker"
 * → "here is our philosophy" → "here is what you get".
 * AntiEngagementManifesto then broadens to Zenith's full design philosophy before
 * Benefits present the concrete value props.
 * NoSubscription (Mar 2026) follows Privacy to stack the two zero-cost-to-user
 * differentiators: no data cost, then no money cost.
 *
 * Related: App.tsx, Hero.tsx, Problem.tsx, AntiSetup.tsx, AntiAesthetic.tsx, AntiEngagementManifesto.tsx, Benefits.tsx, Privacy.tsx, NoSubscription.tsx, WhoItsFor.tsx, FinalCTA.tsx
 */

import React from 'react';
import Hero from './Hero';
import Problem from './Problem';
import AntiSetup from './AntiSetup';
import AntiAesthetic from './AntiAesthetic';
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
      <AntiAesthetic />
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
