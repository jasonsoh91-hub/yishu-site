import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { fill, formatMoney } from "@/lib/format";
import { Button } from "../ui/Button";
import { GoldRule } from "../ui/GoldRule";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { RichText } from "../ui/RichText";
import { SectionHeading } from "../ui/SectionHeading";
import { Steps } from "./Steps";

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="font-display text-3xl leading-tight text-cream sm:text-4xl">{children}</h3>;
}

export function Partner({ c }: { c: Content }) {
  const p = c.partner;
  const { masksPerSet, keepForSelf, pricePerSession } = site.maths;
  const total = (masksPerSet - keepForSelf) * pricePerSession;
  const money = (n: number) => formatMoney(n, site.currency);
  const levelMoney = (n: number) => formatMoney(n, site.levelsCurrency);

  return (
    <section
      id="partner"
      data-theme="dark"
      aria-labelledby="partner-title"
      className="relative isolate overflow-hidden bg-forest-deep py-20 text-cream md:py-28"
    >
      <div aria-hidden className="forest-corner absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* a. Intro */}
        <Reveal>
          <SectionHeading id="partner-title" eyebrow={p.eyebrow} title={p.title} />
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-cream/75">{p.lead}</p>
        </Reveal>

        {/* b. Income types */}
        <Reveal className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-0">
          {p.incomeTypes.map((t, i) => (
            <div key={t.title} className={`relative ${i === 0 ? "md:pr-16" : "md:pl-16"}`}>
              {i === 1 ? <GoldRule orientation="v" className="absolute inset-y-0 left-0 hidden md:block" /> : null}
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 text-gold-bright">
                <Icon name={t.icon} />
              </span>
              <h3 className="mt-5 font-display text-2xl">{t.title}</h3>
              <p className="mt-3 leading-relaxed text-cream/70">{t.text}</p>
            </div>
          ))}
        </Reveal>

        <GoldRule className="mt-16 md:mt-24" />

        {/* c. Income maths */}
        <Reveal className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-gold-bright uppercase">{p.maths.eyebrow}</p>
            <p className="mt-4 font-display text-6xl leading-[0.95] text-gold sm:text-7xl">
              {pricePerSession > 0 ? money(total) : `${site.currency.symbol} —`}
            </p>
            {pricePerSession > 0 ? null : <p className="mt-2 text-xs text-gold-bright/70">{p.maths.pricePending}</p>}
            <p className="mt-5 max-w-lg leading-relaxed text-cream/75">{p.maths.explanation}</p>
            <p className="mt-3 text-sm text-cream/55">
              {fill(p.maths.formula, {
                masks: masksPerSet,
                keep: keepForSelf,
                price: pricePerSession > 0 ? money(pricePerSession) : site.currency.symbol,
              })}
            </p>
            <p className="mt-6 max-w-lg border-l border-gold/40 pl-4 text-xs leading-relaxed text-cream/60">{p.disclaimer}</p>
          </div>
          <dl className="divide-y divide-gold/20 self-center border-y border-gold/20">
            {p.maths.rows.map((r) => (
              <div key={r.k} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-sm text-cream/65">{r.k}</dt>
                <dd className="font-display text-xl text-cream sm:text-2xl">{r.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* d. Levels */}
        <Reveal className="mt-20 md:mt-28">
          <H3>{p.levelsTitle}</H3>
          <ul className="mt-8 divide-y divide-white/8">
            {site.levels.map((l, i) => (
              <li
                key={l.code}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-3 py-4 sm:grid-cols-[3.5rem_10rem_1fr_3.5rem]"
              >
                <span className="font-display text-xl text-gold-bright">{l.code}</span>
                <span className="text-sm text-cream/60">
                  {fill(l.upTo ? p.levelUpTo : p.levelFrom, { amount: levelMoney(l.min) })}
                </span>
                <span aria-hidden className="col-span-3 order-last h-1.5 overflow-hidden rounded-full bg-white/8 sm:order-none sm:col-span-1">
                  <span
                    className="level-bar block h-full rounded-full bg-gradient-to-r from-gold-deep to-gold-bright"
                    style={{ ["--bar" as string]: `${l.bar}%`, transitionDelay: `${i * 80}ms` }}
                  />
                </span>
                <span className="text-right font-display text-xl text-cream">{l.pct}%</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-cream/45">{p.levelsNote}</p>
        </Reveal>

        {/* e. Bonuses */}
        <Reveal className="mt-20 md:mt-28">
          <H3>{p.bonusesTitle}</H3>
          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            {p.bonuses.map((b) => (
              <div key={b.label} className="flex flex-col-reverse">
                <dt className="mt-2 text-sm text-cream/60">{b.label}</dt>
                <dd className="font-display text-3xl text-gold sm:text-4xl">{b.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* f. How to start */}
        <Reveal className="mt-20 md:mt-28">
          <H3>{p.stepsTitle}</H3>
          <Steps steps={p.steps} stepLabel={c.ui.step} tone="dark" cols={3} className="mt-10" />
          <Button href={p.cta.href} className="mt-12 w-full max-w-[17rem] sm:w-auto">
            <RichText text={p.cta.label} />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
