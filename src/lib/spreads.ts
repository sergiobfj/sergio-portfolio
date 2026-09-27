/**
 * Sequência editorial de par e destaque: 2 · 1 · 2 · 1 …
 * Um item novo cai sozinho no próximo lugar da sequência.
 */
export function toSpreads<T>(items: readonly T[]) {
  const spreads: T[][] = [];
  let i = 0;
  while (i < items.length) {
    const size = spreads.length % 2 === 0 ? 2 : 1;
    spreads.push(items.slice(i, i + size));
    i += size;
  }
  return spreads;
}

/** Larguras de um par no grid de 12: 7/5, e 5/7 no par seguinte. */
export function pairSpans(flip: boolean) {
  return flip
    ? ["md:col-span-5", "md:col-span-7"]
    : ["md:col-span-7", "md:col-span-5"];
}

/** "16 / 10" → 1.6 — a proporção de um MediaSlot como número. */
export function ratioOf(ratio: string) {
  const [w, h] = ratio.split("/").map((part) => Number.parseFloat(part));
  return w && h ? w / h : 1;
}

/**
 * Lado a lado, cada mídia ganha largura proporcional à própria proporção —
 * assim as alturas batem sempre. Mesma proporção divide meio a meio;
 * proporções diferentes geram uma assimetria que vem da imagem, não do grid.
 * Vai no `style`; a classe `md:[flex:var(--grow)_1_0%]` aplica do tablet em diante.
 */
export function growStyle(ratio: string) {
  return { "--grow": ratioOf(ratio).toFixed(4) } as React.CSSProperties;
}
