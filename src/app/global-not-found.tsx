import type { Metadata } from "next";
import Link from "next/link";
import { Archivo } from "next/font/google";
import { site } from "@/data/portfolio";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: `404 · ${site.name}`,
};

/**
 * 404 fora de qualquer idioma (ex.: /xyz). O layout raiz vive em [locale],
 * então esta página traz o próprio documento. Texto neutro, sem dicionário.
 */
export default function GlobalNotFound() {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <main className="gutter-x flex min-h-svh flex-col justify-end bg-stone pb-[12vh]">
          <p className="meta text-ash">404</p>
          <h1 className="display mt-6 text-[clamp(4rem,17vw,19rem)]">
            Not found
          </h1>
          <Link
            href="/"
            className="group label mt-12 inline-flex w-fit items-center gap-3"
          >
            <span
              aria-hidden="true"
              className="flex size-8 items-center justify-center rounded-full bg-ink text-sm text-paper transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1"
            >
              ←
            </span>
            {site.name}
          </Link>
        </main>
      </body>
    </html>
  );
}
