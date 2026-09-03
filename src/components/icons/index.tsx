import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ArrowRight = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const Shield = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Bolt = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </svg>
);

export const Star = (props: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...props}>
    <path d="m12 3 2.6 6 6.4.6-4.9 4.3 1.5 6.4L12 17l-5.6 3.3 1.5-6.4L3 9.6 9.4 9 12 3Z" />
  </svg>
);

export const Chat = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12Z" />
  </svg>
);

export const Check = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="m5 12 5 5L20 7" />
  </svg>
);

export const Plus = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Menu = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M6 6l12 12M6 18 18 6" />
  </svg>
);

export const Discord = (props: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...props}>
    <path d="M19 5a16 16 0 0 0-4-1l-.2.4a12 12 0 0 0-3.6 0L11 4a16 16 0 0 0-4 1A17 17 0 0 0 4 17a16 16 0 0 0 5 2l1-2a10 10 0 0 1-2-1l.5-.4a11 11 0 0 0 10 0l.5.4a10 10 0 0 1-2 1l1 2a16 16 0 0 0 5-2 17 17 0 0 0-3-12ZM10 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
  </svg>
);

export const Controller = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M7 9h10a5 5 0 0 1 5 5v1a3 3 0 0 1-5.5 1.7L15 14H9l-1.5 2.7A3 3 0 0 1 2 15v-1a5 5 0 0 1 5-5Z" />
    <path d="M10 12v2m-1-1h2m5 0h2m-1-1v2" />
  </svg>
);

export const Crown = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M3 18h18" />
    <path d="M4 6h0l4 4 4-6 4 6 4-4-2 12H6L4 6Z" />
  </svg>
);

export const Users = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="16" cy="7" r="4" />
    <path d="M8 12a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" />
    <path d="M2 20c0-2.5 3-4 6-4s6 1.5 6 4" />
    <path d="M14 14c2 0 6 1.5 6 4v2" />
  </svg>
);

export const Target = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const Sparkle = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M5.6 5.6 8.4 8.4M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
  </svg>
);

export const Clock = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const Refresh = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);

export const Lock = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="4" y="11" width="16" height="10" rx="1" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

export const CreditCard = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 10h18" />
  </svg>
);

export const Zap = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </svg>
);

