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
  /** Teto do título; abaixo dele, vale o que couber na largura. */
  size?: string;
  /** Hero curta, para o que não é case completo (mini-case, agrupador). */
  compact?: boolean;
};

/** No celular o título vira cartaz: cresce até a palavra mais longa caber. */
const MOBILE_MAX = "34vw";

/**
 * Topo das páginas internas, na mesma linguagem da hero: cinza, a tela
 * inteira, o título em display assentado embaixo. O tamanho do título é o
 * maior que cabe — "Virtron" e "Automatizaciones &" usam a mesma regra.
 * A seção seguinte desenha a base curva. `compact` não ocupa a tela toda:
 * o peso do topo acompanha o peso do trabalho.
 */
export function PageHero({
  label,
  meta,
  title,
  voice,
  aside,
  size = "min(19rem, 17vw)",
  compact = false,
}: Props) {
  return (
    <section
      className={cn(
        "gutter-x flex flex-col justify-end bg-stone pb-[10vh]",
        compact
          ? "pt-[calc(var(--bar)+16vh)]"
          : "min-h-[calc(100svh-var(--curve))] pt-(--bar)",
      )}
    >
      <div className="hero-fade flex items-baseline justify-between gap-6 text-ash">
        <div className="label">{label}</div>
        {meta ? <p className="meta">{meta}</p> : null}
      </div>

      <h1
        className="fit-display display mt-6 leading-[0.96]"
        style={fit(title, size, 86, MOBILE_MAX)}
      >
        {title.map((line, i) => (
          <span key={line} className="mask-line hero-mask">
            <span style={delay(120 + i * 90)}>{line}</span>
          </span>
        ))}
      </h1>

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
