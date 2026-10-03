import {
  casesAt,
  milestones,
  pad,
  seccoTeam,
  talks,
  upcomingAt,
  type Talk,
} from "@/data/portfolio";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { Band } from "@/components/case/Band";
import { Figure } from "@/components/case/Figure";
import {
  ExperienceHero,
  ExperienceNext,
  type ExperienceStoryProps,
} from "@/components/experience/ExperienceHero";
import { Chapter } from "@/components/layout/Chapter";
import { Contact } from "@/components/sections/Contact";
import { Reveal } from "@/components/ui/Reveal";
import { RevealLines } from "@/components/ui/RevealLines";
import { CaseGrid } from "@/components/work/CaseGrid";
import { cn, fit } from "@/lib/cn";
import { listOf } from "@/lib/dates";
import { mediaSrc } from "@/lib/media";
import { growStyle, pairSpans } from "@/lib/spreads";

/** Tipo, título e texto de uma talk — embaixo da foto ou ao lado dela. */
function TalkText({
  talk,
  dict,
  locale,
  className,
}: {
  talk: Talk;
  dict: Dictionary;
  locale: Locale;
  className?: string;
}) {
  const copy = dict.experienceStories.secco.talks;
  const text = copy.items[talk.key];
  const upcoming = talk.status === "upcoming";

  return (
    <Reveal delay={90} className={className}>
      <p className="label text-ash">
        {copy.kinds[talk.kind]}
        {text.occasion ? ` · ${text.occasion}` : null}
        {upcoming ? <span className="text-ink"> · {copy.upcoming}</span> : null}
      </p>
      <h4 className="display mt-4 text-title leading-[0.95]">{text.title}</h4>
      {text.subtitle ? (
        <p className="voice mt-3 text-[clamp(1.4rem,2vw,1.95rem)] leading-[1.1]">
          {text.subtitle}
        </p>
      ) : null}
      {text.text ? (
        <p className="mt-4 max-w-[46ch] text-[0.9375rem] leading-snug text-ash">
          {text.text}
        </p>
      ) : null}
      {talk.with?.length ? (
        <p className="label mt-5 text-ash">
          {copy.with.replace("{names}", listOf(talk.with, locale))}
        </p>
      ) : null}
    </Reveal>
  );
}

/**
 * Uma talk ou oficina, com o texto embaixo da foto. A que ainda não aconteceu
 * (`upcoming`) não finge foto: a prancha só aparece quando o arquivo existir,
 * e o texto não vai para o passado.
 */
function TalkItem({
  talk,
  number,
  dict,
  locale,
  className,
  style,
}: {
  talk: Talk;
  number: number;
  dict: Dictionary;
  locale: Locale;
  className?: string;
  style?: React.CSSProperties;
}) {
  const text = dict.experienceStories.secco.talks.items[talk.key];
  const showFigure = talk.status !== "upcoming" || Boolean(mediaSrc(talk.media));

  return (
    <article className={className} style={style}>
      {showFigure ? (
        <Figure
          media={talk.media}
          number={number}
          label={dict.caseStudy.figure}
          alt={`${text.title} — ${talk.event}`}
          tone={number % 2 === 0 ? "void" : "mist"}
          sizes="(max-width: 768px) 100vw, 54vw"
        />
      ) : null}
      <TalkText talk={talk} dict={dict} locale={locale} className={showFigure ? "mt-6" : undefined} />
    </article>
  );
}

/**
 * Uma talk em linha: a foto principal à esquerda, o texto ao lado e, se
 * houver, a foto de detalhe embaixo dele, fechando na base da principal.
 * No celular e no tablet, empilha — e o detalhe fica menor, à direita.
 */
function TalkRow({
  talk,
  number,
  detailNumber,
  dict,
  locale,
}: {
  talk: Talk;
  number: number;
  detailNumber: number;
  dict: Dictionary;
  locale: Locale;
}) {
  const text = dict.experienceStories.secco.talks.items[talk.key];

  return (
    <article className="grid grid-cols-1 gap-x-[clamp(0.625rem,1vw,1rem)] lg:grid-cols-12">
      <Figure
        media={talk.media}
        number={number}
        label={dict.caseStudy.figure}
        alt={`${text.title} — ${talk.event}`}
        tone={number % 2 === 0 ? "void" : "mist"}
        sizes="(max-width: 1024px) 100vw, 58vw"
        className="lg:col-span-7"
      />
      <div className="mt-6 flex flex-col justify-between gap-y-10 lg:col-span-5 lg:mt-0 lg:pl-[3%]">
        <TalkText talk={talk} dict={dict} locale={locale} />
        {talk.detail && detailNumber > 0 ? (
          <Figure
            media={talk.detail}
            number={detailNumber}
            label={dict.caseStudy.figure}
            alt={`${text.title} — ${text.detail ?? talk.event}`}
            tone={detailNumber % 2 === 0 ? "void" : "mist"}
            sizes="(max-width: 640px) 58vw, (max-width: 1280px) 42vw, 24vw"
            className="w-[58%] self-end sm:w-[42%] lg:w-[50%] xl:w-[58%]"
          />
        ) : null}
      </div>
    </article>
  );
}

/**
 * SECCO — a empresa, o que eu faço nela, o que construímos, a presença
 * pública (talks e oficinas) e os marcos. Marco com `visible: false` não
 * entra na página.
 */
export function SeccoStory({ entry, dict, locale }: ExperienceStoryProps) {
  const copy = dict.experiences.secco;
  const story = dict.experienceStories.secco;
  const built = casesAt(entry.company);
  // Em desenvolvimento e não divulgado: só o nome, com "em breve".
  const soon = upcomingAt(entry.company);
  const shown = milestones.filter(
    (milestone) => milestone.experience === entry.key && milestone.visible,
  );

  // Talks agrupadas por evento, na ordem do dado; figuras numeradas na ordem.
  const events: { event: string; items: Talk[] }[] = [];
  for (const talk of talks.filter((item) => item.experience === entry.key)) {
    const group = events.find((item) => item.event === talk.event);
    if (group) group.items.push(talk);
    else events.push({ event: talk.event, items: [talk] });
  }
  // Fig. 01 é a equipe, na abertura; as talks seguem a numeração, e a foto
  // de detalhe conta logo depois da principal.
  let figureCount = 1;
  const numbered = events.map((group) => ({
    ...group,
    items: group.items.map((talk) => {
      const counts = talk.status === "done" || Boolean(mediaSrc(talk.media));
      const number = counts ? ++figureCount : 0;
      const detailNumber = number && talk.detail && mediaSrc(talk.detail) ? ++figureCount : 0;
      return { talk, number, detailNumber };
    }),
  }));

  return (
    <>
      <main id="content">
        <ExperienceHero entry={entry} dict={dict} locale={locale} />

        {/* O que é a SECCO: a definição, e a frase ao lado da equipe */}
        <Band tone="paper" after="stone" labelledBy="secco-about">
          <Chapter id="secco-about" title={story.about.title}>
            <Reveal>
              <p className="voice text-voice text-balance md:text-center">{story.about.text}</p>
            </Reveal>
          </Chapter>
          {/* Um spread: a frase numa coluna estreita, a equipe em 8 colunas.
              A legenda fecha a coluna da frase, na base da foto — o vão
              entre as duas é o respiro da página, não sobra. */}
          <div className="mt-[12vh] grid grid-cols-12 gap-x-6 gap-y-8 border-t border-rule pt-10 md:pt-14 lg:grid-rows-[auto_1fr] lg:gap-y-0">
            <Reveal className="col-span-12 lg:col-span-4 lg:row-start-1">
              <p className="voice max-w-[16ch] text-[clamp(2.4rem,4.8vw,5.25rem)] leading-[1] italic">
                {story.about.quote}
              </p>
            </Reveal>
            <Figure
              media={seccoTeam}
              number={1}
              label={dict.caseStudy.figure}
              alt={copy.captions?.[seccoTeam.id]}
              tone="mist"
              sizes="(max-width: 1024px) 100vw, 62vw"
              className="col-span-12 lg:col-span-8 lg:col-start-5 lg:row-span-2 lg:row-start-1"
            />
            {copy.captions?.[seccoTeam.id] ? (
              <Reveal
                delay={160}
                className="col-span-12 lg:col-span-4 lg:row-start-2 lg:self-end"
              >
                <p aria-hidden="true" className="flex items-baseline gap-3 text-[0.9375rem] leading-snug opacity-70">
                  <span className="meta">{pad(1)}</span>
                  {copy.captions[seccoTeam.id]}
                </p>
              </Reveal>
            ) : null}
          </div>
        </Band>

        {/* Minha atuação: quatro dimensões, numeradas — o título em display,
            o que entra nela em texto corrido, legível, no tom do fundo. */}
        <Band tone="void" after="paper" labelledBy="secco-role">
          <RevealLines
            as="h2"
            id="secco-role"
            lines={[story.role.title]}
            className="display mb-[7vh] text-[clamp(1.6rem,2.6vw,2.4rem)] md:text-center"
          />
          <ol className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-4">
            {story.role.dimensions.map((dimension, i) => (
              <li key={dimension.title} className="@container">
                <Reveal variant="draw" delay={i * 90} className="h-px w-full bg-rule-dark" />
                <Reveal delay={i * 90 + 60} className="pt-6">
                  <span className="meta text-fog">{pad(i + 1)}</span>
                  <p className="display mt-5 text-[min(15.5cqi,2.75rem)] leading-[0.95] sm:text-[min(15.5cqi,3.6rem)]">
                    {dimension.title}
                  </p>
                  <p className="mt-6 max-w-[26ch] text-[clamp(1.05rem,1.25vw,1.2rem)] leading-[1.45] text-paper/75">
                    {dimension.items.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Band>

        {/* O que construímos */}
        <Band tone="paper" after="void" labelledBy="secco-built">
          <Chapter id="secco-built" title={story.built.title} wide>
            <CaseGrid
              items={built}
              dict={dict}
              locale={locale}
              context="category"
              trailing={
                soon.length > 0 ? (
                  // O que ainda não foi divulgado: uma linha na largura toda,
                  // como as da Experiência na home — sem prancha, sem página.
                  <ul aria-label={dict.work.soon} className="border-b border-rule">
                    {soon.map((item) => (
                      <li
                        key={item.key}
                        className="grid grid-cols-12 items-baseline gap-x-6 gap-y-3 border-t border-rule py-7 md:py-9"
                      >
                        <p className="label col-span-12 text-ash md:col-span-3">{dict.work.soon}</p>
                        <p className="display col-span-12 text-[clamp(2.2rem,4vw,4rem)] leading-[0.95] opacity-45 md:col-span-5">
                          {item.title}
                        </p>
                        {dict.cases[item.key].kicker ? (
                          <p className="col-span-12 text-[0.9375rem] leading-snug text-ash md:col-span-4 md:text-right">
                            {dict.cases[item.key].kicker}
                          </p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : undefined
              }
            />
          </Chapter>
        </Band>

        {/* Talks, workshops & community */}
        <Band tone="stone" after="paper" labelledBy="secco-talks">
          <div className="fit-display" style={fit(story.talks.title, "min(12rem, 11vw)", 86, "14vw")}>
            <RevealLines
              as="h2"
              id="secco-talks"
              lines={story.talks.title}
              className="display leading-[0.96]"
            />
          </div>

          <div className="mt-[10vh] flex flex-col gap-y-[12vh]">
            {numbered.map((group) => {
              const spans = pairSpans(false);
              // Todas com foto: larguras pela proporção, fotos na mesma altura
              // (como no FigureSpread). Com um item só de texto, fica o grid 7/5.
              const matched =
                group.items.length > 1 && group.items.every(({ number }) => number > 0);
              // Uma foto de detalhe não cabe na fileira lado a lado: o grupo
              // vira linhas, cada talk com o texto ao lado da própria foto.
              const rows =
                matched && group.items.some(({ detailNumber }) => detailNumber > 0);
              return (
                <section key={group.event} aria-label={group.event}>
                  <Reveal variant="draw" className="h-px w-full bg-ink/15" />
                  <h3 className="label mt-5 text-ash">{group.event}</h3>
                  {rows ? (
                    <div className="mt-8 flex flex-col gap-y-16 lg:gap-y-[9vh]">
                      {group.items.map(({ talk, number, detailNumber }) => (
                        <TalkRow
                          key={talk.key}
                          talk={talk}
                          number={number}
                          detailNumber={detailNumber}
                          dict={dict}
                          locale={locale}
                        />
                      ))}
                    </div>
                  ) : (
                    <div
                      className={cn(
                        "mt-8 items-start gap-x-[clamp(0.625rem,1vw,1rem)] gap-y-14",
                        matched ? "flex flex-col md:flex-row" : "grid grid-cols-1 md:grid-cols-12",
                      )}
                    >
                      {group.items.map(({ talk, number }, i) => (
                        <TalkItem
                          key={talk.key}
                          talk={talk}
                          number={number}
                          dict={dict}
                          locale={locale}
                          style={matched ? growStyle(talk.media.ratio) : undefined}
                          className={
                            matched
                              ? "w-full min-w-0 md:[flex:var(--grow)_1_0%]"
                              : group.items.length === 1
                                ? "md:col-span-8"
                                : `${spans[i % 2]} ${i % 2 === 1 ? "md:pl-[3%]" : ""}`
                          }
                        />
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </Band>

        {/* Marcos */}
        {shown.length > 0 ? (
          <Band tone="void" after="stone" labelledBy="secco-milestones">
            {/* Um marco por coluna: o número vazado dá o ritmo, o nome pesa, a
                frase explica. Sem ícone, sem logo de terceiro. */}
            <RevealLines
              as="h2"
              id="secco-milestones"
              lines={[story.milestones.title]}
              className="display mb-[7vh] text-[clamp(1.6rem,2.6vw,2.4rem)] md:text-center"
            />
            <ol
              className={cn(
                "grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3",
                shown.length === 4 && "md:grid-cols-2 lg:grid-cols-4",
              )}
            >
              {shown.map((milestone, i) => (
                <li key={milestone.key} className="@container">
                  <Reveal variant="draw" delay={i * 90} className="h-px w-full bg-rule-dark" />
                  <Reveal delay={i * 90 + 60} className="pt-6">
                    <span
                      aria-hidden="true"
                      className="display type-outline block text-[min(34cqi,5.5rem)] leading-[0.82] md:text-[min(34cqi,9.5rem)]"
                    >
                      {pad(i + 1)}
                    </span>
                    <p className="display mt-8 text-[min(13cqi,3.4rem)] leading-[0.95]">
                      {milestone.name}
                    </p>
                    <p className="mt-4 max-w-[30ch] text-[0.9375rem] leading-snug text-pretty text-fog">
                      {story.milestones.items[milestone.key]}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </Band>
        ) : null}

        {/* Fecho */}
        <Band tone="paper" after={shown.length > 0 ? "void" : "stone"} labelledBy="secco-next">
          <ExperienceNext entry={entry} dict={dict} locale={locale} />
        </Band>
      </main>
      <Contact dict={dict} locale={locale} curve="paper" />
    </>
  );
}
