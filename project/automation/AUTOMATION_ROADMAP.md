# AUTOMATION ROADMAP

| Campo | Valor |
|---|---|
| **Documento** | AUTOMATION_ROADMAP.md |
| **Versão** | 0.1.1 (Arquitetura) |
| **Status** | Oficial — planejamento |
| **Depende de** | `MOBS.md`, `BUILD_SYSTEM.md`, `AUTOMATION_RULES.md` |

---

## Objetivo

Planejar a evolução do MOBS em versões.  
Nenhuma versão abaixo está implementada nesta etapa — apenas priorizada.

---

## Princípios do roadmap

- Cada versão entrega **uma** capacidade clara (ou um conjunto mínimo coeso).
- Documentação e aprovação **antes** do código.
- Preferir genérico (ecossistema) a específico (um produto).
- Não pular validação e idempotência.

---

## Linha do tempo planejada

```
v1   Brand Engine (+ fundação do MOBS Core e Project Engine como contexto)
 ↓
v2   Asset Generator
 ↓
v3   Documentation Builder
 ↓
v4   Validator
 ↓
v5   SEO Builder
 ↓
v6   PWA Builder
 ↓
v7   Release Manager
 ↓
v8   Deploy Engine
 ↓
v9   AI Helpers
 ↓
v10  Future modules
```

Classificar cada entrega como **Core**, **Engine**, **Generator** ou **Validator** conforme `BUILD_SYSTEM.md`.
---

## Detalhamento por versão

| Versão | Nome | Objetivo |
|---|---|---|
| **v1** | Brand Engine + contexto | Core mínimo + Project Engine (contexto) + Brand Engine; resolver marcas/projetos sem hardcode |
| **v2** | Asset Generator | Generator: exports derivados a partir dos mestres |
| **v3** | Documentation Builder | Engine: templates e sincronização documental por projeto |
| **v4** | Validator | Validator: integridade de configs, paths, nomenclatura e referências |
| **v5** | SEO Builder | Generator/Engine conforme spec futura |
| **v6** | PWA Builder | Generator/Engine conforme spec futura |
| **v7** | Release Manager | Engine: versionamento, checklists, propostas de CHANGELOG/HISTORY |
| **v8** | Deploy Engine | Engine: publicação configurável |
| **v9** | AI Helpers | Assistentes que leem MOBS/Index/Rules; não inventam processo |
| **v10** | Future modules | Expansões em `future/` |

---

## Critério de avanço

Uma versão só avança para implementação quando:

1. Está descrita neste roadmap (ou em `future/` com link aqui).
2. Possui regras cobertas por `AUTOMATION_RULES.md`.
3. Foi aprovada pelo responsável.
4. Tem contrato de config claro (schema).
5. Define logs e comportamento idempotente.

---

## Estado atual

| Item | Estado |
|---|---|
| Arquitetura documental MOBS | **Aprovada** v0.1.1 (2026-07-20) — apenas documentação |
| **MOBS 0.2 — Configuration Contracts** | `docs/mobs/domain/DOMAIN_MODEL.md` + `docs/mobs/contracts/CONFIGURATION_CONTRACTS.md` + `docs/mobs/contracts/PROJECT_CONTRACT.md` + `docs/mobs/contracts/BRAND_CONTRACT.md` + `docs/mobs/governance/ARCHITECTURE_TASK_PROTOCOL.md` (contratos concretos irmãos; protocolo de tarefas; **sem** schemas ainda) |
| **MOBS 0.2 — Fase 1 (estrutura documental)** | `docs/mobs/governance/DOCUMENT_ARCHITECTURE.md` + `docs/mobs/governance/DOCUMENT_STRUCTURE_PLAN.md` — **institucionalizada** |
| **MOBS 0.2 — Fase 2** | Fundação, domínio e contratos em `docs/mobs/` — **concluída** |
| **MOBS 0.2 — Fase 3** | Governança em `docs/mobs/governance/` — **concluída** |
| **MOBS 0.2 — Fase 4** | Etapa **estrutural**: raiz local `missao-oab` → `missao-mobs`. Referências versionadas preparadas; **renomeação física da pasta pendente** (workspace em uso). **Não** é migração de `docs/product` nem renomeação do produto Missão OAB. |
| **Próximo ciclo fundador** | **Core** — somente após encerramento verificado da Fase 4 |
| v1–v10 implementação | Não iniciada |
| Scripts oficiais | Nenhum |

### Nota sobre Configuration Contracts

Antes de schemas e implementação de serializações de projeto/marca, a sequência documental está em `docs/mobs/domain/DOMAIN_MODEL.md` → `docs/mobs/contracts/CONFIGURATION_CONTRACTS.md` → (`docs/mobs/contracts/PROJECT_CONTRACT.md` ∥ `docs/mobs/contracts/BRAND_CONTRACT.md`).
Essa sequência **não substitui** a linha v1–v10 deste roadmap; **precede** schemas e serialização.
Este roadmap **não** governa ciclos fundadores paralelos (Partnership, Core); apenas registra o estado quando necessário para não contradizer a história.

### Nota sobre Fase 1 (estrutura documental)

`docs/mobs/governance/DOCUMENT_STRUCTURE_PLAN.md` materializa paths alvo e política de nascimento sob `docs/mobs/governance/DOCUMENT_ARCHITECTURE.md`.
Fases 2 e 3 de migração documental **concluídas**.
Fase 4, nesta decisão do fundador, é **estrutural (renomeação da raiz)** — distinta da antiga proposta de reorganizar produto/design sob `docs/products/missao-oab/` (ainda futura, se autorizada).
Enquanto a pasta física não for `missao-mobs` e revalidada, a Fase 4 **não** está encerrada.
IDs oficiais de **produto/marca** atuais: `product-id` = `brand-id` = `missao-oab` (namespaces distintos; preservados).
Contratos permanecem em `docs/mobs/contracts/` (constituição e concretos no mesmo diretório; sem subpasta `constitution/`).

---

## Como propor uma nova versão

1. Documentar a Engine em `future/` (ou seção deste arquivo).
2. Garantir que é genérica ao ecossistema.
3. Solicitar aprovação.
4. Só então implementar.
