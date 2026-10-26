import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { Img } from "../ui/Img";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Ingredients({ c }: { c: Content }) {
  const g = c.ingredients;
  return (
    <section
      id="ingredients"
      data-theme="light"
      aria-labelledby="ingredients-title"
      className="bg-cream-soft pt-4 pb-20 text-ink md:pb-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading id="ingredients-title" eyebrow={g.eyebrow} title={g.title} lead={g.lead} align="center" tone="light" />
        </Reveal>
        <Reveal delay={100} className="mt-12 md:mt-16">
          <ul className="no-scrollbar -mx-5 flex snap-x snap-proximity overflow-x-auto border-t border-gold/40 px-5 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible">
            {g.items.map((it) => (
              <li
                key={it.id}
                tabIndex={0}
                aria-label={`${it.name}. ${it.text}`}
                className="group relative aspect-square w-[72vw] max-w-[20rem] shrink-0 snap-start overflow-hidden p-4 outline-offset-[-3px] sm:w-[19rem] sm:p-5 md:p-6 lg:w-auto lg:max-w-none"
              >
                <div aria-hidden className="absolute inset-0 opacity-60 transition-transform duration-500 group-hover:scale-105">
                  <Img slot={site.images.ingredient[it.id]} alt="" sizes="(min-width: 1024px) 20vw, 72vw" className="object-cover" />
                </div>
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-cream-soft via-cream-soft/70 to-transparent" />
                <div aria-hidden className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-gold/45 to-transparent" />

                <div aria-hidden className="relative flex h-full flex-col justify-between">
                  <div className="relative h-20 w-20 lg:h-32 lg:w-32">
                    <Img slot={site.images.ingredientIcon[it.id]} alt="" sizes="128px" className="object-contain" variant="icon" placeholderClassName="h-full w-full" />
                  </div>
                  <div>
                    <p className="text-sm text-ink/45 italic">{it.latin}</p>
                    <h3 className="mt-1 font-display text-xl leading-tight lg:text-2xl">{it.name}</h3>
                  </div>
                </div>

                <div
                  aria-hidden
                  className="absolute inset-0 flex flex-col justify-end bg-cream-soft/55 p-4 opacity-0 ring-1 ring-white/40 backdrop-blur-md backdrop-saturate-150 transition-opacity duration-300 ring-inset group-focus-within:opacity-100 group-hover:opacity-100 sm:p-5 md:p-6"
                >
                  <p className="font-display text-xl leading-tight text-gold-text lg:text-2xl">{it.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{it.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
