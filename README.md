# Portfólio — Sergio Barbosa

Site pessoal. Next.js (App Router) + TypeScript + Tailwind CSS v4, trilíngue
(PT · EN · ES) e estático. Zero biblioteca de animação.

## Rodar

```bash
pnpm install
pnpm dev        # http://localhost:3000 → redireciona para /pt
pnpm build
pnpm lint
pnpm typecheck
```

> O pnpm está fixado via `packageManager`. Se `pnpm` não existir no PATH, use
> `corepack pnpm <script>`, ou rode `corepack enable pnpm` uma vez num
> terminal de administrador.

## Onde mexer

Duas fontes de verdade, separadas por natureza do conteúdo:

| Arquivo | O que vive lá |
| --- | --- |
| `src/i18n/pt.ts` · `en.ts` · `es.ts` | **todo texto traduzível** |
| `src/data/portfolio.ts` | o que não muda com o idioma: nomes próprios, anos, slugs, imagens, links, tom das superfícies |

`pt.ts` é o dicionário de referência — o tipo `Dictionary` é derivado dele, então
esquecer uma chave em `en.ts` ou `es.ts` quebra o typecheck, não o site.

"Code by Sergio", o nome e os nomes de projeto **não** são traduzidos: são
identidade e vivem em `portfolio.ts`.

### Rotas

| Rota | O que é |
| --- | --- |
| `/<idioma>` | home |
| `/<idioma>/work/<categoria>` | categoria: `products` · `automations` · `web` · `tools` |
| `/<idioma>/work/<case>` | case (`router-planner`, `bot-de-vendas`, `arena-sustentabilidade`, `relatorio-merger`, `automacoes-operacionais`, …) — divide o segmento com as categorias |
| `/<idioma>/experience/<empresa>` | `virtron` · `secco` |

Categoria e case moram na mesma rota (`app/[locale]/work/[slug]`); o tipo de
`WorkCase.slug` exclui os nomes de categoria, então os dois nunca colidem.
Toda URL interna sai de `src/lib/routes.ts`.

### Trabalhos: categorias e cases

"Trabalhos" são coisas construídas, não repositórios. A home mostra as quatro
`workCategories` em blocos (pares 7/5 · 5/7); cada bloco abre a página da
categoria, que lista seus `cases` em grid editorial.

| Categoria | Cases (ordem do dado) |
| --- | --- |
| Produtos & Sistemas | Router Planner · Sentavos · GeoCarbo |
| Automações & Integrações | Bot de Vendas · Automações do dia a dia |
| Web & Experiências digitais | Arena da Sustentabilidade |
| Experimentos & Tools | Relatório Merger |

Trabalho ainda não divulgado não é case: vai em `upcoming` (só o nome, com
"Em breve", na página da empresa — hoje, o CRM Têxtil na SECCO), sem página,
sem prancha e fora das contagens. "Bot de Vendas" era "Jornada do Cliente";
o link antigo redireciona (`next.config.ts`).

Um case novo:

1. chave em `CaseKey` e item em `cases` (`portfolio.ts`) — a ordem é a ordem
   dentro da categoria e na página da experiência;
2. `cases.<chave>` nos três dicionários (pode começar `{}`: a página diz
   "case em construção").

**Peso (`weight`).** `full` e `medium` ganham a coluna larga nos grids;
`mini`, `group` e `placeholder` ficam menores (dois leves dividem 6/6 e mais
baixos; um leve sozinho ocupa meia largura) e abrem com hero curta.

Tudo é opcional além de título, categoria, peso, tom e capa: `company`,
`year`, `technologies` (ficha técnica por grupo), `images`, `liveUrl`,
`linkedinPost`, `repository`. **Repositório não é requisito**:
`repositoryVisibility: "private"` mostra "Código proprietário" no lugar do
link, e o case continua inteiro. Um case com `company` igual à de uma
experiência aparece na página dela.

No dicionário, além de `summary`: `kicker` (rótulo na superfície nos grids de
experiência), `tags` (metadata do topo), `headline`, `context`/`problem`/
`solution`/`impact`, `metrics` (+ `metricsNote`) e `captions`. O case
genérico usa o que existir — é o formato do mini-case (Relatório Merger).

**Cases com história própria.** Um case que precisa contar do seu jeito ganha
um componente em `src/components/cases/` (registrado em `cases/index.ts`) e o
texto em `stories.<slug>` nos dicionários. Não há template: a história compõe
as peças de `src/components/case/` — `Band` (faixa de tom com a base curva),
`Metrics`, `StepList`/`InlineFlow`, `SheetTabs`, `Figure`/`Gallery`,
`StackSheet`, `CaseTags`/`CaseLinks`, `CaseNext`. Hoje: Router Planner,
Bot de Vendas, Arena da Sustentabilidade e Automações do dia a dia (com o
exemplo publicado dos painéis das TVs, em `automationsFeatured`).

### Experiências

`experiences` (dado: empresa, razão social, datas em `AAAA-MM`, galeria) +
`experiences.<chave>` nos dicionários (papel e teaser da home, frase e papel
da página, legendas). Virtron e SECCO têm narrativa própria
(`src/components/experiences/`, texto em `experienceStories.<chave>`); uma
experiência nova sem narrativa usa a página genérica.

- Virtron: cargos oficiais em `virtronStory.roles` — só estes (nada de
  "gestor" ou "líder"). Promoção, fase de responsabilidades ampliadas e
  infraestrutura também em `virtronStory`.
- SECCO: `talks` (eventos; `status: "upcoming"` enquanto não aconteceu — sem
  foto e sem texto no passado; trocar para `done` depois) e `milestones`
  (`visible: false` tira o marco da página inteira até a divulgação oficial —
  hoje, Global PE).

Meses são formatados por idioma (`lib/dates.ts`); listas de nomes usam a
conjunção do idioma.

### Publicar imagens

Imagem planejada já pode estar no dado apontando para um arquivo que ainda
não existe: sem o arquivo em `/public`, entra a prancha (tom, grão e número da
figura); com ele, a imagem (`lib/media.ts`, checado no build). Publicar é
salvar o arquivo no caminho e rodar o build de novo. `ratio` é o recorte:
ajuste ao formato real de cada foto ou screenshot (`position` escolhe o ponto
focal quando o bloco corta a imagem).

| Pasta | No ar | Ainda prancha |
| --- | --- | --- |
| `public/images/` | `foto-principal-sergio.jpg` | |
| `public/projects/router-planner/` | `tela-principal` `selecao-de-rotas` `validacoes` (tarjados) | `planilha-antiga` `exportacao-final` |
| `public/projects/jornada-cliente/` (case Bot de Vendas) | `bancada-desenvolvimento` `telegram-nova-venda` (+ `-card`, recorte) `telegram-pergunta` | `dashboard-looker` `arquitetura` |
| `public/projects/arena-sustentabilidade/` | `tela-principal` `calculadora-co2` (+ `-recorte`) `experiencias` | `versao-mobile` |
| `public/projects/relatorio-merger/` | `quadro-demonstracao` (quadro do vídeo de demonstração) | |
| `public/projects/sentavos/` | `tela-principal` `dashboard` | |
| `public/projects/geocarbo/` | `tela-principal` `dashboard` `cadastro-propriedade` `relatorios` (tarjados) | |
| `public/experience/virtron/` | `estacao-de-trabalho` `promocao-assistente-ti` `foto-com-antigo-gestor` `trabalhando-virtron-01` `trabalhando-virtron-02` | |
| `public/experience/secco/` | `recnplay-oficina-python` `recnplay-oficina-terminal` `unifavip-talk-empreendedorismo` `unifavip-talk-sala` `cartaz-semana-de-ti` `equipe-secco-01` | `bug-hunt` (só depois do evento) |

Prévias das categorias na home: `workCategories[].preview` — uma imagem
principal que sangra pela borda e um recorte na frente, em % da prancha
(`work/CategoryPreview`). Os arquivos `-card`/`-recorte` são enquadramentos
dos prints originais, não montagens. Categoria sem prints mostra o número.

Marcas em `public/logos/` (`virtron-*.png`, `secco-*.svg`): monocromáticas nos
tons do site — `-escura` (ink) para fundo claro, `-branca` (paper) para fundo
escuro —, geradas do arquivo original sem mudar forma nem proporção. Entram
pelo `logo` da experiência (componente `ui/Logo`), hoje só na hero da página
da empresa. Links (redes, e-mail, site da SECCO) moram em `site`, `socials` e
`experiences[].website`.

Fotos em `.jpg`, screenshots em `.png`; nomes em minúsculas, com hífen. Fotos
saem sem EXIF (GPS incluso) e com no máximo 2000 px no lado maior. Os
originais ficam em `fotos-portifolio/`, fora do Git: alguns têm dados reais.

Antes de publicar screenshot de sistema interno, revisar: nomes, telefones,
endereços, IDs, códigos, valores, observações, tokens e dados de clientes.
Tarja é retângulo opaco sobre o dado — blur pode ser revertido.

- Foto do about: `aboutPortrait.src` (a pílula dentro da frase).
- Hero: sem retrato por enquanto — a fotografia volta junto com a interação
  foto/tipografia, não como placeholder.

### Background

`background` no dado (início da trajetória em tecnologia, instituições, períodos, empresa e cargos) e
`background` nos dicionários (títulos de curso, status, "Desde").

## Internacionalização

- Rotas `/pt`, `/en`, `/es` — o segmento `[locale]` é a raiz do App Router.
- `/` é resolvido no middleware: cookie salvo → `Accept-Language` → `pt`.
- O seletor grava `NEXT_LOCALE` e navega client-side com `scroll={false}`.
- `lang`, `canonical`, `hreflang` e OpenGraph são gerados por idioma.
- 404: caminho desconhecido dentro de um idioma cai em `[locale]/not-found`
  (localizado, com header e menu); idioma inexistente (`/xyz`) cai em
  `global-not-found` (`experimental.globalNotFound`).

## Direção visual

Referências: Aanstekelijk (display condensado, superfícies arredondadas,
disco de menu, rodapé em colunas) e Dennis Snellenberg (cinza/branco/preto e a
base curva entre seções).

Ritmo de cor — cada troca de tom é uma base curva; dentro do mesmo tom, só
espaço:

```
hero cinza ⌒ trabalhos + experiência + background off-white ⌒ SECCO preta ⌒ about cinza ⌒ contato preto
```

Tokens em `src/app/globals.css` (`@theme`): `stone` `paper` `chalk` `mist`
`ink` `void` `ash` `fog` `rule`, a escala `text-display` `text-headline`
`text-title` `text-voice` `text-lead`, `--gutter`, `--curve`, `--bar`, `--disc`.

Tipografia, três vozes:

| Voz | Fonte | Uso |
| --- | --- | --- |
| alta | Archivo, eixo `wdth` 62%, 800, caixa alta | nome, títulos, projetos |
| baixa | Instrument Serif | papel, frases, o "by" da assinatura |
| interface | Schibsted Grotesk | rótulos, texto pequeno, anos (tabular) |

## Peças

- **Base curva** (`ui/SectionCurve`): a base da seção anterior desenhada no
  topo da seguinte — ponta de uma elipse larga (`clip-path`), que se aplaina
  até um arco residual conforme a página sobe. Scroll-driven animation em CSS
  (`view-timeline`), só `transform`; onde não há suporte (Firefox) e com
  movimento reduzido, fica estática na profundidade máxima.
- **Hero**: o nome, medido em `cqw`, de margem a margem — uma linha no
  desktop, duas no celular. No desktop ele é a grade (subgrid): o papel
  assenta sob SERGIO e a frase começa sob o B de BARBOSA.
- **Display ajustado** (`fit()` em `lib/cn` + `.fit-display`): títulos de
  página no maior tamanho que cabe — pela linha mais longa no desktop, pela
  palavra mais longa no celular. "Virtron" e "Automatizaciones &" usam a
  mesma regra.
- **Linhas-link** (Experiência): a linha inteira é o link; no hover o nome
  avança, o anel da seta (`ui/ArrowDisc`) se preenche e as outras recuam.
- **Code by Sergio** (`ui/Signature`): um disco que, no hover, floresce até
  virar a pílula inteira.
- **Menu** (`layout/MenuOverlay`): disco fixo que inverte sobre seções e
  superfícies pretas (IntersectionObserver numa faixa do topo, sem listener de
  scroll) e painel lateral cuja borda arqueada se aplaina ao chegar.
- **SECCO**: a palavra é maior que a tela e desliza com a rolagem (scroll-
  driven, só `transform`).

## Motion e performance

Tudo é CSS (`transform`, `opacity`, `clip-path`). O JS só marca
`data-revealed` via `IntersectionObserver`, que se desconecta no primeiro
disparo. Os únicos listeners vivos são o `pointermove` do cursor "Ver" (só em
ponteiro fino, dentro dos grids de trabalhos) e o `keydown` do menu aberto.
Sem canvas, WebGL, vídeo, smooth scroll ou loader: a coreografia da hero roda
sobre a página já renderizada. `prefers-reduced-motion` desliga tudo e um
`<noscript>` garante que nenhum conteúdo dependa de JS para aparecer.

## Estrutura

```
src/
  app/
    [locale]/        layout (raiz), home, work/[slug], experience/[slug],
                     [...rest], not-found, og image
    global-not-found.tsx
    globals.css      tokens, utilitários e as peças acima
  components/
    layout/          Header, MenuOverlay, LocaleSwitcher, PageHero, Chapter
    sections/        Hero, Work, Experience, Background, Secco, About, Contact
    work/            CategoryView, CaseView (genérico), CaseGrid
    case/            peças dos cases: Band, Metrics, Flow, SheetTabs, Figure,
                     Gallery, StackSheet, CaseMeta, CaseNext
    cases/           histórias próprias (RouterPlanner, BotDeVendas,
                     Arena, AutomacoesOperacionais) + registro
    experience/      ExperienceHero, ExperienceView (genérico)
    experiences/     narrativas (Virtron, Secco) + registro
    ui/              SectionCurve, Signature, Reveal, RevealLines, Surface,
                     MediaFrame, ArrowLink, ArrowDisc, BackLink, NextLink,
                     WorkCursor
  data/portfolio.ts
  i18n/              config, pt, en, es, dictionary
  hooks/useInView.ts
  lib/               cn (+ fit), routes, work, media, spreads, dates
  middleware.ts      resolve "/" para o idioma certo
```
