import Link from "next/link";
import { experiences, type WorkCase } from "@/data/portfolio";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { routes } from "@/lib/routes";

/**
 * A metadata pequena do topo: empresa, tipo, domínio — empilhados, como um
 * colofão. A empresa leva à página da experiência quando existe uma.
 */
export function CaseTags({
  item,
  dict,
  locale,
}: {
  item: WorkCase;
  dict: Dictionary;
  locale: Locale;
}) {
  const tags = dict.cases[item.slug].tags ?? [
    dict.categories[item.category].title.join(" "),
  ];
  const experience = experiences.find((entry) => entry.company === item.company);

  return (
    <ul className="leading-[1.6]">
      {item.company ? (
        <li>
          {experience ? (
            <Link
              href={routes.experience(locale, experience.key)}
              className="text-ink transition-opacity duration-300 hover:opacity-60"
            >
              {item.company}
            </Link>
          ) : (
            item.company
          )}
        </li>
      ) : null}
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

/**
 * Links do case: ao vivo, post do LinkedIn, repositório. Código privado não
 * vira botão desabilitado — vira uma linha discreta, e o case segue inteiro.
 */
export function CaseLinks({
  item,
  dict,
  privateLabel,
}: {
  item: WorkCase;
  dict: Dictionary;
  /** Texto do aviso de código privado; por padrão, o genérico. */
  privateLabel?: readonly string[];
}) {
  const privateCode = item.repositoryVisibility === "private";
  const links = [
    item.liveUrl && { href: item.liveUrl, label: dict.caseStudy.live },
    item.linkedinPost && { href: item.linkedinPost, label: dict.caseStudy.linkedin },
    !privateCode &&
      item.repository && { href: item.repository, label: dict.caseStudy.repository },
  ].filter((link): link is { href: string; label: string } => Boolean(link));

  return (
    <>
      {links.map((link) => (
        <ArrowLink key={link.href} href={link.href} label={link.label} external />
      ))}
      {privateCode ? (
        <p className="label text-ash">
          {(privateLabel ?? [dict.caseStudy.privateCode]).map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      ) : null}
    </>
  );
}
