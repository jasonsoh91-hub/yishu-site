import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { imageExists } from "@/lib/images";
import { Img } from "../ui/Img";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { CertificateGallery } from "./CertificateGallery";

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
        <div className="contents">
          <CertificateGallery certs={certs} ui={c.ui} />
        </div>
      </Reveal>
    </section>
  );
}
