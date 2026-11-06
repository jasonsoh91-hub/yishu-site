import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { About } from "@/components/sections/About";
import { Catalog } from "@/components/sections/Catalog";
import { Certificates } from "@/components/sections/Certificates";
import { Compare } from "@/components/sections/Compare";
import { Consultant } from "@/components/sections/Consultant";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowTo } from "@/components/sections/HowTo";
import { Ingredients } from "@/components/sections/Ingredients";
import { Markets } from "@/components/sections/Markets";
import { Partner } from "@/components/sections/Partner";
import { People } from "@/components/sections/People";
import { Philosophy } from "@/components/sections/Philosophy";
import { Product } from "@/components/sections/Product";
import { Results } from "@/components/sections/Results";
import { Trust } from "@/components/sections/Trust";
import { stripRich } from "@/components/ui/RichText";
import { getContent, isLocale, languages, site } from "@/content";
import { imageExists } from "@/lib/images";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const c = getContent(lang);

  const url = `${site.siteUrl}/${lang}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: site.resellerName,
      url,
      ...(site.contact.email ? { email: site.contact.email } : {}),
      ...(site.contact.phone ? { telephone: site.contact.phone } : {}),
      description: c.footer.resellerStatement,
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: stripRich(c.product.title),
      description: c.product.lead,
      brand: { "@type": "Brand", name: "Yishu" },
      ...(imageExists(site.images.productMask.src) ? { image: `${site.siteUrl}${site.images.productMask.src}` } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: lang,
      mainEntity: c.faq.items.map((i) => ({
        "@type": "Question",
        name: i.q,
        acceptedAnswer: { "@type": "Answer", text: i.a },
      })),
    },
  ];

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-gold px-4 py-2 text-sm text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {c.ui.skipToContent}
      </a>
      <Header nav={c.nav} ui={c.ui} wordmark={c.hero.wordmark} langs={languages} locale={lang} />
      <main id="main">
        <Hero c={c} />
        <Trust c={c} />
        <About c={c} />
        <Markets c={c} />
        <Philosophy c={c} />
        <Product c={c} />
        <Ingredients c={c} />
        <HowTo c={c} />
        <Compare c={c} />
        <Results c={c} />
        <Catalog c={c} />
        <Certificates c={c} />
        <People c={c} />
        <Consultant c={c} />
        <Faq c={c} />
        <Partner c={c} />
        <Contact c={c} />
      </main>
      <Footer c={c} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
