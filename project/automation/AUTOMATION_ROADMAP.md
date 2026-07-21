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
| **MOBS 0.2 — Configuration Contracts** | `DOMAIN_MODEL.md` + `CONFIGURATION_CONTRACTS.md` (constituição; **sem** contratos concretos/schemas ainda) |
| v1–v10 implementação | Não iniciada |
| Scripts oficiais | Nenhum |

### Nota sobre Configuration Contracts

Antes de schemas e implementação de serializações de projeto/marca, a sequência documental está em `DOMAIN_MODEL.md` e `CONFIGURATION_CONTRACTS.md`.
Essa sequência **não substitui** a linha v1–v10 deste roadmap; **precede** contratos concretos e serialização.

---

## Como propor uma nova versão

1. Documentar a Engine em `future/` (ou seção deste arquivo).
2. Garantir que é genérica ao ecossistema.
3. Solicitar aprovação.
4. Só então implementar.
