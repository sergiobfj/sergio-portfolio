import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  /** Tom do fundo onde o disco está apoiado. */
  tone?: "ink" | "paper";
  size?: "md" | "lg";
};

/**
 * A seta das linhas e blocos clicáveis. Em repouso é só um anel; no hover do
 * link que a contém, o disco se preenche e a seta vira para frente — o mesmo
 * gesto da assinatura, sem competir com o conteúdo quando parado.
 */
export function ArrowDisc({ className, tone = "ink", size = "md" }: Props) {
  return (
    <span
      aria-hidden="true"
      data-tone={tone === "paper" ? "paper" : undefined}
      data-size={size === "lg" ? "lg" : undefined}
      className={cn("arrow-disc", className)}
    >
      <span>↗</span>
    </span>
  );
}
