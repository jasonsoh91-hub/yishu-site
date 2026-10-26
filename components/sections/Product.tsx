import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { Button } from "../ui/Button";
import { Img } from "../ui/Img";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { ProductHotspots } from "./ProductHotspots";

export function Product({ c }: { c: Content }) {
  const p = c.product;
  const spots = p.hotspots.map((h) => ({ ...h, ...(site.hotspotPositions[h.id] ?? { x: "50%", y: "50%" }) }));
  return (
    <section
      id="product"
      data-theme="light"
      aria-labelledby="product-title"
      className="relative isolate overflow-hidden bg-cream-soft py-16 text-ink sm:py-24 md:py-32"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <Img slot={site.images.productBg} alt="" sizes="100vw" className="object-cover" variant="background" />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="lg:col-start-1 lg:row-start-1">
          <SectionHeading
            id="product-title"
            eyebrow={p.eyebrow}
            title={p.title}
            lead={p.lead}
            tone="light"
            titleClassName="lg:text-6xl leading-[1.04]"
          />
        </Reveal>
        <Reveal delay={100} className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <ProductHotspots spots={spots}>
            <Img
              slot={site.images.productMask}
              alt={p.imageAlt}
              sizes="(min-width: 1024px) 40vw, 92vw"
              className="object-cover"
            />
          </ProductHotspots>
        </Reveal>
        <Reveal delay={120} className="lg:col-start-1 lg:row-start-2">
          <dl>
            {p.specs.map((s, i) => (
              <div key={s.k} className={`flex items-baseline justify-between gap-6 py-4 ${i > 0 ? "rule-top" : ""}`}>
                <dt className="text-xs font-medium tracking-[0.18em] text-gold-text uppercase">{s.k}</dt>
                <dd className="text-right font-display text-base sm:text-lg">{s.v}</dd>
              </div>
            ))}
          </dl>
          <Button href={p.cta.href} className="mt-8 w-full max-w-[17rem] sm:w-auto">
            {p.cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
