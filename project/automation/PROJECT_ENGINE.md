# PROJECT ENGINE

| Campo | Valor |
|---|---|
| **Documento** | PROJECT_ENGINE.md |
| **Versão** | 0.1.1 (Arquitetura) |
| **Status** | Oficial — apenas documentação |
| **Categoria** | Engine (camada de contexto) |
| **Depende de** | `MOBS.md`, `BUILD_SYSTEM.md` |

---

## Objetivo

Definir como o MOBS trata **projetos** de forma genérica e posicionar o Project Engine como a **primeira Engine de contexto**, acionada pelo **MOBS Core**.

O Project Engine não gera assets nem docs em massa.  
Ele **resolve o projeto** e **devolve o contexto ao Core**, que então orquestra Brand Engine, Documentation Engine, Asset Generator, Validation Engine e Release Engine.

---

## Posição no fluxo

```
Interface / CLI / CI / IA
    ↓
MOBS Core carrega project.json
    ↓
MOBS Core aciona Project Engine
    ↓
Project Engine resolve o contexto e devolve ao Core
    ↓
MOBS Core orquestra Brand / Docs / Asset Generator / Validation / Release
```

O Project Engine **não** existe operacionalmente fora ou antes do Core.  
Nenhum Generator ou Validator deve assumir “qual é o projeto” por hardcode.  
O contexto vem do Project Engine, **via Core**.

---

## Modelo conceitual de pastas

Arquitetura-alvo (conceitual — **não implica reorganização nesta etapa**):

```
projects/
  missao-oab/
    landing/
    assets/
    brand/          → ponte/referência opcional; preferir assets/brands/<id>
    automation/
    config/
    docs/
  capa/
    ...
  future/
    ...
```

| Área | Função |
|---|---|
| `landing/` | Superfície web / páginas do produto |
| `assets/` | Mídia específica do projeto |
| `brand/` | Ponte opcional (não duplicar Source of Truth) |
| `automation/` | Flags/hooks locais — não motores duplicados |
| `config/` | `project.json` e satélites |
| `docs/` | Documentação do produto |

O repositório atual da Missão OAB é o **primeiro projeto real**. Migração para `projects/<id>/` é futura e aprovada à parte.

---

## project.json (contrato conceitual)

Apenas modelo ilustrativo — **schemas oficiais ainda não implementados**:

- identidade do projeto (`id`, `displayName`, `version`);
- associação opcional a marca (`brandId` presente, ausente ou compartilhado);
- paths de superfícies;
- flags de módulos habilitados;
- ponteiros de release (changelog/history) quando aplicável.

Detalhe de campos será versionado na fase de implementação.

---

## Relação Projeto × Marca (modelo conceitual)

Marca e projeto são entidades **independentes**. A arquitetura deve suportar todos os casos abaixo **sem hardcode** e **sem schemas nesta etapa** — apenas o modelo:

| Caso | Descrição | Implicação para o MOBS |
|---|---|---|
| **Marca independente** | Existe `brand` sem projeto associado | Brand Engine opera só com `brandId`; Project Engine não é obrigatório |
| **Projeto independente** | Existe `project` sem marca | Project Engine opera sem `brandId`; módulos de marca/Asset Generator não aplicam identidade visual até haver marca |
| **Projeto associado a uma marca** | `project` referencia uma `brand` | Caso padrão; Project Engine expõe `brandId` → Brand Engine |
| **Vários projetos, mesma marca** | N projetos compartilham um `brandId` | Uma Source of Truth; muitos projetos; zero duplicação de mestres |
| **Projeto com marca própria** | `project` e `brand` com o mesmo ecossistema de produto (1:1) | Associação explícita; ainda assim entidades separadas no modelo |

### Princípios da relação

1. **Marca** responde: “Qual identidade visual e tokens oficiais?”
2. **Projeto** responde: “Qual entrega e quais superfícies automatizar?”
3. Associação é **declarativa** (config), nunca embutida no Core.
4. Compartilhar marca entre projetos é o caminho preferido para consistência visual.
5. Projeto sem marca e marca sem projeto são válidos — módulos inaplicáveis simplesmente não rodam.

Não implementar schemas nesta etapa; apenas registrar o modelo.

---

## Responsabilidades do Project Engine

- Resolver `projectId` → config de projeto.
- Expor contexto (paths, flags de módulos, vínculo de marca se houver).
- Inventário conceitual de projetos do ecossistema.
- Validação mínima estrutural da config de projeto (conceito; detalhe futuro).
- Ser a **primeira** Engine de contexto acionada pelo MOBS Core.

---

## O que o Project Engine não faz

- Não gera assets (isso é Asset Generator).
- Não altera documentação em massa (Documentation Engine).
- Não aplica regras visuais de Brand Book (Brand Engine + docs de marca).
- Não orquestra a fila global (MOBS Core).
- Não cria módulos específicos de um projeto.
- Não move arquivos nesta fase documental.
- Não possui regras hardcoded de Missão OAB ou outro produto.

---

## Automação de um projeto

```
projectId / project.json
  → MOBS Core carrega config
  → Project Engine (contexto) ← acionado pelo Core
  → MOBS Core seleciona e ordena módulos
  → Brand Engine (se brandId)
  → Validation Engine
  → Documentation Engine / Asset Generator / Release Engine
  → MOBS Core consolida logs e resultados
```

O MOBS deve automatizar um projeto com **config + conteúdo**, sem código novo no Core por produto.
