import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { Img } from "../ui/Img";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Catalog({ c }: { c: Content }) {
  const k = c.catalog;
  return (
    <section id="catalog" data-theme="light" aria-labelledby="catalog-title" className="bg-cream-soft py-20 text-ink md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading id="catalog-title" eyebrow={k.eyebrow} title={k.title} lead={k.lead} tone="light" />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {k.items.map((it, i) => (
            <Reveal key={it.id} delay={i * 80} className="h-full">
              <article className="shimmer-border-gold flex h-full flex-col overflow-hidden rounded-card bg-cream-soft">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Img slot={site.images.bundle[it.id]} alt="" sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 92vw" className="object-cover" />
                  <div aria-hidden className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-cream-soft via-cream-soft/70 to-transparent" />
                  <h3 className="absolute inset-x-4 bottom-3 line-clamp-2 font-display text-lg leading-tight">{it.name}</h3>
                </div>
                <div className="flex flex-1 flex-col border-t border-gold/25 p-4">
                  <p className="text-sm leading-relaxed text-ink/65">{it.text}</p>
                  <ul className="mt-3 space-y-1.5">
                    {it.contents.map((x) => (
                      <li key={x} className="flex items-start gap-2 text-xs text-ink/70">
                        <span aria-hidden className="mt-[0.4rem] h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
