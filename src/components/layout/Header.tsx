import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { Signature } from "@/components/ui/Signature";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { delay } from "@/lib/cn";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

/**
 * Sem navbar: a assinatura à esquerda, o idioma à direita — e o espaço do
 * disco de menu, que é fixo e mora fora daqui. A faixa rola com a página.
 */
export function Header({ locale, dict }: Props) {
  return (
    <header className="gutter-x absolute inset-x-0 top-0 z-40 flex h-(--bar) items-center justify-between gap-4">
      <Link
        href={`/${locale}`}
        aria-label={dict.nav.home}
        className="hero-fade -ml-2 rounded-full"
        style={delay(80)}
      >
        <Signature />
      </Link>

      <LocaleSwitcher
        locale={locale}
        label={dict.nav.language}
        className="hero-fade mr-[calc(var(--disc)+clamp(1rem,2vw,2rem))]"
        style={delay(160)}
      />
    </header>
  );
}
