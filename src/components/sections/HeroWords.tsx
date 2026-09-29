"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from "react";
import { delay } from "@/lib/cn";

/** Uma linha da lente: o topo e a altura da linha, o começo e a largura da palavra. */
type Box = { top: number; height: number; left: number; width: number };

type Phase = "off" | "dot" | "on";

/** Quando o ponto aparece: logo depois de as palavras terminarem de subir. */
const START = 1250;
/** Quanto tempo o ponto fica ponto antes de florescer. */
const BLOOM = 460;
/** Quanto tempo a cápsula fica em cada palavra. */
const DWELL = 3600;

/** Folga da cápsula em volta da palavra, em em do corpo das palavras. */
const PAD_X = 0.3;
const PAD_TOP = 0.11;
const PAD_BOTTOM = 0.13;

const two = (value: number) => String(value).padStart(2, "0");

/**
 * As três palavras sob o nome, e a assinatura do site em escala de hero: o
 * mesmo ponto que floresce em pílula no "Code by Sergio". Um ponto aparece
 * ao lado da primeira palavra, floresce numa cápsula escura que a inverte e,
 * sem pressa, desliza para a seguinte. Uma régua com o número da palavra
 * liga a margem à cápsula.
 *
 * A cápsula é uma lente: uma cópia das palavras, em papel sobre tinta,
 * recortada por um `clip-path` que só se move — a inversão acompanha a borda
 * exatamente, e nada no layout muda de tamanho. Mede-se a cópia (sem
 * transform) para saber onde cada palavra está.
 *
 * Sem JS, as palavras aparecem normais. Com movimento reduzido, a cápsula
 * fica parada na primeira. Fora da tela ou com a aba escondida, para. No
 * mouse, apontar uma palavra leva a cápsula até ela.
 */
export function HeroWords({ words, strut }: { words: readonly string[]; strut: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLSpanElement>(null);
  const boxes = useRef<Box[]>([]);
  const [phase, setPhase] = useState<Phase>("off");
  const [active, setActive] = useState(0);
  const [pointed, setPointed] = useState<number | null>(null);
  const [visible, setVisible] = useState(true);
  const [still, setStill] = useState(false);
  const shown = pointed ?? active;
  // O estado atual, para o resize e a fonte reposicionarem sem recriar os observers.
  const current = useRef({ shown, phase });
  current.current = { shown, phase };

  const measure = useCallback(() => {
    const lens = lensRef.current;
    if (!lens) return;
    boxes.current = Array.from(lens.querySelectorAll<HTMLElement>("[data-word]")).map(
      (word) => {
        const line = word.parentElement as HTMLElement;
        return {
          top: line.offsetTop,
          height: line.offsetHeight,
          left: word.offsetLeft,
          width: word.offsetWidth,
        };
      },
    );
  }, []);

  /** Leva a cápsula (e a régua) para a palavra `index`, no estado `phase`. */
  const place = useCallback((index: number, state: Phase) => {
    const lens = lensRef.current;
    const root = rootRef.current;
    const box = boxes.current[index];
    if (!lens || !root || !box) return;

    const em = Number.parseFloat(getComputedStyle(lens).fontSize);
    const width = lens.offsetWidth;
    const height = lens.offsetHeight;
    let top = box.top - PAD_TOP * em;
    let bottom = box.top + box.height + PAD_BOTTOM * em;
    const left = box.left - PAD_X * em;
    let right = box.left + box.width + PAD_X * em;

    if (state === "off") {
      // Um ponto sem área, no lugar onde o ponto vai nascer.
      const middle = (top + bottom) / 2;
      top = middle;
      bottom = middle;
      right = left;
    } else if (state === "dot") {
      // Um disco da altura da cápsula: o ponto da assinatura.
      right = left + (bottom - top);
    }

    lens.style.setProperty(
      "--clip",
      `inset(${top}px ${width - right}px ${height - bottom}px ${left}px round 999px)`,
    );
    const lensTop = lens.offsetTop + (lens.offsetParent as HTMLElement).offsetTop;
    root.style.setProperty("--cy", `${lensTop + box.top + box.height / 2}px`);
  }, []);

  /** Reposiciona sem animar: depois de um resize ou da troca de fonte. */
  const settle = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    measure();
    root.dataset.instant = "";
    place(current.current.shown, current.current.phase);
    requestAnimationFrame(() => requestAnimationFrame(() => delete root.dataset.instant));
  }, [measure, place]);

  useLayoutEffect(() => {
    measure();
    place(shown, phase);
  }, [measure, place, shown, phase]);

  // A coreografia de entrada: ponto, depois cápsula.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setStill(true);
      setPhase("on");
      return;
    }
    const dot = window.setTimeout(() => setPhase("dot"), START);
    const bloom = window.setTimeout(() => setPhase("on"), START + BLOOM);
    return () => {
      window.clearTimeout(dot);
      window.clearTimeout(bloom);
    };
  }, []);

  // Medidas mudam com a largura e quando a fonte termina de carregar.
  useEffect(() => {
    const lens = lensRef.current;
    if (!lens) return;
    const observer = new ResizeObserver(() => settle());
    observer.observe(lens);
    document.fonts?.ready.then(() => settle());
    return () => observer.disconnect();
  }, [settle]);

  // Só anda quando dá para ver: na tela e com a aba aberta.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(root);
    const onVisibility = () => setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    if (phase !== "on" || still || !visible || pointed !== null) return;
    const id = window.setInterval(
      () => setActive((current) => (current + 1) % words.length),
      DWELL,
    );
    return () => window.clearInterval(id);
  }, [phase, still, visible, pointed, words.length]);

  const onPointerOver = (event: PointerEvent) => {
    if (event.pointerType !== "mouse" || phase !== "on") return;
    const word = (event.target as HTMLElement).closest<HTMLElement>("[data-i]");
    if (word) setPointed(Number(word.dataset.i));
  };

  const onPointerLeave = () => {
    if (pointed === null) return;
    // O ciclo continua de onde o mouse deixou, sem voltar atrás.
    setActive(pointed);
    setPointed(null);
  };

  return (
    <div ref={rootRef} className="hero-sub" data-on={phase === "off" ? undefined : ""}>
      {/* Régua invisível: a primeira palavra do nome, no corpo do nome. No
          desktop, a coluna da régua tem exatamente essa largura — as
          palavras começam sob a segunda palavra do nome. */}
      <span aria-hidden="true" className="hero-sub__strut display">
        {strut}
      </span>

      <span aria-hidden="true" className="hero-lead">
        <span className="hero-lead__row">
          <span key={shown} className="hero-lead__index meta">
            {two(shown + 1)}
          </span>
          <span className="hero-lead__rule" />
        </span>
      </span>

      <p className="hero-words voice" onPointerOver={onPointerOver} onPointerLeave={onPointerLeave}>
        {words.map((word, i) => (
          <span key={word} className="mask-line hero-mask">
            <span style={delay(460 + i * 90)}>
              <span data-i={i} className="hero-word">
                {word}
              </span>
            </span>
          </span>
        ))}

        <span
          ref={lensRef}
          aria-hidden="true"
          className="hero-lens"
          data-phase={phase}
          style={{ "--lens-pad": `${PAD_X + 0.1}em` } as CSSProperties}
        >
          {words.map((word) => (
            <span key={word} className="block">
              <span data-word="">{word}</span>
            </span>
          ))}
        </span>
      </p>
    </div>
  );
}
