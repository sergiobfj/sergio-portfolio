import { isHeavy, type WorkCase } from "@/data/portfolio";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { Band } from "@/components/case/Band";
import { CaseLinks, CaseTags } from "@/components/case/CaseMeta";
import { CaseNext } from "@/components/case/CaseNext";
import { Figure } from "@/components/case/Figure";
import { Metrics } from "@/components/case/Metrics";
import { StackSheet } from "@/components/case/StackSheet";
import { stories } from "@/components/cases";
import { Chapter } from "@/components/layout/Chapter";
import { PageHero } from "@/components/layout/PageHero";
import { Contact } from "@/components/sections/Contact";
import { BackLink } from "@/components/ui/BackLink";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { mediaSrc } from "@/lib/media";
import { caseTitle } from "@/lib/work";
import { routes } from "@/lib/routes";

type Props = { item: WorkCase; dict: Dictionary; locale: Locale };

/**
 * Case sem história própria: monta a página com o que existir — frase,
 * contexto/problema/solução/impacto, números, ficha técnica. Nada é
 * obrigatório; o que falta simplesmente não aparece, e sem texto nenhum a
 * página diz que o case está em construção. Os quatro trechos curtos formam
 * uma grade (2 × 2), não quatro títulos soltos numa coluna lateral.
 *
 * É também o formato do mini-case (Relatório Merger): hero curta, e a figura
 * ao lado da grade em vez de uma faixa própria. Imagens extras não entram
 * aqui — um case com prints para contar ganha história própria.
 */
function GenericCase({ item, dict, locale }: Props) {
  const copy = dict.cases[item.slug];
  const title = caseTitle(item, dict);
  const heavy = isHeavy(item.weight);
  const cover = mediaSrc(item.media) ? item.media : undefined;
  const beside = Boolean(cover && !heavy);

  const chapters = (["context", "problem", "solution", "impact"] as const).flatMap(
    (key) => (copy[key] ? [{ key, title: dict.caseStudy[key], text: copy[key] }] : []),
  );

  return (
    <>
      <main id="content">
        <PageHero
          label={<CaseTags item={item} dict={dict} locale={locale} />}
          meta={item.year}
          title={[title]}
          compact={!heavy}
          voice={
            <p className="voice max-w-[30ch] text-[clamp(1.6rem,2.6vw,2.6rem)] leading-[1.04] text-pretty">
              {copy.headline ?? copy.summary ?? dict.work.caseSoon}
            </p>
          }
          aside={
            <>
              <CaseLinks item={item} dict={dict} />
              <BackLink
                href={routes.category(locale, item.category)}
                label={dict.caseStudy.back}
              />
            </>
          }
        />

        {cover && heavy ? (
          <div className="gutter-x bg-stone pb-[12vh]">
            <Figure
              media={cover}
              number={1}
              label={dict.caseStudy.figure}
              alt={title}
              tone={item.tone}
              priority
              maxHeight="70svh"
              sizes="(max-width: 768px) 100vw, 92vw"
              className="mx-auto"
            />
          </div>
        ) : null}

        <Band tone="paper" after="stone" label={title}>
          <div className="flex flex-col gap-y-[14vh]">
            {chapters.length > 0 || beside ? (
              <div className="grid grid-cols-12 gap-x-6 gap-y-12 lg:items-center">
                {cover && beside ? (
                  <Figure
                    media={cover}
                    number={1}
                    label={dict.caseStudy.figure}
                    alt={title}
                    tone={item.tone}
                    priority
                    maxHeight="64svh"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="col-span-12 lg:col-span-5"
                  />
                ) : null}
                {chapters.length > 0 ? (
                  <dl
                    className={cn(
                      "col-span-12 grid grid-cols-1 gap-x-6 sm:grid-cols-2",
                      beside && "lg:col-span-6 lg:col-start-7",
                    )}
                  >
                    {chapters.map((chapter, i) => (
                      <Reveal key={chapter.key} delay={i * 80} className="rule-top pt-5 pb-10">
                        <dt className="label text-ash">{chapter.title}</dt>
                        <dd className="voice mt-4 max-w-[24ch] text-[clamp(1.45rem,2vw,2rem)] leading-[1.1]">
                          {chapter.text}
                        </dd>
                      </Reveal>
                    ))}
                  </dl>
                ) : null}
              </div>
            ) : null}

            {chapters.length === 0 ? (
              <Reveal>
                <p className="voice mx-auto max-w-[22ch] text-voice text-ash md:text-center">
                  {dict.caseStudy.pending}
                </p>
              </Reveal>
            ) : null}

            {copy.metrics?.length ? (
              <div>
                <Metrics
                  size="lg"
                  items={copy.metrics.map((metric) => ({
                    value: metric.value,
                    lines: [metric.caption],
                  }))}
                />
                {copy.metricsNote ? (
                  <Reveal>
                    <p className="label mt-4 text-ash sm:mt-10">{copy.metricsNote}</p>
                  </Reveal>
                ) : null}
              </div>
            ) : null}

            {item.technologies ? (
              <Chapter id="case-stack" title={dict.caseStudy.stack} wide>
                <StackSheet groups={item.technologies} labels={dict.caseStudy.stackGroups} />
              </Chapter>
            ) : null}

            <CaseNext item={item} dict={dict} locale={locale} />
          </div>
        </Band>
      </main>
      <Contact dict={dict} locale={locale} curve="paper" />
    </>
  );
}

/**
 * Um case com história própria (src/components/cases) conta do jeito dele,
 * com as mesmas peças; os outros usam a página genérica.
 */
export function CaseView(props: Props) {
  const Story = stories[props.item.slug];
  return Story ? <Story {...props} /> : <GenericCase {...props} />;
}
