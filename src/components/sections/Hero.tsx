import { site } from "@/data/portfolio";
import type { Dictionary } from "@/i18n/dictionary";
import { delay } from "@/lib/cn";

/**
 * A hero é uma composição, não uma landing: o nome atravessa a tela de
 * margem a margem e é a própria grade — no desktop, o papel assenta sob
 * SERGIO e a frase sob BARBOSA. Todo o resto é espaço.
 *
 * Sem retrato por enquanto: a fotografia real volta com a interação
 * foto/tipografia, não como placeholder.
 *
 * O nome é nome próprio: a composição é idêntica nos três idiomas. Só o
 * papel e a frase de apoio mudam.
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

          <div className="hero-meta">
            <p className="hero-role voice">
              {dict.hero.role.map((line, i) => (
                <span key={line} className="mask-line hero-mask">
                  <span style={delay(420 + i * 80)}>{line}</span>
                </span>
              ))}
            </p>

            <p
              className="hero-tagline hero-fade text-lead leading-snug text-ash"
              style={delay(640)}
            >
              {dict.hero.tagline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
