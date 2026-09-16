import { COLORS } from "@/lib/constants";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        width={compact ? 22 : 26}
        height={compact ? 22 : 26}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="16"
          cy="16"
          r="11.5"
          stroke="url(#logo-ring)"
          strokeWidth="1.2"
          opacity="0.9"
        />
        <path
          d="M16 6.5L17.7 13.1L24.5 13.3L19.1 17.3L21.2 23.8L16 19.9L10.8 23.8L12.9 17.3L7.5 13.3L14.3 13.1L16 6.5Z"
          fill="url(#logo-star)"
        />
        <defs>
          <linearGradient id="logo-ring" x1="4" y1="4" x2="28" y2="28">
            <stop stopColor={COLORS.magenta} />
            <stop offset="1" stopColor={COLORS.violet} />
          </linearGradient>
          <linearGradient id="logo-star" x1="16" y1="6" x2="16" y2="24">
            <stop stopColor="#ffd6ff" />
            <stop offset="1" stopColor={COLORS.magenta} />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-display text-[0.95rem] font-semibold tracking-[0.28em] text-white">
        ASTRIVO
      </span>
    </span>
  );
}
