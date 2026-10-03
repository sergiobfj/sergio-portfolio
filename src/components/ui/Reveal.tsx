"use client";

import { useEffect, type CSSProperties, type ReactNode } from "react";
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
 * Antecedência com que as imagens de um `clip` começam a baixar: uma tela e
 * meia antes de o bloco chegar.
 */
const PRELOAD_MARGIN = "0px 0px 150% 0px";

/**
 * Estado inicial e transição vivem no CSS; aqui só marcamos o elemento.
 *
 * `clip` precisa de dois nós: o Chrome considera clip-path ao calcular
 * interseção, então um elemento totalmente recortado nunca dispararia o
 * observer. O nó observado fica por fora, o recorte por dentro.
 *
 * Pelo mesmo motivo, o lazy loading nativo de uma imagem recortada só
 * começaria quando o recorte abrisse — a foto chegaria depois da animação.
 * Por isso o `clip` acorda as imagens de dentro (`loading="eager"`) quando o
 * bloco ainda está a uma tela e meia de distância.
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

  useEffect(() => {
    const el = ref.current;
    if (variant !== "clip" || !el) return;
    const wake = () => {
      for (const img of el.querySelectorAll<HTMLImageElement>('img[loading="lazy"]')) {
        img.loading = "eager";
      }
    };
    if (typeof IntersectionObserver === "undefined") {
      wake();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        wake();
        observer.disconnect();
      },
      { rootMargin: PRELOAD_MARGIN },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, variant]);

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
