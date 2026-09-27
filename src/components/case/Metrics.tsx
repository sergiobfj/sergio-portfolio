import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export type Metric = {
  value: string;
  /** Palavra antes do valor, na serifa ("Desde 2020"): não disputa com o número. */
  prefix?: string;
  lines: readonly string[];
  note?: string | null;
  /** Período ou data, em algarismos tabulares. */
  meta?: string;
};

/**
 * Medidas editoriais: uma palavra ou número grande, uma legenda curta e um
 * filete por cima. O tamanho acompanha a coluna (cqi), então "2020" e
 * "Técnico" dividem a mesma régua em qualquer largura. Horizontal a partir
 * do tablet; no celular, uma embaixo da outra. `sm` é para palavras longas
 * ("Construcción"), `lg` para números curtos.
 */
export function Metrics({
  items,
  size = "md",
  className,
}: {
  items: readonly Metric[];
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const columns =
    items.length === 3
      ? "sm:grid-cols-3"
      : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <ul className={cn("grid grid-cols-1 gap-x-6", columns, className)}>
      {items.map((item, i) => (
        <li key={item.value} className="@container">
          <Reveal
            variant="draw"
            delay={i * 90}
            className="h-px w-full bg-current opacity-20"
          />
          <Reveal delay={i * 90 + 60} className="pt-6 pb-12 sm:pb-0">
            <p
              className={cn(
                "display",
                size === "lg" && "text-[min(30cqi,11rem)]",
                size === "md" && "text-[min(22cqi,7.5rem)]",
                size === "sm" && "text-[min(16cqi,5rem)]",
              )}
            >
              {item.prefix ? (
                <span className="voice mr-[0.2em] text-[0.46em] tracking-normal normal-case italic">
                  {item.prefix}
                </span>
              ) : null}
              {item.value}
            </p>
            <p className="label mt-5 max-w-[26ch] text-[0.75rem] leading-[1.35] opacity-65">
              {item.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            {item.note ? (
              <p className="mt-3 text-[0.875rem] leading-snug opacity-65">
                {item.note}
              </p>
            ) : null}
            {item.meta ? (
              <p className="meta mt-2 opacity-65">{item.meta}</p>
            ) : null}
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
