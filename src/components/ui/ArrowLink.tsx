import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  label: string;
  className?: string;
  tone?: "ink" | "paper";
  external?: boolean;
};

/**
 * Rótulo + disco com seta. É o botão padrão do site: pequeno, sem borda,
 * sem sombra. No hover o disco gira levemente e a seta avança.
 */
export function ArrowLink({
  href,
  label,
  className,
  tone = "ink",
  external = false,
}: Props) {
  const dark = tone === "ink";
  const content = (
    <>
      <span className="label">{label}</span>
      <span
        aria-hidden="true"
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/arrow:rotate-45 group-focus-visible/arrow:rotate-45",
          dark ? "bg-ink text-paper" : "bg-paper text-ink",
        )}
      >
        ↗
      </span>
    </>
  );

  const classes = cn(
    "group/arrow inline-flex w-fit items-center gap-3 transition-opacity duration-300 hover:opacity-70",
    dark ? "text-ink" : "text-paper",
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={classes}>
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
