"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn, delay as delayVar } from "@/lib/cn";

type Props = {
  id?: string;
  /** Linhas simples. Para uma linha com elemento embutido, use `children`
   *  com `<span className="mask-line"><span>…</span></span>`. */
  lines?: readonly string[];
  children?: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  "aria-label"?: string;
};

/** Reveal por máscara: cada linha sobe de dentro de um overflow hidden. */
export function RevealLines({
  id,
  lines = [],
  children,
  className,
  delay = 0,
  stagger = 90,
  as: Tag = "h2",
  "aria-label": ariaLabel,
}: Props) {
  const ref = useInView<HTMLHeadingElement>({ threshold: 0.2 });

  return (
    <Tag ref={ref} id={id} aria-label={ariaLabel} className={cn(className)}>
      {children ??
        lines.map((line, i) => (
          <span key={line} className="mask-line">
            <span style={delayVar(delay + i * stagger)}>{line}</span>
          </span>
        ))}
    </Tag>
  );
}
