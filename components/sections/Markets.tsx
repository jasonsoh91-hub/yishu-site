import type { Content } from "@/content/types";
import { ACTIVE_LAND_PATH, LAND_PATH, MAP_VIEWBOX, PINS, REGIONS } from "@/lib/world-map";
import { CountUp } from "../ui/CountUp";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

// Label offset + anchor per side (map units).
const LABEL = {
  l: { dx: -8, dy: 4, anchor: "end" },
  r: { dx: 8, dy: 4, anchor: "start" },
  t: { dx: 0, dy: -10, anchor: "middle" },
  b: { dx: 0, dy: 16, anchor: "middle" },
} as const;

/** Curved arc from the HQ pin to a market, bowed upwards. */
function arc(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
  const lift = Math.hypot(b.x - a.x, b.y - a.y) * 0.28;
  return `M${a.x},${a.y} Q${mx},${my - lift} ${b.x},${b.y}`;
}

export function Markets({ c }: { c: Content }) {
  const m = c.trust.markets;
  const pinned = m.countries.filter((country) => PINS[country.code]);
  const hub = PINS[pinned.find((country) => country.hq)?.code ?? "CN"];
  return (
    <section id="markets" data-theme="dark" aria-labelledby="markets-title" className="relative overflow-hidden bg-forest-deep text-cream">
      <div aria-hidden className="pointer-events-none absolute inset-0"><div className="absolute top-1/2 left-1/2 h-[55%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[150px]" /></div>
      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-16 sm:px-8 sm:pb-0 md:pt-28">
        <Reveal className="max-w-2xl"><SectionHeading id="markets-title" title={<CountUp text={m.title} />} lead={m.lead} /></Reveal>
        <Reveal className="map-stage mt-12">
          <svg viewBox={MAP_VIEWBOX} className="hidden h-auto w-full sm:block" role="img" aria-label={m.title}>
            <defs>
              <radialGradient id="pin-glow"><stop offset="0%" stopColor="#e4cf9c" stopOpacity="0.5" /><stop offset="45%" stopColor="#c2a36b" stopOpacity="0.22" /><stop offset="100%" stopColor="#c2a36b" stopOpacity="0" /></radialGradient>
              <radialGradient id="region-halo"><stop offset="0%" stopColor="#f7f2e8" stopOpacity="0" /><stop offset="70%" stopColor="#f7f2e8" stopOpacity="0.03" /><stop offset="100%" stopColor="#e4cf9c" stopOpacity="0.12" /></radialGradient>
            </defs>
            <path d={LAND_PATH} fill="#f7f2e8" fillOpacity="0.05" stroke="#f7f2e8" strokeOpacity="0.09" strokeWidth="0.4" />
            <path d={ACTIVE_LAND_PATH} className="map-land" fill="#f7f2e8" fillOpacity="0.11" stroke="#e4cf9c" strokeOpacity="0.22" strokeWidth="0.4" />
            {REGIONS.map((r, i) => (
              <circle key={i} cx={r.x} cy={r.y} r={r.r} className="map-region" fill="url(#region-halo)" stroke="#e4cf9c" strokeOpacity="0.18" strokeWidth="0.6" style={{ transitionDelay: `${200 + i * 150}ms` }} />
            ))}
            {pinned.map((country, i) => {
              const pin = PINS[country.code];
              if (pin === hub) return null;
              const d = arc(hub, pin);
              return (
                <g key={country.code} aria-hidden>
                  <path d={d} pathLength={1} className="map-arc" fill="none" stroke="#e4cf9c" strokeOpacity="0.35" strokeWidth="0.7" style={{ transitionDelay: `${700 + i * 90}ms` }} />
                  <path d={d} pathLength={1} className="map-flow" fill="none" stroke="#e4cf9c" strokeWidth="1.2" strokeLinecap="round" style={{ animationDelay: `${(i % 6) * 0.5}s` }} />
                </g>
              );
            })}
            {pinned.map((country, i) => {
              const pin = PINS[country.code];
              const l = LABEL[pin.side];
              const hq = country.hq;
              const delay = `${500 + i * 110}ms`;
              return (
                <g key={country.code}>
                  <g className="map-pin" style={{ transitionDelay: delay }}>
                    <circle cx={pin.x} cy={pin.y} r={hq ? 26 : 18} fill="url(#pin-glow)" />
                    <circle cx={pin.x} cy={pin.y} r="2.8" fill="none" stroke="#e4cf9c" strokeWidth="0.8" className="map-ping" style={{ animationDelay: `${(i % 6) * 0.4}s` }} />
                    {hq ? <circle cx={pin.x} cy={pin.y} r="5.5" fill="none" stroke="#e4cf9c" strokeOpacity="0.7" strokeWidth="0.7" /> : null}
                    <circle cx={pin.x} cy={pin.y} r={hq ? 3.4 : 2.6} fill={hq ? "#f7f2e8" : "#e4cf9c"} />
                  </g>
                  <text
                    x={pin.x + l.dx}
                    y={pin.y + l.dy}
                    textAnchor={l.anchor}
                    className="map-label"
                    fill="#f7f2e8"
                    fillOpacity={hq ? 0.95 : 0.72}
                    fontSize={hq ? 12 : 10.5}
                    fontWeight={hq ? 600 : 400}
                    letterSpacing="0.02em"
                    style={{ transitionDelay: `${800 + i * 110}ms` }}
                  >
                    {country.name}
                  </text>
                </g>
              );
            })}
          </svg>
          <ul aria-label={c.ui.countriesListLabel} className="flex flex-wrap gap-x-5 gap-y-3 sm:sr-only">
            {m.countries.map((country) => <li key={country.code} className={`flex items-center gap-2 text-sm ${country.hq ? "font-semibold text-cream" : "text-cream/75"}`}><span aria-hidden className="h-1 w-1 rounded-full bg-gold" />{country.name}</li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
