# Plano de Estrutura Física da Documentação MOBS — Fase 1

> Este documento materializa a estrutura física alvo sob a autoridade de [`DOCUMENT_ARCHITECTURE.md`](DOCUMENT_ARCHITECTURE.md).
> Não redefine princípios de arquitetura documental. Não executa migração.

| Campo | Valor |
|---|---|
| **Fase** | MOBS 0.2 — Fase 1 (estrutura alvo + política de nascimento) |
| **Autoridade superior** | [`DOCUMENT_ARCHITECTURE.md`](DOCUMENT_ARCHITECTURE.md) |
| **Processo** | [`ARCHITECTURE_TASK_PROTOCOL.md`](ARCHITECTURE_TASK_PROTOCOL.md) |
| **Migração de legado** | **Não** — nesta fase |

---

## 1. Propósito e autoridade

### Propósito

Formalizar a **estrutura física alvo** da documentação MOBS e a **política de nascimento** de novos documentos — sem mover arquivos existentes.

A Fase 1 responde:

- onde está a documentação hoje;
- como cada item se classifica nos grupos oficiais;
- onde **novos** documentos devem nascer após aprovação deste plano;
- como o legado migrará em fases posteriores.

### Autoridade

| Documento | Relação |
|---|---|
| [`DOCUMENT_ARCHITECTURE.md`](DOCUMENT_ARCHITECTURE.md) | **Autoridade** — grupos, princípios, fases de migração |
| Este plano | **Materialização** — paths concretos, inventário, matriz atual × alvo |
| [`ARCHITECTURE_TASK_PROTOCOL.md`](ARCHITECTURE_TASK_PROTOCOL.md) | **Processo** — aprovação, validação, commit |

Este plano **não** altera domínio, contratos, governança operacional nem responsabilidades arquiteturais dos documentos superiores.

---

## 2. Inventário da estrutura atual

Inventário em **2026-07-21** (atualizado pós-Fases 2 e 3) — somente documentação e assets institucionais relevantes.

### Raiz do repositório

| Arquivo | Tipo |
|---|---|
| `PROJECT_INDEX.md` | Descoberta |
| `AI_CONTEXT.md` | Descoberta |
| `PROJECT_RULES.md` | Governança operacional |
| `HISTORY.md` | Histórico |
| `CHANGELOG.md` | Histórico |
| `DESIGN_GUIDE.md` | Design System (produto Missão OAB) |
| `UI_KIT.md` | Design System (produto Missão OAB) |

### `docs/mobs/`

| Arquivo | Tipo |
|---|---|
| `foundation/WHY_MOBS.md` | MOBS — fundação |
| `domain/DOMAIN_MODEL.md` | MOBS — domínio |
| `contracts/CONFIGURATION_CONTRACTS.md` | MOBS — constituição de contratos |
| `contracts/PROJECT_CONTRACT.md` | MOBS — contrato concreto |
| `contracts/BRAND_CONTRACT.md` | MOBS — contrato concreto |
| `governance/ARCHITECTURE_TASK_PROTOCOL.md` | MOBS — governança arquitetural |
| `governance/DOCUMENT_ARCHITECTURE.md` | MOBS — governança documental |
| `governance/DOCUMENT_STRUCTURE_PLAN.md` | MOBS — governança documental (este) |
| `models/PARTNERSHIP_MODEL.md` | MOBS — modelo de parceria (fundador) |
| `models/AYLA_ARCHITECTURAL_PARTNER.md` | MOBS — perfil derivado (parceira arquitetural Ayla) |
| `models/PROGRAMMER_PARTNER.md` | MOBS — perfil derivado (parceiro programador / materialização) |
| `models/TEST_EXECUTION_MODEL.md` | MOBS — modelo de execução de testes institucionais / probes |

### `project/automation/`

| Arquivo | Tipo |
|---|---|
| `MOBS.md` | MOBS — plataforma |
| `BUILD_SYSTEM.md` | MOBS — Engine / taxonomia |
| `PROJECT_ENGINE.md` | MOBS — Engine |
| `BRAND_ENGINE.md` | MOBS — Engine |
| `AUTOMATION_ROADMAP.md` | MOBS — evolução e planejamento |
| `AUTOMATION_RULES.md` | MOBS — regras de automação |
| `future/README.md` | MOBS — specs futuras |

### `docs/product/`

| Arquivo | Tipo |
|---|---|
| `PRD.md` | Produto |
| `ROADMAP.md` | Produto |
| `BUSINESS_MODEL.md` | Produto |
| `USER_JOURNEY.md` | Produto |
| `GAMIFICATION.md` | Produto |

### `docs/brand/`

| Arquivo | Tipo |
|---|---|
| `BRAND_BOOK.md` | Marca institucional (produto) |
| `BRAND_VOICE.md` | Marca institucional (produto) |
| `COPYWRITING.md` | Marca institucional (produto) |

### `assets/brand/`

| Item | Tipo |
|---|---|
| `README.md` | Assets — metadados operacionais |
| `source/` | Assets — SVGs mestres (Source of Truth visual) |
| `reference/` | Assets — referência histórica |
| demais subpastas (`exports/`, `favicon/`, etc.) | Assets — derivados e canais |

### Fora do escopo documental MOBS (registro)

| Item | Nota |
|---|---|
| `index.html`, `css/`, `js/`, `img/` | Superfície web da landing — produto, não documentação MOBS |
| `.gitignore` | Configuração local — fora do escopo |

### Não classificados / ambíguos

Nenhum arquivo `.md` institucional relevante ficou sem grupo candidato.
Ambiguidades de **posicionamento futuro** — não de **grupo** — estão na seção 11.

---

## 3. Classificação documental

Classificação segundo grupos oficiais de [`DOCUMENT_ARCHITECTURE.md`](DOCUMENT_ARCHITECTURE.md) §6.

| Grupo | Documentos atuais | Observação |
|---|---|---|
| **Fundação** | `docs/mobs/foundation/WHY_MOBS.md` | — |
| **Plataforma** | `project/automation/MOBS.md` | — |
| **Domínio** | `docs/mobs/domain/DOMAIN_MODEL.md` | — |
| **Constituição de contratos** | `docs/mobs/contracts/CONFIGURATION_CONTRACTS.md` | — |
| **Contratos concretos** | `docs/mobs/contracts/PROJECT_CONTRACT.md`, `docs/mobs/contracts/BRAND_CONTRACT.md` | Irmãos; não hierárquicos entre si |
| **Modelos arquiteturais** | `docs/mobs/models/PARTNERSHIP_MODEL.md`, `TEST_EXECUTION_MODEL.md`; perfis derivados `AYLA_ARCHITECTURAL_PARTNER.md`, `PROGRAMMER_PARTNER.md` | `RESOLUTION_MODEL`, `CAPABILITY_MODEL` — futuros |
| **Schemas** | *(nenhum ainda)* | Futuro |
| **Engines** | `BUILD_SYSTEM.md`, `PROJECT_ENGINE.md`, `BRAND_ENGINE.md` | Taxonomia + Engines de contexto |
| **Governança arquitetural** | `docs/mobs/governance/ARCHITECTURE_TASK_PROTOCOL.md` | — |
| **Governança documental** | `docs/mobs/governance/DOCUMENT_ARCHITECTURE.md`, `docs/mobs/governance/DOCUMENT_STRUCTURE_PLAN.md` | — |
| **Governança operacional** | `PROJECT_RULES.md` | Repositório inteiro, não só MOBS |
| **Descoberta** | `PROJECT_INDEX.md`, `AI_CONTEXT.md` | Bootloader — **permanência definitiva na raiz** |
| **Evolução e planejamento** | `AUTOMATION_ROADMAP.md`, `project/automation/future/` | — |
| **Regras de automação** | `AUTOMATION_RULES.md` | — |
| **Histórico** | `HISTORY.md`, `CHANGELOG.md` | **Permanência definitiva na raiz** |
| **Produto** | `docs/product/*` | Escopo Missão OAB (primeiro produto) |
| **Marca institucional (produto)** | `docs/brand/*` | Distinto de `BRAND_CONTRACT` (domínio MOBS) |
| **Design System** | `DESIGN_GUIDE.md`, `UI_KIT.md` | Produto Missão OAB; hoje na raiz |
| **Assets** | `assets/brand/` | Primeira marca real; alvo multi-marca em `BRAND_ENGINE` |

### Pontos de decisão (não classificados por conveniência)

| Tema | Situação | Decisão |
|---|---|---|
| `BUILD_SYSTEM.md` | Listado como Engine em `DOCUMENT_ARCHITECTURE`; também descreve taxonomia global | Mantém grupo **Engines**; não promover a grupo próprio |
| `DESIGN_GUIDE` / `UI_KIT` na raiz | Claramente produto; localização histórica | Grupo **Design System**; path alvo sob produto — seção 4 |
| `docs/product/` vs `docs/products/<id>/` | Singular hoje; multi-produto futuro | Path alvo plural; legado migra em tarefa futura (não Fase 4 estrutural) |
| Descoberta na raiz | Bootloader de todo o repositório | **Permanência definitiva na raiz** — decisão fechada |

---

## 4. Estrutura física alvo

Namespace raiz proposto: **`docs/mobs/`** para documentação MOBS consolidada por responsabilidade.
**`project/automation/`** permanece como hub de Engines, automação e evolução técnica.
**`docs/products/<id>/`** para documentação por produto.
**`assets/brands/<id>/`** para materialização visual por marca (domínio).

### Árvore alvo (conceitual)

```text
docs/mobs/
  foundation/
  domain/
  contracts/
  models/
  schemas/
  governance/

project/automation/
  MOBS.md
  BUILD_SYSTEM.md
  PROJECT_ENGINE.md
  BRAND_ENGINE.md
  AUTOMATION_ROADMAP.md
  AUTOMATION_RULES.md
  future/

docs/products/
  <product-id>/
    product/
    brand/
    design/

assets/brands/
  <brand-id>/

PROJECT_INDEX.md          ← descoberta (permanência definitiva na raiz)
AI_CONTEXT.md             ← descoberta (permanência definitiva na raiz)
PROJECT_RULES.md          ← governança operacional (permanência definitiva na raiz)
HISTORY.md                ← histórico (permanência definitiva na raiz)
CHANGELOG.md              ← histórico (permanência definitiva na raiz)
```

### Convenção de nomes de paths

IDs de diretório em paths parametrizados (`<product-id>`, `<brand-id>`, `<contract-id>`) **devem**:

- usar **minúsculas**;
- usar **kebab-case** (`missao-oab`, não `MissaoOAB` nem `missao_oab`);
- **não** conter espaços, acentos ou caracteres especiais;
- permanecer **estáveis** após adoção;
- derivar do **identificador canônico** da entidade no domínio ou no contrato futuro.

| Namespace | Significado | Pode coincidir com |
|---|---|---|
| `<product-id>` | Produto no ecossistema | — |
| `<brand-id>` | Marca no domínio MOBS (assets) | Pode ser igual a `product-id` sem ser a mesma entidade |
| `<contract-id>` | Contrato concreto (schemas) | Slug do contrato, ex.: `project`, `brand` |

**Oficial para o estado atual:**

| Namespace | ID canônico |
|---|---|
| `product-id` | `missao-oab` |
| `brand-id` | `missao-oab` |

Exemplos com IDs oficiais:

- `docs/products/missao-oab/product/PRD.md`
- `docs/products/missao-oab/brand/BRAND_BOOK.md`
- `assets/brands/missao-oab/source/`
- `docs/mobs/schemas/project/` (schema do contrato de projeto — `contract-id`: `project`)

`product-id` e `brand-id` são **namespaces distintos**. Valores iguais não implicam mesma entidade.

### Paths oficiais por grupo

| Grupo | Path alvo | Justificativa |
|---|---|---|
| **Fundação** | `docs/mobs/foundation/` | Isola propósito estratégico; um manifesto por arquivo |
| **Plataforma** | `project/automation/MOBS.md` | **Permanece** — já é hub da plataforma; mover adiciona indireção sem ganho |
| **Domínio** | `docs/mobs/domain/` | Gramática conceitual centralizada |
| **Constituição de contratos** | `docs/mobs/contracts/CONFIGURATION_CONTRACTS.md` | Mesmo diretório dos contratos concretos; **sem** subpasta `constitution/` |
| **Contratos concretos** | `docs/mobs/contracts/` | Irmãos no mesmo namespace (`PROJECT_CONTRACT.md`, `BRAND_CONTRACT.md`, futuros) |
| **Modelos arquiteturais** | `docs/mobs/models/` | Transversais; distintos de contratos de entidade |
| **Schemas** | `docs/mobs/schemas/` | Derivados de contratos; separados de modelos conceituais |
| **Engines** | `project/automation/` | Já estabelecido; convenção `*_ENGINE.md`, `BUILD_SYSTEM.md` |
| **Governança arquitetural** | `docs/mobs/governance/` | Processo arquitetural junto à governança documental |
| **Governança documental** | `docs/mobs/governance/` | `DOCUMENT_ARCHITECTURE`, `DOCUMENT_STRUCTURE_PLAN`, futuros planos |
| **Governança operacional** | `PROJECT_RULES.md` (raiz) | Abrange todo o repositório — **permanência definitiva na raiz** |
| **Descoberta** | Raiz (`PROJECT_INDEX.md`, `AI_CONTEXT.md`) | Bootloader — **permanência definitiva na raiz** |
| **Evolução e planejamento** | `project/automation/` + `future/` | Roadmap com Engines; specs em `future/` |
| **Regras de automação** | `project/automation/AUTOMATION_RULES.md` | **Permanece** — acoplamento legítimo à automação |
| **Histórico** | Raiz (`HISTORY.md`, `CHANGELOG.md`) | Acesso universal — **permanência definitiva na raiz** |
| **Produto** | `docs/products/<product-id>/product/` | Um namespace por produto; escala sem colisão |
| **Marca institucional (produto)** | `docs/products/<product-id>/brand/` | Junto ao produto; distinto de contrato MOBS |
| **Design System** | `docs/products/<product-id>/design/` | Por produto; remove `DESIGN_GUIDE`/`UI_KIT` da raiz na migração |
| **Assets** | `assets/brands/<brand-id>/` | Alinhado a `BRAND_ENGINE`; multi-marca nativo |

### Profundidade

Máximo **quatro** níveis úteis abaixo da raiz para documentação (`docs/products/missao-oab/product/PRD.md`).
Evita pastas intermediárias sem responsabilidade própria.

### Fronteira MOBS × Produto

| Conteúdo | Nunca em | Sempre em |
|---|---|---|
| Contrato de Marca (domínio) | `docs/brand/` | `docs/mobs/contracts/` |
| Brand Book (institucional) | `docs/mobs/` | `docs/products/<id>/brand/` |
| Engine MOBS | `docs/product/` | `project/automation/` |

---

## 5. Justificativa dos paths

1. **`docs/mobs/`** — concentra documentação MOBS por responsabilidade sem poluir a raiz; crescimento vertical previsível.
2. **`docs/mobs/contracts/`** — contratos irmãos no mesmo namespace; constituição e concretos co-localizados por domínio de “acordos”.
3. **`docs/mobs/models/`** e **`docs/mobs/schemas/`** — separação conceitual modelo (significado transversal) vs schema (validação mecânica).
4. **`project/automation/` mantido** — Engines e automação já vivem aqui; mover `MOBS.md` ou `AUTOMATION_RULES` custaria mais do que beneficia na Fase 1.
5. **Raiz para descoberta e histórico** — `PROJECT_INDEX` como bootloader universal; histórico acessível sem navegar árvore MOBS.
6. **`docs/products/<id>/`** — escala multi-produto; substitui `docs/product/` e `docs/brand/` planos em tarefa futura (não confundir com Fase 4 estrutural da raiz).
7. **`assets/brands/<id>/`** — já previsto conceitualmente; elimina ambiguidade `assets/brand/` singular.

---

## 6. Política para novos documentos

**A partir da aprovação desta Fase 1**, novos documentos nascem **diretamente no path alvo**.
O legado **permanece** até a fase de migração correspondente.

| Tipo de documento | Path de nascimento | Pré-requisito |
|---|---|---|
| Novo contrato concreto | `docs/mobs/contracts/<NOME>_CONTRACT.md` | Domínio + constituição + protocolo |
| Novo modelo arquitetural | `docs/mobs/models/<NOME>_MODEL.md` | Domínio; não duplicar contrato |
| Novo schema | `docs/mobs/schemas/<contract-id>/<arquivo>` | Contrato concreto aprovado |
| Nova Engine documental | `project/automation/<NOME>_ENGINE.md` | `MOBS.md`, `BUILD_SYSTEM.md` |
| Novo roadmap / spec futura | `project/automation/` ou `future/` | `AUTOMATION_ROADMAP` |
| Novo doc de governança arquitetural | `docs/mobs/governance/` | `ARCHITECTURE_TASK_PROTOCOL` |
| Novo doc de governança documental | `docs/mobs/governance/` | `DOCUMENT_ARCHITECTURE` |
| Novo produto | `docs/products/<product-id>/product/` | Escopo de produto definido |
| Nova marca institucional (produto) | `docs/products/<product-id>/brand/` | Distinto de contrato MOBS |
| Novo Design System | `docs/products/<product-id>/design/` | Produto identificado |
| Novos assets de marca | `assets/brands/<brand-id>/` | `BRAND_CONTRACT` / domínio |
| Fundação / domínio (raro) | `docs/mobs/foundation/`, `docs/mobs/domain/` | Tarefa arquitetural dedicada |

### Vigência da política de nascimento

A política de nascimento desta Fase 1 entra em vigor **oficialmente** somente após, em sequência:

1. aprovação humana deste plano;
2. integração documental (descoberta e registro histórico);
3. commit em `main`;
4. push para `origin/main`.

Até lá, novos documentos MOBS devem seguir o plano como **diretriz aprovada** — a vigência plena marca o início da Fase 1 institucionalizada.

### Regras

1. **Não** criar documento MOBS na raiz — exceto descoberta, operação e histórico quando aplicável.
2. **Não** criar pasta alvo vazia “para o futuro”.
3. **Integrar descoberta** em tarefa própria após nascimento (`PROJECT_INDEX`, `AI_CONTEXT`, `MOBS.md`).
4. Pastas `docs/mobs/*` **só existem** quando o primeiro arquivo do grupo for criado — salvo migração aprovada.

---

## 7. Matriz atual × alvo

| Grupo / documento | Local atual | Path alvo | Risco | Dependências | Fase migração |
|---|---|---|---|---|---|
| `WHY_MOBS.md` | `docs/mobs/foundation/` | **permanece** | — | — | **Concluída (2)** |
| `DOMAIN_MODEL.md` | `docs/mobs/domain/` | **permanece** | — | — | **Concluída (2)** |
| `CONFIGURATION_CONTRACTS.md` | `docs/mobs/contracts/` | **permanece** | — | — | **Concluída (2)** |
| `PROJECT_CONTRACT.md` | `docs/mobs/contracts/` | **permanece** | — | — | **Concluída (2)** |
| `BRAND_CONTRACT.md` | `docs/mobs/contracts/` | **permanece** | — | — | **Concluída (2)** |
| `ARCHITECTURE_TASK_PROTOCOL.md` | `docs/mobs/governance/` | **permanece** | — | — | **Concluída (3)** |
| `DOCUMENT_ARCHITECTURE.md` | `docs/mobs/governance/` | **permanece** | — | — | **Concluída (3)** |
| `DOCUMENT_STRUCTURE_PLAN.md` | `docs/mobs/governance/` | **permanece** | — | — | **Concluída (3)** |
| *Novos modelos* | — | `docs/mobs/models/` | — | — | **Nascimento** (Fase 1+) |
| *Novos schemas* | — | `docs/mobs/schemas/` | — | Contratos | **Nascimento** (Fase 1+) |
| `MOBS.md` | `project/automation/` | **permanece** | — | — | **N/A** |
| `BUILD_SYSTEM.md` | `project/automation/` | **permanece** | — | — | **N/A** |
| `PROJECT_ENGINE.md` | `project/automation/` | **permanece** | — | — | **N/A** |
| `BRAND_ENGINE.md` | `project/automation/` | **permanece** | — | — | **N/A** |
| `AUTOMATION_ROADMAP.md` | `project/automation/` | **permanece** | — | — | **N/A** |
| `AUTOMATION_RULES.md` | `project/automation/` | **permanece** | — | — | **N/A** |
| `future/` | `project/automation/` | **permanece** | — | — | **N/A** |
| `PROJECT_INDEX.md` | raiz | **permanece** (definitivo) | — | Bootloader universal | **Permanente** |
| `AI_CONTEXT.md` | raiz | **permanece** (definitivo) | — | Agentes | **Permanente** |
| `PROJECT_RULES.md` | raiz | **permanece** (definitivo) | — | Todo o repositório | **Permanente** |
| `HISTORY.md` | raiz | **permanece** (definitivo) | — | Convenção | **Permanente** |
| `CHANGELOG.md` | raiz | **permanece** (definitivo) | — | Keep a Changelog | **Permanente** |
| `docs/product/*` | `docs/product/` | `docs/products/missao-oab/product/` | Médio | Links em PRD, Index | *Futura* |
| `docs/brand/*` | `docs/brand/` | `docs/products/missao-oab/brand/` | Médio | Brand Book, design | *Futura* |
| `DESIGN_GUIDE.md` | raiz | `docs/products/missao-oab/design/` | Médio | Landing, UI | *Futura* |
| `UI_KIT.md` | raiz | `docs/products/missao-oab/design/` | Médio | Design Guide | *Futura* |
| `assets/brand/` | `assets/brand/` | `assets/brands/missao-oab/` | Alto | Landing, paths em código | **5** |

### Legenda de fases (alinhada a `DOCUMENT_ARCHITECTURE` §14)

| Fase | Escopo |
|---|---|
| **0** | Adotar `DOCUMENT_ARCHITECTURE` — **concluída** |
| **1** | Estrutura alvo + política de nascimento — **concluída** (institucionalizada) |
| **2** | Migrar fundação, domínio, contratos — **concluída** |
| **3** | Migrar governança documental/arquitetural MOBS — **concluída** |
| **4** | Identidade da raiz: `missao-oab` → `missao-mobs` (estrutural) — **concluída**; consolidação produto/design sob `docs/products/` permanece **futura** |
| **5** | Migrar assets para `assets/brands/<id>/` |

---

## 8. Dependências e riscos

### Dependências entre fases

```text
Fase 1 (institucionalizada) → novos docs no path alvo
Fase 2 → requer Fase 1 + atualização de descoberta
Fase 3 → conceitualmente independente de Fase 2; recomenda-se execução sequencial (2 → 3) para reduzir conflitos de links, descoberta e referências cruzadas
Fase 4 → identidade da raiz local (`missao-mobs`); independente da consolidação futura de produto em `docs/products/`
Fase 5 → depende de clareza Brand Contract + BRAND_ENGINE; pode afetar landing
*Futura (ex-escopo antigo da Fase 4)* → reorganizar `docs/product`, `docs/brand`, design — tarefa própria
```

### Riscos principais

| Risco | Mitigação |
|---|---|
| Links quebrados em migração | Uma fase por vez; atualizar Index e referências na mesma tarefa |
| Confusão MOBS vs produto | Fronteiras explícitas neste plano; nunca misturar namespaces |
| Pastas vazias | Criar diretório apenas com primeiro arquivo |
| Migração oportunista | Seguir `ARCHITECTURE_TASK_PROTOCOL`; aprovação humana por fase |
| `assets/brand/` → `assets/brands/` | Fase 5 dedicada; impacto em `index.html`, CSS, landing |

---

## 9. Fases futuras de migração

Resumo operacional pós-Fases 1–4:

| Fase | Ação | Entregável |
|---|---|---|
| **4** | Renomear raiz local `missao-oab` → `missao-mobs`; atualizar só refs de raiz/workspace | **Concluída** — raiz `missao-mobs`; produto `missao-oab` preservado |
| **5** | Migrar `assets/brand/` → `assets/brands/missao-oab/` | Tarefa com BRAND_ENGINE |
| *Futura* | Reorganizar `docs/product`, `docs/brand`, design | `docs/products/missao-oab/` (se autorizada) |

Cada fase: tarefa arquitetural → revisão → aprovação → migração → validação → commit → push.

---

## 10. Critérios de aprovação desta Fase 1

Critérios atendidos na aprovação arquitetural:

- [x] Paths alvo cobrem todos os grupos oficiais de `DOCUMENT_ARCHITECTURE`
- [x] Política de nascimento explícita para cada tipo de documento futuro
- [x] Matriz atual × alvo completa para legado relevante
- [x] Nenhum arquivo legado movido nesta tarefa
- [x] Fronteira MOBS × Produto × Marca institucional preservada
- [x] Coerência com `ARCHITECTURE_TASK_PROTOCOL` e ordem de evolução
- [x] Decisões fechadas: contratos em `docs/mobs/contracts/`; permanência definitiva na raiz; IDs `missao-oab`
- [x] Integração de descoberta — nesta tarefa de institucionalização

---

## 11. Pontos ainda abertos

| Questão | Onde resolver |
|---|---|
| ~~Momento de criar `docs/mobs/` fisicamente~~ | **Resolvido** — `docs/mobs/` criado na Fase 2 |
| `README.md` na raiz do repositório | Fora do escopo MOBS; produto/ecossistema se criado |

---

## Referências

- [`DOCUMENT_ARCHITECTURE.md`](DOCUMENT_ARCHITECTURE.md)
- [`ARCHITECTURE_TASK_PROTOCOL.md`](ARCHITECTURE_TASK_PROTOCOL.md)
- [`project/automation/MOBS.md`](../../../project/automation/MOBS.md)
- [`project/automation/BRAND_ENGINE.md`](../../../project/automation/BRAND_ENGINE.md)
- [`PROJECT_INDEX.md`](../../../PROJECT_INDEX.md)
