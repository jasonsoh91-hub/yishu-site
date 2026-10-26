import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { Img } from "../ui/Img";
import { Reveal } from "../ui/Reveal";

export function Consultant({ c }: { c: Content }) {
  const k = c.consultant;
  return (
    <section
      id="consultant"
      data-theme="dark"
      aria-labelledby="consultant-title"
      className="relative isolate overflow-hidden bg-ink pt-20 text-cream md:pt-28"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <Img slot={site.images.consultantBg} alt="" sizes="100vw" className="object-cover" tone="dark" variant="background" />
        <div className="absolute inset-0 bg-ink/30" />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,40rem)_28rem] lg:justify-center lg:gap-x-16">
        <Reveal className="pb-0 text-center lg:pb-28 lg:text-left">
          <p className="text-xs font-medium tracking-[0.18em] text-gold-bright uppercase">{k.eyebrow}</p>
          <h2 id="consultant-title" className="mt-4 font-display text-4xl leading-[1.08] text-balance sm:text-5xl md:text-[3.5rem]">
            {k.name}
          </h2>
          <p className="mt-3 text-xs font-medium tracking-[0.16em] text-gold-bright/80 uppercase">{k.role}</p>
          <div className="mx-auto mt-6 max-w-xl space-y-4 leading-relaxed text-cream/75 sm:text-lg lg:mx-0">
            {k.paragraphs.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button href={k.cta.href} className="w-full max-w-[17rem] sm:w-auto">
              {k.cta.label}
            </Button>
            <div className="flex gap-2 text-cream">
              <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="glass-chip h-11 gap-2 rounded-full px-4 text-sm">
                <Icon name="whatsapp" className="h-4 w-4" />
                {k.whatsappLabel}
              </a>
              <a href={site.contact.phoneHref} className="glass-chip h-11 gap-2 rounded-full px-4 text-sm">
                <Icon name="phone" className="h-4 w-4" />
                {k.callLabel}
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100} className="relative mx-auto w-full max-w-sm lg:max-w-none lg:self-end">
          <div aria-hidden className="absolute inset-x-[10%] top-[18%] h-2/3 rounded-[50%] bg-gold/15 blur-3xl" />
          <div className="relative aspect-[1536/2010] overflow-hidden rounded-t-card">
            <Img
              slot={site.images.consultant}
              alt={k.imageAlt}
              sizes="(min-width: 1024px) 28rem, 24rem"
              className="object-contain object-bottom"
              tone="dark"
              placeholderClassName="rounded-t-card border-b-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
