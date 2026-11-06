import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { Button } from "../ui/Button";
import { Img } from "../ui/Img";
import { imageExists } from "@/lib/images";
import { Reveal } from "../ui/Reveal";

export function Consultant({ c }: { c: Content }) {
  const k = c.consultant;
  // Portrait column only renders once the photo is in public/; until then the text centres.
  const hasPhoto = imageExists(site.images.consultant.src);
  return (
    <section
      id="expert"
      data-theme="dark"
      aria-labelledby="consultant-title"
      className="relative isolate overflow-hidden bg-ink pt-20 text-cream md:pt-28"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <Img slot={site.images.consultantBg} alt="" sizes="100vw" className="object-cover" tone="dark" variant="background" />
        <div className="absolute inset-0 bg-ink/30" />
      </div>
      <div className={`mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:justify-center lg:gap-x-16 ${hasPhoto ? "lg:grid-cols-[minmax(0,40rem)_28rem]" : "lg:grid-cols-[minmax(0,44rem)]"}`}>
        <Reveal className={`text-center ${hasPhoto ? "pb-0 lg:pb-28 lg:text-left" : "pb-20 md:pb-28"}`}>
          <p className="text-xs font-medium tracking-[0.18em] text-gold-bright uppercase">{k.eyebrow}</p>
          <h2 id="consultant-title" className="mt-4 font-display text-4xl leading-[1.08] text-balance sm:text-5xl md:text-[3.5rem]">
            {k.name}
          </h2>
          <p className="mt-3 text-xs font-medium tracking-[0.16em] text-gold-bright/80 uppercase">{k.role}</p>
          <div className={`mx-auto mt-6 max-w-xl space-y-4 leading-relaxed text-cream/75 sm:text-lg ${hasPhoto ? "lg:mx-0" : ""}`}>
            {k.paragraphs.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <div className={`mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center ${hasPhoto ? "lg:justify-start" : ""}`}>
            <Button href={k.cta.href} className="w-full max-w-[17rem] sm:w-auto">
              {k.cta.label}
            </Button>
          </div>
        </Reveal>
        {hasPhoto && (
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
        )}
      </div>
    </section>
  );
}
