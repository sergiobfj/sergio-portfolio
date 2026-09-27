"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { site, socials } from "@/data/portfolio";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { delay } from "@/lib/cn";

type Props = {
  locale: Locale;
  /** Só a navegação: o que vai para um client component vai no HTML de toda página. */
  dict: Pick<Dictionary, "nav">;
};

/**
 * Disco fixo no canto + painel escuro que entra pela direita. O disco
 * inverte sobre as seções pretas (um IntersectionObserver numa faixa fina no
 * topo da tela — nenhum listener de scroll) e sobre o próprio painel.
 */
export function MenuOverlay({ locale, dict }: Props) {
  const [open, setOpen] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const items = [
    { label: dict.nav.work, href: `/${locale}#work` },
    { label: dict.nav.experience, href: `/${locale}#experience` },
    { label: dict.nav.about, href: `/${locale}#about` },
    { label: dict.nav.contact, href: `/${locale}#contact` },
  ];

  // Qual tom está sob o disco? Seções escuras declaram data-tone="dark";
  // as superfícies pretas dos trabalhos também contam.
  useEffect(() => {
    const targets = document.querySelectorAll(
      "[data-tone='dark'], .surface[data-tone='void']",
    );
    if (!targets.length || typeof IntersectionObserver === "undefined") return;

    const inside = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inside.add(entry.target);
          else inside.delete(entry.target);
        }
        setOverDark(inside.size > 0);
      },
      // Faixa de ~5% da altura, na altura do disco.
      { rootMargin: "-3% 0px -92% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      setOverDark(false);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const page = document.getElementById("page");
    const root = document.documentElement;
    const { overflow, paddingRight } = document.body.style;
    // Trava a rolagem sem o salto lateral: a largura da barra vira padding
    // e empurra o disco fixo na mesma medida.
    const scrollbar = window.innerWidth - root.clientWidth;
    root.style.setProperty("--sbw", `${scrollbar}px`);
    document.body.style.paddingRight = `${scrollbar}px`;
    document.body.style.overflow = "hidden";
    page?.setAttribute("inert", "");
    panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      root.style.removeProperty("--sbw");
      page?.removeAttribute("inert");
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="menu-panel"
        aria-label={open ? dict.nav.close : dict.nav.open}
        data-tone={open || overDark ? "light" : undefined}
        className="menu-button"
      >
        <span aria-hidden="true" className="menu-button__lines">
          <span />
          <span />
        </span>
      </button>

      <div
        aria-hidden="true"
        data-open={open}
        onClick={close}
        className="menu-backdrop"
      />

      <div
        ref={panelRef}
        id="menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label={dict.nav.menu}
        inert={!open}
        data-open={open}
        className="menu-panel"
      >
        <span aria-hidden="true" className="menu-panel__curve" />

        <div className="flex h-full flex-col justify-between overflow-y-auto px-[max(var(--gutter),2rem)] pt-[calc(var(--bar)+4vh)] pb-8 md:px-14 md:pb-12">
          <div>
            <p
              className="menu-item label text-fog"
              style={delay(80)}
            >
              {dict.nav.menu}
            </p>
            <div
              className="menu-item mt-5 h-px w-full bg-rule-dark"
              style={delay(80)}
            />

            <nav aria-label={dict.nav.main} className="mt-8 md:mt-10">
              <ul className="menu-links flex flex-col gap-1">
                {items.map((item, i) => (
                  <li
                    key={item.href}
                    className="menu-item"
                    style={delay(140 + i * 60)}
                  >
                    <Link
                      href={item.href}
                      onClick={close}
                      className="menu-link display block w-fit py-1 text-[clamp(3.25rem,7.5vw,6.5rem)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div
            className="menu-item mt-14 grid grid-cols-2 gap-x-6 gap-y-10"
            style={delay(340)}
          >
            <div>
              <p className="label mb-4 text-fog">{dict.nav.language}</p>
              <LocaleSwitcher
                locale={locale}
                label={dict.nav.language}
                tone="paper"
                size="lg"
                onNavigate={close}
              />
            </div>

            <div>
              <p className="label mb-4 text-fog">{dict.nav.social}</p>
              <ul className="flex flex-col gap-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-[0.9375rem] text-paper/80 transition-colors duration-300 hover:text-paper"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`mailto:${site.email}`}
              className="col-span-2 w-fit text-[0.9375rem] text-paper/80 underline decoration-paper/25 underline-offset-[6px] transition-colors duration-300 hover:text-paper hover:decoration-paper"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
