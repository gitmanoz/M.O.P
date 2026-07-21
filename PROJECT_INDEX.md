# PROJECT INDEX

| Campo | Valor |
|---|---|
| **Projeto** | Missão OAB (primeiro produto do Ecossistema Missão) |
| **Versão** | 1.1.0 |
| **Última atualização** | 2026-07-21 |
| **Responsável** | Equipe Missão OAB |
| **Status** | Oficial |

---

Este documento é o **orquestrador de contexto** e o **bootloader oficial** do projeto.

Ele determina:

- quais documentos precisam ser lidos;
- em qual ordem;
- quando **não** é necessário carregar determinados contextos;
- como reduzir consumo de contexto e tokens;
- como padronizar o onboarding de qualquer IA.

Ele **nunca** deve conter conhecimento duplicado.  
Ele apenas **roteia** a IA para a fonte oficial correta.

Toda nova conversa deve começar por este arquivo.

---

# Missão do Projeto

Transformar um estudante perdido em um aprovado na OAB através de uma plataforma inteligente, organizada, escalável e baseada na metodologia CAPA.

---

# Princípio Fundamental

- Cada documento possui **apenas uma** responsabilidade.
- Nunca duplicar conhecimento.
- Sempre atualizar a **fonte oficial**.
- O `PROJECT_INDEX` apenas organiza a navegação e o carregamento de contexto.

---

# Boot Sequence

Como uma IA deve iniciar e conduzir o **boot e a execução** de uma conversa:

1. Ler `PROJECT_INDEX.md`.
2. Identificar a categoria da tarefa (Decision Tree).
3. Carregar **somente** os documentos necessários.
4. Planejar.
5. Executar.
6. Validar.

Esta sequência governa **entrada, roteamento e execução com contexto mínimo**.
Não inclui Git, stage, commit, push, `HISTORY.md` nem `CHANGELOG.md` como etapas universais da colaboração.

Quando existir **mudança estabilizada** que deva ser oficialmente registrada, acionar a **governança operacional** em [`PROJECT_RULES.md`](PROJECT_RULES.md) (History/Changelog, aprovação e Git) — não como continuação automática do boot.

---

# Onboarding em duas etapas

## Etapa A — Boot

```
Boot
  ↓
PROJECT_INDEX
  ↓
Identificar a natureza da tarefa
  ↓
Carregar somente os documentos necessários
  ↓
Executar
```

O `PROJECT_INDEX` decide o **subconjunto** de documentação a carregar.  
Não carregar a documentação completa por padrão.

## Etapa B — Execução

Seguir a Boot Sequence (passos 4–10) após o contexto mínimo estar carregado.

---

# Carregamento Inteligente de Contexto

Nem toda tarefa exige toda a documentação.

Sempre carregar apenas o **menor conjunto possível** de documentos capaz de executar corretamente a tarefa.

**Objetivos:**

- reduzir consumo de contexto;
- reduzir tokens;
- aumentar velocidade;
- melhorar precisão.

**Regras:**

- Base mínima quase sempre: `AI_CONTEXT.md` + `PROJECT_RULES.md`.
- Demais documentos: só se a Decision Tree (ou a área afetada) exigir.
- `HISTORY.md` e `CHANGELOG.md`: carregar quando a tarefa for **registro institucional** (propostas de History/Changelog) ou consulta a marcos — não como etapa automática de toda colaboração.
- Em dúvida entre dois conjuntos: preferir o menor; expandir só se a execução ficar bloqueada por falta de fonte oficial.

---

# Decision Tree

Qual é a tarefa?

```
Qual é a tarefa?
│
├─ Landing Page
│    → AI_CONTEXT.md
│    → PROJECT_RULES.md
│    → DESIGN_GUIDE.md
│    → UI_KIT.md
│    (+ index.html / css / js conforme escopo)
│
├─ Branding
│    → AI_CONTEXT.md
│    → PROJECT_RULES.md
│    → docs/brand/BRAND_BOOK.md
│    → docs/brand/BRAND_VOICE.md
│    → docs/brand/COPYWRITING.md
│    → assets/brand/ (README + source/)
│
├─ Produto
│    → AI_CONTEXT.md
│    → PROJECT_RULES.md
│    → docs/product/ (PRD, ROADMAP, USER_JOURNEY, BUSINESS_MODEL; GAMIFICATION se afetar)
│
├─ Gamificação
│    → AI_CONTEXT.md
│    → PROJECT_RULES.md
│    → docs/product/PRD.md
│    → docs/product/GAMIFICATION.md
│
├─ Assets
│    → AI_CONTEXT.md
│    → PROJECT_RULES.md
│    → assets/brand/README.md
│    → assets/brand/source/
│
├─ Código
│    → AI_CONTEXT.md
│    → PROJECT_RULES.md
│    (+ arquivos de código/escopo da tarefa)
│
├─ Documentação
│    → AI_CONTEXT.md
│    → PROJECT_RULES.md
│    → HISTORY.md
│    → CHANGELOG.md
│    (+ documento-alvo da edição)
│
├─ Arquitetura
│    → AI_CONTEXT.md
│    → PROJECT_RULES.md
│    → docs/product/PRD.md
│    → docs/product/ROADMAP.md
│    → DESIGN_GUIDE.md
│    (+ project/automation/ se a arquitetura for de engenharia/MOBS)
│    (+ docs/mobs/models/PARTNERSHIP_MODEL.md se a tarefa for colaboração / continuidade)
│    (+ docs/mobs/models/AYLA_ARCHITECTURAL_PARTNER.md se parceria arquitetural, estabilização ou institucionalização)
│
├─ Engenharia
│    → AI_CONTEXT.md
│    → PROJECT_RULES.md
│    → docs/mobs/foundation/WHY_MOBS.md                    ← propósito e valor (leitura conceitual primeiro)
│    → project/automation/MOBS.md
│    → docs/mobs/domain/DOMAIN_MODEL.md                ← modelo de domínio (MOBS 0.2)
│    → docs/mobs/contracts/CONFIGURATION_CONTRACTS.md     ← constituição dos contratos
│    → docs/mobs/contracts/PROJECT_CONTRACT.md            ← contrato concreto (Projeto)
│    → docs/mobs/contracts/BRAND_CONTRACT.md              ← contrato concreto (Marca)
│    → docs/mobs/governance/ARCHITECTURE_TASK_PROTOCOL.md  ← governança de tarefas arquiteturais (+ Architectural Harvest)
│    → docs/mobs/governance/DOCUMENT_ARCHITECTURE.md       ← arquitetura física da documentação
│    → docs/mobs/governance/DOCUMENT_STRUCTURE_PLAN.md    ← estrutura alvo e política de nascimento (Fase 1)
│    → docs/mobs/models/PARTNERSHIP_MODEL.md               ← colaboração genérica entre parceiros
│    → docs/mobs/models/AYLA_ARCHITECTURAL_PARTNER.md      ← carregar integralmente se Ayla / parceria arquitetural / estabilização / institucionalização
│    → project/automation/BUILD_SYSTEM.md
│    → project/automation/PROJECT_ENGINE.md
│    → project/automation/BRAND_ENGINE.md
│    → project/automation/AUTOMATION_ROADMAP.md
│    → project/automation/AUTOMATION_RULES.md
│    (carregar Engines adicionais só se a tarefa citar)
│
├─ Automação / Build / Deploy / Geração automática
│    → mesmo conjunto de Engenharia (mínimo: docs/mobs/foundation/WHY_MOBS.md opcional se só execução; MOBS + AUTOMATION_RULES + Engine afetada)
│
├─ Posicionamento / visão estratégica MOBS
│    → docs/mobs/foundation/WHY_MOBS.md
│    → project/automation/MOBS.md
│    → AI_CONTEXT.md
│    → PROJECT_RULES.md
│
└─ Nova funcionalidade
     → Carregar conforme as áreas afetadas
       (combinar ramos da árvore; manter o menor conjunto)
```

Ordem sugerida no ramo **Engenharia** (trilha MOBS):

```
Engenharia
  ↓
docs/mobs/foundation/WHY_MOBS.md          ← propósito, visão e proposta de valor
  ↓
MOBS.md              ← visão da plataforma e escopo
  ↓
docs/mobs/domain/DOMAIN_MODEL.md      ← gramática conceitual (MOBS 0.2)
  ↓
docs/mobs/contracts/CONFIGURATION_CONTRACTS.md ← constituição dos contratos
  ↓
docs/mobs/contracts/PROJECT_CONTRACT.md  ← contrato concreto de Projeto
  ↓
docs/mobs/contracts/BRAND_CONTRACT.md    ← contrato concreto de Marca
  ↓
docs/mobs/governance/ARCHITECTURE_TASK_PROTOCOL.md  ← governança de tarefas arquiteturais
  ↓
docs/mobs/governance/DOCUMENT_ARCHITECTURE.md       ← arquitetura física da documentação
  ↓
docs/mobs/governance/DOCUMENT_STRUCTURE_PLAN.md    ← estrutura alvo e política de nascimento (Fase 1)
  ↓
BUILD_SYSTEM.md      ← arquitetura e taxonomia
  ↓
PROJECT_ENGINE.md
  ↓
BRAND_ENGINE.md
  ↓
AUTOMATION_ROADMAP.md
  (+ AUTOMATION_RULES.md sempre que for criar/alterar automação)
```

Trilha conceitual do **MOBS 0.2 (Configuration Contracts)**:

```
docs/mobs/foundation/WHY_MOBS.md
  ↓
MOBS.md
  ↓
docs/mobs/domain/DOMAIN_MODEL.md
  ↓
docs/mobs/contracts/CONFIGURATION_CONTRACTS.md
  ├── docs/mobs/contracts/PROJECT_CONTRACT.md
  └── docs/mobs/contracts/BRAND_CONTRACT.md
  ↓
docs/mobs/governance/ARCHITECTURE_TASK_PROTOCOL.md
docs/mobs/governance/DOCUMENT_ARCHITECTURE.md
docs/mobs/governance/DOCUMENT_STRUCTURE_PLAN.md
  ↓
schemas
  ↓
implementação
```

Fluxo conceitual do MOBS:

```
project.json
    ↓
MOBS Core
    ↓ aciona
Project Engine
    ↓ devolve contexto
MOBS Core
    ↓ orquestra
Brand / Docs / Assets / Validation / Release
```

Esta árvore deve permanecer clara, visual e facilmente expandida no futuro.

---

# Fluxo de Trabalho

```
Receber tarefa
    ↓
Boot (PROJECT_INDEX + Decision Tree)
    ↓
Carregar contexto mínimo
    ↓
Planejar
    ↓
Executar
    ↓
Validar
    ↓
[somente se houver mudança estabilizada a registrar oficialmente]
    ↓
Governança operacional (PROJECT_RULES):
  History / Changelog / aprovação / Git
```

Colaboração e preservação de fluxo: [`docs/mobs/models/PARTNERSHIP_MODEL.md`](docs/mobs/models/PARTNERSHIP_MODEL.md).
Parceira arquitetural Ayla (descoberta universal; carga integral só quando o papel se aplicar): [`docs/mobs/models/AYLA_ARCHITECTURAL_PARTNER.md`](docs/mobs/models/AYLA_ARCHITECTURAL_PARTNER.md).
Registro institucional e versionamento: [`PROJECT_RULES.md`](PROJECT_RULES.md).

---

# Estrutura Geral do Projeto

Onde procurar cada tipo de informação (sem detalhar conteúdo):

| Local | O que encontrar |
|---|---|
| `PROJECT_INDEX.md` | Bootloader / orquestrador de contexto |
| `docs/mobs/foundation/WHY_MOBS.md` | Propósito, visão e proposta de valor do MOBS |
| `docs/mobs/domain/DOMAIN_MODEL.md` | Modelo de domínio / gramática conceitual (MOBS 0.2) |
| `docs/mobs/contracts/CONFIGURATION_CONTRACTS.md` | Constituição dos contratos de configuração |
| `docs/mobs/contracts/PROJECT_CONTRACT.md` | Contrato concreto da entidade Projeto |
| `docs/mobs/contracts/BRAND_CONTRACT.md` | Contrato concreto da entidade Marca |
| `docs/mobs/governance/ARCHITECTURE_TASK_PROTOCOL.md` | Governança oficial de tarefas arquiteturais do MOBS |
| `docs/mobs/governance/DOCUMENT_ARCHITECTURE.md` | Arquitetura física permanente da documentação MOBS |
| `docs/mobs/governance/DOCUMENT_STRUCTURE_PLAN.md` | Estrutura física alvo e política de nascimento (MOBS 0.2 — Fase 1) |
| `docs/mobs/models/PARTNERSHIP_MODEL.md` | Gramática genérica da colaboração entre parceiros |
| `docs/mobs/models/AYLA_ARCHITECTURAL_PARTNER.md` | Identidade e papel da parceira arquitetural Ayla |
| `AI_CONTEXT.md` | Contexto e regras para agentes de IA |
| `PROJECT_RULES.md` | Contrato operacional de trabalho |
| `docs/product/` | Produto, roadmap, jornada, negócio, gamificação |
| `docs/brand/` | Brand Book, voz e copywriting |
| `DESIGN_GUIDE.md` / `UI_KIT.md` | Design System e componentes |
| `HISTORY.md` / `CHANGELOG.md` | Diário cronológico (HISTORY) e registro técnico versionável (CHANGELOG) |
| `project/automation/` | MOBS — plataforma de engenharia do Ecossistema Missão |
| `assets/brand/` | Identidade visual oficial do produto atual (SVGs em `source/`) |
| `index.html` | Landing page |
| `css/` / `js/` / `img/` | Estilos, scripts e mídia da landing |
| `favicon/` | Favicon da landing (quando existir) |
| `README.md` | Ponte de entrada do repositório → `PROJECT_INDEX.md` |

---

# Responsabilidade de cada documento

| Documento | Responsabilidade |
|---|---|
| `PROJECT_INDEX.md` | Bootloader e orquestração de contexto |
| `docs/mobs/foundation/WHY_MOBS.md` | Manifesto estratégico: porquê, valor, princípios e bússola do MOBS |
| `docs/mobs/domain/DOMAIN_MODEL.md` | Gramática conceitual: conceitos, relações e fronteiras antes dos contratos |
| `docs/mobs/contracts/CONFIGURATION_CONTRACTS.md` | Regras gerais para existência, ownership, validação e evolução de contratos |
| `docs/mobs/contracts/PROJECT_CONTRACT.md` | Especialização do contrato de configuração para Projeto |
| `docs/mobs/contracts/BRAND_CONTRACT.md` | Especialização do contrato de configuração para Marca |
| `docs/mobs/governance/ARCHITECTURE_TASK_PROTOCOL.md` | Método oficial de planejamento, revisão e aprovação de documentos arquiteturais |
| `docs/mobs/governance/DOCUMENT_ARCHITECTURE.md` | Organização física, grupos documentais e regras de crescimento da documentação |
| `docs/mobs/governance/DOCUMENT_STRUCTURE_PLAN.md` | Paths alvo, matriz atual × alvo, convenção de IDs e política de nascimento de novos documentos |
| `docs/mobs/models/PARTNERSHIP_MODEL.md` | Colaboração genérica e preservação de fluxo entre parceiros |
| `docs/mobs/models/AYLA_ARCHITECTURAL_PARTNER.md` | Perfil derivado: identidade e papel arquitetural da Ayla |
| `AI_CONTEXT.md` | Contexto do projeto para IAs e regras de marca/consumo |
| `PROJECT_RULES.md` | Regras permanentes de desenvolvimento e fluxo operacional |
| `docs/product/PRD.md` | Produto e requisitos |
| `docs/product/ROADMAP.md` | Planejamento e versões |
| `docs/product/USER_JOURNEY.md` | Experiência e jornada do usuário |
| `docs/product/BUSINESS_MODEL.md` | Modelo de negócio |
| `docs/product/GAMIFICATION.md` | Princípios e sistema de gamificação |
| `docs/brand/BRAND_BOOK.md` | Constituição e identidade da marca |
| `docs/brand/BRAND_VOICE.md` | Tom de comunicação |
| `docs/brand/COPYWRITING.md` | Diretrizes de escrita e copy |
| `assets/brand/README.md` | Operação dos Brand Assets |
| `DESIGN_GUIDE.md` | Padrões visuais e design system |
| `UI_KIT.md` | Componentes e especificação de UI |
| `HISTORY.md` | Diário cronológico de produto e engenharia: contexto, decisões, impacto e próximos passos |
| `CHANGELOG.md` | Mudanças técnicas relevantes (Keep a Changelog) |
| `project/automation/MOBS.md` | Visão e missão da plataforma de engenharia do ecossistema |
| `project/automation/BUILD_SYSTEM.md` | Taxonomia Core/Engine/Generator/Validator e fronteiras do Core |
| `project/automation/PROJECT_ENGINE.md` | Contexto de projeto e relação projeto↔marca |
| `project/automation/BRAND_ENGINE.md` | Modelo multi-marca (config-driven) |
| `project/automation/AUTOMATION_ROADMAP.md` | Evolução versionada dos módulos |
| `project/automation/AUTOMATION_RULES.md` | Regras permanentes de automações |

---

# Filosofia

A documentação existe para evitar duplicidade e ambiguidade.

Cada documento possui uma responsabilidade.  
Atualizar a fonte correta — nunca copiar o mesmo conhecimento em vários lugares.

O `PROJECT_INDEX` permanece enxuto: roteia, não ensina o domínio.

---

# Como iniciar uma nova conversa

Mensagem recomendada:

> Leia o `PROJECT_INDEX.md` e execute a tarefa: \<descrição\>.

A IA deve:

1. Ler este bootloader.
2. Classificar a tarefa na Decision Tree.
3. Carregar só o conjunto necessário.
4. Seguir a Boot Sequence (planejar → executar → validar).
5. Se houver mudança estabilizada a registrar oficialmente, seguir `PROJECT_RULES.md`.
