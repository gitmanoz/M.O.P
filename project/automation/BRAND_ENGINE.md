# BRAND ENGINE

| Campo | Valor |
|---|---|
| **Documento** | BRAND_ENGINE.md |
| **Versão** | 0.1.1 (Arquitetura) |
| **Status** | Oficial — apenas documentação |
| **Categoria** | Engine (camada de contexto de marca) |
| **Depende de** | `MOBS.md`, `BUILD_SYSTEM.md` |

---

## Objetivo

Definir como o MOBS trata **marcas** de forma genérica.

Esta é a mudança estrutural mais importante da arquitetura:

> O sistema **não** deve conhecer “Missão OAB”.  
> O sistema deve conhecer **marcas**.

Cada marca possui configuração própria.  
Todas as automações leem essa configuração.  
Nenhuma automação deve ser específica de uma única marca.

---

## Modelo conceitual de pastas

Arquitetura-alvo do ecossistema (conceitual — **não implica migração nesta etapa**):

```
assets/
  brands/
    missao-oab/
      source/
      exports/
      brand.json
    capa/
      source/
      exports/
      brand.json
    mobs/
      source/
      exports/
      brand.json
    moai/
      source/
      exports/
      brand.json
    future/
      ...
```

Notas:

- `source/` — Source of Truth da marca (SVGs mestres e `*_INK` quando aplicável).
- `exports/` — derivados gerados (nunca Source of Truth).
- `brand.json` — contrato de configuração lido pelo Brand Engine e demais Engines.
- Pastas adicionais (`favicon/`, `social/`, `og/`, `app/`, `reference/`) podem existir por marca, conforme o README operacional da marca.

Estado atual do repositório Missão OAB (`assets/brand/`) é o **primeiro caso real**. A migração para `assets/brands/<id>/` será um projeto futuro documentado e aprovado — **não faz parte desta etapa**.

---

## brand.json (contrato conceitual)

Campos ilustrativos (**schema oficial ainda não implementado** — apenas modelo conceitual):

```json
{
  "id": "missao-oab",
  "displayName": "Missão OAB",
  "version": "1.0.0",
  "paths": {
    "source": "source/",
    "exports": "exports/"
  },
  "masters": {
    "symbol": "master-symbol.svg",
    "logoHorizontal": "master-logo-horizontal.svg",
    "logoVertical": "master-logo-vertical.svg",
    "typography": "master-typography.svg"
  },
  "editableSuffix": "_INK",
  "tokens": {
    "primary": "#0F2D52",
    "accent": "#D4AF37"
  },
  "rules": {
    "neverRedesign": true,
    "preferSvgOverPng": true,
    "mastersAreReadOnly": true
  }
}
```

O Brand Engine valida e expõe esses dados.  
Outras Engines **nunca** hardcodam nomes de arquivo de uma marca.

---

## Responsabilidades do Brand Engine

1. Resolver `brandId` → diretório da marca.
2. Carregar e validar `brand.json`.
3. Expor caminhos oficiais de `source/` e `exports/`.
4. Recusar operações que violem `rules` (ex.: editar mestre).
5. Listar mestres e variantes disponíveis via config.
6. Permanecer agnóstico a produto (OAB, ENEM, Medicina, etc.).

---

## O que o Brand Engine não faz

- Não redesenha logotipos.
- Não altera geometria, cores ou proporções dos mestres.
- Não gera copy de marketing.
- Não conhece landing pages (isso é Project Engine + configs de projeto).
- Não cria exceções “só para Missão OAB”.

---

## Regra de ouro para automações

Toda automação que toque identidade visual deve:

1. Receber ou inferir `brandId`.
2. Ler `brand.json`.
3. Operar apenas sobre caminhos declarados.
4. Escrever derivados em locais de export — não em mestres — salvo autorização explícita e documentada.

Se uma necessidade “só existe em uma marca”, primeiro avaliar se pode ser expressa como **campo de config**. Só então, e com aprovação, evoluir o schema — nunca o hardcode.

---

## Integração com projetos

O Brand Engine é acionado **depois** do Project Engine quando o fluxo parte de um projeto:

```
project.json → Project Engine → Brand Engine → …
```

A associação projeto↔marca é declarativa. O modelo completo (marca independente, projeto independente, 1:1, N:1, etc.) está em `PROJECT_ENGINE.md` — seção **Relação Projeto × Marca**.

Resumo:

- Vários projetos podem usar a **mesma** marca.
- Uma marca pode existir **sem** projeto.
- Um projeto pode existir **sem** marca (módulos de identidade não aplicam).
- O Brand Engine não orquestra o projeto; apenas resolve a marca.

Não implementar schemas nesta etapa.
