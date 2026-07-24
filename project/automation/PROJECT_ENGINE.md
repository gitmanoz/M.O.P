# PROJECT ENGINE

| Campo | Valor |
|---|---|
| **Documento** | PROJECT_ENGINE.md |
| **Versão** | 0.1.1 (Arquitetura) |
| **Status** | Oficial — arquitetura; fatia v1 executável materializada (Projeto → Marca associado) |
| **Categoria** | Engine (camada de contexto) |
| **Depende de** | `MOBS.md`, `BUILD_SYSTEM.md` |

---

## Objetivo

Definir como o MOBS trata **projetos** de forma genérica e posicionar o Project Engine como a **primeira Engine de contexto de projeto** no **fluxo centrado em Projeto**, acionada pelo **MOBS Core**.

O Project Engine não gera assets nem docs em massa.  
Ele **resolve o projeto** e **devolve o contexto ao Core**. No fluxo centrado em Projeto, o Core orquestra os demais módulos habilitados conforme o fluxo autorizado (incluindo a Brand Engine quando esse fluxo o exigir).

---

## Posição no fluxo

Ilustração do fluxo centrado em Projeto — não ordem operacional canônica de todos os fluxos.

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

Modelo ilustrativo da entidade Projeto. O **perfil mínimo** da fatia v1 (Projeto → Marca associado) está materializado em `docs/mobs/schemas/project/project.schema.json` e **não** esgota todos os casos conceituais abaixo:

- identidade do projeto (`id`, `displayName`, `version`);
- associação opcional a marca (`brandId` presente, ausente ou compartilhado);
- paths de superfícies;
- flags de módulos habilitados;
- ponteiros de release (changelog/history) quando aplicável.

Campos além do perfil mínimo da v1 permanecem abertos para evolução aprovada do schema.

---

## Relação Projeto × Marca (modelo conceitual)

Marca e projeto são entidades **independentes**. A arquitetura deve suportar todos os casos abaixo **sem hardcode** — o modelo conceitual permanece; a fatia v1 executável comprovou somente o caso **Projeto associado a uma marca**:

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

Brand-only, Projeto sem Marca e demais variações continuam conceitualmente autorizados; seus mecanismos executáveis permanecem abertos e não bloqueiam a conclusão da v1.

---

## Responsabilidades do Project Engine

- Resolver `projectId` → config de projeto.
- Expor contexto (paths, flags de módulos, vínculo de marca se houver).
- Inventário conceitual de projetos do ecossistema.
- Validação mínima estrutural da config de projeto (conceito; detalhe futuro).
- No fluxo centrado em Projeto, ser a **primeira** Engine de contexto de projeto acionada pelo MOBS Core.

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
