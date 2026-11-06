"use client";

import { ChevronDown, Globe2, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Content, Locale } from "@/content/types";
import { BrandWordmark } from "./ui/BrandWordmark";

type Lang = { code: Locale; name: string; short: string };

/** Navigate to the same section in another locale. */
function switchLocale(code: Locale, sectionId: string | null) {
  const hash = sectionId && sectionId !== "top" ? `#${sectionId}` : "";
  // Deliberate full navigation: each locale swaps <html lang> and font set, and the hash restores the section.
  // eslint-disable-next-line @next/next/no-location-assign-relative-destination
  window.location.assign(`/${code}${hash}`);
}

function LangSwitcher({
  langs,
  locale,
  activeId,
  label,
  light,
  className = "",
  onPick,
}: {
  langs: Lang[];
  locale: Locale;
  activeId: string | null;
  label: string;
  light: boolean;
  className?: string;
  onPick?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const current = langs.find((lang) => lang.code === locale) ?? langs[0];

  useEffect(() => {
    if (!open) return;
    const close = (event: MouseEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={root} className={`relative ${className}`}>
      <button
        type="button"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={`glass-chip flex h-11 items-center gap-1.5 rounded-full px-3.5 text-sm font-medium transition hover:text-gold ${light ? "text-ink/85" : "text-cream/85"}`}
      >
        <Globe2 className="h-4 w-4" strokeWidth={1.5} />
        {current.short}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} strokeWidth={1.5} />
      </button>
      {open ? (
        <nav aria-label={label} className={`absolute top-[calc(100%+0.5rem)] right-0 min-w-36 overflow-hidden rounded-card border p-1 shadow-xl backdrop-blur-xl ${light ? "border-gold/20 bg-cream/95 text-ink" : "border-white/10 bg-ink/95 text-cream"}`}>
          {langs.map((lang) => (
            <a
              key={lang.code}
              href={`/${lang.code}`}
              hrefLang={lang.code}
              lang={lang.code}
              aria-current={lang.code === locale ? "page" : undefined}
              onClick={(event) => {
                event.preventDefault();
                setOpen(false);
                onPick?.();
                if (lang.code !== locale) switchLocale(lang.code, activeId);
              }}
              className={`flex min-h-11 items-center justify-between rounded-xl px-3 text-sm transition-colors ${lang.code === locale ? "text-gold-text" : light ? "hover:bg-forest/8" : "hover:bg-white/8"}`}
            >
              <span>{lang.name}</span>
              <span className="text-xs opacity-60">{lang.short}</span>
            </a>
          ))}
        </nav>
      ) : null}
    </div>
  );
}

export function Header({
  nav,
  ui,
  wordmark,
  langs,
  locale,
}: {
  nav: Content["nav"];
  ui: Content["ui"];
  wordmark: string;
  langs: Lang[];
  locale: Locale;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  // Scroll state: glass layer, light/dark swap under the header, active section.
  useEffect(() => {
    let raf = 0;
    const sections = () => Array.from(document.querySelectorAll<HTMLElement>("main section[id], footer[id]"));
    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 24);
      const list = sections();
      const probeHeader = 40;
      const probeActive = window.innerHeight * 0.35;
      let themeEl: HTMLElement | null = null;
      let active: string | null = null;
      for (const s of list) {
        const r = s.getBoundingClientRect();
        if (r.top <= probeHeader && r.bottom > probeHeader) themeEl = s;
        if (r.top <= probeActive && r.bottom > probeActive) active = s.id;
      }
      setLight(themeEl?.dataset.theme === "light");
      // Map sub-sections (ingredients, how-to, people…) onto the nearest nav entry above them.
      if (active && !nav.some((n) => n.id === active)) {
        const idx = list.findIndex((s) => s.id === active);
        const prev = list
          .slice(0, idx)
          .reverse()
          .find((s) => nav.some((n) => n.id === s.id));
        active = prev?.id ?? null;
      }
      setActiveId(active);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [nav]);

  const close = useCallback((focusBurger = true) => {
    setOpen(false);
    if (focusBurger) burgerRef.current?.focus();
  }, []);

  // Mobile menu: Esc, focus trap, scroll lock.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const root = menuRef.current;
    const focusables = () =>
      Array.from(root?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "Tab") {
        const f = focusables();
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  // Close the menu if the viewport grows past lg.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const onMenuLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    close(false);
    // Wait for the scroll lock to release before scrolling.
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
      history.replaceState(null, "", `#${id}`);
    });
  };

  const onLight = light && !open;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 py-5">
        <div
          aria-hidden
          className={`nav-glass absolute inset-0 transition-opacity duration-500 ${
            scrolled && !open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#top" className="shrink-0" aria-label={wordmark}>
            <BrandWordmark text={wordmark} tone={onLight ? "dark" : "light"} className="text-2xl" />
          </a>

          <nav aria-label={ui.mainNav} className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {nav.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    aria-current={activeId === n.id ? "true" : undefined}
                    className={`font-display text-base transition-colors duration-300 ${
                      activeId === n.id
                        ? onLight
                          ? "text-gold-deep"
                          : "text-gold"
                        : onLight
                          ? "text-ink/80 hover:text-gold-deep"
                          : "text-cream/80 hover:text-gold"
                    }`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <LangSwitcher
              langs={langs}
              locale={locale}
              activeId={activeId}
              label={ui.language}
              light={onLight}
            />
            <button
              ref={burgerRef}
              type="button"
              aria-label={open ? ui.closeMenu : ui.openMenu}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => (open ? close() : setOpen(true))}
              className={`glass-chip h-9 w-9 rounded-full lg:hidden ${onLight ? "text-ink" : "text-cream"}`}
            >
              {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label={ui.mainNav}
        hidden={!open}
        className="fixed inset-0 z-40 lg:hidden"
      >
        <div aria-hidden className="absolute inset-0 bg-ink/80 backdrop-blur-md" onClick={() => close()} />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]"
        />
        <nav className="relative flex h-full flex-col items-center justify-center gap-2 px-6 pt-20 pb-10">
          <ul className="flex flex-col items-center gap-1">
            {nav.map((n, i) => (
              <li key={n.id} className="menu-item" style={{ animationDelay: `${i * 50}ms` }}>
                <a
                  href={`#${n.id}`}
                  onClick={(e) => onMenuLink(e, n.id)}
                  className={`block px-4 py-2 font-display text-3xl transition-colors ${
                    activeId === n.id ? "text-gold" : "text-cream/90 hover:text-gold"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
