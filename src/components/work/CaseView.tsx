import { isHeavy, type WorkCase } from "@/data/portfolio";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { Band } from "@/components/case/Band";
import { CaseLinks, CaseTags } from "@/components/case/CaseMeta";
import { CaseNext } from "@/components/case/CaseNext";
import { Figure } from "@/components/case/Figure";
import { Gallery } from "@/components/case/Gallery";
import { Metrics } from "@/components/case/Metrics";
import { StackSheet } from "@/components/case/StackSheet";
import { stories } from "@/components/cases";
import { Chapter } from "@/components/layout/Chapter";
import { PageHero } from "@/components/layout/PageHero";
import { Contact } from "@/components/sections/Contact";
import { BackLink } from "@/components/ui/BackLink";
import { Reveal } from "@/components/ui/Reveal";
import { mediaSrc } from "@/lib/media";
import { caseTitle } from "@/lib/work";
import { routes } from "@/lib/routes";

type Props = { item: WorkCase; dict: Dictionary; locale: Locale };

/**
 * Case sem história própria: monta a página com o que existir — frase,
 * contexto/problema/solução/impacto, números, ficha técnica, galeria. Nada é
 * obrigatório; o que falta simplesmente não aparece, e sem texto nenhum a
 * página diz que o case está em construção. É também o formato do
 * mini-case (Relatório Merger): hero curta e poucos blocos.
 */
function GenericCase({ item, dict, locale }: Props) {
  const copy = dict.cases[item.slug];
  const title = caseTitle(item, dict);

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
          compact={!isHeavy(item.weight)}
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

        {mediaSrc(item.media) ? (
          <div className="gutter-x bg-stone pb-[12vh]">
            <Figure
              media={item.media}
              number={1}
              label={dict.caseStudy.figure}
              alt={title}
              tone={item.tone}
              priority
              sizes="(max-width: 768px) 100vw, 92vw"
            />
          </div>
        ) : null}

        <Band tone="paper" after="stone" label={title}>
          <div className="flex flex-col gap-y-[14vh]">
            {chapters.length > 0 ? (
              chapters.map((chapter) => (
                <Chapter key={chapter.key} id={`case-${chapter.key}`} title={chapter.title}>
                  <Reveal>
                    <p className="voice max-w-[30ch] text-[clamp(1.6rem,2.4vw,2.35rem)] leading-[1.1]">
                      {chapter.text}
                    </p>
                  </Reveal>
                </Chapter>
              ))
            ) : (
              <Reveal>
                <p className="voice max-w-[22ch] text-voice text-ash">
                  {dict.caseStudy.pending}
                </p>
              </Reveal>
            )}

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
              <Chapter id="case-stack" title={dict.caseStudy.stack}>
                <StackSheet groups={item.technologies} labels={dict.caseStudy.stackGroups} />
              </Chapter>
            ) : null}

            {item.images?.length ? (
              <Chapter id="case-gallery" title={dict.caseStudy.gallery} wide>
                <Gallery
                  images={item.images}
                  captions={copy.captions}
                  label={dict.caseStudy.figure}
                  start={2}
                />
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
