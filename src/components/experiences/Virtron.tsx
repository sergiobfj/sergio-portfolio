import { casesAt, findCase, pad, virtronStory } from "@/data/portfolio";
import { Band } from "@/components/case/Band";
import { Progression, StepList } from "@/components/case/Flow";
import { Gallery } from "@/components/case/Gallery";
import { Metrics } from "@/components/case/Metrics";
import {
  ExperienceHero,
  ExperienceNext,
  type ExperienceStoryProps,
} from "@/components/experience/ExperienceHero";
import { Chapter } from "@/components/layout/Chapter";
import { Contact } from "@/components/sections/Contact";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";
import { RevealLines } from "@/components/ui/RevealLines";
import { CaseGrid } from "@/components/work/CaseGrid";
import { fit } from "@/lib/cn";
import { monthYear, monthYearShort } from "@/lib/dates";
import { routes } from "@/lib/routes";
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
  const built = casesAt(entry.company);
  const promotion = virtronStory.promotion;

  return (
    <>
      <main id="content">
        <ExperienceHero entry={entry} dict={dict} locale={locale} />

        {/* Trajetória: a frase, os cargos formais e como o trabalho mudou */}
        <Band tone="paper" after="stone" labelledBy="virtron-intro">
          <Chapter id="virtron-intro" title={story.intro.title}>
            <Reveal>
              <p className="voice text-voice text-pretty">{story.intro.lead}</p>
            </Reveal>
            <Reveal delay={140} className="mt-14">
              <p className="label text-ash">{story.intro.rolesLabel}</p>
              <ol className="mt-5">
                {virtronStory.roles.map((role) => (
                  <li
                    key={role.key}
                    className="flex flex-wrap items-baseline gap-x-8 gap-y-2 border-t border-rule py-4 md:py-5"
                  >
                    <span className="label w-[7rem] shrink-0 text-ash">
                      {monthYearShort(role.date, locale)}
                    </span>
                    <span className="display text-[clamp(1.75rem,3vw,3rem)]">
                      {story.intro.roles[role.key]}
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </Chapter>

          <div className="mt-[14vh]">
            <p className="label text-ash">{story.intro.evolutionLabel}</p>
            <Progression steps={story.intro.evolution} className="mt-8" />
          </div>
        </Band>

        {/* O começo */}
        <Band tone="void" after="paper" labelledBy="virtron-start">
          <Chapter id="virtron-start" title={story.start.title} inset>
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
        </Band>

        {/* Primeira ferramenta: o mini-case contado aqui, com link */}
        {tool && toolCopy ? (
          <Band tone="stone" after="void" labelledBy="virtron-first-tool">
            <p className="label text-ash">{story.firstTool.label}</p>
            <RevealLines
              as="h2"
              id="virtron-first-tool"
              lines={[caseTitle(tool, dict)]}
              className="display mt-5 text-[clamp(3rem,8vw,8rem)] leading-[0.96]"
            />
            {toolCopy.headline ? (
              <Reveal delay={120}>
                <p className="voice mt-8 max-w-[30ch] text-voice text-pretty">
                  {toolCopy.headline}
                </p>
              </Reveal>
            ) : null}
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
            <Gallery
              images={promotion.images}
              captions={copy.captions}
              label={figure}
              start={1}
            />
          </div>

          <div className="mt-[16vh]">
            <Chapter id="virtron-scope" title={story.broaderScope.title}>
              <p className="label text-ash">{monthYear(virtronStory.broaderScope, locale)}</p>
              <Reveal>
                <p className="voice mt-5 text-[clamp(1.6rem,2.4vw,2.35rem)] leading-[1.1] text-pretty">
                  {story.broaderScope.text}
                </p>
              </Reveal>
              <Reveal delay={120} className="mt-12 border-t border-rule pt-6">
                <p className="label text-ash">{story.broaderScope.todayLabel}</p>
                <p className="mt-4 max-w-[48ch] text-lead leading-snug">
                  {story.broaderScope.today}
                </p>
              </Reveal>
            </Chapter>
          </div>
        </Band>

        {/* Do código à infraestrutura */}
        <Band tone="void" after="paper" labelledBy="virtron-infra">
          <RevealLines
            as="h2"
            id="virtron-infra"
            lines={[story.infrastructure.title]}
            className="display text-[clamp(1.6rem,2.6vw,2.4rem)]"
          />
          <div
            className="fit-display mt-[6vh]"
            style={fit(story.infrastructure.statement, "min(10rem, 8vw)", 86, "12vw")}
          >
            <RevealLines
              as="p"
              lines={story.infrastructure.statement}
              className="display leading-[0.96]"
            />
          </div>

          <div className="mt-[10vh] grid grid-cols-12 gap-x-6 gap-y-14">
            <div className="col-span-12 md:col-span-5">
              <Reveal>
                <p className="max-w-[40ch] text-lead leading-snug text-paper/80">
                  {story.infrastructure.text}
                </p>
              </Reveal>
              <Reveal delay={120} className="mt-10">
                <p className="label text-fog">{story.infrastructure.stackLabel}</p>
                <p className="display mt-4 flex flex-wrap gap-x-[0.5em] text-[clamp(1.6rem,2.6vw,2.5rem)] leading-[0.95]">
                  {story.infrastructure.stack.map((tech, i) => (
                    <span key={tech} className="whitespace-nowrap">
                      {i > 0 ? (
                        <span aria-hidden="true" className="mr-[0.5em] opacity-30">
                          /
                        </span>
                      ) : null}
                      {tech}
                    </span>
                  ))}
                </p>
              </Reveal>
            </div>
            <StepList
              steps={story.infrastructure.steps.map((label) => ({ label }))}
              className="col-span-12 md:col-span-6 md:col-start-7"
            />
          </div>
        </Band>

        {/* O que foi construído aqui, e as fotos */}
        <Band tone="paper" after="void" labelledBy="virtron-built">
          <Chapter id="virtron-built" title={dict.experience.built} wide>
            <CaseGrid items={built} dict={dict} locale={locale} context="category" />
          </Chapter>

          {entry.gallery.length > 0 ? (
            <div className="mt-[16vh]">
              <Chapter id="virtron-gallery" title={dict.experience.gallery} wide>
                <Gallery
                  images={entry.gallery}
                  captions={copy.captions}
                  label={figure}
                  start={promotion.images.length + 1}
                />
              </Chapter>
            </div>
          ) : null}
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
