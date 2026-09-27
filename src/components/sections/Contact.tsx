import Link from "next/link";
import { site, socials } from "@/data/portfolio";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { Reveal } from "@/components/ui/Reveal";
import { RevealLines } from "@/components/ui/RevealLines";
import { SectionCurve, type CurveTone } from "@/components/ui/SectionCurve";
import { Signature } from "@/components/ui/Signature";

/**
 * Fechamento escuro, quase uma última hero. A seção clara de cima desce
 * sobre ele em arco; um disco claro atravessa o filete — o único botão
 * grande do site.
 */
export function Contact({
  dict,
  locale,
  curve = "stone",
}: {
  dict: Dictionary;
  locale: Locale;
  /** Tom da seção imediatamente acima, que se curva sobre o contato. */
  curve?: CurveTone;
}) {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      data-tone="dark"
      className="relative bg-void pt-[calc(var(--curve)+11vh)] pb-8 text-paper"
    >
      <SectionCurve tone={curve} />

      <div className="gutter-x">
        <Reveal className="label mb-8 text-fog">{dict.contact.label}</Reveal>
        <RevealLines
          as="h2"
          id="contact-heading"
          lines={dict.contact.headline}
          className="display text-headline"
        />

        <div className="relative mt-[13vh] md:mt-[16vh]">
          <Reveal variant="draw" className="h-px w-full bg-rule-dark" />
          <a href={`mailto:${site.email}`} className="contact-disc">
            <span className="flex flex-col items-center gap-2 text-center">
              <span aria-hidden="true" className="contact-disc__arrow text-xl">
                ↗
              </span>
              <span className="label">{dict.contact.cta}</span>
            </span>
          </a>
        </div>

        <div className="mt-[clamp(6.5rem,11vw,9rem)] grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-6">
            <p className="label mb-4 text-fog">{dict.contact.emailLabel}</p>
            <a
              href={`mailto:${site.email}`}
              className="text-[clamp(1.3rem,2.4vw,2.1rem)] leading-none font-medium tracking-[-0.03em] underline decoration-paper/25 decoration-1 underline-offset-[0.3em] transition-colors duration-500 hover:decoration-paper"
            >
              {site.email}
            </a>
            <p className="mt-5 max-w-[34ch] text-[0.9375rem] leading-snug text-fog">
              {dict.contact.note}
            </p>
          </div>

          <nav
            aria-label={dict.nav.main}
            className="col-span-6 md:col-span-3"
          >
            <p className="label mb-4 text-fog">{dict.nav.menu}</p>
            <ul className="flex flex-col gap-2">
              {[
                { label: dict.nav.work, href: `/${locale}#work` },
                { label: dict.nav.experience, href: `/${locale}#experience` },
                { label: dict.nav.about, href: `/${locale}#about` },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.9375rem] text-paper/75 transition-colors duration-300 hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 md:col-span-3">
            <p className="label mb-4 text-fog">{dict.nav.social}</p>
            <ul className="flex flex-col gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[0.9375rem] text-paper/75 transition-colors duration-300 hover:text-paper"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-[12vh] flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-rule-dark pt-6">
          <Link href={`/${locale}`} aria-label={dict.nav.home} className="-ml-2 rounded-full">
            <Signature tone="paper" />
          </Link>
          <p className="label text-fog">
            © {year} {site.name} — {dict.contact.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
