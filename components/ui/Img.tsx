import Image from "next/image";
import type { ImgSlot } from "@/content/site";
import { imageExists } from "@/lib/images";
import { Placeholder } from "./Placeholder";

/**
 * Image slot. Renders next/image (fill mode, so the parent must be `relative` and sized)
 * when public/<src> exists, otherwise the spec's <Placeholder>.
 */
export function Img({
  slot,
  alt,
  sizes,
  className = "",
  priority = false,
  tone = "light",
  variant = "box",
  placeholderClassName = "",
}: {
  slot: ImgSlot;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  tone?: "light" | "dark";
  variant?: "box" | "background" | "icon";
  placeholderClassName?: string;
}) {
  if (!imageExists(slot.src)) {
    return (
      <Placeholder
        src={slot.src}
        brief={slot.brief}
        tone={tone}
        variant={variant}
        label={alt || undefined}
        className={placeholderClassName}
      />
    );
  }
  return (
    <Image
      src={slot.src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      quality={78}
      className={className}
    />
  );
}
