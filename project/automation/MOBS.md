# MOBS — Missão Build Operating System

| Campo | Valor |
|---|---|
| **Documento** | MOBS.md |
| **Versão** | 0.1.1 (Arquitetura) |
| **Status** | Oficial — arquitetura documental **aprovada** v0.1.1 |
| **Escopo** | Ecossistema Missão |
| **Última atualização** | 2026-07-20 (alinhamento documental Core ↔ Project Engine) |

---

## O que é o MOBS

O **MOBS** (*Missão Build Operating System*) é a **Plataforma Oficial de Engenharia** do Ecossistema Missão.

Ele não é um script isolado, nem um build system limitado a um produto.  
É o sistema que padroniza, orquestra e automatiza processos repetitivos de **qualquer projeto** pertencente ao ecossistema.

A **Missão OAB** é o primeiro produto. Não é o limite do MOBS.

Para o **porquê**, a proposta de valor, os princípios permanentes e a bússola de decisão, ler primeiro [`WHY_MOBS.md`](../../WHY_MOBS.md) (raiz do repositório).

Para a **gramática conceitual** (conceitos, relações e fronteiras antes de qualquer schema), ler [`DOMAIN_MODEL.md`](../../DOMAIN_MODEL.md).

Para as **regras gerais dos contratos de configuração** (constituição), ler [`CONFIGURATION_CONTRACTS.md`](../../CONFIGURATION_CONTRACTS.md).
Para o **contrato concreto de Projeto**, ler [`PROJECT_CONTRACT.md`](../../PROJECT_CONTRACT.md).
Para o **contrato concreto de Marca**, ler [`BRAND_CONTRACT.md`](../../BRAND_CONTRACT.md).

Para a **governança de tarefas arquiteturais** (planejamento, revisão, validação e aprovação), ler [`ARCHITECTURE_TASK_PROTOCOL.md`](../../ARCHITECTURE_TASK_PROTOCOL.md).

Para a **arquitetura física da documentação** (grupos, descoberta, crescimento e migração), ler [`DOCUMENT_ARCHITECTURE.md`](../../DOCUMENT_ARCHITECTURE.md).

Para o **plano de estrutura física alvo** (paths, política de nascimento, convenção de IDs — MOBS 0.2 Fase 1), ler [`DOCUMENT_STRUCTURE_PLAN.md`](../../DOCUMENT_STRUCTURE_PLAN.md).

---

## Missão

Padronizar e automatizar todos os processos repetitivos de engenharia do Ecossistema Missão — identidade, assets, documentação, validação, release e evoluções futuras — de forma **genérica, configurável e reutilizável**.

---

## Filosofia

1. **Configuração acima de código** — o comportamento nasce de configs de marca e de projeto; o motor permanece estável.
2. **Um único motor para diversos projetos** — zero forks por produto.
3. **Zero duplicação** — uma Engine, muitas marcas/projetos.
4. **Arquitetura modular** — Core, Engines, Generators e Validators com responsabilidade única.
5. **Escalabilidade** — novos produtos herdam a infraestrutura sem refatoração estrutural.
6. **Documentação antes da implementação** — nenhuma automação nasce sem arquitetura aprovada.
7. **Automações independentes** — módulos desacoplados; falha ou evolução de um não quebra os demais.
8. **Contexto antes da ação** — o Core aciona o Project Engine como primeira Engine; só então orquestra Generators/Validators e demais módulos.

---

## Ecossistema Missão (visão)

Produtos e marcas previstos (lista aberta):

- Missão OAB
- CAPA
- MOBS (como marca/plataforma de engenharia)
- MOAI
- Missão ENEM
- Missão Medicina
- Missão Concursos
- futuros produtos ainda desconhecidos

O MOBS deve nascer preparado para todos eles.

---

## Anatomia do MOBS (resumo)

| Peça | Função |
|---|---|
| **MOBS Core** | Orquestrador: carrega config inicial, aciona Engines, seleciona, ordena, consolida logs |
| **Project Engine** | Primeira Engine: resolve o contexto do projeto e devolve ao Core |
| **Brand Engine** | Contexto da marca (acionada pelo Core após o Project Engine) |
| **Generators** | Produzem artefatos derivados (ex.: Asset Generator) |
| **Validators** | Verificam integridade (ex.: Validation Engine) |
| **Demais Engines** | Domínios sem geração em massa (Docs, Release, etc.) |

- O **Core orquestra**.
- O **Project Engine** resolve o contexto como **primeira Engine** (dentro do fluxo do Core).
- Os **demais módulos** são acionados pelo Core **depois** da resolução do contexto.

Taxonomia e fronteiras do Core: `BUILD_SYSTEM.md`.  
Relação projeto↔marca: `PROJECT_ENGINE.md`.

Fluxo conceitual oficial:

```
Interface / CLI / CI / IA
    ↓
MOBS Core carrega project.json
    ↓
MOBS Core aciona Project Engine
    ↓
Project Engine resolve o contexto
    ↓
MOBS Core seleciona, ordena e executa os demais módulos
    ↓
Brand Engine / Documentation Engine / Asset Generator / Validators / Release Engine
    ↓
Logs e resultados consolidados
```

---

## Relação com a governança existente

| Documento | Papel | Relação com o MOBS |
|---|---|---|
| `PROJECT_INDEX.md` | Bootloader / orquestrador de contexto | Roteia tarefas de engenharia/automação para a documentação MOBS |
| `AI_CONTEXT.md` | Contexto e regras para agentes de IA | Exige consultar MOBS antes de automações, scripts, build, deploy ou geração automática |
| `PROJECT_RULES.md` | Contrato operacional | Define processo, aprovações, identidade e a regra de engenharia do ecossistema |
| `project/automation/*` | Arquitetura MOBS | Fonte oficial de *como* o ecossistema automatiza |

Hierarquia conceitual:

```
PROJECT_INDEX  →  decide o que ler
AI_CONTEXT     →  regras de contexto e marca para IAs
PROJECT_RULES  →  como trabalhar e aprovar
MOBS           →  como o ecossistema engenheira e automatiza
```

O MOBS **não substitui** Index, AI Context ou Rules.  
Ele é o **pilar de engenharia** ao lado deles.

---

## Pilar da engenharia do ecossistema

O Ecossistema Missão apoia-se em quatro pilares documentais:

1. **Contexto** — `PROJECT_INDEX` + `AI_CONTEXT`
2. **Operação** — `PROJECT_RULES`
3. **Produto / Marca (por projeto)** — `docs/product`, `docs/brand`, Design System do produto
4. **Engenharia** — **MOBS** (`project/automation/`)

Sem o MOBS, cada novo produto reinventaria scripts, pastas e processos.  
Com o MOBS, um novo produto deve precisar **apenas de configuração** para herdar a infraestrutura.

---

## Mapa da documentação MOBS

| Documento | Responsabilidade |
|---|---|
| [`WHY_MOBS.md`](../../WHY_MOBS.md) | Propósito, visão, valor, princípios e bússola de decisão |
| [`DOMAIN_MODEL.md`](../../DOMAIN_MODEL.md) | Modelo de domínio (MOBS 0.2) — antes de contratos concretos e schemas |
| [`CONFIGURATION_CONTRACTS.md`](../../CONFIGURATION_CONTRACTS.md) | Constituição dos contratos de configuração |
| [`PROJECT_CONTRACT.md`](../../PROJECT_CONTRACT.md) | Contrato concreto da entidade Projeto |
| [`BRAND_CONTRACT.md`](../../BRAND_CONTRACT.md) | Contrato concreto da entidade Marca |
| [`ARCHITECTURE_TASK_PROTOCOL.md`](../../ARCHITECTURE_TASK_PROTOCOL.md) | Governança de tarefas arquiteturais |
| [`DOCUMENT_ARCHITECTURE.md`](../../DOCUMENT_ARCHITECTURE.md) | Arquitetura física da documentação |
| [`DOCUMENT_STRUCTURE_PLAN.md`](../../DOCUMENT_STRUCTURE_PLAN.md) | Estrutura alvo, política de nascimento e convenção de paths (Fase 1) |
| `MOBS.md` | Visão da plataforma e escopo |
| `BUILD_SYSTEM.md` | Taxonomia (Core/Engine/Generator/Validator), fluxo e fronteiras do Core |
| `PROJECT_ENGINE.md` | Modelo multi-projeto, contexto inicial e relação projeto↔marca |
| `BRAND_ENGINE.md` | Modelo multi-marca (config-driven) |
| `AUTOMATION_ROADMAP.md` | Evolução versionada dos módulos |
| `AUTOMATION_RULES.md` | Regras permanentes de toda automação |
| `future/` | Espaço reservado para módulos e specs futuras |

---

## Estado atual

Nesta fase existe **somente arquitetura documental**.

- **MOBS 0.2 — Fase 1** (`DOCUMENT_STRUCTURE_PLAN.md`): aprovada e institucionalizada — novos documentos MOBS nascem no path alvo após vigência (commit + push em `main`).
- Não há scripts oficiais do MOBS.
- Não há implementação de Core, Engines, Generators ou Validators.
- Não há movimentação de assets obrigatória nesta etapa.
- Não há schemas oficiais de `project.json` / `brand.json` nesta etapa.

A implementação só começa após aprovação da arquitetura e do roadmap correspondente, seguindo `AUTOMATION_RULES.md`.

---

## Visão de Futuro

O objetivo do MOBS é permitir que **qualquer novo produto** do Ecossistema Missão nasça reutilizando a infraestrutura existente.

Um novo projeto deverá precisar apenas de sua **configuração** para herdar automaticamente:

- identidade visual (via Brand Engine + config de marca);
- geração de assets (Asset Generator);
- documentação padronizada;
- validações (Validators);
- releases e deploys futuros;
- demais módulos previstos no roadmap.

Em outras palavras:

> Novo produto = nova config + conteúdo.  
> Não = novo sistema de engenharia.

Isso reduz tempo de lançamento, risco de inconsistência de marca e custo de manutenção ao longo de muitos anos.
