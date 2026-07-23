# MOBS Core

| Campo | Valor |
|---|---|
| **Documento** | MOBS Core |
| **Status** | Candidato não oficial |
| **Baseline de redação** | `3185694` |
| **Escopo** | Identidade, responsabilidades e fronteiras do orquestrador MOBS |
| **Path canônico candidato** | `project/automation/MOBS_CORE.md` |

> Esta redação é candidata e não possui autoridade documental oficial.

## 1. Identidade e propósito

O **MOBS Core** é o orquestrador genérico do MOBS.

Seu propósito é conduzir o ciclo global de execução, coordenando os módulos requeridos pelo fluxo sem absorver as responsabilidades internas de Engines, Generators ou Validators.

## 2. Responsabilidades próprias

O Core deve:

1. carregar a entrada declarativa inicial requerida pelo fluxo;
2. preservar a integridade orquestracional;
3. selecionar os módulos habilitados segundo as declarações e os contextos aplicáveis;
4. determinar a ordem de execução segundo dependências declaradas;
5. consolidar os logs e resultados produzidos no fluxo.

Integridade orquestracional limita-se à coerência necessária para seleção, dependências, ordenação e execução do fluxo. Não constitui conformidade profunda de domínio.

Consolidação agrega os resultados produzidos pelos módulos. Não define schemas, diagnósticos, persistência ou modelo de erros.

## 3. Responsabilidades de orquestração

O Core deve:

1. conduzir o ciclo global;
2. invocar os módulos habilitados na ordem determinada;
3. encaminhar logicamente contextos resolvidos e resultados parciais aos consumidores previstos pelo fluxo;
4. prosseguir com a orquestração a partir dos contextos e resultados recebidos.

Invocar um módulo significa despachar sua participação no fluxo. Não significa executar sua resolução, geração, validação ou qualquer outra responsabilidade interna.

O encaminhamento realizado pelo Core expressa relação lógica entre participantes. Não determina API, processo, barramento, memória compartilhada ou topologia física.

## 4. Relações condicionais com Engines

### 4.1. Project Engine

No fluxo centrado em Projeto, o Core deve:

1. acionar a Project Engine como primeira Engine de contexto de projeto;
2. receber o contexto de Projeto resolvido;
3. retomar a orquestração com esse contexto.

A Project Engine resolve o contexto de Projeto. Sua precedência é restrita ao fluxo centrado em Projeto e à sua posição como Engine de contexto de projeto.

### 4.2. Brand Engine

Quando o fluxo requerer contexto de Marca, o Core deve:

1. acionar a Brand Engine;
2. receber o contexto de Marca resolvido;
3. prosseguir com a orquestração usando esse contexto.

Quando houver associação Projeto↔Marca declarada pela configuração, o Core pode consumi-la para conduzir o fluxo. Ele não pode embutir nem hardcodar essa associação.

A Brand Engine pode ser acionada após o contexto de Projeto, quando houver vínculo, ou independentemente da Project Engine quando somente Marca estiver em jogo. Este documento não define o mecanismo desse fluxo.

## 5. Fronteiras negativas

O Core:

1. não resolve nem interpreta profundamente Projeto ou Marca;
2. não contém regras específicas de Projeto, Marca ou produto;
3. não embute nem hardcoda a associação Projeto↔Marca declarada pela configuração, nem condicionais ou hardcodes específicos de domínio ou produto;
4. não gera assets;
5. não altera documentação diretamente;
6. não assume políticas pertencentes a Engines;
7. não realiza conformidade profunda de domínio;
8. não exerce função interna de Engine, Generator ou Validator.

Configurações e contextos resolvidos podem orientar a orquestração sem transferir ao Core a resolução ou as regras do domínio.

Validators verificam conformidade. Engines preservam a validade necessária à resolução de seus domínios. O Core permanece responsável somente pela integridade orquestracional.

## 6. Decisões abertas e não decisões

Este documento não decide:

1. o primeiro resolvedor universal;
2. o mecanismo do fluxo somente Marca;
3. o momento de execução de Validators;
4. a relação definitiva entre flags e Capability;
5. o `RESOLUTION_MODEL`;
6. schemas, serializações ou modelo de erros;
7. a forma física das dependências ou dependências físicas entre módulos;
8. a representação física da entrada.

Também não estabelece sequência fixa de módulos, formato de diagnóstico, tecnologia de transporte, topologia de execução ou representação obrigatória para configurações.

## 7. Autoridades documentais

Esta definição deriva das seguintes autoridades:

1. [`WHY_MOBS.md`](../../docs/mobs/foundation/WHY_MOBS.md) — propósito e princípios permanentes do MOBS;
2. [`MOBS.md`](MOBS.md) — visão e escopo da plataforma;
3. [`DOMAIN_MODEL.md`](../../docs/mobs/domain/DOMAIN_MODEL.md) — conceitos, relações e fronteiras do domínio;
4. [`CONFIGURATION_CONTRACTS.md`](../../docs/mobs/contracts/CONFIGURATION_CONTRACTS.md) — separação entre carga, resolução, validação e consumo;
5. [`BUILD_SYSTEM.md`](BUILD_SYSTEM.md) — taxonomia, fluxo e fronteiras do Core;
6. [`PROJECT_CONTRACT.md`](../../docs/mobs/contracts/PROJECT_CONTRACT.md) — relação entre Core, Projeto e Project Engine;
7. [`BRAND_CONTRACT.md`](../../docs/mobs/contracts/BRAND_CONTRACT.md) — relação entre Core, Marca e Brand Engine;
8. [`PROJECT_ENGINE.md`](PROJECT_ENGINE.md) — resolução do contexto de Projeto;
9. [`AUTOMATION_RULES.md`](AUTOMATION_RULES.md) — regras permanentes da automação MOBS;
10. [`ARCHITECTURE_TASK_PROTOCOL.md`](../../docs/mobs/governance/ARCHITECTURE_TASK_PROTOCOL.md) — método de produção e validação arquitetural.

[`PROJECT_INDEX.md`](../../PROJECT_INDEX.md) é o ponto de entrada e descoberta; não substitui as autoridades acima.

O path canônico candidato deriva de [`DOCUMENT_ARCHITECTURE.md`](../../docs/mobs/governance/DOCUMENT_ARCHITECTURE.md) e [`DOCUMENT_STRUCTURE_PLAN.md`](../../docs/mobs/governance/DOCUMENT_STRUCTURE_PLAN.md): o Core é componente técnico da plataforma MOBS e seu documento pertence ao hub `project/automation/`, não aos grupos Fundação ou Modelos arquiteturais.

Em caso de divergência, prevalecem as autoridades oficiais conforme sua dimensão e hierarquia documental.
