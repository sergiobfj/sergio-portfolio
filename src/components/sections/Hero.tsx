import { site } from "@/data/portfolio";
import type { Dictionary } from "@/i18n/dictionary";
import { delay } from "@/lib/cn";

/**
 * A hero é uma composição, não uma landing: o nome atravessa a tela de
 * margem a margem e o papel assenta sob SERGIO. Só isso — o conjunto fica
 * no meio da dobra, e o espaço em volta é o respiro, não um vazio a
 * preencher.
 *
 * Sem retrato por enquanto: a fotografia real volta com a interação
 * foto/tipografia, não como placeholder.
 *
 * O nome é nome próprio: a composição é idêntica nos três idiomas. Só o
 * papel muda.
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

          <p className="hero-role voice">
            {dict.hero.role.map((line, i) => (
              <span key={line} className="mask-line hero-mask">
                <span style={delay(420 + i * 80)}>{line}</span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
