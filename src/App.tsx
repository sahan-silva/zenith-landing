/**
 * src/App.tsx
 *
 * Root application component for Zenith Journal landing page.
 * Renders the ZenithLanding page component.
 *
 * Related: main.tsx, components/ZenithLanding.tsx
 */

import React from 'react';
import ZenithLanding from './components/ZenithLanding';
import PrivacyPolicy from './components/PrivacyPolicy';

const App: React.FC = () => {
  if (window.location.pathname === '/privacy') {
    return <PrivacyPolicy />;
  }

  return <ZenithLanding />;
};

export default App;
