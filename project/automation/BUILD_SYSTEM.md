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

O **Project Engine** é a **camada de contexto anterior** aos demais módulos:

```
project.json
    ↓
Project Engine          ← contexto do projeto
    ↓
MOBS Core               ← orquestra (seleciona, ordena, consolida)
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
Logs consolidados + resultados
```

Ordem típica de execução (quando habilitados):

```
Project Engine
    → Brand Engine
    → Validation Engine
    → Documentation Engine / Asset Generator / Release Engine
    → (Future modules)
```

A ordem exata é definida pelo Core conforme dependências declaradas — não por hardcode de produto.

---

## MOBS Core — fronteiras

### O Core deverá

- carregar configurações (`project.json`, e indiretamente `brand.json` via Brand Engine);
- validar dependências entre módulos e configs;
- selecionar módulos habilitados;
- ordenar a execução;
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

---

## Detalhamento conceitual

### Project Engine (contexto primeiro)

Entrada: `projectId` / `project.json`.  
Saída: contexto do projeto (paths, módulos habilitados, vínculo com marca).  

→ `PROJECT_ENGINE.md`

### Brand Engine

Entrada: `brandId` (geralmente vindo do contexto do projeto).  
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
│     carregar · dependências · selecionar ·       │
│           ordenar · consolidar logs              │
├─────────────────────────────────────────────────┤
│              Project Engine (contexto)            │
├──────────┬──────────┬──────────┬────────────────┤
│  Brand   │  Docs    │ Validate │ Asset          │ ...
│  Engine  │  Engine  │ (Valid.) │ Generator      │
├──────────┴──────────┴──────────┴────────────────┤
│      Project configs     │    Brand configs       │
└─────────────────────────────────────────────────┘
```

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
