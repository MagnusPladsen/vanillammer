import type { SVGProps } from "react";

export function HammerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path
        d="M14 10h20l2 6-4 4H16l-4-4 2-6Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M22 20 10 34l4 4 14-12"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M30 18 38 26"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function KitchenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="8" y="12" width="32" height="20" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 28h32" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 16h8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M28 16h6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M18 32v8M30 32v8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function PaletteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path
        d="M24 8c-8.8 0-16 6.7-16 15 0 6.6 4.4 9 8 9h3c2.2 0 4 1.8 4 4 0 2.8 2.2 4 5 4 7.8 0 12-6 12-13 0-10-7.2-19-16-19Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="16" cy="22" r="2" fill="currentColor" />
      <circle cx="22" cy="18" r="2" fill="currentColor" />
      <circle cx="28" cy="20" r="2" fill="currentColor" />
    </svg>
  );
}

export function PlanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="10" y="8" width="28" height="32" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M18 16h12M18 22h12M18 28h8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M30 30l6 6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function WoodIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="10" y="14" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 20c4 4 8 4 12 0" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 28c4-4 8-4 12 0" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function FacadeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M8 24 24 10l16 14" stroke="currentColor" strokeWidth="1.6" />
      <rect x="12" y="24" width="24" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 38V28h8v10" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
