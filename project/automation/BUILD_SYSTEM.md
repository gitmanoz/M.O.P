# BUILD SYSTEM — Arquitetura MOBS

| Campo | Valor |
|---|---|
| **Documento** | BUILD_SYSTEM.md |
| **Versão** | 0.1.1 (Arquitetura) |
| **Status** | Oficial — apenas documentação |
| **Depende de** | `MOBS.md` |

---

## Objetivo

Descrever a arquitetura do motor MOBS: um **único sistema** composto pelo **Core/Orchestrator** e por **módulos** tipados (Engines, Generators, Validators), acionados por configuração de projeto e de marca.

Este documento não implementa nada. Define o mapa e as fronteiras.

---

## Taxonomia oficial de módulos

O MOBS diferencia formalmente quatro categorias:

| Categoria | Papel | Exemplos |
|---|---|---|
| **Core / Orchestrator** | Carrega config, valida dependências, seleciona módulos, ordena execução, consolida logs e resultados | MOBS Core |
| **Engine** | Resolve **contexto** ou domínio sem gerar artefatos em massa; expõe dados e contratos para outros módulos | Project Engine, Brand Engine, Documentation Engine, Release Engine |
| **Generator** | **Produz artefatos derivados** a partir de fontes oficiais + config | Asset Generator; futuros SEO/PWA generators |
| **Validator** | **Verifica integridade** e emite pass/fail; não gera produto final | Validation Engine (categoria Validator) |

### Regras da taxonomia

- Um módulo tem **uma** categoria principal.
- Generators **não** carregam regras de marca/projeto no código — leem o que Engines e o Core já resolveram.
- Validators **não** escrevem Source of Truth.
- Engines de contexto (**Project**, **Brand**) não geram exports nem docs em massa.
- O **Core** não é Engine, Generator nem Validator — é o orquestrador.

---

## Fluxo conceitual oficial

O **MOBS Core** é o orquestrador. Engines de contexto são acionadas **pelo Core**, não fora dele.

No **fluxo centrado em Projeto**, a **Project Engine** é a primeira Engine de contexto de projeto.

Quando **somente a Marca** estiver em jogo, a **Brand Engine** pode ser acionada pelo Core **independentemente da Project Engine** — conforme o domínio e o contrato de Marca. Este documento **não** define o mecanismo de escolha do primeiro resolvedor nesse fluxo.

O diagrama abaixo ilustra o fluxo centrado em Projeto.

Ilustração do **fluxo centrado em Projeto** — não ordem operacional canônica de todos os fluxos.

```
Interface / CLI / CI / IA
    ↓
MOBS Core carrega project.json
    ↓
MOBS Core aciona Project Engine (primeira Engine de contexto de projeto)
    ↓
Project Engine resolve o contexto do projeto
    ↓
MOBS Core seleciona, ordena e executa os demais módulos
    ↓
┌───────────────────────────────────────────────────┐
│  Brand Engine                                      │
│  Documentation Engine                              │
│  Asset Generator                                   │
│  Validation Engine (Validator)                     │
│  Release Engine                                    │
│  (+ Future modules)                                │
└───────────────────────────────────────────────────┘
    ↓
Logs e resultados consolidados
```

Princípios:

- O Core não contém regras específicas de projeto ou marca.
- No fluxo centrado em Projeto, o Core carrega a configuração inicial e **delega** à Project Engine a resolução do contexto de projeto.
- Após receber o contexto resolvido, o Core **continua** a orquestração.

Ordem típica de execução no **fluxo centrado em Projeto** (quando habilitados) — ilustrativa; **não** ordem operacional canônica de todos os fluxos; o momento de cada módulo habilitado, inclusive do Validator, permanece conforme dependências declaradas.

```
MOBS Core
  → Project Engine (contexto)
  → Brand Engine
  → Validation Engine
  → Documentation Engine / Asset Generator / Release Engine
  → (Future modules)
  → Core consolida logs e resultados
```

A ordem exata dos módulos habilitados é definida pelo Core conforme dependências declaradas — não por hardcode de produto.

---

## MOBS Core — fronteiras

### O Core deverá

- carregar o identificador/configuração inicial (`project.json`);
- no fluxo centrado em Projeto, acionar a Project Engine como primeira Engine de contexto de projeto e receber o contexto resolvido;
- acionar a Brand Engine quando o fluxo autorizado o exigir (após vínculo de projeto, ou **independentemente da Project Engine** quando só a Marca estiver em jogo), sem interpretar a Marca;
- preservar a **integridade orquestracional**, inclusive validando dependências entre módulos e configs (isto **não** substitui Validators nem conformidade profunda de domínio);
- selecionar módulos habilitados;
- ordenar a execução dos demais módulos;
- consolidar logs e resultados.


### O Core não deverá

- gerar assets diretamente;
- alterar documentação diretamente;
- possuir regras específicas de marcas;
- possuir regras específicas de projetos.

O Core conhece apenas **contratos genéricos** (IDs, paths, flags de módulos).  
Conteúdo de marca e de projeto vive nas configs e nas Engines de contexto.

---

## Mapa de módulos

| Módulo | Categoria | Responsabilidade única |
|---|---|---|
| **MOBS Core** | Core / Orchestrator | Orquestração genérica (ver fronteiras acima) |
| **Project Engine** | Engine (contexto) | Resolver projeto, expor contexto e associação à marca |
| **Brand Engine** | Engine (contexto) | Resolver marca, expor caminhos e metadados oficiais |
| **Documentation Engine** | Engine | Sincronizar/gerar docs repetíveis via templates + config |
| **Validation Engine** | Validator | Integridade de configs, paths, nomenclatura, referências |
| **Asset Generator** | Generator | Derivar exports/favicon/social/og/app a partir dos mestres |
| **Release Engine** | Engine | Checklists, empacote conceitual, propostas de release |
| **Future modules** | conforme tipo | SEO, PWA, Deploy, AI Helpers — ver roadmap |

**Contextualização** (conforme o fluxo autorizado): no fluxo centrado em Projeto, a **Project Engine**; quando a Marca estiver em jogo, a **Brand Engine** (após vínculo de projeto, ou acionada pelo Core independentemente da Project Engine).

Os demais módulos do mapa (incluindo Validation Engine, Documentation Engine, Asset Generator, Release Engine e futuros) **não** são pré-requisitos universais do Core mínimo: participam quando **habilitados**, conforme **dependências declaradas**. A forma física dessas declarações permanece em aberto. O **momento** de participação de cada módulo na fila — inclusive do Validator — **não** fica fixado aqui.

---

## Detalhamento conceitual

### Project Engine (primeira Engine de contexto **de projeto**)

Acionada pelo MOBS Core.  
Entrada: `projectId` / `project.json` (via Core).  
Saída: contexto do projeto (paths, módulos habilitados, vínculo com marca), devolvido ao Core.  

→ `PROJECT_ENGINE.md`

### Brand Engine

Entrada: identificador/configuração de marca (via contexto de projeto quando houver vínculo, ou por entrada do fluxo somente Marca).
Saída: metadados e caminhos da marca.  
Nunca redesenha. Nunca edita SVG mestre sem autorização explícita.

→ `BRAND_ENGINE.md`

### Documentation Engine

Entrada: contexto de projeto + templates aprovados.  
Saída: docs gerados/sincronizados nos locais da config.  
Não substitui PRD/Brand Book humanos.

### Validation Engine (Validator)

Entrada: contexto de projeto e/ou marca.  
Saída: relatório pass/fail.  
Não gera assets nem altera mestres.

### Asset Generator (Generator)

Entrada: contexto de marca (+ perfis de export).  
Saída: derivados em `exports/` e pastas correlatas.  
Nunca escreve em `source/` mestres sem autorização.

→ `ASSET_GENERATOR.md` (primeira fatia v2: master declarado → PNG → `exports/`)

### Release Engine

Entrada: contexto de projeto + versão alvo.  
Saída: checklist, propostas de CHANGELOG/HISTORY (gravação só com aprovação humana).

### Future modules

Reservados em `future/` e no roadmap.

---

## Camadas da arquitetura

```
┌─────────────────────────────────────────────────┐
│            Interfaces (CLI / CI / IA)             │
├─────────────────────────────────────────────────┤
│                   MOBS Core                       │
│  carregar project.json · acionar Engines ·       │
│  selecionar · ordenar · consolidar logs          │
│                                                   │
│   1) Project Engine  ← primeira Engine de         │
│      contexto de projeto                          │
│   2) Demais módulos habilitados conforme          │
│      dependências declaradas (ex.: Brand, Docs,   │
│      Validate, Asset, Release) — não              │
│      pré-requisitos universais do Core mínimo     │
├─────────────────────────────────────────────────┤
│      Project configs     │    Brand configs       │
└─────────────────────────────────────────────────┘
```

No fluxo centrado em Projeto, a Project Engine é a primeira Engine de contexto acionada pelo Core — e **não** opera fora do Core. Toda Engine continua sendo acionada pelo Core.

---

## O que o Build System não faz

- Não embute regras de negócio de um único produto.
- Não substitui governança (`PROJECT_RULES`, aprovações).
- Não altera Source of Truth de marca sem fluxo autorizado.
- Não exige que todo projeto use todos os módulos no dia um.
- Não confunde Core com Generator ou Validator.

---

## Extensão

Novos módulos:

1. Classificar como Engine, Generator ou Validator.
2. Documentar em `AUTOMATION_ROADMAP.md` e, se necessário, em `future/`.
3. Aprovar via `AUTOMATION_RULES.md`.
4. Implementar de forma genérica (config-driven).
5. Registrar neste mapa.

Nunca criar “módulo da Missão OAB”. Criar módulo de domínio usável por qualquer projeto/marca.
