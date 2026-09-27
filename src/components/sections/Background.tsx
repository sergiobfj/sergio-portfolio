import { background } from "@/data/portfolio";
import type { Dictionary } from "@/i18n/dictionary";
import { Metrics, type Metric } from "@/components/case/Metrics";
import { RevealLines } from "@/components/ui/RevealLines";

/**
 * Background em quatro medidas: experiência, formação técnica, graduação,
 * empreendedorismo. Uma palavra grande e uma legenda curta cada — nada de
 * currículo, ícone ou card. Termina em SECCO, e a seção escura da SECCO vem
 * logo em seguida.
 */
export function Background({ dict }: { dict: Dictionary }) {
  const copy = dict.background;
  const { technicalEducation: technical, degree, entrepreneurship } = background;
  const [role, ...titles] = entrepreneurship.roles;

  const items: Metric[] = [
    { value: background.yearsBuilding, lines: [copy.years] },
    {
      value: copy.technical.value,
      lines: [copy.technical.title],
      note: technical.institution,
      meta: `${technical.from} — ${technical.to}`,
    },
    {
      value: copy.degree.value,
      lines: [copy.degree.title, copy.degree.status],
      note: degree.institution,
      meta: `${degree.from} — ${degree.to}`,
    },
    {
      value: role,
      lines: [titles.join(" / "), entrepreneurship.company],
      meta: `${copy.since} ${entrepreneurship.since}`,
    },
  ];

  return (
    <section
      aria-labelledby="background-heading"
      className="gutter-x bg-paper pb-[20vh]"
    >
      <RevealLines
        as="h2"
        id="background-heading"
        lines={[copy.title]}
        className="display mb-[6vh] text-[clamp(1.6rem,2.6vw,2.4rem)]"
      />
      <Metrics items={items} />
    </section>
  );
}
