/**
 * src/components/ui/auth-card.tsx
 *
 * UI-only authentication card for the sign-up section.
 * Displays Apple, Google, and Email provider buttons in a 2x2 grid layout.
 * No backend wiring — purely visual states.
 *
 * Uses glass-hero card variant and glass-interactive button styling.
 * Ember accent (#c97a4a) on CTA elements.
 *
 * Related: card.tsx, index.css (glass tokens)
 */

import type { ReactNode } from 'react';
import { Card } from './card';

type AuthProvider = 'apple' | 'google' | 'email';

interface AuthCardProps {
  onProviderSelect?: (provider: AuthProvider) => void;
}

/* ---------- Inline SVG icons ---------- */

function AppleIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      width="20"
      height="20"
    >
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function GoogleIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      width="20"
      height="20"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.02 10.02 0 0 0 2 12c0 1.61.39 3.14 1.07 4.5l3.77-2.41z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function EmailIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      width="20"
      height="20"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

/* ---------- Provider button base ---------- */

interface ProviderButtonProps {
  provider: AuthProvider;
  icon: ReactNode;
  label: string;
  styleVariant: 'dark' | 'light' | 'ghost';
  onClick?: () => void;
  className?: string;
}

const styleMap: Record<ProviderButtonProps['styleVariant'], string> = {
  dark: [
    'glass-interactive',
    'bg-white/5 text-cream',
    'hover:bg-white/10',
  ].join(' '),
  light: [
    'glass-interactive',
    'bg-white/90 text-ink',
    'hover:bg-white',
  ].join(' '),
  ghost: [
    'glass-interactive',
    'border border-stone/30 text-cream',
    'hover:border-ember/50 hover:text-ember',
  ].join(' '),
};

function ProviderButton({
  icon,
  label,
  styleVariant,
  onClick,
  className = '',
}: ProviderButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'flex items-center justify-center gap-3',
        'px-5 py-3.5 rounded-lg',
        'font-medium text-sm',
        'transition-all duration-300 ease-out',
        'cursor-pointer',
        styleMap[styleVariant],
        className,
      ].join(' ')}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

/* ---------- AuthCard ---------- */

export function AuthCard({ onProviderSelect }: AuthCardProps) {
  return (
    <Card variant="glass-hero" className="p-8 sm:p-10 max-w-md w-full mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h3
          className="text-xl sm:text-2xl font-medium text-cream mb-2"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          Start journaling today
        </h3>
        <p className="text-stone text-sm">Private, AI-powered, beautiful</p>
      </div>

      {/* Provider buttons — 2x2 grid: Apple + Google top, Email spanning bottom */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <ProviderButton
          provider="apple"
          icon={<AppleIcon />}
          label="Continue with Apple"
          styleVariant="dark"
          onClick={() => onProviderSelect?.('apple')}
        />
        <ProviderButton
          provider="google"
          icon={<GoogleIcon />}
          label="Continue with Google"
          styleVariant="light"
          onClick={() => onProviderSelect?.('google')}
        />
        <ProviderButton
          provider="email"
          icon={<EmailIcon />}
          label="Continue with email"
          styleVariant="ghost"
          onClick={() => onProviderSelect?.('email')}
          className="col-span-2"
        />
      </div>

      {/* Footer */}
      <p className="text-center text-stone/60 text-xs">
        No credit card required{' '}
        <span className="mx-1" aria-hidden="true">
          &middot;
        </span>{' '}
        Private by default
      </p>
    </Card>
  );
}

export default AuthCard;
