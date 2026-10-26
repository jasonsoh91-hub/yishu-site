import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { Img } from "../ui/Img";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function People({ c }: { c: Content }) {
  const p = c.people;
  return (
    <section
      id="people"
      data-theme="dark"
      aria-labelledby="people-title"
      className="relative isolate overflow-hidden bg-ink py-20 text-cream md:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 -z-10 h-80 w-80 rounded-full bg-gold/8 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading id="people-title" eyebrow={p.eyebrow} title={p.title} lead={p.lead} />
        </Reveal>
        <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-28">
          {p.items.map((person, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal
                key={i}
                className={`grid items-center gap-8 text-center md:gap-x-[60px] md:text-left ${
                  flip ? "md:grid-cols-[1fr_20rem] lg:grid-cols-[1fr_22rem]" : "md:grid-cols-[20rem_1fr] lg:grid-cols-[22rem_1fr]"
                }`}
              >
                <div
                  className={`shimmer-border-gold relative mx-auto aspect-[3/4] w-full max-w-[18rem] overflow-hidden rounded-card bg-gradient-to-b from-white/[0.06] to-transparent md:max-w-none ${
                    flip ? "md:order-2" : ""
                  }`}
                >
                  <Img
                    slot={site.images.people[i]}
                    alt={person.name}
                    sizes="(min-width: 1024px) 22rem, (min-width: 768px) 20rem, 18rem"
                    className="object-contain object-bottom"
                    tone="dark"
                    placeholderClassName="rounded-card"
                  />
                </div>
                <div className={flip ? "md:order-1" : ""}>
                  <h3 className="font-display text-4xl leading-[1.05] sm:text-5xl">{person.name}</h3>
                  <p className="mt-3 text-xs font-medium tracking-[0.16em] text-gold-bright uppercase">{person.role}</p>
                  <p className="mx-auto mt-5 max-w-xl leading-relaxed text-cream/70 sm:text-lg md:mx-0">{person.bio}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
