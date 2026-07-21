# Why MOBS

> O MOBS é a plataforma de engenharia do Ecossistema Missão: uma infraestrutura compartilhada para transformar conhecimento, padrões e processos repetitivos em capacidades reutilizáveis.

**Frase institucional (apresentações):**

> Menos infraestrutura por produto. Mais capacidade compartilhada por ecossistema.

---

## Estado deste documento

| Dimensão | Situação |
|---|---|
| **Hoje** | O MOBS existe como **arquitetura documental aprovada** (v0.1.1): visão, taxonomia, fluxo, princípios e governança |
| **Em construção** | Contratos, módulos e automações serão implementados conforme o [roadmap](project/automation/AUTOMATION_ROADMAP.md) e as [regras de automação](project/automation/AUTOMATION_RULES.md) |
| **Visão** | Uma plataforma reutilizável na qual novos produtos nascem principalmente por **configuração + conteúdo**, não por nova infraestrutura |

Este arquivo responde ao **porquê**, ao **para quem** e ao **valor**.  
O **quê** e o **como** técnicos continuam em [`MOBS.md`](project/automation/MOBS.md) e nos demais documentos de `project/automation/`.

---

## O problema que deu origem ao MOBS

Empresas digitais costumam crescer por **duplicação**.

Duplicam código, projetos, pastas, documentação, identidades visuais, pipelines, automações, decisões — e, com o tempo, **erros**.

No início, copiar parece barato. Depois surgem custos invisíveis:

- retrabalho entre produtos “parecidos, mas diferentes”;
- inconsistência de marca, docs e processos;
- dívida técnica espalhada em cópias;
- conhecimento preso a pessoas;
- onboarding lento;
- manutenção fragmentada;
- auditoria difícil;
- baixa previsibilidade;
- dificuldade real de lançar o próximo produto sem reconstruir o chão.

Contratar mais gente **aumenta a capacidade de operar a complexidade**. Nem sempre **remove a causa**.

O MOBS nasce da recusa de tratar esse padrão como inevitável.

---

## Por que o MOBS existe

O MOBS existe para **desacoplar** o crescimento de produtos, marcas e processos do crescimento **proporcional** da complexidade operacional e técnica.

**Sem a direção MOBS:**

```text
Novo produto
  → nova estrutura
  → novas regras
  → novas automações
  → novos pontos de falha
```

**Com a visão MOBS:**

```text
Novo produto
  → nova configuração
  → contexto resolvido
  → capacidades compartilhadas
  → execução validada
```

Esse segundo fluxo representa a **direção arquitetural** do ecossistema.  
**Hoje** ela está formalizada em documentação. **Ainda não** é um runtime completo.

> O objetivo do MOBS não é apenas automatizar tarefas.  
> Seu objetivo é impedir que a complexidade da engenharia cresça na mesma proporção que o número de produtos, marcas, equipes e processos da organização.

---

## O que é o MOBS

O MOBS (*Missão Build Operating System* — ver seção sobre o nome) é a **plataforma oficial de engenharia** do Ecossistema Missão.

Não é “só um build”. É o sistema que pretende organizar e conectar, sob contratos claros:

- contexto de **projetos**;
- contexto de **marcas**;
- documentação;
- geração de assets;
- validações;
- releases;
- governança;
- automações;
- conhecimento institucional;
- futuras integrações de engenharia.

Com moderação: assim como um sistema operacional coordena recursos da máquina, o MOBS pretende **coordenar capacidades de engenharia** do ecossistema — sem concentrar regras de domínio no núcleo.

A Missão OAB é o **primeiro produto**. Não é o limite.

---

## O que o MOBS não é

Anti-definições — para proteger o propósito:

| O MOBS não é… | Porque… |
|---|---|
| Apenas um conjunto de scripts | Scripts podem existir; isolados, não formam plataforma |
| Apenas um framework | Frameworks não substituem contexto, governança e contratos |
| Apenas um gerador de arquivos | Geração é um meio, não o fim |
| Apenas uma ferramenta de build | O escopo é engenharia compartilhada |
| Automação exclusiva da Missão OAB | Deve servir a qualquer produto do ecossistema |
| Convenções sem execução | Documentação sem capacidade operacional futura é incompleta |
| Monólito de regras | O Core não embute regras de marca/projeto |
| Desculpa para automatizar o mal compreendido | Documentação e aprovação vêm antes do código |
| Substituição de arquitetura, revisão ou governança | Humanos e regras permanecem |

O diferencial está no sistema compartilhado de **contratos, contexto, orquestração, módulos, validação, documentação e governança**.

---

## Como o MOBS funciona conceitualmente

Linguagem acessível do **fluxo oficial atual** (arquitetura documental):

```text
Interface / CLI / CI / IA
    ↓
MOBS Core carrega a configuração inicial
    ↓
MOBS Core aciona o Project Engine
    ↓
Project Engine resolve o contexto do projeto
    ↓
MOBS Core orquestra os demais módulos
    ↓
Engines, Generators e Validators executam suas responsabilidades
    ↓
Logs e resultados são consolidados
```

Reforço:

- o **Core** orquestra;
- o **Project Engine** é a primeira Engine de contexto;
- **Engines** interpretam domínios;
- **Generators** produzem resultados;
- **Validators** verificam conformidade;
- **configurações** declaram diferenças entre projetos e marcas;
- regras específicas **não** devem ser embutidas no Core.

Detalhes técnicos: [`BUILD_SYSTEM.md`](project/automation/BUILD_SYSTEM.md), [`PROJECT_ENGINE.md`](project/automation/PROJECT_ENGINE.md), [`BRAND_ENGINE.md`](project/automation/BRAND_ENGINE.md).

---

## Configuração acima de duplicação

Princípio permanente alinhado à arquitetura:

> Preferir configuração e capacidades reutilizáveis a código específico de produto — quando a diferença for legítima e expressável por contrato.

Isso **não** significa eliminar código.  
Significa centralizar o que é comum e declarar o que é diferente.

Configuração **não** pode virar depósito de exceções.  
Uma boa configuração expressa diferenças reais; o motor permanece genérico.

No horizonte do ecossistema, isso se relaciona a contratos futuros como `project.json` e `brand.json`.  
**Schemas oficiais ainda não estão definidos nesta fase** — pertencem a etapas posteriores de implementação, não a este manifesto.

---

## Como o MOBS reduz custos — hoje e na direção

Para gestores e clientes: **sem percentuais inventados**. O valor é qualitativo e acumulativo.

| Frente | Como a direção MOBS reduz custo |
|---|---|
| **Desenvolvimento repetitivo** | Menos tempo recriando estruturas e padrões já resolvidos |
| **Retrabalho** | Menos divergência entre projetos, identidade e documentação |
| **Manutenção** | Corrigir uma capacidade compartilhada em vez de N cópias |
| **Onboarding** | Uma arquitetura comum e trilha documental clara |
| **Dependência de pessoas** | Conhecimento em contratos, docs, HISTORY e CHANGELOG |
| **Qualidade** | Validators e regras comuns antes da entrega |
| **Novos produtos** | Menos infraestrutura a reinventar a cada lançamento |
| **IA e humanos** | Modelo mental compartilhado no repositório |
| **Governança** | Decisões rastreáveis |
| **Custo de oportunidade** | Tempo mecânico liberado para produto e experiência |

O MOBS **não elimina pessoas**.  
Reduz o trabalho fragmentado que impede pessoas qualificadas de atuar no que gera mais valor.

**Hoje**, parte desse ganho já ocorre pela **organização documental e governança**.  
**A visão** amplifica esses ganhos quando módulos executáveis existirem sob a mesma arquitetura.

---

## Exemplo empresarial

Imagine uma organização com Produtos A, B e C — marcas distintas ou compartilhadas — cada um com site, documentação, assets, validações e releases.

### Modelo fragmentado

Cada produto carrega sua própria infraestrutura e suas próprias regras.  
Três “quase iguais” que divergem em silêncio. Cada correção se multiplica. Cada novo produto reabre o mesmo canteiro.

### Modelo MOBS (direção)

Os produtos compartilham a **plataforma**.  
Declaram contexto e diferenças por configuração.  
Capacidades comuns — marca, docs, assets, validação, release — evoluem no centro; o produto traz conteúdo e identidade.

O exemplo é didático: não depende da Missão OAB para ser compreendido.  
A Missão OAB é apenas o primeiro caso real do Ecossistema Missão.

---

## Princípios fundamentais

Alinhados a [`MOBS.md`](project/automation/MOBS.md), [`AUTOMATION_RULES.md`](project/automation/AUTOMATION_RULES.md) e [`PROJECT_RULES.md`](PROJECT_RULES.md):

1. **Plataforma antes de soluções isoladas** — preferir capacidade compartilhada a atalho local.
2. **Configuração acima de duplicação** — declarar diferença; não copiar o sistema.
3. **Documentação antes da implementação** — nenhuma automação nasce sem arquitetura aprovada.
4. **Arquitetura antes da automação** — automatizar o compreendido, não o caos.
5. **Contexto antes da ação** — Project Engine via Core antes de Generators/Validators.
6. **Governança antes da velocidade irresponsável** — aprovação, HISTORY e CHANGELOG importam.
7. **Reutilização acima de cópia** — um módulo, muitos projetos.
8. **Contratos claros acima de conhecimento implícito** — o repositório deve explicar a decisão.
9. **Módulos independentes acima de acoplamento** — falha ou evolução localizada.
10. **Validação acima de confiança informal** — verificar em vez de “achar que está certo”.
11. **Conhecimento institucional acima de dependência individual** — o que importa sobrevive à pessoa.
12. **Evolução incremental acima de saltos sem fundamento** — roadmap e aprovação guiam o avanço.

---

## Bússola de decisão

Antes de aceitar uma mudança relevante, perguntar:

1. Esta mudança beneficia a **plataforma** ou só contorna um caso específico?
2. Uma **configuração** resolveria a diferença sem criar exceção perigosa?
3. Estamos criando capacidade **reutilizável** ou duplicando solução?
4. O **Core** está recebendo regras que pertencem a uma Engine?
5. A automação tem documentação, contrato, validação e responsabilidade claros?
6. A mudança **reduz** ou **aumenta** a complexidade total do ecossistema?
7. Um novo colaborador compreenderia isso **pelo repositório**?
8. Resolvemos a **causa** ou só aceleramos um processo ruim?
9. Fará sentido com **dez ou cem** projetos?
10. O que acontece quando quem implementou **não estiver** na empresa?

> Velocidade verdadeira não é fazer uma tarefa isolada mais rápido.  
> É construir uma capacidade que torne todas as próximas execuções mais rápidas, seguras e previsíveis.

---

## Como saber se o MOBS está cumprindo a missão

Sinais **positivos** (sem KPIs inventados):

- menor atrito para iniciar projetos;
- menos arquivos e scripts duplicados;
- menos divergência entre produtos;
- maior reutilização de módulos;
- documentação encontrada com facilidade;
- decisões rastreáveis;
- onboarding mais previsível;
- automações com contratos claros;
- mudanças globais propagáveis com mais segurança;
- menos exceções específicas;
- novos produtos sem reconstruir a infraestrutura do zero.

Sinais de **alerta**:

- condicionais por produto no núcleo;
- cópia de scripts;
- regras específicas no Core;
- config como depósito de exceções;
- documentos contraditórios;
- automações sem validação;
- conhecimento de uma só pessoa;
- módulos que não evoluem de forma independente.

---

## O nome MOBS — honestidade documental

**MOBS** é, em primeiro lugar, o **nome e a marca** da plataforma.

A expressão *Mission Build Operating System* registra a **origem conceitual** do escopo (build, documentação, assets, automação).  
As iniciais literais dessa expressão formariam **MBOS**, não MOBS.  
Portanto, **não** se apresenta *Mission Build Operating System* como acrônimo literal perfeito.

Com a evolução da arquitetura, a marca passou a representar algo maior que o ponto de partida:

> **MOBS — a plataforma de engenharia do Ecossistema Missão.**

Neste momento:

- **não** se renomeia o produto;
- **não** se cria nova expansão oficial da “sigla”;
- **não** se substitui “Build” por “Engineering” como se uma decisão formal de branding já tivesse sido aprovada.

Essa discussão poderá ocorrer no futuro por decisão explícita de produto e marca.

---

## Visão de longo prazo

A visão futura **pode** incluir (sem afirmar existência atual):

- automações de documentação;
- geração e validação de assets;
- pipelines e testes;
- releases e observabilidade;
- compliance;
- integrações com IA;
- geração assistida de código;
- gestão de contratos de configuração;
- inteligência operacional;
- outros módulos independentes.

O valor não está em “ter tudo”.  
Está em permitir que cada capacidade nova opere sob a **mesma arquitetura coerente**.

Roadmap: [`AUTOMATION_ROADMAP.md`](project/automation/AUTOMATION_ROADMAP.md).

---

## Frase de posicionamento

> O MOBS transforma a engenharia da organização em uma plataforma reutilizável, na qual cada novo produto deixa, progressivamente, de exigir uma nova estrutura e passa a ser uma nova configuração sobre capacidades compartilhadas.

---

## Encerramento

Tecnologias mudarão. Módulos evoluirão. Contratos serão refinados.

O **propósito** deve permanecer: transformar conhecimento repetível em capacidade compartilhada — para que cada melhoria da plataforma torne o **próximo** projeto mais simples que o anterior.

> Construir uma vez a capacidade certa.  
> Depois, multiplicar produtos — sem multiplicar o caos.

---

## Leitura técnica complementar

| Documento | Responde |
|---|---|
| [`project/automation/MOBS.md`](project/automation/MOBS.md) | Visão da plataforma e escopo |
| [`project/automation/BUILD_SYSTEM.md`](project/automation/BUILD_SYSTEM.md) | Arquitetura e taxonomia |
| [`project/automation/PROJECT_ENGINE.md`](project/automation/PROJECT_ENGINE.md) | Contexto de projeto |
| [`project/automation/BRAND_ENGINE.md`](project/automation/BRAND_ENGINE.md) | Contexto de marca |
| [`project/automation/AUTOMATION_ROADMAP.md`](project/automation/AUTOMATION_ROADMAP.md) | Evolução planejada |
| [`project/automation/AUTOMATION_RULES.md`](project/automation/AUTOMATION_RULES.md) | Regras de toda automação |
| [`PROJECT_INDEX.md`](PROJECT_INDEX.md) | Porta de entrada e Decision Tree |
| [`PROJECT_RULES.md`](PROJECT_RULES.md) | Contrato operacional |
| [`AI_CONTEXT.md`](AI_CONTEXT.md) | Orientação para agentes de IA |
