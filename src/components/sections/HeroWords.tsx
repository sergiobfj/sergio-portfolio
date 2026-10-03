import { delay } from "@/lib/cn";

/** Quando as palavras começam a subir: logo depois do nome. */
const WORDS_AT = 520;
const WORDS_STAGGER = 140;

/**
 * O manifesto sob o nome: as três palavras em serifa, grandes, numa linha só
 * de margem a margem (no celular, em duas). Entram pela máscara, uma depois
 * da outra; no mouse, uma faixa escura sobe por trás da palavra apontada e
 * ela clareia. Só CSS — nenhum JS, nenhuma outra animação.
 */
export function HeroWords({ words }: { words: readonly string[] }) {
  return (
    <p className="hero-words voice">
      {words.map((word, i) => (
        <span key={word} className="hero-word">
          <span className="mask-line hero-mask">
            <span style={delay(WORDS_AT + i * WORDS_STAGGER)}>{word}</span>
          </span>
        </span>
      ))}
    </p>
  );
}
