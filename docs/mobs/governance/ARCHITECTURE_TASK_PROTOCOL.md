# Protocolo de Tarefas Arquiteturais do MOBS

> A arquitetura evolui por decisões documentadas — não por improviso, nem por implementação antecipada.

Este documento **não** descreve entidades do domínio.
Ele **não** substitui contratos, modelos nem regras de produto.

Seu papel é estabelecer a **governança oficial** de como tarefas arquiteturais do MOBS devem ser planejadas, executadas, revisadas, validadas e aprovadas.

Foi construído por **extração e consolidação** do processo efetivamente utilizado na criação de `PROJECT_CONTRACT.md` e `BRAND_CONTRACT.md`.

---

## 1. Objetivo

Garantir que a evolução da arquitetura documental do MOBS seja:

- **consistente** — mesmo método, mesma hierarquia de autoridade;
- **rastreável** — decisões, validações e aprovações registradas;
- **controlada** — escopo preservado; implementação não antecipada;
- **reprodutível** — humanos e agentes de IA seguem o mesmo protocolo.

Sem este protocolo, cada tarefa reinventa o processo.
Com ele, a arquitetura **governa** como novos documentos nascem.

---

## 2. Escopo

### O que cobre

- criação e revisão de **contratos** e **modelos arquiteturais** documentais;
- atualização de integrações documentais estritamente necessárias;
- refinamentos editoriais e arquiteturais antes de aprovação;
- validação e relatório de entregas arquiteturais;
- critérios universais de aceitação;
- política de commit e push para marcos arquiteturais.

### O que não cobre

- implementação de código, runtime ou automações executáveis;
- definição de APIs, algoritmos ou fluxos detalhados de execução;
- criação de schemas, serializações ou formatos de arquivo;
- governança operacional geral do repositório (ver [`PROJECT_RULES.md`](../../../PROJECT_RULES.md));
- regras permanentes de automação (ver [`AUTOMATION_RULES.md`](../../../project/automation/AUTOMATION_RULES.md));
- templates de prompt ou tutoriais de ferramentas.

---

## 3. Filosofia

Princípios consolidados da trilha MOBS 0.2 e do processo de contratos:

| Princípio | Significado no protocolo |
|---|---|
| **Arquitetura antes da implementação** | Nenhuma tarefa arquitetural antecipa código ou runtime |
| **Domínio antes da especialização** | O significado vem do domínio; documentos posteriores apenas formalizam |
| **Contratos antes de schemas** | Expectativas e invariantes precedem recortes mecanicamente validáveis |
| **Documentação antes da implementação** | Marco documental aprovado precede execução técnica |
| **Preservar decisões** | Tarefas não reescrevem documentos superiores nem movem responsabilidades |
| **Especializar em vez de reinventar** | Referenciar a constituição; não duplicar regras gerais |
| **Manter aberto quando necessário** | Ausência de definição no domínio não autoriza invenção |
| **Conservação** | Alterar apenas o necessário para cumprir o objetivo da tarefa |

Este protocolo **consolida** conhecimento aprovado.
Não expande a arquitetura por si só.

---

## 4. Hierarquia de autoridade

A ordem da verdade **nunca** se inverte.

```text
WHY_MOBS
    ↓
MOBS
    ↓
DOMAIN_MODEL
    ↓
CONFIGURATION_CONTRACTS
    ↓
Contratos concretos (ex.: PROJECT_CONTRACT, BRAND_CONTRACT)
    ↓
Modelos arquiteturais (ex.: RESOLUTION_MODEL, CAPABILITY_MODEL)
    ↓
Schemas
    ↓
Serializações
    ↓
Contextos resolvidos
    ↓
Implementação
```

Regras derivadas dessa hierarquia:

1. Um documento inferior **obedece** aos superiores; nunca os substitui.
2. Contratos concretos **irmãos** especializam entidades distintas — não derivam conceitualmente um do outro.
3. Se um documento em elaboração contradisser o domínio ou a constituição, **o documento em elaboração** está errado.
4. Este protocolo **não** ocupa lugar na cadeia de significado — governa **como** documentos da cadeia são produzidos.

---

## 5. Ordem oficial de leitura

Antes de qualquer tarefa arquitetural, ler **integralmente**, nesta ordem:

1. [`WHY_MOBS.md`](../foundation/WHY_MOBS.md) — propósito, visão, princípios
2. [`project/automation/MOBS.md`](../../../project/automation/MOBS.md) — arquitetura e organização da plataforma
3. [`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md) — entidades, relações, fronteiras
4. [`CONFIGURATION_CONTRACTS.md`](../contracts/CONFIGURATION_CONTRACTS.md) — constituição dos contratos
5. Documentos diretamente relevantes à tarefa (contratos irmãos, Engines, modelos existentes)

> A ordem de leitura existe para refletir a hierarquia de autoridade, e não para substituí-la.

Para criação de **contrato concreto**, identificar explicitamente no domínio:

- definição oficial da entidade;
- relações e independências já aprovadas;
- papéis atribuídos a Engines;
- significado de contexto resolvido;
- fronteiras e questões em aberto.

Quando um ponto não estiver fechado: **não inventar**; registrar como aberto.

---

## 6. Fluxo oficial de trabalho

Processo consolidado das tarefas de contratos concretos:

```text
Planejamento
    ↓
Implementação documental
    ↓
Validação (diff, terminologia, escopo)
    ↓
Revisão humana
    ↓
Refinamentos (se necessário)
    ↓
Nova validação
    ↓
Aprovação humana
    ↓
Commit
    ↓
Push
```

| Fase | O que ocorre |
|---|---|
| **Planejamento** | Objetivo, escopo, fontes de autoridade, restrições, critérios de aceitação |
| **Implementação** | Criação ou ajuste mínimo dos documentos autorizados |
| **Validação** | Verificações objetivas antes da revisão humana |
| **Revisão humana** | Julgamento arquitetural; aprovação ou pedido de refinamento |
| **Refinamentos** | Ajustes editoriais ou de precisão **sem** alterar decisões aprovadas |
| **Aprovação** | Autorização explícita para commit |
| **Commit / Push** | Registro versionado; sincronização com remoto quando autorizado |

Entregas iniciais podem **omitir** commit e push até aprovação — conforme instrução da tarefa.

---

## 7. Regras universais

Consolidadas dos prompts e entregas de `PROJECT_CONTRACT` e `BRAND_CONTRACT`:

### Proibições recorrentes

- não inventar conceitos, entidades ou taxonomias;
- não criar novos níveis arquiteturais;
- não implementar código, runtime, APIs ou algoritmos;
- não criar schemas, serializações ou formatos de arquivo;
- não definir paths, layouts físicos ou catálogos concretos de propriedades;
- não reescrever documentos de autoridade;
- não mover responsabilidades entre documentos;
- não fechar questões abertas do domínio sem aprovação explícita;
- não duplicar extensamente a constituição quando referência resolver;
- não transformar contrato irmão em autoridade sobre outra entidade.

### Obrigações recorrentes

- derivar de `DOMAIN_MODEL` e `CONFIGURATION_CONTRACTS` (para contratos);
- preservar independência entre entidades já aprovadas (ex.: Projeto ⊥ Marca);
- distinguir entidade, contrato, instância, contexto resolvido e representação física;
- nomear Owner, Authority e papéis constitucionais quando aplicável;
- registrar questões em aberto em vez de presumir;
- manter tom e estrutura alinhados aos documentos irmãos;
- atualizar integrações documentais **somente** quando necessário.

---

## 8. Conservação arquitetural

> Toda tarefa arquitetural deve alterar apenas o necessário para cumprir seu objetivo.

Evitar:

- reorganizações incidentais de capítulos ou documentos não solicitados;
- refatorações paralelas “de oportunidade”;
- expansão de escopo além do objetivo declarado;
- alterações em documentos protegidos sem autorização explícita na tarefa;
- volume artificial de mudanças em integrações documentais.

Uma tarefa bem executada deixa o repositório **mais claro**, não mais amplo.

---

## 9. Classificação das decisões arquiteturais

Padronizar cada decisão relevante em uma das categorias:

| Categoria | Quando usar | Exemplo |
|---|---|---|
| **Derivada** | Segue diretamente de documento superior já aprovado | Invariante de independência Projeto⊥Marca vinda do domínio |
| **Nova** | Não existia formalmente, mas foi **explicitamente autorizada** na tarefa | Estrutura de seção pedida no prompt da tarefa |
| **Aberta** | Domínio ou trilha admitem, mas não fecham | Herança entre marcas; formato de referência |
| **Proibida** | Contradiz hierarquia, escopo ou restrições da tarefa | Schema antecipado em contrato conceitual |

Regra: na dúvida entre **Nova** e **Aberta**, preferir **Aberta** e submeter à revisão humana.

Este protocolo **não** institucionaliza decisões que não possam ser claramente derivadas ou explicitamente autorizadas.

---

## 10. Critérios universais de aceitação

Antes de considerar uma entrega arquitetural concluída (pré-commit), verificar:

### Hierarquia e autoridade

- deriva corretamente dos documentos superiores;
- não contradiz `WHY_MOBS`, domínio ou constituição;
- não move responsabilidades entre documentos;
- não cria nível arquitetural ou taxonomia nova.

### Consistência conceitual

- entidades tratadas como entidades do domínio — não como arquivo, pasta, Engine ou runtime;
- terminologia oficial preservada; sem sinônimos paralelos;
- distinção clara entre entidade, contrato, instância, contexto e representação física.

### Especialização constitucional

- `CONFIGURATION_CONTRACTS` permanece a constituição;
- documento em entrega apenas especializa — não duplica extensamente;
- Owner e Authority distinguidos; papéis constitucionais nomeados quando aplicável.

### Escopo

- sem implementação, schema, serialização, API, algoritmo ou path;
- sem antecipação de decisões abertas do domínio.

### Integração

- relações com domínio, constituição, contratos irmãos, Core, Engines e contexto resolvido explícitas quando aplicável;
- referências cruzadas corretas.

### Qualidade editorial

- estilo alinhado aos documentos irmãos;
- leitura contínua; sem redundâncias relevantes;
- encerramento com identidade própria (quando o documento exigir manifesto).

### Integridade do repositório

- apenas arquivos autorizados alterados;
- documentos protegidos intactos (salvo autorização explícita na tarefa);
- validação de whitespace limpa;
- stage explícito — nunca inclusão indiscriminada de arquivos.

Critérios **específicos** de cada tarefa permanecem no enunciado da tarefa — não neste protocolo.

---

## 11. Processo oficial de revisão

Ciclo observado e aprovado nos contratos concretos:

```text
Primeira implementação
    ↓
Revisão arquitetural
    ↓
Refinamentos (mínimos; sem reestruturar decisões)
    ↓
Nova revisão / validação
    ↓
Aprovação humana
    ↓
Commit
    ↓
Push
```

### Por que este processo existe

- a primeira redação raramente atinge maturidade editorial e de precisão;
- refinamentos devem **elevar qualidade** sem alterar arquitetura aprovada;
- commit prematuro cristaliza improviso;
- revisão humana é o gate de legitimidade institucional.

Refinamento **não** é nova implementação.
É ajuste de clareza, organização e precisão sobre decisões já tomadas.

---

## 12. Relatórios esperados

Toda entrega arquitetural por agente de IA deve incluir, no mínimo:

| Seção | Conteúdo |
|---|---|
| **Entrega** | O que foi criado ou alterado; o que **não** foi feito (commit, push) |
| **Decisões arquiteturais** | Derivadas, abertas e deliberadamente não tomadas |
| **Arquivos alterados** | Lista explícita |
| **Validação** | Resultado de verificações objetivas; documentos protegidos |
| **Critérios de aceitação** | Confirmação por grupo (hierarquia, escopo, integração, etc.) |
| **Pontos para revisão humana** | Ambiguidades, lacunas, dependências de aprovação |

Relatórios **não** substituem `HISTORY.md` nem `CHANGELOG.md` — complementam a entrega até o commit.

---

## 13. Política de commit

Regras consolidadas do processo MOBS 0.2:

1. **Nenhum commit** sem aprovação humana explícita na tarefa ou na revisão.
2. **Nenhum push** antes da validação final e autorização.
3. Stage **explícito** — apenas arquivos autorizados.
4. Mensagem de commit descreve o **marco arquitetural**, não lista de arquivos.
5. Após commit aprovado de marco documental: registrar em `HISTORY.md` e `CHANGELOG.md` conforme [`PROJECT_RULES.md`](../../../PROJECT_RULES.md).
6. Push para `origin/main` somente quando a tarefa autorizar — sem force push.

Arquivos locais de exclusão (ex.: `.gitignore` não versionado) permanecem fora do commit salvo instrução contrária.

---

## 14. Evolução do protocolo

> Toda evolução deste protocolo deve preservar sua natureza de documento de governança, evitando absorver responsabilidades pertencentes ao domínio, aos contratos ou às regras operacionais.

Este protocolo pode evoluir quando:

- o processo efetivo do ecossistema mudar de forma **comprovada** e **aprovada**;
- nova categoria recorrente de tarefa arquitetural exigir consolidação;
- lacunas no método forem identificadas na revisão humana.

Evolução **não** deve:

- transformar o protocolo em repositório de regras de domínio ou de contrato;
- duplicar `CONFIGURATION_CONTRACTS`, `PROJECT_RULES` ou `AUTOMATION_RULES`;
- institucionalizar práticas não observadas nem aprovadas.

Proposta de mudança: tarefa arquitetural própria → revisão → aprovação → commit — o mesmo método que governa os demais documentos.

---

## 15. Manifesto

A arquitetura do MOBS evolui **incrementalmente**.

Cada camada documental existe para que a seguinte não precise adivinhar.

A documentação governa a implementação.
A implementação **nunca** redefine o domínio.

Preservar a arquitetura é mais importante do que acelerar mudanças.

Este protocolo existe para que humanos e agentes de IA produzam o próximo documento com a mesma disciplina do anterior — sem improviso, sem expansão silenciosa, sem confundir entidade com arquivo.

> Planeje antes de escrever.
> Especialize antes de inventar.
> Valide antes de versionar.
> Aprove antes de publicar.

---

## Referências

- [`WHY_MOBS.md`](../foundation/WHY_MOBS.md)
- [`project/automation/MOBS.md`](../../../project/automation/MOBS.md)
- [`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md)
- [`CONFIGURATION_CONTRACTS.md`](../contracts/CONFIGURATION_CONTRACTS.md)
- [`PROJECT_CONTRACT.md`](../contracts/PROJECT_CONTRACT.md)
- [`BRAND_CONTRACT.md`](../contracts/BRAND_CONTRACT.md)
- [`PROJECT_INDEX.md`](../../../PROJECT_INDEX.md)
- [`PROJECT_RULES.md`](../../../PROJECT_RULES.md)
- [`project/automation/AUTOMATION_RULES.md`](../../../project/automation/AUTOMATION_RULES.md)
- [`project/automation/AUTOMATION_ROADMAP.md`](../../../project/automation/AUTOMATION_ROADMAP.md)
- [`AI_CONTEXT.md`](../../../AI_CONTEXT.md)
