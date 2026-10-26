import { en } from "./en";
import { ms } from "./ms";
import type { Content, Locale } from "./types";
import { zh } from "./zh";

export { site } from "./site";
export type { Content, Locale } from "./types";

export const locales: Locale[] = ["en", "zh", "ms"];

const dictionaries: Record<Locale, Content> = { en, zh, ms };

export const isLocale = (v: string): v is Locale => (locales as string[]).includes(v);

export const getContent = (locale: Locale): Content => dictionaries[locale];

/** Language switcher data: every locale with its own-language name. */
export const languages = locales.map((l) => ({
  code: l,
  name: dictionaries[l].meta.langName,
  short: dictionaries[l].meta.langShort,
}));

/** BCP-47 tag for <html lang>. */
export const htmlLang: Record<Locale, string> = { en: "en-MY", zh: "zh-Hans-MY", ms: "ms-MY" };
