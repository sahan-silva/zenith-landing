/**
 * src/components/ZenithLanding.tsx
 *
 * Main landing page component for Zenith Journal waitlist.
 * Combines all sections into a cohesive page.
 *
 * Section order: Hero → Problem → AntiEngagementManifesto → Benefits → Privacy → NoSubscription → WhoItsFor → FinalCTA
 * AntiEngagementManifesto (Mar 2026) sits between Problem and Benefits to bridge the
 * "here is what's wrong" narrative with "here is how Zenith is different" before
 * benefits are presented — making the philosophy the connective tissue.
 * NoSubscription (Mar 2026) follows Privacy to stack the two zero-cost-to-user
 * differentiators: no data cost, then no money cost.
 *
 * Related: App.tsx, Hero.tsx, Problem.tsx, AntiEngagementManifesto.tsx, Benefits.tsx, Privacy.tsx, NoSubscription.tsx, WhoItsFor.tsx, FinalCTA.tsx
 */

import React from 'react';
import Hero from './Hero';
import Problem from './Problem';
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
