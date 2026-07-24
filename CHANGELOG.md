# Changelog

Registro **técnico**, objetivo e versionável das alterações relevantes deste repositório.

O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).  
Versionamento semântico é usado quando aplicável a **releases do projeto** — não inventar versões globais sem release justificada.

## Diferença em relação ao HISTORY.md

| Documento | Função |
|---|---|
| **HISTORY.md** | Diário cronológico: contexto, decisões, impacto, próximos passos |
| **CHANGELOG.md** | O que foi Added / Changed / Fixed / Removed / Deprecated / Security |

Não duplicar a narrativa completa das decisões aqui.  
Arquitetura **conceitual** não deve ser apresentada como funcionalidade executável.

Categorias usadas apenas quando houver itens:

- Added · Changed · Fixed · Removed · Deprecated · Security

---

## [Unreleased]

### Added

- `docs/mobs/models/PARTNERSHIP_MODEL.md`: fundador da Arquitetura de Parceria (colaboração genérica entre parceiros).
- `docs/mobs/models/AYLA_ARCHITECTURAL_PARTNER.md`: identidade institucional e papel arquitetural da Ayla (derivado do Partnership).
- `docs/mobs/models/PROGRAMMER_PARTNER.md`: perfil derivado — materialização técnica sob mandato (P1–P3); fronteira com Ayla.
- `docs/mobs/models/TEST_EXECUTION_MODEL.md`: modelo transversal — método de testes institucionais, probes e diagnósticos de execução.
- Architectural Harvest no `ARCHITECTURE_TASK_PROTOCOL.md` (Evidence, Responsibility, Coverage + Autonomy Validation, Stabilization Gate, Officialization).
- Checkpoints de entregas importantes e distinção fundador × aprovação operacional em `PROJECT_RULES.md`.
- `README.md` como ponte de entrada para `PROJECT_INDEX.md`.
- Sistema permanente de histórico institucional (`HISTORY.md`).
- Governança de histórico e changelog em `AI_CONTEXT.md`.
- Estrutura definitiva de Brand Assets em `assets/brand/` (`source`, `exports`, `favicon`, `social`, `og`, `app`) e `assets/brand/README.md`.
- Catálogo completo de SVGs mestres em `assets/brand/source/` (symbol, typography, logos horizontal/vertical, variantes black/white e `*_INK`).
- PNGs históricos em `assets/brand/reference/`.
- Seção “Brand Assets Oficiais” em `AI_CONTEXT.md`.
- Contrato operacional `PROJECT_RULES.md` e seção Governança em `AI_CONTEXT.md`.
- Bootloader `PROJECT_INDEX.md` (Decision Tree, Boot Sequence, carregamento seletivo).
- Seções de carregamento seletivo / gerenciamento de contexto em `AI_CONTEXT.md` e `PROJECT_RULES.md`.
- Manifesto estratégico `WHY_MOBS.md`: proposta de valor, princípios, bússola de decisão e posicionamento do MOBS como plataforma de engenharia do Ecossistema Missão.
- Esclarecimento institucional do nome MOBS (marca própria; *Mission Build Operating System* não é acrônimo literal perfeito).
- `DOMAIN_MODEL.md`: modelo de domínio do MOBS (início formal do MOBS 0.2 — Configuration Contracts; sem schemas).
- `CONFIGURATION_CONTRACTS.md`: constituição dos contratos de configuração (regras gerais; sem contratos concretos).
- `PROJECT_CONTRACT.md`: primeiro contrato concreto do MOBS (entidade Projeto; sem schemas).
- `BRAND_CONTRACT.md`: segundo contrato concreto do MOBS (entidade Marca; irmão de PROJECT_CONTRACT; sem schemas).
- `ARCHITECTURE_TASK_PROTOCOL.md`: governança oficial de tarefas arquiteturais do MOBS (método consolidado dos contratos concretos).
- `DOCUMENT_ARCHITECTURE.md`: arquitetura física permanente da documentação MOBS (grupos, descoberta, crescimento e migração).
- `DOCUMENT_STRUCTURE_PLAN.md`: plano de estrutura física alvo, política de nascimento, convenção de paths e matriz atual × alvo (MOBS 0.2 — Fase 1).

### Changed

- `AUTOMATION_ROADMAP.md`: encerramento do Evidence Harvest + Responsibility Harvest de resolução de contextos da v1 registrado no baseline `7a40a93f5279e9138e67805470fc2d5b93097590` — questão mantida aberta; `RESOLUTION_MODEL.md` preservado como candidato futuro, sem criação; cobertura de `CONFIGURATION_CONTRACTS.md` considerada suficiente; necessidade de `CAPABILITY_MODEL.md` não demonstrada; decisões físicas e operacionais permanecem abertas.
- `AUTOMATION_ROADMAP.md`: estado do Core corrigido de próximo ciclo fundador para validação fundadora concluída — Coverage Harvest, Autonomy Validation, veredito institucional e Stabilization Gate em **Pass**, com alcance restrito ao walkthrough documental da landing, centrado no Projeto Missão OAB e com Marca requerida; sem antecipar novo fundador ou alterar `MOBS_CORE.md`.
- `PARTNERSHIP_MODEL.md`, §11: institucionalizada a regra de mandato mínimo suficiente — apenas tarefa/resultado, ponto de entrada necessário, informação nova e critérios específicos; sem repetir arquitetura alcançável, com autonomia da informação nova e preservação de sentido, escopo e resultado. A neutralidade do mandato em testes de autonomia permanece conhecimento candidato e não foi institucionalizada.
- `ARCHITECTURE_TASK_PROTOCOL.md`: §13.2 — nascimento de modelos/autoridades (pedido ≠ necessidade; Evidence/Responsibility antes da implementação; alternativas criar / especializar / perfil / aberto).
- `DOCUMENT_ARCHITECTURE.md`: distinção mínima modelo × contrato × perfil derivado.
- `PROJECT_INDEX.md` e `AI_CONTEXT.md`: rotas atualizadas para o protocolo de tarefas (§13.2), Ayla, Parceiro Programador e `TEST_EXECUTION_MODEL` (carga condicional).
- `PARTNERSHIP_MODEL.md`: ponte mínima para perfis derivados (Ayla, Parceiro Programador), sem absorver as identidades.
- Inventários em `DOCUMENT_STRUCTURE_PLAN.md` e `DOCUMENT_ARCHITECTURE.md`: modelos/parceria, perfis Ayla / Parceiro Programador e `TEST_EXECUTION_MODEL`.
- Fase 4 estrutural (identidade da raiz): `missao-oab` → `missao-mobs` **concluída** e validada; produto/`product-id` `missao-oab` preservados.
- Consolidação de produto sob `docs/products/` marcada como **futura** (não mais escopo da Fase 4).

#### MOBS — arquitetura documental 0.1.1 (conceitual)

Documentação da plataforma de engenharia do **Ecossistema Missão** (config-driven, multi-projeto, multi-marca).

**Documentação criada**

- `project/automation/MOBS.md`
- `project/automation/BUILD_SYSTEM.md`
- `project/automation/PROJECT_ENGINE.md`
- `project/automation/BRAND_ENGINE.md`
- `project/automation/AUTOMATION_ROADMAP.md`
- `project/automation/AUTOMATION_RULES.md`
- `project/automation/future/README.md`

**Documentação atualizada (governança)**

- `PROJECT_INDEX.md` — ramos Engenharia / Automação
- `AI_CONTEXT.md` — consulta obrigatória ao MOBS antes de automações/build/deploy
- `PROJECT_RULES.md` — Engenharia do Ecossistema

**Arquitetura conceitual aprovada (não executável)**

- Taxonomia: Core / Orchestrator, Engine, Generator, Validator
- Project Engine como resolução de contexto
- MOBS Core como orquestrador sem regras de domínio
- Modelo Projeto × Marca
- Roadmap v1–v10 (planejamento)

**Ainda não implementado nesta fase**

- Scripts
- Schemas oficiais (`project.json` / `brand.json`)
- Código de automação
- Migração de assets (`assets/brand/` → `assets/brands/…`)
- Engines executáveis
- Generators executáveis
- Validators executáveis
- MOBS Core executável
- Processos de build ou deploy automatizados

### Changed

- `CHANGELOG.md` no padrão Keep a Changelog.
- Nomenclatura dos SVGs Inkscape (`*_INK.svg`) sem prefixos numéricos.
- Landing consome `assets/brand/source/master-logo-horizontal.svg` no header e footer.
- Árvore de pastas em `DESIGN_GUIDE.md` atualizada para `assets/brand/`.
- `PROJECT_INDEX.md` como orquestrador de contexto (onboarding seletivo).
- Leitura obrigatória e processo de trabalho alinhados ao boot seletivo / Boot Sequence.
- `BUILD_SYSTEM.md` como arquitetura MOBS do **ecossistema** (não build exclusivo da Missão OAB).
- `HISTORY.md` reorganizado como diário cronológico (data/hora/fuso America/Sao_Paulo; sem horários inventados).
- `CHANGELOG.md` padronizado com propósito explícito e distinção formal em relação ao HISTORY.
- `PROJECT_RULES.md` atualizado com a seção **History e Changelog**.
- Diagramas e fluxos MOBS alinhados: `MOBS Core` → `Project Engine` → `MOBS Core` → demais módulos.
- Project Engine documentado como primeira Engine **acionada pelo Core** (não fora dele).
- Descrição do `HISTORY.md` no `PROJECT_INDEX` alinhada ao diário cronológico.
- Ordem documental MOBS uniformizada: MOBS → BUILD_SYSTEM → PROJECT_ENGINE → BRAND_ENGINE → ROADMAP → RULES.
- Integração de `WHY_MOBS.md` como primeira leitura conceitual da trilha MOBS no `PROJECT_INDEX`, com referências em `MOBS.md` e `AI_CONTEXT.md`.
- Integração de `DOMAIN_MODEL.md` na trilha MOBS 0.2 (antes de contratos/schemas); nota no `AUTOMATION_ROADMAP.md`.
- Integração de `CONFIGURATION_CONTRACTS.md` na trilha MOBS 0.2 (após o domínio; antes de contratos concretos).
- Refinamento de `CONFIGURATION_CONTRACTS.md`: filosofia dos contratos, promessas, Owner vs Authority, independência de implementação/tecnologia.
- Integração de `PROJECT_CONTRACT.md` na trilha MOBS 0.2 (após a constituição; antes de Brand Contract e schemas).
- Revisão final de `PROJECT_CONTRACT.md`: princípios (WHY_MOBS), garantias estruturais/operacionais, independência da serialização, linguagem da Project Engine.
- Integração de `BRAND_CONTRACT.md` na trilha MOBS 0.2 (contrato irmão de Projeto; após a constituição; antes de schemas).
- Revisão final de `BRAND_CONTRACT.md`: coexistência de Marcas no ecossistema, linguagem da Brand Engine, invariantes, Source of Truth; referência temporal atualizada em `PROJECT_CONTRACT.md`.
- Revisão final de `ARCHITECTURE_TASK_PROTOCOL.md`: ordem de leitura vs hierarquia; princípio de evolução como documento de governança.
- Integração de `DOCUMENT_ARCHITECTURE.md` na trilha MOBS 0.2; consolidação como autoridade de organização física.
- Integração de `DOCUMENT_STRUCTURE_PLAN.md` (Fase 1 MOBS 0.2): descoberta, política de nascimento, IDs `missao-oab`, decisões de permanência na raiz e contratos em `docs/mobs/contracts/`.

### Changed

- Migração física MOBS 0.2 — Fase 3: `ARCHITECTURE_TASK_PROTOCOL.md`, `DOCUMENT_ARCHITECTURE.md` e `DOCUMENT_STRUCTURE_PLAN.md` para `docs/mobs/governance/`.
- Atualização de descoberta e referências em `PROJECT_INDEX.md`, `AI_CONTEXT.md`, `MOBS.md`, `AUTOMATION_ROADMAP.md` e documentos migrados.
- Migração física MOBS 0.2 — Fase 2: `WHY_MOBS.md`, `DOMAIN_MODEL.md`, `CONFIGURATION_CONTRACTS.md`, `PROJECT_CONTRACT.md` e `BRAND_CONTRACT.md` para `docs/mobs/foundation/`, `docs/mobs/domain/` e `docs/mobs/contracts/`.
- Links relativos e descoberta atualizados em `PROJECT_INDEX.md`, `AI_CONTEXT.md`, `MOBS.md`, `ARCHITECTURE_TASK_PROTOCOL.md`, `DOCUMENT_ARCHITECTURE.md` e `AUTOMATION_ROADMAP.md` (Fase 2).

### Removed

- Cópias legadas de marca na raiz (`Logo.png`, pasta “Missão OAB Design System”), após preservação em `assets/brand/reference/` e consolidação em `assets/brand/source/`.

---

## [0.1.0] - 2026-07-20

Primeiro marco versionado do repositório — commit `ef37433` (`chore: initialize Missao OAB project`).

### Added

- Estrutura inicial do projeto Missão OAB.
- Landing page em `index.html` com base CSS (`reset`, `variables`, `style`, `responsive`, `animations`) e `js/app.js`.
- Documentação de produto: `PRD.md`, `ROADMAP.md`, `USER_JOURNEY.md`, `BUSINESS_MODEL.md`, `GAMIFICATION.md`.
- Documentação de marca: `BRAND_BOOK.md`, `BRAND_VOICE.md`, `COPYWRITING.md`.
- Design System documental: `DESIGN_GUIDE.md` e `UI_KIT.md`.
- Tokens e arquitetura visual inicial em `css/variables.css` e demais folhas de estilo.
- Identidade visual source: `assets/brand/source/master-symbol.svg`.
- Artefatos de marca adicionais no commit inicial (incluindo pasta “Missão OAB Design System” e `Logo.png`).
- Placeholders de mídia em `img/logo/` e `img/hero/`.
- `AI_CONTEXT.md` para orientação de agentes de IA, metáfora mapa/caminho e regras de uso da marca.
- `README.md` (arquivo criado; conteúdo vazio no estado versionado).
- Registro inicial de changelog (v0.1.0), posteriormente reorganizado neste formato.
