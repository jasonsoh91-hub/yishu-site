/** Small "Yishu" logo for nav/footer: gold gradient text with a hairline gold stroke. */
export function BrandWordmark({
  text,
  tone = "light",
  className = "",
}: {
  text: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span data-text={text} className={`${tone === "dark" ? "brand-logo-dark" : "brand-logo"} ${className}`}>
      {text}
    </span>
  );
}

/** Big shimmering wordmark: outline glint wrapped around shimmering gradient fill. */
export function ShimmerWord({ text, className = "", lang }: { text: string; className?: string; lang?: string }) {
  return (
    <span data-text={text} lang={lang} className={`text-stroke-gold ${className}`}>
      <span className="text-shimmer-gold">{text}</span>
    </span>
  );
}
