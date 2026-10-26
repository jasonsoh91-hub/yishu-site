"use client";

import { Menu, X } from "lucide-react";
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
  return (
    <nav aria-label={label} className={`flex items-center gap-1 ${className}`}>
      {langs.map((l) => {
        const current = l.code === locale;
        return (
          <a
            key={l.code}
            href={`/${l.code}`}
            hrefLang={l.code}
            lang={l.code}
            aria-current={current ? "true" : undefined}
            title={l.name}
            onClick={(e) => {
              e.preventDefault();
              onPick?.();
              if (!current) switchLocale(l.code, activeId);
            }}
            className={`inline-flex h-11 min-w-11 items-center justify-center rounded-full px-2 text-xs font-medium tracking-[0.12em] transition-colors duration-300 ${
              current
                ? light
                  ? "text-gold-text"
                  : "text-gold-bright"
                : light
                  ? "text-ink/60 hover:text-gold-deep"
                  : "text-cream/60 hover:text-gold"
            }`}
          >
            <span className={current ? "border-b border-current pb-0.5" : "pb-0.5"}>{l.short}</span>
            <span className="sr-only"> {l.name}</span>
          </a>
        );
      })}
    </nav>
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
      <header className="fixed inset-x-0 top-0 z-50 py-4 sm:py-5">
        <div
          aria-hidden
          className={`nav-glass absolute inset-0 transition-opacity duration-500 ${
            scrolled && !open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#top" className="flex min-h-11 items-baseline gap-3" aria-label={`${wordmark}, ${ui.authorizedTag}`}>
            <BrandWordmark text={wordmark} tone={onLight ? "dark" : "light"} className="text-[1.75rem] sm:text-3xl" />
            <span
              className={`hidden text-[0.65rem] uppercase tracking-[0.2em] transition-colors duration-500 sm:inline ${
                onLight ? "text-gold-text" : "text-gold-bright/70"
              }`}
            >
              {ui.authorizedTag}
            </span>
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

          <div className="flex items-center gap-1">
            <LangSwitcher
              langs={langs}
              locale={locale}
              activeId={activeId}
              label={ui.language}
              light={onLight}
              className="hidden sm:flex"
            />
            <button
              ref={burgerRef}
              type="button"
              aria-label={open ? ui.closeMenu : ui.openMenu}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => (open ? close() : setOpen(true))}
              className={`glass-chip h-11 w-11 rounded-full lg:hidden ${onLight ? "text-ink" : "text-cream"}`}
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
          <div className="menu-item mt-8" style={{ animationDelay: `${nav.length * 50}ms` }}>
            <LangSwitcher
              langs={langs}
              locale={locale}
              activeId={activeId}
              label={ui.language}
              light={false}
              onPick={() => close(false)}
            />
          </div>
        </nav>
      </div>
    </>
  );
}
