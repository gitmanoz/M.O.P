# História da Missão OAB

Documento institucional de evolução do projeto.  
Registra marcos, fases e decisões comprováveis por documentação, estrutura de arquivos e histórico Git.  
Não substitui o Changelog técnico.

**Fontes de verdade utilizadas:** `AI_CONTEXT.md`, `docs/brand/`, `docs/product/`, `DESIGN_GUIDE.md`, `UI_KIT.md`, `README.md`, `index.html`, CSS do projeto, assets em `assets/brand/` e `img/`, e o histórico Git disponível.

**Nota metodológica:** quando a data exata de uma etapa não pôde ser comprovada além do mês/versão documental ou do timestamp de arquivo, a narrativa foi organizada por fase e sequência lógica — sem datas fictícias.

---

## Visão geral

A Missão OAB é uma EdTech voltada à preparação para o Exame da OAB. A marca representa direção, evolução e aprovação.

A metáfora central do produto, registrada em `AI_CONTEXT.md`, é:

> Missão OAB é o mapa.  
> Método CAPA é o caminho percorrido sobre esse mapa.

O projeto evoluiu da definição estratégica (produto e marca) para a construção da landing page, do Design System e dos assets oficiais, até a formalização de governança para agentes de IA e versionamento Git.

No estado atual documentado:

- o bootloader oficial da documentação é `PROJECT_INDEX.md` (orquestrador de contexto);
- a documentação de produto e marca encontra-se em `docs/`;
- a landing page vive em `index.html` com base CSS em `css/`;
- o Design System está descrito em `DESIGN_GUIDE.md` e `UI_KIT.md`;
- o símbolo oficial disponível está em `assets/brand/source/master-symbol.svg`;
- o repositório Git foi inicializado com o commit `ef37433` em **2026-07-20**.

---

## Fases do projeto

### Fase 1 — Fundação da ideia

**O que foi construído**

- Definição da Missão OAB como parceiro de estudo e sistema de preparação para o Exame de Ordem.
- Formulação do problema central: preparação sem método claro, feedback e apoio consistente.
- Registro da visão de transformar esforço disperso em progresso organizado.

**Por que foi construído**

Para estabelecer a razão de existir do produto antes de features, campanhas ou escala tecnológica — princípio reiterado no Brand Book e no PRD.

**Decisões importantes**

- Preferir caminho a atalho; confiança antes de escala.
- Não prometer aprovação; oferecer preparação organizada.
- Tratar o aluno como adulto e a jornada como processo sério.

**Arquivos e sistemas nascidos nesta etapa**

- Conceitos fundacionais consolidados em `docs/brand/BRAND_BOOK.md` (versão 1.0, Julho/2026).
- Missão, problema e visão detalhados em `docs/product/PRD.md` (versão 1.0, Julho/2026).

---

### Fase 2 — Estratégia de produto

**O que foi construído**

- Documentação completa de requisitos e visão de produto.
- Roadmap por versões (V1 Landing + WhatsApp → evolução futura da plataforma).
- Mapeamento da jornada do aluno.
- Modelo de negócio e princípios de gamificação.

**Por que foi construído**

Para alinhar aquisição, retenção, ética de monetização e evolução técnica sob critérios mensuráveis e priorização clara.

**Decisões importantes**

- MVP (V1) centrado em landing de conversão + comunidade (WhatsApp), sem plataforma logada.
- Filtro de produto: captar, estudar melhor ou reter — fora disso, não entra no roadmap.
- Gamificação futura orientada a disciplina, não a ansiedade.

**Arquivos e sistemas nascidos nesta etapa**

- `docs/product/PRD.md`
- `docs/product/ROADMAP.md`
- `docs/product/USER_JOURNEY.md`
- `docs/product/BUSINESS_MODEL.md`
- `docs/product/GAMIFICATION.md`

Todos documentados como versão 1.0, com atualização registrada em Julho de 2026.

---

### Fase 3 — Identidade e posicionamento

**O que foi construído**

- Brand Book institucional (constituição da marca).
- Brand Voice e guia de copywriting.
- Método CAPA como metodologia oficial: Capacitação, Aprendizado, Prática e Aprovação.
- Slogan oficial: “Estude com direção. Evolua com propósito.”
- Arquitetura de marca: Missão OAB → Método CAPA → IA CAPA → Community → Academy → Aplicativo.
- Conceito do logo: letra M formando caminho para cima.
- Conceito do símbolo CAPA: livro aberto com caminho central.

**Por que foi construído**

Para garantir coerência verbal e visual entre produto, comunicação, design e futuras expansões — e para congelar princípios éticos de comunicação (sem medo, sem garantia de aprovação, sem hype).

**Decisões importantes**

- Tom semi-formal, confiança calma, linguagem adulta.
- CAPA como linguagem pedagógica do produto, não como decoração.
- Metáfora mapa/caminho formalizada para orientar produto e agentes de IA.

**Arquivos e sistemas nascidos nesta etapa**

- `docs/brand/BRAND_BOOK.md`
- `docs/brand/BRAND_VOICE.md`
- `docs/brand/COPYWRITING.md`
- Metáfora central registrada em `AI_CONTEXT.md`

---

### Fase 4 — Landing page

**O que foi construído**

- Estrutura HTML semântica da landing (`index.html`).
- Arquitetura CSS: `reset.css`, `variables.css`, `style.css`, `responsive.css`, `animations.css`.
- Seções evidenciadas no HTML atual: Header, Hero, Nosso Compromisso, Barra de Compromisso, Benefícios, Método CAPA, Como Funciona, Nossa Visão, FAQ, CTA Final e Footer.
- Refinamentos documentados em comentários HTML (ex.: Sprint 5.1.1) e no CSS de identidade visual inicial (ex.: Sprint 5.2A em `style.css`).
- Copy da landing alinhada a materiais de apoio especializados, Método CAPA e slogan oficial no footer.

**Por que foi construído**

Para validar aquisição (funil landing → comunidade), comunicar posicionamento e preparar a base visual do Design System na interface pública.

**Decisões importantes**

- HTML semântico, acessibilidade e SEO como prioridades estruturais.
- CTA preparado para link oficial de WhatsApp (placeholder documentado até URL definitiva).
- Links legais do footer preservados, porém comentados até existência das páginas.
- Remoção de referências a “cronogramas” na copy da landing, substituídas por “materiais de apoio especializados” (estado atual do `index.html`).

**Arquivos e sistemas nascidos nesta etapa**

- `index.html`
- `css/reset.css`, `css/variables.css`, `css/style.css`, `css/responsive.css`, `css/animations.css`
- `js/app.js` (arquivo presente; conteúdo vazio no estado atual)
- Placeholders de mídia: `img/hero/hero-placeholder.svg`, `img/logo/logo-missao-oab.svg`

---

### Fase 5 — Design System

**O que foi construído**

- Design Guide oficial (tokens, tipografia, grid, botões, acessibilidade, performance, padrão BEM).
- UI Kit oficial (especificações de componentes, estados, checklist de validação).
- Tokens CSS em `css/variables.css` alinhados à paleta e à escala documentadas.

**Por que foi construído**

Para tornar a identidade visual reutilizável e escalável além da landing — base para a plataforma futura.

**Decisões importantes**

- Paleta oficial centrada em azul `#0F2D52` e dourado `#D4AF37`.
- Tipografia Poppins.
- Iconografia Lucide; emojis proibidos como componentes de interface.
- Filosofia visual: organização, calma, confiança, clareza, elegância e profissionalismo.

**Arquivos e sistemas nascidos nesta etapa**

- `DESIGN_GUIDE.md` (versão 1.0, Julho/2026)
- `UI_KIT.md` (versão 1.0, Julho/2026; complemento do Design Guide)
- `css/variables.css` (tokens de design)

---

### Fase 6 — Brand Assets

**O que foi construído**

- Vetor mestre do símbolo oficial disponível em `assets/brand/source/master-symbol.svg`.
- Organização da pasta `assets/brand/source/` como local oficial de source da marca, conforme `AI_CONTEXT.md`.
- Referências raster em `assets/brand/reference/` (arquivos PNG de apoio à identidade).
- Conceito visual do símbolo (M em caminho ascendente) documentado no Brand Book.
- No commit inicial do Git também constam artefatos de marca sob pasta “Missão OAB Design System” e `Logo.png` (estado histórico do repositório).
- Consolidação da estrutura oficial `assets/brand/` com pastas `source/`, `exports/`, `favicon/`, `social/`, `og/`, `app/` e `reference/`.
- Distinção formal entre SVGs mestres finais e arquivos editáveis `*_INK.svg`.
- Criação de `assets/brand/README.md` (Source of Truth, nomenclatura e regras de uso).
- Adoção do logo horizontal oficial (`master-logo-horizontal.svg`) no header e footer da landing.
- Catálogo completo de mestres em `source/`: symbol, typography, logo-horizontal, logo-vertical e variantes black/white.

**Por que foi construído**

Para impedir redesenho improvisado da marca e garantir uma fonte oficial única para implementação na landing e em canais futuros.

**Decisões importantes**

- Nunca redesenhar símbolo/logo; nunca alterar proporções; nunca recriar marca em HTML/CSS.
- Preferir SVG oficial a PNG/screenshot quando o SVG existir.
- SVGs sem sufixo `_INK` são finais; apenas `*_INK.svg` podem ser editados no Inkscape.
- Landing e novos materiais devem consumir exclusivamente `assets/brand/source/`.
- Pasta `reference/` preserva PNGs históricos e não é Source of Truth.

**Arquivos e sistemas nascidos nesta etapa**

- `assets/brand/source/` (mestres finais e `*_INK`)
- `assets/brand/exports/`, `favicon/`, `social/`, `og/`, `app/`
- `assets/brand/reference/` (referências PNG)
- `assets/brand/README.md`
- Regras de uso da marca em `AI_CONTEXT.md` (incluindo seção Brand Assets Oficiais) e no Brand Book

---

### Fase 7 — Governança, IA e versionamento

**O que foi construído**

- `AI_CONTEXT.md` como documento prioritário para agentes de IA (visão, docs obrigatórios, regras de marca e uso na landing).
- Inicialização do repositório Git (`ef37433`, 2026-07-20, mensagem: `chore: initialize Missao OAB project`).
- `CHANGELOG.md` inicial (versão v0.1.0) registrando estrutura inicial, AI Context, Master Symbol e documentação.
- Sistema permanente de histórico institucional (`HISTORY.md`) e governança de changelog.
- `PROJECT_RULES.md` como contrato operacional permanente do repositório (fluxo de trabalho, identidade visual, documentação, changelog/history e commits).
- Inclusão de `PROJECT_RULES.md` como leitura obrigatória na seção Governança do `AI_CONTEXT.md`.
- `PROJECT_INDEX.md` como índice mestre e, em seguida, como **bootloader / orquestrador de contexto** oficial (Decision Tree, Boot Sequence e carregamento inteligente).
- Alinhamento de `AI_CONTEXT.md` e `PROJECT_RULES.md` à regra permanente: iniciar pelo Index, classificar a tarefa e carregar apenas o subconjunto necessário de documentos.

**Por que foi construído**

Para preservar memória institucional, reduzir decisões inventadas por agentes, exigir aprovação humana antes de registrar mudanças relevantes e padronizar o onboarding de qualquer IA com menor consumo de contexto/tokens.

**Decisões importantes**

- Documentação de marca/produto deve ser consultada antes de mudanças relevantes — conforme o ramo da Decision Tree, não por leitura integral padrão.
- Identidade visual oficial deve ser consumida dos SVGs em `assets/brand/source/`.
- Changelog e History só podem ser gravados após aprovação explícita do responsável (regra formalizada no AI Context).
- `PROJECT_RULES.md` prevalece sobre decisões momentâneas até alteração oficial.
- Commits só ocorrem após validação, proposta de Conventional Commit e aprovação explícita.
- `PROJECT_INDEX.md` é a porta de entrada oficial; nunca deve duplicar conhecimento — apenas roteia.

**Arquivos e sistemas nascidos nesta etapa**

- `AI_CONTEXT.md`
- Repositório Git (branch `main`)
- `CHANGELOG.md`
- `HISTORY.md`
- `PROJECT_RULES.md`
- `PROJECT_INDEX.md`

---

## Linha do tempo comprovável (resumo)

| Evidência | O que comprova |
|---|---|
| Documentos em `docs/` e Design System com “Julho de 2026” / v1.0 | Fundação documental de produto, marca e design no ciclo de Julho/2026 |
| Comentários de sprint em `index.html` e `css/style.css` | Evolução iterativa da landing e da base visual |
| Assets em `assets/brand/` | Existência do símbolo mestre e referências de marca |
| Commit Git `ef37433` (2026-07-20) | Inicialização formal do repositório com o conjunto então versionado |
| `AI_CONTEXT.md` | Metáfora mapa/caminho e regras de governança para IA |
| `PROJECT_INDEX.md` (v1.0.0, 2026-07-20) | Bootloader oficial e orquestração de contexto por Decision Tree |

---

## Controles

| Campo | Valor |
|---|---|
| Documento | HISTORY.md |
| Escopo | Marcos e fases do projeto Missão OAB |
| Critério de inclusão | Apenas fatos verificáveis em arquivos ou Git |
| Relação com Changelog | History = marcos; Changelog = mudanças técnicas relevantes versionadas |
