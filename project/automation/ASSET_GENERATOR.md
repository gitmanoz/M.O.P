# ASSET GENERATOR

| Campo | Valor |
|---|---|
| **Documento** | ASSET_GENERATOR.md |
| **Versão** | 0.1.1 (especificação da fatia v2) |
| **Status** | Oficial — especificação; runtime ainda não implementado |
| **Categoria** | Generator |
| **Depende de** | `MOBS.md`, `BUILD_SYSTEM.md`, `BRAND_ENGINE.md`, `AUTOMATION_RULES.md` |
| **Baseline de especificação** | `ae8a784b7913dc5c165ef1a4785db89f7b2f2569` |

---

## Objetivo

Definir a **primeira fatia** do Asset Generator do MOBS v2:

> um master final declarado → PNG → `exports/`

O módulo **deriva** artefatos a partir de mestres oficiais e do contexto de Marca.  
Não cria, não redesenha e não edita mestres.

Nesta fatia, o master de produção é um **SVG final** declarado no catálogo.

---

## Responsabilidade

O Asset Generator:

1. consome o **contexto de Marca** necessário à geração de assets;
2. consome um **job de exportação** operacional;
3. resolve de forma segura o master SVG declarado sob `sourcePath`;
4. produz **um** PNG sob `exportsPath`;
5. emite diagnóstico factual compatível com o padrão da v1;
6. permanece genérico — **sem** hardcode de produto, marca ou path de um único repositório.

### Não responsabilidades

O Asset Generator **não**:

- cria ou redesenha masters;
- edita arquivos `*_INK`;
- gera favicon, social, og, app, packs, WebP, PDF ou múltiplos jobs nesta fatia;
- escreve em `source/`;
- orquestra a fila global (MOBS Core);
- resolve profundamente Projeto ou Marca (Engines);
- exerce Validator institucional (roadmap v4);
- escolhe ou embute ferramenta de rasterização nesta especificação.

---

## Entradas

### 1. Contexto de Marca (perfil complementar v2)

Schema: [`docs/mobs/schemas/brand/brand.asset-generation.schema.json`](../../docs/mobs/schemas/brand/brand.asset-generation.schema.json)

| Campo | Significado |
|---|---|
| `brandId` | Identidade da Marca no contexto resolvido |
| `sourcePath` | Diretório relativo de mestres finais (Source of Truth) |
| `exportsPath` | Diretório relativo oficial de derivados desta fatia |
| `masters` | Catálogo chave lógica → SVG final **relativo** sob `sourcePath` |

Este perfil **não** substitui nem universaliza [`brand.schema.json`](../../docs/mobs/schemas/brand/brand.schema.json) (perfil mínimo da v1).

A produção do contexto a partir da declaração de Marca permanece responsabilidade da **Brand Engine** / orquestração; este documento fixa o contrato consumido pelo Generator.

### 2. Job de exportação

Schema: [`docs/mobs/schemas/asset-generator/export-job.schema.json`](../../docs/mobs/schemas/asset-generator/export-job.schema.json)

| Campo | Significado |
|---|---|
| `masterKey` | Chave lógica presente em `masters` |
| `format` | Formato de saída; nesta fatia apenas `png` |

`masterKey` e `format` pertencem **exclusivamente** ao job.  
Não fazem parte do contexto declarativo de Marca.

---

## Base de resolução de paths

A arquitetura vigente já fixa a base de resolução de paths de Marca: o **diretório do arquivo de declaração de Marca** (`dirname` do path da declaração), a mesma base usada por `paths.source` no perfil mínimo v1 e pela Brand Engine.

Não se introduz campo novo de raiz.

| Campo | Forma no perfil | Base de resolução |
|---|---|---|
| `sourcePath` | path de diretório **relativo e portátil** | diretório da declaração de Marca |
| `exportsPath` | path de diretório **relativo e portátil** | diretório da declaração de Marca |
| valores de `masters` | path de arquivo **relativo e portátil** | `sourcePath` já resolvido |

Regras portáteis declaradas (schema + runtime):

1. somente segmentos relativos com `/` como separador;
2. rejeitar absolutos POSIX, drive Windows e UNC;
3. rejeitar `\`, escapes por `..` e segmentos vazios;
4. o schema rejeita o que for expressável com segurança por padrão; o runtime complementa checagens de plataforma e contenção real.

---

## Identificadores lógicos (`masterKey` e chaves de `masters`)

A mesma regra vale nos **dois** schemas:

```text
^[a-z][a-z0-9-]*$
```

Consequências:

1. chave lógica segura e portátil (minúsculas, kebab-case);
2. sem separadores de diretório (`/`, `\`);
3. nome de saída `{masterKey}.png` sem ambiguidade de basename;
4. `masterKey` do job deve coincidir com uma chave existente em `masters`.

---

## Masters desta fatia

1. Cada valor de `masters` aponta para um **SVG final** sob `sourcePath` (extensão `.svg`).
2. Sufixo editável padrão do módulo: `_INK` — **não** é campo obrigatório da Marca nesta fatia.
3. Arquivos cujo nome termina com `_INK` antes da extensão (ex.: `symbol_INK.svg`) são rejeitados como fonte.
4. Origem sob `reference/` (segmento de path `reference`) é rejeitada.
5. O schema rejeita `*_INK.svg` e paths com segmento `reference` na medida mecânica apropriada; o runtime reforça a classificação de fonte final.

---

## Saídas

### Artefato

- Um arquivo PNG em `exportsPath`.
- Nome **determinístico** definido pelo Generator:

```text
{masterKey}.png
```

Exemplo conceitual (não específico de produto): chave `symbol` → `symbol.png` sob `exportsPath`.

### Diagnóstico factual

Objeto JSON compatível com o padrão da v1:

| Campo | Conteúdo |
|---|---|
| `status` | `ok` \| `failed` |
| `steps` | Etapas observáveis do fluxo |
| `filesRead` | Paths absolutos lidos |
| `filesWritten` | Paths absolutos escritos (quando houver escrita) |
| `contexts` | Contextos relevantes (Marca / job, conforme consolidação) |
| `failure` | Presente só em falha: `component`, `stage`, `message` — **sem** stack público |

Stack traces, se existirem, permanecem internos ao processo.

---

## Fluxo operacional mínimo

```text
Interface / CLI / orquestração
    ↓
carregar contexto de Marca (perfil asset-generation)
    ↓
carregar job de exportação
    ↓
Asset Generator
    ↓  validar job.format === "png"
    ↓  resolver sourcePath e exportsPath contra o diretório da declaração de Marca
    ↓  resolver masters[masterKey] sob sourcePath (SVG final)
    ↓  rejeitar *_INK, reference/, absolutos, escapes e formas não portáteis
    ↓  verificar contenção por paths canônicos/reais (sem contorno por symlink)
    ↓  garantir destino sob exportsPath e nunca dentro de sourcePath
    ↓  derivar PNG com nome {masterKey}.png
    ↓  sobrescrever deterministicamente se já existir
    ↓
diagnóstico factual + artefato (ou falha)
```

A forma física da interface (CLI, flags, ordem com Core) permanece decisão de implementação, desde que preserve estas responsabilidades.

---

## Resolução segura de paths

1. Resolver `sourcePath` e `exportsPath` contra o diretório da declaração de Marca.
2. Valores de `masters` são **relativos** ao `sourcePath` já resolvido.
3. O Generator resolve a fonte como junção de `sourcePath` + valor do catálogo.
4. O path de saída é a junção de `exportsPath` + `{masterKey}.png`.
5. Contenção **não** se prova só por normalização lexical: usar paths **canônicos/reais** (`realpath` ou equivalente) de diretórios e arquivos envolvidos, inclusive pais existentes.
6. Symlinks **não** podem contornar fronteiras: se o path real da fonte sair de `sourcePath`, ou o path real do destino sair de `exportsPath`, rejeitar.
7. O destino físico final **nunca** pode estar dentro de `sourcePath` (mesmo que lexicalmente pareça sob `exportsPath`).
8. Rejeitar valores absolutos (POSIX, drive Windows, UNC), `\`, `..` e demais formas não portáteis, independentemente do SO.
9. Não usar `reference/` como origem de produção.
10. A fonte lida permanece **byte-a-byte** intacta — nenhuma escrita, truncamento ou regravação sob `sourcePath`.

O que o schema não puder expressar com segurança (symlink, contenção real, existência, igualdade de volumes) permanece validação de runtime obrigatória nesta fatia.

---

## Invariantes desta fatia

1. Fonte de produção = master **SVG final** declarado no catálogo.
2. Sufixo editável padrão do módulo: `_INK` — **não** é campo obrigatório da Marca nesta fatia.
3. Arquivos cujo nome termina com `_INK` (antes da extensão) são rejeitados como fonte.
4. Origem sob `reference/` é rejeitada.
5. Escrita em `source/` é proibida; a fonte permanece byte-a-byte intacta.
6. Destino fora de `exportsPath` é rejeitado.
7. Destino físico final dentro de `sourcePath` é rejeitado.
8. Único `format` suportado: `png`.
9. Reexecução sobrescreve o **mesmo** derivado; não cria cópias datadas.
10. Capacidade genérica: sem hardcode de Missão OAB, `assets/brand/` ou IDs de produto.

---

## Falhas esperadas

| Condição | Resultado |
|---|---|
| `masterKey` ausente no catálogo `masters` | Falha factual |
| `masterKey` ou chave de `masters` fora do padrão lógico | Rejeição (schema) |
| Arquivo do master inexistente sob `sourcePath` | Falha factual |
| Master que não seja SVG final | Rejeição |
| Fonte `*_INK` | Rejeição |
| Origem sob `reference/` | Rejeição |
| Tentativa de escrita em `source/` | Rejeição |
| Destino fora de `exportsPath` | Rejeição |
| Destino físico final dentro de `sourcePath` | Rejeição |
| Contorno de fronteira por symlink | Rejeição |
| `format` ≠ `png` | Rejeição |
| Path absoluto, com `..`, `\` ou forma não portátil | Rejeição |

Em todas as falhas: diagnóstico em `stdout` (ou canal factual equivalente), sem stack público, exit code ≠ 0 na interface pública.

---

## Idempotência e regeneração

1. Mesma entrada → mesmo path de saída (`{masterKey}.png` sob `exportsPath`).
2. Reexecução **sobrescreve** o artefato existente nesse path.
3. Não duplicar derivados com sufixos temporais ou contadores.
4. `sourcePath` e mestres finais não são modificados (integridade byte-a-byte).
5. O diagnóstico registra leituras, escritas e falhas de forma observável.

A estabilidade bit-a-bit do PNG pode depender da ferramenta de rasterização (ainda aberta). A prova mínima de idempotência desta fatia exige: mesmo path, sobrescrita sem duplicar, fonte intacta.

---

## Validade mínima × Validators institucionais (v4)

| Camada | Escopo |
|---|---|
| **Validade mínima (Asset Generator)** | Pré-condições desta execução: schema do job/contexto, existência do SVG final, rejeições de path/`_INK`/`reference/`/symlink, formato `png`, destino sob `exportsPath` e fora de `sourcePath` |
| **Validators institucionais (v4)** | Conformidade ampla da árvore, nomenclatura global, referências cruzadas e auditoria de marca — **fora** desta fatia |

O Generator **não** substitui o Validator institucional.

---

## Schemas desta fatia

| Artefato | Papel |
|---|---|
| `docs/mobs/schemas/brand/brand.schema.json` | Perfil mínimo v1 — **preservado** |
| `docs/mobs/schemas/brand/brand.asset-generation.schema.json` | Perfil complementar do contexto de Marca para geração |
| `docs/mobs/schemas/asset-generator/export-job.schema.json` | Job operacional (`masterKey` + `format`) |

---

## Decisões abertas

- ferramenta e pinning de rasterização;
- densidades, WebP, PDF e múltiplos jobs;
- canais `favicon/`, `social/`, `og/`, `app/` e packs;
- interface CLI pública e integração completa com o Core;
- Brand-only como único gatilho do Generator;
- migração `assets/brands/<id>/`;
- Validators institucionais (v4);
- campos opcionais futuros da Marca (`editableSuffix` declarado, tokens, rules);
- semântica bit-a-bit do PNG além de path + sobrescrita + fonte intacta.

---

## Relação com autoridades

| Documento | Relação |
|---|---|
| `BUILD_SYSTEM.md` | Taxonomia Generator; este arquivo especializa a fatia v2 |
| `BRAND_ENGINE.md` | Resolve contexto de Marca; não gera exports |
| `MOBS_CORE.md` | Orquestra quando o módulo estiver habilitado; não gera assets |
| `AUTOMATION_RULES.md` | Mestres sagrados; exports derivados; idempotência; logs |
| `BRAND_CONTRACT.md` | Generators materializam; não redefinem Marca |
| `brand.schema.json` / Brand Engine | Base de resolução: diretório da declaração de Marca |

---

## Encerramento

Esta especificação autoriza a **documentação e os schemas** da primeira fatia do MOBS v2.  
Não autoriza, por si só, a implementação do runtime nem a escolha da ferramenta de rasterização.
