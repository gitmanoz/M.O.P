# Contrato de Projeto do MOBS

> Um Projeto é a unidade de engenharia cujo contexto a plataforma resolve.
> Este documento especializa essa promessa — sem inventar o conceito, sem escolher o arquivo.

Este é o **primeiro Contrato Concreto** do MOBS.
Ele **não** cria a entidade Projeto.
Ele **formaliza** o que o domínio já define e o que a constituição dos contratos exige.

Autoridade, nesta ordem:

1. [`WHY_MOBS.md`](WHY_MOBS.md) — propósito e princípios
2. [`project/automation/MOBS.md`](project/automation/MOBS.md) — arquitetura da plataforma
3. [`DOMAIN_MODEL.md`](DOMAIN_MODEL.md) — significado de Projeto e relações
4. [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) — regras gerais de todo contrato

Este documento **obedece** a essa cadeia.
Não a substitui. Não a reescreve. Não move responsabilidades entre elas.

Trilha:

```text
WHY_MOBS → MOBS → DOMAIN_MODEL → CONFIGURATION_CONTRACTS → PROJECT_CONTRACT
  → BRAND_CONTRACT (futuro) → … → schemas → implementação
```

---

## 1. Estado do documento

| Dimensão | Situação |
|---|---|
| **Tipo** | Contrato concreto de configuração |
| **Conceito de domínio** | Projeto ([`DOMAIN_MODEL.md`](DOMAIN_MODEL.md)) |
| **Constituição aplicável** | [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) |
| **Schemas / serializações** | Não definidos aqui |
| **Implementação** | Não iniciada |

### O que este documento não faz

- Não define campos, schemas, formatos nem paths.
- Não escolhe tecnologia de representação.
- Não redefine o significado de Projeto no domínio.
- Não altera a taxonomia Core / Engine / Generator / Validator.
- Não descreve algoritmos, APIs, layouts físicos ou runtime.
- Não substitui [`PROJECT_ENGINE.md`](project/automation/PROJECT_ENGINE.md) (papel da Engine).

---

## 2. Objetivo

Formalizar o **acordo** entre quem declara um Projeto e quem o resolve ou consome, de modo que:

- o significado de Projeto permaneça estável;
- responsabilidades e limites fiquem explícitos;
- evolução e depreciação sejam governáveis;
- a plataforma possa orquestrar a partir de um contexto resolvido — sem embutir regras de projeto no Core.

Alinhado a [`WHY_MOBS.md`](WHY_MOBS.md): configuração acima de duplicação; documentação antes da implementação; Core genérico.

---

## 3. Princípios

Este contrato **deriva** dos princípios de [`WHY_MOBS.md`](WHY_MOBS.md). Não os repete — aplica-os à entidade Projeto:

| Princípio | Como se manifesta aqui |
|---|---|
| **Domínio antes da implementação** | O acordo formaliza o conceito já nomeado no domínio; não antecipa código |
| **Contratos antes de schemas** | Expectativas e invariantes vêm antes de qualquer recorte mecanicamente validável |
| **Configuração antes da duplicação** | Diferenças legítimas entre soluções expressam-se por declaração, não por forks de infraestrutura |
| **Core genérico** | Regras de Projeto não migram para o orquestrador |
| **Especialização por camadas** | A constituição define a regra geral; este documento apenas especializa para Projeto |

A hierarquia WHY_MOBS → … → PROJECT_CONTRACT é a forma institucional dessa especialização.

---

## 4. Posição na arquitetura

```text
Modelo de Domínio          →  o que Projeto significa
    ↓
CONFIGURATION_CONTRACTS    →  como todo contrato deve existir
    ↓
PROJECT_CONTRACT           →  especialização para Projeto (este documento)
    ↓
Schemas / serializações    →  futuros; materializam instâncias
    ↓
Contexto resolvido         →  resultado da resolução atribuída à Project Engine
    ↓
Execução                   →  Core e módulos
```

Se este contrato contradisser o domínio ou a constituição, **este contrato** está errado.

---

## 5. Filosofia

Um Projeto existe para **organizar uma solução** construída sobre o MOBS.

Ele estabelece o **contexto organizacional** que a plataforma interpretará.
Não executa. Não orquestra a fila global. Não gera artefatos. Não define identidade visual.

| Camada | Responsabilidade |
|---|---|
| **Projeto** | Declara o que a solução é, no domínio |
| **Contrato** | Promete o que essa declaração deve garantir |
| **Engines** | Cumprem a resolução e a interpretação atribuídas pelo contrato |
| **Plataforma (Core + módulos)** | Executa |

Sem Projeto formal, cada módulo inventa “qual é a entrega”.
Com Projeto formal, a plataforma **promete** um contexto de engenharia compartilhado.

---

## 6. O que é um Projeto

Conforme [`DOMAIN_MODEL.md`](DOMAIN_MODEL.md):

> Um **Projeto** é a unidade de engenharia cujo contexto a plataforma resolve para orquestrar execução.

Neste contrato, “Projeto” designa essa **entidade do domínio** — não um artefato de disco, não um processo em execução.

### Por que um Projeto existe

- dar à plataforma uma unidade estável de engenharia;
- permitir multi-projeto sem hardcode no Core;
- separar entrega (Projeto) de identidade (Marca);
- expressar diferenças legítimas por configuração, não por forks de infraestrutura.

### Qual problema resolve

Sem Projeto como contrato, a orquestração depende de memória informal, paths implícitos ou regras de produto no Core.
Com Projeto como contrato, produtores e consumidores compartilham expectativas verificáveis.

---

## 7. O que um Projeto representa

Um Projeto representa, no domínio:

- a **identidade** da unidade de engenharia (quem é, no ecossistema);
- o **escopo organizacional** da solução (o que pertence a essa unidade);
- a **base** sobre a qual a plataforma habilita módulos e associações;
- a **entrada** cuja resolução de contexto este contrato atribui à Project Engine.

Detalhe de quais atributos concretos existirão: etapa futura de schema — **não** este documento.

---

## 8. O que um Projeto não representa

Um Projeto **não é**:

| Não confundir com | Motivo |
|---|---|
| Repositório Git | Hospedagem ≠ identidade de domínio |
| Diretório / path | Representação física, não o conceito |
| Aplicação / runtime | Superfície ou episódio de execução |
| Engine, Generator ou Validator | Componentes da plataforma; não a entidade |
| Marca | Identidade visual/institucional — entidade independente |
| Conjunto de Capabilities | Capabilities são capacidades habilitáveis; não definem o Projeto |
| Configuração / serialização | Descrevem ou transportam; não **são** o Projeto |
| Produto comercial | Noção de negócio; cardinalidade com Projeto permanece aberta no domínio |
| Contrato (este documento) | O contrato governa; a instância declara um Projeto concreto |

---

## 9. Responsabilidades

### Pertencem ao Projeto (como entidade sob este contrato)

- declarar-se como unidade de engenharia do ecossistema;
- delimitar o que a plataforma deve tratar como **seu** contexto;
- permitir associação **declarativa e opcional** a Marca(s), quando houver;
- expressar diferenças legítimas (incluindo habilitação de capabilities, quando o modelo existir) sem violar o núcleo deste contrato;
- permanecer estável como conceito enquanto instâncias e serializações mudam.

### Nunca pertencem ao Projeto

- orquestração global (Core);
- resolução de contexto (responsabilidade atribuída à Project Engine);
- geração de artefatos (Generators);
- verificação de conformidade como Source of Truth (Validators verificam; não definem);
- Source of Truth de marca (Marca / Brand Engine);
- regras específicas de um único produto embutidas como se fossem da plataforma;
- lógica de implementação, paths obrigatórios ou escolha de tecnologia.

O que **nunca** pertence a um contrato em geral permanece em [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) §6.

---

## 10. Escopo e limites

### Escopo deste contrato

Cobre o acordo formal sobre a entidade **Projeto**: expectativas, papéis, invariantes, evolução e relações com o restante do domínio e da plataforma.

### Limites deliberados

- **Marca** — contrato próprio futuro (`BRAND_CONTRACT.md`).
- **Capability** — modelo/contrato futuros; aqui só a relação conceitual.
- **Resolução** — detalhe de algoritmo e erros em `RESOLUTION_MODEL` / Engines (futuro).
- **Serialização e schema** — etapas posteriores.
- **Produto / Organização** — hipóteses ou fronteiras do domínio; não fechadas aqui.

---

## 11. Garantias

Consumidores deste contrato podem confiar que, enquanto a versão conceitual do acordo for a mesma:

### Garantias estruturais

Estabilidade conceitual do acordo:

1. **Significado** — “Projeto” continua sendo a unidade de engenharia do domínio, não um path, diretório ou runtime.
2. **Independência** — Projeto e Marca permanecem entidades distintas.
3. **Associação** — vínculo Projeto↔Marca, quando existir, é declarativo e opcional — nunca hardcoded no Core.
4. **Evolução governada** — incompatibilidade e depreciação seguem [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) §12, especializadas abaixo.

### Garantias operacionais

Comportamento esperado da plataforma sob este acordo:

1. **Resolução** — este contrato estabelece que a resolução do contexto de Projeto é responsabilidade da **Project Engine**, acionada pelo Core como primeira Engine de contexto.
2. **Core genérico** — o Core permanece responsável apenas pela orquestração; não embute regras profundas de projeto.
3. **Consumo** — consumidores trabalham preferencialmente sobre o **contexto resolvido**, não sobre a representação física da instância.
4. **Falha explícita** — violações devem ser detectáveis e comunicáveis; não silenciosas.

> Contratos descrevem expectativas.
> Não implementações.

---

## 12. Invariantes

Enquanto este contrato vigorar, deve permanecer verdadeiro:

1. Todo Projeto sob o MOBS é uma **entidade do domínio**, não uma pasta.
2. Um Projeto **pode** existir sem Marca; uma Marca **pode** existir sem Projeto.
3. A associação a Marca, se houver, é **declarativa** — formato da referência: decisão futura.
4. N projetos **podem** compartilhar uma Marca; 1:1 também é válido — entidades continuam separadas.
5. O Core **aciona** a Project Engine como primeira Engine de contexto de projeto; a Engine **não** orquestra a fila global.
6. Consumidores preferem o **contexto resolvido** ao acoplamento à representação física da instância.
7. Extensões **não** corrompem o núcleo deste contrato nem introduzem regras de produto no Core.
8. Nada neste contrato obriga uma tecnologia, path ou schema específicos.

Violação de invariante: a instância (ou o uso) é **inválida** até correção ou mudança explícita do contrato.
Princípios de validação: [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) §8.

---

## 13. Owner e Authority

Definições gerais: [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) §7.

| Papel | Atribuição neste contrato |
|---|---|
| **Authority** | [`DOMAIN_MODEL.md`](DOMAIN_MODEL.md) — define oficialmente o significado de Projeto |
| **Owner** | Governança documental do MOBS (arquitetura do Ecossistema Missão) — responde pela evolução e manutenção **deste** contrato |

Owner e Authority **não** são o mesmo tipo de responsabilidade.
Podem alinhar-se na prática; o modelo **não** pressupõe identidade.

Alterar o significado de Projeto no domínio exige a Authority (domínio).
Alterar as expectativas formais deste acordo exige o Owner, em harmonia com a Authority e com [`PROJECT_RULES.md`](PROJECT_RULES.md) / [`AUTOMATION_RULES.md`](project/automation/AUTOMATION_RULES.md).

---

## 14. Produtor, Validador, Resolvedor e Consumidores

| Papel | Atribuição para Projeto |
|---|---|
| **Produtor** | Quem declara ou mantém **instâncias** de Projeto alinhadas a este contrato (configuração / declaração autorizada) |
| **Validador** | Validators — verificam conformidade; não redefinem o acordo |
| **Resolvedor** | **Project Engine** — este contrato atribui a ela a interpretação da instância válida em **contexto de projeto** |
| **Consumidores** | **MOBS Core** (orquestração) e módulos subsequentes (Engines, Generators, Validators) que recebem o contexto via Core |

O Projeto permanece entidade do domínio.
A Engine **cumpre** a responsabilidade de resolução definida pelo contrato — não substitui o conceito.

Consumidores **não** redefinem o contrato ad hoc.
Consumidores **não** devem acoplar-se à serialização física.
Detalhe: [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) §9–§10.

---

## 15. Relação com o Domain Model

| Direção | Conteúdo |
|---|---|
| **Depende de** | Conceito Projeto, relações Projeto↔Marca, Capability (aberto), Core, Engines, contexto resolvido |
| **Não redefine** | Vocabulário nem fronteiras já aprovadas no domínio |
| **Não fecha** | Cardinalidade Produto↔Projeto; Organização; catálogo detalhado de Capabilities |

O domínio permanece a **fonte da verdade conceitual**.
Este contrato é a **promessa operacional** sobre Projeto.

---

## 16. Relação com Configuration Contracts

| Direção | Conteúdo |
|---|---|
| **Depende de** | Constituição inteira: ownership, validação, consumo, evolução, depreciação, extensões, anti-acoplamentos |
| **Especializa** | Elementos obrigatórios de todo contrato ([`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) §5) para a entidade Projeto |
| **Não duplica** | Regras gerais — referencia e aplica |

`CONFIGURATION_CONTRACTS.md` continua sendo a **constituição**.
`PROJECT_CONTRACT.md` é **cidadão** dessa constituição.

---

## 17. Relação com Core

| Core faz | Core não faz |
|---|---|
| Carrega configuração inicial e aciona a Project Engine | Embutir regras profundas de Projeto |
| Recebe o contexto resolvido e orquestra módulos | Ser Resolvedor do Projeto |
| Permanece genérico ao ecossistema | Conhecer invariantes “por hardcode” de um produto |

Dependência: Projeto → Core **não** é de interpretação de domínio; é de **orquestração** após resolução.

---

## 18. Relação com Engines

| Engine | Relação com Projeto |
|---|---|
| **Project Engine** | Resolvedor oficial do contexto de Projeto, por atribuição deste contrato; primeira Engine de contexto |
| **Brand Engine** | Não resolve o contexto de Projeto; pode consumir associação declarativa exposta no contexto, quando houver |
| **Demais Engines** | Consomem o que o contrato e o contexto autorizam; não substituem o Projeto |

Este contrato estabelece que a resolução do contexto de Projeto é responsabilidade da Project Engine.
A Engine **não** gera assets e **não** orquestra a fila global
([`PROJECT_ENGINE.md`](project/automation/PROJECT_ENGINE.md) — responsabilidade de Engine, não redefinida aqui).

---

## 19. Relação com Brands

Projeto ⊥ Marca (independência oficial no domínio).

| Dependência | Status |
|---|---|
| Projeto **pode** referenciar Marca | Opcional, declarativo |
| Projeto **exige** Marca | Não |
| Marca **exige** Projeto | Não |
| Formato da referência | Futuro (`BRAND_CONTRACT` / schema) |
| Hardcode Projeto↔Marca no Core | Proibido |

Este contrato **não** define o contrato de Marca.

---

## 20. Relação com Capabilities

| Relação | Conteúdo |
|---|---|
| **Conceitual** | Um Projeto pode habilitar ou exigir Capabilities reutilizáveis da plataforma |
| **Não é** | Capability = Projeto; Capability = feature ad hoc de um produto |
| **Modelo detalhado** | Em aberto (`CAPABILITY_MODEL` / contratos futuros) |

Enquanto o catálogo não existir, este contrato **não** inventa flags sem semântica.
Só registra a relação admitida pelo domínio.

---

## 21. Relação com Resolved Context

| Artefato | Papel |
|---|---|
| Este contrato | Expectativas sobre Projeto |
| Instância de Projeto | Valores declarados (futura serialização) |
| Contexto resolvido de projeto | Interpretação validada na resolução atribuída à Project Engine |

O contexto resolvido **deriva** do contrato + instância + resolução.
Não substitui este contrato.
Não carrega significado que este contrato não autoriza.

Independência física: trocar a serialização da instância não deve alterar o significado do contexto, se contrato e resolução forem preservados
([`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) §11).

---

## 22. Compatibilidade e versionamento conceitual

Política geral: [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) §12.

### Neste contrato

| Tipo | Ideia |
|---|---|
| **Compatível** | Consumidores antigos do contexto de Projeto permanecem corretos sob as mesmas garantias e invariantes |
| **Incompatível** | Mudança de invariante, de obrigatoriedade essencial ou de significado de Projeto — exige versão conceitual nova e transição explícita |

**Versionamento conceitual** deste documento (e do acordo) é independente de numeração de schema ou de arquivo.
Mecanismos concretos de numeração e migração: decisão futura — não aqui.

Defaults futuros **não** devem alterar significado em silêncio.

**Independência da serialização:** um contrato nunca pode depender de detalhes de sua futura serialização.
A representação física materializa o acordo; não o define.

---

## 23. Evolução

Evoluir este contrato significa alterar expectativas formais sobre Projeto de forma **explícita** e documentada.

- Preferir mudanças que preservem garantias aos consumidores.
- Mudanças incompatíveis exigem comunicação, migração e alinhamento Owner ↔ Authority.
- Consumidores e Engines **não** evoluem o contrato por uso local.
- Evolução de **instâncias** (novos projetos, novos atributos permitidos) não substitui evolução do **acordo**.
- Evolução do acordo **não** se ancora em detalhes de serialização futura.

Registro em HISTORY/CHANGELOG conforme governança do repositório.

---

## 24. Depreciação

Deprecar parte deste acordo (ou o acordo inteiro, em hipótese extrema) exige:

- motivo;
- substituto (se houver);
- janela de transição;
- proibição de uso em novos produtores após a data definida.

Remoção silenciosa de expectativas sobre Projeto é **anti-padrão**.

Depreciação de uma **instância** de Projeto (projeto aposentado) é ato de ciclo de vida da solução — distinto da depreciação deste contrato — e deve ser explícita quando afetar consumidores.

---

## 25. Extensões

Extensões específicas de um Projeto **podem** existir para diferenças legítimas, desde que:

- não violem os invariantes deste núcleo;
- tenham proprietário;
- sejam documentáveis e validáveis;
- não escondam acoplamento nem regras de produto no Core.

Extensão sem registro no acordo-base é dívida estrutural
([`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) §13).

---

## 26. Glossário (escopo Projeto)

| Termo | Neste documento |
|---|---|
| **Projeto** | Entidade do domínio — unidade de engenharia |
| **Contrato de Projeto** | Este acordo (PROJECT_CONTRACT) |
| **Instância de Projeto** | Declaração concreta alinhada ao contrato |
| **Contexto de projeto** | Contexto resultante da resolução atribuída à Project Engine |
| **Owner** | Quem mantém este contrato |
| **Authority** | Quem define o significado de Projeto (domínio) |
| **Associação declarativa** | Vínculo opcional Projeto↔Marca sem hardcode |

Demais termos oficiais: [`DOMAIN_MODEL.md`](DOMAIN_MODEL.md) e [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md).

---

## 27. Questões em aberto (não bloqueantes)

| Questão | Onde resolver |
|---|---|
| Campos e schema de instância | Schema futuro derivado deste contrato |
| Formato e localização da serialização | Após schema |
| Formato da referência a Marca | `BRAND_CONTRACT` / schema |
| Catálogo e declaração de Capabilities | `CAPABILITY_MODEL` |
| Cardinalidade Produto↔Projeto | Domínio + glossário de produto |
| Formato canônico de erros de validação | `RESOLUTION_MODEL` / Validators |
| Numeração e ferramentas de migração | Política + governança |

---

## 28. Próximos documentos

1. `BRAND_CONTRACT.md` — contrato concreto de Marca
2. `CAPABILITY_MODEL.md` — se necessário
3. `RESOLUTION_MODEL.md`
4. Schemas e exemplos
5. Implementação e Validators

O roadmap de módulos permanece em [`AUTOMATION_ROADMAP.md`](project/automation/AUTOMATION_ROADMAP.md).

---

## 29. Encerramento

O domínio nomeou o Projeto.
A constituição exigiu um contrato.
Este documento **promete** o que um Projeto deve significar para a plataforma.

Pastas mudarão. Arquivos mudarão. Schemas virão.
A unidade de engenharia — e as garantias deste acordo — devem permanecer.

Um Projeto não nasce da representação física.
A representação física existe porque o domínio já reconhece um Projeto.

> Organize a solução.
> Não confunda entidade com representação.
> Atribua a resolução à Engine.
> Deixe o Core orquestrar.

---

## Referências

- [`DOMAIN_MODEL.md`](DOMAIN_MODEL.md)
- [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md)
- [`WHY_MOBS.md`](WHY_MOBS.md)
- [`project/automation/MOBS.md`](project/automation/MOBS.md)
- [`project/automation/PROJECT_ENGINE.md`](project/automation/PROJECT_ENGINE.md)
- [`project/automation/BUILD_SYSTEM.md`](project/automation/BUILD_SYSTEM.md)
- [`project/automation/BRAND_ENGINE.md`](project/automation/BRAND_ENGINE.md)
- [`project/automation/AUTOMATION_RULES.md`](project/automation/AUTOMATION_RULES.md)
- [`project/automation/AUTOMATION_ROADMAP.md`](project/automation/AUTOMATION_ROADMAP.md)
- [`PROJECT_INDEX.md`](PROJECT_INDEX.md)
- [`PROJECT_RULES.md`](PROJECT_RULES.md)
- [`AI_CONTEXT.md`](AI_CONTEXT.md)
