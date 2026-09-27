"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn, delay as delayVar } from "@/lib/cn";

type Variant = "rise" | "draw" | "clip";

type Props = {
  children?: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  /** Estilo do nó externo (o observado). */
  style?: CSSProperties;
};

/**
 * Estado inicial e transição vivem no CSS; aqui só marcamos o elemento.
 *
 * `clip` precisa de dois nós: o Chrome considera clip-path ao calcular
 * interseção, então um elemento totalmente recortado nunca dispararia o
 * observer. O nó observado fica por fora, o recorte por dentro.
 */
export function Reveal({
  children,
  variant = "rise",
  delay = 0,
  className,
  style,
}: Props) {
  const ref = useInView<HTMLDivElement>();
  const timing = delay ? delayVar(delay) : undefined;

  if (variant === "clip") {
    return (
      <div ref={ref} className={cn(className)} style={style}>
        <div data-clip="" className="h-full" style={timing}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      {...{ [variant === "rise" ? "data-rise" : "data-draw"]: "" }}
      style={{ ...style, ...timing }}
      className={cn(className)}
    >
      {children}
    </div>
  );
}
