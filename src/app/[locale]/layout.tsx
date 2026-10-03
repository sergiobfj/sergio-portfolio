import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Archivo, Instrument_Serif, Schibsted_Grotesk } from "next/font/google";
import { site } from "@/data/portfolio";
import {
  alternates,
  htmlLang,
  isLocale,
  locales,
  ogLocale,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Header } from "@/components/layout/Header";
import { MenuOverlay } from "@/components/layout/MenuOverlay";
import "../globals.css";

const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

// Eixo de largura: o display vive condensado (62%), a interface não.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

// A voz baixa: papel, frase de apoio e o "by" da assinatura.
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

type Params = { params: Promise<{ locale: string }> };

// Só os três idiomas existem: qualquer outro primeiro segmento (ex.: /xyz)
// nem chega ao layout e cai no global-not-found.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: { default: dict.meta.title, template: `%s — ${site.name}` },
    description: dict.meta.description,
    authors: [{ name: site.name }],
    creator: site.name,
    alternates: alternates(locale),
    openGraph: {
      type: "website",
      url: `/${locale}`,
      siteName: site.name,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: ogLocale[locale],
      alternateLocale: Object.values(ogLocale).filter(
        (value) => value !== ogLocale[locale],
      ),
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#d7d8d4",
  colorScheme: "light",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale: Locale = locale;
  const dict = getDictionary(typedLocale);

  return (
    <html
      lang={htmlLang[typedLocale]}
      className={`${grotesk.variable} ${archivo.variable} ${instrument.variable}`}
    >
      <head>
        {/* Sem JS o conteúdo aparece inteiro: o motion nunca esconde conteúdo. */}
        <noscript>
          <style>{`.mask-line > *,[data-rise],[data-draw],[data-clip]{transform:none!important;opacity:1!important;clip-path:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#content"
          className="label sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
        >
          {dict.nav.skip}
        </a>
        {/* Fora de qualquer ancestral animado: um transform no caminho
            viraria containing block e prenderia o painel fixo. */}
        <MenuOverlay locale={typedLocale} dict={{ nav: dict.nav }} />
        <div id="page" className="relative">
          <Header locale={typedLocale} dict={dict} />
          {children}
        </div>
      </body>
    </html>
  );
}
