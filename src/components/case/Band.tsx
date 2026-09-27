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
 * `after`, a faixa continua o tom anterior e só o espaço separa.
 *
 * As faixas definem `--band-ink` e `--band-bg`, lidos por peças que invertem
 * o tom (a pílula de destaque, o contorno).
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
  return (
    <section
      aria-label={label}
      aria-labelledby={labelledBy}
      data-tone={tone === "void" ? "dark" : undefined}
      className={cn(
        "relative pb-[16vh]",
        after ? "pt-[calc(var(--curve)+11vh)]" : "pt-[6vh]",
        surfaces[tone],
        className,
      )}
    >
      {after ? <SectionCurve tone={after} /> : null}
      <div className="gutter-x">{children}</div>
    </section>
  );
}
