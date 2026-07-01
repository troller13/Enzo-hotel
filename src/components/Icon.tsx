type IconProps = {
  name: string;
  className?: string;
};

export default function Icon({ name, className = "size-10" }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "pool":
      return (
        <svg {...common}>
          <path d="M2 17c1.5 1.2 3 1.2 4.5 0s3-1.2 4.5 0 3 1.2 4.5 0 3-1.2 4.5 0" />
          <path d="M2 21c1.5 1.2 3 1.2 4.5 0s3-1.2 4.5 0 3 1.2 4.5 0 3-1.2 4.5 0" />
          <circle cx="16" cy="5" r="2" />
          <path d="M5 13l4-7 3 4 2-2 3 5" />
        </svg>
      );
    case "wifi":
      return (
        <svg {...common}>
          <path d="M2 8.5a16 16 0 0 1 20 0" />
          <path d="M5.5 12.5a11 11 0 0 1 13 0" />
          <path d="M9 16.5a6 6 0 0 1 6 0" />
          <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "breakfast":
      return (
        <svg {...common}>
          <path d="M4 10h13a4 4 0 0 1 0 8H4z" />
          <path d="M17 10a3 3 0 0 1 0 6" />
          <path d="M6 3v3M9 3v3M12 3v3" />
        </svg>
      );
    case "gym":
      return (
        <svg {...common}>
          <path d="M3 9v6M21 9v6" />
          <path d="M6 7v10M18 7v10" />
          <path d="M6 12h12" />
        </svg>
      );
    case "game":
      return (
        <svg {...common}>
          <rect x="2" y="8" width="20" height="9" rx="4" />
          <path d="M7 10.5v4M5 12.5h4" />
          <circle cx="16" cy="11" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="18.5" cy="13.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "light":
      return (
        <svg {...common}>
          <path d="M9 18h6" />
          <path d="M10 21h4" />
          <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
        </svg>
      );
    case "laundry":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <circle cx="12" cy="13" r="4" />
          <path d="M8 6h.01M11 6h.01" />
        </svg>
      );
    case "parking":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 16V8h3.5a2.5 2.5 0 0 1 0 5H9" />
        </svg>
      );
    case "location":
      return (
        <svg {...common}>
          <path d="M12 21s-7-7.1-7-12a7 7 0 0 1 14 0c0 4.9-7 12-7 12z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
      );
    case "person":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c1.5-4 4.5-6 7-6s5.5 2 7 6" />
        </svg>
      );
    case "room":
      return (
        <svg {...common}>
          <path d="M3 21V9l9-6 9 6v12" />
          <path d="M9 21v-7h6v7" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...common}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      );
    case "play":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M8 5v14l11-7z" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 2l2.9 6.4 7 .7-5.3 4.7 1.6 6.9L12 17l-6.2 3.7 1.6-6.9-5.3-4.7 7-.7L12 2z" />
        </svg>
      );
    case "quote":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M9 7C5.7 7 3 9.7 3 13s2.7 6 6 6h.5c.3 0 .5-.2.5-.5v-2c0-.3-.2-.5-.5-.5H9c-1.7 0-3-1.3-3-3s1.3-3 3-3h1c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1H9zm10 0c-3.3 0-6 2.7-6 6s2.7 6 6 6h.5c.3 0 .5-.2.5-.5v-2c0-.3-.2-.5-.5-.5H19c-1.7 0-3-1.3-3-3s1.3-3 3-3h1c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1h-1z" />
        </svg>
      );
    case "transfer":
      return (
        <svg {...common}>
          <path d="M3 13l1.5-5A2 2 0 0 1 6.4 6.5h11.2A2 2 0 0 1 19.5 8l1.5 5" />
          <rect x="2" y="13" width="20" height="5" rx="1.5" />
          <circle cx="7" cy="18.5" r="1.5" />
          <circle cx="17" cy="18.5" r="1.5" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
      );
    case "family":
      return (
        <svg {...common}>
          <circle cx="8" cy="7" r="2.3" />
          <circle cx="16" cy="7" r="2.3" />
          <circle cx="12" cy="18" r="1.6" />
          <path d="M4 19c.5-3 2-4.7 4-4.7s3.5 1.7 4 4.7" />
          <path d="M12 19c.4-2.4 1.7-3.8 3-3.8s2.6 1.4 3 3.8" />
        </svg>
      );
    case "sauna":
      return (
        <svg {...common}>
          <path d="M4 21h16" />
          <path d="M5 21V9h14v12" />
          <path d="M9 9c0-2 1.5-3 1.5-5S9 1 9 1" />
          <path d="M14 9c0-2 1.5-3 1.5-5S14 1 14 1" />
        </svg>
      );
    case "bar":
      return (
        <svg {...common}>
          <path d="M5 4h14l-6 8v8M9 12L3 4" />
          <path d="M9 20h6" />
        </svg>
      );
    case "ac":
      return (
        <svg {...common}>
          <rect x="2" y="6" width="20" height="6" rx="2" />
          <path d="M6 16v2M10 16v3M14 16v2M18 16v3" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M5 13l4 4L19 7" />
        </svg>
      );
    case "cash":
      return (
        <svg {...common}>
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="12" cy="12" r="3" />
          <path d="M6 9v.01M18 15v.01" />
        </svg>
      );
    case "no-pets":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M7 7l10 10" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M14 8.5h2.5V5h-2.5C12 5 10.5 6.6 10.5 9v2H8.5v3h2v6h3v-6h2.2l.5-3h-2.7V9c0-.4.3-.5.5-.5z" />
        </svg>
      );
    case "twitter":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M22 6.3c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.6-2.2-.7.5-1.6.8-2.5 1A4 4 0 0 0 12 9.2c0 .3 0 .6.1.9-3.3-.2-6.2-1.7-8.2-4.2-.3.6-.5 1.2-.5 2 0 1.3.7 2.5 1.7 3.2-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.3 3.4 3.1 3.8-.3.1-.7.1-1 .1-.3 0-.5 0-.7-.1.5 1.5 1.9 2.6 3.6 2.7A8 8 0 0 1 2 19.4 11.3 11.3 0 0 0 8.1 21c7.3 0 11.3-6.1 11.3-11.3v-.5c.8-.6 1.4-1.3 1.9-2.2-.7.3-1.5.6-2.3.7z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M4.5 3A1.5 1.5 0 1 0 4.5 6 1.5 1.5 0 0 0 4.5 3zM3 8h3v13H3zM9 8h2.8v1.8h.1c.4-.7 1.4-1.8 3-1.8 3.2 0 3.8 2 3.8 4.7V21h-3v-6.6c0-1.6 0-3.6-2.2-3.6-2.2 0-2.5 1.7-2.5 3.5V21H9z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    default:
      return null;
  }
}
