"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { Content } from "@/content/types";

type Fields = { name: string; phone: string; email: string; interest: string; message: string; company: string };
type Errors = Partial<Record<"name" | "phone" | "email", string>>;

const INTEREST_PREFIX = "#contacts?interest=";

function UnderlineField({
  id,
  label,
  error,
  children,
  className = "",
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`group relative ${className}`}>
      <label
        htmlFor={id}
        className="block text-xs tracking-[0.14em] text-gold-text uppercase transition-colors duration-300 group-focus-within:text-gold-deep"
      >
        {label}
      </label>
      {children}
      <span aria-hidden className={`absolute inset-x-0 h-px ${error ? "bg-error" : "bg-gold/25"}`} style={{ bottom: error ? "1.5rem" : 0 }} />
      <span
        aria-hidden
        className={`absolute inset-x-0 h-px origin-center scale-x-0 transition-transform duration-500 ease-out group-focus-within:scale-x-100 ${
          error ? "bg-error" : "bg-gold"
        }`}
        style={{ bottom: error ? "1.5rem" : 0 }}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 h-4 text-xs text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputCls =
  "block w-full rounded-none border-0 bg-transparent pt-2 pb-2.5 font-display text-xl text-ink outline-none placeholder:text-ink/30 focus-visible:outline-none sm:text-2xl";

export function LeadForm({
  c,
  sets,
  enabled,
}: {
  c: Content["contact"];
  sets: { id: string; name: string }[];
  enabled: boolean;
}) {
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;
  const [f, setF] = useState<Fields>({ name: "", phone: "", email: "", interest: c.interests[0]?.id ?? "", message: "", company: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  // Links like "#contacts?interest=partner" preselect the interest field, then scroll to #contacts.
  useEffect(() => {
    const apply = (hash: string) => {
      const q = new URLSearchParams(hash.slice(INTEREST_PREFIX.length - "interest=".length));
      const interest = q.get("interest");
      const set = q.get("set");
      if (interest && c.interests.some((i) => i.id === interest)) {
        const setName = sets.find((s) => s.id === set)?.name;
        setF((prev) => ({
          ...prev,
          interest,
          message: setName && !prev.message ? setName : prev.message,
        }));
      }
      const target = document.getElementById("contacts");
      target?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
      history.replaceState(null, "", "#contacts");
    };
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      const href = a?.getAttribute("href");
      if (!href?.startsWith(INTEREST_PREFIX)) return;
      e.preventDefault();
      apply(href);
    };
    document.addEventListener("click", onClick);
    if (window.location.hash.startsWith(INTEREST_PREFIX)) apply(window.location.hash);
    return () => document.removeEventListener("click", onClick);
  }, [c.interests, sets]);

  const validate = (v: Fields): Errors => {
    const e: Errors = {};
    if (v.name.trim().length < 2) e.name = c.errors.name;
    const digits = v.phone.replace(/\D/g, "");
    if (!/^\+?[\d\s()-]+$/.test(v.phone.trim()) || digits.length < 8 || digits.length > 15) e.phone = c.errors.phone;
    if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = c.errors.email;
    return e;
  };

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const next = { ...f, [k]: e.target.value };
    setF(next);
    if (errors[k as keyof Errors]) setErrors(validate(next));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!enabled || status === "sending") return;
    const errs = validate(f);
    setErrors(errs);
    const first = (Object.keys(errs) as (keyof Errors)[])[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(id(first))}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...f, locale: document.documentElement.lang, page: window.location.pathname }),
      });
      const out = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (!res.ok || !out?.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  };

  const reset = () => {
    setF((prev) => ({ ...prev, name: "", phone: "", email: "", message: "", company: "" }));
    setErrors({});
    setStatus("idle");
  };

  const describedBy = (k: keyof Errors) => (errors[k] ? `${id(k)}-error` : undefined);

  if (status === "sent") {
    return (
      <div role="status" className="rounded-card border border-gold/25 bg-white/35 p-8 text-center">
        <p className="font-display text-3xl text-ink">{c.success.title}</p>
        <p className="mt-3 text-stone">{c.success.text}</p>
        <button type="button" onClick={reset} className="btn btn-gold mt-8">
          {c.success.again}
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className="relative space-y-8" aria-label={c.title}>
      <div className="grid gap-8 sm:grid-cols-2">
        <UnderlineField id={id("name")} label={c.labels.name} error={errors.name}>
          <input
            id={id("name")}
            name="name"
            autoComplete="name"
            required
            value={f.name}
            onChange={set("name")}
            aria-invalid={!!errors.name}
            aria-describedby={describedBy("name")}
            className={inputCls}
          />
        </UnderlineField>
        <UnderlineField id={id("phone")} label={c.labels.phone} error={errors.phone}>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder="+60"
            value={f.phone}
            onChange={set("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy("phone")}
            className={inputCls}
          />
        </UnderlineField>
      </div>
      <UnderlineField id={id("email")} label={c.labels.email} error={errors.email}>
        <input
          id={id("email")}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={f.email}
          onChange={set("email")}
          aria-invalid={!!errors.email}
          aria-describedby={describedBy("email")}
          className={inputCls}
        />
      </UnderlineField>
      <UnderlineField id={id("interest")} label={c.labels.interest}>
        <select id={id("interest")} name="interest" value={f.interest} onChange={set("interest")} className={`${inputCls} cursor-pointer appearance-none pr-8`}>
          {c.interests.map((i) => (
            <option key={i.id} value={i.id}>
              {i.label}
            </option>
          ))}
        </select>
        <span aria-hidden className="pointer-events-none absolute right-1 bottom-4 h-2 w-2 rotate-45 border-r border-b border-gold-deep" />
      </UnderlineField>
      <UnderlineField id={id("message")} label={c.labels.message}>
        <textarea id={id("message")} name="message" rows={2} value={f.message} onChange={set("message")} className={`${inputCls} resize-none`} />
      </UnderlineField>

      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={id("company")}>Company</label>
        <input id={id("company")} name="company" tabIndex={-1} autoComplete="off" value={f.company} onChange={set("company")} />
      </div>

      <div>
        <button
          type="submit"
          disabled={!enabled || status === "sending"}
          className="btn btn-gold w-full disabled:cursor-not-allowed disabled:opacity-45"
        >
          {status === "sending" ? c.labels.sending : c.labels.submit}
        </button>
        {status === "failed" ? (
          <p role="alert" className="mt-4 text-center text-sm text-error">
            {c.errors.send}
          </p>
        ) : null}
        <p className="mt-4 text-center text-xs text-stone">{enabled ? c.consent : c.labels.unavailable}</p>
      </div>
    </form>
  );
}
