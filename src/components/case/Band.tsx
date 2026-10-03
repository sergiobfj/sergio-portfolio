import type { ReactNode } from "react";
import { SectionCurve, type CurveTone } from "@/components/ui/SectionCurve";
import { cn } from "@/lib/cn";

const surfaces: Record<CurveTone, string> = {
  stone: "band-stone bg-stone",
  paper: "band-paper bg-paper",
  void: "band-void bg-void text-paper",
};

/**
 * Uma faixa de tom. Quando o tom muda, `after` recebe o tom de cima e a base
 * curva dele desce sobre esta faixa — a mesma transição da home. Sem
 * `after`, ou com `after` igual ao próprio tom, a faixa continua a de cima:
 * sem curva e só um respiro curto. (Uma curva do mesmo tom é invisível, mas
 * reservaria a altura dela inteira — um vão sem transição nenhuma.)
 *
 * O ritmo vem dos tokens `--band-*` (globals.css). As faixas definem
 * `--band-ink` e `--band-bg`, lidos por peças que invertem o tom (a pílula
 * de destaque, o contorno).
 */
export function Band({
  tone,
  after,
  label,
  labelledBy,
  className,
  children,
}: {
  tone: CurveTone;
  after?: CurveTone;
  label?: string;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}) {
  const curve = after !== tone ? after : undefined;
  const curved = curve !== undefined;

  return (
    <section
      aria-label={label}
      aria-labelledby={labelledBy}
      data-tone={tone === "void" ? "dark" : undefined}
      className={cn(
        "relative pb-(--band-bottom)",
        curved ? "pt-(--band-top)" : "pt-(--band-continue)",
        surfaces[tone],
        className,
      )}
    >
      {curve ? <SectionCurve tone={curve} /> : null}
      <div className="gutter-x">{children}</div>
    </section>
  );
}
