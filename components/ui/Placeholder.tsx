/**
 * Image slot placeholder. Shows the slot filename + brief so the owner knows exactly
 * what to drop into public/images/. `variant="background"` is for full-bleed backgrounds:
 * it stays quiet and only shows a small filename tag in the corner.
 */
export function Placeholder({
  src,
  brief,
  tone = "light",
  variant = "box",
  className = "",
  label,
}: {
  src: string;
  brief?: string;
  tone?: "light" | "dark";
  variant?: "box" | "background" | "icon";
  className?: string;
  label?: string;
}) {
  const file = src.replace(/^\/images\//, "");
  const dark = tone === "dark";

  if (variant === "background") {
    return (
      <div aria-hidden className={`absolute inset-0 ${className}`}>
        <div className="placeholder-stripes absolute inset-0 opacity-40" />
        <span
          className={`absolute bottom-3 right-3 rounded-full px-2.5 py-1 font-mono text-[0.65rem] ${
            dark ? "bg-white/5 text-cream/40" : "bg-ink/5 text-ink/40"
          }`}
        >
          {file}
        </span>
      </div>
    );
  }

  if (variant === "icon") {
    return (
      <div
        aria-hidden
        className={`placeholder-stripes flex items-center justify-center rounded-full border hairline ${className}`}
      >
        <span className={`font-mono text-[0.6rem] ${dark ? "text-cream/40" : "text-ink/40"}`}>icon</span>
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label ?? file}
      className={`placeholder-stripes absolute inset-0 flex flex-col items-center justify-center gap-1.5 border p-4 text-center hairline ${className}`}
    >
      <span className={`font-mono text-xs ${dark ? "text-gold-bright/80" : "text-gold-text"}`}>{file}</span>
      {brief ? (
        <span className={`max-w-[18rem] text-[0.7rem] leading-snug ${dark ? "text-cream/45" : "text-ink/45"}`}>
          {brief}
        </span>
      ) : null}
    </div>
  );
}
