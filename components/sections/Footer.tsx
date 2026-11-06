import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { BrandWordmark } from "../ui/BrandWordmark";
import { GoldRule } from "../ui/GoldRule";

export function Footer({ c }: { c: Content }) {
  const f = c.footer;
  const year = new Date().getFullYear();
  return (
    <footer id="footer" data-theme="dark" className="relative isolate overflow-hidden bg-ink pt-20 pb-10 text-cream md:pt-28">
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 -z-10 h-80 w-80 rounded-full bg-gold/8 blur-[120px]" />
      <span
        aria-hidden
        lang="zh-Hans"
        className="pointer-events-none absolute -right-4 -bottom-10 -z-10 font-display text-[9rem] leading-none text-cream/[0.035] select-none sm:text-[13rem]"
      >
        宜树
      </span>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <BrandWordmark text={c.hero.wordmark} className="text-5xl" />
            <p className="mt-5 max-w-sm leading-relaxed text-cream/75">{f.tagline}</p>
            <p className="mt-2 max-w-sm text-sm text-cream/55">
              {site.resellerName}. {f.resellerStatement}
            </p>
          </div>
          <nav aria-label={f.sectionsLabel}>
            <p className="text-[0.7rem] tracking-[0.22em] text-gold-deep uppercase">{f.sectionsLabel}</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-1">
              {c.nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="inline-flex min-h-11 items-center text-sm text-cream/65 transition-colors hover:text-gold-bright">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <GoldRule className="mt-12 md:mt-16" />
        <p className="mt-10 text-[0.7rem] tracking-[0.22em] text-gold-deep uppercase">{f.productInfoLabel}</p>
        <dl className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {f.productInfo.map((r) => (
            <div key={r.k}>
              <dt className="text-xs text-cream/45">{r.k}</dt>
              <dd className="mt-1 text-sm text-cream/80">{r.v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.resellerName}. {f.legal}
          </p>
          {site.privacyHref ? (
            <a href={site.privacyHref} className="inline-flex min-h-11 items-center hover:text-gold-bright">
              {f.privacy}
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
