/**
 * src/main.tsx
 *
 * Application entry point for Zenith Journal landing page.
 * Mounts the React app to the DOM.
 *
 * BrowserRouter wraps the app here (at the root) so all child routes
 * and Link components resolve correctly, including SPA fallback on Vercel.
 *
 * Related: App.tsx, index.css
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
