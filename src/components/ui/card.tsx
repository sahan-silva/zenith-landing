/**
 * src/components/ui/card.tsx
 *
 * Stub -- replaced by glass-primitives PR. Merge glass-primitives PR first.
 * Provides glass-variant Card component.
 *
 * Related: ZenithLanding.tsx, FinalCTA.tsx
 */

import React from 'react';

interface CardProps {
  variant?: 'default' | 'glass-hero' | 'glass-interactive';
  className?: string;
  children: React.ReactNode;
}

export function Card({ variant = 'default', className, children }: CardProps) {
  const variantClass =
    variant === 'glass-hero'
      ? 'glass-hero'
      : variant === 'glass-interactive'
        ? 'glass-interactive'
        : 'glass-surface';

  return (
    <div className={`${variantClass} ${className ?? ''}`}>{children}</div>
  );
}
