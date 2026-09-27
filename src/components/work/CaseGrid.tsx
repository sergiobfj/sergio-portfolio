import Link from "next/link";
import { isHeavy, type WorkCase } from "@/data/portfolio";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { ArrowDisc } from "@/components/ui/ArrowDisc";
import { Reveal } from "@/components/ui/Reveal";
import { Surface } from "@/components/ui/Surface";
import { WorkCursor } from "@/components/ui/WorkCursor";
import { caseTitle } from "@/lib/work";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/cn";
import { pairSpans } from "@/lib/spreads";

/** O que vai impresso no canto da superfície: depende de onde o grid está. */
type Context = "company" | "category";

type ItemProps = {
  item: WorkCase;
  dict: Dictionary;
  locale: Locale;
  context: Context;
};

function CaseSurface({
  item,
  dict,
  context,
  sizes,
  className,
}: Omit<ItemProps, "locale"> & { sizes: string; className: string }) {
  const lead =
    context === "company"
      ? item.company
      : (dict.cases[item.slug].kicker ??
        dict.categories[item.category].title.join(" "));

  return (
    <Surface
      tone={item.tone}
      media={item.media}
      cover={caseTitle(item, dict)}
      lead={lead ? <span className="label">{lead}</span> : null}
      trail={item.year ? <span className="meta">{item.year}</span> : null}
      sizes={sizes}
      className={className}
    />
  );
}

/**
 * Legenda: nome, uma linha de resumo e, quando for o caso, o aviso discreto
 * de código privado. Sem resumo ainda, a linha diz que o case está em
 * construção — a ausência de texto nunca some com o trabalho.
 */
function Caption({
  item,
  dict,
  className,
}: Omit<ItemProps, "locale" | "context"> & { className?: string }) {
  const copy = dict.cases[item.slug];

  return (
    <Reveal delay={90} className={cn("flex items-start justify-between gap-6", className)}>
      <div>
        <h3 className="display text-title transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
          {caseTitle(item, dict)}
        </h3>
        <p className="mt-3 max-w-[34ch] text-[0.9375rem] leading-snug text-ash">
          {copy.summary ?? dict.work.caseSoon}
        </p>
        {item.repositoryVisibility === "private" ? (
          <p className="label mt-4 text-ash">{dict.caseStudy.privateCode}</p>
        ) : null}
      </div>
      <ArrowDisc />
    </Reveal>
  );
}

function CaseLink({
  item,
  locale,
  className,
  children,
}: Pick<ItemProps, "item" | "locale"> & {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <article className={className}>
      <Link
        href={routes.case(locale, item)}
        data-project=""
        className="group block h-full"
      >
        {children}
      </Link>
    </article>
  );
}

const TALL = "md:h-[clamp(22rem,37vw,44rem)]";
const LOW = "md:h-[clamp(16rem,24vw,28rem)]";

/**
 * Par: duas superfícies coladas, mesma altura. O peso decide a largura — o
 * case completo fica com 7 colunas; dois leves dividem 6/6 e ficam mais
 * baixos; dois completos alternam 7/5 e 5/7 de uma linha para a outra.
 */
function Pair({
  items,
  row,
  ...props
}: Omit<ItemProps, "item"> & { items: [WorkCase, WorkCase]; row: number }) {
  const [a, b] = items.map((item) => isHeavy(item.weight));
  const light = !a && !b;
  const spans = light
    ? ["md:col-span-6", "md:col-span-6"]
    : pairSpans(a === b ? row % 2 === 1 : b);

  return (
    <div className="grid grid-cols-1 gap-x-(--seam) gap-y-12 md:grid-cols-12">
      {items.map((item, i) => (
        <CaseLink key={item.slug} item={item} {...props} className={spans[i]}>
          <CaseSurface
            item={item}
            {...props}
            sizes="(max-width: 768px) 100vw, 58vw"
            className={cn("aspect-(--ratio) md:aspect-auto", light ? LOW : TALL)}
          />
          <Caption item={item} dict={props.dict} className="mt-5 md:mt-6" />
        </CaseLink>
      ))}
    </div>
  );
}

/** Um leve sozinho não vira destaque: meia largura, altura baixa. */
function Single(props: ItemProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12">
      <CaseLink {...props} className="md:col-span-6">
        <CaseSurface
          {...props}
          sizes="(max-width: 768px) 100vw, 46vw"
          className={cn("aspect-(--ratio) md:aspect-auto", LOW)}
        />
        <Caption item={props.item} dict={props.dict} className="mt-5 md:mt-6" />
      </CaseLink>
    </div>
  );
}

/** Destaque (um case completo sozinho): uma superfície larga, e a legenda ao lado, no vão. */
function Feature({ side, ...props }: ItemProps & { side: "left" | "right" }) {
  const right = side === "right";

  return (
    <CaseLink {...props}>
      {/* Lado a lado só a partir de lg: no tablet a legenda não cabe no vão. */}
      <div className="grid grid-cols-1 gap-x-(--seam) gap-y-5 lg:grid-cols-12 lg:items-end">
        <CaseSurface
          {...props}
          sizes="(max-width: 768px) 100vw, 66vw"
          className={cn(
            "aspect-(--ratio) lg:col-span-8 lg:aspect-auto lg:h-[clamp(20rem,31vw,38rem)]",
            right ? "lg:order-2" : "lg:order-1",
          )}
        />
        <Caption
          item={props.item}
          dict={props.dict}
          className={cn(
            "lg:col-span-4 lg:pb-1",
            right ? "lg:order-1 lg:pr-[8%]" : "lg:order-2 lg:pl-[8%]",
          )}
        />
      </div>
    </CaseLink>
  );
}

/**
 * Grid editorial de cases — nas páginas de categoria e de experiência. Linhas
 * de dois, na ordem do dado; o peso (`weight`) decide quem fica largo, e um
 * case completo que sobra sozinho vira destaque.
 *
 * `context` escolhe o rótulo impresso na superfície: a empresa (dentro de
 * uma categoria) ou o `kicker` do case (dentro de uma empresa).
 */
export function CaseGrid({
  items,
  dict,
  locale,
  context,
}: {
  items: WorkCase[];
  dict: Dictionary;
  locale: Locale;
  context: Context;
}) {
  const rows: WorkCase[][] = [];
  for (let i = 0; i < items.length; i += 2) rows.push(items.slice(i, i + 2));
  const shared = { dict, locale, context };

  return (
    <WorkCursor label={dict.work.cursor}>
      <div className="flex flex-col gap-y-[clamp(3.5rem,8vw,7rem)] [--seam:clamp(0.625rem,1vw,1rem)]">
        {rows.map((row, i) => {
          const [first, second] = row;
          if (second) {
            return <Pair key={first.slug} items={[first, second]} row={i} {...shared} />;
          }
          return isHeavy(first.weight) ? (
            <Feature
              key={first.slug}
              item={first}
              side={i % 2 === 0 ? "left" : "right"}
              {...shared}
            />
          ) : (
            <Single key={first.slug} item={first} {...shared} />
          );
        })}
      </div>
    </WorkCursor>
  );
}
