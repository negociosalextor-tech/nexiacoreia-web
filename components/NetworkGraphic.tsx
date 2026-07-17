type NetworkGraphicProps = {
  className?: string;
  /** "full" = nodes spread across the whole viewBox (hero/banner use); "compact" = tighter cluster (card accent use) */
  variant?: "full" | "compact";
};

/**
 * Brand-palette network/nodes motif: geometric shapes only, no photography or
 * rendered text, built to sit on the site's dark navy background.
 */
export default function NetworkGraphic({
  className,
  variant = "full",
}: NetworkGraphicProps) {
  if (variant === "compact") {
    return (
      <svg
        viewBox="0 0 200 200"
        className={className}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#00CC99" strokeOpacity="0.35" strokeWidth="1.5" fill="none">
          <line x1="30" y1="40" x2="100" y2="90" />
          <line x1="100" y1="90" x2="170" y2="50" />
          <line x1="100" y1="90" x2="60" y2="160" />
          <line x1="100" y1="90" x2="150" y2="150" />
        </g>
        <g fill="#00CC99">
          <circle cx="30" cy="40" r="5" fillOpacity="0.6" />
          <circle cx="170" cy="50" r="4" fillOpacity="0.5" />
          <circle cx="60" cy="160" r="4" fillOpacity="0.5" />
          <circle cx="150" cy="150" r="5" fillOpacity="0.6" />
          <circle cx="100" cy="90" r="7" fillOpacity="0.9" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 480 480"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="ng-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00CC99" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00CC99" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="240" cy="240" r="220" fill="url(#ng-glow)" />

      <g stroke="#00CC99" strokeOpacity="0.3" strokeWidth="1.5" fill="none">
        <line x1="80" y1="110" x2="240" y2="240" />
        <line x1="240" y1="240" x2="400" y2="130" />
        <line x1="240" y1="240" x2="120" y2="360" />
        <line x1="240" y1="240" x2="370" y2="350" />
        <line x1="240" y1="240" x2="240" y2="70" />
        <line x1="80" y1="110" x2="120" y2="360" />
        <line x1="400" y1="130" x2="370" y2="350" />
      </g>

      <g stroke="#003366" strokeOpacity="0.6" strokeWidth="1" fill="none">
        <rect x="40" y="40" width="400" height="400" />
      </g>

      <g fill="#00CC99">
        <circle cx="80" cy="110" r="6" fillOpacity="0.6" />
        <circle cx="400" cy="130" r="7" fillOpacity="0.55" />
        <circle cx="120" cy="360" r="6" fillOpacity="0.5" />
        <circle cx="370" cy="350" r="7" fillOpacity="0.6" />
        <circle cx="240" cy="70" r="5" fillOpacity="0.5" />
        <circle cx="240" cy="240" r="11" fillOpacity="0.9" />
      </g>

      <g fill="#ffffff">
        <circle cx="240" cy="240" r="4" fillOpacity="0.9" />
      </g>
    </svg>
  );
}
