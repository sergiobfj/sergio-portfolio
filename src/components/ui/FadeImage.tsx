"use client";

import Image, { type ImageProps } from "next/image";
import { useCallback } from "react";

/**
 * next/image com uma entrada curta: se a imagem ainda não chegou quando o
 * componente monta, ela fica transparente sobre o tom da superfície e
 * aparece num fade quando carrega. Se já chegou (cache, preload), nada muda.
 * Sem JS, a imagem aparece normalmente — o estado só existe depois de montar.
 */
export function FadeImage({ alt, className, ...props }: ImageProps) {
  const ref = useCallback((img: HTMLImageElement | null) => {
    if (!img || img.complete) return;
    img.dataset.loading = "";
    const done = () => delete img.dataset.loading;
    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", done, { once: true });
  }, []);

  return <Image ref={ref} alt={alt} className={["fade-image", className].filter(Boolean).join(" ")} {...props} />;
}
