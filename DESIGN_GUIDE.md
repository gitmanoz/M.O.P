# Missão OAB — Design System

> **Versão:** 1.0  
> **Última atualização:** Julho de 2026  
> **Status:** Documento oficial de referência  
> **Escopo:** Landing Page e futuras expansões do projeto

---

## Índice

1. [Personalidade da Marca](#1-personalidade-da-marca)
2. [Paleta de Cores](#2-paleta-de-cores)
3. [Tipografia](#3-tipografia)
4. [Grid](#4-grid)
5. [Espaçamentos](#5-espaçamentos)
6. [Botões](#6-botões)
7. [Cards](#7-cards)
8. [Ícones](#8-ícones)
9. [Imagens](#9-imagens)
10. [Animações](#10-animações)
11. [Responsividade](#11-responsividade)
12. [Acessibilidade](#12-acessibilidade)
13. [SEO](#13-seo)
14. [Performance](#14-performance)
15. [Padrão de Código](#15-padrão-de-código)
16. [Filosofia do Projeto](#16-filosofia-do-projeto)

---

## Princípios Fundamentais

A identidade visual da **Missão OAB** deve transmitir, em toda interação:

| Valor | Manifestação visual |
|---|---|
| **Aprovação** | Mensagens claras de progresso e conquista; sensação de caminho definido |
| **Organização** | Hierarquia visual limpa, grids consistentes, espaçamentos previsíveis |
| **Confiança** | Paleta sóbria, tipografia legível, ausência de ruído visual |
| **Tecnologia** | Interface moderna, fluida e responsiva |
| **Simplicidade** | Cada elemento existe por um motivo; nada decorativo sem função |
| **Elegância** | Proporções equilibradas, transições suaves, acabamento refinado |
| **Profissionalismo** | Tom institucional, conteúdo objetivo, acabamento de produto premium |

### Referências de sensação (não de cópia)

A experiência deve evocar a **clareza da Apple**, a **confiança da Stripe**, a **conversão da Hotmart** e a **seriedade acadêmica da Estratégia Vestibulares** — sem replicar nenhuma delas. A Missão OAB possui identidade própria.

### O que nunca fazer

- Visual infantil, cartoon ou excessivamente lúdico
- Excesso de efeitos, gradientes chamativos ou animações distrativas
- Elementos decorativos sem propósito funcional ou comunicacional
- Emojis na interface (utilizar ícones profissionais)
- Cores fora da paleta oficial sem aprovação documentada

---

## 1. Personalidade da Marca

### Quem somos

A **Missão OAB** é uma comunidade de preparação para o Exame de Ordem. Não somos uma startup genérica nem uma plataforma de entretenimento. Somos um **parceiro de estudo** — organizado, confiável e focado em resultados.

### Como o usuário deve se sentir

Ao entrar no site, o estudante deve experimentar:

1. **Segurança** — "Estou no lugar certo para me preparar."
2. **Clareza** — "Sei exatamente o que fazer a seguir."
3. **Motivação contida** — "Minha aprovação é possível e está ao meu alcance."
4. **Respeito** — "Este produto leva a minha jornada a sério."

> A sensação desejada não é euforia. É **confiança calma**.

### Tom de comunicação

| Atributo | Sim | Não |
|---|---|---|
| Direto | "Entre na comunidade gratuitamente." | "Não perca essa oportunidade incrível!!!" |
| Encorajador | "Sua aprovação começa hoje." | "Você VAI passar, garantido!" |
| Profissional | "Materiais organizados por disciplina." | "Material top demais 🔥" |
| Humano | "Junte-se a centenas de estudantes." | Linguagem robótica ou corporativa demais |

### Linguagem

- **Idioma oficial:** Português do Brasil (pt-BR)
- **Voz:** Ativa e orientada à ação
- **Pessoa:** Segunda pessoa do singular ("você") quando direcionado ao usuário
- **Termos preferidos:** aprovação, preparação, cronograma, comunidade, materiais, simulados
- **Termos a evitar:** milagre, hack, segredo, fórmula mágica, garantido

### Nível de formalidade

**Semi-formal.** Equilíbrio entre proximidade e autoridade acadêmica.

- Adequado para estudantes de Direito e bacharéis em fase de preparação
- Respeitoso sem ser distante
- Técnico quando necessário, sempre com clareza

---

## 2. Paleta de Cores

Todas as cores devem ser consumidas via **CSS Custom Properties** definidas em `css/variables.css`. Nunca utilizar valores HEX soltos no código.

### Tabela oficial

| Nome | Token CSS | HEX | Uso |
|---|---|---|---|
| Azul Principal | `--color-primary` | `#0F2D52` | Header, títulos de destaque, botões primários, links ativos, elementos de marca |
| Dourado | `--color-secondary` | `#D4AF37` | Destaques pontuais, badges, ícones de ênfase, detalhes premium (uso moderado) |
| Cinza Claro | `--color-accent` | `#F8F9FB` | Fundos de seção alternados, áreas de respiro, cards em fundo claro |
| Branco | `--color-white` | `#FFFFFF` | Fundo principal, texto sobre fundos escuros, cards elevados |
| Preto | `--color-black` | `#000000` | Uso restrito; preferir `--color-text` para legibilidade |
| Texto | `--color-text` | `#1A1A2E` | Parágrafos, títulos em fundo claro, conteúdo principal |
| Texto Secundário | `--color-text-light` | `#6B7280` | Subtítulos, legendas, metadados, textos de apoio |
| Erro | `--color-error` | `#DC2626` | Mensagens de erro, validações de formulário, estados críticos |
| Sucesso | `--color-success` | `#16A34A` | Confirmações, feedback positivo, estados concluídos |
| Alerta | `--color-warning` | `#D97706` | Avisos, atenção necessária, estados pendentes |

### Proporção de uso recomendada

```
Azul Principal  ████████████████████  60%
Branco / Cinza  ████████              25%
Dourado         ███                    8%
Semânticas      █                      4%
Preto           █                      3%
```

### Regras de contraste

- Texto principal sobre fundo claro: mínimo **4.5:1** (WCAG AA)
- Texto sobre `--color-primary`: utilizar `--color-white`
- Dourado (`--color-secondary`) **nunca** como cor de texto longo — apenas destaques e ícones

### Exemplo de uso correto

```css
/* ✅ Correto — token semântico */
.hero__title {
  color: var(--color-primary);
}

/* ❌ Incorreto — valor solto */
.hero__title {
  color: #0F2D52;
}
```

---

## 3. Tipografia

### Família principal

**Poppins** — sans-serif geométrica, moderna e altamente legível.

```html
<!-- Importação oficial (Google Fonts) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Fallback:** `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

Token: `--font-family`

### Escala tipográfica

| Nível | Token CSS | Tamanho | Peso | Line-height | Uso |
|---|---|---|---|---|---|
| **Hero** | `--font-size-hero` | `clamp(2.25rem, 5vw, 3.5rem)` · 36–56px | 700 (Bold) | 1.2 | Título principal da landing page |
| **H1** | `--font-size-h1` | `clamp(2rem, 4vw, 2.75rem)` · 32–44px | 700 (Bold) | 1.2 | Títulos de página |
| **H2** | `--font-size-h2` | `clamp(1.75rem, 3vw, 2.25rem)` · 28–36px | 600 (SemiBold) | 1.3 | Títulos de seção |
| **H3** | `--font-size-h3` | `clamp(1.25rem, 2vw, 1.5rem)` · 20–24px | 600 (SemiBold) | 1.4 | Subtítulos, títulos de cards |
| **Texto** | `--font-size-text` | `1rem` · 16px | 400 (Regular) | 1.5 | Parágrafos, corpo de texto |
| **Legenda** | `--font-size-small` | `0.875rem` · 14px | 400 (Regular) | 1.5 | Captions, metadados, labels |

### Pesos disponíveis

| Peso | Valor | Uso |
|---|---|---|
| Regular | 400 | Texto corrido, parágrafos |
| Medium | 500 | Labels, navegação, ênfase leve |
| SemiBold | 600 | Subtítulos, títulos de cards |
| Bold | 700 | Hero, H1, CTAs textuais |

### Regras tipográficas

1. **Máximo de 2 pesos por bloco visual** — evitar poluição
2. **Nunca utilizar mais de 3 tamanhos** dentro de uma mesma seção
3. **Largura de leitura:** parágrafos entre 60 e 75 caracteres (`max-width: 65ch`)
4. **Capitalização:** sentence case em títulos; evitar ALL CAPS exceto labels de 1–2 palavras

### Exemplo HTML semântico

```html
<h1 class="hero__title">Sua aprovação começa hoje.</h1>
<h2 class="section-header__title">Tudo o que você precisa para passar na OAB</h2>
<h3 class="benefit-card__title">Cronograma</h3>
<p class="benefit-card__description">Planejamento semanal estruturado.</p>
<small class="footer__copyright">© 2026 Missão OAB.</small>
```

---

## 4. Grid

### Container

| Propriedade | Valor | Token sugerido |
|---|---|---|
| Largura máxima | `1200px` | `--container-max-width` |
| Centralização | `margin: 0 auto` | — |
| Largura fluida | `width: 100%` | — |

### Espaçamento lateral (padding horizontal)

| Breakpoint | Padding lateral | Token |
|---|---|---|
| Desktop (≥ 1280px) | `32px` | `--spacing-xl` |
| Notebook (1024–1279px) | `32px` | `--spacing-xl` |
| Tablet (768–1023px) | `24px` | `--spacing-lg` |
| Mobile (≤ 767px) | `16px` | `--spacing-md` |

### Sistema de Grid

| Contexto | Colunas | Gap |
|---|---|---|
| Benefícios (Desktop) | 3 colunas | `24px` (`--spacing-lg`) |
| Benefícios (Tablet) | 2 colunas | `24px` |
| Benefícios (Mobile) | 1 coluna | `16px` |
| Hero (Desktop) | 2 colunas (50/50) | `48px` |
| Footer | Flexbox adaptativo | `24px` |

### Classe utilitária padrão

```css
.container {
  width: 100%;
  max-width: var(--container-max-width, 1200px);
  margin-inline: auto;
  padding-inline: var(--spacing-md);
}
```

> O grid é **CSS Grid** para layouts de seção e **Flexbox** para componentes internos (header, cards inline). Nunca utilizar frameworks de grid.

---

## 5. Espaçamentos

Escala oficial baseada em múltiplos de 4px. Todos os valores devem ser consumidos via tokens.

### Tabela de escala

| Token | Valor (rem) | Pixels | Quando utilizar |
|---|---|---|---|
| `--spacing-xs` | `0.25rem` | **4px** | Ajustes finos: gap entre ícone e label, micro-espaçamentos internos |
| `--spacing-sm` | `0.5rem` | **8px** | Padding interno de badges, gap entre elementos inline |
| `--spacing-md` | `1rem` | **16px** | Padding padrão de componentes, gap entre itens de lista, padding mobile |
| `--spacing-lg` | `1.5rem` | **24px** | Padding de cards, gap de grids, espaçamento entre parágrafo e título |
| `--spacing-xl` | `2rem` | **32px** | Padding lateral desktop, espaçamento entre blocos dentro de seção |
| `--spacing-xxl` | `4rem` | **64px** | Padding vertical de seções, respiro entre grandes blocos |

### Espaçamento vertical de seções

| Contexto | Padding vertical |
|---|---|
| Seção padrão | `--spacing-xxl` (64px) top/bottom |
| Seção compacta (FAQ) | `--spacing-xl` (32px) top/bottom |
| CTA Final | `--spacing-xxl` (64px) top/bottom |

### Regra de ouro

> Se o espaçamento parece "apertado", aumente um nível na escala. Se parece "vazio demais", diminua um nível. **Nunca invente valores fora da escala.**

---

## 6. Botões

### Variantes oficiais

| Variante | Classe | Fundo | Texto | Borda |
|---|---|---|---|---|
| **Primário** | `.btn--primary` | `--color-primary` | `--color-white` | nenhuma |
| **Secundário** | `.btn--secondary` | `--color-secondary` | `--color-primary` | nenhuma |
| **Outline** | `.btn--outline` | transparente | `--color-primary` | `2px solid --color-primary` |

### Tamanhos

| Tamanho | Classe | Padding | Font-size |
|---|---|---|---|
| Padrão | `.btn` | `12px 24px` | `16px` |
| Grande | `.btn--large` | `16px 32px` | `16px` |
| Extra grande | `.btn--xlarge` | `20px 40px` | `18px` |

### Especificações visuais

| Propriedade | Valor |
|---|---|
| Border Radius | `--radius-md` (12px) |
| Font-weight | 600 (SemiBold) |
| Transição | `--transition-normal` (300ms ease) |
| Gap ícone + texto | `--spacing-sm` (8px) |

### Estados interativos

| Estado | Comportamento |
|---|---|
| **Default** | Cor sólida conforme variante |
| **Hover** | Escurecer 8–10% o fundo; `transform: translateY(-1px)` sutil |
| **Focus** | `outline: 2px solid --color-secondary`; `outline-offset: 2px` |
| **Active** | `transform: translateY(0)`; escurecer 12% |
| **Disabled** | `opacity: 0.5`; `cursor: not-allowed`; sem hover |

### Ícones em botões

- Utilizar **Lucide Icons** (SVG inline ou sprite)
- Tamanho: `20px` alinhado ao centro vertical do texto
- Posição: à esquerda do label
- **Nunca utilizar emojis** — substituir por ícones como `rocket`, `arrow-right`, `check`

### Exemplo de markup

```html
<a href="#cta-final" class="btn btn--primary btn--large">
  <svg class="btn__icon" aria-hidden="true"><!-- Lucide: rocket --></svg>
  Quero Entrar na Missão
</a>
```

---

## 7. Cards

### Especificações padrão

| Propriedade | Valor | Token |
|---|---|---|
| Fundo | `--color-white` | — |
| Padding | `24px` | `--spacing-lg` |
| Border Radius | `12px` | `--radius-md` |
| Sombra | Leve | `--shadow-light` |
| Borda | `1px solid rgba(15, 45, 82, 0.06)` | — |

### Estrutura interna

```
┌─────────────────────────────┐
│  [Ícone — 48×48px]          │  ← benefit-card__icon
│                             │
│  Título (H3)                │  ← benefit-card__title
│  Texto descritivo (16px)    │  ← benefit-card__description
└─────────────────────────────┘
```

### Tipografia interna

| Elemento | Estilo |
|---|---|
| **Título** | `--font-size-h3`, peso 600, cor `--color-text` |
| **Texto** | `--font-size-text`, peso 400, cor `--color-text-light` |

### Ícones em cards

- Tamanho: **48×48px** (container), ícone interno **24px**
- Cor: `--color-primary` ou `--color-secondary` (apenas um por card)
- Estilo: Lucide Icons, stroke-width `2`

### Estado hover

| Propriedade | Valor |
|---|---|
| Sombra | `--shadow-medium` |
| Transform | `translateY(-4px)` |
| Transição | `--transition-normal` |
| Borda | inalterada |

> Hover deve ser **sutil e funcional** — indicar interatividade, não chamar atenção excessiva.

---

## 8. Ícones

### Biblioteca oficial

**[Lucide Icons](https://lucide.dev/)** — open source, consistente, leve.

### Regras

| Regra | Detalhe |
|---|---|
| **Nunca emojis** | Emojis são proibidos na interface. Substituir todos por SVG Lucide |
| **Tamanho padrão** | `24px` (componentes) · `20px` (botões) · `48px` (container de card) |
| **Espessura** | `stroke-width: 2` (padrão Lucide) |
| **Cor** | Herdar do contexto ou `--color-primary` / `--color-secondary` |
| **Acessibilidade** | Ícones decorativos: `aria-hidden="true"`. Ícones funcionais: `aria-label` no elemento pai |
| **Formato** | SVG inline preferencial; sprite como alternativa |

### Ícones mapeados por seção

| Contexto | Ícone Lucide sugerido |
|---|---|
| Cronograma | `calendar-days` |
| Biblioteca de PDFs | `book-open` |
| Questões Comentadas | `message-circle-question` |
| Simulados | `clipboard-check` |
| Resumos | `file-text` |
| Atualizações | `refresh-cw` |
| CTA / Entrar | `rocket` |
| Instagram | `instagram` |
| Contato | `mail` |

---

## 9. Imagens

### Princípios

1. **Sempre WebP** — com fallback `<picture>` para browsers legados
2. **Sempre comprimidas** — meta de ≤ 100KB para cards, ≤ 250KB para hero
3. **Nunca imagens pesadas** — bloquear upload de arquivos > 500KB
4. **Sempre com dimensões** — atributos `width` e `height` no HTML para evitar CLS
5. **Sempre com alt descritivo** — exceto imagens puramente decorativas (`alt=""`)

### Padrões por contexto

| Contexto | Formato | Dimensão máxima | Proporção | Lazy load |
|---|---|---|---|---|
| **Hero** | WebP | 1120 × 960px | ~7:6 | Não (above the fold) |
| **Cards / Benefícios** | SVG ou WebP | 96 × 96px | 1:1 | Sim |
| **Logo** | SVG | vetorial | — | Não |
| **Ícones** | SVG (Lucide) | vetorial | — | Não |
| **Open Graph** | WebP/JPG | 1200 × 630px | 1.91:1 | N/A |

### Exemplo com `<picture>`

```html
<picture>
  <source srcset="img/hero/hero-main.webp" type="image/webp">
  <img
    src="img/hero/hero-main.png"
    alt="Estudante organizando materiais de preparação para a OAB"
    class="hero__image"
    width="560"
    height="480"
  >
</picture>
```

### Organização de arquivos

```
img/
├── logo/       → Logotipos (SVG)
├── hero/       → Imagens de destaque (WebP)
├── icons/      → Ícones customizados, se necessário (SVG)
└── cards/      → Imagens de cards e thumbnails (WebP)
```

---

## 10. Animações

### Filosofia

Animações existem para **guiar atenção e dar feedback** — nunca para impressionar. O usuário deve quase não perceber que existem.

> Se a animação chama mais atenção que o conteúdo, ela está errada.

### Tokens oficiais

| Token | Duração | Uso |
|---|---|---|
| `--transition-fast` | `150ms ease` | Hover de links, toggles, micro-interações |
| `--transition-normal` | `300ms ease` | Hover de cards e botões, fade-in de seções |
| `--transition-slow` | `500ms ease` | Entrada de modais, transições de layout |

### Curvas permitidas

| Curva | Uso |
|---|---|
| `ease` | Padrão para a maioria das transições |
| `ease-out` | Elementos entrando na tela |
| `ease-in` | Elementos saindo da tela |

**Proibido:** `bounce`, `elastic`, animações infinitas chamativas, parallax agressivo.

### Animações permitidas

| Tipo | Propriedade | Contexto |
|---|---|---|
| **Fade-in** | `opacity: 0 → 1` | Entrada de seções no scroll |
| **Slide-up sutil** | `translateY(16px → 0)` + fade | Cards e blocos de conteúdo |
| **Hover lift** | `translateY(-1px a -4px)` | Botões e cards |
| **Focus ring** | `outline` com transição | Todos os elementos interativos |

### Animações proibidas

- Spinners decorativos sem função de loading
- Texto animado letra por letra
- Backgrounds animados
- Contadores exagerados
- Efeitos de partículas

### Respeito ao usuário

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 11. Responsividade

### Abordagem

**Mobile First** — estilos base para mobile; media queries adicionam complexidade conforme a tela cresce.

Arquivo dedicado: `css/responsive.css`

### Breakpoints oficiais

| Nome | Faixa | Dispositivo típico | Colunas |
|---|---|---|---|
| **Mobile pequeno** | `< 480px` | iPhone SE, celulares compactos | 1 |
| **Mobile** | `480px – 767px` | Smartphones padrão | 1 |
| **Tablet** | `768px – 1023px` | iPad, tablets | 2 |
| **Notebook** | `1024px – 1279px` | Laptops 13"–15" | 2–3 |
| **Desktop** | `≥ 1280px` | Monitores desktop | 3 |

### Media queries padrão

```css
/* Mobile pequeno — ajustes finos */
@media (max-width: 479px) { }

/* Mobile */
@media (min-width: 480px) { }

/* Tablet */
@media (min-width: 768px) { }

/* Notebook */
@media (min-width: 1024px) { }

/* Desktop */
@media (min-width: 1280px) { }
```

### Comportamento por seção

| Seção | Mobile | Tablet | Desktop |
|---|---|---|---|
| Header | Logo + botão CTA (nav oculta) | Logo + nav + CTA | Logo + nav + CTA |
| Hero | Coluna única (texto → imagem) | Coluna única | 2 colunas (texto | imagem) |
| Benefícios | 1 coluna | 2 colunas | 3 colunas |
| Timeline | Vertical | Vertical | Vertical (com conector lateral) |
| FAQ | Full width | Full width | Max 720px centralizado |
| Footer | Coluna única | Flex row | Flex row |

---

## 12. Acessibilidade

### Objetivo

Conformidade **WCAG 2.1 Nível AA** como padrão mínimo.

### Contraste

| Combinação | Ratio mínimo | Status |
|---|---|---|
| `--color-text` sobre `--color-white` | ≥ 4.5:1 | ✅ |
| `--color-text-light` sobre `--color-white` | ≥ 4.5:1 | ✅ |
| `--color-white` sobre `--color-primary` | ≥ 4.5:1 | ✅ |
| `--color-secondary` como texto | — | ❌ Proibido |

### Texto alternativo (alt)

| Tipo de imagem | Regra |
|---|---|
| Informativa | `alt` descritivo e conciso |
| Decorativa | `alt=""` + `aria-hidden="true"` |
| Logo | `alt="Missão OAB"` |
| Ícones funcionais | `aria-label` no botão/link pai |

### Focus visível

Todo elemento interativo deve possuir indicador de foco visível:

```css
:focus-visible {
  outline: 2px solid var(--color-secondary);
  outline-offset: 2px;
}
```

**Nunca** utilizar `outline: none` sem alternativa visual.

### Navegação por teclado

- Toda funcionalidade acessível via mouse deve ser acessível via teclado
- Ordem de tabulação lógica (top → bottom, left → right)
- Skip link para conteúdo principal (recomendado)
- FAQ com `<details>`/`<summary>` funciona nativamente por teclado

### ARIA

| Situação | Atributo |
|---|---|
| Seção com título | `aria-labelledby="id-do-titulo"` |
| Navegação | `aria-label="Navegação principal"` |
| Ícone decorativo | `aria-hidden="true"` |
| Link externo | `rel="noopener noreferrer"` + indicar abertura em nova aba |

---

## 13. SEO

### Estrutura de headings

```
H1 → Único por página (Hero)
  H2 → Títulos de seção (Benefícios, Como Funciona, FAQ, CTA)
    H3 → Subtítulos (Cards, passos da timeline, perguntas FAQ)
```

**Regra:** nunca pular níveis (ex.: H1 → H3).

### Meta tags obrigatórias

```html
<title>Missão OAB | Sua aprovação começa hoje</title>
<meta name="description" content="Entre gratuitamente para a comunidade Missão OAB e acelere sua preparação para o exame da Ordem.">
<link rel="canonical" href="https://missaooab.com.br/">
```

### Open Graph

```html
<meta property="og:title" content="Missão OAB | Sua aprovação começa hoje">
<meta property="og:description" content="Materiais organizados, cronograma, simulados e questões comentadas.">
<meta property="og:image" content="https://missaooab.com.br/img/hero/og-image.webp">
<meta property="og:url" content="https://missaooab.com.br/">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
```

### Boas práticas adicionais

| Prática | Detalhe |
|---|---|
| URLs semânticas | `/politica-de-privacidade.html`, não `/page?id=3` |
| HTML semântico | `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>` |
| Lang attribute | `<html lang="pt-BR">` |
| Imagens otimizadas | WebP + dimensões explícitas |
| Performance | Lighthouse SEO ≥ 95 |

---

## 14. Performance

### Metas

| Métrica | Objetivo |
|---|---|
| **Lighthouse Performance** | ≥ 95 |
| **Lighthouse Accessibility** | ≥ 95 |
| **Lighthouse SEO** | ≥ 95 |
| **Lighthouse Best Practices** | ≥ 95 |
| **Tempo de carregamento** | < 1 segundo (First Contentful Paint) |
| **LCP** | < 2.5s |
| **CLS** | < 0.1 |
| **Peso total da página** | < 500KB (first load) |

### Checklist de performance

- [ ] Imagens em WebP com compressão adequada
- [ ] Lazy loading em imagens below the fold (`loading="lazy"`)
- [ ] CSS organizado e sem duplicações
- [ ] JavaScript mínimo e com `defer`
- [ ] Fontes com `preconnect` e `display=swap`
- [ ] SVG para logos e ícones (zero requisições extras)
- [ ] Nenhuma biblioteca externa desnecessária
- [ ] Nenhum CSS ou JS inline

### Arquitetura de assets

```
css/
├── reset.css        → Reset (carrega primeiro)
├── variables.css    → Tokens (carrega segundo)
├── style.css        → Componentes e layout
├── responsive.css   → Media queries
└── animations.css   → Animações isoladas

js/
└── app.js           → JavaScript mínimo (defer)
```

---

## 15. Padrão de Código

### Nomenclatura BEM

```
bloco__elemento--modificador
```

| Tipo | Exemplo |
|---|---|
| Bloco | `.header`, `.hero`, `.benefit-card` |
| Elemento | `.header__logo`, `.hero__title`, `.benefit-card__icon` |
| Modificador | `.btn--primary`, `.btn--large`, `.btn--outline` |

### Regras BEM

1. Um bloco = um componente visual independente
2. Elementos nunca aninham mais de um nível: `.bloco__elemento` (não `.bloco__elemento__sub`)
3. Modificadores alteram aparência ou comportamento, nunca estrutura
4. Estados interativos via pseudo-classes (`:hover`, `:focus-visible`), não classes

### Comentários

Comentar **grandes seções** no HTML e CSS:

```css
/* ============================================
   HEADER — Navegação principal fixa
   ============================================ */
```

Não comentar o óbvio. Comentar decisões e agrupamentos.

### Indentação

| Propriedade | Valor |
|---|---|
| Indentação | 2 espaços (nunca tabs) |
| Encoding | UTF-8 |
| Final de linha | LF |
| Aspas HTML | Duplas (`"`) |

### Organização de arquivos

```
missao-mobs/
├── index.html
├── DESIGN_GUIDE.md          ← Este documento
├── README.md
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   └── app.js
├── img/
│   ├── logo/                ← placeholders legados (não Source of Truth)
│   ├── hero/
│   ├── icons/
│   └── cards/
├── assets/
│   └── brand/               ← identidade oficial (ver assets/brand/README.md)
│       ├── source/
│       ├── exports/
│       ├── favicon/
│       ├── social/
│       ├── og/
│       ├── app/
│       └── reference/
└── favicon/
```

Logotipos oficiais da marca devem ser consumidos de `assets/brand/source/` (SVG mestre), conforme `AI_CONTEXT.md`.

### Ordem de importação CSS

```html
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/responsive.css">
<link rel="stylesheet" href="css/animations.css">
```

---

## 16. Filosofia do Projeto

### Como trabalhar neste projeto

Todo desenvolvedor que contribuir com a **Missão OAB** deve internalizar esta sequência de prioridades:

```
1. Organização     → Código e design previsíveis
2. Escalabilidade  → Fácil de crescer sem refatorar
3. Performance     → Rápido para o usuário, leve para o servidor
4. Conversão       → Cada seção existe para guiar à ação
5. SEO             → Encontrável e indexável
6. Acessibilidade  → Utilizável por todos
7. Código limpo    → Legível por qualquer dev do time
```

### Princípios de decisão

| Quando | Faça |
|---|---|
| Dúvida entre simples e complexo | Escolha o **simples** |
| Dúvida entre bonito e funcional | Escolha o **funcional** |
| Dúvida entre rápido e qualidade | Escolha a **qualidade** |
| Dúvida sobre cor ou tamanho | Consulte este documento e `variables.css` |
| Novo componente necessário | Verifique se um existente atende antes de criar |

### Fluxo de trabalho recomendado

```
1. Consultar DESIGN_GUIDE.md
2. Verificar tokens em variables.css
3. Implementar HTML semântico (se necessário)
4. Estilizar em style.css com tokens
5. Adaptar em responsive.css
6. Animar em animations.css (se necessário)
7. Testar: responsividade + acessibilidade + performance
8. Revisar: BEM, comentários, ausência de valores soltos
```

### O que nunca sacrificar

> **Nunca sacrificar qualidade por velocidade.**

Entregas rápidas que ignoram tokens, acessibilidade ou performance geram débito técnico que custa mais caro depois. Cada linha de código é um investimento na credibilidade da marca.

### Evolução deste documento

Este Design System é um **documento vivo**. Qualquer alteração de token, breakpoint ou padrão de componente deve ser:

1. Documentada neste arquivo
2. Refletida em `css/variables.css`
3. Comunicada ao time antes de ser implementada

---

<p align="center">
  <strong>Missão OAB — Design System v1.0</strong><br>
  Documento interno · Uso exclusivo do projeto
</p>
