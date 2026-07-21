# AUTOMATION RULES

| Campo | Valor |
|---|---|
| **Documento** | AUTOMATION_RULES.md |
| **Versão** | 0.1.1 (Arquitetura) |
| **Status** | Oficial |
| **Depende de** | `MOBS.md`, `PROJECT_RULES.md`, `BUILD_SYSTEM.md` |

---

## Objetivo

Definir as regras permanentes de **toda** automação do Ecossistema Missão, independentemente da Engine ou do projeto.

Em caso de conflito operacional com práticas ad hoc, **estas regras + `PROJECT_RULES.md` prevalecem**.

---

## Ciclo de vida obrigatório

Toda automação deverá:

1. **Nascer primeiro na documentação** (arquitetura, contrato de config, riscos).
2. **Ser aprovada** pelo responsável do projeto/ecossistema.
3. **Ser implementada** de forma genérica (config-driven).
4. **Ser validada** (casos felizes, falhas, dry-run quando aplicável).
5. **Ser reproduzível** (mesma entrada → mesmo resultado esperado).
6. **Ser idempotente** (rodar de novo não corrompe estado nem duplica efeitos indesejados).
7. **Preservar assets oficiais** (mestres em `source/` são sagrados).
8. **Nunca alterar arquivos mestres sem autorização** explícita e registrada.
9. **Gerar logs claros** (o que leu, o que escreveu, o que pulou, o que falhou).
10. **Seguir `PROJECT_RULES.md`** (aprovações de HISTORY/CHANGELOG, commits, identidade visual).

---

## Regras de desenho

- **Configuração acima de código.**
- **Um motor, muitos projetos/marcas.**
- Respeitar a taxonomia: **Core**, **Engine**, **Generator**, **Validator** (`BUILD_SYSTEM.md`).
- O **Core** não gera assets, não altera docs, não embute regras de marca/projeto.
- O **Project Engine** é a primeira Engine de contexto, **acionada pelo MOBS Core**, antes dos demais módulos de ação.
- **Proibido** automação “só para Missão OAB” (ou qualquer produto único) quando um campo de config resolver.
- **Proibido** implementar sem entrada no `AUTOMATION_ROADMAP.md` (ou doc em `future/` aprovada).
- Módulos são **independentes**: um não deve exigir gambiarra em outro.
- Preferir **falhar com mensagem clara** a silenciar erro e gerar artefato inválido.

---

## Regras de identidade e assets

- Nunca redesenhar logotipos ou alterar geometria/cores/proporções dos mestres.
- Preferir SVG oficial a PNG quando o SVG existir.
- Exports são derivados; em conflito, prevalece o mestre em `source/`.
- `*_INK` (ou equivalente declarado em `brand.json`) são os únicos editáveis no fluxo de design — e mesmo assim sob processo aprovado.
- `reference/` (ou equivalente) não é Source of Truth.

---

## Regras de segurança operacional

- Dry-run / modo proposta antes de escritas em massa, quando a Engine permitir.
- Não gravar `CHANGELOG.md` / `HISTORY.md` sem aprovação humana (`PROJECT_RULES`).
- Não fazer commit automático sem aprovação explícita.
- Não usar flags que bypassem hooks ou governança, salvo solicitação explícita do responsável.
- Segredos e credenciais nunca entram em config versionada de marca/projeto sem política própria.

---

## Regras para agentes de IA

Antes de criar ou alterar automações, scripts, pipelines de build/deploy ou geração automática:

1. Consultar `PROJECT_INDEX` (ramo Engenharia).
2. Ler `MOBS.md` e o documento da Engine afetada.
3. Ler estas `AUTOMATION_RULES.md`.
4. Propor arquitetura/delta documental se ainda não existir.
5. **Aguardar aprovação** antes de implementar código.

Nunca implementar automação sem arquitetura documentada.

---

## Definição de pronto (automação)

Uma automação só é considerada pronta quando:

- documentada;
- aprovada;
- implementada conforme contrato;
- validada;
- reproduzível e idempotente;
- com logs legíveis;
- sem violar mestres nem `PROJECT_RULES`.
