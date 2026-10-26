import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { imageExists } from "@/lib/images";
import { ACTIVE_LAND_PATH, LAND_PATH, MAP_VIEWBOX, PINS } from "@/lib/world-map";
import { Img } from "../ui/Img";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const logoSlot = { ce: site.images.logoCe, fcc: site.images.logoFcc };

function MarketMap({ c, label }: { c: Content["trust"]["markets"]; label: string }) {
  return (
    <>
      <svg
        viewBox={MAP_VIEWBOX}
        aria-hidden
        className="hidden h-auto w-full sm:block"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="pin-glow">
            <stop offset="0%" stopColor="#e4cf9c" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#c2a36b" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path d={LAND_PATH} fill="rgb(247 242 232 / 0.05)" stroke="rgb(247 242 232 / 0.09)" strokeWidth="0.4" />
        <path d={ACTIVE_LAND_PATH} fill="rgb(247 242 232 / 0.11)" stroke="rgb(228 207 156 / 0.22)" strokeWidth="0.4" />
        {c.countries.map((m, i) => {
          const p = PINS[m.code];
          if (!p) return null;
          return (
            <g key={m.code}>
              <circle cx={p.x} cy={p.y} r="20" fill="url(#pin-glow)" />
              <circle
                cx={p.x}
                cy={p.y}
                r="2.8"
                fill="none"
                stroke="#e4cf9c"
                strokeWidth="0.8"
                className="map-ping"
                style={{ animationDelay: `${(i % 6) * 0.4}s` }}
              />
              <circle cx={p.x} cy={p.y} r="2.8" fill="#e4cf9c" />
            </g>
          );
        })}
      </svg>
      <ul aria-label={label} className="flex flex-wrap gap-x-5 gap-y-3 sm:sr-only">
        {c.countries.map((m) => (
          <li key={m.code} className="flex items-center gap-2 text-sm text-cream/75">
            <span aria-hidden className="h-1 w-1 rounded-full bg-gold" />
            {m.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export function Trust({ c }: { c: Content }) {
  const t = c.trust;
  return (
    <section
      id="trust"
      data-theme="dark"
      aria-labelledby="trust-title"
      className="relative isolate overflow-hidden bg-forest-deep py-20 text-cream md:py-28"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[55%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[150px]" />
        <div className="mask-fade-up absolute inset-x-0 bottom-0 h-2/3 opacity-90 mix-blend-screen">
          <Img slot={site.images.cosmos} alt="" sizes="100vw" className="object-cover" tone="dark" variant="background" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <SectionHeading id="trust-title" eyebrow={t.eyebrow} title={t.title} />
          </Reveal>
          <Reveal delay={100}>
            <dl className="divide-y divide-white/12 border-y border-white/12">
              {t.standards.map((s) => {
                const logo = s.logo ? logoSlot[s.logo] : null;
                const showLogo = logo && imageExists(logo.src);
                return (
                  <div key={s.name} className="flex items-center justify-between gap-6 py-5">
                    <dt className="flex items-center gap-3 font-display text-2xl sm:text-3xl">
                      {s.name}
                      {showLogo ? (
                        <span
                          aria-hidden
                          className="mask-logo h-5 w-8 text-gold-bright sm:h-6 sm:w-10"
                          style={{ ["--logo" as string]: `url(${logo.src})` }}
                        />
                      ) : null}
                    </dt>
                    <dd className="text-right text-sm text-cream/60 sm:text-base">{s.note}</dd>
                  </div>
                );
              })}
            </dl>
          </Reveal>
        </div>

        <Reveal>
          <dl className="mt-16 grid grid-cols-2 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4">
            {t.stats.map((s, i) => (
              <div key={s.label} className={`px-1 sm:px-6 ${i > 0 ? "sm:border-l sm:border-white/10" : ""}`}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-4xl text-gold sm:text-5xl">{s.value}</span>
                  <span aria-hidden className="mt-2 block text-sm text-cream/70">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-20 md:mt-28">
          <Reveal>
            <SectionHeading as="h3" title={t.markets.title} lead={t.markets.lead} align="center" />
          </Reveal>
          <Reveal delay={100} className="mt-10 md:mt-14">
            <MarketMap c={t.markets} label={c.ui.countriesListLabel} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
