import type { Content } from "@/content/types";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { Accordion } from "./Accordion";

export function Faq({ c }: { c: Content }) {
  const f = c.faq;
  return (
    <section id="faq" data-theme="light" aria-labelledby="faq-title" className="bg-cream-soft py-20 text-ink md:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading id="faq-title" eyebrow={f.eyebrow} title={f.title} align="center" tone="light" />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <Accordion items={f.items} />
        </Reveal>
      </div>
    </section>
  );
}
