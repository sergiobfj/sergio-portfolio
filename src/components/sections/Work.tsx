import Link from "next/link";
import {
  casesIn,
  categoryNumber,
  pad,
  workCategories,
  type WorkCategory,
} from "@/data/portfolio";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ArrowDisc } from "@/components/ui/ArrowDisc";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCurve } from "@/components/ui/SectionCurve";
import { Surface } from "@/components/ui/Surface";
import { WorkCursor } from "@/components/ui/WorkCursor";
import { CategoryPreview } from "@/components/work/CategoryPreview";
import { caseTitle, countLabel } from "@/lib/work";
import { routes } from "@/lib/routes";
import { pairSpans } from "@/lib/spreads";

/**
 * Um bloco por categoria: a superfície é a prévia (os prints dos próprios
 * projetos, compostos na prancha) e a legenda diz o que há dentro — o nome
 * da categoria e os trabalhos que ela reúne. Sem prints, fica o número.
 */
function CategoryBlock({
  category,
  dict,
  locale,
  className,
}: {
  category: WorkCategory;
  dict: Dictionary;
  locale: Locale;
  className: string;
}) {
  const copy = dict.categories[category.key];
  const items = casesIn(category.key);
  const number = categoryNumber(category.key);

  return (
    <article className={className}>
      <Link
        href={routes.category(locale, category.key)}
        data-project=""
        className="group block"
      >
        <Surface
          tone={category.tone}
          media={category.media}
          cover={number}
          coverSize="74cqw"
          art={category.preview ? <CategoryPreview preview={category.preview} /> : undefined}
          lead={
            <span aria-hidden="true" className="meta">
              {number}
            </span>
          }
          trail={<span className="label">{countLabel(items.length, dict)}</span>}
          sizes="(max-width: 768px) 100vw, 58vw"
          className="aspect-(--ratio) md:aspect-auto md:h-[clamp(20rem,31vw,36rem)]"
        />

        <Reveal delay={90} className="mt-5 flex items-start justify-between gap-6 md:mt-6">
          <div>
            <h3 className="display text-title leading-[0.9] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
              {copy.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>
            <p className="mt-3 max-w-[40ch] text-[0.9375rem] leading-snug text-ash">
              {items.length > 0
                ? items.map((item) => caseTitle(item, dict)).join("  ·  ")
                : copy.description}
            </p>
          </div>
          <ArrowDisc />
        </Reveal>
      </Link>
    </article>
  );
}

/**
 * Trabalhos = coisas construídas, não repositórios públicos. A home mostra
 * as categorias em pares com proporções trocadas (7/5 · 5/7); cada bloco
 * abre a página da categoria, que lista os cases.
 */
export function Work({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const rows: WorkCategory[][] = [];
  for (let i = 0; i < workCategories.length; i += 2) {
    rows.push(workCategories.slice(i, i + 2));
  }

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative bg-paper pt-(--band-top) pb-(--band-bottom) [--seam:clamp(0.625rem,1vw,1rem)]"
    >
      <SectionCurve tone="stone" />

      <div className="gutter-x">
        <SectionHeading
          id="work-heading"
          index={pad(1)}
          title={dict.work.title}
          caption={dict.work.note}
        />


        <WorkCursor label={dict.work.cursor}>
          <div className="flex flex-col gap-y-[clamp(3.5rem,7vw,6rem)]">
            {rows.map((row, r) => {
              const spans = pairSpans(r % 2 === 1);

              return (
                <div
                  key={row[0].key}
                  className="grid grid-cols-1 gap-x-(--seam) gap-y-14 md:grid-cols-12"
                >
                  {row.map((category, i) => (
                    <CategoryBlock
                      key={category.key}
                      category={category}
                      dict={dict}
                      locale={locale}
                      className={row.length === 1 ? "md:col-span-12" : spans[i]}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </WorkCursor>
      </div>
    </section>
  );
}
