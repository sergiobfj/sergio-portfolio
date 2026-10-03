import { casesAt, findCase, pad, virtronStory } from "@/data/portfolio";
import { Band } from "@/components/case/Band";
import { Figure } from "@/components/case/Figure";
import { InlineFlow } from "@/components/case/Flow";
import { FigureSpread } from "@/components/case/FigureSpread";
import { Metrics } from "@/components/case/Metrics";
import {
  ExperienceHero,
  ExperienceNext,
  type ExperienceStoryProps,
} from "@/components/experience/ExperienceHero";
import { Chapter } from "@/components/layout/Chapter";
import { Contact } from "@/components/sections/Contact";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { RevealLines } from "@/components/ui/RevealLines";
import { CaseGrid } from "@/components/work/CaseGrid";
import { fit } from "@/lib/cn";
import { monthYear, monthYearShort } from "@/lib/dates";
import { routes } from "@/lib/routes";
import { mediaSrc } from "@/lib/media";
import { caseTitle } from "@/lib/work";

/**
 * Virtron — uma trajetória, não uma descrição de vaga. Aprender, entender a
 * operação, construir, colocar no ar e manter. Os cargos são só os
 * oficiais; a fase de responsabilidades ampliadas é dita como foi:
 * temporária, sem cargo novo.
 */
export function VirtronStory({ entry, dict, locale }: ExperienceStoryProps) {
  const copy = dict.experiences.virtron;
  const story = dict.experienceStories.virtron;
  const figure = dict.caseStudy.figure;
  const tool = findCase(virtronStory.firstTool);
  const toolCopy = tool ? dict.cases[tool.slug] : undefined;
  // A primeira ferramenta já tem faixa própria (com a imagem): fora do grid.
  const built = casesAt(entry.company).filter((item) => item.slug !== tool?.slug);
  const promotion = virtronStory.promotion;

  return (
    <>
      <main id="content">
        <ExperienceHero entry={entry} dict={dict} locale={locale} />

        {/* Trajetória: a frase é a protagonista. Embaixo de um filete, uma
            linha de fatos no mesmo peso — os dois cargos formais e, ao lado,
            como o trabalho foi mudando, num fluxo curto. Nada disputa com a
            frase. */}
        <Band tone="paper" after="stone" labelledBy="virtron-intro">
          <Chapter id="virtron-intro" title={story.intro.title} level="section">
            <Reveal>
              <p className="voice text-voice text-balance md:text-center">{story.intro.lead}</p>
            </Reveal>
          </Chapter>

          <div className="mt-[10vh] grid grid-cols-12 gap-x-6 gap-y-12 border-t border-rule pt-8">
            <Reveal className="col-span-12 lg:col-span-4">
              <p className="label text-ash">{story.intro.rolesLabel}</p>
              <ol className="mt-5 flex flex-col gap-3">
                {virtronStory.roles.map((role) => (
                  <li key={role.key} className="flex items-baseline gap-4">
                    <span className="label w-[4.75rem] shrink-0 text-ash">
                      {monthYearShort(role.date, locale)}
                    </span>
                    <span className="display text-[clamp(1.4rem,2vw,2rem)] leading-[0.95]">
                      {story.intro.roles[role.key]}
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
            <div className="col-span-12 lg:col-span-8">
              <p className="label text-ash">{story.intro.evolutionLabel}</p>
              <InlineFlow steps={story.intro.evolution} size="xs" className="mt-5" />
            </div>
          </div>
        </Band>

        {/* O começo. A foto ocupa a coluna livre ao lado do título recuado;
            no celular e no tablet, desce para depois do texto. */}
        <Band tone="void" after="paper" labelledBy="virtron-start">
          <div className="grid grid-cols-12 gap-x-6 gap-y-14">
            <div className="col-span-12 lg:col-start-1 lg:row-start-1">
              <Chapter id="virtron-start" title={story.start.title} inset level="section">
                <Reveal>
                  <p className="voice text-[clamp(1.75rem,3vw,3rem)] leading-[1.08] text-pretty">
                    {story.start.quote}
                  </p>
                </Reveal>
                <Reveal delay={120} className="mt-14">
                  <p className="label text-fog">{story.start.fundamentalsLabel}</p>
                  <ul className="mt-5 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                    {story.start.fundamentals.map((entry, i) => (
                      <li
                        key={entry}
                        className="flex items-baseline gap-5 border-t border-rule-dark py-4 text-[clamp(1.05rem,1.45vw,1.35rem)] leading-snug"
                      >
                        <span className="meta w-[1.35rem] shrink-0 text-fog">{pad(i + 1)}</span>
                        {entry}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-12 max-w-[48ch] text-lead leading-snug text-paper/80">
                    {story.start.ploomes}
                  </p>
                </Reveal>
              </Chapter>
            </div>
            <Figure
              media={virtronStory.startPhoto}
              number={1}
              label={figure}
              caption={copy.captions?.start}
              tone="void"
              sizes="(max-width: 1024px) 60vw, 22vw"
              className="col-span-8 sm:col-span-5 md:col-span-4 lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:self-start"
            />
          </div>
        </Band>

        {/* Primeira ferramenta: o mini-case contado aqui, com link */}
        {tool && toolCopy ? (
          <Band tone="stone" after="void" labelledBy="virtron-first-tool">
            {/* A ferramenta em uso ao lado do título e da pergunta que a criou. */}
            <div className="grid grid-cols-12 gap-x-6 gap-y-10">
              <div className="col-span-12 lg:col-span-8">
                <p className="label text-ash">{story.firstTool.label}</p>
                <RevealLines
                  as="h2"
                  id="virtron-first-tool"
                  lines={[caseTitle(tool, dict)]}
                  className="display mt-5 text-[clamp(3rem,7.4vw,8rem)] leading-[0.96]"
                />
                {toolCopy.headline ? (
                  <Reveal delay={120}>
                    <p className="voice mt-8 max-w-[30ch] text-voice text-pretty">
                      {toolCopy.headline}
                    </p>
                  </Reveal>
                ) : null}
              </div>
              {mediaSrc(tool.media) ? (
                <Reveal
                  variant="clip"
                  className="col-span-10 sm:col-span-7 lg:col-span-4 lg:col-start-9 lg:self-end"
                >
                  {/* 4:3 com o foco no alto: a janela e os ícones, sem o preto de baixo. */}
                  <MediaFrame
                    media={{ ...tool.media, ratio: "4 / 3", position: "50% 16%" }}
                    alt={caseTitle(tool, dict)}
                    sizes="(max-width: 1024px) 80vw, 30vw"
                    className="bg-black"
                  />
                </Reveal>
              ) : null}
            </div>
            {toolCopy.metrics?.length ? (
              <Metrics
                size="lg"
                className="mt-[10vh]"
                items={toolCopy.metrics.map((metric) => ({
                  value: metric.value,
                  lines: [metric.caption],
                }))}
              />
            ) : null}
            <Reveal className="mt-4 flex flex-wrap items-center justify-between gap-6 sm:mt-10">
              {toolCopy.metricsNote ? (
                <p className="label text-ash">{toolCopy.metricsNote}</p>
              ) : null}
              <ArrowLink href={routes.case(locale, tool)} label={story.firstTool.cta} />
            </Reveal>
          </Band>
        ) : null}

        {/* A promoção e a fase seguinte */}
        <Band tone="paper" after={tool ? "stone" : "void"} labelledBy="virtron-promotion">
          <p className="label text-ash">{monthYear(promotion.date, locale)}</p>
          <div
            className="fit-display mt-6"
            style={fit(story.promotion.title, "min(12rem, 11vw)", 86, "15vw")}
          >
            <RevealLines
              as="h2"
              id="virtron-promotion"
              lines={story.promotion.title}
              className="display leading-[0.96]"
            />
          </div>
          <div className="mt-[8vh]">
            <FigureSpread
              images={promotion.images}
              captions={copy.captions}
              label={figure}
              start={2}
            />
          </div>

          {/* Título e data em cima, centralizados; a frase e o "hoje" num bloco
              central — sem coluna lateral vazia. */}
          <section aria-labelledby="virtron-scope" className="mt-[16vh] md:text-center">
            <RevealLines
              as="h2"
              id="virtron-scope"
              lines={[story.broaderScope.title]}
              className="display text-chapter leading-[0.92] text-balance"
            />
            <p className="label mt-4 text-ash">{monthYear(virtronStory.broaderScope, locale)}</p>
            <div className="mx-auto mt-[5vh] max-w-[58rem]">
              <Reveal>
                <p className="voice text-[clamp(1.75rem,2.9vw,2.85rem)] leading-[1.06] text-balance">
                  {story.broaderScope.text}
                </p>
              </Reveal>
              <Reveal delay={120} className="mt-10 border-t border-rule pt-6">
                <p className="label text-ash">{story.broaderScope.todayLabel}</p>
                <p className="mt-3 max-w-[46ch] text-lead leading-snug md:mx-auto">
                  {story.broaderScope.today}
                </p>
              </Reveal>
            </div>
          </section>
        </Band>

        {/* O que foi construído aqui: continua o off-white da promoção, sem curva */}
        <Band tone="paper" labelledBy="virtron-built">
          <Chapter id="virtron-built" title={dict.experience.built} wide level="section">
            <CaseGrid items={built} dict={dict} locale={locale} context="category" />
          </Chapter>
        </Band>

        {/* Fechamento */}
        <Band tone="stone" after="paper" labelledBy="virtron-closing">
          <div
            className="fit-display"
            style={fit(story.closing.statement, "min(12rem, 10vw)", 86, "14vw")}
          >
            <RevealLines
              as="h2"
              id="virtron-closing"
              lines={story.closing.statement}
              className="display leading-[0.96]"
            />
          </div>
          <Reveal delay={140}>
            <p className="voice mt-10 max-w-[34ch] text-[clamp(1.6rem,2.4vw,2.35rem)] leading-[1.1] text-pretty">
              {story.closing.text}
            </p>
          </Reveal>
          <ExperienceNext entry={entry} dict={dict} locale={locale} className="mt-[16vh]" />
        </Band>
      </main>
      <Contact dict={dict} locale={locale} curve="stone" />
    </>
  );
}
