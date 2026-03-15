/**
 * src/components/ui/auth-card.tsx
 *
 * Stub -- replaced by glass-primitives PR.
 * Provides an authentication card with provider sign-in buttons.
 *
 * Related: ZenithLanding.tsx
 */

interface AuthCardProps {
  onProviderSelect?: (provider: 'apple' | 'google' | 'email') => void;
}

const providers = ['apple', 'google', 'email'] as const;

export function AuthCard({ onProviderSelect }: AuthCardProps) {
  return (
    <div className="glass-hero rounded-[var(--radius-xl)] p-8 flex flex-col gap-4">
      <h3 className="text-white font-medium text-xl">
        Start journaling today
      </h3>
      <p className="text-white/60 text-sm">Private, AI-powered, beautiful</p>
      {providers.map((p) => (
        <button
          key={p}
          onClick={() => onProviderSelect?.(p)}
          className="glass-interactive w-full py-3 px-4 rounded-[var(--radius-lg)] text-white text-sm capitalize"
        >
          Continue with {p}
        </button>
      ))}
    </div>
  );
}
