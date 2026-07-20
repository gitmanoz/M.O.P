# AI Context — Missão OAB

Este arquivo orienta agentes de IA que trabalham neste repositório.

## Visão do produto

A Missão OAB é uma EdTech voltada à preparação para o Exame da OAB.

A marca representa direção, evolução e aprovação.

A metáfora central do produto é:

> Missão OAB é o mapa.  

> Método CAPA é o caminho percorrido sobre esse mapa.

## Documentação obrigatória

Antes de realizar mudanças relevantes, consulte os arquivos adequados:

### Marca

- `docs/brand/BRAND_BOOK.md`

- `docs/brand/BRAND_VOICE.md`

- `docs/brand/COPYWRITING.md`

### Produto

- `docs/product/PRD.md`

- `docs/product/ROADMAP.md`

- `docs/product/USER_JOURNEY.md`

- `docs/product/BUSINESS_MODEL.md`

- `docs/product/GAMIFICATION.md`

## Identidade visual oficial

Os arquivos oficiais da marca estão em:

- `assets/brand/source/master-symbol.svg`

- `assets/brand/source/master-logo-horizontal.svg`

- `assets/brand/source/master-logo-vertical.svg`

Alguns desses arquivos podem ainda estar em produção.

O arquivo disponível deve ser tratado como a fonte oficial da identidade visual.

## Regras obrigatórias da marca

- Nunca redesenhar o símbolo ou a logo.

- Nunca alterar proporções, curvas ou geometria.

- Nunca recriar a marca manualmente em HTML ou CSS.

- Nunca usar screenshots ou PNGs como fonte principal quando houver SVG oficial.

- Nunca inventar novas cores sem consultar o Brand Book.

- Nunca alterar tipografia sem consultar a documentação da marca.

- Sempre preservar a proporção original dos SVGs.

- Sempre utilizar os arquivos oficiais existentes em `assets/brand/source/`.

## Uso na landing page

Ao implementar ou atualizar a landing:

- Utilizar os SVGs oficiais diretamente no HTML.

- Preferir a tag `<img>` para logos estáticas.

- Definir dimensões pelo CSS sem distorcer a proporção.

- Usar `height: auto` quando a largura for definida.

- Não converter o SVG em base64 sem necessidade.

- Não copiar manualmente o conteúdo interno do SVG para o HTML, salvo necessidade técnica justificada.

- Não substituir a marca por texto, emoji, ícone genérico ou símbolo criado por CSS.

Exemplo recomendado:

```html

<img

  src="assets/brand/source/master-symbol.svg"

  alt="Símbolo da Missão OAB"

  class="brand-symbol"

/>



