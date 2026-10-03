import Link from "next/link";
import { ArrowDisc } from "@/components/ui/ArrowDisc";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  label: string;
  className?: string;
  tone?: "ink" | "paper";
  /** Sai do site: abre em outra aba e leva ↗; senão, → . */
  external?: boolean;
};

/**
 * Rótulo + disco com seta: o botão padrão do site — pequeno, sem borda dura,
 * sem sombra. A área de toque tem no mínimo 44px de altura.
 */
export function ArrowLink({
  href,
  label,
  className,
  tone = "ink",
  external = false,
}: Props) {
  const content = (
    <>
      <span className="label">{label}</span>
      <ArrowDisc size="sm" tone={tone === "ink" ? "ink" : "paper"} direction={external ? "external" : "forward"} />
    </>
  );
  const classes = cn(
    "inline-flex min-h-11 w-fit items-center gap-3",
    tone === "ink" ? "text-ink" : "text-paper",
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
