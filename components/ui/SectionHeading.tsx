import type { ReactNode } from "react";
import { RichText } from "./RichText";

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
  className = "",
  titleClassName = "",
  as: Tag = "h2",
}: {
  id?: string;
  eyebrow?: string;
  title: string | ReactNode;
  lead?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  titleClassName?: string;
  as?: "h2" | "h3";
}) {
  const dark = tone === "dark";
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow ? (
        <p
          className={`text-xs font-medium uppercase tracking-[0.18em] ${
            dark ? "text-gold-bright" : "text-gold-text"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        id={id}
        className={`font-display text-4xl leading-[1.08] text-balance sm:text-5xl md:text-[3.5rem] ${
          eyebrow ? "mt-4" : ""
        } ${dark ? "text-cream" : "text-ink"} ${titleClassName}`}
      >
        {typeof title === "string" ? <RichText text={title} /> : title}
      </Tag>
      {lead ? (
        <p
          className={`mt-5 text-base leading-relaxed text-pretty sm:text-lg ${
            dark ? "text-cream/80" : "text-ink/70"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
