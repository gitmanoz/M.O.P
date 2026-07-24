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
A v1 está **concluída** no alcance oficial Projeto → Marca associado; as versões `v2`–`v10` permanecem em evolução planejada.

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
| **MOBS 0.2 — Configuration Contracts** | `docs/mobs/domain/DOMAIN_MODEL.md` + `docs/mobs/contracts/CONFIGURATION_CONTRACTS.md` + `docs/mobs/contracts/PROJECT_CONTRACT.md` + `docs/mobs/contracts/BRAND_CONTRACT.md` + `docs/mobs/governance/ARCHITECTURE_TASK_PROTOCOL.md`; schemas mínimos de Projeto e Marca materializados para a primeira fatia executável |
| **MOBS 0.2 — Fase 1 (estrutura documental)** | `docs/mobs/governance/DOCUMENT_ARCHITECTURE.md` + `docs/mobs/governance/DOCUMENT_STRUCTURE_PLAN.md` — **institucionalizada** |
| **MOBS 0.2 — Fase 2** | Fundação, domínio e contratos em `docs/mobs/` — **concluída** |
| **MOBS 0.2 — Fase 3** | Governança em `docs/mobs/governance/` — **concluída** |
| **MOBS 0.2 — Fase 4** | Etapa **estrutural concluída**: raiz local `missao-oab` → `missao-mobs` (validada). **Não** é migração de `docs/product` nem renomeação do produto Missão OAB. |
| **Ciclo fundador do Core** | **Validação fundadora concluída** — Coverage Harvest, Autonomy Validation, veredito institucional e Stabilization Gate: **Pass** no baseline `8c2e4c5f9eb78cd9b4a37ec2b741b1031d6986d8`; alcance restrito ao walkthrough documental da landing, centrado no Projeto Missão OAB, com Marca explicitamente requerida |
| **Resolução de contextos v1 — Harvest** | Evidence Harvest + Responsibility Harvest **concluídos** no baseline `7a40a93f5279e9138e67805470fc2d5b93097590`; questão mantida aberta, sem nascimento de `RESOLUTION_MODEL.md`, sem expansão de `CONFIGURATION_CONTRACTS.md` e sem necessidade demonstrada de `CAPABILITY_MODEL.md` |
| **v1 — implementação** | **Concluída** no alcance oficial Projeto → Marca associado — fatia `2b0d8cfbf84256a846841c165b8272b3d376f71b`; baseline documental `2ba5e8e2c3b6d2b85ca01c0db7f230da6ef19f78`; Core, Project Engine e Brand Engine sem hardcode de produto; schemas mínimos, diagnóstico factual, somente leitura, portabilidade e idempotência comprovados por 20 testes; nenhuma nova fatia executável necessária |
| **v2–v10 — implementação** | Não iniciada |
| **CLI executável** | Interface somente leitura, reproduzível e idempotente do fluxo Projeto → Marca associado; build, typecheck e 20 testes aprovados |

### Nota sobre Configuration Contracts

A sequência documental `docs/mobs/domain/DOMAIN_MODEL.md` → `docs/mobs/contracts/CONFIGURATION_CONTRACTS.md` → (`docs/mobs/contracts/PROJECT_CONTRACT.md` ∥ `docs/mobs/contracts/BRAND_CONTRACT.md`) fundamenta os schemas mínimos já materializados e continua governando sua evolução.
Essa sequência **não substitui** a linha v1–v10 deste roadmap nem implica conclusão universal de schemas e serializações.
Este roadmap **não** governa ciclos fundadores paralelos (Partnership, Core); apenas registra o estado quando necessário para não contradizer a história.

### Nota sobre resolução de contextos v1

O Harvest concluiu que as autoridades vigentes cobrem suficientemente as responsabilidades de Core, Project Engine, Brand Engine e Validators no nível conceitual. `RESOLUTION_MODEL.md` permanece candidato futuro, não autorizado neste estado.

O checkpoint `2b0d8cfbf84256a846841c165b8272b3d376f71b` materializou a fatia Projeto → Marca associado suficiente para encerrar a v1. Brand-only, Projeto sem Marca e outras variações continuam conceitualmente autorizados; seus mecanismos executáveis permanecem abertos e não bloqueiam a conclusão. Transporte, timing de Validators institucionais e o mecanismo do fluxo somente Marca (`MOBS_CORE`) permanecem abertos. Assets, Generators, Validators institucionais e Release permanecem fora da v1.

### Nota sobre Fase 1 (estrutura documental)

`docs/mobs/governance/DOCUMENT_STRUCTURE_PLAN.md` materializa paths alvo e política de nascimento sob `docs/mobs/governance/DOCUMENT_ARCHITECTURE.md`.
Fases 2 e 3 de migração documental **concluídas**.
Fase 4 (identidade da raiz `missao-mobs`) **concluída** — distinta da consolidação produto/design sob `docs/products/missao-oab/` (ainda futura, se autorizada).
IDs oficiais de **produto/marca** atuais: `product-id` = `brand-id` = `missao-oab` (namespaces distintos; preservados).
Contratos permanecem em `docs/mobs/contracts/` (constituição e concretos no mesmo diretório; sem subpasta `constitution/`).

---

## Como propor uma nova versão

1. Documentar a Engine em `future/` (ou seção deste arquivo).
2. Garantir que é genérica ao ecossistema.
3. Solicitar aprovação.
4. Só então implementar.
