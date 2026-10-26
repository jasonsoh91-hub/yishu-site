export function GoldRule({
  orientation = "h",
  className = "",
}: {
  orientation?: "h" | "v";
  className?: string;
}) {
  return (
    <div aria-hidden className={`${orientation === "h" ? "rule-gold-h" : "rule-gold-v"} ${className}`} />
  );
}
