"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { pad } from "@/data/portfolio";
import { delay } from "@/lib/cn";

/** Quando as palavras começam a subir: depois do nome e do filete. */
const WORDS_AT = 720;
const WORDS_STAGGER = 150;

/**
 * As três palavras sob o nome, como um lockup: um filete de margem a margem
 * e, pendurada na borda direita do nome, uma escada que desce para a
 * esquerda — cada palavra um degrau, com o índice na quina. A do meio em
 * itálico. Tudo é composição; o movimento só acompanha.
 *
 * Entrada: o filete se desenha depois do nome e as palavras sobem da
 * máscara, uma a uma. No mouse, cada degrau desliza poucos pixels conforme
 * o cursor — mais o de baixo, menos o de cima —, com atraso, nunca atrás
 * do ponteiro. Sem mouse fino, com movimento reduzido ou fora da tela, fica
 * parado. Sem JS, a composição é a mesma.
 */
export function HeroWords({ words }: { words: readonly string[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    const apply = () => {
      frame = 0;
      root.style.setProperty("--mx", x.toFixed(3));
      root.style.setProperty("--my", y.toFixed(3));
    };
    const onMove = (event: PointerEvent) => {
      x = (event.clientX / window.innerWidth) * 2 - 1;
      y = (event.clientY / window.innerHeight) * 2 - 1;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    // Só escuta enquanto a hero está na tela.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) window.addEventListener("pointermove", onMove, { passive: true });
      else window.removeEventListener("pointermove", onMove);
    });
    observer.observe(root);

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="hero-lockup">
      <span aria-hidden="true" className="hero-rule" />
      <p className="hero-words voice">
        {words.map((word, i) => (
          <span
            key={word}
            className="hero-step"
            style={{ "--step": words.length - 1 - i, "--depth": i + 1 } as CSSProperties}
          >
            <span aria-hidden="true" className="hero-index meta" style={delay(WORDS_AT + i * WORDS_STAGGER + 260)}>
              {pad(i + 1)}
            </span>
            <span className="mask-line hero-mask">
              <span className="hero-word" style={delay(WORDS_AT + i * WORDS_STAGGER)}>
                {word}
              </span>
            </span>
          </span>
        ))}
      </p>
    </div>
  );
}
