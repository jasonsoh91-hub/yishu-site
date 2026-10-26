import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { Img } from "../ui/Img";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Compare({ c }: { c: Content }) {
  const t = c.compare;
  return (
    <section
      id="compare"
      data-theme="light"
      aria-labelledby="compare-title"
      className="relative isolate overflow-hidden bg-cream py-20 text-ink md:py-28"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-50">
          <Img slot={site.images.compareBg} alt="" sizes="100vw" className="object-cover" variant="background" />
        </div>
        <div className="absolute inset-0 bg-cream/35" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading id="compare-title" eyebrow={t.eyebrow} title={t.title} tone="light" />
          <p className="mt-4 max-w-2xl text-sm text-ink/55">{t.note}</p>
        </Reveal>

        {/* Desktop: ARIA table */}
        <Reveal delay={100} className="mt-12 hidden md:block">
          <div role="table" aria-labelledby="compare-title" className="relative">
            {/* Gold rules framing the Yishu column (column 2 of 22% + 4×1fr). */}
            <div aria-hidden className="pointer-events-none absolute inset-y-0 left-[22%] w-[19.5%] bg-gold/5" />
            <div aria-hidden className="rule-gold-v pointer-events-none absolute inset-y-0 left-[22%]" />
            <div aria-hidden className="rule-gold-v pointer-events-none absolute inset-y-0 left-[41.5%]" />
            <div role="row" className="grid grid-cols-[22%_repeat(4,minmax(0,1fr))]">
              <span role="columnheader" className="px-5 py-4" />
              {t.columns.map((col, i) => (
                <span
                  key={col}
                  role="columnheader"
                  className={`px-5 py-4 font-display text-lg leading-tight ${i === 0 ? "text-ink" : "text-ink/60"}`}
                >
                  {col}
                </span>
              ))}
            </div>
            {t.rows.map((r) => (
              <div key={r.k} role="row" className="rule-top grid grid-cols-[22%_repeat(4,minmax(0,1fr))]">
                <span role="rowheader" className="px-5 py-4 text-xs font-medium tracking-[0.14em] text-gold-text uppercase">
                  {r.k}
                </span>
                {r.v.map((v, i) => (
                  <span key={i} role="cell" className={`px-5 py-4 text-sm ${i === 0 ? "font-medium text-ink" : "text-ink/60"}`}>
                    {v}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile: one block per criterion */}
        <Reveal delay={100} className="mt-10 md:hidden">
          <div className="divide-y divide-gold/25 border-y border-gold/25">
            {t.rows.map((r) => (
              <div key={r.k} className="py-5">
                <h3 className="font-display text-xl">{r.k}</h3>
                <dl className="mt-3 space-y-2">
                  {r.v.map((v, i) => (
                    <div key={i} className="flex justify-between gap-4 text-sm">
                      <dt className={i === 0 ? "text-gold-text" : "text-ink/55"}>{t.columns[i]}</dt>
                      <dd className={`text-right ${i === 0 ? "font-medium text-ink" : "text-ink/65"}`}>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
