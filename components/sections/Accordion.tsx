"use client";

import { Plus } from "lucide-react";
import { useId, useState } from "react";

/** FAQ accordion. First item open by default; several may be open. */
export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const uid = useId();
  const toggle = (i: number) =>
    setOpen((s) => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });
  return (
    <div className="divide-y divide-gold/25 border-y border-gold/25">
      {items.map((it, i) => {
        const isOpen = open.has(i);
        const bid = `${uid}-b${i}`;
        const pid = `${uid}-p${i}`;
        return (
          <div key={i}>
            <h3>
              <button
                id={bid}
                type="button"
                aria-expanded={isOpen}
                aria-controls={pid}
                onClick={() => toggle(i)}
                className="flex min-h-11 w-full items-center justify-between gap-6 py-5 text-left font-display text-lg sm:text-xl"
              >
                {it.q}
                <Plus
                  aria-hidden
                  strokeWidth={1.5}
                  className={`h-5 w-5 shrink-0 text-gold-deep transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                />
              </button>
            </h3>
            <div
              id={pid}
              role="region"
              aria-labelledby={bid}
              className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <p className="pr-12 pb-5 leading-relaxed text-ink/70">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
