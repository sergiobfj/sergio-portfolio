import type { CSSProperties } from "react";
import { preload } from "react-dom";
import { heroPortrait, site } from "@/data/portfolio";
import type { Dictionary } from "@/i18n/dictionary";
import { HeroName } from "@/components/sections/HeroName";
import { FadeImage } from "@/components/ui/FadeImage";
import { cn, delay } from "@/lib/cn";

/** Quando cada camada entra, depois do header (80–160 ms). */
const PORTRAIT_AT = 180;
const NAME_AT = 420;
const WORDS_AT = 640;
const WORDS_STAGGER = 110;

/**
 * Uma camada do manifesto. As duas são iguais e entram juntas: a de tinta é
 * o texto; a clara (`over`), só o tom dele sobre o corpo.
 */
function Manifesto({ words, over = false }: { words: readonly string[]; over?: boolean }) {
  return (
    <p
      className={cn("hero-words__layer voice", over ? "hero-over" : "hero-ink")}
      aria-hidden={over || undefined}
    >
      {words.map((word, i) => (
        <span
          key={word}
          className={cn("hero-word", i === 1 && "italic")}
          style={{ "--word": i } as CSSProperties}
        >
          <span className="mask-line hero-mask">
            <span style={delay(WORDS_AT + i * WORDS_STAGGER)}>{word}</span>
          </span>
        </span>
      ))}
    </p>
  );
}

/**
 * A abertura é uma composição só: o nome atravessando a tela na frente do
 * retrato e, logo abaixo, o manifesto na mesma largura. Sem cargo, sem bio,
 * sem empresa.
 *
 * Camadas, de trás para a frente: o retrato recortado e, na frente dele, o
 * nome (sections/HeroName) e o manifesto — os dois trocam de tom sobre o
 * corpo. O corpo não termina na base da hero: desce para dentro da curva e
 * é a própria curva que o corta — por isso o retrato tem uma segunda metade,
 * a que mora na curva, recortada pelo mesmo arco e assentando junto com ele.
 */
export function Hero({ dict }: { dict: Dictionary }) {
  // A silhueta é a máscara do texto: chega junto com a foto, não depois do CSS.
  preload(heroPortrait.silhouette, { as: "image" });

  // Largura real do retrato: ~66% da altura da tela deitada, ~46% em pé.
  // As duas metades pedem a mesma URL — um download só.
  const portrait = (alt: string, priority: boolean) => (
    <FadeImage
      src={heroPortrait.src}
      alt={alt}
      fill
      priority={priority}
      fetchPriority={priority ? "high" : undefined}
      loading={priority ? undefined : "eager"}
      sizes="(orientation: portrait) 46vh, 66vh"
      className="hero-portrait__img"
    />
  );

  return (
    <section
      aria-labelledby="hero-name"
      className="hero bg-stone"
      style={{ "--silhouette": `url(${heroPortrait.silhouette})` } as CSSProperties}
    >
      <HeroName name={site.name} at={NAME_AT} />

      {/* O fade é do conjunto: as duas metades se sobrepõem 1 px na base da
          hero e, semitransparentes cada uma, desenhariam uma linha ali. */}
      <div className="hero-figure" style={delay(PORTRAIT_AT)}>
        <div className="hero-portrait">
          <div className="hero-portrait__frame">{portrait(dict.hero.portraitAlt, true)}</div>
        </div>

        {/* A metade que desce para a curva: mesma imagem, mesmo lugar. */}
        <div aria-hidden="true" className="hero-portrait hero-portrait--curve">
          <div className="hero-portrait__frame">{portrait("", false)}</div>
        </div>
      </div>

      <div className="hero-words">
        <Manifesto words={dict.hero.role} />
        <Manifesto words={dict.hero.role} over />
      </div>
    </section>
  );
}
