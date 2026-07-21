# Modelo de Domínio do MOBS

> Um sistema só é configurável quando o mundo que ele compreende já foi nomeado.  
> O modelo de domínio é essa linguagem — antes de qualquer campo, arquivo ou schema.

Este documento define a **gramática conceitual** da plataforma de engenharia do Ecossistema Missão: o que existe no universo do MOBS, o que cada conceito significa e como os conceitos se relacionam.

Ele **não** define campos de `project.json` ou `brand.json`.  
Ele **não** escolhe JSON, YAML ou TOML.  
Ele prepara o terreno sobre o qual os contratos concretos do **MOBS 0.2 — Configuration Contracts** foram derivados (`PROJECT_CONTRACT.md`, `BRAND_CONTRACT.md`).

---

## 1. Estado do documento

| Dimensão | Situação |
|---|---|
| **Arquitetura aprovada (presente)** | MOBS 0.1.1 documental: taxonomia Core / Engine / Generator / Validator; fluxo Core → Project Engine → Core → módulos; relação Projeto × Marca; princípios em [`WHY_MOBS.md`](../foundation/WHY_MOBS.md) |
| **Formalizado aqui (modelo conceitual)** | Vocabulário normativo, relações oficiais vs. abertas, tese “contrato ≠ arquivo”, fronteiras de domínio |
| **Contratos concretos (MOBS 0.2)** | [`PROJECT_CONTRACT.md`](../contracts/PROJECT_CONTRACT.md) e [`BRAND_CONTRACT.md`](../contracts/BRAND_CONTRACT.md) — aprovados; ownership formal estabelecido; schemas e serialização — **ainda não escritos** |
| **Implementação futura** | Schemas, runtime, Validators executáveis, migrações — **não iniciada** |

### O que este documento não faz

- Não cria schemas nem arquivos de configuração.
- Não implementa Core, Engines, Generators ou Validators.
- Não altera a taxonomia nem as fronteiras do Core já aprovadas.
- Não transforma hipóteses em decisões oficiais.

Leitura estratégica: [`WHY_MOBS.md`](../foundation/WHY_MOBS.md).  
Visão técnica: [`project/automation/MOBS.md`](../../../project/automation/MOBS.md).  
Arquitetura: [`project/automation/BUILD_SYSTEM.md`](../../../project/automation/BUILD_SYSTEM.md).

---

## 2. Por que o modelo de domínio vem antes dos contratos

Começar diretamente por um arquivo de configuração convida a erros estruturais:

- schemas orientados por **campos** em vez de **conceitos**;
- acúmulo de flags sem semântica;
- exceções locais disfarçadas de configuração;
- dependências implícitas entre componentes;
- crescimento não governado;
- confusão entre domínio e serialização;
- contratos sem proprietário;
- campos cuja finalidade ninguém sabe explicar.

O modelo de domínio é a **fonte conceitual** dos contratos posteriores.  
Só depois de nomear o mundo a plataforma pode declarar, validar e versionar o que precisa existir.

> Um contrato não é um arquivo.

Um contrato é a definição formal das informações, garantias, responsabilidades e limites necessários para que um componente cumpra sua função.  
JSON, YAML, TOML, banco ou API são apenas **serialização, transporte ou persistência** possíveis.

### Hierarquia da verdade conceitual

> O modelo de domínio é a **fonte da verdade conceitual** da plataforma.

```text
Modelo de domínio
    ↓
Contratos
    ↓
Schemas (futuros)
    ↓
Configurações serializadas
    ↓
Contextos resolvidos
    ↓
Execução
```

- o **domínio** define significado;
- os **contratos** transformam significado em expectativas formais;
- os **schemas** (etapa futura) tornam parte dessas expectativas mecanicamente verificável;
- as **serializações** carregam valores concretos;
- as **Engines** resolvem esses valores em contexto;
- os **módulos** executam usando o contexto resolvido.

> Se um schema futuro contradisser o modelo de domínio, o problema está no schema ou no contrato derivado — não no domínio aprovado.

### Fronteira com Configuration Contracts

Este documento define **conceitos e relações**.
[`CONFIGURATION_CONTRACTS.md`](../contracts/CONFIGURATION_CONTRACTS.md) define **como conceitos se tornam contratos governados** (ownership, validação, evolução, depreciação).
Contratos concretos, schemas e serializações vêm depois.

### Independência da representação física

> Nenhum componente do MOBS deve precisar conhecer a representação física de um contrato para compreender seu significado.

Consumidores devem depender de **conceitos** e de **contextos resolvidos**.  
Paths, extensões e formatos pertencem às camadas de carregamento, adaptação ou persistência — não ao significado do domínio.  
Trocar JSON por outra serialização **não** deveria alterar o domínio.

Consequências práticas:

| Consequência | Efeito |
|---|---|
| **Desacoplamento** | Módulos dependem de conceitos e contextos resolvidos, não de paths ou formatos físicos |
| **Validação** | Validators verificam invariantes do domínio, não só sintaxe de arquivo |
| **Evolução** | Mudanças de schema futuro não reescrevem a linguagem da plataforma |
| **Interoperabilidade** | Humanos e IAs compartilham o mesmo vocabulário |
| **Versionamento** | Compatibilidade fala de significado, não só de chaves de serialização |
| **Independência** | Modelo e representação evoluem em ritmos distintos |
| **Longevidade** | O domínio sobrevive à troca de formato |
---

## 3. Escopo do domínio MOBS

O modelo pretende representar o suficiente para que a plataforma compreenda **o que automatizar**, **em nome de quem** e **com quais capacidades**, sem embutir regras de produto no Core.

### Classificação dos conceitos

| Conceito | Classificação | Status |
|---|---|---|
| **Ecossistema Missão** | contexto institucional | Fundamental (nomeado na documentação) |
| **Organização** | possibilidade futura | Hipótese controlada — **fora** do modelo mínimo atual |
| **Projeto** | conceito fundamental | Oficial ([`PROJECT_ENGINE.md`](../../../project/automation/PROJECT_ENGINE.md)) |
| **Produto** | noção de negócio | Relacionado, distinto de Projeto — fronteira ainda a refinar |
| **Marca** | conceito fundamental | Oficial ([`BRAND_ENGINE.md`](../../../project/automation/BRAND_ENGINE.md)) |
| **Capability** | capacidade | Conceito introduzido aqui; modelo detalhado ainda em aberto |
| **Contrato** | artefato conceitual | Formalizado aqui (independente de arquivo) |
| **Configuração** | declaração | Formalizada aqui (sem schema) |
| **Contexto (resolvido)** | contexto resolvido | Oficial no fluxo arquitetural |
| **MOBS Core** | componente arquitetural | Oficial |
| **Engine** | componente arquitetural | Oficial |
| **Project Engine** | componente arquitetural | Oficial |
| **Brand Engine** | componente arquitetural | Oficial |
| **Generator** | componente arquitetural | Oficial |
| **Validator** | componente arquitetural | Oficial |
| **Pipeline / Execution** | processo | Conceitual; detalhe de runtime futuro |
| **Result / Diagnostic** | resultado | Conceitual; formato futuro |
| **Release** | processo / artefato | Previsto no roadmap; não detalhado aqui |

Conceitos não essenciais não foram forçados à lista.

---

## 4. Glossário normativo

### Ecossistema Missão

Conjunto de produtos, marcas e plataformas sob a identidade Missão.  
O MOBS é a **plataforma de engenharia** desse ecossistema.  
Não é uma entidade serializada — é o horizonte institucional.

### Projeto

Unidade de engenharia que o MOBS compreende para orquestrar superfícies, módulos e associações (incluindo marca, quando houver).  
**Não é** necessariamente sinônimo de repositório, pasta, produto comercial ou marca.  
**Produzido/resolvido por:** Project Engine (contexto).  
**Consumido por:** Core (orquestração) e módulos subsequentes.  
Detalhe: seção 6 e [`PROJECT_ENGINE.md`](../../../project/automation/PROJECT_ENGINE.md).

### Marca

Identidade oficial (recursos, regras e metadados) que responde “quais tokens e assets oficiais?”.  
**Não é** o projeto, nem um tema CSS improvisado, nem um PNG isolado.  
**Produzido/resolvido por:** Brand Engine.  
**Consumido por:** Generators e módulos que dependem de identidade.  
Detalhe: seção 7 e [`BRAND_ENGINE.md`](../../../project/automation/BRAND_ENGINE.md).

### Capability

Capacidade reutilizável da plataforma que um projeto pode habilitar ou exigir.  
**Não é** apenas um booleano; **não é** uma feature ad hoc de um único produto.  
Modelo de declaração, dependências e descoberta: **em aberto** (seção 8 e seção 17).

### Contrato

Definição formal do que deve ser verdadeiro entre produtor e consumidor de informação — independente do formato.  
**Não é** schema, arquivo ou instância.  
Detalhe: seção 9.

### Configuração

Expressão declarativa de **diferenças legítimas** entre projetos/marcas, alinhada a um contrato.  
**Não deve** ser depósito de exceções nem linguagem de programação improvisada.  
Detalhe: seção 10.

### Contexto resolvido

Interpretação validada e normalizada, pronta para consumo pelos módulos — resultado da resolução por Engine responsável.  
**Não é** a configuração bruta nem o contrato em si.

### MOBS Core

Orquestrador: carrega configuração inicial, aciona Engines, seleciona, ordena, consolida.  
**Não deve** conter regras de projeto, marca ou produto.  
Detalhe: seção 12 e [`BUILD_SYSTEM.md`](../../../project/automation/BUILD_SYSTEM.md).

### Engine

Módulo que resolve **contexto ou domínio** sem gerar artefatos em massa.  
Exemplos: Project Engine, Brand Engine, Documentation Engine, Release Engine.

### Generator

Módulo que **produz artefatos derivados** a partir de fontes oficiais + contexto.  
Exemplo previsto: Asset Generator.

### Validator

Módulo que **verifica conformidade** e emite pass/fail; não é Source of Truth.

### Produto

Oferta ou entrega de negócio (ex.: Missão OAB). Pode mapear-se a um ou mais Projetos.  
A cardinalidade Produto ↔ Projeto **não está fechada** como schema; permanece decisão futura quando contratos forem modelados.

### Organização

O domínio **admite a possibilidade futura** de uma entidade Organização, mas ela **não** faz parte do modelo mínimo atualmente necessário para o MOBS.  
Hipótese controlada: sem obrigatoriedade, sem schema, sem relação oficial com Projeto.

---

## 5. Relações entre conceitos

### Diagrama sustentado pela arquitetura atual

```text
Ecossistema Missão
        │
        │  (contém / abrange)
        ▼
   Projeto(s)  ←──── associação declarativa (opcional) ────→  Marca(s)
        │
        │  configuração inicial
        ▼
   MOBS Core
        │
        ├─► Project Engine  →  contexto de projeto
        │         │
        │         └── (se houver vínculo) associação declarativa com uma Marca
        │
        ├─► Brand Engine    →  contexto de marca
        │
        ├─► Validators / Generators / demais Engines
        │
        └─► Resultados consolidados (logs, diagnósticos, artefatos)
```

### Relações oficiais (aprovadas)

| Relação | Status |
|---|---|
| Projeto e Marca são **entidades independentes** | Oficial |
| Projeto **pode** associar-se a uma Marca por **referência declarativa** (formato da referência: decisão futura) | Oficial (conceitual) |
| Marca **pode** existir sem projeto | Oficial |
| Projeto **pode** existir sem marca | Oficial |
| **N projetos** podem compartilhar **uma** marca | Oficial |
| Projeto e marca **1:1** (marca própria) | Oficial (ainda entidades separadas) |
| Core **aciona** Project Engine como **primeira** Engine | Oficial |
| Core **não** embute regras de marca/projeto | Oficial |
| Associação projeto↔marca é **declarativa**, nunca hardcoded no Core | Oficial |

### Hipóteses e pontos em aberto

| Tema | Evidência atual | Hipótese | Risco se antecipar | Decisão necessária |
|---|---|---|---|---|
| Entidade **Organização** | Fora do modelo mínimo; hipótese futura | Pode agrupar projetos um dia | Schema prematuro | Só se multi-organização se tornar necessidade comprovada |
| **Produto** vs **Projeto** | Produto aparece no discurso; Projeto é unidade MOBS | 1 produto ↔ 1+ projetos | Confusão de ownership | Em `CONFIGURATION_CONTRACTS` / glossário de produto |
| Múltiplas marcas **por** projeto | Docs falam associação a uma marca primária | Primária + secundárias? | Complexidade | Antes de Brand Contract |
| **Herança / override** de config | Não aprovado | Possível no futuro | Exceções ocultas | Explicitamente futura |
| **Capability** como catálogo | Flags de módulos mencionadas conceitualmente | Catálogo versionado | Flags sem semântica | `CAPABILITY_MODEL` (proposta) |

---

## 6. Projeto como conceito de domínio

> Para o MOBS, um **Projeto** é a unidade de engenharia cujo contexto a plataforma resolve para orquestrar execução.

### O Projeto não é

| Não confundir com | Motivo |
|---|---|
| Repositório Git | Um repo pode hospedar um ou mais projetos conceituais (decisão futura de layout) |
| Diretório | Path é representação, não identidade |
| Produto | Produto é noção de negócio; Projeto é unidade operacional da plataforma |
| Aplicação | Uma app pode ser superfície de um projeto |
| Marca | Identidade visual/tokens — entidade separada |
| Configuração | A config **descreve** o projeto; não **é** o projeto |
| Execução | Execução é um episódio; Projeto é estável |

### Papel do Project Engine

Fluxo oficial preservado:

1. Core carrega a configuração inicial;
2. Core aciona o **Project Engine** como primeira Engine;
3. Project Engine resolve o contexto do projeto;
4. Core retoma a orquestração dos demais módulos.

O Project Engine **não** orquestra a fila global e **não** gera assets.

---

## 7. Marca como conceito de domínio

> Para o MOBS, uma **Marca** é a identidade oficial (recursos e regras) que a plataforma resolve para qualquer consumidor que precise de Source of Truth visual/institucional.

### A Marca não é

| Não confundir com | Motivo |
|---|---|
| Projeto | Entrega vs. identidade |
| Produto | Produto usa marca; não a define por si só |
| Um único arquivo de logo | Assets são recursos da marca |
| Tema | Tema pode derivar; marca é Source of Truth |
| Configuração visual ad hoc | Config aponta; não substitui mestres |

### Papel do Brand Engine

Resolver a **associação declarativa com uma Marca** → metadados e caminhos oficiais; recusar operações que violem regras permanentes de identidade.  
O formato do identificador ou referência de Marca será decidido nos contratos futuros — **não** é fixado aqui.  
Acionado pelo Core **após** o contexto de projeto (quando houver vínculo), ou de forma independente quando só a marca estiver em jogo.

### Questões abertas (marca)

- múltiplas marcas por projeto além da primária;
- herança entre marcas;
- override de tokens por projeto;
- composição de packs de export.

Nenhuma dessas é decisão oficial até contrato/aprovação explícita.

---

## 8. Capability

> Uma **capability** é uma capacidade reutilizável da plataforma — não um atalho booleano sem significado.

| Conceito | Diferença |
|---|---|
| **Capability** | O que a plataforma **pode fazer** de forma reutilizável |
| **Módulo** | Implementação classificada (Engine / Generator / Validator) |
| **Engine / Generator / Validator** | Tipos de módulo (taxonomia) |
| **Feature de produto** | Comportamento de um produto específico — não deve virar regra do Core |

Dimensões a modelar **no futuro** (sem formato agora):

- habilitação;
- dependências entre capabilities;
- requisitos de contexto (ex.: exige marca);
- composição;
- descoberta;
- responsabilidade (quem implementa);
- validação pré-execução.

---

## 9. Contrato

### Tese

> Um contrato não é um arquivo.  
> É o acordo formal entre partes do sistema sobre o que deve existir, o que deve ser verdade e quem responde por isso.

Este documento fixa o **conceito**. Políticas de ciclo de vida, versionamento, compatibilidade e ownership: [`CONFIGURATION_CONTRACTS.md`](../contracts/CONFIGURATION_CONTRACTS.md).

### Distinções essenciais

| Termo | Significado |
|---|---|
| **Contrato** | Define o que precisa existir e quais regras devem ser verdadeiras |
| **Configuração** | Fornece valores para uma instância alinhada ao contrato |
| **Schema** *(futuro)* | Representação mecanicamente validável de **parte** de um contrato; derivado do contrato; **não** substitui semântica, ownership nem responsabilidade do domínio |
| **Instância** | Configuração concreta de um projeto/marca |
| **Contexto resolvido** | Interpretação validada, pronta para consumo |
| **Serialização** | Forma de persistir/transportar — **não** é o domínio |
| **Validator** | Componente que verifica conformidade com o contrato/domínio |

Sequência conceitual:

```text
Domínio
    ↓
Contrato
    ↓
Schema (futuro)
    ↓
Instância / configuração serializada
    ↓
Validação e resolução
    ↓
Contexto resolvido
    ↓
Execução
```

Exemplos conceituais (sem schema):

- Contrato de projeto: “todo projeto compreendido pelo MOBS declara identidade e, se houver marca, uma associação declarativa válida”.
- Contrato de marca: “toda marca oficial expõe Source of Truth e regras de não redesenho”.
- Instância: os valores de um projeto específico.
- Arquivo futuro: apenas uma serialização possível dessa instância.

---

## 10. Configuração

Configuração é a **linguagem declarativa das diferenças legítimas**.

### Não deve virar

- depósito de exceções;
- linguagem de programação improvisada;
- substituto de arquitetura;
- coleção de flags sem semântica;
- espaço para regras específicas no Core.

### Critérios para ser configuração

| Pergunta | Se a resposta for “não”, reavalie |
|---|---|
| Representa diferença **real** entre projetos/marcas? | |
| É **estável** o bastante para declarar? | |
| É **compreensível** sem conhecimento oculto? | |
| Possui **proprietário** claro? | |
| Pode ser **validada**? | |
| Mantém o motor **genérico**? | |

Alinhado a [`WHY_MOBS.md`](../foundation/WHY_MOBS.md): configuração acima de duplicação — sem transformar config em caos.

Detalhes de governança de configuração (defaults, extensões, políticas): [`CONFIGURATION_CONTRACTS.md`](../contracts/CONFIGURATION_CONTRACTS.md).

---

## 11. Contexto e resolução

| Estágio | Descrição |
|---|---|
| Domínio / Contrato | Significado e expectativas formais |
| Schema *(futuro)* | Parte mecanicamente verificável do contrato |
| Configuração serializada | Valores concretos persistidos/transportados |
| Validação | Conformidade estrutural e semântica |
| Resolução | Engine responsável interpreta e normaliza |
| Contexto resolvido | Pronto para orquestração e execução |
| Execução | Generators / Engines / demais módulos |
| Resultado | Artefatos, logs, diagnósticos |

Fluxo conceitual (sem algoritmo nem funções):

```text
entrada declarativa (instância)
    ↓
carregamento (camada de persistência/adaptação — não o significado)
    ↓
validação estrutural e semântica
    ↓
resolução pela Engine responsável
    ↓
contexto normalizado (independente do formato de origem)
    ↓
orquestração pelo Core
    ↓
execução por módulos
    ↓
consolidação de resultados
```

Engines e consumidores **não** devem depender desnecessariamente da estrutura física dos arquivos para compreender o significado.

---

## 12. Fronteiras do Core

### Pertence ao Core

- carregamento inicial da configuração;
- orquestração e ciclo de execução;
- acionamento do Project Engine e demais módulos;
- seleção e ordenação conforme dependências declaradas;
- encaminhamento;
- consolidação de logs e resultados;
- coordenação genérica.

### Não pertence ao Core

- regras específicas de projeto ou marca;
- condicionais por produto (ex.: “se Missão OAB…”);
- interpretação profunda de domínio (marca, docs, assets);
- geração especializada;
- validação específica que caiba a Validators;
- políticas cuja propriedade seja de uma Engine.

Essa seção protege o Core contra crescimento monolítico — alinhada a [`BUILD_SYSTEM.md`](../../../project/automation/BUILD_SYSTEM.md) e [`WHY_MOBS.md`](../foundation/WHY_MOBS.md).

---

## 13. Responsabilidade dos componentes

| Conceito | Responsabilidade | Recebe | Produz | Não deve fazer |
|---|---|---|---|---|
| **Core** | Orquestrar | Config inicial, contexto resolvido, resultados parciais | Ordem de execução, consolidação | Regras de marca/projeto; gerar assets |
| **Engine** | Resolver domínio/contexto | IDs, config, contexto prévio | Contexto ou artefatos de domínio leves | Orquestrar fila global; hardcode de produto |
| **Project Engine** | Resolver contexto de projeto | projectId / config de projeto | Contexto de projeto | Gerar assets; orquestrar Core |
| **Brand Engine** | Resolver contexto de marca | Associação declarativa / config de marca | Metadados e caminhos oficiais | Redesenhar marca; conhecer landing; depender do formato físico da referência |
| **Generator** | Produzir derivados | Contexto resolvido | Artefatos em exports etc. | Editar Source of Truth sem autorização |
| **Validator** | Verificar conformidade | Config / paths / contexto | Pass/fail, diagnósticos | Escrever mestres; gerar produto final |
| **Configuração** | Declarar diferenças | Valores de instância | Entrada declarativa | Embutir lógica de produto no Core |
| **Contrato** | Definir expectativas | — (definição) | Regras e limites | Ser confundido com arquivo |
| **Contexto resolvido** | Alimentar módulos | Saída de Engines | Visão normalizada | Substituir validação |

---

## 14. Propriedade dos contratos

> Contratos sem proprietário tornam-se dependências implícitas.

Todo contrato futuro **deve** ter responsável conceitual claro (quem define, valida, resolve, consome e evolui).  
Atribuições concretas e políticas de governança: [`CONFIGURATION_CONTRACTS.md`](../contracts/CONFIGURATION_CONTRACTS.md).

---

## 15. Evolução e compatibilidade

O domínio exige que contratos futuros evoluam com **versionamento explícito** e preservação semântica — sem alterar significado em silêncio.

Políticas concretas (números de versão, backward compatibility, migração, defaults, campos desconhecidos) **não** são escolhidas aqui.  
Serão definidas em [`CONFIGURATION_CONTRACTS.md`](../contracts/CONFIGURATION_CONTRACTS.md) e nos contratos concretos.

---

## 16. O que nunca deve acontecer

Anti-padrões:

- campo criado sem conceito correspondente neste modelo;
- regra específica de produto no Core;
- configuração usada para esconder acoplamento;
- contrato consumido sem responsabilidade clara;
- Engine dependente da estrutura física de arquivos para compreender significado;
- schema tratado como única fonte da verdade conceitual;
- schema ou serialização contradizendo o domínio aprovado sem correção do contrato;
- override ilimitado;
- dependências circulares de contexto;
- defaults que mudam significado sem registro;
- validação apenas sintática;
- conhecimento essencial que só existe fora do repositório.

---

## 17. Questões em aberto do MOBS 0.2

| Questão | Por que importa | Riscos | Onde decidir |
|---|---|---|---|
| Relação Ecossistema / Produto / Projeto (e Organização, se um dia existir) | Ownership e multi-produto | Schema confuso | Contratos + glossário de produto |
| Cardinalidade Projeto ↔ Marca além do modelo atual | Brand Engine e assets | Complexidade prematura | `BRAND_CONTRACT` / revisão PROJECT_ENGINE |
| Modelo detalhado de Capability | Habilitação sem flags cegas | Exceções no Core | `CAPABILITY_MODEL` (proposta) |
| Herança e override | Reuso vs. caos | Exceções ocultas | Explicitamente pós-domínio |
| Versionamento e compatibilidade | Evolução segura | Quebra silenciosa | `CONFIGURATION_CONTRACTS` |
| Formato de erros e diagnósticos | UX de falha | Logs inúteis | `RESOLUTION_MODEL` / Validators |
| Serialização e localização dos arquivos | Persistência | Acoplar domínio a path | Após contratos conceituais |
| Ownership formal de cada contrato | Governança | Dependência implícita | Em cada contrato futuro |

---

## 18. Critérios de qualidade do modelo

**Sinais positivos:** fronteiras claras; contratos derivados de conceitos; Core genérico; serialização substituível sem mudar o domínio; componentes conhecem só o necessário; decisões rastreáveis; linguagem compartilhada por humanos e IAs.

**Sinais de alerta:** campos antes de conceitos; nomes duplicados para a mesma ideia; um conceito com vários donos; Engines dependentes de estrutura física; contrato tratado como sinônimo de schema; contexto bruto chegando a módulos especializados; decisões só no código.

---

## 19. Bússola para criação dos contratos concretos

Checklist arquitetural mínimo (normativo em [`CONFIGURATION_CONTRACTS.md`](../contracts/CONFIGURATION_CONTRACTS.md)):

1. Qual **conceito** este contrato representa?
2. Quem é o **proprietário**?
3. Quem o **produz**, **valida**, **resolve** e **consome**?
4. Quais **invariantes** protege — e o que ocorre se for inválido?
5. A **serialização** ou um **schema** futuro está sendo confundido com o domínio?
6. Preserva o **Core genérico** e a independência da representação física?
7. Expressa diferença **legítima** ou exceção local?

---

## 20. Próximos documentos (proposta subordinada ao roadmap)

O roadmap oficial de módulos permanece em [`AUTOMATION_ROADMAP.md`](../../../project/automation/AUTOMATION_ROADMAP.md) (v1–v10).

Para o eixo **Configuration Contracts (MOBS 0.2)**, a sequência documental **proposta** é:

1. **DOMAIN_MODEL.md** ← gramática conceitual
2. **CONFIGURATION_CONTRACTS.md** ← constituição dos contratos
3. PROJECT_CONTRACT.md ← **aprovado**
4. BRAND_CONTRACT.md ← **aprovado**
5. CAPABILITY_MODEL.md (se necessário)
6. RESOLUTION_MODEL.md
7. schemas e exemplos
8. implementação
9. Validators
10. testes e migrações

Essa lista **não substitui** o roadmap de Engines/Generators; **precede** schemas e implementação de contratos, em coerência com “documentação antes da implementação”.

---

## 21. Encerramento

Modelos antes de formatos.  
Conceitos antes de campos.  
Contratos antes de implementação.

Configuração é a linguagem pela qual a plataforma expressa diferença — não o lugar onde a arquitetura se esconde.  
O Core permanece genérico porque o domínio nomeia o mundo com fronteiras.

> Quando a plataforma compreende o projeto e a marca como conceitos — e não como pastas —,  
> cada novo produto deixa de exigir uma nova teoria.  
> Exige apenas uma nova declaração verdadeira.

---

## Referências

- [`WHY_MOBS.md`](../foundation/WHY_MOBS.md)
- [`project/automation/MOBS.md`](../../../project/automation/MOBS.md)
- [`project/automation/BUILD_SYSTEM.md`](../../../project/automation/BUILD_SYSTEM.md)
- [`project/automation/PROJECT_ENGINE.md`](../../../project/automation/PROJECT_ENGINE.md)
- [`project/automation/BRAND_ENGINE.md`](../../../project/automation/BRAND_ENGINE.md)
- [`project/automation/AUTOMATION_RULES.md`](../../../project/automation/AUTOMATION_RULES.md)
- [`project/automation/AUTOMATION_ROADMAP.md`](../../../project/automation/AUTOMATION_ROADMAP.md)
- [`PROJECT_INDEX.md`](../../../PROJECT_INDEX.md)
- [`PROJECT_RULES.md`](../../../PROJECT_RULES.md)
- [`AI_CONTEXT.md`](../../../AI_CONTEXT.md)
