import { background } from "@/data/portfolio";
import type { Dictionary } from "@/i18n/dictionary";
import { Metrics, type Metric } from "@/components/case/Metrics";
import { RevealLines } from "@/components/ui/RevealLines";

/**
 * Background em quatro medidas: trajetória em tecnologia, formação técnica,
 * graduação, empreendedorismo. Uma palavra grande e uma legenda curta cada — nada de
 * currículo, ícone ou card. Mesma lógica da Experiência logo acima: o
 * título em cima, centralizado; as quatro medidas lado a lado, na largura
 * toda. Termina em SECCO, e a seção escura da SECCO vem logo em seguida.
 */
export function Background({ dict }: { dict: Dictionary }) {
  const copy = dict.background;
  const { technicalEducation: technical, degree, entrepreneurship } = background;
  const [role, ...titles] = entrepreneurship.roles;

  const items: Metric[] = [
    // Trajetória em tecnologia, não "anos de experiência": começa no curso
    // de Informática Básica.
    { prefix: copy.since, value: background.techSince, lines: [copy.technology] },
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
      className="gutter-x bg-paper pb-[18vh]"
    >
      <RevealLines
        as="h2"
        id="background-heading"
        lines={[copy.title]}
        className="display mb-[5vh] text-[clamp(1.6rem,2.6vw,2.4rem)] md:text-center"
      />
      <Metrics items={items} />
    </section>
  );
}
