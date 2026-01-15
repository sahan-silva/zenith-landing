/**
 * src/main.tsx
 *
 * Application entry point for Zenith Journal landing page.
 * Mounts the React app to the DOM.
 *
 * Related: App.tsx, index.css
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
