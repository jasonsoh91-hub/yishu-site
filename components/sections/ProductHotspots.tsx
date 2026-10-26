"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Spot = { id: string; label: string; text: string; x: string; y: string };

/** Product image with positioned hotspot dots. Click/tap/Enter toggles a popover; one open at a time. */
export function ProductHotspots({ spots, children }: { spots: Spot[]; children: ReactNode }) {
  const [open, setOpen] = useState<string | null>(null);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const id = open;
        setOpen(null);
        root.current?.querySelector<HTMLButtonElement>(`[data-spot="${id}"]`)?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  return (
    <div ref={root} className="relative aspect-[1142/1234]">
      <div className="absolute inset-0 overflow-hidden rounded-card bg-cream">{children}</div>
      {spots.map((s) => {
        const isOpen = open === s.id;
        const below = parseFloat(s.y) < 35; // near the top: open the popover downwards
        const xNum = parseFloat(s.x);
        const align = xNum < 30 ? "left-0" : xNum > 70 ? "right-0" : "left-1/2 -translate-x-1/2";
        return (
          <div
            key={s.id}
            className={`absolute -translate-x-1/2 -translate-y-1/2 ${isOpen ? "z-20" : "z-10"}`}
            style={{ left: s.x, top: s.y }}
          >
            <span className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-cream/80 px-2.5 py-1 text-[0.8125rem] font-medium text-ink ring-1 ring-white/50 backdrop-blur-md hotspot-label-shadow max-[379px]:hidden">
              {s.label}
            </span>
            <button
              type="button"
              data-spot={s.id}
              aria-expanded={isOpen}
              aria-controls={`spot-${s.id}`}
              aria-label={s.label}
              onClick={() => setOpen(isOpen ? null : s.id)}
              className="group relative flex h-11 w-11 items-center justify-center rounded-full"
            >
              <span aria-hidden className="hotspot-ping absolute h-4 w-4 rounded-full bg-gold/70" />
              <span
                aria-hidden
                className={`relative h-4 w-4 rounded-full ring-2 ring-cream/85 transition-colors duration-300 group-hover:bg-gold ${
                  isOpen ? "bg-gold" : "bg-gold-deep"
                }`}
              />
            </button>
            <div
              id={`spot-${s.id}`}
              role="region"
              aria-label={s.label}
              hidden={!isOpen}
              className={`glass-card absolute w-56 max-w-60 rounded-2xl px-4 py-3 text-sm leading-snug text-ink/80 ${align} ${
                below ? "top-full mt-1" : "bottom-full mb-10"
              }`}
            >
              <strong className="mb-1 block font-display text-base font-normal text-ink">{s.label}</strong>
              {s.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}
