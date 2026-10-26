import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";

const cache = new Map<string, boolean>();

/** True when public/<src> exists. Checked at render (build) time on the server. */
export function imageExists(src: string | null | undefined): src is string {
  if (!src) return false;
  if (/^https?:\/\//.test(src)) return true;
  let hit = cache.get(src);
  if (hit === undefined) {
    hit = existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
    if (process.env.NODE_ENV === "production") cache.set(src, hit);
  }
  return hit;
}
