import { pad, sentavosStory } from "@/data/portfolio";
import { Band } from "@/components/case/Band";
import { CaseLinks, CaseTags } from "@/components/case/CaseMeta";
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
import { cn, delay, fit } from "@/lib/cn";
import { monthYearInline } from "@/lib/dates";
import { figureCounter, imageOf } from "@/lib/media";
import { routes } from "@/lib/routes";
import type { StoryProps } from "./index";

/** Um print de celular ao lado do texto: estreito, sem passar da tela. */
const PHONE = "col-span-8 sm:col-span-5 lg:col-span-3";

/**
 * Sentavos — produto próprio, em produção. A história gira em torno de uma
 * decisão: gasto ≠ saída de caixa (no cartão, a compra é gasto hoje; o
 * pagamento da fatura é caixa depois, e não um gasto novo). Sete blocos:
 * hero, o problema, a decisão central, como funciona (com cartão e
 * parcelamento), as regras que protegem o dado, a engenharia e o resultado.
 *
 * Só o orçamento tem print hoje. Os outros (lançamento no cartão, fatura,
 * revisão, patrimônio) são prints de celular planejados em portfolio.ts:
 * cada seção se compõe sem o seu, e ele entra sozinho quando o arquivo
 * existir — sem prancha vazia.
 */
export function Sentavos({ item, dict, locale }: StoryProps) {
  const story = dict.stories.sentavos;
  const copy = dict.cases[item.slug];
  const figure = dict.caseStudy.figure;
  const since = monthYearInline(sentavosStory.liveSince, locale);
  const withDate = (text: string) => text.replace("{date}", since);

  const cardPurchase = imageOf(item.images, "card-purchase");
  const budget = imageOf(item.images, "budget");
  const invoice = imageOf(item.images, "invoice");
  const review = imageOf(item.images, "review");
  const wealth = imageOf(item.images, "wealth");
  const next = figureCounter(2);
  const numbers = {
    cardPurchase: next(cardPurchase),
    budget: next(budget),
    invoice: next(invoice),
    review: next(review),
    wealth: next(wealth),
  };
  const screens = [budget, invoice].filter((image) => image !== undefined);

  const phone = (image: NonNullable<typeof cardPurchase>, number: number, className?: string) => (
    <Figure
      media={image}
      number={number}
      label={figure}
      caption={copy.captions?.[image.id]}
      tone="void"
      maxHeight="72svh"
      sizes="(max-width: 1024px) 60vw, 24vw"
      className={cn(PHONE, className)}
    />
  );

  return (
    <>
      <main id="content">
        <PageHero
          label={<CaseTags item={item} dict={dict} locale={locale} />}
          meta={item.year}
          title={[item.title]}
          voice={
            <p className="voice max-w-[22ch] text-[clamp(1.6rem,2.7vw,2.75rem)] leading-[1.04] text-pretty">
              {copy.summary}
            </p>
          }
          aside={
            <>
              <p className="label text-ash">
                <span className="block text-ink">{story.status}</span>
                <span className="block">{withDate(story.since)}</span>
                <span className="mt-3 block">{story.use}</span>
              </p>
              <CaseLinks item={item} dict={dict} />
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

        {/* O problema: a planilha, e a fatura como uma linha só */}
        <Band tone="paper" after="stone" labelledBy="st-problem">
          <Chapter id="st-problem" title={story.problem.title}>
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

        {/* A decisão central: gasto ≠ saída de caixa, e os dois momentos no tempo */}
        <Band tone="void" after="paper" labelledBy="st-decision">
          <div
            className="fit-display text-center"
            style={fit(story.decision.statement, "min(15rem, 15vw)", 86, "17vw")}
          >
            <RevealLines
              as="h2"
              id="st-decision"
              aria-label={story.decision.statement.join(" ")}
              className="display leading-[0.92]"
            >
              <span className="mask-line">
                <span>{story.decision.statement[0]}</span>
              </span>
              <span className="mask-line">
                <span className="font-sans font-normal opacity-40" style={delay(90)}>
                  {story.decision.statement[1]}
                </span>
              </span>
              <span className="mask-line">
                <span className="type-outline" style={delay(180)}>
                  {story.decision.statement[2]}
                </span>
              </span>
            </RevealLines>
          </div>
          <Reveal delay={120}>
            <p className="voice mx-auto mt-10 max-w-[30ch] text-center text-[clamp(1.6rem,2.6vw,2.6rem)] leading-[1.1]">
              {story.decision.lead.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </Reveal>

          <div
            className={cn(
              "mt-[12vh] grid grid-cols-12 gap-x-6 gap-y-14",
              cardPurchase && "lg:items-center",
            )}
          >
            <div className={cn("col-span-12", cardPurchase && "lg:col-span-8")}>
              <Progression steps={story.decision.steps} />
              <Reveal>
                <p className="mt-12 text-lead leading-snug text-paper/80 md:text-center">
                  {story.decision.note}
                </p>
              </Reveal>
            </div>
            {cardPurchase ? phone(cardPurchase, numbers.cardPurchase, "lg:col-start-10") : null}
          </div>
        </Band>

        {/* Como funciona: o fluxo, os dois modos de pagar e o cartão por dentro */}
        <Band tone="stone" after="void" labelledBy="st-how">
          <Chapter id="st-how" title={story.how.title} wide>
            <Progression steps={story.how.steps} size="sm" />

            <div className="mt-[10vh] grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
              {story.how.modes.map((mode, i) => (
                <Reveal key={mode.title} delay={i * 100} className="rule-top pt-6">
                  <p className="display text-[clamp(1.9rem,3vw,3rem)]">{mode.title}</p>
                  <p className="voice mt-4 max-w-[24ch] text-[clamp(1.5rem,2.2vw,2.2rem)] leading-[1.1]">
                    {mode.text}
                  </p>
                </Reveal>
              ))}
            </div>

            <p className="label mt-[10vh] text-ash md:text-center">{story.how.cardLabel}</p>
            <ul className="mt-6 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
              {story.how.card.map((entry, i) => (
                <li key={entry}>
                  <Reveal variant="draw" delay={i * 70} className="h-px w-full bg-ink/15" />
                  <Reveal delay={i * 70 + 40} className="pt-5 pb-8">
                    <span className="meta text-ash">{pad(i + 1)}</span>
                    <p className="display mt-4 text-[clamp(1.4rem,1.9vw,2rem)] leading-[0.98]">
                      {entry}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>

            {screens.length > 0 ? (
              <div className="mt-[8vh]">
                <FigureSpread
                  images={screens}
                  captions={copy.captions}
                  label={figure}
                  start={numbers.budget || numbers.invoice}
                />
              </div>
            ) : null}
          </Chapter>
        </Band>

        {/* Regras que protegem o dado: a filosofia ao lado de quatro exemplos */}
        <Band tone="paper" after="stone" labelledBy="st-rules">
          {/* O título abre a coluna da filosofia; os quatro exemplos ao lado. */}
          <div className="grid grid-cols-12 gap-x-6 gap-y-14">
            <div className="col-span-12 lg:col-span-5">
              <ChapterTitle id="st-rules" title={story.rules.title} className="mb-8" />
              <Reveal>
                <p className="voice max-w-[14ch] text-[clamp(2.4rem,4.4vw,4.75rem)] leading-[1] italic">
                  {story.rules.statement}
                </p>
              </Reveal>
              {review ? phone(review, numbers.review, "mt-12 block lg:w-3/5") : null}
            </div>
            <ol className="col-span-12 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:col-span-7">
              {story.rules.items.map((rule, i) => (
                <li key={rule.title}>
                  <Reveal variant="draw" delay={i * 80} className="h-px w-full bg-rule" />
                  <Reveal delay={i * 80 + 50} className="pt-5 pb-10">
                    <span className="meta text-ash">{pad(i + 1)}</span>
                    <p className="display mt-4 text-[clamp(1.6rem,2.3vw,2.4rem)] leading-[0.96]">
                      {rule.title}
                    </p>
                    <p className="mt-3 max-w-[34ch] text-[0.9375rem] leading-snug text-ash">
                      {rule.text}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </Band>

        {/* Engenharia: quem fez e com o quê */}
        <Band tone="stone" after="paper" labelledBy="st-engineering">
          <Chapter id="st-engineering" title={story.engineering.title} wide>
            <Reveal>
              <p className="voice mx-auto max-w-[34ch] text-[clamp(1.6rem,2.5vw,2.5rem)] leading-[1.1] text-balance md:text-center">
                {story.engineering.role}
              </p>
            </Reveal>
            {item.technologies ? (
              <div className="mt-[8vh]">
                <StackSheet
                  groups={item.technologies}
                  labels={dict.caseStudy.stackGroups}
                  notes={story.engineering.notes}
                />
              </div>
            ) : null}
          </Chapter>
        </Band>

        {/* Resultado: o uso real, três números e como o produto chegou aqui */}
        <Band tone="void" after="stone" labelledBy="st-result">
          <Chapter id="st-result" title={story.result.title} wide>
            <Reveal>
              <p className="voice mx-auto max-w-[28ch] text-voice text-balance md:text-center">
                {story.result.lead}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-[52ch] text-lead leading-snug text-paper/75 md:mx-auto md:text-center">
                {story.result.body}
              </p>
            </Reveal>
            {wealth ? phone(wealth, numbers.wealth, "mx-auto mt-[8vh] block lg:w-1/4") : null}
          </Chapter>

          <Metrics
            className="mt-[12vh]"
            items={story.result.metrics.map((metric) => ({
              value: metric.value,
              lines: [withDate(metric.caption)],
            }))}
          />

          <div className="mt-[10vh] grid grid-cols-12 gap-x-6 gap-y-12 border-t border-rule-dark pt-10">
            <div className="col-span-12 lg:col-span-6">
              <p className="label text-fog">{story.result.evolutionLabel}</p>
              <InlineFlow steps={story.result.evolution} size="xs" className="mt-5" />
            </div>
            <Reveal delay={120} className="col-span-12 lg:col-span-5 lg:col-start-8">
              <p className="label text-fog">{story.result.featuresLabel}</p>
              <p className="mt-5 flex flex-wrap gap-x-[0.45em] text-[clamp(1.05rem,1.35vw,1.3rem)] leading-[1.5] text-paper/80">
                {story.result.features.map((feature, i, all) => (
                  <span key={feature} className="whitespace-nowrap">
                    {feature}
                    {i < all.length - 1 ? (
                      <span aria-hidden="true" className="ml-[0.45em] opacity-35">
                        /
                      </span>
                    ) : null}
                  </span>
                ))}
              </p>
            </Reveal>
          </div>
        </Band>

        <Band tone="paper" after="void" label={item.title}>
          <CaseNext item={item} dict={dict} locale={locale} />
        </Band>
      </main>
      <Contact dict={dict} locale={locale} curve="paper" />
    </>
  );
}
