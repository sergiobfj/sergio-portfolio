import { Band } from "@/components/case/Band";
import { CaseTags } from "@/components/case/CaseMeta";
import { CaseNext } from "@/components/case/CaseNext";
import { Figure } from "@/components/case/Figure";
import { FigureSpread } from "@/components/case/FigureSpread";
import { InlineFlow, Progression } from "@/components/case/Flow";
import { Metrics } from "@/components/case/Metrics";
import { StackSheet } from "@/components/case/StackSheet";
import { Chapter, ChapterTitle } from "@/components/layout/Chapter";
import { PageHero } from "@/components/layout/PageHero";
import { Contact } from "@/components/sections/Contact";
import { BackLink } from "@/components/ui/BackLink";
import { Reveal } from "@/components/ui/Reveal";
import { RevealLines } from "@/components/ui/RevealLines";
import { delay, fit } from "@/lib/cn";
import { imageOf } from "@/lib/media";
import { routes } from "@/lib/routes";
import type { StoryProps } from "./index";

/** "Biomassa": onde a regressão publicada entra — e a ciência começa. */
const PIPELINE_FOCUS = 4;

/** Uma lista curta em linhas, para o que o pipeline já faz e o que ainda não é. */
function StateList({
  label,
  items,
  muted = false,
}: {
  label: string;
  items: readonly string[];
  muted?: boolean;
}) {
  return (
    <Reveal>
      <p className="label text-fog">{label}</p>
      <ul className="mt-5">
        {items.map((entry) => (
          <li
            key={entry}
            className={
              muted
                ? "border-t border-rule-dark py-3 text-[clamp(1.1rem,1.5vw,1.4rem)] leading-snug text-paper/55"
                : "display border-t border-rule-dark py-3 text-[clamp(1.5rem,2.2vw,2.2rem)]"
            }
          >
            {entry}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/**
 * GeoCarbo — produto da SECCO em fase de MVP, contado como é: um protótipo
 * funcional que estima o carbono da vegetação acima do solo a partir de
 * Sentinel-2 e de uma regressão publicada para a Caatinga, com método e
 * limites declarados. Não é IA, não é dMRV completo, não certifica crédito —
 * e a página diz o que ainda não é.
 *
 * Imagens: a landing (hero) e, no estágio atual, o cadastro e os relatórios
 * (recortes sem o menu lateral, só com dados de exemplo). Mapa, análise e
 * PDF são prints planejados em portfolio.ts: entram sozinhos na seção certa
 * quando o arquivo existir.
 */
export function GeoCarbo({ item, dict, locale }: StoryProps) {
  const story = dict.stories.geocarbo;
  const copy = dict.cases[item.slug];

  const map = imageOf(item.images, "map");
  const analysis = imageOf(item.images, "analysis");
  const registration = imageOf(item.images, "registration");
  const reports = imageOf(item.images, "reports");
  const pdf = imageOf(item.images, "pdf");
  const working = [registration, reports, pdf].filter((image) => image !== undefined);

  return (
    <>
      <main id="content">
        <PageHero
          label={<CaseTags item={item} dict={dict} locale={locale} />}
          meta={item.year}
          title={[item.title]}
          voice={
            <p className="voice max-w-[24ch] text-[clamp(1.6rem,2.7vw,2.75rem)] leading-[1.04] text-pretty">
              {copy.summary}
            </p>
          }
          aside={
            <>
              <p className="label text-ash">
                {story.status.map((line, i) => (
                  <span key={line} className={i === 0 ? "block text-ink" : "block"}>
                    {line}
                  </span>
                ))}
              </p>
              <BackLink
                href={routes.category(locale, item.category)}
                label={dict.caseStudy.back}
              />
            </>
          }
        />

        <div className="gutter-x bg-stone pb-[12vh]">
          <Figure
            media={item.media}
            alt={item.title}
            tone="void"
            priority
            maxHeight="70svh"
            sizes="(max-width: 768px) 100vw, 92vw"
            className="mx-auto"
          />
        </div>

        {/* O problema: a frase de confiança ao lado do porquê. O título é a
            cabeça da coluna que explica — centralizado, ficaria sobre o vão. */}
        <Band tone="paper" after="stone" labelledBy="gc-problem">
          <div className="grid grid-cols-12 gap-x-6 gap-y-8 lg:grid-rows-[1fr_auto] lg:items-end lg:gap-y-6">
            <ChapterTitle
              id="gc-problem"
              title={story.problem.title}
              className="col-span-12 lg:col-span-5 lg:col-start-8 lg:row-start-1"
            />
            <Reveal className="col-span-12 lg:col-span-6 lg:row-span-2 lg:row-start-1">
              <p className="voice max-w-[18ch] text-[clamp(2.2rem,4.2vw,4.5rem)] leading-[1.02] italic">
                “{story.problem.quote}”
              </p>
            </Reveal>
            <Reveal delay={120} className="col-span-12 lg:col-span-5 lg:col-start-8 lg:row-start-2">
              <p className="voice text-[clamp(1.6rem,2.3vw,2.3rem)] leading-[1.1]">
                {story.problem.lead}
              </p>
              <p className="mt-5 max-w-[46ch] text-lead leading-snug text-ash">
                {story.problem.body}
              </p>
            </Reveal>
          </div>
        </Band>

        {/* Como funciona: da propriedade ao relatório, e o que vem do satélite */}
        <Band tone="void" after="paper" labelledBy="gc-how">
          <Chapter id="gc-how" title={story.how.title} wide>
            <Reveal>
              <p className="voice mx-auto max-w-[34ch] text-[clamp(1.6rem,2.5vw,2.5rem)] leading-[1.1] text-balance md:text-center">
                {story.how.lead}
              </p>
            </Reveal>
            <Progression
              steps={story.how.steps.map((step, i) => ({ ...step, focus: i === PIPELINE_FOCUS }))}
              size="sm"
              className="mt-[9vh]"
            />
            {map ? (
              <Figure
                media={map}
                caption={copy.captions?.[map.id]}
                tone="mist"
                maxHeight="66svh"
                sizes="(max-width: 768px) 100vw, 80vw"
                className="mx-auto mt-[10vh]"
              />
            ) : null}
          </Chapter>

          <Metrics
            size="sm"
            className="mt-[12vh]"
            items={story.how.metrics.map((metric) => ({
              prefix: metric.prefix,
              value: metric.value,
              lines: [metric.caption],
            }))}
          />
        </Band>

        {/* A ciência: método e limites declarados */}
        <Band tone="stone" after="void" labelledBy="gc-science">
          <div
            className="fit-display"
            style={fit(story.science.statement, "min(13rem, 12vw)", 86, "15vw")}
          >
            <RevealLines
              as="h2"
              id="gc-science"
              aria-label={story.science.statement.join(" ")}
              className="display leading-[0.96]"
            >
              <span className="mask-line">
                <span>{story.science.statement[0]}</span>
              </span>
              <span className="mask-line">
                <span className="type-outline" style={delay(110)}>
                  {story.science.statement[1]}
                </span>
              </span>
            </RevealLines>
          </div>

          <div className="mt-[9vh] grid grid-cols-12 gap-x-6 gap-y-12 lg:items-end">
            <div className="col-span-12 lg:col-span-7">
              <InlineFlow steps={story.science.chain} size="sm" />
              <Reveal delay={120}>
                <p className="mt-6 max-w-[48ch] text-lead leading-snug text-ash">
                  {story.science.text}
                </p>
              </Reveal>
            </div>
            <Reveal delay={160} className="col-span-12 lg:col-span-4 lg:col-start-9">
              <p className="voice text-[clamp(1.7rem,2.6vw,2.7rem)] leading-[1.05] italic">
                {story.science.quote}
              </p>
            </Reveal>
          </div>

          {analysis ? (
            <Figure
              media={analysis}
              caption={copy.captions?.[analysis.id]}
              tone="void"
              maxHeight="66svh"
              sizes="(max-width: 768px) 100vw, 80vw"
              className="mx-auto mt-[10vh]"
            />
          ) : null}

          <ol className="mt-[10vh] grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {story.science.limits.map((limit, i) => (
              <li key={limit.title}>
                <Reveal variant="draw" delay={i * 80} className="h-px w-full bg-ink/15" />
                <Reveal delay={i * 80 + 50} className="pt-5 pb-8">
                  <p className="display text-[clamp(1.5rem,2.1vw,2.2rem)] leading-[0.96]">
                    {limit.title}
                  </p>
                  <p className="mt-3 max-w-[30ch] text-[0.9375rem] leading-snug text-ash">
                    {limit.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Band>

        {/* Tecnologia: a arquitetura numa linha e a ficha em colunas */}
        <Band tone="paper" after="stone" labelledBy="gc-technology">
          <Chapter id="gc-technology" title={story.technology.title} wide>
            <p className="label text-ash md:text-center">{story.technology.architectureLabel}</p>
            <div className="mx-auto mt-5 max-w-[68rem] md:text-center">
              <InlineFlow steps={story.technology.architecture} size="xs" />
            </div>
            {item.technologies ? (
              <div className="mt-[9vh]">
                <StackSheet groups={item.technologies} labels={dict.caseStudy.stackGroups} />
              </div>
            ) : null}
          </Chapter>
        </Band>

        {/* Estágio atual: o que já roda de ponta a ponta, e o que ainda não é */}
        <Band tone="void" after="paper" labelledBy="gc-stage">
          <div
            className="fit-display"
            style={fit(story.stage.statement, "min(12rem, 11vw)", 86, "14vw")}
          >
            <RevealLines
              as="h2"
              id="gc-stage"
              lines={story.stage.statement}
              className="display leading-[0.96]"
            />
          </div>

          <div className="mt-[9vh] grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
            <StateList label={story.stage.doesLabel} items={story.stage.does} />
            <StateList label={story.stage.notYetLabel} items={story.stage.notYet} muted />
          </div>

          {working.length > 0 ? (
            <div className="mt-[10vh]">
              <FigureSpread
                images={working}
                captions={copy.captions}
              />
            </div>
          ) : null}

          <Reveal>
            <p className="label mt-[8vh] text-fog md:text-center">{story.stage.roadmap}</p>
          </Reveal>
        </Band>

        {/* Minha atuação, o contexto da SECCO e o próximo case */}
        <Band tone="paper" after="void" label={item.title}>
          <div className="flex flex-col gap-y-[16vh]">
            <Chapter id="gc-role" title={story.role.title} wide>
              <Reveal>
                <p className="voice mx-auto max-w-[28ch] text-voice text-balance md:text-center">
                  {story.role.lead}
                </p>
              </Reveal>
              <ol className="mt-[7vh] grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
                {story.role.items.map((entry, i) => (
                  <li key={entry}>
                    <Reveal variant="draw" delay={i * 60} className="h-px w-full bg-rule" />
                    <Reveal delay={i * 60 + 40} className="flex items-baseline gap-5 py-5">
                      <span className="display text-[clamp(1.4rem,1.9vw,2rem)] leading-[0.96]">
                        {entry}
                      </span>
                    </Reveal>
                  </li>
                ))}
              </ol>
              <Reveal>
                <p className="label mt-10 text-ash md:text-center">{story.role.context}</p>
              </Reveal>
            </Chapter>

            <CaseNext item={item} dict={dict} locale={locale} />
          </div>
        </Band>
      </main>
      <Contact dict={dict} locale={locale} curve="paper" />
    </>
  );
}
