"use client";

import { useEffect, useRef } from "react";

type Options = {
  threshold?: number;
  rootMargin?: string;
};

/**
 * Marca o elemento com data-revealed="true" na primeira vez que ele entra na
 * viewport e desconecta o observer em seguida — nenhum listener sobrevive ao
 * reveal. Toda a animação em si é CSS.
 */
export function useInView<T extends HTMLElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -12% 0px",
}: Options = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.dataset.revealed = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          el.dataset.revealed = "true";
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
