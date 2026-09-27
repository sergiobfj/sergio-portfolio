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
