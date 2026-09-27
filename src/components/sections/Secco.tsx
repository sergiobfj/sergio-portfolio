import Link from "next/link";
import { casesAt, experiences } from "@/data/portfolio";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";
import { RevealLines } from "@/components/ui/RevealLines";
import { SectionCurve } from "@/components/ui/SectionCurve";
import { yearOf } from "@/lib/dates";
import { caseTitle } from "@/lib/work";
import { routes } from "@/lib/routes";

/**
 * O momento escuro. A base off-white de cima desce sobre ele; a palavra
 * SECCO é maior que a tela e desliza com a rolagem — um bloco que não cabe
 * na caixa. Não é o site da empresa: é um capítulo — o CTA abre a página
 * da experiência. Os produtos são os cases da SECCO na categoria de produtos.
 */
export function Secco({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const entry = experiences.find((item) => item.key === "secco");
  const products = entry
    ? casesAt(entry.company).filter((item) => item.category === "products")
    : [];

  return (
    <section
      aria-labelledby="secco-heading"
      data-tone="dark"
      className="relative bg-void pt-[calc(var(--curve)+9vh)] pb-[13vh] text-paper"
    >
      <SectionCurve tone="paper" />

      <div className="gutter-x flex items-baseline justify-between gap-6">
        <Reveal className="label text-fog">{dict.secco.discipline}</Reveal>
        {entry ? (
          <Reveal delay={80} className="meta text-fog">
            {yearOf(entry.from)} — {entry.to ? yearOf(entry.to) : dict.experience.now}
          </Reveal>
        ) : null}
      </div>

      <div className="my-[7vh] overflow-x-clip">
        <h2 id="secco-heading" className="display">
          <span className="secco-word">SECCO</span>
        </h2>
      </div>

      <div className="gutter-x grid grid-cols-12 items-end gap-x-6 gap-y-10">
        <RevealLines
          as="p"
          lines={dict.secco.role}
          className="voice col-span-12 text-voice md:col-span-7"
        />

        <div className="col-span-12 flex flex-col items-start gap-8 md:col-span-4 md:col-start-9 md:items-end">
          {products.length > 0 ? (
            <Reveal className="md:text-right">
              <p className="label mb-3 text-fog">{dict.secco.products}</p>
              <ul className="flex flex-wrap gap-x-5 gap-y-1 md:justify-end">
                {products.map((item) => (
                  <li key={item.slug} className="display text-2xl">
                    <Link
                      href={routes.case(locale, item)}
                      className="transition-opacity duration-300 hover:opacity-60"
                    >
                      {caseTitle(item, dict)}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}
          <Reveal delay={140}>
            <ArrowLink
              href={routes.experience(locale, "secco")}
              label={dict.secco.cta}
              tone="paper"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
