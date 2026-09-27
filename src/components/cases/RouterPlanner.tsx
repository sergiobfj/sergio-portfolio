import { pad } from "@/data/portfolio";
import { Band } from "@/components/case/Band";
import { CaseLinks, CaseTags } from "@/components/case/CaseMeta";
import { CaseNext } from "@/components/case/CaseNext";
import { Figure } from "@/components/case/Figure";
import { InlineFlow, StepList, type Step } from "@/components/case/Flow";
import { Gallery } from "@/components/case/Gallery";
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
import { routes } from "@/lib/routes";
import type { StoryProps } from "./index";

/*
 * O que é estrutura desta história (igual nos três idiomas) fica aqui; o
 * texto fica em `stories["router-planner"]` nos dicionários.
 */
/** "Copiar clientes" e "Separar manualmente por abas". */
const MANUAL_STEPS = [2, 3];
/** "Selecionar rota": a decisão que sobra para a pessoa. */
const DECISION_STEP = 2;
/** "Router Planner" no fluxo do sistema. */
const FLOW_FOCUS = 4;
/** "Normalmente cerca de oito ou mais rotas" — o arquivo desenha oito e um "+". */
const ROUTE_TABS = 8;

/** A legenda das abas: a amostra preenchida é a geral, a vazada, cada rota. */
function SheetLegend({ legend }: { legend: readonly string[] }) {
  return (
    <Reveal delay={160}>
      <ul className="flex flex-col gap-3 text-[0.9375rem] leading-snug text-ash md:pt-3">
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
 * anterior → antes × depois → a ideia central → dados → resultado → quem
 * fez e com o quê.
 */
export function RouterPlanner({ item, dict, locale }: StoryProps) {
  const story = dict.stories["router-planner"];
  const copy = dict.cases[item.slug];
  const figure = dict.caseStudy.figure;

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
            sizes="(max-width: 768px) 100vw, 92vw"
          />
        </div>

        {/* O processo anterior */}
        <Band tone="paper" after="stone" labelledBy="rp-before">
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <RevealLines
              as="h2"
              id="rp-before"
              lines={[story.before.title]}
              className="display col-span-12 text-[clamp(1.6rem,2.6vw,2.4rem)] lg:col-span-4"
            />
            <div className="col-span-12 lg:col-span-8">
              <RevealLines
                as="p"
                lines={[story.before.lead]}
                className="voice text-voice text-pretty"
              />
              <Reveal delay={140}>
                <p className="mt-8 max-w-[46ch] text-lead leading-snug text-ash">
                  {story.before.body}
                </p>
              </Reveal>
            </div>
          </div>

          <Metrics
            size="lg"
            className="mt-[12vh]"
            items={story.before.metrics.map((metric) => ({
              value: metric.value,
              lines: [metric.caption],
            }))}
          />
          <Reveal>
            <p className="label mt-4 text-ash sm:mt-10">{story.before.note}</p>
          </Reveal>
        </Band>

        {/* Antes × Depois */}
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

          <Reveal className="mt-[14vh] border-t border-rule-dark pt-10 md:pt-14">
            <p className="label text-fog">{story.compare.quote[0]}</p>
            <p className="voice mt-6 max-w-[16ch] text-[clamp(2.6rem,6.4vw,7rem)] leading-[0.98] italic">
              {story.compare.quote[1]}
            </p>
          </Reveal>
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

          <div className="mt-[10vh] grid grid-cols-12 gap-x-6 gap-y-14">
            <div className="col-span-12 md:col-span-6 lg:col-span-5">
              <Reveal>
                <p className="voice text-[clamp(1.6rem,2.4vw,2.35rem)] leading-[1.1] text-pretty">
                  {story.output.body[0]}
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 max-w-[40ch] text-lead leading-snug text-ash">
                  {story.output.body[1]}
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-start-7">
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
            className="mt-[9vh]"
          />
        </Band>

        {/* Dados conectados ao CRM + fluxo do sistema */}
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

          <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-8 md:mt-14">
            <Reveal className="col-span-12 md:col-span-6">
              <p className="voice text-voice text-pretty">{story.data.subtitle}</p>
            </Reveal>
            <Reveal
              delay={120}
              className="col-span-12 md:col-span-5 md:col-start-8 md:self-end"
            >
              <p className="text-lead leading-snug text-ash">{story.data.body}</p>
            </Reveal>
          </div>

          <div className="mt-[12vh]">
            <ol>
              {story.data.checks.map((check, i) => (
                <li key={check.title}>
                  <Reveal variant="draw" delay={i * 90} className="h-px w-full bg-rule" />
                  <Reveal
                    delay={i * 90 + 60}
                    className="grid grid-cols-12 gap-x-6 gap-y-3 py-8 md:py-10"
                  >
                    <span className="meta col-span-2 pt-[0.7em] text-ash md:col-span-1">
                      {pad(i + 1)}
                    </span>
                    <h3 className="display col-span-10 text-[clamp(2rem,4.2vw,4.25rem)] md:col-span-6">
                      {check.title}
                    </h3>
                    <p className="col-span-10 col-start-3 max-w-[40ch] text-[0.9375rem] leading-snug text-ash md:col-span-5 md:col-start-8 md:self-end">
                      {check.text}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
            <Reveal variant="draw" className="h-px w-full bg-rule" />
          </div>

          <div className="mt-[18vh]">
            <Chapter id="rp-flow" title={story.flow.title} wide>
              <InlineFlow steps={story.flow.steps} focus={FLOW_FOCUS} />
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
              <p className="max-w-[34ch] text-lead leading-snug">
                {story.result.caption}
              </p>
              <p className="label mt-5 text-fog">{story.result.note}</p>
            </Reveal>
          </div>

          <div className="mt-[10vh] grid grid-cols-1 gap-x-6 gap-y-12 border-t border-rule-dark pt-10 md:grid-cols-2 md:pt-14">
            {[story.result.before, story.result.after].map((entry, i) => (
              <Reveal key={entry.label} delay={i * 110}>
                <p className="label text-fog">{entry.label}</p>
                <p className="voice mt-5 max-w-[22ch] text-[clamp(1.75rem,2.9vw,2.9rem)] leading-[1.05]">
                  {entry.text}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-[14vh]">
            <ul>
              {story.result.gains.map((gain, i) => (
                <li key={gain}>
                  <Reveal variant="draw" delay={i * 70} className="h-px w-full bg-rule-dark" />
                  <Reveal
                    delay={i * 70 + 50}
                    className="flex items-baseline gap-5 py-5 md:gap-8 md:py-7"
                  >
                    <span className="meta w-[1.35rem] shrink-0 text-fog">{pad(i + 1)}</span>
                    <span className="display text-[clamp(1.75rem,3.8vw,3.75rem)]">
                      {gain}
                    </span>
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal variant="draw" className="h-px w-full bg-rule-dark" />
          </div>
        </Band>

        {/* Atuação, ficha técnica, galeria */}
        <Band tone="paper" after="void" label={item.title}>
          <div className="flex flex-col gap-y-[16vh]">
            <Chapter id="rp-role" title={story.role.title}>
              <Reveal>
                <p className="voice max-w-[22ch] text-voice">{story.role.lead}</p>
              </Reveal>
              <Reveal delay={120}>
                <ol className="mt-10 md:mt-14">
                  {story.role.items.map((entry, i) => (
                    <li
                      key={entry}
                      className="flex items-baseline gap-5 border-t border-rule py-4 text-[clamp(1.05rem,1.45vw,1.35rem)] leading-snug md:py-5"
                    >
                      <span className="meta w-[1.35rem] shrink-0 text-ash">{pad(i + 1)}</span>
                      {entry}
                    </li>
                  ))}
                </ol>
              </Reveal>
            </Chapter>

            {item.technologies ? (
              <Chapter id="rp-stack" title={story.stack.title}>
                <StackSheet
                  groups={item.technologies}
                  labels={dict.caseStudy.stackGroups}
                  notes={[story.code.join(" · "), story.stack.access]}
                />
              </Chapter>
            ) : null}

            {item.images?.length ? (
              <Chapter id="rp-gallery" title={dict.caseStudy.gallery} wide>
                <Gallery
                  images={item.images}
                  captions={copy.captions}
                  label={figure}
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
