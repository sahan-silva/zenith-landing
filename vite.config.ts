/**
 * vite.config.ts
 *
 * Vite configuration for Zenith Journal landing page.
 * Minimal React + TypeScript setup for Vercel deployment.
 *
 * Related: package.json, tsconfig.json
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
