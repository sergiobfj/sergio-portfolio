import { cn } from "@/lib/cn";

/**
 * Para onde a seta aponta — e é sempre a mesma regra no site:
 * `forward` → navegar dentro do site, `external` ↗ sair dele (outra aba,
 * e-mail), `back` ← voltar.
 */
export type ArrowDirection = "forward" | "external" | "back";

const glyphs: Record<ArrowDirection, string> = {
  forward: "→",
  external: "↗",
  back: "←",
};

type Props = {
  className?: string;
  /** Tom do fundo onde o disco está apoiado. */
  tone?: "ink" | "paper";
  size?: "sm" | "md" | "lg";
  direction?: ArrowDirection;
};

/**
 * O disco de seta dos links. Em repouso, um anel; no hover (ou foco) do link
 * que o contém, o disco se preenche, o contraste inverte e a seta anda uns
 * poucos pixels no sentido dela; no clique, encolhe um pouco. Decorativo —
 * quem descreve a ação é o texto do link.
 */
export function ArrowDisc({ className, tone = "ink", size = "md", direction = "forward" }: Props) {
  return (
    <span
      aria-hidden="true"
      data-tone={tone === "paper" ? "paper" : undefined}
      data-size={size === "md" ? undefined : size}
      data-dir={direction}
      className={cn("arrow-disc", className)}
    >
      <span>{glyphs[direction]}</span>
    </span>
  );
}
