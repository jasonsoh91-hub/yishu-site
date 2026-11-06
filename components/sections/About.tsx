import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { Img } from "../ui/Img";
import { Reveal } from "../ui/Reveal";
import { RichText } from "../ui/RichText";

export function About({ c }: { c: Content }) {
  const t = c.trust;
  return (
    <section id="about" data-theme="dark" aria-labelledby="about-title" className="relative overflow-hidden bg-ink text-cream">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Img slot={site.images.aboutBg} alt="" sizes="100vw" className="object-cover object-center opacity-60" tone="dark" variant="background" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/45 to-ink" />
        <div className="absolute inset-0 bg-ink/30" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <h2 id="about-title" className="font-display text-4xl leading-[1.08] text-balance text-gold sm:text-5xl md:text-[3.5rem]"><RichText text={t.about.title} /></h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 text-base leading-relaxed text-pretty text-cream/75 sm:text-lg">
              {t.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <dl className="mt-16 grid grid-cols-2 gap-y-10 border-t border-white/10 pt-10 sm:grid-cols-4">
            {t.stats.map((stat, i) => (
              <div key={stat.label} className={`px-1 sm:px-6 ${i ? "sm:border-l sm:border-white/10" : ""}`}>
                <dt className="font-display text-4xl text-gold sm:text-5xl">{stat.value}</dt>
                <dd className="mt-3 text-sm text-cream/70">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
