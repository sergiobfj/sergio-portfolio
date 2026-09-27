"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

/**
 * 404 dentro de um idioma: herda layout, header e menu. not-found não
 * recebe params, então o idioma vem da URL.
 */
export default function LocaleNotFound() {
  const params = useParams<{ locale?: string }>();
  const locale =
    params.locale && isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <main
      id="content"
      className="gutter-x flex min-h-svh flex-col justify-end bg-stone pt-(--bar) pb-[12vh]"
    >
      <p className="meta text-ash">404</p>
      <h1 className="display mt-6 max-w-[12ch] text-[clamp(3.5rem,11vw,12rem)]">
        {dict.notFound.title}
      </h1>
      <Link
        href={`/${locale}`}
        className="group label mt-12 inline-flex w-fit items-center gap-3"
      >
        <span
          aria-hidden="true"
          className="flex size-8 items-center justify-center rounded-full bg-ink text-sm text-paper transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1"
        >
          ←
        </span>
        {dict.notFound.back}
      </Link>
    </main>
  );
}
