import type { ReactNode } from "react";
import { cn, delay, fit } from "@/lib/cn";

type Props = {
  label: ReactNode;
  meta?: ReactNode;
  title: readonly string[];
  /** A frase na serifa, embaixo à esquerda. */
  voice?: ReactNode;
  /** Coluna da direita: papel, links, voltar. */
  aside?: ReactNode;
  /**
   * Marca colada ao fim do título, assentada na linha de base e medida em
   * `em` do título — acompanha o tamanho dele em qualquer largura.
   */
  mark?: ReactNode;
  /** Teto do título; abaixo dele, vale o que couber na largura. */
  size?: string;
  /** Hero curta, para o que não é case completo (mini-case, agrupador). */
  compact?: boolean;
};

/** No celular o título vira cartaz: cresce até a palavra mais longa caber. */
const MOBILE_MAX = "34vw";

/** Respiro entre o header e o conteúdo no celular (~50–60px). */
const MOBILE_TOP = "pt-[calc(var(--bar)+clamp(2.75rem,13vw,4rem))]";

/**
 * Topo das páginas internas, na mesma linguagem da hero: cinza, a tela
 * inteira, o título em display assentado embaixo. O tamanho do título é o
 * maior que cabe — "Virtron" e "Automatizaciones &" usam a mesma regra.
 * A seção seguinte desenha a base curva. `compact` não ocupa a tela toda:
 * o peso do topo acompanha o peso do trabalho.
 *
 * A tela toda só a partir de 640px. No celular a tela é muito mais alta que
 * o conteúdo (o título cresce com a largura): com altura mínima de tela e o
 * conteúdo assentado embaixo, sobravam 230–340px vazios sob o header. Ali o
 * topo tem a altura do conteúdo — o header, um respiro curto e o texto.
 * Em tablet de pé, a altura mínima acompanha a largura, pelo mesmo motivo.
 */
export function PageHero({
  label,
  meta,
  title,
  voice,
  aside,
  mark,
  size = "min(19rem, 17vw)",
  compact = false,
}: Props) {
  return (
    <section
      className={cn(
        "gutter-x flex flex-col justify-end bg-stone pb-[10vh]",
        MOBILE_TOP,
        compact
          ? "sm:pt-[calc(var(--bar)+16vh)]"
          : "sm:min-h-[calc(100svh-var(--curve))] sm:pt-(--bar) sm:portrait:min-h-[min(calc(100svh-var(--curve)),calc(var(--bar)+80vw))]",
      )}
    >
      <div className="hero-fade flex items-baseline justify-between gap-6 text-ash">
        <div className="label">{label}</div>
        {meta ? <p className="meta">{meta}</p> : null}
      </div>

      {/* Com marca, o tamanho do título reserva o lugar dela: duas letras a mais
          na conta do fit (no celular, a palavra mais longa). */}
      <div
        className="fit-display mt-6 flex items-end gap-[0.16em]"
        style={fit(mark ? title.map((line) => `${line}··`) : title, size, 86, MOBILE_MAX)}
      >
        <h1 className="display leading-[0.96]">
          {title.map((line, i) => (
            <span key={line} className="mask-line hero-mask">
              <span style={delay(120 + i * 90)}>{line}</span>
            </span>
          ))}
        </h1>
        {mark ? (
          <div className="hero-fade mb-[0.14em] shrink-0" style={delay(360)}>
            {mark}
          </div>
        ) : null}
      </div>

      {voice || aside ? (
        <div
          className="hero-fade mt-10 grid gap-8 md:grid-cols-12 md:items-end"
          style={delay(420)}
        >
          <div className="md:col-span-7">{voice}</div>
          <div className="flex flex-col gap-5 md:col-span-5 md:items-end md:text-right lg:col-span-4 lg:col-start-9">
            {aside}
          </div>
        </div>
      ) : null}
    </section>
  );
}
