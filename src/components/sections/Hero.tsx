import { site } from "@/data/portfolio";
import type { Dictionary } from "@/i18n/dictionary";
import { HeroWords } from "@/components/sections/HeroWords";
import { delay } from "@/lib/cn";

/**
 * A hero é uma composição, não uma landing: o nome atravessa a tela de
 * margem a margem e, sob ele, o manifesto — as três palavras em serifa,
 * grandes, espalhadas na mesma largura. Só isso: sem cargo, sem bio, sem
 * empresa. A simplicidade é a decisão.
 *
 * No desktop o nome numa linha e o manifesto numa linha; no tablet e no
 * celular, o nome em duas. O nome é nome próprio — a composição é idêntica
 * nos três idiomas; só as palavras mudam.
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

          <HeroWords words={dict.hero.role} />
        </div>
      </div>
    </section>
  );
}
