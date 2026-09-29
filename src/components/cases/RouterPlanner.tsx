import { pad } from "@/data/portfolio";
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
import { cn, delay, fit } from "@/lib/cn";
import { figureCounter, imageOf } from "@/lib/media";
import { routes } from "@/lib/routes";
import type { StoryProps } from "./index";

/*
 * O que é estrutura desta história (igual nos três idiomas) fica aqui; o
 * texto fica em `stories["router-planner"]` nos dicionários.
 */
/** "Copiar clientes" e "Separar por abas". */
const MANUAL_STEPS = [2, 3];
/** "Selecionar rota": a decisão que sobra para a pessoa. */
const DECISION_STEP = 2;
/** "Router Planner" no fluxo do sistema. */
const FLOW_FOCUS = 2;
/** "Normalmente cerca de oito ou mais rotas" — o arquivo desenha oito e um "+". */
const ROUTE_TABS = 8;

/** A legenda das abas: a amostra preenchida é a geral, a vazada, cada rota. */
function SheetLegend({ legend }: { legend: readonly string[] }) {
  return (
    <Reveal delay={160}>
      <ul className="flex flex-col gap-3 text-[0.9375rem] leading-snug text-ash">
        {legend.map((line, i) => (
          <li key={line} className="flex items-baseline gap-3">
            <span
              aria-hidden="true"
              className="swatch"
              data-fill={i === 0 ? "" : undefined}
            />
            {line}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/**
 * Router Planner — o primeiro case aprofundado. O ritmo alterna os tons do
 * site (cinza, off-white, preto) e cada troca é a base curva: processo
 * anterior → antes × depois (com a escolha da rota no sistema) → a ideia
 * central → dados certos (com as verificações) → fluxo → resultado → quem
 * fez e com o quê. Cada print entra na seção que fala dele; os que ainda
 * não existem (planilha antiga, arquivo gerado) entram sozinhos quando o
 * arquivo for salvo.
 */
export function RouterPlanner({ item, dict, locale }: StoryProps) {
  const story = dict.stories["router-planner"];
  const copy = dict.cases[item.slug];
  const figure = dict.caseStudy.figure;

  const legacy = imageOf(item.images, "legacy-excel");
  const selection = imageOf(item.images, "route-selection");
  const exported = imageOf(item.images, "export");
  const validation = imageOf(item.images, "validation");
  const next = figureCounter(2);
  const numbers = {
    legacy: next(legacy),
    selection: next(selection),
    exported: next(exported),
    validation: next(validation),
  };

  const before: Step[] = story.compare.beforeSteps.map((label, i) => ({
    label,
    mark: MANUAL_STEPS.includes(i) ? story.compare.manual : undefined,
  }));
  const after: Step[] = story.compare.afterSteps.map((label, i) => ({
    label,
    mark: i === DECISION_STEP ? story.compare.decision : undefined,
    focus: i === DECISION_STEP,
  }));

  return (
    <>
      <main id="content">
        <PageHero
          label={<CaseTags item={item} dict={dict} locale={locale} />}
          meta={item.year}
          title={item.title.split(" ")}
          size="min(24rem, 21vw)"
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
              <CaseLinks item={item} dict={dict} privateLabel={story.code} />
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
            alt={item.title}
            tone="void"
            priority
            maxHeight="70svh"
            sizes="(max-width: 768px) 100vw, 92vw"
            className="mx-auto"
          />
        </div>

        {/* O processo anterior: título em cima, a frase e os números */}
        <Band tone="paper" after="stone" labelledBy="rp-before">
          <Chapter id="rp-before" title={story.before.title}>
            <RevealLines
              as="p"
              lines={[story.before.lead]}
              className="voice text-voice text-balance md:text-center"
            />
            <Reveal delay={140}>
              <p className="mt-6 max-w-[46ch] text-lead leading-snug text-ash md:mx-auto md:text-center">
                {story.before.body}
              </p>
            </Reveal>
          </Chapter>

          {legacy ? (
            <Figure
              media={legacy}
              number={numbers.legacy}
              label={figure}
              caption={copy.captions?.[legacy.id]}
              tone="mist"
              maxHeight="60svh"
              sizes="(max-width: 768px) 100vw, 70vw"
              className="mx-auto mt-[10vh]"
            />
          ) : null}

          <Metrics
            size="lg"
            className="mt-[10vh]"
            items={story.before.metrics.map((metric) => ({
              value: metric.value,
              lines: [metric.caption],
            }))}
          />
          <Reveal>
            <p className="label mt-4 text-ash sm:mt-10">{story.before.note}</p>
          </Reveal>
        </Band>

        {/* Antes × Depois, e a decisão que sobra — ao lado da tela onde ela acontece */}
        <Band tone="void" after="paper" label={story.compare.label}>
          <div className="grid grid-cols-1 gap-y-20 md:grid-cols-[1fr_auto_1fr] md:gap-x-[4vw]">
            <StepList title={story.compare.before} steps={before} />
            <span
              aria-hidden="true"
              className="voice hidden text-[clamp(2.25rem,4.2vw,4rem)] opacity-30 md:block"
            >
              ×
            </span>
            <StepList title={story.compare.after} steps={after} />
          </div>

          <div
            className={cn(
              "mt-[14vh] grid grid-cols-12 gap-x-6 gap-y-12 border-t border-rule-dark pt-10 md:pt-14",
              selection && "lg:items-end",
            )}
          >
            <Reveal className={cn("col-span-12", selection && "lg:col-span-5")}>
              <p className="label text-fog">{story.compare.quote[0]}</p>
              <p
                className={cn(
                  "voice mt-6 leading-[0.98] italic",
                  selection
                    ? "max-w-[14ch] text-[clamp(2.4rem,4.6vw,5rem)]"
                    : "max-w-[16ch] text-[clamp(2.6rem,6.4vw,7rem)]",
                )}
              >
                {story.compare.quote[1]}
              </p>
            </Reveal>
            {selection ? (
              <Figure
                media={selection}
                number={numbers.selection}
                label={figure}
                caption={copy.captions?.[selection.id]}
                tone="mist"
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="col-span-12 lg:col-span-7"
              />
            ) : null}
          </div>
        </Band>

        {/* Excel como saída, não como sistema */}
        <Band tone="stone" after="void" labelledBy="rp-output">
          <div
            className="fit-display"
            style={fit(story.output.statement, "min(16rem, 18vw)")}
          >
            <RevealLines
              as="h2"
              id="rp-output"
              aria-label={story.output.statement.join(" ")}
              className="display leading-[0.96]"
            >
              <span className="mask-line">
                <span>{story.output.statement[0]}</span>
              </span>
              <span className="mask-line">
                <span className="type-outline" style={delay(110)}>
                  {story.output.statement[1]}
                </span>
              </span>
            </RevealLines>
          </div>

          <div className="mt-[8vh] grid grid-cols-12 items-end gap-x-6 gap-y-10">
            <Reveal className="col-span-12 md:col-span-7 lg:col-span-6">
              <p className="voice max-w-[24ch] text-[clamp(1.6rem,2.4vw,2.35rem)] leading-[1.1] text-pretty">
                {story.output.lead}
              </p>
            </Reveal>
            <div className="col-span-12 md:col-span-5 lg:col-span-4 lg:col-start-9">
              <SheetLegend legend={story.output.legend} />
            </div>
          </div>

          <SheetTabs
            label={story.output.file}
            tabs={[
              story.output.general,
              ...Array.from(
                { length: ROUTE_TABS },
                (_, i) => `${story.output.route} ${pad(i + 1)}`,
              ),
            ]}
            more
            className="mt-[8vh]"
          />

          {exported ? (
            <Figure
              media={exported}
              number={numbers.exported}
              label={figure}
              caption={copy.captions?.[exported.id]}
              tone="void"
              maxHeight="60svh"
              sizes="(max-width: 768px) 100vw, 70vw"
              className="mx-auto mt-[10vh]"
            />
          ) : null}
        </Band>

        {/* Dados certos: as verificações ao lado da tela que as mostra; depois, o fluxo */}
        <Band tone="paper" after="stone" labelledBy="rp-data">
          <div
            className="fit-display"
            style={fit(story.data.title, "min(10rem, 9vw)", 86, "13vw")}
          >
            <RevealLines
              as="h2"
              id="rp-data"
              lines={story.data.title}
              className="display leading-[0.96]"
            />
          </div>
          <Reveal>
            <p className="voice mt-8 max-w-[26ch] text-voice text-pretty">
              {story.data.subtitle}
            </p>
          </Reveal>

          <div className="mt-[10vh] grid grid-cols-12 gap-x-6 gap-y-12 lg:items-center">
            <ol className={cn("col-span-12", validation && "lg:col-span-5")}>
              {story.data.checks.map((check, i) => (
                <li key={check.title}>
                  <Reveal variant="draw" delay={i * 90} className="h-px w-full bg-rule" />
                  <Reveal delay={i * 90 + 60} className="flex gap-5 py-6 md:py-7">
                    <span className="meta w-[1.35rem] shrink-0 pt-[0.45em] text-ash">
                      {pad(i + 1)}
                    </span>
                    <div>
                      <h3 className="display text-[clamp(1.75rem,2.6vw,2.6rem)]">
                        {check.title}
                      </h3>
                      <p className="mt-3 max-w-[40ch] text-[0.9375rem] leading-snug text-ash">
                        {check.text}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
              <Reveal variant="draw" className="h-px w-full bg-rule" />
            </ol>
            {validation ? (
              <Figure
                media={validation}
                number={numbers.validation}
                label={figure}
                caption={copy.captions?.[validation.id]}
                tone="mist"
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="col-span-12 lg:col-span-7"
              />
            ) : null}
          </div>

          <div className="mt-[16vh]">
            <Chapter id="rp-flow" title={story.flow.title} wide>
              <Progression
                steps={story.flow.steps.map((step, i) => ({ ...step, focus: i === FLOW_FOCUS }))}
              />
            </Chapter>
          </div>
        </Band>

        {/* Resultado */}
        <Band tone="void" after="paper" labelledBy="rp-result">
          <RevealLines
            as="h2"
            id="rp-result"
            lines={[story.result.title]}
            className="display text-[clamp(1.6rem,2.6vw,2.4rem)]"
          />

          <div className="mt-[6vh] grid grid-cols-12 items-end gap-x-6 gap-y-8">
            <RevealLines
              as="p"
              lines={[story.result.value]}
              className="display col-span-12 text-[31vw] lg:col-span-8 lg:text-[min(22rem,23vw)]"
            />
            <Reveal delay={200} className="col-span-12 lg:col-span-4 lg:pb-[1.5vw]">
              <p className="max-w-[36ch] text-lead leading-snug">{story.result.caption}</p>
              <p className="label mt-5 text-fog">{story.result.note}</p>
            </Reveal>
          </div>

          <ul className="mt-[12vh] grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {story.result.gains.map((gain, i) => (
              <li key={gain}>
                <Reveal variant="draw" delay={i * 80} className="h-px w-full bg-rule-dark" />
                <Reveal delay={i * 80 + 50} className="pt-5 pb-8">
                  <span className="meta text-fog">{pad(i + 1)}</span>
                  <p className="display mt-4 text-[clamp(1.6rem,2.3vw,2.4rem)] leading-[0.96]">
                    {gain}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Band>

        {/* Quem fez e com o quê: títulos em cima, centralizados */}
        <Band tone="paper" after="void" label={item.title}>
          <div className="flex flex-col gap-y-[16vh]">
            <Chapter id="rp-role" title={story.role.title} wide>
              <Reveal>
                <p className="voice mx-auto max-w-[22ch] text-voice text-balance md:text-center">
                  {story.role.lead}
                </p>
              </Reveal>
              <ol className="mt-[7vh] grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                {story.role.items.map((entry, i) => (
                  <li key={entry}>
                    <Reveal variant="draw" delay={i * 70} className="h-px w-full bg-rule" />
                    <Reveal
                      delay={i * 70 + 50}
                      className="flex items-baseline gap-5 py-5 md:py-6"
                    >
                      <span className="meta w-[1.35rem] shrink-0 text-ash">{pad(i + 1)}</span>
                      <span className="display text-[clamp(1.45rem,2vw,2.1rem)] leading-[0.96]">
                        {entry}
                      </span>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </Chapter>

            {item.technologies ? (
              <Chapter id="rp-stack" title={story.stack.title} wide>
                <StackSheet
                  groups={item.technologies}
                  labels={dict.caseStudy.stackGroups}
                  notes={[...story.code, story.stack.access]}
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
