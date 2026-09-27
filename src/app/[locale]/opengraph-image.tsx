import { ImageResponse } from "next/og";
import { site } from "@/data/portfolio";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * OG gerada a partir da tipografia do próprio site, uma por idioma.
 * Para usar uma arte definitiva, apague este arquivo e aponte
 * `openGraph.images` para um arquivo em /public.
 */
export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "pt");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#D7D8D4",
          color: "#1C1D20",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 26 }}>
          {`${site.signature.lead} ${site.signature.by} ${site.signature.name}`}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 150,
            lineHeight: 0.85,
            letterSpacing: -6,
            textTransform: "uppercase",
          }}
        >
          <span>{site.firstName}</span>
          <span>{site.lastName}</span>
        </div>
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 1 }}>
          {dict.hero.role.join(" ")} — {dict.contact.location}
        </div>
      </div>
    ),
    size,
  );
}
