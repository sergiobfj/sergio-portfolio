"use client";

import { useEffect, useRef } from "react";
import { cn, delay } from "@/lib/cn";

/** Voltas da faixa: duas metades iguais, para o laço não ter emenda. */
const RUNS = 4;

/**
 * Uma faixa do nome. `heading` faz da primeira volta o h1; as outras voltas
 * (e a faixa inteira da camada de cima) são decoração.
 */
function Band({ name, at, heading = false }: { name: string; at: number; heading?: boolean }) {
  return (
    <div
      className={cn("hero-band__layer", heading ? "hero-ink" : "hero-over")}
      aria-hidden={heading ? undefined : true}
    >
      {/* A máscara sobe a faixa inteira; dentro dela, o laço horizontal. */}
      <div className="mask-line hero-mask">
        <div style={delay(at)}>
          <div className="hero-band__track">
            {Array.from({ length: RUNS }, (_, i) =>
              heading && i === 0 ? (
                <h1 key={i} id="hero-name" className="hero-band__run">
                  {name}
                </h1>
              ) : (
                <span key={i} className="hero-band__run" aria-hidden={heading ? true : undefined}>
                  {name}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * O nome correndo de margem a margem, na frente do retrato. São duas faixas
 * idênticas e sincronizadas (mesma animação, mesmo início): a de tinta, com
 * a silhueta recortada, e a clara, só dentro da silhueta — o nome troca de
 * tom ao atravessar o corpo e não some sobre a camisa preta.
 *
 * O laço é CSS (transform); aqui só um IntersectionObserver o pausa quando a
 * hero sai da tela — nada roda por frame.
 */
export function HeroName({ name, at }: { name: string; at: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const band = ref.current;
    if (!band || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(([entry]) => {
      band.toggleAttribute("data-paused", !entry.isIntersecting);
    });
    observer.observe(band);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="hero-band display">
      <Band name={name} at={at} heading />
      <Band name={name} at={at} />
    </div>
  );
}
