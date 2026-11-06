import Image from "next/image";
import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Results({ c }: { c: Content }) {
  const t = c.results;
  const photos = site.images.results.map((p, i) => ({ ...p, caption: t.items[i]?.caption ?? "" }));
  return (
    <section
      id="results"
      data-theme="dark"
      aria-labelledby="results-title"
      className="relative isolate overflow-hidden bg-forest-deep py-20 text-cream md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading id="results-title" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
        </Reveal>
        <Reveal delay={100} className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {photos.map((p) => (
            <figure key={p.src} className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-gold/20 bg-cream/5">
              <a href={p.src} target="_blank" rel="noopener" className="block">
                <Image
                  src={p.src}
                  alt={p.caption}
                  width={p.w}
                  height={p.h}
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full"
                />
              </a>
              <figcaption className="px-4 py-3 text-sm text-cream/70">{p.caption}</figcaption>
            </figure>
          ))}
        </Reveal>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-cream/50">{t.disclaimer}</p>
      </div>
    </section>
  );
}
