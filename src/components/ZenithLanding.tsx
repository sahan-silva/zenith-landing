/**
 * src/components/ZenithLanding.tsx
 *
 * Main landing page component for Zenith Journal waitlist.
 * Combines all sections into a cohesive page with Japanese Aesthetic + Liquid Glass
 * design system: atmospheric background, feature slider, and auth sign-up grid.
 *
 * Related: App.tsx, Hero.tsx, Problem.tsx, Benefits.tsx, Privacy.tsx, WhoItsFor.tsx, FinalCTA.tsx
 */

import React from 'react';
import { ZenithBackground } from './Layout/ZenithBackground';
import { FeatureSlider } from './ui/feature-slider';
import { AuthCard } from './ui/auth-card';
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
      {/* Fixed atmospheric background layer */}
      <ZenithBackground />

      <Hero />

      {/* Feature Slider section */}
      <section className="py-16 sm:py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <FeatureSlider />
        </div>
      </section>

      <Problem />
      <Benefits />
      <Privacy />
      <WhoItsFor />

      {/* Auth Section — responsive 2-column grid */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-medium text-white mb-4">
              Ready to begin?
            </h2>
            <p className="text-white/70">
              Join thousands building a daily reflection practice.
            </p>
          </div>
          <AuthCard />
        </div>
      </section>

      <FinalCTA />
      <ZenithFooter />
    </main>
  );
};

export default ZenithLanding;
