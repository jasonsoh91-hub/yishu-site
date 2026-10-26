import type { ReactNode } from "react";

type Props = {
  variant?: "gold" | "glass";
  href?: string;
  className?: string;
  children: ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

/** `.btn-gold` / `.btn-glass`. Renders <a> when `href` is set. */
export function Button({ variant = "gold", href, className = "", children, ...rest }: Props) {
  const cls = `btn ${variant === "gold" ? "btn-gold" : "btn-glass"} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
