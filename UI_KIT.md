# Missão OAB — UI Kit

> **Versão:** 1.0  
> **Última atualização:** Julho de 2026  
> **Status:** Documento oficial de componentes  
> **Complementa:** [DESIGN_GUIDE.md](./DESIGN_GUIDE.md)

---

## Índice

1. [Filosofia Visual](#1-filosofia-visual)
2. [Container](#2-container)
3. [Header](#3-header)
4. [Hero](#4-hero)
5. [Botões](#5-botões)
6. [Cards](#6-cards)
7. [Badges](#7-badges)
8. [Inputs](#8-inputs)
9. [Timeline](#9-timeline)
10. [FAQ](#10-faq)
11. [Footer](#11-footer)
12. [Ícones](#12-ícones)
13. [Sombras](#13-sombras)
14. [Bordas](#14-bordas)
15. [Espaçamentos](#15-espaçamentos)
16. [Animações](#16-animações)
17. [Componentes Compostos](#17-componentes-compostos)
18. [Exemplos Visuais](#18-exemplos-visuais)
19. [Checklist](#19-checklist)

---

## Relação entre documentos

| Documento | Responsabilidade |
|---|---|
| **DESIGN_GUIDE.md** | Princípios, tokens, regras de marca, SEO, performance, código |
| **UI_KIT.md** | Especificação visual de cada componente, medidas, estados e composição |
| **variables.css** | Implementação técnica dos tokens |
| **index.html** | Referência de markup semântico existente |

---

# 1. Filosofia Visual

### Como a interface deve parecer

A interface da Missão OAB deve evocar um **produto digital premium de educação** — limpo, confiável e orientado a conversão.

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   Espaço generoso · Hierarquia clara · Ação evidente        │
│                                                              │
│   ┌─────────┐                                                │
│   │  Logo   │    Nav          [ Botão Primário ]            │
│   └─────────┘                                                │
│                                                              │
│   Título grande e direto                                     │
│   Subtítulo legível, max 2 linhas visíveis                   │
│                                                              │
│   [ Botão com ícone Lucide ]                                 │
│                                                              │
│   ┌──────┐  ┌──────┐  ┌──────┐                              │
│   │ Card │  │ Card │  │ Card │   ← sombra leve, respiro    │
│   └──────┘  └──────┘  └──────┘                              │
│                                                              │
└──────────────────────────────────────────────────────────────┘
        Fundo branco / cinza claro alternado
        Azul profundo como âncora visual
        Dourado apenas como acento pontual
```

### Como nunca deve parecer

| Evitar | Motivo |
|---|---|
| Interface colorida demais | Dilui autoridade e confiança |
| Gradientes agressivos | Parece template genérico |
| Emojis como ícones | Visual amador, inconsistente entre dispositivos |
| Bordas grossas e contrastes duros | Quebra elegância |
| Animações exageradas | Distrai da conversão |
| Tipografia decorativa | Prejudica legibilidade acadêmica |
| Layouts sobrecarregados | Transmite desorganização — oposto à marca |

### Sensações desejadas

| Sensação | Tradução visual |
|---|---|
| **Confiança** | Azul `#0F2D52`, tipografia consistente, alinhamento preciso |
| **Organização** | Grid previsível, espaçamentos da escala oficial |
| **Modernidade** | Blur no header, bordas arredondadas, sombras suaves |
| **Premium** | Dourado `#D4AF37` em detalhes pontuais |
| **Clareza** | Contraste AA, hierarquia tipográfica, CTAs únicos por área |
| **Foco** | Um objetivo por seção, um CTA principal por viewport |

### Referências de inspiração (nunca cópia)

| Referência | O que absorver |
|---|---|
| **Apple** | Espaço em branco, tipografia limpa, produto como protagonista |
| **Stripe** | Confiança, gradientes sutis (se usados), dados organizados |
| **Linear** | Densidade controlada, dark/light equilibrado, micro-interações |
| **Vercel** | Contraste tipográfico, cards minimalistas, developer-grade polish |
| **Hotmart** | Hierarquia de conversão, CTAs evidentes |
| **Estratégia** | Seriedade acadêmica, credibilidade institucional |

---

# 2. Container

Componente base que envolve todo conteúdo de seção.

### Especificações

| Propriedade | Valor | Token |
|---|---|---|
| Largura máxima | `1200px` | `--container-max-width` |
| Largura | `100%` | — |
| Centralização | `margin-inline: auto` | — |
| Padding lateral (Mobile) | `16px` | `--spacing-md` |
| Padding lateral (Tablet) | `24px` | `--spacing-lg` |
| Padding lateral (Desktop) | `32px` | `--spacing-xl` |

### Grid interno

O container **não impõe colunas**. Cada seção define seu próprio grid filho.

| Padrão | CSS | Uso |
|---|---|---|
| Conteúdo centralizado | `max-width: 720px; margin-inline: auto` | FAQ, textos longos |
| Grid 2 colunas | `grid-template-columns: 1fr 1fr` | Hero (desktop) |
| Grid 3 colunas | `grid-template-columns: repeat(3, 1fr)` | Benefícios (desktop) |
| Flex row | `display: flex; justify-content: space-between` | Header, Footer |

### Diagrama

```
Viewport ─────────────────────────────────────────────────────
│                                                              │
│   ◄── 32px ──►                              ◄── 32px ──►    │
│   ┌──────────────────── 1200px max ────────────────────┐    │
│   │                                                     │    │
│   │              Conteúdo da seção                      │    │
│   │                                                     │    │
│   └─────────────────────────────────────────────────────┘    │
│                                                              │
──────────────────────────────────────────────────────────────
```

### Markup oficial

```html
<div class="hero__container container">
  <!-- conteúdo -->
</div>
```

### Classe CSS esperada

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: var(--spacing-md);
}
```

---

# 3. Header

Barra de navegação fixa no topo. Primeiro elemento visual após o carregamento.

### Especificações

| Propriedade | Valor | Token |
|---|---|---|
| Altura | `72px` | — |
| Posição | `sticky` top `0` | — |
| Z-index | `100` | `--z-index-header` |
| Fundo | `rgba(255, 255, 255, 0.85)` | `--color-white` + alpha |
| Backdrop blur | `blur(12px)` | — |
| Borda inferior | `1px solid rgba(15, 45, 82, 0.06)` | — |
| Padding interno | `0 var(--spacing-xl)` | — |

### Comportamento Sticky

```
Scroll = 0                    Scroll > 0
┌─────────────────────┐       ┌─────────────────────┐
│ Logo   Nav   [CTA]  │       │ Logo   Nav   [CTA]  │  ← blur + sombra leve
└─────────────────────┘       └─────────────────────┘
  transparente / flat           sticky + shadow-light
```

| Estado | Sombra | Blur | Borda |
|---|---|---|---|
| Topo da página | nenhuma | `12px` | sutil |
| Após scroll | `--shadow-light` | `12px` | sutil |

### Logo

| Propriedade | Valor |
|---|---|
| Altura | `40px` (header) |
| Formato | SVG |
| Classe | `.header__logo` / `.header__logo-image` |
| Área clicável | mínimo `44×44px` (touch target) |

### Navegação

| Propriedade | Valor |
|---|---|
| Classe link | `.header__nav-link` |
| Font-size | `16px` |
| Font-weight | `500` |
| Cor default | `--color-text-light` |
| Cor hover/active | `--color-primary` |
| Gap entre links | `32px` (`--spacing-xl`) |
| Visibilidade mobile | oculta (< 768px) |

### CTA no Header

| Propriedade | Valor |
|---|---|
| Classe | `.btn.btn--primary.header__cta` |
| Tamanho | padrão (altura `44px`) |
| Ícone | Lucide `rocket` · `20px` |
| Visibilidade | sempre visível |

### Estrutura interna

```
┌──────────────────────────────────────────────────────────────┐
│  [Logo 160×40]     Benefícios  Como Funciona  FAQ   [CTA]   │
│  ◄─ flex-start ──► ◄────── flex center ──────► ◄─ end ──►  │
└──────────────────────────────────────────────────────────────┘
         height: 72px · justify-content: space-between
```

### Markup de referência

```html
<header class="header" id="header">
  <div class="header__container container">
    <a href="#inicio" class="header__logo">...</a>
    <nav class="header__nav">...</nav>
    <a href="#cta-final" class="btn btn--primary header__cta">...</a>
  </div>
</header>
```

---

# 4. Hero

Seção principal de conversão. Primeira impressão do produto.

### Estrutura

```
Desktop (≥ 1024px)
┌─────────────────────────────────────────────────────────────┐
│  padding-top: 96px (header offset + respiro)                │
│                                                             │
│  ┌──────────────────────┐    ┌──────────────────────────┐  │
│  │                      │    │                          │  │
│  │  H1 Hero Title       │    │                          │  │
│  │                      │    │     Imagem Hero          │  │
│  │  Subtítulo           │    │     560 × 480            │  │
│  │  (max 65ch)          │    │                          │  │
│  │                      │    │                          │  │
│  │  [ Botão Large ]     │    │                          │  │
│  │                      │    │                          │  │
│  └──────────────────────┘    └──────────────────────────┘  │
│         50%                            50%                  │
│         gap: 48px                                           │
│  padding-bottom: 64px                                       │
└─────────────────────────────────────────────────────────────┘

Mobile (< 768px)
┌──────────────────────┐
│  H1 Hero Title       │
│  Subtítulo           │
│  [ Botão Large ]     │
│  Imagem Hero         │
│  (full width)        │
└──────────────────────┘
```

### Espaçamentos

| Elemento | Propriedade | Valor |
|---|---|---|
| Seção | `padding-block` | `96px 64px` (desktop) · `64px 48px` (mobile) |
| Título → Subtítulo | `margin-bottom` | `24px` (`--spacing-lg`) |
| Subtítulo → Botão | `margin-bottom` | `32px` (`--spacing-xl`) |
| Colunas | `gap` | `48px` (desktop) |

### Título

| Propriedade | Valor |
|---|---|
| Classe | `.hero__title` |
| Elemento | `<h1>` |
| Font-size | `--font-size-hero` |
| Font-weight | `700` |
| Line-height | `1.2` |
| Cor | `--color-primary` |
| Max-width | `16ch` (quebra controlada) |

### Subtítulo

| Propriedade | Valor |
|---|---|
| Classe | `.hero__subtitle` |
| Font-size | `--font-size-text` (16px) |
| Font-weight | `400` |
| Line-height | `1.75` |
| Cor | `--color-text-light` |
| Max-width | `65ch` |

### Botão

| Propriedade | Valor |
|---|---|
| Classe | `.btn.btn--primary.btn--large.hero__cta` |
| Variante | Primary · Large |
| Ícone | Lucide `rocket` · `20px` |

### Imagem

| Propriedade | Valor |
|---|---|
| Classe | `.hero__image` |
| Container | `.hero__media` |
| Formato | WebP (com fallback) |
| Dimensões | `560 × 480px` |
| Border radius | `--radius-lg` (20px) |
| Lazy load | **Não** (above the fold) |
| Sombra | `--shadow-medium` (opcional, sutil) |

---

# 5. Botões

Componente interativo primário de conversão. Todas as variantes compartilham a mesma base `.btn`.

### Anatomia

```
┌─────────────────────────────────────┐
│  [icon 20px]  Label do botão        │   height: 44px (default)
└─────────────────────────────────────┘
  ◄─ 24px ─►◄─ 8px gap ─►◄─ label ─►◄─ 24px ─►
         padding-inline · radius-md (12px)
```

### Tabela completa — Primary

| Propriedade | Valor |
|---|---|
| Classe | `.btn.btn--primary` |
| Altura | `44px` |
| Padding | `12px 24px` |
| Border radius | `--radius-md` (12px) |
| Font-size | `16px` |
| Font-weight | `600` |
| Cor de fundo | `--color-primary` |
| Cor do texto | `--color-white` |
| Borda | nenhuma |
| Ícone | Lucide · `20px` · gap `8px` |
| Transição | `--transition-normal` |
| **Hover** | fundo `#0A2240` · `translateY(-1px)` · `--shadow-light` |
| **Focus** | `outline: 2px solid --color-secondary` · `offset: 2px` |
| **Disabled** | `opacity: 0.5` · `cursor: not-allowed` · sem hover |

### Tabela completa — Secondary

| Propriedade | Valor |
|---|---|
| Classe | `.btn.btn--secondary` |
| Altura | `44px` |
| Padding | `12px 24px` |
| Border radius | `--radius-md` |
| Font-weight | `600` |
| Cor de fundo | `--color-secondary` |
| Cor do texto | `--color-primary` |
| **Hover** | fundo `#C4A030` · `translateY(-1px)` |
| **Focus** | `outline: 2px solid --color-primary` |
| **Disabled** | `opacity: 0.5` |

### Tabela completa — Outline

| Propriedade | Valor |
|---|---|
| Classe | `.btn.btn--outline` |
| Altura | `44px` |
| Padding | `12px 24px` |
| Border radius | `--radius-md` |
| Font-weight | `600` |
| Cor de fundo | transparente |
| Cor do texto | `--color-primary` |
| Borda | `2px solid --color-primary` |
| **Hover** | fundo `rgba(15, 45, 82, 0.05)` |
| **Focus** | `outline: 2px solid --color-secondary` |
| **Disabled** | `opacity: 0.5` · borda fade |

### Tabela completa — Ghost

| Propriedade | Valor |
|---|---|
| Classe | `.btn.btn--ghost` |
| Altura | `44px` |
| Padding | `12px 16px` |
| Border radius | `--radius-md` |
| Font-weight | `500` |
| Cor de fundo | transparente |
| Cor do texto | `--color-text-light` |
| Borda | nenhuma |
| **Hover** | cor `--color-primary` · fundo `rgba(15, 45, 82, 0.04)` |
| **Focus** | `outline: 2px solid --color-secondary` |
| **Disabled** | `opacity: 0.5` |
| Uso | navegação secundária, links de ação leve |

### Tabela completa — Icon Button

| Propriedade | Valor |
|---|---|
| Classe | `.btn.btn--icon` |
| Altura | `44px` |
| Largura | `44px` |
| Padding | `0` |
| Border radius | `--radius-md` |
| Cor de fundo | transparente |
| Ícone | Lucide · `20px` · cor `--color-text-light` |
| **Hover** | fundo `rgba(15, 45, 82, 0.06)` · ícone `--color-primary` |
| **Focus** | `outline: 2px solid --color-secondary` |
| **Disabled** | `opacity: 0.5` |
| Uso | menu mobile, fechar modal, ações compactas |

### Modificadores de tamanho

| Modificador | Altura | Padding | Font-size |
|---|---|---|---|
| `.btn` (default) | `44px` | `12px 24px` | `16px` |
| `.btn--large` | `52px` | `16px 32px` | `16px` |
| `.btn--xlarge` | `56px` | `20px 40px` | `18px` |

### Regras de ícone

- **Sempre Lucide SVG** — nunca emoji
- Tamanho fixo: `20px`
- Posição: à esquerda do label (exceto Icon Button)
- Classe: `.btn__icon`
- Decorativo: `aria-hidden="true"`

### Exemplo markup

```html
<!-- Primary Large com ícone -->
<a href="#cta-final" class="btn btn--primary btn--large">
  <svg class="btn__icon" width="20" height="20" aria-hidden="true">
    <!-- lucide:rocket -->
  </svg>
  Quero Entrar na Missão
</a>

<!-- Icon Button -->
<button class="btn btn--icon" aria-label="Abrir menu">
  <svg width="20" height="20" aria-hidden="true">
    <!-- lucide:menu -->
  </svg>
</button>
```

---

# 6. Cards

Superfície elevada para agrupar conteúdo relacionado. Quatro variantes oficiais.

### Benefit Card

Usado na seção de Benefícios. Classe: `.benefit-card`

| Propriedade | Valor |
|---|---|
| Padding | `24px` (`--spacing-lg`) |
| Border radius | `--radius-md` (12px) |
| Fundo | `--color-white` |
| Borda | `1px solid rgba(15, 45, 82, 0.06)` |
| Sombra | `--shadow-light` |
| **Hover** | `--shadow-medium` · `translateY(-4px)` · `--transition-normal` |

**Estrutura interna:**

```
┌─────────────────────────────┐
│  ┌────────┐                 │
│  │ ícone  │  48×48 container│  ← benefit-card__icon
│  │ 24px   │                 │
│  └────────┘                 │
│                             │
│  Título (H3)                │  ← benefit-card__title
│  Descrição (16px, light)    │  ← benefit-card__description
└─────────────────────────────┘
  gap ícone → título: 16px
  gap título → descrição: 8px
```

### Info Card

Card informativo genérico. Classe: `.info-card`

| Propriedade | Valor |
|---|---|
| Padding | `32px` (`--spacing-xl`) |
| Border radius | `--radius-lg` (20px) |
| Fundo | `--color-accent` |
| Borda | nenhuma |
| Sombra | nenhuma |
| **Hover** | nenhum (estático) |
| Uso | blocos explicativos, estatísticas, destaques informativos |

### Feature Card

Card com destaque visual lateral. Classe: `.feature-card`

| Propriedade | Valor |
|---|---|
| Padding | `24px` |
| Border radius | `--radius-md` |
| Fundo | `--color-white` |
| Borda esquerda | `4px solid --color-secondary` |
| Sombra | `--shadow-light` |
| **Hover** | `--shadow-medium` · borda esquerda `--color-primary` |
| Uso | funcionalidades em destaque, comparativos |

### FAQ Card

Item de pergunta/resposta. Classe: `.faq__item`

| Propriedade | Valor |
|---|---|
| Padding | `0` (interno no summary/answer) |
| Border radius | `--radius-md` |
| Fundo | `--color-white` |
| Borda | `1px solid rgba(15, 45, 82, 0.08)` |
| Sombra | nenhuma |
| **Hover** | borda `rgba(15, 45, 82, 0.15)` |
| **Open** | borda `--color-primary` · fundo `rgba(15, 45, 82, 0.02)` |

### Comparativo rápido

| Card | Padding | Radius | Sombra | Hover | Borda |
|---|---|---|---|---|---|
| Benefit | 24px | md | light | lift + medium | 1px sutil |
| Info | 32px | lg | — | — | — |
| Feature | 24px | md | light | medium | 4px left |
| FAQ | 20px interno | md | — | border | 1px |

---

# 7. Badges

Etiquetas compactas para status, categorias e destaques.

### Anatomia

```
┌──────────────┐
│  ● Grátis    │   height: 28px · padding: 4px 12px · radius-sm
└──────────────┘
```

### Variantes

| Variante | Classe | Fundo | Texto | Ícone Lucide | Uso |
|---|---|---|---|---|---|
| **Sucesso** | `.badge.badge--success` | `rgba(22, 163, 74, 0.1)` | `--color-success` | `check-circle` | Concluído, disponível |
| **Novo** | `.badge.badge--new` | `rgba(15, 45, 82, 0.08)` | `--color-primary` | `sparkles` | Conteúdo recente |
| **Grátis** | `.badge.badge--free` | `rgba(212, 175, 55, 0.15)` | `#9A7B1A` | `gift` | Acesso gratuito |
| **Atualizado** | `.badge.badge--updated` | `rgba(217, 119, 6, 0.1)` | `--color-warning` | `refresh-cw` | Material revisado |

### Especificações compartilhadas

| Propriedade | Valor |
|---|---|
| Altura | `28px` |
| Padding | `4px 12px` |
| Border radius | `--radius-sm` (6px) |
| Font-size | `12px` |
| Font-weight | `600` |
| Text-transform | none |
| Gap ícone-texto | `4px` (`--spacing-xs`) |
| Ícone | Lucide · `14px` |

### Exemplo

```html
<span class="badge badge--free">
  <svg width="14" height="14" aria-hidden="true"><!-- lucide:gift --></svg>
  Grátis
</span>
```

---

# 8. Inputs

Componentes de formulário para futuras páginas de cadastro e contato.

### Campo de texto

Classe: `.input`

| Propriedade | Valor |
|---|---|
| Altura | `48px` |
| Padding | `12px 16px` |
| Border radius | `--radius-md` |
| Font-size | `16px` |
| Fundo | `--color-white` |
| Borda | `1px solid rgba(15, 45, 82, 0.15)` |
| Cor texto | `--color-text` |
| Placeholder | `--color-text-light` |
| **Focus** | borda `--color-primary` · `box-shadow: 0 0 0 3px rgba(15, 45, 82, 0.1)` |
| **Erro** | borda `--color-error` · `box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1)` |
| **Disabled** | fundo `--color-accent` · `opacity: 0.7` · `cursor: not-allowed` |

### Textarea

Classe: `.textarea`

| Propriedade | Valor |
|---|---|
| Min-height | `120px` |
| Padding | `12px 16px` |
| Resize | `vertical` |
| Demais | herda de `.input` |

### Select

Classe: `.select`

| Propriedade | Valor |
|---|---|
| Altura | `48px` |
| Padding | `12px 40px 12px 16px` |
| Ícone seta | Lucide `chevron-down` · `16px` · posição direita |
| Aparência | custom (remove native) |
| Demais | herda estados de `.input` |

### Checkbox

Classe: `.checkbox`

```
┌──┐  Label do checkbox
│✓ │  20×20px · radius-sm · borda 2px
└──┘
```

| Propriedade | Valor |
|---|---|
| Tamanho | `20 × 20px` |
| Border radius | `--radius-sm` |
| Borda | `2px solid rgba(15, 45, 82, 0.25)` |
| Checked | fundo `--color-primary` · ícone `check` branco |
| **Focus** | `outline: 2px solid --color-secondary` · `offset: 2px` |

### Radio

Classe: `.radio`

| Propriedade | Valor |
|---|---|
| Tamanho | `20 × 20px` |
| Formato | circular (`border-radius: 50%`) |
| Borda | `2px solid rgba(15, 45, 82, 0.25)` |
| Selected | borda `--color-primary` · dot interno `8px` `--color-primary` |
| **Focus** | igual checkbox |

### Label

Classe: `.label`

| Propriedade | Valor |
|---|---|
| Font-size | `14px` |
| Font-weight | `500` |
| Cor | `--color-text` |
| Margin-bottom | `8px` (`--spacing-sm`) |

### Mensagem de erro

Classe: `.input-error`

| Propriedade | Valor |
|---|---|
| Font-size | `14px` |
| Cor | `--color-error` |
| Ícone | Lucide `alert-circle` · `16px` |
| Margin-top | `4px` (`--spacing-xs`) |

### Exemplo composto

```html
<div class="form-group">
  <label class="label" for="email">E-mail</label>
  <input type="email" id="email" class="input" placeholder="seu@email.com">
  <span class="input-error">
    <svg width="16" height="16" aria-hidden="true"><!-- alert-circle --></svg>
    Informe um e-mail válido.
  </span>
</div>
```

---

# 9. Timeline

Componente de passos sequenciais. Usado em "Como Funciona".

### Estrutura

```
    ①──────────────────── Entre na comunidade
    │                     Clique no botão e faça seu cadastro...
    │
    ②──────────────────── Acesse os materiais
    │                     Explore a biblioteca de PDFs...
    │
    ③──────────────────── Siga o cronograma
    │                     Utilize o planejamento semanal...
    │
    ④──────────────────── Conquiste sua aprovação
                          Pratique com simulados...
```

### Especificações

| Elemento | Classe | Especificação |
|---|---|---|
| Lista | `.timeline` | `<ol>`, flex/grid vertical |
| Item | `.timeline__item` | gap entre items: `32px` |
| Marcador | `.timeline__marker` | círculo `40×40px` |
| Número | `.timeline__step` | font `16px` · weight `700` · cor branca |
| Conteúdo | `.timeline__content` | padding-left: `24px` |
| Título | `.timeline__title` | H3 · `--font-size-h3` · weight `600` |
| Descrição | `.timeline__description` | 16px · `--color-text-light` |

### Marcador (numeração)

| Propriedade | Valor |
|---|---|
| Tamanho | `40 × 40px` |
| Formato | círculo |
| Fundo | `--color-primary` |
| Número | `--color-white` |
| Borda | `3px solid --color-white` |
| Sombra | `--shadow-light` |

### Conector vertical

| Propriedade | Valor |
|---|---|
| Largura | `2px` |
| Cor | `rgba(15, 45, 82, 0.12)` |
| Posição | entre marcadores, alinhado ao centro |
| Último item | sem conector |

### Espaçamento

| Relação | Valor |
|---|---|
| Marcador → Conteúdo | `24px` |
| Título → Descrição | `8px` |
| Item → Item | `32px` |

---

# 10. FAQ

Acordeão nativo com `<details>`/`<summary>`. Sem JavaScript obrigatório.

### Visual fechado

```
┌─────────────────────────────────────────────────────────┐
│  A comunidade Missão OAB é gratuita?              [ + ] │
└─────────────────────────────────────────────────────────┘
  padding: 20px 24px · radius-md · borda 1px sutil
```

### Visual aberto

```
┌─────────────────────────────────────────────────────────┐
│  A comunidade Missão OAB é gratuita?              [ − ] │
│─────────────────────────────────────────────────────────│
│  Sim. O acesso à comunidade e aos materiais básicos     │
│  é totalmente gratuito. Basta se cadastrar.             │
└─────────────────────────────────────────────────────────┘
  borda primary · fundo levemente tintado
```

### Especificações

| Elemento | Classe | Valor |
|---|---|---|
| Lista | `.faq__list` | max-width: `720px` · gap: `12px` |
| Item | `.faq__item` | `<details>` |
| Pergunta | `.faq__question` | `<summary>` · 16px · weight `600` |
| Resposta | `.faq__answer` | padding-top: `16px` · 16px · `--color-text-light` |
| Ícone toggle | via CSS `::after` | Lucide `plus` / `minus` · `20px` |
| Gap entre items | `12px` | — |

### Comportamento de abertura

| Estado | Borda | Fundo | Ícone |
|---|---|---|---|
| Fechado | `rgba(15, 45, 82, 0.08)` | `--color-white` | `plus` |
| Hover | `rgba(15, 45, 82, 0.15)` | `--color-white` | `plus` |
| Aberto | `--color-primary` | `rgba(15, 45, 82, 0.02)` | `minus` |

### Animação

- Abertura: `max-height` ou content fade · `--transition-normal`
- Ícone: rotação `45deg` (plus → x) como alternativa ao swap

---

# 11. Footer

Rodapé institucional. Tom sóbrio, links discretos.

### Estrutura

```
┌──────────────────────────────────────────────────────────────┐
│  padding-block: 48px                                         │
│                                                              │
│  ┌─────────────────────┐    ┌──────────────────────────┐  │
│  │  [Logo]             │    │  Contato                 │  │
│  │  Tagline            │    │  Instagram               │  │
│  │                     │    │  Política de Privacidade │  │
│  └─────────────────────┘    └──────────────────────────┘  │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│  © 2026 Missão OAB. Todos os direitos reservados.           │
│                                                              │
└──────────────────────────────────────────────────────────────┘
  fundo: --color-primary · texto: --color-white
```

### Especificações

| Elemento | Classe | Valor |
|---|---|---|
| Seção | `.footer` | fundo `--color-primary` |
| Container | `.footer__container` | flex column (mobile) · row (desktop) |
| Logo | `.footer__logo-image` | altura `36px` |
| Tagline | `.footer__tagline` | 14px · `rgba(255,255,255,0.7)` |
| Links | `.footer__nav-link` | 16px · branco · hover dourado |
| Copyright | `.footer__copyright` | 14px · `rgba(255,255,255,0.5)` |

### Espaçamentos

| Relação | Valor |
|---|---|
| Padding vertical seção | `48px` |
| Brand → Nav | `32px` (mobile) · `auto` (desktop) |
| Links entre si | `16px` |
| Conteúdo → Copyright | `32px` |
| Separador | `1px solid rgba(255,255,255,0.1)` |

### Links

| Link | Comportamento |
|---|---|
| Contato | `mailto:contato@missaooab.com.br` |
| Instagram | `target="_blank"` + `rel="noopener noreferrer"` |
| Política | página interna |

---

# 12. Ícones

Biblioteca oficial: **[Lucide Icons](https://lucide.dev/)**

### Regra absoluta

> **Nunca utilizar emojis como componentes da interface.**

Emojis são inconsistentes entre sistemas operacionais, não escalam e quebram a identidade profissional. Substituir todos por SVG Lucide.

### Tamanhos oficiais

| Tamanho | Uso | Contexto |
|---|---|---|
| **16px** | Inline, badges, inputs | `.icon--sm` |
| **20px** | Botões, FAQ toggle, nav | `.icon--md` |
| **24px** | Cards, listas, timeline | `.icon--lg` |
| **32px** | Destaques, empty states | `.icon--xl` |

### Container de ícone em cards

| Propriedade | Valor |
|---|---|
| Tamanho container | `48 × 48px` |
| Ícone interno | `24px` |
| Fundo | `rgba(15, 45, 82, 0.06)` |
| Border radius | `--radius-md` |
| Cor ícone | `--color-primary` |
| stroke-width | `2` |

### Cor

| Contexto | Cor |
|---|---|
| Padrão | `--color-primary` |
| Sobre fundo escuro | `--color-white` |
| Destaque pontual | `--color-secondary` |
| Inativo | `--color-text-light` |
| Semântico sucesso | `--color-success` |
| Semântico erro | `--color-error` |

---

# 13. Sombras

Três níveis oficiais. Baseados em azul primário com baixa opacidade.

### Escala

| Nível | Token | Valor | Visual |
|---|---|---|---|
| **Leve** | `--shadow-light` | `0 1px 3px rgba(15,45,82,0.08), 0 1px 2px rgba(15,45,82,0.06)` | `.` sutil |
| **Média** | `--shadow-medium` | `0 4px 12px rgba(15,45,82,0.10), 0 2px 4px rgba(15,45,82,0.06)` | `..` elevado |
| **Forte** | `--shadow-strong` | `0 10px 30px rgba(15,45,82,0.15), 0 4px 10px rgba(15,45,82,0.08)` | `...` flutuante |

### Quando utilizar

| Sombra | Componentes | Situação |
|---|---|---|
| **Leve** | Cards default, header scrolled, botões hover | Elevação mínima, almost flat |
| **Média** | Cards hover, hero image, dropdowns | Interação ou destaque moderado |
| **Forte** | Modais, popovers, tooltips | Elementos sobrepostos ao conteúdo |

### Regras

- Nunca combinar sombra forte com borda grossa
- Sombra sempre derivada de `--color-primary`, nunca preta pura
- Em fundos `--color-accent`, preferir sombra leve ou borda sutil

---

# 14. Bordas

### Escala oficial

| Token | Valor | Pixels | Uso |
|---|---|---|---|
| `--radius-sm` | `0.375rem` | **6px** | Badges, checkbox, tags |
| `--radius-md` | `0.75rem` | **12px** | Botões, cards, inputs, FAQ |
| `--radius-lg` | `1.25rem` | **20px** | Hero image, info cards, CTA sections |
| `--radius-full` | `9999px` | **pill** | Avatares, pills (uso futuro) |

### Bordas (stroke)

| Token sugerido | Valor | Uso |
|---|---|---|
| `--border-light` | `1px solid rgba(15, 45, 82, 0.06)` | Cards, separadores |
| `--border-default` | `1px solid rgba(15, 45, 82, 0.12)` | Inputs default, FAQ |
| `--border-strong` | `1px solid rgba(15, 45, 82, 0.20)` | Hover states |
| `--border-accent` | `2px solid --color-primary` | Outline buttons, focus rings |
| `--border-feature` | `4px solid --color-secondary` | Feature cards |

---

# 15. Espaçamentos

Escala oficial com aplicações reais nos componentes do projeto.

### Escala

| Token | px | rem |
|---|---|---|
| `--spacing-xs` | 4 | 0.25 |
| `--spacing-sm` | 8 | 0.5 |
| `--spacing-md` | 16 | 1 |
| `--spacing-lg` | 24 | 1.5 |
| `--spacing-xl` | 32 | 2 |
| `--spacing-xxl` | 64 | 4 |

### Exemplos reais por componente

| Componente | Onde | Token | px |
|---|---|---|---|
| Header | padding lateral | `--spacing-xl` | 32 |
| Hero | título → subtítulo | `--spacing-lg` | 24 |
| Hero | subtítulo → botão | `--spacing-xl` | 32 |
| Hero | padding seção | `--spacing-xxl` | 64 |
| Benefit Card | padding interno | `--spacing-lg` | 24 |
| Benefit Card | ícone → título | `--spacing-md` | 16 |
| Benefit Card | título → texto | `--spacing-sm` | 8 |
| Grid Benefícios | gap | `--spacing-lg` | 24 |
| Section Header | título → subtítulo | `--spacing-md` | 16 |
| Section Header | bloco → conteúdo | `--spacing-xl` | 32 |
| Timeline | item → item | `--spacing-xl` | 32 |
| FAQ | item → item | `--spacing-md` - 4 | 12 |
| CTA Final | título → subtítulo | `--spacing-lg` | 24 |
| Footer | padding vertical | `--spacing-xl` + 16 | 48 |

---

# 16. Animações

Todas as animações vivem em `css/animations.css`. Filosofia: **percebidas, não notadas**.

### Tokens de tempo

| Token | Duração | Uso |
|---|---|---|
| `--transition-fast` | `150ms ease` | Links, toggles, opacity |
| `--transition-normal` | `300ms ease` | Cards, botões, FAQ |
| `--transition-slow` | `500ms ease` | Scroll reveal, modais |

### Curvas permitidas

| Curva | Quando |
|---|---|
| `ease` | Default — hover, color, shadow |
| `ease-out` | Entrada (fade-in, slide-up) |
| `ease-in` | Saída (fade-out, collapse) |

### Hover

| Componente | Propriedade | Valor |
|---|---|---|
| Botão Primary | `transform` | `translateY(-1px)` |
| Benefit Card | `transform` + `box-shadow` | `translateY(-4px)` + medium |
| Nav Link | `color` | `--color-primary` |
| FAQ Item | `border-color` | intensificar 50% |

### Fade

```css
/* Entrada de seção no scroll */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

| Propriedade | Valor |
|---|---|
| Distância | `16px` (nunca mais) |
| Opacity | `0 → 1` |
| Duração | `--transition-slow` (500ms) |
| Stagger | `100ms` entre cards (opcional) |

### Scroll

- Intersection Observer em `app.js` (futuro) adiciona classe `.is-visible`
- Anima **apenas** opacity e translateY
- Nunca animar width, height ou margin no scroll

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# 17. Componentes Compostos

Como montar seções completas a partir dos componentes básicos.

### Hero

```
[ Container ]
  └── [ Grid 2 colunas ]
        ├── [ hero__content ]
        │     ├── H1 (.hero__title)
        │     ├── P (.hero__subtitle)
        │     └── Button (.btn--primary.btn--large)
        └── [ hero__media ]
              └── Image (.hero__image)
```

### CTA Final

```
[ Section .cta-final ]  ← fundo --color-primary
  └── [ Container ]  ← text-align: center
        ├── H2 (.cta-final__title)  ← branco
        ├── P (.cta-final__subtitle)  ← branco 70%
        └── Button (.btn--primary.btn--xlarge)  ← secondary ou white variant
```

### Cards (Benefícios)

```
[ Section .benefits ]
  └── [ Container ]
        ├── [ Section Header ]
        │     ├── H2
        │     └── P
        └── [ Grid 3 colunas .benefits__grid ]
              ├── Benefit Card × 6
              ├── Benefit Card
              └── ...
```

### FAQ

```
[ Section .faq ]  ← fundo --color-accent
  └── [ Container ]
        ├── [ Section Header ]
        └── [ faq__list ]  ← max-width 720px
              ├── FAQ Card (details) × 4
              └── ...
```

### Timeline

```
[ Section .how-it-works ]
  └── [ Container ]
        ├── [ Section Header ]
        └── [ ol.timeline ]
              ├── timeline__item × 4
              │     ├── timeline__marker > timeline__step
              │     └── timeline__content > title + description
              └── ...
```

---

# 18. Exemplos Visuais

Diagramas de referência para implementação.

### Botões — todas as variantes

```
 Primary          Secondary         Outline           Ghost
┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ ▶ Entrar     │ │ ▶ Entrar     │ │ ▶ Entrar     │ │   Saiba mais │
└──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘
  #0F2D52 bg       #D4AF37 bg       transparent       transparent
  white text       #0F2D52 text     2px #0F2D52       gray text
```

### Section Header (padrão reutilizável)

```
┌─────────────────────────────────────────────┐
│                                             │
│         Título da Seção (H2, center)        │
│         Subtítulo descritivo (P, center)    │
│                                             │
└─────────────────────────────────────────────┘
         margin-bottom: 32px → conteúdo
```

### Benefit Card — grid desktop

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ [icon]       │  │ [icon]       │  │ [icon]       │
│ Cronograma   │  │ Biblioteca   │  │ Questões     │
│ desc...      │  │ desc...      │  │ desc...      │
└──────────────┘  └──────────────┘  └──────────────┘

┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ [icon]       │  │ [icon]       │  │ [icon]       │
│ Simulados    │  │ Resumos      │  │ Atualizações │
│ desc...      │  │ desc...      │  │ desc...      │
└──────────────┘  └──────────────┘  └──────────────┘

  icons: Lucide SVG (calendar-days, book-open, etc.)
  gap: 24px · 3 colunas · equal height
```

### Página completa — fluxo vertical

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  HEADER (sticky, blur)                        ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  HERO (2 colunas)                             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  BENEFÍCIOS (6 cards, grid 3×2)              ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  COMO FUNCIONA (timeline 4 passos)             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  FAQ (acordeão, fundo accent)                 ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  CTA FINAL (fundo primary, botão xlarge)      ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  FOOTER (fundo primary, links)                ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

### Badges em contexto

```
┌─────────────────────────────────────┐
│  Simulados OAB 2026                 │
│  [Grátis]  [Novo]                   │
│                                     │
│  Teste periódico no formato...      │
└─────────────────────────────────────┘
```

---

# 19. Checklist

Utilizar antes de considerar qualquer tela ou componente como **aprovado**.

### Estrutura e código

- [ ] HTML5 semântico (`header`, `main`, `section`, `nav`, `footer`)
- [ ] Classes seguem nomenclatura BEM
- [ ] Nenhum CSS inline
- [ ] Nenhum valor HEX solto — apenas tokens de `variables.css`
- [ ] Comentários nas grandes seções
- [ ] Indentação de 2 espaços

### Visual e componentes

- [ ] Utiliza apenas componentes oficiais deste UI Kit
- [ ] Botões seguem tabela de variantes (Primary/Secondary/Outline/Ghost/Icon)
- [ ] Cards seguem specs de padding, radius e sombra
- [ ] Ícones são Lucide SVG — **zero emojis**
- [ ] Badges utilizam variantes oficiais
- [ ] Espaçamentos da escala XS–XXL (nenhum valor arbitrário)
- [ ] Sombras conforme nível (leve/média/forte)
- [ ] Border radius conforme escala (sm/md/lg)

### Tipografia

- [ ] Poppins como fonte principal
- [ ] Hierarquia H1 → H2 → H3 respeitada (sem pular níveis)
- [ ] Apenas 1 H1 por página
- [ ] Parágrafos com max-width ~65ch

### Interação

- [ ] Todos os botões e links possuem estado hover
- [ ] Focus visível em todos os interativos (`:focus-visible`)
- [ ] Estados disabled implementados onde aplicável
- [ ] Transições usam tokens (`--transition-fast/normal/slow`)
- [ ] `prefers-reduced-motion` respeitado

### Responsividade

- [ ] Mobile first implementado
- [ ] Testado em: 375px, 768px, 1024px, 1280px
- [ ] Touch targets mínimo 44×44px
- [ ] Header adapta corretamente (nav oculta no mobile)
- [ ] Grids colapsam conforme breakpoints

### Acessibilidade

- [ ] Contraste WCAG AA (mínimo 4.5:1)
- [ ] Imagens com `alt` descritivo
- [ ] Ícones decorativos com `aria-hidden="true"`
- [ ] Links externos com `rel="noopener noreferrer"`
- [ ] Seções com `aria-labelledby`
- [ ] FAQ funcional via teclado (`details`/`summary`)

### Performance

- [ ] Imagens em WebP com dimensões explícitas
- [ ] Lazy loading em imagens below the fold
- [ ] Nenhuma biblioteca externa desnecessária
- [ ] JS com `defer` e mínimo

### SEO

- [ ] `<title>` e `<meta description>` preenchidos
- [ ] `<html lang="pt-BR">`
- [ ] Open Graph configurado (quando aplicável)
- [ ] Canonical definido

### Conversão

- [ ] CTA principal visível acima da dobra (header + hero)
- [ ] Um objetivo claro por seção
- [ ] Textos em português, tom semi-formal
- [ ] Nenhum elemento distrai do fluxo de conversão

---

<p align="center">
  <strong>Missão OAB — UI Kit v1.0</strong><br>
  Documento interno · Complemento ao DESIGN_GUIDE.md
</p>
