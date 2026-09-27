import type { CSSProperties } from "react";

export type CurveTone = "stone" | "paper" | "void";

/**
 * A base curva da seção ANTERIOR, desenhada no topo desta.
 *
 * Fica aqui, e não no fim da seção de cima, para não depender de z-index
 * entre seções: é filha posicionada desta e pinta sobre o fundo dela.
 * Vai como primeiro filho de uma seção `relative`, com padding-top de pelo
 * menos `var(--curve)`.
 */
export function SectionCurve({ tone }: { tone: CurveTone }) {
  return (
    <div
      aria-hidden="true"
      className="curve"
      style={{ "--curve-color": `var(--color-${tone})` } as CSSProperties}
    >
      <span />
    </div>
  );
}
