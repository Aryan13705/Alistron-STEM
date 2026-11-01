type Tone = "light" | "dark";

/* Brand submark: the Alistron "A" with its orbit ring. `tone` is the background it sits on. */
export function LogoMark({ tone = "light", size = 36 }: { tone?: Tone; size?: number }) {
  const id = `alistron-mark-${tone}`;
  const leftFace = tone === "light" ? ["#1B3A7A", "#0A1A3F"] : ["#F3F7FC", "#9DB0C7"];

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-l`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={leftFace[0]} />
          <stop offset="1" stopColor={leftFace[1]} />
        </linearGradient>
        <linearGradient id={`${id}-r`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2F8BFF" />
          <stop offset="1" stopColor="#0050C8" />
        </linearGradient>
        <linearGradient id={`${id}-o`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#38BDF8" stopOpacity="0.35" />
          <stop offset="0.55" stopColor="#2F8BFF" />
          <stop offset="1" stopColor="#0068E3" />
        </linearGradient>
      </defs>
      <path d="M61 40A29 9 0 0 0 3 40" transform="rotate(-14 32 40)" fill="none" stroke={`url(#${id}-o)`} strokeWidth="2.4" opacity="0.7" />
      <path d="M32 7 6 54h11l15-27z" fill={`url(#${id}-l)`} />
      <path d="M32 7v20l15 27h11z" fill={`url(#${id}-r)`} />
      <path d="M32 40.5 25.5 54h13z" fill="#0068E3" />
      <path d="M3 40A29 9 0 0 0 61 40" transform="rotate(-14 32 40)" fill="none" stroke={`url(#${id}-o)`} strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

/* Mark + wordmark lockup. */
export default function Logo({ tone = "light", tagline = false }: { tone?: Tone; tagline?: boolean }) {
  return (
    <span className={`logo logo-${tone}`}>
      <LogoMark tone={tone} />
      <span className="logo-text">
        <span className="logo-wordmark">ALISTRON</span>
        {tagline && <span className="logo-tagline">Engineering Human Potential</span>}
      </span>
    </span>
  );
}
