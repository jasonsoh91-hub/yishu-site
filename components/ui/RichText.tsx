import { Fragment } from "react";

/** Renders `*word*` tokens as italic display type (brand word "Yishu"). */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("*") && p.endsWith("*") ? (
          <em key={i} className="font-display italic">
            {p.slice(1, -1)}
          </em>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}

/** Plain-text version for aria labels / metadata. */
export const stripRich = (text: string) => text.replace(/\*([^*]+)\*/g, "$1");
