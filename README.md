# Zenith Journal Landing Page

A standalone landing page for Zenith Journal - private AI-powered journaling for personal development coaches.

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling with Quiet Confidence design system
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Design System

This landing page implements the **Quiet Confidence** visual system:

- **Display Font**: Libre Baskerville (serif)
- **Body Font**: Source Sans 3 (sans-serif)
- **Colors**: Ink (#0a0a0b), Cream (#f5f2ed), Stone (#9a918a), Ember (#c97a4a), Dawn (#d4a574)
- **Animation**: Single pattern - 0.5s ease-out

See `docs/ADR-001-quiet-confidence-visual-system.md` for full design system documentation.

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

Built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_CONVERTKIT_FORM_ID` | Yes (for prod) | ConvertKit form ID for email waitlist |

In development mode, the email form will simulate success if the form ID is not set.

## Deployment

This project is configured for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Set environment variable `VITE_CONVERTKIT_FORM_ID` in Vercel dashboard
3. Deploy

The `vercel.json` configuration is included for optimal settings.

## Project Structure

```
zenith-landing/
├── public/              # Static assets
│   └── favicon.svg
├── src/
│   ├── components/      # React components
│   │   ├── Benefits.tsx
│   │   ├── EmailForm.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Hero.tsx
│   │   ├── Privacy.tsx
│   │   ├── Problem.tsx
│   │   ├── WhoItsFor.tsx
│   │   ├── ZenithFooter.tsx
│   │   └── ZenithLanding.tsx
│   ├── utils/
│   │   └── convertkit.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── docs/
│   └── ADR-001-quiet-confidence-visual-system.md
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

## License

Copyright 2026 Aramuna. All rights reserved.
