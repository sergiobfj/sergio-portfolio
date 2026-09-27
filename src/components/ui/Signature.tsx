import { site } from "@/data/portfolio";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  /** Tom do fundo onde a assinatura está apoiada. */
  tone?: "ink" | "paper";
};

/**
 * Code by Sergio — a marca pessoal. Um disco e três palavras, com o "by" na
 * serifa. No hover do link que a contém, o disco floresce até virar a
 * pílula inteira e a tinta se inverte. Idêntica em todos os idiomas.
 */
export function Signature({ className, tone = "ink" }: Props) {
  const { lead, by, name } = site.signature;

  return (
    <span
      className={cn("signature", className)}
      data-tone={tone === "paper" ? "paper" : undefined}
    >
      <span aria-hidden="true" className="signature__bloom" />
      <span className="signature__text">{lead}</span>{" "}
      <span className="signature__text signature__by">{by}</span>{" "}
      <span className="signature__text">{name}</span>
    </span>
  );
}
