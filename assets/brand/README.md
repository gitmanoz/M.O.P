# Brand Assets — Missão OAB

Documentação operacional da identidade visual em `assets/brand/`.

Este diretório contém os arquivos oficiais da marca.  
Não redesenhe, não altere geometria, cores ou proporções dos SVGs mestres.

---

## Estrutura de pastas

| Pasta | Finalidade |
|---|---|
| `source/` | **Source of Truth** — SVGs oficiais da marca (finais e editáveis Inkscape) |
| `exports/` | Exportações derivadas (PNG, WebP, PDF etc.) geradas a partir dos sources |
| `favicon/` | Favicons e ícones de navegador derivados da marca |
| `social/` | Recortes e peças para redes sociais |
| `og/` | Imagens Open Graph / compartilhamento |
| `app/` | Ícones e assets para aplicativo / PWA |
| `reference/` | Referências raster históricas de apoio (não são Source of Truth) |

Pastas vazias são intencionais e devem ser mantidas.

---

## Source of Truth

Os arquivos em `source/` com nomes **sem** sufixo `_INK` são considerados **finais** e oficiais:

### Símbolo
- `master-symbol.svg`
- `master-symbol-black.svg`
- `master-symbol-white.svg`

### Tipografia de marca
- `master-typography.svg`

### Logo horizontal
- `master-logo-horizontal.svg`
- `master-logo-horizontal-black.svg`
- `master-logo-horizontal-white.svg`

### Logo vertical
- `master-logo-vertical.svg`
- `master-logo-vertical-black.svg`
- `master-logo-vertical-white.svg`

Estes arquivos:

- podem ser **referenciados** em HTML, docs e materiais;
- podem ser **exportados** para `exports/`, `favicon/`, `social/`, `og/` e `app/`;
- **nunca** devem ser editados manualmente no código ou redesenhados.

---

## Arquivos Inkscape (`*_INK.svg`)

Únicos arquivos destinados à edição vetorial:

- `master-symbol_INK.svg`
- `master-typography_INK.svg`
- `master-logo-horizontal_INK.svg`
- `master-logo-vertical_INK.svg`

### Diferença

| Tipo | Uso |
|---|---|
| SVG mestre (sem `_INK`) | Arquivo final de produção — consumir, não editar |
| SVG `_INK` | Arquivo de trabalho no Inkscape — único permitido para edição |

Fluxo correto:

1. Editar apenas o `*_INK.svg` no Inkscape (quando houver necessidade aprovada).
2. Exportar/gerar o SVG final correspondente sem `_INK`.
3. Substituir o mestre final com revisão e aprovação.
4. Atualizar exports derivados, se necessário.

Nunca editar diretamente os SVGs mestres finais.

---

## O que pode ser exportado

A partir dos mestres finais, podem ser gerados (em `exports/` ou pastas específicas):

- PNG / WebP em múltiplas densidades;
- favicons (`favicon/`);
- peças sociais (`social/`);
- Open Graph (`og/`);
- ícones de app (`app/`).

Exports são derivados. Se houver conflito entre export e source, **prevalece o SVG em `source/`**.

---

## O que nunca deve ser editado manualmente

- Qualquer SVG mestre final em `source/` (sem `_INK`).
- Geometria, curvas, proporções ou cores dos mestres.
- Recriação da marca em HTML/CSS.
- Substituição do SVG oficial por PNG quando o SVG existir.

---

## Padrão de nomenclatura

```
master-<tipo>[-variante][_INK].svg
```

| Parte | Significado | Exemplos |
|---|---|---|
| `master-` | Prefixo obrigatório de asset oficial | — |
| `<tipo>` | `symbol`, `typography`, `logo-horizontal`, `logo-vertical` | — |
| `[-variante]` | Opcional: `-black`, `-white` | monocromáticos |
| `[_INK]` | Sufixo de arquivo editável Inkscape | apenas edição |

### Regras

1. Usar `kebab-case`.
2. Não numerar arquivos oficiais (`1.`, `2.` etc.).
3. Não usar espaços ou acentos nos nomes.
4. Variantes de cor apenas com `-black` ou `-white`.
5. Sufixo `_INK` apenas para arquivos de edição.

---

## Uso na web / landing

Preferir sempre SVG oficial via `<img>`:

```html
<img
  src="assets/brand/source/master-logo-horizontal.svg"
  alt="Missão OAB"
  class="header__logo-image"
/>
```

- Definir dimensões no CSS sem distorcer proporção.
- Usar `height: auto` quando a largura for definida.
- Não converter SVG em base64 sem necessidade.

---

## Relação com documentação

- Regras de IA e consumo: `AI_CONTEXT.md`
- Constituição da marca: `docs/brand/BRAND_BOOK.md`
- Design System: `DESIGN_GUIDE.md` e `UI_KIT.md`
