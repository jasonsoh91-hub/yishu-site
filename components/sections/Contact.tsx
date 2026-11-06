import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { Icon, SocialIcon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { LeadForm } from "./LeadForm";

export function Contact({ c }: { c: Content }) {
  const k = c.contact;
  const rows = [
    { icon: "phone", label: k.phoneLabel, value: site.contact.phone, href: site.contact.phoneHref },
    { icon: "whatsapp", label: k.whatsappLabel, value: site.contact.phone, href: site.contact.whatsapp, external: true },
    { icon: "mail", label: k.emailLabel, value: site.contact.email, href: `mailto:${site.contact.email}` },
  ].filter((row) => row.value && row.href);
  return (
    <section id="contacts" data-theme="light" aria-labelledby="contact-title" className="bg-cream py-20 text-ink md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <SectionHeading id="contact-title" eyebrow={k.eyebrow} title={k.title} lead={k.lead} tone="light" />
          {rows.length ? (
            <>
              <p className="mt-10 text-sm font-semibold tracking-wider text-gold-deep uppercase">{k.infoLabel}</p>
              <ul className="mt-5 space-y-4">
                {rows.map((r) => (
                  <li key={r.label}>
                    <a
                      href={r.href}
                      {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/8 text-forest">
                        <Icon name={r.icon} className="h-[1.1rem] w-[1.1rem]" />
                      </span>
                      <span>
                        <span className="block text-xs text-stone uppercase">{r.label}</span>
                        <span className="font-medium transition-colors group-hover:text-gold-deep">{r.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="mt-10 max-w-md rounded-card border border-gold/25 bg-white/35 p-5 text-sm leading-relaxed text-stone">{k.unavailable}</p>
          )}
          {site.contact.socials.length ? (
            <>
              <p className="mt-8 text-xs text-stone uppercase">{k.followLabel}</p>
              <ul className="mt-3 flex gap-2">
                {site.contact.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/8 text-forest transition-colors duration-300 hover:bg-forest hover:text-cream"
                    >
                      <SocialIcon name={s.icon} className="h-[1.1rem] w-[1.1rem]" />
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </Reveal>
        <Reveal delay={100}>
          <LeadForm c={k} sets={c.catalog.items.map(({ id, name }) => ({ id, name }))} enabled={site.leadFormEnabled} />
        </Reveal>
      </div>
    </section>
  );
}
