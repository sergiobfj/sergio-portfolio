import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Background } from "@/components/sections/Background";
import { Secco } from "@/components/sections/Secco";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

/**
 * Ritmo de cor: cinza → off-white → preto → cinza → preto. Cada troca de
 * tom é uma base curva; dentro do mesmo tom, só espaço. Os vãos vêm dos
 * mesmos tokens `--band-*` das páginas internas (globals.css).
 *
 * Trabalhos, experiência e background dividem o off-white: o que construí,
 * onde, e com que formação — e o background termina em SECCO, que é a
 * seção escura seguinte.
 */
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <main id="content">
        <Hero dict={dict} />
        <Work dict={dict} locale={locale} />
        <Experience dict={dict} locale={locale} />
        <Background dict={dict} />
        <Secco dict={dict} locale={locale} />
        <About dict={dict} />
      </main>
      <Contact dict={dict} locale={locale} curve="stone" />
    </>
  );
}
