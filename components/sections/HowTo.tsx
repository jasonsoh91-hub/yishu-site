import type { Content } from "@/content/types";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { Steps } from "./Steps";

export function HowTo({ c }: { c: Content }) {
  const h = c.howTo;
  return (
    <section id="how-to" data-theme="light" aria-labelledby="howto-title" className="bg-cream-soft py-20 text-ink md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading id="howto-title" eyebrow={h.eyebrow} title={h.title} lead={h.lead} align="center" tone="light" />
        </Reveal>
        <Reveal delay={100}>
          <Steps steps={h.steps} stepLabel={c.ui.step} className="mt-20 md:mt-28" />
        </Reveal>
      </div>
    </section>
  );
}
