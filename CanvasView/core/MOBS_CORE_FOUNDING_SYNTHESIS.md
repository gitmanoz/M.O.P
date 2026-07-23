# MOBS Core — síntese fundadora mínima

> **Baseline:** `3185694`<br>
> **Natureza:** síntese fundadora candidata<br>
> **Estado:** entregável analítico; não é o documento fundador<br>
> **Escopo:** redução normativa do Responsibility Harvest aprovado

## Conclusão

`Síntese suficiente para redação fundadora`

## Visão geral

- **11 unidades normativas mínimas**
- **1** unidade de identidade, propósito e orquestração
- **3** responsabilidades próprias
- **1** responsabilidade de mediação
- **2** relações condicionais com Engines
- **4** fronteiras negativas
- **6** fusões aprovadas com ressalvas
- **1** fusão rejeitada
- **8** decisões preservadas em aberto

## Síntese fundadora mínima candidata

### CORE-SYN-01 — Identidade, propósito e orquestração

**Formulação mínima**

O MOBS Core é o orquestrador genérico responsável por conduzir o ciclo global e invocar os módulos habilitados na ordem determinada.

- **Harvest:** `CORE-RH-02`, `CORE-RH-10`
- **Condição:** em todo fluxo previsto pela arquitetura, após haver contexto e planejamento orquestracional suficientes.
- **Distinção preservada:** invocar ou despachar não significa executar resolução, geração, validação ou outra função interna do módulo.
- **Risco de excesso:** alto se “conduzir” ou “executar módulos” transformar o Core em executor universal.

### CORE-SYN-02 — Carga da entrada declarativa

**Formulação mínima**

Carregar a entrada declarativa inicial requerida pelo fluxo.

- **Harvest:** `CORE-RH-01`
- **Condição:** no início do fluxo previsto.
- **Distinção preservada:** carga não implica resolver, interpretar profundamente, validar conformidade ou fixar representação física.
- **Risco de excesso:** alto se estabilizar `project.json`, schema, serialização, path ou Projeto como pré-requisito universal.

### CORE-SYN-03 — Planejamento orquestracional

**Formulação mínima**

Preservar a integridade orquestracional, selecionar os módulos habilitados e determinar sua ordem segundo declarações e dependências aplicáveis.

- **Harvest:** `CORE-RH-07`, `CORE-RH-08`, `CORE-RH-09`; limite `CORE-NB-04`
- **Condição:** quando o fluxo possuir módulos candidatos à execução.
- **Distinção preservada:** integridade orquestracional não é conformidade profunda; seleção não inventa habilitação; ordenação não fixa sequência universal.
- **Risco de excesso:** alto se fechar Capability, flags, forma das dependências, momento de Validators ou validação de domínio.

### CORE-SYN-04 — Consolidação

**Formulação mínima**

Consolidar logs e resultados produzidos no fluxo.

- **Harvest:** `CORE-RH-12`
- **Condição:** durante ou ao final do ciclo, conforme o fluxo.
- **Distinção preservada:** consolidação agrega o que módulos produzem; não define formatos, diagnósticos, schemas ou modelo de erros.
- **Risco de excesso:** médio se antecipar persistência, observabilidade, julgamento de release ou `RESOLUTION_MODEL`.

### CORE-SYN-05 — Encaminhamento lógico

**Formulação mínima**

Encaminhar logicamente contextos resolvidos e resultados parciais aos consumidores previstos pelo fluxo.

- **Harvest:** `CORE-RH-11`
- **Condição:** quando o fluxo exigir mediação entre participantes.
- **Distinção preservada:** encaminhamento é relação lógica; não fixa API, processo, barramento, memória compartilhada ou topologia física.
- **Risco de excesso:** médio se “via Core” for tratado como dependência física obrigatória.

### CORE-SYN-06 — Relação com Project Engine

**Formulação mínima**

No fluxo centrado em Projeto, acionar a Project Engine como primeira Engine de contexto de projeto, receber o contexto resolvido e retomar a orquestração.

- **Harvest:** `CORE-RH-03`, `CORE-RH-04`
- **Condição:** somente no fluxo centrado em Projeto.
- **Distinção preservada:** a Project Engine resolve Projeto; sua precedência é restrita às Engines de contexto de projeto, não universal.
- **Risco de excesso:** alto se estabelecer primeiro resolvedor universal ou atribuir resolução ao Core.

### CORE-SYN-07 — Relação com Brand Engine

**Formulação mínima**

Quando o fluxo requerer contexto de Marca, acionar a Brand Engine, receber o contexto resolvido e prosseguir com a orquestração.

- **Harvest:** `CORE-RH-05`, `CORE-RH-06`
- **Condição:** após vínculo de Projeto, quando houver, ou independentemente da Project Engine em fluxo somente Marca.
- **Distinção preservada:** a Brand Engine resolve Marca; a previsão do fluxo somente Marca não define seu mecanismo de seleção ou entrada.
- **Risco de excesso:** alto se criar algoritmo do fluxo somente Marca ou universalizar ordem.

### CORE-SYN-08 — Não resolução profunda, regras específicas e hardcodes

**Formulação mínima**

O Core não resolve nem interpreta profundamente Projeto ou Marca e não contém regras específicas de Projeto, Marca ou produto, associações ou condicionais hardcoded.

- **Harvest:** `CORE-NB-01`, `CORE-NB-05`
- **Condição:** permanente.
- **Distinção preservada:** a resolução pertence às Engines responsáveis; configuração legítima pode orientar a orquestração sem introduzir exceções de domínio no Core.
- **Risco de excesso:** baixo; médio se a fronteira for ampliada para proibir consumo de contexto resolvido.

### CORE-SYN-09 — Produção especializada e políticas de Engines

**Formulação mínima**

O Core não gera assets, não altera documentação diretamente e não assume políticas pertencentes a Engines.

- **Harvest:** `CORE-NB-02`, `CORE-NB-03`
- **Condição:** permanente.
- **Distinção preservada:** pode acionar Generators e Documentation Engine sem executar suas funções; políticas de domínio permanecem com as Engines responsáveis.
- **Risco de excesso:** baixo; não impede receber ou consolidar resultados desses módulos.

### CORE-SYN-10 — Ausência de conformidade profunda

**Formulação mínima**

O Core não realiza conformidade profunda de domínio.

- **Harvest:** `CORE-NB-04`
- **Condição:** permanente.
- **Distinção preservada:** permanece no Core apenas a integridade orquestracional; Validators verificam conformidade e Engines preservam validade necessária à resolução.
- **Risco de excesso:** alto se a fronteira for usada para fixar o momento de execução de Validators.

### CORE-SYN-11 — Fronteira taxonômica

**Formulação mínima**

O Core não exerce função interna de Engine, Generator ou Validator.

- **Harvest:** `CORE-NB-06`
- **Condição:** permanente.
- **Distinção preservada:** invocar componentes e receber resultados não torna o Core membro dessas categorias.
- **Risco de excesso:** baixo; não deve impedir a coordenação legítima dessas categorias.

## Mapa entre síntese e Harvest

| Unidade | Natureza | IDs do Harvest |
|---|---|---|
| `CORE-SYN-01` | Identidade, propósito e orquestração | `CORE-RH-02`, `CORE-RH-10` |
| `CORE-SYN-02` | Responsabilidade própria | `CORE-RH-01` |
| `CORE-SYN-03` | Responsabilidade própria | `CORE-RH-07`, `CORE-RH-08`, `CORE-RH-09`; limite `CORE-NB-04` |
| `CORE-SYN-04` | Responsabilidade própria | `CORE-RH-12` |
| `CORE-SYN-05` | Orquestração / mediação | `CORE-RH-11` |
| `CORE-SYN-06` | Relação condicional | `CORE-RH-03`, `CORE-RH-04` |
| `CORE-SYN-07` | Relação condicional | `CORE-RH-05`, `CORE-RH-06` |
| `CORE-SYN-08` | Fronteira negativa | `CORE-NB-01`, `CORE-NB-05` |
| `CORE-SYN-09` | Fronteira negativa | `CORE-NB-02`, `CORE-NB-03` |
| `CORE-SYN-10` | Fronteira negativa | `CORE-NB-04` |
| `CORE-SYN-11` | Fronteira negativa | `CORE-NB-06` |

## Fusões aprovadas

### `CORE-RH-02` + `CORE-RH-10`

Aprovada com distinção interna: condução do ciclo e invocação não absorvem a execução especializada.

### `CORE-RH-03` + `CORE-RH-04`

Aprovada dentro de unidade exclusiva do fluxo centrado em Projeto. Acionamento e recebimento permanecem distinguíveis.

### `CORE-RH-05` + `CORE-RH-06`

Aprovada dentro de unidade exclusiva dos fluxos que exigem Marca. Não define o mecanismo do fluxo somente Marca.

### `CORE-RH-07` + `CORE-RH-08` + `CORE-RH-09`

Aprovada somente com os três verbos preservados:

1. preservar integridade orquestracional;
2. selecionar módulos habilitados;
3. ordenar segundo dependências declaradas.

Essa fusão não atribui conformidade profunda ao Core.

### `CORE-NB-01` + `CORE-NB-05`

Aprovada como fronteira de não resolução profunda, regras específicas, associações e hardcodes.

### `CORE-NB-02` + `CORE-NB-03`

Aprovada como proibição pareada de geração de assets e alteração documental, preservando que o Core não assume políticas pertencentes a Engines.

## Checagem de cobertura dos IDs fundidos

| Fusão | Fragmentos normativos preservados |
|---|---|
| `CORE-RH-02` + `CORE-RH-10` | Condução do ciclo global; invocação dos módulos habilitados; execução interna preservada nos módulos. |
| `CORE-RH-03` + `CORE-RH-04` | Acionamento da Project Engine como primeira Engine de contexto de projeto; recebimento do contexto resolvido; retomada da orquestração; condição exclusiva do fluxo centrado em Projeto. |
| `CORE-RH-05` + `CORE-RH-06` | Acionamento da Brand Engine quando requerido pelo fluxo; recebimento do contexto resolvido; uso somente para orquestração; condições distintas de Projeto vinculado e fluxo somente Marca. |
| `CORE-RH-07` + `CORE-RH-08` + `CORE-RH-09` | Integridade orquestracional; seleção dos módulos habilitados; ordenação por dependências declaradas; exclusão de conformidade profunda. |
| `CORE-NB-01` + `CORE-NB-05` | Não resolução ou interpretação profunda de Projeto/Marca; ausência de regras específicas; ausência de associações, condicionais e hardcodes de produto. |
| `CORE-NB-02` + `CORE-NB-03` | Proibição de gerar assets; proibição de alterar documentação diretamente; proibição de assumir políticas pertencentes a Engines. |

A fusão rejeitada `CORE-RH-11` + `CORE-RH-12` continua desfeita: encaminhamento permanece em `CORE-SYN-05` e consolidação permanece em `CORE-SYN-04`.

`CORE-NB-04` e `CORE-NB-06` continuam representadas separadamente em `CORE-SYN-10` e `CORE-SYN-11`.

## Fusão rejeitada

### `CORE-RH-11` + `CORE-RH-12`

Encaminhamento lógico e consolidação permanecem separados:

- encaminhamento medeia participantes e arrisca fixar topologia;
- consolidação agrega resultados e arrisca antecipar formatos, diagnósticos ou modelo de erros.

Podem compartilhar proximidade editorial, mas não uma única unidade normativa.

`CORE-NB-04` e `CORE-NB-06` também permanecem fronteiras próprias. Conformidade profunda e identidade taxonômica não devem desaparecer em uma proibição genérica de trabalho especializado.

## Responsabilidades preservadas separadamente

| Separação | Razão material |
|---|---|
| Carga × resolução | O Core carrega; a Engine responsável resolve. |
| Integridade × conformidade | O Core protege a orquestração; Validators avaliam conformidade profunda. |
| Seleção × ordenação | Uma decide participação; a outra decide sequência por dependências. |
| Invocação × execução interna | O Core despacha; cada módulo realiza sua finalidade. |
| Encaminhamento × consolidação | Mediação lógica e agregação são responsabilidades diferentes. |
| Projeto × Marca | Condições de aplicação e precedência são diferentes. |
| Identidade × execução | Genericidade e categoria Orchestrator são limites constitutivos. |

## Termos que exigem cautela semântica

| Termo | Leitura segura |
|---|---|
| carregar | Receber ou preparar entrada; não implica parsing específico, resolução ou conformidade profunda. |
| entrada declarativa | Não nomear arquivo, formato, path ou schema. |
| orquestrar / conduzir | Coordenação global; não realização de trabalho especializado. |
| invocar / executar módulos | Preferir “invocar”; “executar” exige qualificação como despacho do ciclo. |
| integridade orquestracional | Coerência de participação e dependências; não conformidade de domínio. |
| habilitado | Estado declarado ou previsto pelo fluxo; não fecha flags ou Capability. |
| dependências declaradas | Sem forma física, localização ou tecnologia definida. |
| encaminhar / via Core | Relação lógica, não topologia física. |
| consolidar | Agregação sem contrato antecipado de logs, diagnósticos ou erros. |
| primeira Engine de contexto de projeto | Escopo estrito do fluxo centrado em Projeto; não primeiro resolvedor universal. |
| independentemente | Brand Engine pode ser acionada sem Project Engine; mecanismo permanece aberto. |
| genérico | Sem regras de produto; ainda responsivo a declarações e contextos previstos pelo fluxo. |

## Decisões que permanecem abertas

1. primeiro resolvedor universal;
2. mecanismo do fluxo somente Marca;
3. momento de execução de Validators;
4. relação definitiva entre flags e Capability;
5. `RESOLUTION_MODEL`;
6. schemas, serializações e modelo de erros;
7. forma física das dependências e dependências físicas entre módulos;
8. representação física da entrada, incluindo `project.json`.

A oitava decisão aberta não constitui decisão nova: deriva da ambiguidade já registrada no Responsibility Harvest entre a menção arquitetural a `project.json` e a independência de representação preservada em `CORE-RH-01`.

## Conteúdo deliberadamente fora do fundador

- `CORE-UA-01`;
- `CORE-ILL-01`;
- sequências fixas e exemplos convertidos em norma;
- representações físicas, schemas, serializações e paths;
- APIs, algoritmos, runtime, persistência e topologia;
- modelo de Capability, resolução, erros ou diagnósticos;
- momento canônico de Validators;
- dependências físicas e formato de suas declarações;
- detalhamento interno de Engines, Generators e Validators.

## Estrutura mínima recomendada para o futuro documento

1. identidade e propósito;
2. responsabilidades próprias;
3. responsabilidades de orquestração;
4. relações condicionais com Engines;
5. fronteiras negativas;
6. decisões abertas e não decisões;
7. rastreabilidade às autoridades.

---

Este arquivo é uma visualização analítica em Markdown do último Canvas de síntese. Não altera, substitui ou amplia as autoridades documentais do MOBS.
