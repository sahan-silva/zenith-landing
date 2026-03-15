/**
 * src/components/ui/card.tsx
 *
 * Reusable Card component with glass variants for the Zenith Journal UI.
 * Consumes global glass/radius tokens from the CSS foundation layer.
 *
 * Variants:
 *   - default: simple bordered container (Quiet Confidence style)
 *   - glass-hero: strong glass effect (blur-lg, radius-xl) via .glass-hero
 *   - glass-interactive: hover-responsive glass (blur-sm, radius-lg) via .glass-interactive
 *
 * Related: index.css (glass token definitions), auth-card.tsx, feature-slider.tsx
 */

import type { ReactNode } from 'react';

interface CardProps {
  variant?: 'default' | 'glass-hero' | 'glass-interactive';
  className?: string;
  children: ReactNode;
}

const variantClasses: Record<NonNullable<CardProps['variant']>, string> = {
  default: [
    'border border-stone/20',
    'rounded-2xl',
    'bg-ink/80',
  ].join(' '),
  'glass-hero': 'glass-hero',
  'glass-interactive': 'glass-interactive',
};

export function Card({
  variant = 'default',
  className = '',
  children,
}: CardProps) {
  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}

export default Card;
