import { Band } from "@/components/case/Band";
import { CaseLinks, CaseTags } from "@/components/case/CaseMeta";
import { CaseNext } from "@/components/case/CaseNext";
import { Figure } from "@/components/case/Figure";
import { Progression, StepList, type Step } from "@/components/case/Flow";
import { Metrics } from "@/components/case/Metrics";
import { SheetTabs } from "@/components/case/SheetTabs";
import { StackSheet } from "@/components/case/StackSheet";
import { Chapter } from "@/components/layout/Chapter";
import { PageHero } from "@/components/layout/PageHero";
import { Contact } from "@/components/sections/Contact";
import { BackLink } from "@/components/ui/BackLink";
import { Reveal } from "@/components/ui/Reveal";
import { RevealLines } from "@/components/ui/RevealLines";
import { delay, fit } from "@/lib/cn";
import { imageOf } from "@/lib/media";
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
const ANSWER_STEP = 2;
/** As duas camadas na mesma régua: quatro colunas, a mais longa. */
const LAYER_COLUMNS = 4;

/**
 * Bot de Vendas — o bot e o BI comercial como um ecossistema só, com uma
 * separação que precisa ficar clara: notificações e BI conversacional
 * consultam o Ploomes direto; o ETL (Google Sheets e Looker) é uma camada
 * paralela. No centro, o BI conversacional: a IA interpreta, o código calcula.
 */
export function BotDeVendas({ item, dict, locale }: StoryProps) {
  const story = dict.stories["bot-de-vendas"];
  const copy = dict.cases[item.slug];
  const title = caseTitle(item, dict);
  const sale = imageOf(item.images, "telegram-sale");
  const privateLabel = [dict.caseStudy.internal, dict.caseStudy.privateCode];
  const conversational = story.conversational;

  const interpret: Step[] = conversational.interpret.steps.map((label, i) => ({
    label,
    mark: i === FALLBACK_STEP ? conversational.fallbackMark : undefined,
  }));
  const compute: Step[] = conversational.compute.steps.map((label, i) => ({
    label,
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
            alt={title}
            tone="void"
            priority
            maxHeight="70svh"
            sizes="(max-width: 768px) 100vw, 92vw"
            className="mx-auto"
          />
        </div>

        {/* O problema */}
        <Band tone="paper" after="stone" labelledBy="jc-problem">
          <Chapter id="jc-problem" title={story.problem.title}>
            <RevealLines
              as="p"
              lines={story.problem.lead}
              className="voice text-voice text-balance md:text-center"
            />
            <Reveal delay={140}>
              <p className="mt-6 max-w-[48ch] text-lead leading-snug text-ash md:mx-auto md:text-center">
                {story.problem.body}
              </p>
            </Reveal>
          </Chapter>
        </Band>

        {/* Como funciona: uma fonte, duas camadas — cada uma na sua linha */}
        <Band tone="void" after="paper" labelledBy="jc-layers">
          <Chapter id="jc-layers" title={story.layers.title} wide>
            <Reveal>
              <p className="voice text-voice md:text-center">{story.layers.lead}</p>
            </Reveal>

            <ol className="mt-[8vh]">
              {story.layers.items.map((layer, i) => (
                <li key={layer.title}>
                  <Reveal variant="draw" delay={i * 90} className="h-px w-full bg-rule-dark" />
                  <div className="grid grid-cols-12 gap-x-6 gap-y-8 py-10 md:py-12">
                    <Reveal delay={i * 90 + 60} className="col-span-12 lg:col-span-3">
                      <h3 className="display text-[clamp(1.9rem,2.8vw,2.9rem)] leading-[0.95]">
                        {layer.title}
                      </h3>
                      <p className="mt-4 max-w-[30ch] text-[0.9375rem] leading-snug text-paper/75">
                        {layer.text}
                      </p>
                    </Reveal>
                    <div className="col-span-12 lg:col-span-9 lg:pt-[2.1rem]">
                      <Progression steps={layer.steps} size="sm" columns={LAYER_COLUMNS} />
                      {i === story.layers.items.length - 1 ? (
                        <SheetTabs
                          label={story.layers.sheetsLabel}
                          tabs={story.layers.sheets}
                          className="mt-10"
                        />
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <Reveal variant="draw" className="h-px w-full bg-rule-dark" />
          </Chapter>
        </Band>

        {/* Notificações: a lista ao lado da notificação de verdade */}
        <Band tone="stone" after="void" labelledBy="jc-notifications">
          <div className="grid grid-cols-12 gap-x-6 gap-y-14 md:items-center">
            <div className="col-span-12 md:col-span-6">
              <RevealLines
                as="h2"
                id="jc-notifications"
                lines={[story.notifications.title]}
                className="display text-[clamp(2.4rem,4.4vw,4.6rem)]"
              />
              <Reveal delay={100}>
                <p className="voice mt-6 max-w-[22ch] text-voice text-pretty">
                  {story.notifications.lead}
                </p>
              </Reveal>
              <Reveal delay={160}>
                <ol className="mt-10">
                  {story.notifications.items.map((entry) => (
                    <li
                      key={entry}
                      className="flex items-baseline gap-5 border-t border-ink/15 py-4 text-[clamp(1.05rem,1.45vw,1.35rem)] leading-snug"
                    >
                      {entry}
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
            {sale ? (
              <Figure
                media={sale}
                caption={copy.captions?.[sale.id]}
                tone="void"
                sizes="(max-width: 768px) 100vw, 40vw"
                className="col-span-12 md:col-span-5 md:col-start-8"
              />
            ) : null}
          </div>
        </Band>

        {/* BI conversacional: as perguntas, a ideia central e o caminho da resposta */}
        <Band tone="void" after="stone" labelledBy="jc-conversational">
          <Chapter id="jc-conversational" title={conversational.title} wide>
            <Reveal>
              <p className="voice text-voice md:text-center">{conversational.lead}</p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="mx-auto mt-[7vh] flex max-w-[64rem] flex-wrap gap-x-[0.6em] gap-y-2 md:justify-center">
                {conversational.questions.map((q) => (
                  <li
                    key={q}
                    className="voice text-[clamp(1.6rem,3vw,3.1rem)] leading-[1.05] italic opacity-85"
                  >
                    “{q}”
                  </li>
                ))}
              </ul>
            </Reveal>
          </Chapter>

          <div
            className="fit-display mt-[14vh]"
            style={fit(conversational.statement, "min(14rem, 13vw)", 86, "16vw")}
          >
            <RevealLines
              as="p"
              aria-label={conversational.statement.join(" ")}
              className="display leading-[0.96]"
            >
              <span className="mask-line">
                <span className="type-outline">{conversational.statement[0]}</span>
              </span>
              <span className="mask-line">
                <span style={delay(110)}>{conversational.statement[1]}</span>
              </span>
            </RevealLines>
          </div>
          <Reveal>
            <p className="mt-8 max-w-[52ch] text-lead leading-snug text-paper/80">
              {conversational.explain}
            </p>
          </Reveal>

          {/* O caminho partido em dois: o que interpreta e o que calcula */}
          <div className="mt-[10vh] grid grid-cols-1 gap-x-[4vw] gap-y-16 md:grid-cols-2">
            <StepList
              title={conversational.interpret.title}
              steps={interpret}
              size="sm"
              className="border-t border-rule-dark pt-6"
            />
            <StepList
              title={conversational.compute.title}
              steps={compute}
              size="sm"
              start={interpret.length + 1}
              className="border-t border-rule-dark pt-6"
            />
          </div>

          <Metrics
            size="md"
            className="mt-[12vh]"
            items={conversational.highlights.map((h) => ({ value: h.value, lines: [h.caption] }))}
          />
        </Band>

        {/* O que dá para perguntar, impacto, ficha técnica */}
        <Band tone="paper" after="void" label={title}>
          <div className="flex flex-col gap-y-[16vh]">
            <Chapter id="jc-coverage" title={story.coverage.title}>
              <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
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
                          className="display border-t border-rule py-3 text-[clamp(1.5rem,2.2vw,2.1rem)]"
                        >
                          {entry}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>
              <Reveal>
                <p className="label mt-8 text-ash md:text-center">{story.coverage.note}</p>
              </Reveal>
            </Chapter>

            <Chapter id="jc-impact" title={story.impact.title} wide>
              <ul className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
                {story.impact.items.map((entry, i) => (
                  <li key={entry}>
                    <Reveal variant="draw" delay={i * 80} className="h-px w-full bg-rule" />
                    <Reveal delay={i * 80 + 50} className="pt-5 pb-8">
                      <p className="display text-[clamp(1.6rem,2.3vw,2.4rem)] leading-[0.96]">
                        {entry}
                      </p>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </Chapter>

            {item.technologies ? (
              <Chapter id="jc-stack" title={story.stack.title} wide>
                <StackSheet
                  groups={item.technologies}
                  labels={dict.caseStudy.stackGroups}
                  notes={[...privateLabel, story.stack.status]}
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
