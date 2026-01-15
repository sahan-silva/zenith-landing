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

const App: React.FC = () => {
  return <ZenithLanding />;
};

export default App;
