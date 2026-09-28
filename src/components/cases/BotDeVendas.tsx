import { pad } from "@/data/portfolio";
import { Band } from "@/components/case/Band";
import { CaseLinks, CaseTags } from "@/components/case/CaseMeta";
import { CaseNext } from "@/components/case/CaseNext";
import { Figure } from "@/components/case/Figure";
import { InlineFlow, StepList, type Step } from "@/components/case/Flow";
import { Gallery } from "@/components/case/Gallery";
import { SheetTabs } from "@/components/case/SheetTabs";
import { StackSheet } from "@/components/case/StackSheet";
import { Chapter } from "@/components/layout/Chapter";
import { PageHero } from "@/components/layout/PageHero";
import { Contact } from "@/components/sections/Contact";
import { BackLink } from "@/components/ui/BackLink";
import { Reveal } from "@/components/ui/Reveal";
import { RevealLines } from "@/components/ui/RevealLines";
import { delay, fit } from "@/lib/cn";
import { routes } from "@/lib/routes";
import { caseTitle, titleLines } from "@/lib/work";
import type { StoryProps } from "./index";

/*
 * Estrutura desta história (igual nos três idiomas); o texto fica em
 * `stories["bot-de-vendas"]`. Nenhum ID interno, token, chat ou nome de
 * pessoa — nem aqui, nem no texto.
 */
/** "Fallback LLM": o único passo que não é determinístico. */
const FALLBACK_STEP = 2;
/** "Resposta determinística": onde a história se decide. */
const ANSWER_STEP = 6;
/** Figuras que aparecem no meio da história; o resto vai para a galeria. */
const INLINE = ["telegram-sale", "telegram-question"];

/**
 * Bot de Vendas — o bot e o BI comercial como um ecossistema
 * só. Do problema original (export mensal) aos três pilares, com o BI
 * conversacional no centro: a IA interpreta, o código calcula.
 */
export function BotDeVendas({ item, dict, locale }: StoryProps) {
  const story = dict.stories["bot-de-vendas"];
  const copy = dict.cases[item.slug];
  const figure = dict.caseStudy.figure;
  const title = caseTitle(item, dict);
  const images = item.images ?? [];
  const inline = (id: string) => images.find((image) => image.id === id);
  const sale = inline("telegram-sale");
  const question = inline("telegram-question");
  const gallery = images.filter((image) => !INLINE.includes(image.id));
  const privateLabel = [dict.caseStudy.internal, dict.caseStudy.privateCode];

  const flow: Step[] = story.conversational.flow.map((label, i) => ({
    label,
    mark: i === FALLBACK_STEP ? story.conversational.fallbackMark : undefined,
    focus: i === ANSWER_STEP,
  }));

  return (
    <>
      <main id="content">
        <PageHero
          label={<CaseTags item={item} dict={dict} locale={locale} />}
          meta={item.year}
          title={titleLines(title)}
          voice={
            <p className="voice text-[clamp(1.6rem,2.7vw,2.75rem)] leading-[1.04]">
              {story.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          }
          aside={
            <>
              <CaseLinks item={item} dict={dict} privateLabel={privateLabel} />
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
            number={1}
            label={figure}
            alt={title}
            tone="void"
            priority
            maxHeight="70svh"
            sizes="(max-width: 768px) 100vw, 92vw"
            className="mx-auto"
          />
        </div>

        {/* O problema original */}
        <Band tone="paper" after="stone" labelledBy="jc-origin">
          <Chapter id="jc-origin" title={story.origin.title}>
            <RevealLines as="p" lines={[story.origin.lead]} className="voice text-voice" />
            <Reveal delay={140}>
              <p className="mt-8 max-w-[48ch] text-lead leading-snug text-ash">
                {story.origin.body}
              </p>
            </Reveal>
            <InlineFlow steps={story.origin.steps} size="sm" className="mt-12" />
          </Chapter>

          <Reveal className="mt-[14vh] border-t border-rule pt-10 md:pt-14">
            <p className="label text-ash">{story.origin.goalLabel}</p>
            <p className="voice mt-6 text-[clamp(2.4rem,5.6vw,6rem)] leading-[1] italic">
              {story.origin.goal.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </Reveal>
        </Band>

        {/* Três pilares */}
        <Band tone="void" after="paper" labelledBy="jc-pillars">
          <div className="fit-display" style={fit(story.pillars.title, "min(10rem, 8vw)", 86, "12vw")}>
            <RevealLines
              as="h2"
              id="jc-pillars"
              lines={story.pillars.title}
              className="display leading-[0.96]"
            />
          </div>

          <div className="mt-[10vh] grid grid-cols-1 gap-x-[4vw] gap-y-16 md:grid-cols-3">
            {story.pillars.items.map((pillar, i) => (
              <StepList
                key={pillar.title}
                eyebrow={pad(i + 1)}
                title={pillar.title}
                steps={pillar.steps.map((label) => ({ label }))}
                size="sm"
                className="border-t border-rule-dark pt-6"
              />
            ))}
          </div>
        </Band>

        {/* Pipeline */}
        <Band tone="paper" after="void" labelledBy="jc-pipeline">
          <Chapter id="jc-pipeline" title={story.pipeline.title}>
            <Reveal>
              <p className="voice text-voice text-pretty">{story.pipeline.lead}</p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-[48ch] text-lead leading-snug text-ash">
                {story.pipeline.body}
              </p>
            </Reveal>
          </Chapter>
          <SheetTabs
            label={story.pipeline.sheetsLabel}
            tabs={story.pipeline.sheets}
            className="mt-[9vh]"
          />
        </Band>

        {/* Notificações */}
        <Band tone="stone" after="paper" labelledBy="jc-notifications">
          <div className="grid grid-cols-12 gap-x-6 gap-y-14">
            <div className="col-span-12 md:col-span-6">
              <RevealLines
                as="h2"
                id="jc-notifications"
                lines={[story.notifications.title]}
                className="display text-[clamp(1.6rem,2.6vw,2.4rem)]"
              />
              <Reveal delay={100}>
                <p className="voice mt-8 max-w-[22ch] text-voice text-pretty">
                  {story.notifications.lead}
                </p>
              </Reveal>
              <Reveal delay={160}>
                <ol className="mt-10">
                  {story.notifications.items.map((entry, i) => (
                    <li
                      key={entry}
                      className="flex items-baseline gap-5 border-t border-ink/15 py-4 text-[clamp(1.05rem,1.45vw,1.35rem)] leading-snug"
                    >
                      <span className="meta w-[1.35rem] shrink-0 text-ash">{pad(i + 1)}</span>
                      {entry}
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
            {sale ? (
              <Figure
                media={sale}
                number={2}
                label={figure}
                caption={copy.captions?.[sale.id]}
                tone="void"
                sizes="(max-width: 768px) 100vw, 40vw"
                className="col-span-12 md:col-span-5 md:col-start-8"
              />
            ) : null}
          </div>
        </Band>

        {/* BI conversacional */}
        <Band tone="void" after="stone" labelledBy="jc-conversational">
          <RevealLines
            as="h2"
            id="jc-conversational"
            lines={[story.conversational.title]}
            className="display text-[clamp(1.6rem,2.6vw,2.4rem)]"
          />
          <Reveal delay={100}>
            <p className="voice mt-8 max-w-[24ch] text-voice">{story.conversational.lead}</p>
          </Reveal>

          <Reveal delay={140}>
            <ul className="mt-[8vh] flex flex-col gap-3">
              {story.conversational.questions.map((q) => (
                <li
                  key={q}
                  className="voice text-[clamp(1.9rem,4vw,4.25rem)] leading-[1.02] italic"
                >
                  “{q}”
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-[12vh] grid grid-cols-12 gap-x-6 gap-y-14">
            <div className="col-span-12 md:col-span-7">
              <p className="label mb-6 text-fog">{story.conversational.flowLabel}</p>
              <StepList steps={flow} />
            </div>
            {question ? (
              <Figure
                media={question}
                number={3}
                label={figure}
                caption={copy.captions?.[question.id]}
                tone="mist"
                sizes="(max-width: 768px) 100vw, 40vw"
                className="col-span-12 md:col-span-5 md:col-start-8"
              />
            ) : null}
          </div>

          <div
            className="fit-display mt-[14vh]"
            style={fit(story.conversational.statement, "min(14rem, 13vw)", 86, "16vw")}
          >
            <RevealLines
              as="p"
              aria-label={story.conversational.statement.join(" ")}
              className="display leading-[0.96]"
            >
              <span className="mask-line">
                <span className="type-outline">{story.conversational.statement[0]}</span>
              </span>
              <span className="mask-line">
                <span style={delay(110)}>{story.conversational.statement[1]}</span>
              </span>
            </RevealLines>
          </div>
          <Reveal>
            <p className="mt-10 max-w-[52ch] text-lead leading-snug text-paper/80">
              {story.conversational.explain}
            </p>
          </Reveal>

          <div className="mt-[12vh] grid grid-cols-12 gap-x-6 gap-y-14">
            <div className="col-span-12 lg:col-span-7">
              <p className="label text-fog">{story.conversational.strategyLabel}</p>
              <Reveal>
                <ol className="mt-5">
                  {story.conversational.strategy.map((line, i) => (
                    <li
                      key={line}
                      className="flex items-baseline gap-5 border-t border-rule-dark py-5 text-[clamp(1.05rem,1.45vw,1.35rem)] leading-snug"
                    >
                      <span className="meta w-[1.35rem] shrink-0 text-fog">{pad(i + 1)}</span>
                      {line}
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
            <div className="col-span-12 flex flex-col gap-12 lg:col-span-4 lg:col-start-9">
              <Reveal>
                <p className="label text-fog">{story.conversational.gainsLabel}</p>
                <ul className="mt-5 flex flex-col gap-2">
                  {story.conversational.gains.map((gain) => (
                    <li key={gain} className="display text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[0.95]">
                      {gain}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={120}>
                <p className="label text-fog">{story.conversational.followUpsLabel}</p>
                <ul className="mt-5 flex flex-col gap-2">
                  {story.conversational.followUps.map((q) => (
                    <li key={q} className="voice text-[clamp(1.5rem,2.2vw,2.1rem)] italic">
                      “{q}”
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          <Reveal className="mt-[12vh] grid grid-cols-12 items-end gap-x-6 gap-y-6 border-t border-rule-dark pt-10">
            <p className="label col-span-12 text-fog md:col-span-3">{story.audio.title}</p>
            <p className="display col-span-12 text-[clamp(3.5rem,8vw,8rem)] md:col-span-4">
              {story.audio.value}
            </p>
            <p className="col-span-12 max-w-[40ch] text-lead leading-snug text-paper/80 md:col-span-5">
              {story.audio.text}
            </p>
          </Reveal>
        </Band>

        {/* Cobertura, impacto, ficha técnica, galeria */}
        <Band tone="paper" after="void" label={title}>
          <div className="flex flex-col gap-y-[16vh]">
            <Chapter id="jc-coverage" title={story.coverage.title}>
              <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
                {[
                  { label: story.coverage.metricsLabel, items: story.coverage.metrics },
                  { label: story.coverage.filtersLabel, items: story.coverage.filters },
                ].map((list, i) => (
                  <Reveal key={list.label} delay={i * 100}>
                    <p className="label text-ash">{list.label}</p>
                    <ul className="mt-5">
                      {list.items.map((entry) => (
                        <li
                          key={entry}
                          className="display border-t border-rule py-3 text-[clamp(1.5rem,2.4vw,2.25rem)]"
                        >
                          {entry}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>
              <Reveal>
                <p className="label mt-8 text-ash">{story.coverage.note}</p>
              </Reveal>
            </Chapter>

            <Chapter id="jc-impact" title={story.impact.title}>
              <ul>
                {story.impact.items.map((entry, i) => (
                  <li key={entry}>
                    <Reveal variant="draw" delay={i * 60} className="h-px w-full bg-rule" />
                    <Reveal
                      delay={i * 60 + 40}
                      className="flex items-baseline gap-5 py-4 md:gap-8 md:py-5"
                    >
                      <span className="meta w-[1.35rem] shrink-0 text-ash">{pad(i + 1)}</span>
                      <span className="display text-[clamp(1.5rem,2.8vw,2.75rem)]">{entry}</span>
                    </Reveal>
                  </li>
                ))}
              </ul>
              <Reveal variant="draw" className="h-px w-full bg-rule" />
            </Chapter>

            {item.technologies ? (
              <Chapter id="jc-stack" title={story.stack.title}>
                <StackSheet
                  groups={item.technologies}
                  labels={dict.caseStudy.stackGroups}
                  notes={[privateLabel.join(" · "), story.stack.status]}
                />
              </Chapter>
            ) : null}

            {gallery.length > 0 ? (
              <Chapter id="jc-gallery" title={dict.caseStudy.gallery} wide>
                <Gallery
                  images={gallery}
                  captions={copy.captions}
                  label={figure}
                  start={4}
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
