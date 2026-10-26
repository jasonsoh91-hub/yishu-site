import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { ShimmerWord } from "../ui/BrandWordmark";
import { GoldRule } from "../ui/GoldRule";
import { Img } from "../ui/Img";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Philosophy({ c }: { c: Content }) {
  const p = c.philosophy;
  return (
    <section
      id="philosophy"
      data-theme="dark"
      aria-labelledby="philosophy-title"
      className="relative bg-forest-deep pb-20 text-cream md:pb-28"
    >
      <Reveal className="mx-auto max-w-2xl px-5 py-16 text-center sm:px-8 md:py-20">
        <SectionHeading id="philosophy-title" eyebrow={p.eyebrow} title={p.title} lead={p.lead} align="center" />
      </Reveal>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <GoldRule orientation="v" className="absolute inset-y-0 left-1/2 hidden -translate-x-1/2 md:block" />
        {p.items.map((item, i) => {
          const flip = i % 2 === 1;
          return (
            <div key={item.zh} className="relative">
              {i > 0 ? <GoldRule /> : null}
              <Reveal className="grid items-stretch md:grid-cols-2">
                <div
                  className={`flex flex-col items-center justify-center px-6 py-10 text-center md:px-14 lg:px-24 ${
                    flip ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <p className="font-display text-[4.25rem] leading-none sm:text-[5.25rem] lg:text-[7rem]">
                    <ShimmerWord text={item.zh} lang="zh-Hans" />
                  </p>
                  <p className="mt-5 font-display text-2xl text-cream">{item.pinyin}</p>
                  <p className="mt-3 max-w-md text-cream/65">{item.text}</p>
                </div>
                <div className={`relative min-h-[13rem] md:min-h-[26rem] ${flip ? "md:order-1" : "md:order-2"}`}>
                  <div className="absolute inset-4 md:inset-10">
                    <Img
                      slot={site.images.zheng[i]}
                      alt={item.imageAlt}
                      sizes="(min-width: 768px) 40vw, 90vw"
                      className="object-contain"
                      tone="dark"
                      placeholderClassName="rounded-card"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
