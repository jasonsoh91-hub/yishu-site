import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { imageExists } from "@/lib/images";
import { Img } from "../ui/Img";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const logoSlot = { ce: site.images.logoCe, fcc: site.images.logoFcc };

export function Trust({ c }: { c: Content }) {
  const t = c.trust;
  return (
    <section id="trust" data-theme="dark" aria-labelledby="trust-title" className="relative overflow-hidden bg-forest-deep text-cream">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3">
        <Img slot={site.images.cosmos} alt="" sizes="100vw" className="mask-fade-up object-cover object-bottom opacity-90 mix-blend-screen" tone="dark" variant="background" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-28 sm:px-8 md:pt-28 md:pb-40">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <Reveal><SectionHeading id="trust-title" title={t.title} /></Reveal>
          <Reveal delay={100}>
            <dl className="divide-y divide-white/12">
              {t.standards.map((s, i) => {
                const logo = s.logo ? logoSlot[s.logo] : null;
                const showLogo = logo && imageExists(logo.src);
                return (
                  <div key={s.name} className={`flex items-center justify-between gap-6 py-5 ${i === 0 ? "lg:pt-0" : ""}`}>
                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                      <dt className="font-display text-2xl leading-tight text-cream sm:text-3xl">{s.name}</dt>
                      {showLogo ? (
                        <span aria-hidden className="mask-logo h-5 shrink-0 text-cream sm:h-6" style={{ ["--logo" as string]: `url(${logo.src})`, aspectRatio: s.logo === "ce" ? "280 / 200" : "720 / 406" }} />
                      ) : null}
                    </div>
                    <dd className="shrink-0 text-right text-sm text-cream/60 sm:text-base">{s.note}</dd>
                  </div>
                );
              })}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
