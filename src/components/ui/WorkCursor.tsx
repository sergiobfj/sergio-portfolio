"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Cursor da seção de trabalhos: um único nó fixo, movido por transform dentro
 * de um rAF. Só monta em ponteiro fino, não usa biblioteca e some com a seção.
 * A posição não tem transição; só escala e opacidade animam.
 */
export function WorkCursor({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const scopeRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scope = scopeRef.current;
    const cursor = cursorRef.current;
    if (!scope || !cursor) return;

    const fine = window.matchMedia("(pointer: fine) and (hover: hover)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    let active = false;

    const render = () => {
      frame = 0;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      cursor.dataset.active = String(active);
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      active = Boolean(
        (event.target as Element | null)?.closest?.("[data-project]"),
      );
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onLeave = () => {
      active = false;
      if (!frame) frame = requestAnimationFrame(render);
    };

    cursor.dataset.enabled = "true";
    scope.addEventListener("pointermove", onMove, { passive: true });
    scope.addEventListener("pointerleave", onLeave, { passive: true });

    return () => {
      scope.removeEventListener("pointermove", onMove);
      scope.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={scopeRef}>
      {children}
      <div ref={cursorRef} aria-hidden="true" className="work-cursor">
        <span className="label">{label}</span>
      </div>
    </div>
  );
}
