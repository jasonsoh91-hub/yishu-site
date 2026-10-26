import { Icon } from "../ui/Icon";

/** Numbered steps with a connector line behind the icons (desktop) / icon-left rows (mobile). */
export function Steps({
  steps,
  stepLabel,
  tone = "light",
  cols = 4,
  className = "",
}: {
  steps: { icon?: string; title: string; text: string }[];
  stepLabel: string;
  tone?: "light" | "dark";
  cols?: 3 | 4;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={`relative ${className}`}>
    <div aria-hidden className="absolute inset-x-0 top-6 hidden h-px bg-gold/30 md:block" />
    <ol className={`relative grid gap-x-6 gap-y-8 ${cols === 4 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-4 md:block">
          <span
            className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/50 ${
              dark ? "bg-forest-deep text-gold-bright" : "bg-cream-soft text-gold-deep"
            }`}
          >
            {s.icon ? <Icon name={s.icon} /> : <span className="font-display text-lg">{i + 1}</span>}
          </span>
          <div className="md:mt-6">
            <p className={`text-xs font-medium tracking-[0.18em] uppercase ${dark ? "text-gold-bright" : "text-gold-text"}`}>
              {stepLabel.replace("{n}", String(i + 1))}
            </p>
            <h3 className={`mt-2 font-display text-xl leading-tight lg:text-2xl ${dark ? "text-cream" : "text-ink"}`}>{s.title}</h3>
            <p className={`mt-2 text-sm leading-relaxed sm:text-base ${dark ? "text-cream/70" : "text-ink/65"}`}>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
    </div>
  );
}
