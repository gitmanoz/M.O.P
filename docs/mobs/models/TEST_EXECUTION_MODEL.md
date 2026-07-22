# Modelo de Execução de Testes do MOBS

> Antes de executar: definição prévia completa.
> Durante: fatos. Depois: veredito só do observador.
> Resultado não é arquitetura até Harvest e governança competente.

Este documento é o **modelo arquitetural transversal** do método de testes institucionais, probes e diagnósticos de execução do MOBS.

Ele **não** redefine Boot, Decision Tree, Partnership, Harvest nem [`PROJECT_RULES.md`](../../../PROJECT_RULES.md).
Ele **não** substitui [`ARCHITECTURE_TASK_PROTOCOL.md`](../governance/ARCHITECTURE_TASK_PROTOCOL.md).
Ele **não** é Validator, Engine, contrato, schema, regra de Git, CI nem protocolo de governança novo.

| Campo | Valor |
|---|---|
| **Tipo** | Modelo arquitetural transversal |
| **Path oficial** | `docs/mobs/models/TEST_EXECUTION_MODEL.md` |
| **Aspecto** | Método de execução e julgamento de testes institucionais / diagnósticos |
| **Schemas / CI / runtime** | Não definidos aqui |

---

## 1. Propósito

Dar ao MOBS uma gramática única para **confrontar hipóteses** e **produzir evidência limitada ao mandato executado** — por execução controlada, sem sugerir prova definitiva ou universal, e sem confundir o ato de testar com o ato de institucionalizar.

Sem este método, cada diagnóstico reinventa papéis, critérios e destino do resultado.
Com ele, a execução permanece comparável entre parceiros e ciclos.

---

## 2. O que este modelo cobre

| Cobre | Não cobre |
|---|---|
| Definição prévia completa do mandato de teste | Suite de testes de software de produto |
| Separação sujeito × observador; relatórios mínimos | Pipelines de CI/CD |
| Vereditos `Pass`, `Fail`, `Interrupt` | Validator de configuração / paths |
| Probes e distinção de artefatos / evidência / institucional | Engines, contratos, schemas |
| Fronteira entre resultado de teste e arquitetura | Regras de stage, commit, push ou History |

Um caso concreto de teste **ilustra** o método; **não** o redefine.

**Autorreferência** do sujeito, do observador ou deste modelo **não** constitui evidência independente.
Este modelo **não** valida retroativamente a execução que o criou ou o refinou.

---

## 3. Papéis do método

Estes papéis pertencem ao **método de teste**. Não são catálogo de papéis de Partnership nem identidades permanentes.

| Papel | Faz | Não faz |
|---|---|---|
| **Sujeito** | Executa o mandato do teste; observa o repositório e o ambiente; entrega o **relatório factual mínimo** | Atribuir `Pass`, `Fail` ou `Interrupt` ao próprio trabalho sob exame |
| **Observador** | Entrega a **avaliação mínima**; compara fatos ao critério; **atribui** o veredito | Substituir a execução do sujeito; inventar evidência não relatada |

A mesma pessoa ou agente pode, em momentos distintos, ocupar papéis diferentes.
No instante do julgamento do trabalho sob exame, o ideal metodológico é que **sujeito e observador não coincidam** na atribuição do veredito.

Se sujeito e observador forem **materialmente a mesma instância**, isso é **limitação metodológica**: o veredito pode ser registrado, mas **não** se apresenta como avaliação independente.

O método é **independente do papel examinado** (Ayla, Parceiro Programador, fundador, agente frio, ou outro). O que muda é o mandato do teste; a gramática permanece.

---

## 4. Definição prévia (obrigatória)

Antes de qualquer execução, o teste declara explicitamente:

| Elemento | Função |
|---|---|
| **Objeto examinado** | O que está sob exame (papel, documento, fluxo, comportamento institucional, etc.) |
| **Hipótese** | Afirmação a ser confrontada pela execução |
| **Comportamento esperado** | O que se espera observar se a hipótese se sustentar no mandato |
| **Variável examinada** | O fator cujo efeito ou estado o teste pretende confrontar |
| **Evidência necessária** | O que deve ser produzido ou observado para sustentar ou confrontar a hipótese |
| **Critério discriminatório** | Regra que distingue os desfechos possíveis sob o mandato |
| **Condições de aprovação** | Quando o observador pode emitir `Pass` |
| **Condições de reprovação** | Quando o observador pode emitir `Fail` |
| **Condições de interrupção** | Quando o observador pode emitir `Interrupt` (só após início efetivo) |
| **Limitações conhecidas** | Restrições do cenário, da amostra, da ferramenta ou do mandato |
| **Artefatos autorizados** | O que pode ser criado, lido ou usado (inclui probes, se houver) |
| **Ações proibidas** | O que o sujeito não pode fazer durante a execução |

Sem esses elementos em grau **suficiente** para executar e julgar sem improvisar o critério, a execução **não começa**.
O episódio registra-se como **não iniciado** — não como `Pass`, `Fail` ou `Interrupt`.
Exploração informal sem essa definição também **não** gera veredito oficial deste método.

### Alegações causais

Quando a hipótese for **causal** (ou implicar causalidade), a definição prévia exige **isolamento da variável examinada quando possível**.
Se o isolamento for impossível ou incompleto, isso entra em **limitações conhecidas** — não se omite.

---

## 5. Execução e relato

A execução só começa depois da definição prévia suficiente (§4).

1. O sujeito carrega somente o contexto autorizado pelo mandato do teste e pelas autoridades de descoberta.
2. O sujeito executa sem alterar o critério discriminatório no meio do caminho.
3. O sujeito entrega o **relatório factual mínimo** (§5.1) — sem autoatribuir veredito.
4. O observador entrega a **avaliação mínima** (§5.2) e emite `Pass`, `Fail` ou `Interrupt`.

### 5.1 Relatório factual mínimo do sujeito

| Campo | Conteúdo |
|---|---|
| **Documentos carregados** | Autoridades e demais fontes efetivamente lidas |
| **Ações executadas** | O que o sujeito fez sob o mandato |
| **Arquivos criados, alterados ou removidos** | Paths e natureza da mudança (ou ausência) |
| **Verificações** | Checagens realizadas e o que observaram |
| **Ações não executadas** | Itens do mandato ou do plano que não ocorreram |
| **Proibições preservadas** | Ações proibidas da definição prévia que foram respeitadas |
| **Desvios** | Qualquer saída do mandato, do critério ou dos artefatos autorizados |
| **Interrupções** | Pontos em que a execução parou ou ficou bloqueada |
| **Ambiguidades** | Lacunas ou interpretações possíveis sem resolução pelo sujeito |
| **Estado factual final** | Estado observável ao encerrar o relato |

### 5.2 Avaliação mínima do observador

| Campo | Conteúdo |
|---|---|
| **Hipótese** | Hipótese sob julgamento (da definição prévia) |
| **Evidência aceita** | Subconjunto do relato/fatos admitido como evidência |
| **Comparação com o critério** | Como os fatos se alinham às condições de aprovação, reprovação ou interrupção |
| **Diferenças relevantes** | Desvios entre esperado e observado |
| **Limitações** | Limitações do teste e da avaliação (incluindo mesma instância, se houver) |
| **Explicações alternativas** | Hipóteses rivais compatíveis com a evidência aceita |
| **Força da evidência** | Quão restritiva a evidência é sob o mandato — sem prova universal |
| **Veredito** | `Pass`, `Fail` ou `Interrupt` |
| **Conhecimento candidato a Harvest** | O que, se tanto, merece colheita — ainda **não** é arquitetura |

### Vereditos

Aplicam-se **somente** a testes **efetivamente iniciados**.

| Veredito | Significado |
|---|---|
| **Pass** | Os fatos satisfazem as condições de aprovação / critério discriminatório da hipótese |
| **Fail** | Os fatos satisfazem as condições de reprovação; a hipótese fica não sustentada naquele mandato |
| **Interrupt** | A execução iniciada não pôde ser julgada sob o critério — condições de interrupção, autoridade insuficiente, escopo inválido ou bloqueio externo |

`Interrupt` **não** é eufemismo de `Fail`: registra que o julgamento sob o critério declarado não se completou.
Definição prévia incompleta **não** produz `Interrupt` — produz registro de **não iniciado** (§4).

---

## 6. Probes e distinção de artefatos

**Probe** é artefato ou instrução **temporária** usada só para provocar ou observar comportamento durante um diagnóstico.

### 6.1 Distinções obrigatórias

| Categoria | Significado |
|---|---|
| **Artefato temporário** | Existe só para o diagnóstico; não é fonte oficial |
| **Evidência preservada** | Registro factual mantido para julgamento ou Harvest — ainda sem autoridade |
| **Documento institucional** | Fonte oficial do repositório, após aprovação competente |
| **Conhecimento candidato a Harvest** | Aprendizado proposto para colheita — **não** institucional até Harvest e governança |

Não confundir essas categorias entre si.

### 6.2 Declaração do probe (quando aplicável)

Todo probe temporário declara, de forma explícita:

| Dimensão | Regra |
|---|---|
| **Nome / localização** | Identificador e path (ou equivalente) quando houver artefato |
| **Conteúdo exato** | Payload **literal** e delimitado |
| **Formato ou encoding** | Forma em que o conteúdo deve ser lido ou comparado |
| **Duração** | Janela prevista de uso do probe |
| **Política de permanência** | Por padrão **efêmero**; existir no workspace **não** o torna institucional |
| **Limpeza autorizada** | Se, quando e por quem pode remover ou alterar — exige **mandato do teste** ou **autorização competente** |
| **Promoção** | Só deixa de ser temporário se for **promovido** por autorização competente — nunca por ter “funcionado” no teste nem pelo mero encerramento |

**Correspondência literal** do conteúdo do probe **não** pode ser substituída por **equivalência semântica**.

O encerramento do teste **não** autoriza, por si só, remover, alterar ou promover probes.

Probes **não** nascem como modelos, contratos, protocolos nem entradas permanentes de descoberta.
Não usar o conteúdo de um probe recente como caso universal deste modelo.

---

## 7. Resultado ≠ arquitetura

O resultado de um teste (`Pass`, `Fail`, `Interrupt`, relatos, probes) é **conhecimento de trabalho** ou evidência — não autoridade.

| Destino legítimo | Autoridade |
|---|---|
| Validar suficiência / responsabilidade / cobertura | Architectural Harvest em [`ARCHITECTURE_TASK_PROTOCOL.md`](../governance/ARCHITECTURE_TASK_PROTOCOL.md) §13.1 |
| Nascimento ou recusa de nova autoridade | §13.2 do mesmo protocolo |
| Registro versionável (History / Changelog / Git) | [`PROJECT_RULES.md`](../../../PROJECT_RULES.md), quando houver mudança estabilizada a oficializar |

Regras:

1. Encontrar um padrão no teste **não autoriza** criar documento ou autoridade.
2. `Pass` **não** institucionaliza; `Fail` **não** apaga autoridade existente por si só.
3. Promoção de probe ou de aprendizado exige Harvest (quando arquitetural) e a governança competente do destino — e autorização competente; o encerramento do teste não basta.

### Harvest a partir do teste

Quando houver candidato a Harvest, a colheita deve:

- **separar fatos de interpretações**;
- **preservar evidências contrárias** e **conclusões inconclusivas**;
- **evitar referências institucionais** (como se já fossem autoridade) **antes da aprovação**.

### Limites de inferência

Preservar explicitamente:

| Observação | Não demonstra |
|---|---|
| Participação | Causalidade |
| Influência | Necessidade |
| Ausência de regressão | Melhoria |
| Resultados equivalentes | Indispensabilidade |
| Autorreferência | Evidência independente |

---

## 8. Relação com outras autoridades

| Autoridade | Relação |
|---|---|
| `PROJECT_INDEX` / `AI_CONTEXT` | Descoberta e carga de contexto do sujeito — este modelo não redefine Boot |
| `PARTNERSHIP_MODEL` | Colaboração genérica; não absorve o método de teste |
| `ARCHITECTURE_TASK_PROTOCOL` | Harvest e nascimento de autoridades — destino do aprendizado, não o método de execução do teste |
| `PROJECT_RULES` | Operação e versionamento — só após estabilização autorizada |
| `DOMAIN_MODEL` / contratos / Engines / Validator | Fora deste aspecto; não redefinidos aqui |

Se este documento contradisser um superior, **este documento está errado** até revisão aprovada pelo fundador.

---

## 9. Evolução

Alterações neste modelo exigem tarefa arquitetural sob o protocolo oficial.
Não expandir com catálogos de casos históricos, suites de CI, formatos de mensagem nem cópia de Harvest/Rules.
Não usar este documento para validar retroativamente a execução que o originou.

---

## Encerramento

> Defina antes.
> Execute e relate fatos.
> Deixe o observador julgar.
> Só então colha — se houver o que institucionalizar.
