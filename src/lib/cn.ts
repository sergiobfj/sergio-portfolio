export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Converte um delay em ms na custom property lida pelo motion system. */
export function delay(ms: number) {
  return { "--delay": `${ms}ms` } as React.CSSProperties;
}

/**
 * Custom properties lidas por `.fit-display`: o display no maior tamanho
 * que ainda cabe na largura. Mede pela linha mais longa (tablet e desktop)
 * e pela palavra mais longa (celular, onde a linha pode quebrar), com meio
 * em por letra de folga para as mais largas. `maxSm` é o teto no celular,
 * onde um título curto pode crescer mais que no desktop.
 */
export function fit(
  lines: readonly string[],
  max: string,
  budget = 86,
  maxSm = max,
) {
  const longest = (items: readonly string[]) =>
    Math.max(...items.map((item) => item.length));
  const size = (chars: number) => `${(budget / (chars * 0.5)).toFixed(2)}vw`;

  return {
    "--fit-max": max,
    "--fit-max-sm": maxSm,
    "--fit-line": size(longest(lines)),
    "--fit-word": size(longest(lines.flatMap((line) => line.split(" ")))),
  } as React.CSSProperties;
}
