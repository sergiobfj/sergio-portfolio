import type { ReactNode } from "react";
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
  className,
}: {
  title?: string;
  steps: readonly Step[];
  /** Linha pequena acima do título (ex.: o número do pilar). */
  eyebrow?: ReactNode;
  size?: "md" | "sm";
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
                {pad(i + 1)}
              </span>
              <span
                className={cn(
                  "display",
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
  stack = false,
  className,
}: {
  steps: readonly string[];
  focus?: number;
  size?: "md" | "sm";
  /** No celular, uma etapa por linha — para etapas longas ("Entender a operação"). */
  stack?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <ol
        className={cn(
          "display leading-[1.1]",
          size === "sm"
            ? "text-[clamp(1.75rem,3.6vw,3.6rem)]"
            : "text-[clamp(2rem,5.1vw,5.5rem)]",
        )}
      >
        {steps.map((step, i) => (
          <li key={step} className={stack ? "block sm:inline" : "inline"}>
            {/* Etapa inteira na mesma linha. Empilhada no celular, uma etapa
                longa ("Understand the operation") pode quebrar sem vazar. */}
            <span
              className={cn(
                stack ? "sm:whitespace-nowrap" : "whitespace-nowrap",
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
