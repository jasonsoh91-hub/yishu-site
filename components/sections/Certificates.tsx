import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { imageExists } from "@/lib/images";
import { Img } from "../ui/Img";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Certificates({ c }: { c: Content }) {
  const t = c.certificates;
  const certs = t.items.map((it, i) => {
    const slot = site.images.certificates[i];
    return { ...it, src: slot.src, brief: slot.brief, exists: imageExists(slot.src) };
  });
  return (
    <section
      id="certificates"
      data-theme="light"
      aria-labelledby="certificates-title"
      className="relative isolate overflow-hidden bg-cream py-20 text-ink md:py-28"
    >
      <div aria-hidden className="absolute inset-0 -z-10 opacity-50">
        <Img slot={site.images.certificatesBg} alt="" sizes="100vw" className="object-cover" variant="background" />
      </div>
      <Reveal className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <SectionHeading id="certificates-title" eyebrow={t.eyebrow} title={t.title} lead={t.lead} tone="light" />
        <ul className="divide-y divide-gold/25">
          {certs.map((cert) => (
            <li key={cert.src} className="flex items-center justify-between gap-4 py-4">
              <div className="min-w-0">
                <p className="font-display text-lg sm:text-xl">{cert.name}</p>
                <p className="mt-0.5 text-sm text-ink/55">{cert.scope}</p>
              </div>
              {cert.exists ? (
                <a href={cert.src} download className="glass-chip h-9 w-9 shrink-0 rounded-full text-gold-deep" aria-label={`${c.ui.download}: ${cert.name}`}>
                  <Icon name="download" className="h-4 w-4" />
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
