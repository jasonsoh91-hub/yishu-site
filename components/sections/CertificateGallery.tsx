"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "../ui/Icon";

type Cert = { name: string; scope: string; src: string; exists: boolean; brief: string };
type UI = { view: string; download: string; previous: string; next: string; close: string; counter: string; imageComingSoon: string };

function Missing({ src, brief, dark = false }: { src: string; brief: string; dark?: boolean }) {
  return (
    <div className="placeholder-stripes absolute inset-0 flex flex-col items-center justify-center gap-1 border p-3 text-center hairline">
      <span className={`font-mono text-[0.65rem] break-all ${dark ? "text-gold-bright/80" : "text-gold-text"}`}>
        {src.replace(/^\/images\//, "")}
      </span>
      <span className={`text-[0.65rem] leading-snug ${dark ? "text-cream/50" : "text-ink/45"}`}>{brief}</span>
    </div>
  );
}

/** Certificate list + thumbnails + <dialog> lightbox (Esc, arrows, swipe, focus handled natively). */
export function CertificateGallery({ certs, ui }: { certs: Cert[]; ui: UI }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);

  const openAt = (i: number, el: HTMLElement) => {
    opener.current = el;
    setIndex(i);
    dialog.current?.showModal();
  };
  const go = useCallback((d: number) => setIndex((i) => (i + d + certs.length) % certs.length), [certs.length]);

  useEffect(() => {
    const dlg = dialog.current;
    if (!dlg) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    const onClose = () => opener.current?.focus();
    dlg.addEventListener("keydown", onKey);
    dlg.addEventListener("close", onClose);
    return () => {
      dlg.removeEventListener("keydown", onKey);
      dlg.removeEventListener("close", onClose);
    };
  }, [go]);

  const cur = certs[index];

  return (
    <>
      <ul className="divide-y divide-gold/25 border-y border-gold/25">
        {certs.map((cert, i) => (
          <li key={cert.src} className="flex items-center justify-between gap-4 py-4">
            <div className="min-w-0">
              <p className="font-display text-lg sm:text-xl">{cert.name}</p>
              <p className="mt-0.5 text-sm text-ink/55">{cert.scope}</p>
            </div>
            <div className="flex shrink-0 gap-1 text-gold-deep">
              <button
                type="button"
                onClick={(e) => openAt(i, e.currentTarget)}
                className="glass-chip h-11 w-11 rounded-full"
                aria-label={`${ui.view}: ${cert.name}`}
              >
                <Icon name="view" className="h-4 w-4" />
              </button>
              {cert.exists ? (
                <a href={cert.src} download className="glass-chip h-11 w-11 rounded-full" aria-label={`${ui.download}: ${cert.name}`}>
                  <Icon name="download" className="h-4 w-4" />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  title={ui.imageComingSoon}
                  className="glass-chip h-11 w-11 cursor-not-allowed rounded-full opacity-40"
                  aria-label={`${ui.download}: ${cert.name} (${ui.imageComingSoon})`}
                >
                  <Icon name="download" className="h-4 w-4" />
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>

      <ul className="col-span-full mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {certs.map((cert, i) => (
          <li key={cert.src}>
            <button
              type="button"
              onClick={(e) => openAt(i, e.currentTarget)}
              aria-label={`${ui.view}: ${cert.name}`}
              className="shimmer-border-gold group relative block aspect-[3/4] w-full overflow-hidden rounded-card bg-cream-soft"
            >
              {cert.exists ? (
                <Image
                  src={cert.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 12vw, (min-width: 640px) 22vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <Missing src={cert.src} brief="3:4" />
              )}
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label={cur?.name}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
        onPointerDown={(e) => (touchX.current = e.clientX)}
        onPointerUp={(e) => {
          if (touchX.current === null) return;
          const dx = e.clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        }}
      >
        <div
          className="lightbox-stage pointer-events-none flex h-full w-full flex-col items-center justify-center gap-4 px-4 py-6"
          key={index}
        >
          <figure className="pointer-events-auto flex flex-col items-center">
            <div className="relative aspect-[3/4] h-[min(85svh,calc((100vw-2rem)*4/3))] max-h-[85svh] overflow-hidden rounded-card">
              {cur?.exists ? (
                <Image src={cur.src} alt={cur.name} fill sizes="90vw" className="object-contain" />
              ) : cur ? (
                <Missing src={cur.src} brief={cur.brief} dark />
              ) : null}
            </div>
            <figcaption className="mt-3 text-center text-sm text-cream/80">
              {cur?.name} <span className="text-cream/45">· {cur?.scope}</span>
            </figcaption>
          </figure>
          <div className="pointer-events-auto flex items-center gap-3 text-cream">
            <button type="button" onClick={() => go(-1)} className="glass-chip h-11 w-11 rounded-full" aria-label={ui.previous}>
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <span aria-live="polite" className="min-w-16 text-center text-sm tabular-nums text-cream/70">
              {ui.counter.replace("{n}", String(index + 1)).replace("{total}", String(certs.length))}
            </span>
            <button type="button" onClick={() => go(1)} className="glass-chip h-11 w-11 rounded-full" aria-label={ui.next}>
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={() => dialog.current?.close()}
          className="glass-chip absolute top-4 right-4 h-11 w-11 rounded-full text-cream"
          aria-label={ui.close}
          autoFocus
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </dialog>
    </>
  );
}
