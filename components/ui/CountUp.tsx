"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts the first number in `text` up from 0 when scrolled into view.
 * SSR, no-JS and reduced-motion users get the final text straight away.
 */
export function CountUp({ text, duration = 1600 }: { text: string; duration?: number }) {
  const match = text.match(/\d+/);
  const target = match ? Number(match[0]) : 0;
  const [value, setValue] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !target || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setValue(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  if (!match) return <>{text}</>;
  const i = match.index ?? 0;
  return (
    <>
      {text.slice(0, i)}
      <span ref={ref} className="tabular-nums">{value}</span>
      {text.slice(i + match[0].length)}
    </>
  );
}
