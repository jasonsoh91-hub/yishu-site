"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Wraps the hero image at scale(1.1) and drifts it with scroll (rAF). Off under reduced motion. */
export function HeroParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      if (y < window.innerHeight * 1.5) el.style.transform = `translate3d(0, ${y * 0.15}px, 0) scale(1.1)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div ref={ref} className="absolute inset-0 will-change-transform" style={{ transform: "scale(1.1)" }}>
      {children}
    </div>
  );
}
