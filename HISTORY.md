# HISTORY — Diário do Ecossistema Missão

## Finalidade

Este documento é o **diário cronológico** de produto e engenharia da Missão OAB e do Ecossistema Missão.

Ele registra **por que** as mudanças aconteceram, **o que foi decidido**, **qual foi o impacto** e **quais foram os próximos passos**.

Não substitui o `CHANGELOG.md` (registro técnico e versionável das alterações no repositório).

Não substitui documentos de origem (`PRD`, Brand Book, MOBS, Design Guide, etc.).

---

## Padrão de entrada

Cada marco relevante usa:

```
## YYYY-MM-DD HH:mm — Título do marco

**Fuso horário:** America/Sao_Paulo
**Versão ou marco:** quando aplicável

### Contexto
### Objetivo
### Decisões
### Impacto
### Áreas e documentos envolvidos
### Próximos passos
```

### Regras

- Ordem **cronológica crescente** (mais antigo → mais recente).
- Fuso oficial: **America/Sao_Paulo**.
- **Não inventar horários.** Se a hora não for comprovável: indicar `Horário: não registrado` ou manter só a data/mês conhecido.
- Fontes de verdade: Git, arquivos versionados e documentação oficial.

---

## Visão geral (estado atual)

A Missão OAB é uma EdTech para o Exame da OAB. Metáfora central:

> Missão OAB é o mapa. Método CAPA é o caminho percorrido sobre esse mapa.

Pilares atuais: `PROJECT_INDEX` (bootloader), `AI_CONTEXT` / `PROJECT_RULES` (governança), docs de produto/marca, landing, Design System, Brand Assets em `assets/brand/`, arquitetura documental **MOBS 0.1.1** em `project/automation/`.

---

## Diário cronológico

## 2026-07 — Fundação da ideia

**Horário:** não registrado  
**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** Fase 1 · docs v1.0 (Julho/2026)

### Contexto

O projeto precisava de uma razão de existir clara antes de features, campanhas ou escala tecnológica.

### Objetivo

Definir a Missão OAB como parceiro de estudo e sistema de preparação para o Exame de Ordem; formular o problema da preparação sem método, feedback e apoio consistentes.

### Decisões

- Preferir caminho a atalho; confiança antes de escala.
- Não prometer aprovação; oferecer preparação organizada.
- Tratar o aluno como adulto e a jornada como processo sério.

### Impacto

Base ética e de produto consolidada no Brand Book e no PRD.

### Áreas e documentos envolvidos

- `docs/brand/BRAND_BOOK.md`
- `docs/product/PRD.md`

### Próximos passos

Documentar estratégia de produto (roadmap, jornada, negócio, gamificação).

---

## 2026-07 — Estratégia de produto

**Horário:** não registrado  
**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** Fase 2 · docs product v1.0 (Julho/2026)

### Contexto

Com a fundação definida, faltava alinhar aquisição, retenção, monetização ética e evolução técnica.

### Objetivo

Completar a documentação de requisitos, roadmap, jornada do aluno, modelo de negócio e princípios de gamificação.

### Decisões

- MVP (V1): landing de conversão + comunidade WhatsApp, sem plataforma logada.
- Filtro de produto: captar, estudar melhor ou reter — fora disso, não entra no roadmap.
- Gamificação futura orientada a disciplina, não a ansiedade.

### Impacto

Priorização mensurável e critérios claros para o que entra ou não no produto.

### Áreas e documentos envolvidos

- `docs/product/PRD.md`
- `docs/product/ROADMAP.md`
- `docs/product/USER_JOURNEY.md`
- `docs/product/BUSINESS_MODEL.md`
- `docs/product/GAMIFICATION.md`

### Próximos passos

Formalizar identidade, voz e arquitetura de marca.

---

## 2026-07 — Identidade e posicionamento

**Horário:** não registrado  
**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** Fase 3 · Brand docs v1.0 (Julho/2026)

### Contexto

Produto e comunicação precisavam de coerência verbal/visual e princípios éticos congelados.

### Objetivo

Publicar Brand Book, Brand Voice, Copywriting; formalizar Método CAPA e o slogan oficial.

### Decisões

- Tom semi-formal, confiança calma, linguagem adulta.
- CAPA como linguagem pedagógica (não decoração).
- Slogan: “Estude com direção. Evolua com propósito.”
- Metáfora mapa/caminho para produto e agentes de IA.
- Arquitetura de marca: Missão OAB → Método CAPA → IA CAPA → Community → Academy → Aplicativo.

### Impacto

Constituição de marca utilizável por design, copy, landing e futuras expansões.

### Áreas e documentos envolvidos

- `docs/brand/BRAND_BOOK.md`
- `docs/brand/BRAND_VOICE.md`
- `docs/brand/COPYWRITING.md`
- Metáfora em `AI_CONTEXT.md`

### Próximos passos

Construir a landing pública alinhada à marca.

---

## 2026-07 — Landing page

**Horário:** não registrado  
**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** Fase 4 · sprints HTML/CSS documentados no código

### Contexto

Era necessário validar aquisição (landing → comunidade) e expor o posicionamento.

### Objetivo

Entregar HTML semântico, arquitetura CSS e seções da landing com copy alinhada à marca.

### Decisões

- Priorizar acessibilidade e SEO estrutural.
- CTA WhatsApp com placeholder até URL oficial.
- Links legais do footer comentados até existirem páginas.
- Substituir “cronogramas” por “materiais de apoio especializados” na copy.

### Impacto

Superfície pública do MVP V1 e base visual para o Design System.

### Áreas e documentos envolvidos

- `index.html`
- `css/reset.css`, `variables.css`, `style.css`, `responsive.css`, `animations.css`
- `js/app.js`
- `img/hero/`, `img/logo/`

### Próximos passos

Formalizar Design System documental e tokens.

---

## 2026-07 — Design System

**Horário:** não registrado  
**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** Fase 5 · DESIGN_GUIDE / UI_KIT v1.0 (Julho/2026)

### Contexto

A identidade na landing precisava ser reutilizável e escalável além de uma única página.

### Objetivo

Publicar Design Guide e UI Kit; alinhar tokens CSS à paleta e tipografia oficiais.

### Decisões

- Paleta centrada em azul `#0F2D52` e dourado `#D4AF37`.
- Tipografia Poppins.
- Iconografia Lucide; emojis proibidos como componentes de UI.
- Filosofia: organização, calma, confiança, clareza, elegância, profissionalismo.

### Impacto

Base de interface para a landing e para a plataforma futura.

### Áreas e documentos envolvidos

- `DESIGN_GUIDE.md`
- `UI_KIT.md`
- `css/variables.css`

### Próximos passos

Organizar Brand Assets oficiais como Source of Truth.

---

## 2026-07 — Brand Assets e Source of Truth

**Horário:** não registrado  
**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** Fase 6 (evolução até consolidação no Git em 2026-07-20)

### Contexto

Havia risco de redesenho improvisado e de uso de PNGs/legados como se fossem oficiais.

### Objetivo

Estabelecer `assets/brand/` com mestres SVG, variantes, `*_INK`, `reference/` e README operacional.

### Decisões

- Nunca redesenhar; nunca alterar proporções; nunca recriar marca em HTML/CSS.
- Preferir SVG oficial a PNG.
- Só `*_INK.svg` editáveis no Inkscape; demais mestres finais.
- `reference/` não é Source of Truth.
- Landing deve consumir `assets/brand/source/`.

### Impacto

Fonte única de identidade para implementação e canais futuros.

### Áreas e documentos envolvidos

- `assets/brand/source/`, `exports/`, `favicon/`, `social/`, `og/`, `app/`, `reference/`
- `assets/brand/README.md`
- Regras em `AI_CONTEXT.md` e Brand Book

### Próximos passos

Fechar migração das cópias legadas na raiz e consumir o logo oficial na landing (concluído em commit posterior no mesmo dia).

---

## 2026-07-20 18:56 — Inicialização do repositório Git

**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** `[0.1.0]` · commit `ef37433`

### Contexto

O trabalho já existia em arquivos; faltava versionamento formal.

### Objetivo

Inicializar o repositório Git na branch `main` com o conjunto então versionado.

### Decisões

- Commit inicial: `chore: initialize Missao OAB project`.
- Incluir landing, docs, Design System, AI Context e estado inicial de brand assets (incluindo artefatos legados então presentes).

### Impacto

Linha de base comprovável para evolução e changelog.

### Áreas e documentos envolvidos

- Repositório completo no estado `ef37433`
- `CHANGELOG` inicial (v0.1.0), depois reorganizado

### Próximos passos

Formalizar governança operacional, histórico institucional e bootloader de contexto.

---

## 2026-07-20 — Governança operacional e bootloader de contexto

**Horário:** não registrado (antes dos commits noturnos de docs/assets)  
**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** Fase 7 · `PROJECT_INDEX` / `PROJECT_RULES` / `HISTORY` / `CHANGELOG`

### Contexto

Agentes de IA e colaboradores precisavam de contrato operacional e porta de entrada única, sem carregar toda a documentação por padrão.

### Objetivo

Estabelecer `AI_CONTEXT`, `PROJECT_RULES`, `HISTORY`, `CHANGELOG` (Keep a Changelog) e evoluir `PROJECT_INDEX` a bootloader com Decision Tree e carregamento seletivo.

### Decisões

- Consultar docs oficiais antes de mudanças relevantes (por ramo, não leitura integral).
- HISTORY/CHANGELOG só após aprovação explícita.
- Commits só após proposta Conventional Commit e aprovação.
- `PROJECT_INDEX` não duplica conhecimento — apenas roteia.

### Impacto

Onboarding previsível, menor consumo de tokens e memória institucional rastreável.

### Áreas e documentos envolvidos

- `AI_CONTEXT.md`
- `PROJECT_RULES.md`
- `PROJECT_INDEX.md`
- `HISTORY.md`
- `CHANGELOG.md`

### Próximos passos

Commit do bootloader (`cc3301d`) e fechamento da árvore de Brand Assets.

---

## 2026-07-20 22:29 — Commit do PROJECT_INDEX como bootloader

**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** commit `cc3301d`

### Contexto

A documentação de governança do Index/Rules/HISTORY/CHANGELOG estava pronta para versionar.

### Objetivo

Registrar oficialmente o bootloader e as regras de carregamento seletivo.

### Decisões

- Mensagem: `docs: add PROJECT_INDEX as context bootloader`.

### Impacto

Governança de contexto versionada na `main`.

### Áreas e documentos envolvidos

- `PROJECT_INDEX.md`, `AI_CONTEXT.md`, `PROJECT_RULES.md`, `HISTORY.md`, `CHANGELOG.md`

### Próximos passos

Completar Brand Assets e wiring da landing.

---

## 2026-07-20 22:32 — Fechamento da árvore Brand Assets e consumo na landing

**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** commit `0ca07fc`

### Contexto

Cópias legadas na raiz coexistiam com a estrutura oficial em `assets/brand/`.

### Objetivo

Completar mestres em `source/`, preservar históricos em `reference/`, remover legados da raiz e apontar header/footer para `master-logo-horizontal.svg`.

### Decisões

- Não sobrescrever mestres oficiais com arquivos antigos.
- Preservar `Logo.png` como `assets/brand/reference/1Logo.png`.
- Absorver SVGs da pasta Design System nas variantes oficiais.

### Impacto

Source of Truth única; landing alinhada aos assets oficiais.

### Áreas e documentos envolvidos

- `assets/brand/**`
- `index.html`
- `DESIGN_GUIDE.md`

### Próximos passos

Registrar a migração em HISTORY/CHANGELOG (`7890ca4`).

---

## 2026-07-20 22:34 — Registro documental da migração de Brand Assets

**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** commit `7890ca4`

### Contexto

A migração física/visual já estava commitada; faltava o registro institucional/técnico.

### Objetivo

Atualizar HISTORY (Fase 6) e CHANGELOG `[Unreleased]` com a migração.

### Decisões

- Mensagem: `docs: record brand assets migration in HISTORY and CHANGELOG`.

### Impacto

Rastreabilidade da consolidação de marca no diário e no changelog.

### Áreas e documentos envolvidos

- `HISTORY.md`, `CHANGELOG.md`

### Próximos passos

Arquitetar automações do Ecossistema Missão (MOBS) — apenas documentação.

---

## 2026-07-20 — Necessidade de um sistema de automações do ecossistema

**Horário:** não registrado  
**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** origem da fase MOBS

### Contexto

Processos repetitivos (assets, docs, validação, release) tenderiam a ser reinventados por produto se cada marca tivesse scripts próprios.

### Objetivo

Reprojetar a arquitetura de automações pensando no **Ecossistema Missão**, não só na Missão OAB.

### Decisões

- Documentação antes de implementação.
- Configuração acima de código; zero duplicação; modularidade.

### Impacto

Início da trilha MOBS como engenharia de plataforma.

### Áreas e documentos envolvidos

- Governança existente (`PROJECT_INDEX`, `AI_CONTEXT`, `PROJECT_RULES`)
- Futuro `project/automation/`

### Próximos passos

Nomear e definir a plataforma de engenharia.

---

## 2026-07-20 — Criação e definição do nome MOBS

**Horário:** não registrado  
**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** MOBS (Missão Build Operating System)

### Contexto

Era preciso um nome e um papel claros para a plataforma de engenharia.

### Objetivo

Definir o MOBS como Plataforma Oficial de Engenharia do Ecossistema Missão.

### Decisões

- MOBS não é script isolado nem build de um único produto.
- Missão OAB é o primeiro produto, não o limite.

### Impacto

Vocabulário institucional único para engenharia do ecossistema.

### Áreas e documentos envolvidos

- `project/automation/MOBS.md` (criado na sequência)

### Próximos passos

Expandir a visão além de “Build System”.

---

## 2026-07-20 — Do Build System à plataforma do Ecossistema Missão

**Horário:** não registrado  
**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** MOBS / `BUILD_SYSTEM.md`

### Contexto

“Build System” sozinho não cobria multi-produto, multi-marca e orquestração.

### Objetivo

Posicionar o MOBS como plataforma; `BUILD_SYSTEM.md` como mapa de módulos do ecossistema — não build exclusivo da Missão OAB.

### Decisões

- Um motor para muitos projetos.
- Engines/módulos genéricos, nunca “módulo da Missão OAB”.

### Impacto

Arquitetura preparada para CAPA, MOBS, MOAI, ENEM, Medicina, Concursos e futuros.

### Áreas e documentos envolvidos

- `MOBS.md`, `BUILD_SYSTEM.md`

### Próximos passos

Modelar projetos e marcas.

---

## 2026-07-20 — Arquitetura multi-projeto e multi-marca

**Horário:** não registrado  
**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** `PROJECT_ENGINE.md` · `BRAND_ENGINE.md`

### Contexto

O motor não deve hardcodar “Missão OAB”; deve conhecer **projetos** e **marcas**.

### Objetivo

Definir modelos conceituais `projects/` e `assets/brands/` e a relação Projeto × Marca.

### Decisões

Suportar: marca independente; projeto independente; projeto associado a marca; N projetos / 1 marca; projeto com marca própria.  
Schemas oficiais **não** nesta fase.

### Impacto

Contrato conceitual para herança de infraestrutura via config.

### Áreas e documentos envolvidos

- `PROJECT_ENGINE.md`, `BRAND_ENGINE.md`

### Próximos passos

Materializar a documentação em `project/automation/` e integrar à governança.

---

## 2026-07-20 — Criação da documentação em project/automation/

**Horário:** não registrado  
**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** pacote documental MOBS inicial

### Contexto

A arquitetura precisava de fonte oficial versionável, sem código.

### Objetivo

Criar `MOBS`, `BUILD_SYSTEM`, `BRAND_ENGINE`, `PROJECT_ENGINE`, `AUTOMATION_ROADMAP`, `AUTOMATION_RULES` e `future/`.

### Decisões

- Apenas arquitetura; sem scripts.
- Integrar ramos Engenharia em `PROJECT_INDEX`, regra MOBS em `AI_CONTEXT`, § Engenharia do Ecossistema em `PROJECT_RULES`.

### Impacto

Pilar de engenharia documental ao lado de Index/Rules/Context.

### Áreas e documentos envolvidos

- `project/automation/**`
- `PROJECT_INDEX.md`, `AI_CONTEXT.md`, `PROJECT_RULES.md`

### Próximos passos

Refinar taxonomia e fronteiras do Core.

---

## 2026-07-20 — Taxonomia Core, Engine, Generator e Validator

**Horário:** não registrado  
**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** MOBS arquitetura 0.1.1 (ajuste)

### Contexto

Nomes genéricos de “Engine” misturavam orquestração, geração e validação.

### Objetivo

Diferenciar formalmente Core/Orchestrator, Engine, Generator e Validator.

### Decisões

- Core orquestra; não gera assets nem altera docs; sem regras de marca/projeto.
- Generators produzem derivados; Validators só verificam; Engines resolvem contexto/domínio.

### Impacto

Vocabulário estável para o roadmap e para implementação futura.

### Áreas e documentos envolvidos

- `BUILD_SYSTEM.md`, `MOBS.md`, `AUTOMATION_ROADMAP.md`, `AUTOMATION_RULES.md`

### Próximos passos

Fixar o Project Engine como contexto primeiro.

---

## 2026-07-20 — Project Engine como resolvedor de contexto

**Horário:** não registrado  
**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** MOBS arquitetura 0.1.1 (ajuste)

### Contexto

Módulos de ação não devem descobrir o projeto por hardcode.

### Objetivo

Posicionar o Project Engine como camada de contexto anterior aos demais módulos.

### Decisões

Fluxo: `project.json` → Project Engine → Brand / Docs / Asset Generator / Validation / Release.  
MOBS Core seleciona, ordena e consolida logs.

### Impacto

Orquestração previsível e genérica.

### Áreas e documentos envolvidos

- `PROJECT_ENGINE.md`, `BUILD_SYSTEM.md`, `BRAND_ENGINE.md`, `PROJECT_INDEX.md`

### Próximos passos

Aprovação oficial da arquitetura 0.1.1 e fechamento documental.

---

## 2026-07-20 — Aprovação oficial da arquitetura documental MOBS 0.1.1

**Horário:** não registrado  
**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** MOBS **0.1.1** (aprovada)

### Contexto

Ajustes de taxonomia, Core, Project Engine e Projeto × Marca estavam concluídos na documentação.

### Objetivo

Congelar a arquitetura documental aprovada.

### Decisões

- Aprovar 0.1.1 como oficial.
- Manter explícito: sem scripts, schemas, código, migração de assets ou módulos executáveis.

### Impacto

Baseline arquitetural para qualquer implementação futura (roadmap v1+).

### Áreas e documentos envolvidos

- Pacote `project/automation/` v0.1.1
- Integrações de governança

### Próximos passos

Fechamento em HISTORY/CHANGELOG e, em seguida, evolução do padrão do próprio HISTORY.

---

## 2026-07-20 — Fechamento documental da fase MOBS 0.1.1

**Horário:** não registrado  
**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** MOBS 0.1.1 · registro em HISTORY/CHANGELOG (pré-padrão cronológico)

### Contexto

A arquitetura aprovada precisava constar no diário institucional e no changelog técnico.

### Objetivo

Registrar a Fase 8 / seção MOBS 0.1.1 e validar consistência documental.

### Decisões

- Não commitar ainda até evolução do padrão HISTORY/CHANGELOG.
- Não criar tag/release global nova só por causa do MOBS documental.

### Impacto

Rastreabilidade da aprovação 0.1.1 nos dois instrumentos (ainda sob formato antigo do HISTORY, depois reorganizado).

### Áreas e documentos envolvidos

- `HISTORY.md`, `CHANGELOG.md`
- Ajustes menores de status em `MOBS.md`, roadmap e `future/README.md`

### Próximos passos

Adotar HISTORY cronológico e reforçar a distinção HISTORY × CHANGELOG.

---

## 2026-07-20 23:16 — Adoção do padrão cronológico de HISTORY e separação HISTORY × CHANGELOG

**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** governança documental

### Contexto

O HISTORY em “fases” condensava vários acontecimentos; o CHANGELOG e o HISTORY corriam risco de narrar a mesma história duas vezes.

### Objetivo

Tornar o HISTORY um diário cronológico com data/hora/fuso; manter o CHANGELOG técnico e versionável; formalizar a diferença na governança.

### Decisões

- Separação formal: HISTORY = diário (contexto, decisões, impacto); CHANGELOG = alterações técnicas categorizadas.
- Fuso oficial America/Sao_Paulo.
- Proibição de inventar horários históricos.
- MOBS 0.1.1 permanece em `[Unreleased]` até release global justificada.
- Entradas MOBS separadas na sequência real do mesmo dia, com horário não registrado quando não comprovável.

### Impacto

Maior rastreabilidade das decisões; menos duplicação narrativa; padrão sustentável para o ecossistema.

### Áreas e documentos envolvidos

- `HISTORY.md`
- `CHANGELOG.md`
- `PROJECT_RULES.md` (seção History e Changelog)

### Próximos passos

Aprovar o pacote completo (MOBS 0.1.1 + governança + este padrão) e, somente então, realizar o commit único acordado — sem incluir `menções_honrosas/`.

---

## 2026-07-20 23:51 — Alinhamento documental MOBS Core ↔ Project Engine

**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** MOBS 0.1.1 (clarificação documental; sem mudança de arquitetura funcional)

### Contexto

Diagramas em `MOBS.md`, `BUILD_SYSTEM.md` e `PROJECT_INDEX.md` sugeriam, em trechos, que o Project Engine operava antes ou fora do MOBS Core, gerando ambiguidade operacional.

### Objetivo

Eliminar inconsistências documentais e fixar o fluxo oficial: Core orquestra; Project Engine é a primeira Engine de contexto acionada pelo Core; após o contexto, o Core continua a orquestração dos demais módulos.

### Decisões

- Fluxo operacional consolidado: `MOBS Core` → `Project Engine` → `MOBS Core` → demais módulos.
- Taxonomia e fronteiras do Core permanecem as da arquitetura 0.1.1 aprovada.
- Sem implementação de código, schemas, scripts ou engines executáveis — apenas clareza documental.
- Ordem de leitura MOBS uniformizada; descrição do HISTORY no Index alinhada ao diário cronológico.
- Autorização de commit imediato válida **somente** para esta execução; `PROJECT_RULES` continua exigindo aprovação prévia em execuções futuras.

### Impacto

Um único modelo mental para IAs e engenheiros: Core sempre no centro da orquestração; Project Engine nunca “fora” do Core.

### Áreas e documentos envolvidos

- `project/automation/BUILD_SYSTEM.md`
- `project/automation/MOBS.md`
- `project/automation/PROJECT_ENGINE.md`
- `project/automation/BRAND_ENGINE.md`
- `project/automation/AUTOMATION_RULES.md`
- `PROJECT_INDEX.md`
- `AI_CONTEXT.md`
- `HISTORY.md`
- `CHANGELOG.md`

### Próximos passos

Manter a documentação alinhada em qualquer evolução futura do roadmap MOBS; implementação continua sujeita a `AUTOMATION_RULES` e aprovação.

---

## 2026-07-21 00:22 — Criação do WHY_MOBS.md (visão estratégica do MOBS)

**Fuso horário:** America/Sao_Paulo
**Versão ou marco:** asset institucional · arquitetura MOBS 0.1.1 (documental)

### Contexto

A arquitetura técnica do MOBS estava documentada, mas faltava um manifesto claro do **porquê**: valor empresarial, princípios não negociáveis, bússola de decisão e posicionamento institucional/comercial.

### Objetivo

Criar `WHY_MOBS.md` na raiz como asset estratégico de longo prazo — visão de produto, manifesto de engenharia e material compreensível por colaboradores, clientes, parceiros e investidores — sem apresentar implementação inexistente.

### Decisões

- Posicionar o MOBS como **plataforma de engenharia do Ecossistema Missão**.
- Tratar **MOBS como marca própria**; *Mission Build Operating System* como origem conceitual, **não** como acrônimo literal perfeito (MBOS ≠ MOBS).
- **Não** renomear o produto nem criar nova expansão oficial da “sigla” neste momento.
- Separar com precisão o que é documental **hoje**, o que está **em construção** e o que é **visão**.
- Integrar `WHY_MOBS.md` como primeira leitura conceitual da trilha MOBS no `PROJECT_INDEX`, com referências em `MOBS.md` e `AI_CONTEXT.md`.
- Não afirmar que o MOBS é produto comercial pronto ou runtime completo.

### Impacto

Onboarding, decisões arquiteturais, posicionamento e conversas externas passam a ter um documento único de propósito; a documentação técnica permanece responsável pelo *como*.

### Áreas e documentos envolvidos

- `WHY_MOBS.md` (criado)
- `PROJECT_INDEX.md`
- `project/automation/MOBS.md`
- `AI_CONTEXT.md`
- `HISTORY.md`
- `CHANGELOG.md`

### Próximos passos

Aprovar e versionar; manter o manifesto alinhado à evolução do roadmap sem misturar visão com implementação.

---

## 2026-07-21 00:50 — Início do MOBS 0.2: DOMAIN_MODEL.md

**Fuso horário:** America/Sao_Paulo
**Versão ou marco:** MOBS 0.2 — Configuration Contracts (fase documental / modelo de domínio)

### Contexto

Com a arquitetura 0.1.1 e o WHY_MOBS aprovados, a próxima necessidade era formalizar a **linguagem conceitual** da plataforma antes de qualquer contrato serializado ou schema.

### Objetivo

Criar `DOMAIN_MODEL.md` como gramática do domínio MOBS: conceitos, relações oficiais, fronteiras do Core, tese “contrato ≠ arquivo”, e registro honesto de questões em aberto — sem implementar contratos, JSON/YAML ou runtime.

### Decisões

- Inaugurar formalmente o **MOBS 0.2 — Configuration Contracts** pelo modelo de domínio, não por schemas.
- Preservar taxonomia, fluxo Core → Project Engine → Core e relação Projeto × Marca já aprovadas.
- Tratar Capability, Organização e herança/override como conceitos ou hipóteses controladas, não como decisões fechadas.
- Integrar `DOMAIN_MODEL.md` na trilha após WHY_MOBS/MOBS e antes de futuros contratos.
- Não alterar `PROJECT_RULES.md`.

### Impacto

Contratos futuros passam a ter fonte conceitual normativa; reduz risco de schemas orientados a campos sem dono nem significado.

### Áreas e documentos envolvidos

- `DOMAIN_MODEL.md` (criado)
- `PROJECT_INDEX.md`
- `project/automation/MOBS.md`
- `project/automation/AUTOMATION_ROADMAP.md`
- `AI_CONTEXT.md`
- `HISTORY.md`
- `CHANGELOG.md`

### Próximos passos

Após aprovação: versionar; em seguida, documentos de contratos conceituais (`CONFIGURATION_CONTRACTS.md` etc.), ainda sem schemas, conforme a bússola do domínio.

---

## 2026-07-21 01:19 — CONFIGURATION_CONTRACTS.md (constituição dos contratos)

**Fuso horário:** America/Sao_Paulo
**Versão ou marco:** MOBS 0.2 — Configuration Contracts (marco documental 2)

### Contexto

Com o modelo de domínio aprovado, faltava a constituição que define como um conceito se torna um contrato formal — sem ainda especificar Project/Brand contracts nem schemas.

### Objetivo

Criar `CONFIGURATION_CONTRACTS.md` como regras gerais de existência, ownership, validação, consumo, evolução, depreciação e extensões de contratos de configuração.

### Decisões

- Subordinar todo contrato futuro a este documento e ao `DOMAIN_MODEL.md`.
- Preservar hierarquia Domínio → Contratos → Schemas → Serializações → Contextos → Execução.
- Não definir campos, serialização, paths nem contratos concretos.
- Integrar na trilha MOBS 0.2 imediatamente após o domínio.

### Impacto

Próximos documentos (`PROJECT_CONTRACT`, `BRAND_CONTRACT`) nascem sob constituição comum, reduzindo risco de contratos ad hoc.

### Áreas e documentos envolvidos

- `CONFIGURATION_CONTRACTS.md` (criado)
- `DOMAIN_MODEL.md` (links atualizados)
- `PROJECT_INDEX.md`, `project/automation/MOBS.md`, `AI_CONTEXT.md`
- `project/automation/AUTOMATION_ROADMAP.md`
- `HISTORY.md`, `CHANGELOG.md`

### Próximos passos

Aprovar e versionar; em seguida, contratos concretos de Projeto e Marca — ainda sem schemas, salvo aprovação explícita em etapa própria.

---

## 2026-07-21 01:29 — Refinamento arquitetural de CONFIGURATION_CONTRACTS.md

**Fuso horário:** America/Sao_Paulo
**Versão ou marco:** MOBS 0.2 — constituição dos contratos (revisão permanente)

### Contexto

A primeira redação de `CONFIGURATION_CONTRACTS.md` estava alinhada ao domínio; faltava fortalecer filosofia, promessa, distinção Owner/Authority e independência de tecnologia para torná-la referência atemporal.

### Objetivo

Consolidar o documento como constituição permanente dos contratos, sem alterar escopo nem introduzir contratos concretos ou schemas.

### Decisões

- Adicionar Filosofia dos Contratos; princípio “contratos são promessas”; distinção Owner vs Authority; princípio “contrato não descreve implementação”.
- Preservar todas as decisões já aprovadas do domínio e da hierarquia Domínio → Contratos → Schemas → Serializações → Contextos → Execução.
- Não alterar `PROJECT_RULES.md`.

### Impacto

Leitura única e coerente: WHY_MOBS → MOBS → DOMAIN_MODEL → CONFIGURATION_CONTRACTS.

### Áreas e documentos envolvidos

- `CONFIGURATION_CONTRACTS.md`
- Integrações já preparadas em Index, MOBS, AI_CONTEXT, ROADMAP, HISTORY, CHANGELOG, DOMAIN_MODEL

### Próximos passos

Versionar o segundo marco 0.2; em seguida `PROJECT_CONTRACT.md` e `BRAND_CONTRACT.md`.

---

## 2026-07-21 02:59 — PROJECT_CONTRACT.md (primeiro contrato concreto)

**Fuso horário:** America/Sao_Paulo
**Versão ou marco:** MOBS 0.2 — Configuration Contracts (contrato concreto de Projeto)

### Contexto

Com a constituição dos contratos aprovada, faltava especializar as regras gerais para a entidade Projeto — sem schemas, serializações ou alteração dos documentos de autoridade.

### Objetivo

Criar `PROJECT_CONTRACT.md` como primeiro Contrato Concreto do MOBS, derivado de `DOMAIN_MODEL.md` e `CONFIGURATION_CONTRACTS.md`.

### Decisões

- Tratar Projeto exclusivamente como entidade do domínio (não repositório, diretório, Engine, runtime ou serialização).
- Especializar Owner, Authority, produtores, validadores, resolvedor (Project Engine) e consumidores sem duplicar a constituição.
- Preservar independência Projeto ⊥ Marca e associação declarativa opcional.
- Não modificar `DOMAIN_MODEL.md`, `CONFIGURATION_CONTRACTS.md`, `WHY_MOBS.md`, `PROJECT_RULES.md` nem Engines.

### Impacto

A trilha MOBS 0.2 passa a ter o primeiro cidadão concreto da constituição; Brand Contract e schemas permanecem etapas seguintes.

### Áreas e documentos envolvidos

- `PROJECT_CONTRACT.md` (criado)
- `PROJECT_INDEX.md`, `project/automation/MOBS.md`, `AI_CONTEXT.md`
- `project/automation/AUTOMATION_ROADMAP.md`
- `HISTORY.md`, `CHANGELOG.md`

### Próximos passos

Revisão manual e aprovação antes do commit; em seguida `BRAND_CONTRACT.md` — ainda sem schemas.

---

## 2026-07-21 03:07 — Revisão final de PROJECT_CONTRACT.md

**Fuso horário:** America/Sao_Paulo
**Versão ou marco:** MOBS 0.2 — contrato concreto de Projeto (referência oficial)

### Contexto

A primeira redação de `PROJECT_CONTRACT.md` estava sólida; faltava elevá-la ao padrão editorial dos documentos constitucionais antes da aprovação definitiva.

### Objetivo

Revisão arquitetural final mínima: princípios, garantias, independência da serialização, linguagem da Project Engine e encerramento — sem alterar decisões aprovadas.

### Decisões

- Inserir Princípios derivados de WHY_MOBS; reorganizar Garantias em estruturais e operacionais.
- Explicitar que o contrato não depende de detalhes de serialização futura.
- Precisar a linguagem: resolução atribuída à Project Engine; Projeto permanece entidade do domínio.
- Não criar conceitos novos nem mover responsabilidades entre documentos.

### Impacto

`PROJECT_CONTRACT.md` passa a ser a referência oficial do Contrato de Projeto no MOBS 0.2.

### Áreas e documentos envolvidos

- `PROJECT_CONTRACT.md`
- `HISTORY.md`, `CHANGELOG.md` (registro desta revisão)

### Próximos passos

Versionar; em seguida `BRAND_CONTRACT.md`.

---

## 2026-07-21 03:19 — BRAND_CONTRACT.md (segundo contrato concreto)

**Fuso horário:** America/Sao_Paulo
**Versão ou marco:** MOBS 0.2 — Configuration Contracts (contrato concreto de Marca)

### Contexto

Com `PROJECT_CONTRACT.md` aprovado, faltava formalizar a promessa sobre Marca como contrato concreto irmão — sem schemas e sem subordinar Marca a Projeto.

### Objetivo

Criar `BRAND_CONTRACT.md` derivado de `DOMAIN_MODEL.md` e `CONFIGURATION_CONTRACTS.md`, usando `PROJECT_CONTRACT.md` apenas como referência editorial.

### Decisões

- Tratar Marca exclusivamente como identidade oficial (recursos e regras) do domínio — não pasta, tema, Engine ou pacote de assets.
- Preservar Projeto ⊥ Marca; associação declarativa e opcional; Brand Engine como Resolvedor, não Authority.
- Manter herança, variantes, múltiplas marcas por projeto e override como questões abertas do domínio.
- Não modificar documentos protegidos (domínio, constituição, PROJECT_CONTRACT, Engines, RULES).

### Impacto

Os dois primeiros contratos concretos do MOBS 0.2 existem como irmãos sob a mesma constituição; schemas permanecem etapa seguinte.

### Áreas e documentos envolvidos

- `BRAND_CONTRACT.md` (criado)
- `PROJECT_INDEX.md`, `project/automation/MOBS.md`, `AI_CONTEXT.md`
- `project/automation/AUTOMATION_ROADMAP.md`
- `HISTORY.md`, `CHANGELOG.md`

### Próximos passos

Revisão manual e aprovação antes do commit; em seguida Capability/Resolution ou schemas, conforme trilha aprovada.

---

## 2026-07-21 03:32 — Revisão final de BRAND_CONTRACT.md

**Fuso horário:** America/Sao_Paulo
**Versão ou marco:** MOBS 0.2 — contrato concreto de Marca (referência oficial)

### Contexto

`BRAND_CONTRACT.md` estava aprovado arquiteturalmente; faltavam refinamentos editoriais de precisão antes do commit definitivo.

### Objetivo

Ajustes mínimos: coexistência de Marcas no ecossistema; linguagem da Brand Engine; violação de invariantes; Source of Truth vs entidade; sincronizar referência temporal em `PROJECT_CONTRACT.md`.

### Decisões

- Sem alteração arquitetural; sem novos conceitos.
- Atualizar apenas a referência temporal a `BRAND_CONTRACT` em `PROJECT_CONTRACT.md`.

### Impacto

`BRAND_CONTRACT.md` torna-se referência oficial do Contrato de Marca no MOBS 0.2.

### Áreas e documentos envolvidos

- `BRAND_CONTRACT.md`, `PROJECT_CONTRACT.md`
- Integrações já existentes; `HISTORY.md`, `CHANGELOG.md`

### Próximos passos

Versionar; em seguida Capability/Resolution ou schemas.

---

## 2026-07-21 03:43 — ARCHITECTURE_TASK_PROTOCOL.md

**Fuso horário:** America/Sao_Paulo
**Versão ou marco:** MOBS 0.2 — governança de tarefas arquiteturais

### Contexto

Com os dois primeiros contratos concretos aprovados, o processo de planejamento, revisão, refinamento e validação precisava tornar-se documento oficial — sem criar regras de domínio.

### Objetivo

Criar `ARCHITECTURE_TASK_PROTOCOL.md` por extração do método utilizado em `PROJECT_CONTRACT` e `BRAND_CONTRACT`.

### Decisões

- Consolidar hierarquia de autoridade, fluxo de trabalho, regras universais, critérios de aceitação e política de commit.
- Posicionar o protocolo como governança de processo — fora da cadeia de significado do domínio.
- Não modificar contratos, domínio, constituição nem Engines.

### Impacto

Tarefas arquiteturais futuras passam a ter referência única de método; domínio e contratos permanecem intactos.

### Áreas e documentos envolvidos

- `ARCHITECTURE_TASK_PROTOCOL.md` (criado)
- `PROJECT_INDEX.md`, `project/automation/MOBS.md`, `AI_CONTEXT.md`
- `project/automation/AUTOMATION_ROADMAP.md`
- `HISTORY.md`, `CHANGELOG.md`

### Próximos passos

Revisão humana e aprovação antes do commit.

---

## 2026-07-21 03:51 — Revisão final de ARCHITECTURE_TASK_PROTOCOL.md

**Fuso horário:** America/Sao_Paulo
**Versão ou marco:** MOBS 0.2 — governança de tarefas arquiteturais (referência oficial)

### Contexto

O protocolo estava aprovado arquiteturalmente; faltavam dois esclarecimentos editoriais antes do commit definitivo.

### Objetivo

Distinguir ordem de leitura de hierarquia de autoridade; proteger o protocolo contra absorção de responsabilidades de domínio, contratos ou regras operacionais.

### Decisões

- Apenas refinamentos editoriais; sem alteração arquitetural.

### Impacto

`ARCHITECTURE_TASK_PROTOCOL.md` torna-se referência oficial do método de tarefas arquiteturais.

### Áreas e documentos envolvidos

- `ARCHITECTURE_TASK_PROTOCOL.md`
- `HISTORY.md`, `CHANGELOG.md`

### Próximos passos

Versionar; em seguida Capability/Resolution ou schemas.

---

## 2026-07-21 04:07 — DOCUMENT_ARCHITECTURE.md (primeira versão)

**Fuso horário:** America/Sao_Paulo
**Versão ou marco:** MOBS 0.2 — arquitetura física da documentação (proposta)

### Contexto

A trilha MOBS 0.2 atingiu maturidade; faltava autoridade sobre organização física antes de qualquer reorganização do repositório.

### Objetivo

Criar `DOCUMENT_ARCHITECTURE.md` como analogia física ao `DOMAIN_MODEL` lógico — sem mover arquivos.

### Decisões

- Definir grupos documentais derivados do estado atual; regras de descoberta, crescimento, estabilidade e migração incremental.
- Não executar migração nesta etapa.

### Impacto

Base para futuras reorganizações físicas governadas.

### Áreas e documentos envolvidos

- `DOCUMENT_ARCHITECTURE.md` (criado)

### Próximos passos

Consolidação e integração oficial.

---

## 2026-07-21 04:25 — Consolidação de DOCUMENT_ARCHITECTURE.md

**Fuso horário:** America/Sao_Paulo
**Versão ou marco:** MOBS 0.2 — arquitetura física da documentação (autoridade oficial)

### Contexto

A primeira versão de `DOCUMENT_ARCHITECTURE.md` estava aprovada; faltava consolidá-la como parte oficial da arquitetura MOBS antes da Fase 1 de migração.

### Objetivo

Refinamentos editoriais; seções sobre relação entre documentos arquiteturais e princípios de evolução; integração em Index, MOBS e AI_CONTEXT.

### Decisões

- Formalizar dimensões independentes de WHY_MOBS, MOBS, DOMAIN_MODEL, CONFIGURATION_CONTRACTS, ARCHITECTURE_TASK_PROTOCOL e DOCUMENT_ARCHITECTURE.
- Ordem obrigatória de evolução: domínio → arquitetura documental → migração → descoberta → histórico.
- Fase 0 de migração considerada concluída; Fase 1 habilitada.
- Integrações pendentes de `ARCHITECTURE_TASK_PROTOCOL` no Index e MOBS incluídas neste commit.

### Impacto

`DOCUMENT_ARCHITECTURE.md` torna-se autoridade oficial de organização física; repositório preparado para Fase 1.

### Áreas e documentos envolvidos

- `DOCUMENT_ARCHITECTURE.md`
- `PROJECT_INDEX.md`, `AI_CONTEXT.md`, `project/automation/MOBS.md`
- `HISTORY.md`, `CHANGELOG.md`

### Próximos passos

Fase 1: novos documentos MOBS nascem no path alvo — tarefa dedicada.

---

## 2026-07-21 04:56 — DOCUMENT_STRUCTURE_PLAN.md (Fase 1 institucionalizada)

**Fuso horário:** America/Sao_Paulo
**Versão ou marco:** MOBS 0.2 — Fase 1 (estrutura alvo + política de nascimento)

### Contexto

`DOCUMENT_ARCHITECTURE.md` estava consolidado como autoridade física; faltava materializar paths concretos, matriz atual × alvo e política de nascimento sem mover legado.

### Objetivo

Aprovar e institucionalizar `DOCUMENT_STRUCTURE_PLAN.md` — refinamentos arquiteturais, integração de descoberta e registro histórico.

### Decisões

- Contratos (`CONFIGURATION_CONTRACTS` + concretos) permanecem em `docs/mobs/contracts/` — **sem** subpasta `constitution/`.
- Permanência **definitiva** na raiz: `PROJECT_INDEX`, `AI_CONTEXT`, `PROJECT_RULES`, `HISTORY`, `CHANGELOG`.
- Convenção de paths: kebab-case, minúsculas; `product-id` e `brand-id` como namespaces distintos; IDs oficiais `missao-oab`; `contract-id` em schemas.
- Vigência da política de nascimento após aprovação humana → integração → commit → push em `main`.
- Fases 2 e 3 conceitualmente independentes; execução sequencial recomendada (2 → 3).
- Nenhum arquivo movido; nenhuma pasta alvo vazia criada nesta tarefa.

### Impacto

Fase 1 MOBS 0.2 institucionalizada; novos documentos MOBS devem nascer nos paths alvo; migração de legado habilitada para Fases 2–5.

### Áreas e documentos envolvidos

- `DOCUMENT_STRUCTURE_PLAN.md` (criado)
- `PROJECT_INDEX.md`, `AI_CONTEXT.md`, `project/automation/MOBS.md`, `project/automation/AUTOMATION_ROADMAP.md`
- `HISTORY.md`, `CHANGELOG.md`

### Próximos passos

Fase 2: migrar fundação, domínio e contratos para `docs/mobs/` (tarefa arquitetural dedicada).

---

## 2026-07-21 05:11 — Fase 2: migração física (fundação, domínio, contratos)

**Fuso horário:** America/Sao_Paulo
**Versão ou marco:** MOBS 0.2 — Fase 2 (primeira migração física)

### Contexto

A Fase 1 institucionalizou paths alvo e política de nascimento; os documentos de fundação, domínio e contratos permaneciam na raiz.

### Objetivo

Migrar `WHY_MOBS`, `DOMAIN_MODEL`, `CONFIGURATION_CONTRACTS`, `PROJECT_CONTRACT` e `BRAND_CONTRACT` para `docs/mobs/` — sem alterar conteúdo arquitetural.

### Decisões

- Criar `docs/mobs/foundation/`, `docs/mobs/domain/`, `docs/mobs/contracts/`.
- Atualizar links relativos e descoberta (Index, AI_CONTEXT, MOBS, protocolo, document architecture).
- Não migrar governança, models, schemas nem documentos permanentes na raiz.

### Impacto

Arquitetura física parcialmente materializada: Fundação, Domínio e Contratos nos paths oficiais.

### Áreas e documentos envolvidos

- `docs/mobs/foundation/WHY_MOBS.md`, `docs/mobs/domain/DOMAIN_MODEL.md`, `docs/mobs/contracts/*`
- `PROJECT_INDEX.md`, `AI_CONTEXT.md`, `project/automation/MOBS.md`
- `ARCHITECTURE_TASK_PROTOCOL.md`, `DOCUMENT_ARCHITECTURE.md`, `project/automation/AUTOMATION_ROADMAP.md`
- `HISTORY.md`, `CHANGELOG.md`

### Próximos passos

Fase 3: migrar governança MOBS para `docs/mobs/governance/` (recomendado após validação desta fase).

---

## 2026-07-21 05:25 — Fase 3: migração física da governança MOBS

**Fuso horário:** America/Sao_Paulo
**Versão ou marco:** MOBS 0.2 — Fase 3 (governança arquitetural e documental)

### Contexto

Fases 0–2 concluídas; fundação, domínio e contratos já em `docs/mobs/`. Governança permanecia na raiz.

### Objetivo

Migrar `ARCHITECTURE_TASK_PROTOCOL`, `DOCUMENT_ARCHITECTURE` e `DOCUMENT_STRUCTURE_PLAN` para `docs/mobs/governance/` — exclusivamente migração física.

### Decisões

- Criar apenas `docs/mobs/governance/`.
- Preservar propósito, autoridade, hierarquia e conteúdo normativo — somente paths e links.
- Atualizar descoberta (Index, AI_CONTEXT, MOBS) e referências cruzadas.
- Não iniciar Fase 4.

### Impacto

Fundação, Domínio, Contratos e Governança materializados nos paths oficiais. Raiz mais limpa; descoberta preservada.

### Áreas e documentos envolvidos

- `docs/mobs/governance/ARCHITECTURE_TASK_PROTOCOL.md`, `DOCUMENT_ARCHITECTURE.md`, `DOCUMENT_STRUCTURE_PLAN.md`
- `PROJECT_INDEX.md`, `AI_CONTEXT.md`, `project/automation/MOBS.md`, `project/automation/AUTOMATION_ROADMAP.md`
- `HISTORY.md`, `CHANGELOG.md`

### Validações

- Integridade arquitetural, descoberta e referências verificadas antes do commit.
- `git diff --check` sem erros.

### Próximos passos

Fase 4: consolidar produto, marca institucional e design em `docs/products/missao-oab/`.

---

## 2026-07-21 — Encerramento do ciclo Partnership e institucionalização pré-Core

**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** MOBS — ciclo Partnership encerrado; método Harvest; perfil Ayla  
**Horário:** não registrado com precisão verificável neste marco

### Contexto

O `PARTNERSHIP_MODEL` foi modelado, refinado e estabilizado. A prática Architectural Harvest I–III (coleta, mapa de responsabilidade, cobertura) validou o fundador na prática, mas o método e a identidade Ayla ainda não estavam no repositório. Checkpoints de marcos importantes estavam incompletos.

### Objetivo

Fechar documentalmente o ciclo Partnership; institucionalizar Ayla e o Architectural Harvest; tornar a entrada a frio capaz de reconstruir autoridades e papéis; registrar disciplina de checkpoints.

### Decisões

- Partnership permanece genérico; papéis específicos vivem em derivados.
- Ayla institucionalizada em `docs/mobs/models/AYLA_ARCHITECTURAL_PARTNER.md`.
- Architectural Harvest incorporado ao `ARCHITECTURE_TASK_PROTOCOL` (Evidence → Responsibility → Coverage → Autonomy Validation → Stabilization Gate → Officialization).
- Harvest I–III são ocorrências históricas que revelaram as três primeiras etapas — não rituais numerados obrigatórios.
- Fundador possui decisão arquitetural final; aprovações operacionais podem ser delegadas.
- Checkpoints (CHANGELOG × HISTORY × Git) registrados em `PROJECT_RULES`.
- Próximo ciclo fundador: **Core** (após a Fase 4 estrutural da raiz, quando executada).

### Impacto

Agentes podem descobrir Partnership, Ayla, Harvest e autoridade do fundador só pelo repositório. O ciclo Partnership deixa de depender de memória conversacional.

### Áreas e documentos envolvidos

- `docs/mobs/models/PARTNERSHIP_MODEL.md`, `AYLA_ARCHITECTURAL_PARTNER.md`
- `docs/mobs/governance/ARCHITECTURE_TASK_PROTOCOL.md`, `DOCUMENT_ARCHITECTURE.md`, `DOCUMENT_STRUCTURE_PLAN.md`
- `PROJECT_INDEX.md`, `AI_CONTEXT.md`, `PROJECT_RULES.md`, `README.md`
- `HISTORY.md`, `CHANGELOG.md`

### Validações

- Rotas de descoberta e carga condicional da Ayla.
- Partnership sem absorver o perfil Ayla.
- Inventários de modelos atualizados.

### Próximos passos

1. Fase 4 estrutural: renomear raiz local `missao-oab` → `missao-mobs` (sem renomear o produto Missão OAB).
2. Iniciar o ciclo fundador do **Core** com Evidence Harvest (segunda aplicação do método).

---

## 2026-07-21 — Fase 4 estrutural: preparação (renomeação física pendente)

**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** MOBS 0.2 — Fase 4 (identidade da raiz) — **em andamento**  
**Horário:** não registrado com precisão verificável neste marco

### Contexto

A pasta local ainda se chama `missao-oab`, misturando mentalmente a raiz da arquitetura MOBS com o produto Missão OAB. A Fase 4 antiga (consolidar docs de produto) foi redefinida pelo fundador como etapa estrutural simples de renomeação da raiz.

### Objetivo

Renomear a raiz local para `missao-mobs`; atualizar somente referências de raiz/workspace; preservar produto, `product-id` `missao-oab` e remoto GitHub.

### Decisões

- `missao-mobs` = raiz / workspace da arquitetura.
- `missao-oab` / Missão OAB = produto e namespaces — preservados.
- Remoto `origin` inalterado.
- Consolidação `docs/products/missao-oab/` permanece tarefa futura distinta.
- Próximo ciclo fundador: **Core** — somente após Fase 4 verificada.

### O que foi entregue neste checkpoint

- Referências versionadas de raiz/workspace atualizadas (`README`, árvore do `DESIGN_GUIDE`, roadmap e planos de migração).
- Tentativa de `Rename-Item` da pasta Desktop **falhou**: pasta em uso pelo workspace aberto.

### O que ainda falta para encerrar a Fase 4

1. Fechar processos que bloqueiam a pasta (ou renomear fora do Cursor).
2. Renomear `Desktop\missao-oab` → `Desktop\missao-mobs`.
3. Reabrir o workspace na nova raiz.
4. Confirmar Git, remoto e ausência de refs técnicas indevidas.
5. Registrar o encerramento e só então iniciar o Core.

### Impacto

Preparação documental alinhada à decisão; **Fase 4 ainda não encerrada**.

### Áreas e documentos envolvidos

- `README.md`, `DESIGN_GUIDE.md`
- `AUTOMATION_ROADMAP.md`, `DOCUMENT_ARCHITECTURE.md`, `DOCUMENT_STRUCTURE_PLAN.md`
- `HISTORY.md`, `CHANGELOG.md`

### Validações

- Produto e IDs `missao-oab` preservados nas refs de produto.
- Remoto não alterado.
- Renomeação física **não** concluída neste ambiente.

### Próximos passos

Concluir renomeação física e verificação da raiz `missao-mobs`; depois iniciar o ciclo fundador do **Core**.

---

## 2026-07-21 — Refinamento: conservação antes de nova autoridade

**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** MOBS — protocolo de tarefas (§13.2)  
**Horário:** não registrado com precisão verificável neste marco

### Contexto

Um primeiro teste cego de entrada (pedido para criar documento de condução de modelos) revelou aplicação tardia do princípio de conservação: a solicitação foi tratada como autorização de nova autoridade sem Evidence/Responsibility prévios.

### Decisões

- Uma autoridade dedicada de “protocolo de modelos” foi considerada e **rejeitada** — nunca chegou a ser oficializada nem versionada.
- Incorporar no `ARCHITECTURE_TASK_PROTOCOL` (§13.2) a regra: pedido ≠ necessidade; Evidence/Responsibility antes da implementação; comparar criar modelo / especializar / perfil derivado / manter aberto.
- Distinção mínima modelo × contrato × perfil em `DOCUMENT_ARCHITECTURE`.

### Impacto

Uma autoridade de processo; menos superfície documental; princípio alinhado ao Harvest já institucionalizado.

### Próximos passos

1. Aprovar diff e oficializar (commit/push).
2. Encerrar Fase 4 no registro (raiz `missao-mobs` já validada fisicamente).
3. Iniciar Evidence Harvest do Core.

---

## 2026-07-21 — Fase 4 concluída: identidade da raiz `missao-mobs`

**Fuso horário:** America/Sao_Paulo  
**Versão ou marco:** MOBS 0.2 — Fase 4 (identidade da raiz) — **concluída**  
**Horário:** não registrado com precisão verificável neste marco

### Contexto

A preparação documental da Fase 4 já existia; a renomeação física da pasta estava bloqueada pelo workspace aberto. Em seguida a raiz local foi renomeada de `missao-oab` para `missao-mobs`, o Git foi revalidado e o remoto permaneceu inalterado.

### Objetivo

Encerrar documentalmente a Fase 4 após validação da raiz física.

### Decisões / validações

- Raiz física confirmada: `…/missao-mobs`.
- Remoto `origin` preservado (`M.O.P.git`); IDs de produto/marca `missao-oab` preservados.
- Declarações operacionais de “renomeação pendente” removidas de README, roadmap e plano de estrutura.
- Consolidação `docs/products/missao-oab/` permanece **fora** desta fase (futura).

### Impacto

Fase 4 encerrada. Próximo ciclo fundador elegível: **Core** (tarefa própria — não iniciada neste marco).

### Próximos passos

Evidence Harvest do Core (quando autorizado).

---

## 2026-07-22 — Officialization: Parceiro Programador

**Fuso horário:** America/Sao_Paulo
**Versão ou marco:** MOBS — perfil derivado `PROGRAMMER_PARTNER`
**Horário:** não registrado com precisão verificável neste marco

### Contexto

Evidence, Responsibility, Coverage, Autonomy e Stabilization Gate concluíram que o mandato P1–P3 justifica um perfil derivado do Partnership — não um novo modelo nem config de ferramenta.

### Objetivo

Institucionalizar o menor perfil assumível de materialização técnica, tool-agnóstico, com fronteira explícita com Ayla.

### Decisões

- Path: `docs/mobs/models/PROGRAMMER_PARTNER.md`.
- Identidade = papel institucional *Parceiro Programador* (sem persona detalhada).
- Mandato apenas P1–P3 + limite de não julgamento arquitetural final.
- Carga condicional via Index/AI_CONTEXT; pontes mínimas no Partnership e inventários.

### Impacto

Agentes podem assumir o papel de execução sob mandato sem confundir com Ayla nem duplicar Rules/Protocolo.

### Próximos passos

Aprovar diff → commit/push. Core permanece tarefa própria.

---

## 2026-07-22 — Officialization: TEST_EXECUTION_MODEL (Harvest factual)

**Fuso horário:** America/Sao_Paulo
**Versão ou marco:** MOBS — modelo `TEST_EXECUTION_MODEL`
**Horário:** não registrado com precisão verificável neste marco

### Contexto

Ciclo de materialização e refinamento do método de testes institucionais, com o perfil `PROGRAMMER_PARTNER` em uso sob mandato do fundador.

### Objetivo

Tornar `docs/mobs/models/TEST_EXECUTION_MODEL.md` alcançável pelo fluxo documental e registrar o Harvest factual do ciclo — sem expandir o conteúdo já aprovado do modelo.

### Decisões / fatos colhidos

- Integração mínima: Index, AI_CONTEXT e inventários de estrutura/arquitetura documental; CHANGELOG técnico.
- O `PROGRAMMER_PARTNER` foi **descoberto e utilizado corretamente** neste ciclo.
- **Não houve regressão** de comportamento observada no cenário executado.
- A **indispensabilidade** do `PROGRAMMER_PARTNER` **não foi demonstrada** pelo cenário executado.
- O teste produziu conhecimento que **originou e refinou** o `TEST_EXECUTION_MODEL`.
- Este marco **não** declara o `PROGRAMMER_PARTNER` definitivamente validado, indispensável ou rejeitado.

### Impacto

O método de execução de testes institucionais deixa de ser órfão: descoberta e carga condicional passam a existir nas autoridades de roteamento.

### Próximos passos

Aprovar diff → commit/push quando autorizado. Core permanece tarefa própria.

---

## 2026-07-23 — Institucionalização: mandato mínimo suficiente

**Fuso horário:** America/Sao_Paulo
**Versão ou marco:** MOBS — Arquitetura de Parceria
**Horário:** não registrado com precisão verificável neste marco

### Contexto

A continuidade entre parceiros precisava distinguir o conteúdo próprio de um mandato do conhecimento já alcançável pelas autoridades documentais, preservando economia de contexto sem perder informações determinantes para a execução.

### Objetivo

Institucionalizar no fundador da Arquitetura de Parceria a regra de mandato mínimo suficiente, sem criar nova autoridade nem duplicar regras de Entrada, papéis ou fluxos existentes.

### Decisão

- A regra foi incorporada em `docs/mobs/models/PARTNERSHIP_MODEL.md`, §11 **Fluxo de conhecimento (conceitual)** → **Regras do fluxo**, item 2.
- O mandato contém somente tarefa ou resultado esperado; ponto de entrada para descoberta, quando necessário; informações novas ainda não institucionalizadas; e exceções, limites ou critérios específicos da execução.
- Regras, fluxos, papéis e conhecimentos alcançáveis pela arquitetura documental não são repetidos no mandato.
- Informação nova deve ser autônoma e compreensível sem a conversa de origem.
- A concisão não pode eliminar conteúdo que altere sentido, escopo ou resultado esperado.
- A neutralidade do mandato em testes de autonomia permanece conhecimento candidato e não foi institucionalizada.

### Impacto

Mandatos podem permanecer concisos e autônomos sem carregar novamente a arquitetura já descoberta pelo repositório nem omitir informações que mudem a execução.

### Áreas e documentos envolvidos

- `docs/mobs/models/PARTNERSHIP_MODEL.md`
- `HISTORY.md`
- `CHANGELOG.md`

### Validações

- Responsabilidade do `PARTNERSHIP_MODEL.md` preservada: colaboração e continuidade entre parceiros.
- Regra integrada compactamente às regras do fluxo, sem redefinir Boot ou descoberta.
- Nenhuma duplicação em outra autoridade documental.
- Neutralidade em testes de autonomia mantida fora da arquitetura oficial.

### Estado do checkpoint

Alteração e registros preparados; commit e push ainda não executados e dependentes de aprovação explícita.

---

## Controles

| Campo | Valor |
|---|---|
| Documento | HISTORY.md |
| Tipo | Diário cronológico de produto e engenharia |
| Fuso | America/Sao_Paulo |
| Relação com Changelog | HISTORY = narrativa e decisões; CHANGELOG = alterações técnicas versionáveis |
| Critério | Fatos verificáveis; sem horários inventados |
