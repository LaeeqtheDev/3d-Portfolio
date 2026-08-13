/* Inline SVGs: no extra network requests, and they inherit currentColor. */

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export const ArrowUpRight = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export const CodeIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="m9 18-6-6 6-6M15 6l6 6-6 6" />
  </svg>
);

export const DownloadIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" />
  </svg>
);

export const MenuIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const MailIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

export const LockIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

/* ---------------- Section & category icons ---------------- */

export const LanguagesIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="m8 17-5-5 5-5M16 7l5 5-5 5M13.5 4l-3 16" />
  </svg>
);

export const LayoutIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M9 9v11" />
  </svg>
);

export const ServerIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="3" y="4" width="18" height="7" rx="2" />
    <rect x="3" y="13" width="18" height="7" rx="2" />
    <path d="M7 7.5h.01M7 16.5h.01" />
  </svg>
);

export const DatabaseIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  </svg>
);

export const ShieldIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 3l7 3v5.5c0 4.4-2.9 8.3-7 9.5-4.1-1.2-7-5.1-7-9.5V6z" />
    <path d="m9.5 12 1.8 1.8L15 10" />
  </svg>
);

export const SparkIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 3.5 13.8 9l5.5 1.8-5.5 1.8L12 18l-1.8-5.4L4.7 10.8 10.2 9z" />
    <path d="M18.5 4.5v3M20 6h-3" />
  </svg>
);

export const BeakerIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M9 3v6.5L4.6 17A2 2 0 0 0 6.3 20h11.4a2 2 0 0 0 1.7-3L15 9.5V3" />
    <path d="M8 3h8M6.8 14.5h10.4" />
  </svg>
);

export const CapIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 4 2 9l10 5 10-5z" />
    <path d="M6 11.5V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4.5" />
  </svg>
);

export const AwardIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="m8.5 13.5-1.3 7L12 18l4.8 2.5-1.3-7" />
  </svg>
);

export const ChartIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 20h16M7 20v-6M12 20V8M17 20v-9" />
  </svg>
);

export const BriefcaseIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12h18" />
  </svg>
);

export const LayersIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="m12 3 9 5-9 5-9-5z" />
    <path d="m3 13 9 5 9-5" />
  </svg>
);

export const CompassIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5z" />
  </svg>
);

export const PinIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const PhoneIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3z" />
  </svg>
);

export const SendIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M21 3 10.5 13.5M21 3l-6.5 18-4-8-8-4z" />
  </svg>
);
