import { site } from "@/data/portfolio";
import type { Dictionary } from "@/i18n/dictionary";
import { HeroWords } from "@/components/sections/HeroWords";
import { delay } from "@/lib/cn";

/**
 * A hero é uma composição, não uma landing: o nome atravessa a tela de
 * margem a margem e, sob ele, três palavras em serifa — o segundo ponto
 * focal. Entre os dois, a assinatura do site em escala grande: o ponto que
 * floresce em cápsula (o mesmo do "Code by Sergio") passa de palavra em
 * palavra, e uma régua com o número liga a margem até ele.
 *
 * No desktop as palavras começam exatamente sob a segunda palavra do nome, e
 * a régua ocupa o lugar sob a primeira: uma diagonal, não um bloco solto. No
 * tablet e no celular, o nome em duas linhas e as palavras encostadas à
 * direita, com a régua vindo da margem.
 *
 * Sem retrato por enquanto: a fotografia real volta com a interação
 * foto/tipografia, não como placeholder. O nome é nome próprio — a
 * composição é idêntica nos três idiomas; só as palavras mudam.
 */
export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="hero-name" className="hero relative bg-stone">
      <div className="hero-frame gutter-x">
        <div className="hero-stage">
          <h1 id="hero-name" aria-label={site.name} className="hero-name display">
            <span className="mask-line hero-mask">
              <span style={delay(160)}>{site.firstName}</span>
            </span>
            <span className="mask-line hero-mask">
              <span style={delay(250)}>{site.lastName}</span>
            </span>
          </h1>

          <HeroWords words={dict.hero.role} strut={site.firstName} />
        </div>
      </div>
    </section>
  );
}
