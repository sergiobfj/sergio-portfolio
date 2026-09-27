"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeCookie, type Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";

type Props = {
  locale: Locale;
  label: string;
  tone?: "ink" | "paper";
  /** `lg` é a versão do painel de menu: display, em tamanho de link. */
  size?: "sm" | "lg";
  className?: string;
  style?: CSSProperties;
  onNavigate?: () => void;
};

/**
 * PT · EN · ES. Três links para a mesma rota em outro idioma — navegação
 * client-side, sem reload e com `scroll={false}` para manter a posição.
 * A preferência fica num cookie que o middleware lê na raiz.
 */
export function LocaleSwitcher({
  locale,
  label,
  tone = "ink",
  size = "sm",
  className,
  style,
  onNavigate,
}: Props) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(pt|en|es)(?=\/|$)/, "");
  const dark = tone === "ink";
  const large = size === "lg";

  return (
    <div
      role="group"
      aria-label={label}
      className={cn("flex items-center", large ? "gap-5" : "gap-3", className)}
      style={style}
    >
      {locales.map((item) => {
        const active = item === locale;
        return (
          <Link
            key={item}
            href={`/${item}${rest}`}
            hrefLang={item}
            scroll={false}
            aria-current={active ? "true" : undefined}
            onClick={() => {
              document.cookie = `${localeCookie}=${item};path=/;max-age=31536000;samesite=lax`;
              onNavigate?.();
            }}
            className={cn(
              "relative py-1 transition-opacity duration-300",
              large ? "display text-[clamp(1.6rem,3vw,2.25rem)]" : "label",
              dark ? "text-ink" : "text-paper",
              active ? "opacity-100" : "opacity-40 hover:opacity-85",
            )}
          >
            {item.toUpperCase()}
            <span
              aria-hidden="true"
              className={cn(
                "absolute left-1/2 size-1 -translate-x-1/2 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                large ? "-bottom-2" : "-bottom-1.5",
                dark ? "bg-ink" : "bg-paper",
                active ? "scale-100" : "scale-0",
              )}
            />
          </Link>
        );
      })}
    </div>
  );
}
