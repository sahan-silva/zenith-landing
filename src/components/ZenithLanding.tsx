/**
 * src/components/ZenithLanding.tsx
 *
 * Main landing page component for Zenith Journal waitlist.
 * Combines all sections into a cohesive page.
 *
 * Related: App.tsx, Hero.tsx, Problem.tsx, Benefits.tsx, Privacy.tsx, WhoItsFor.tsx, FinalCTA.tsx
 */

import React from 'react';
import Hero from './Hero';
import Problem from './Problem';
import Benefits from './Benefits';
import Privacy from './Privacy';
import WhoItsFor from './WhoItsFor';
import FinalCTA from './FinalCTA';
import ZenithFooter from './ZenithFooter';

const ZenithLanding: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-ink">
      <Hero />
      <Problem />
      <Benefits />
      <Privacy />
      <WhoItsFor />
      <FinalCTA />
      <ZenithFooter />
    </main>
  );
};

export default ZenithLanding;
