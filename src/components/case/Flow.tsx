import type { CSSProperties, ReactNode } from "react";
import { pad } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export type Step = {
  label: string;
  /** Anotação pequena ao lado do passo (ex.: "Manual"). */
  mark?: string;
  /** O passo em destaque vira pílula: é onde a história se decide. */
  focus?: boolean;
};

/**
 * Passos empilhados, ligados por setas — tipografia e linha, sem caixas.
 * Serve a comparações (antes/depois) e a qualquer processo curto. `sm` é a
 * versão de coluna estreita (três fluxos lado a lado).
 */
export function StepList({
  title,
  steps,
  eyebrow,
  size = "md",
  start = 1,
  className,
}: {
  title?: string;
  steps: readonly Step[];
  /** Linha pequena acima do título (ex.: o número do pilar). */
  eyebrow?: ReactNode;
  size?: "md" | "sm";
  /** Número do primeiro passo: um fluxo partido em duas colunas continua a contagem. */
  start?: number;
  className?: string;
}) {
  const small = size === "sm";

  return (
    <Reveal className={className}>
      {eyebrow ? <p className="meta mb-4 opacity-55">{eyebrow}</p> : null}
      {title ? (
        <p
          className={cn(
            "voice",
            small ? "text-[clamp(1.9rem,2.8vw,2.75rem)]" : "text-[clamp(2.25rem,4.2vw,4rem)]",
          )}
        >
          {title}
        </p>
      ) : null}
      <ol className={cn(title && (small ? "mt-6" : "mt-8 md:mt-10"))}>
        {steps.map((step, i) => (
          <li key={step.label}>
            {i > 0 ? (
              <span
                aria-hidden="true"
                className="block py-1.5 pl-[2.35rem] text-sm opacity-35 md:py-2"
              >
                ↓
              </span>
            ) : null}
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="meta w-[1.35rem] shrink-0 opacity-45">
                {pad(start + i)}
              </span>
              {/* Largura máxima = o que sobra ao lado do número: um passo
                  longo quebra por dentro em vez de descer inteiro. */}
              <span
                className={cn(
                  "display max-w-[calc(100%-2.35rem)]",
                  small
                    ? "text-[clamp(1.25rem,1.75vw,1.7rem)]"
                    : "text-[clamp(1.55rem,2.6vw,2.5rem)]",
                  step.focus && "pill",
                )}
              >
                {step.label}
              </span>
              {/* No celular a anotação desce para a linha de baixo, alinhada
                  ao texto do passo (número 1.35rem + vão 1rem). */}
              {step.mark ? (
                <span className="label basis-full pl-[2.35rem] opacity-55 sm:basis-auto sm:pl-0">
                  {step.mark}
                </span>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

/**
 * Um fluxo corrido como frase: cada etapa em display, setas entre elas, e a
 * linha quebra onde a largura pedir — no celular vira uma coluna sozinha.
 * Uma etapa pode ser o foco (pílula).
 */
export function InlineFlow({
  steps,
  focus,
  size = "md",
  className,
}: {
  steps: readonly string[];
  focus?: number;
  /** `xs`: fluxo secundário, no peso de uma legenda em display. */
  size?: "md" | "sm" | "xs";
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <ol
        className={cn(
          "display leading-[1.1]",
          size === "xs" && "text-[clamp(1.4rem,2vw,2rem)] leading-[1.2]",
          size === "sm" && "text-[clamp(1.75rem,3.6vw,3.6rem)]",
          size === "md" && "text-[clamp(2rem,5.1vw,5.5rem)]",
        )}
      >
        {steps.map((step, i) => (
          <li key={step} className="inline">
            <span
              className={cn(
                "whitespace-nowrap",
                i === focus && "pill",
              )}
            >
              {step}
            </span>
            {/* O espaço depois da seta é o ponto de quebra: a linha termina
                na seta e a próxima começa numa etapa. */}
            {i < steps.length - 1 ? (
              <>
                <span aria-hidden="true" className="ml-[0.3em] font-sans font-normal opacity-30">
                  →
                </span>{" "}
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

export type Station = {
  label: string;
  /** Uma linha pequena embaixo do nome: o que acontece ali. */
  note?: string;
  /** Anotação em pílula vazada sob a etapa (ex.: "Gasto"). */
  mark?: string;
  /** A etapa onde a história se decide: nome em pílula e ponto maior. */
  focus?: boolean;
};

/** Colunas do tablet: 4 etapas em 2 × 2, 5 ou 6 em linhas de 3, 7 ou 8 em linhas de 4. */
function tabletColumns(count: number) {
  if (count <= 3) return count;
  if (count === 4) return 2;
  return count <= 6 ? 3 : 4;
}

/**
 * Estações de um fluxo: um filete contínuo com um ponto em cada etapa,
 * número em cima, nome em display e, se houver, uma nota curta embaixo. Uma
 * linha no desktop, linhas de duas ou três no tablet, vertical no celular —
 * a ordem se lê de relance, e só a etapa em foco pesa mais que as outras.
 * `columns` fixa a grade do desktop (fluxos de tamanhos diferentes alinhados
 * na mesma régua).
 */
export function Progression({
  steps,
  size = "md",
  columns,
  className,
}: {
  steps: readonly (string | Station)[];
  /** `sm`: nomes longos ou coluna estreita. */
  size?: "md" | "sm";
  columns?: number;
  className?: string;
}) {
  const stations = steps.map((step) => (typeof step === "string" ? { label: step } : step));
  const style = {
    "--steps": columns ?? stations.length,
    // Com a régua fixa, o tablet mantém as mesmas colunas: as linhas alinham.
    "--steps-md": columns ?? tabletColumns(stations.length),
  } as CSSProperties;

  return (
    <Reveal className={className}>
      <ol className="progression" style={style}>
        {stations.map((station, i) => (
          <li key={station.label} data-focus={station.focus ? "" : undefined}>
            <span className="meta block opacity-55">{pad(i + 1)}</span>
            <span
              className={cn(
                "display mt-3 block leading-[0.95]",
                size === "sm"
                  ? "text-[clamp(1.2rem,1.6vw,1.65rem)]"
                  : "text-[clamp(1.5rem,2.1vw,2.25rem)]",
              )}
            >
              <span className={cn(station.focus && "pill")}>{station.label}</span>
            </span>
            {station.note ? (
              <span className="mt-3 block max-w-[24ch] text-[0.875rem] leading-snug opacity-65">
                {station.note}
              </span>
            ) : null}
            {station.mark ? <span className="progression__mark label mt-4">{station.mark}</span> : null}
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
