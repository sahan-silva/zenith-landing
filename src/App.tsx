/**
 * src/App.tsx
 *
 * Root application component for Zenith Journal landing page.
 * Routes:
 *   /               → ZenithLanding (main waitlist page)
 *   /compare/daylio → DaylioComparison (competitor comparison for Reddit/SEO traffic)
 *
 * New routes should be added here — BrowserRouter is provided by main.tsx.
 *
 * Related: main.tsx, components/ZenithLanding.tsx, components/DaylioComparison.tsx
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ZenithLanding from './components/ZenithLanding';
import DaylioComparison from './components/DaylioComparison';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ZenithLanding />} />
      <Route path="/compare/daylio" element={<DaylioComparison />} />
    </Routes>
  );
};

export default App;
