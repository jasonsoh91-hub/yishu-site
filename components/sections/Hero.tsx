import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { Button } from "../ui/Button";
import { ShimmerWord } from "../ui/BrandWordmark";
import { Img } from "../ui/Img";
import { Reveal } from "../ui/Reveal";
import { HeroParallax } from "./HeroParallax";

// site.heroParticles is reserved for an optional WebGL particle layer (spec 3.1). Not built: flag stays false.

export function Hero({ c }: { c: Content }) {
  const h = c.hero;
  return (
    <section
      id="top"
      data-theme="dark"
      aria-label={h.wordmark}
      className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden bg-forest-deep px-5 pt-32 pb-24 text-center text-cream sm:px-8"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="hero-radial absolute inset-0" />
        <HeroParallax>
          <Img
            slot={site.images.hero}
            alt={h.imageAlt}
            sizes="100vw"
            priority
            className="object-cover opacity-65"
            tone="dark"
            variant="background"
          />
        </HeroParallax>
        <div className="hero-vignette absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-forest-deep/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[28rem] bg-gradient-to-t from-forest-deep via-forest-deep/55 to-transparent" />
      </div>

      <div className="relative flex w-full max-w-3xl flex-col items-center">
        <Reveal>
          <h1 className="font-display text-7xl leading-none italic sm:text-8xl md:text-9xl lg:text-[10rem]">
            <ShimmerWord text={h.wordmark} className="wordmark-shadow" />
          </h1>
          {h.eyebrow ? <p className="mt-5 text-xs font-medium tracking-[0.18em] text-gold-bright uppercase">{h.eyebrow}</p> : null}
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-pretty text-cream/80 sm:text-lg">
            {h.lead}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={h.ctaPrimary.href} className="w-full max-w-[17rem] sm:w-auto">
              {h.ctaPrimary.label}
            </Button>
            <Button href={h.ctaSecondary.href} variant="glass" className="w-full max-w-[17rem] sm:w-auto">
              {h.ctaSecondary.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
