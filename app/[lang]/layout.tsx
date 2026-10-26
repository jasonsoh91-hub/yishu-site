import type { Metadata, Viewport } from "next";
import { Commissioner, Noto_Sans_SC, Noto_Serif_SC, Oranienbaum } from "next/font/google";
import { notFound } from "next/navigation";
import { getContent, htmlLang, isLocale, locales, site } from "@/content";
import { imageExists } from "@/lib/images";
import "../globals.css";

const display = Oranienbaum({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display-src",
});
const sans = Commissioner({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-commissioner",
});
// CJK faces: only attached on /zh. Not preloaded (large, sliced by unicode-range).
const cjkSans = Noto_Sans_SC({
  weight: ["400", "500"],
  display: "swap",
  preload: false,
  variable: "--font-cjk-sans",
});
const cjkSerif = Noto_Serif_SC({
  weight: ["400"],
  display: "swap",
  preload: false,
  variable: "--font-cjk-serif",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#0d211b",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const c = getContent(lang);
  const og = imageExists(site.images.og.src) ? [{ url: site.images.og.src, width: 1200, height: 630 }] : undefined;
  return {
    metadataBase: new URL(site.siteUrl),
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `/${l}`])),
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      locale: htmlLang[lang].replace(/-/g, "_"),
      type: "website",
      images: og,
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const fonts = [display.variable, sans.variable];
  if (lang === "zh") fonts.push(cjkSans.variable, cjkSerif.variable);
  return (
    <html lang={htmlLang[lang]} className={fonts.join(" ")}>
      <body>{children}</body>
    </html>
  );
}
