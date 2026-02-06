import type { SVGProps } from "react";

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 220 48"
      className={className}
      aria-label="Vanillammer"
      role="img"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M18 36 30 24 24 18 12 30Z" />
        <path d="M32 16h14l2 6-3 3H30l-3-3 2-6Z" />
        <path d="M16 32l-4 4" />
        <path d="M42 14l6 6" />
        <path d="M6 36h40" />
        <path d="M6 36l10-10 8 8 12-12 10 10" />
      </g>
      <text
        x="62"
        y="32"
        fill="currentColor"
        fontFamily="Cormorant, serif"
        fontSize="28"
        letterSpacing="1"
      >
        Vanillammer
      </text>
    </svg>
  );
}
