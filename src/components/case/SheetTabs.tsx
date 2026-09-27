import { Reveal } from "@/components/ui/Reveal";

/**
 * Abas de planilha: a borda de baixo de um arquivo, com a primeira aba
 * preenchida e o filete seguindo até a margem. `more` acrescenta um "+"
 * quando o número de abas varia.
 */
export function SheetTabs({
  label,
  tabs,
  more = false,
  className,
}: {
  label: string;
  tabs: readonly string[];
  more?: boolean;
  className?: string;
}) {
  return (
    <Reveal delay={120} className={className}>
      <p className="label text-ash">{label}</p>
      {/* No celular a tira rola na horizontal e sangra até a borda, como as
          abas de uma planilha de verdade; foco de teclado permite rolar. */}
      <ol aria-label={label} tabIndex={0} className="sheet-tabs mt-5">
        {tabs.map((tab, i) => (
          <li key={tab} className="sheet-tab" data-active={i === 0 ? "" : undefined}>
            {tab}
          </li>
        ))}
        {more ? (
          <li aria-hidden="true" className="sheet-tab">
            +
          </li>
        ) : null}
      </ol>
    </Reveal>
  );
}
