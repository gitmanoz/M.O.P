# Modelo de Parceria do MOBS

> A plataforma já sabe como um parceiro **entra** no repositório.
> Este documento nomeia como os parceiros **permanecem** juntos ao longo de uma tarefa — sem reinventar o boot, sem antecipar o protocolo de mensagem.

Este é o **documento fundador** da Arquitetura de Parceria do MOBS.
Todo documento futuro deste ciclo **deriva** dele — especializa-o; **nunca** o redefine.

Ele **não** é contrato de configuração.
Ele **não** é protocolo de tarefas arquiteturais.
Ele **não** substitui a Arquitetura de Entrada (`PROJECT_INDEX`, `AI_CONTEXT`, Boot Sequence).

Ele formaliza o **significado transversal** da colaboração entre parceiros capazes de contribuir no Ecossistema Missão.

Esta arquitetura governa **relações entre parceiros**.
Ferramentas — editores, agentes, chat, CLI ou qualquer superfície futura — são apenas **implementações transitórias** dessa parceria. Não definem o modelo; apenas o materializam por um tempo.

Autoridade, nesta ordem:

1. [`WHY_MOBS.md`](../foundation/WHY_MOBS.md) — propósito e princípios
2. [`project/automation/MOBS.md`](../../../project/automation/MOBS.md) — plataforma
3. [`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md) — gramática conceitual da plataforma
4. [`CONFIGURATION_CONTRACTS.md`](../contracts/CONFIGURATION_CONTRACTS.md) — constituição dos contratos (quando a parceria tocar acordos formais)
5. Este modelo — colaboração e fluxo de conhecimento entre parceiros

Trilha:

```text
WHY_MOBS → MOBS → DOMAIN_MODEL → CONFIGURATION_CONTRACTS
                                      ├── PROJECT_CONTRACT
                                      └── BRAND_CONTRACT
  → Modelos arquiteturais
        ├── PARTNERSHIP_MODEL  ← este documento (fundação do ciclo Parceria)
        ├── CAPABILITY_MODEL   (futuro, se necessário)
        └── RESOLUTION_MODEL   (futuro)
  → schemas → implementação
```

---

## 1. Estado do documento

| Dimensão | Situação |
|---|---|
| **Tipo** | Modelo arquitetural transversal |
| **Ciclo** | Arquitetura de Parceria (documento fundador) |
| **Path oficial** | `docs/mobs/models/PARTNERSHIP_MODEL.md` |
| **Schemas / protocolos / formatos** | Não definidos aqui |
| **Implementação** | Não iniciada |

### O que este documento não faz

- Não define protocolos de comunicação, formatos de mensagem nem máquinas de estado.
- Não define workflows de execução, handoffs operacionais nem formatos de resposta.
- Não redefine Boot Sequence, Decision Tree, carregamento de contexto nem roteamento de descoberta.
- Não substitui [`ARCHITECTURE_TASK_PROTOCOL.md`](../governance/ARCHITECTURE_TASK_PROTOCOL.md) nem [`PROJECT_RULES.md`](../../../PROJECT_RULES.md).
- Não cria entidades de domínio (Projeto, Marca, Capability) nem contratos concretos.
- Não cristaliza catálogos formais de papéis — isso pertence a documentos derivados (ex.: [`AYLA_ARCHITECTURAL_PARTNER.md`](AYLA_ARCHITECTURAL_PARTNER.md), [`PROGRAMMER_PARTNER.md`](PROGRAMMER_PARTNER.md)).
- Não amarra a arquitetura a Cursor, a um agente específico ou a qualquer ferramenta.

---

## 2. Propósito

Dar ao Ecossistema Missão uma **gramática oficial da parceria**: como parceiros colaboram, como o conhecimento flui e se preserva, e onde termina a Arquitetura de Entrada e começa a continuidade da colaboração.

Sem este modelo, a entrada no repositório é governada — e a parceria ao longo da tarefa permanece implícita, pessoal ou reinventada a cada conversa.

Com ele, a colaboração deixa de ser costume e passa a ser **arquitetura**.

---

## 3. Missão

Tornar previsível, econômica e institucional a forma como parceiros do ecossistema **compartilham conhecimento e responsabilidade** enquanto uma tarefa avança — de modo que o próximo parceiro (humano ou não) possa continuar sem redescobrir o que já foi estabelecido.

Alinhado a [`WHY_MOBS.md`](../foundation/WHY_MOBS.md): conhecimento institucional acima de dependência individual; contratos claros acima de conhecimento implícito; evolução incremental acima de saltos sem fundamento.

---

## 4. Problema que resolve

A Arquitetura de Entrada já governa:

- como iniciar;
- o que carregar;
- como economizar contexto;
- para onde rotear.

Ela **não** governa, por si só:

- como a colaboração se mantém coerente **depois** do boot;
- como o conhecimento produzido na tarefa permanece disponível aos parceiros;
- como responsabilidades distintas se distribuem ao longo da colaboração;
- como evitar perda de fio, reinício desnecessário ou redistribuição caótica de contexto;
- como múltiplos parceiros colaboram sem competir com a hierarquia documental já aprovada.

O custo dessa lacuna:

- reinício implícito a cada troca de parceiro ou de sessão;
- conhecimento útil preso à conversa e não ao repositório;
- sobrecarga de contexto “por segurança”;
- decisões arquiteturais misturadas a detalhes de ferramenta;
- colaboração que depende de quem está presente, não do que está documentado;
- interrupção do fluxo cognitivo por atividades administrativas fora do objetivo atual.

---

## 5. Visão arquitetural

Há duas camadas complementares — não concorrentes:

| Camada | Pergunta que responde | Autoridades atuais |
|---|---|---|
| **Arquitetura de Entrada** | Como um parceiro **chega** ao contexto certo? | `PROJECT_INDEX`, `AI_CONTEXT`, Boot Sequence, Decision Tree |
| **Arquitetura de Parceria** | Como os parceiros **permanecem** alinhados enquanto a tarefa vive? | Este modelo (fundação); documentos derivados futuros |

```text
Entrada (já existente)
    ↓
Parceria ao longo da tarefa  ← este ciclo
    ↓
Conhecimento estabilizado (quando aplicável)
    ↓
[opcional] Registro institucional via governança operacional
           (PROJECT_RULES → HISTORY / CHANGELOG / Git)
```

A parceria **termina** no alinhamento e na continuidade entre parceiros — não no commit.
Registro institucional **não** é etapa universal da colaboração; ocorre só quando há mudança estabilizada a oficializar.

A parceria **não** substitui a descoberta.
A descoberta **não** substitui a continuidade.
A parceria **não** substitui a governança operacional.

A plataforma de engenharia (`MOBS.md`, Engines, contratos) permanece a autoridade sobre **o que** o ecossistema automatiza e configura.
Este modelo governa **relações entre parceiros** em torno dessa plataforma e de suas tarefas — humanos entre si, humanos com agentes, ou agentes entre si.

Ferramentas são implementações transitórias dessa parceria.
Mudar a ferramenta **não** deve exigir reinventar a Arquitetura de Parceria.

---

## 6. Princípios

Derivados de [`WHY_MOBS.md`](../foundation/WHY_MOBS.md) e da maturidade da Arquitetura de Entrada. Não inventam uma segunda constituição — aplicam a bússola existente à colaboração.

| Princípio | Significado aqui |
|---|---|
| **Governança do conhecimento** | O que importa à tarefa deve poder existir no repositório ou em fonte oficial — não só na memória da sessão |
| **Economia de contexto** | Carregar e transmitir apenas o necessário; expandir sob demanda — alinhado ao carregamento mínimo da Entrada |
| **Preservação de fluxo** | Filosofia transversal deste ciclo: o fluxo cognitivo principal da colaboração não deve ser interrompido por atividades administrativas alheias ao objetivo atual (commits, housekeeping, reorganizações ou refactors oportunistas fora de escopo) |
| **Previsibilidade** | Parceiros devem antecipar limites e próximos passos sem improvisar o método a cada vez |
| **Revelação progressiva** | Detalhe operacional surge quando a tarefa exige — não no documento fundador |
| **Informação mínima necessária** | Compartilhar o suficiente para continuar corretamente; não o máximo disponível |
| **Consistência arquitetural** | A parceria obedece à hierarquia documental; nunca a contorna |
| **Parceiros, não ferramentas** | A arquitetura governa relações entre parceiros; ferramentas apenas materializam a parceria de forma transitória |
| **Continuidade sem reinvenção** | O que já foi decidido e registrado não deve ser reaberto por troca de parceiro |
| **Preferência pelo estabilizado** | Conhecimento estabilizado deve ser preferido ao conhecimento reconstruído |
| **Complementaridade com a Entrada** | Boot e roteamento permanecem oficiais; a Parceria começa depois que o contexto mínimo existe |

### Preservação de fluxo (ênfase)

A **Preservação de fluxo** não é um detalhe operacional — é filosofia transversal da Arquitetura de Parceria.

Enquanto a colaboração estiver no fluxo cognitivo principal (modelar, decidir, executar o objetivo da tarefa):

- não interromper com trabalho administrativo paralelo;
- não misturar housekeeping ao raciocínio em curso;
- registrar melhorias fora de escopo como sugestões futuras, sem executá-las no mesmo fio.

A governança operacional (`PROJECT_RULES`, commits, HISTORY) permanece válida — exerce-se **no momento apropriado**, sem sequestrar o fluxo da parceria em andamento.

---

## 7. Escopo

Este documento **define**:

- o propósito e a missão da Arquitetura de Parceria;
- o problema institucional que a lacuna atual cria;
- a visão de duas camadas (Entrada × Parceria);
- princípios permanentes da colaboração;
- o conceito de parceiros e de responsabilidades distintas ao longo da colaboração;
- o fluxo de conhecimento em nível conceitual;
- a fronteira com a Arquitetura de Entrada e com a governança existente;
- a direção de evolução do ciclo.

---

## 8. Não-objetivos

Explicitamente **fora** deste documento (e, em geral, de documentos futuros que o especializem sem nova autoridade):

- protocolos de comunicação ou APIs de mensageria;
- formatos de mensagem, envelopes ou schemas de diálogo;
- máquinas de estado de conversa;
- workflows detalhados de execução ou checklists operacionais de handoff;
- formatos canônicos de resposta de agente;
- catálogo formal e fechado de papéis de colaboração (perfis derivados vivem fora deste fundador);
- regras específicas de Cursor ou de qualquer produto de IA;
- o perfil institucional da parceira arquitetural Ayla — ver [`AYLA_ARCHITECTURAL_PARTNER.md`](AYLA_ARCHITECTURAL_PARTNER.md);
- o perfil institucional do parceiro programador — ver [`PROGRAMMER_PARTNER.md`](PROGRAMMER_PARTNER.md);
- redefinição de entidades Projeto, Marca ou Capability;
- substituição de `PROJECT_RULES`, `ARCHITECTURE_TASK_PROTOCOL` ou `AUTOMATION_RULES`.

---

## 9. Participantes

Participantes são **parceiros do ecossistema** capazes de colaborar em uma tarefa — não entidades do [`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md).

O domínio nomeia Projeto, Marca, Contrato, Contexto resolvido, Core, Engine.
Este modelo reconhece que a **parceria** envolve um ou mais parceiros que compartilham conhecimento e responsabilidade em torno da tarefa.

### Conceito fundador (sem catálogo de papéis)

No documento fundador basta estabelecer que:

- parceiros podem assumir **responsabilidades distintas** ao longo da colaboração;
- essas responsabilidades podem mudar no tempo e entre sessões;
- a ferramenta usada **não** define o parceiro nem a responsabilidade;
- humanos, agentes de IA e automações futuras podem participar da parceria;
- a definição formal de papéis, nomes e expectativas detalhadas pertence a **documentos derivados** — não a este fundador.

### Independência de implementação

- Nenhum parceiro pressupõe Cursor, chat ou runtime MOBS.
- Participação na parceria **não** cria ownership de contratos de configuração (Owner / Authority permanecem em [`CONFIGURATION_CONTRACTS.md`](../contracts/CONFIGURATION_CONTRACTS.md)).

### Questão em aberto

A eventual elevação de “Parceiro” a conceito do domínio fica **aberta** — não inventada aqui.

---

## 10. Responsabilidades (conceituais)

### De todo parceiro na colaboração

1. Respeitar a hierarquia de autoridade documental.
2. Não duplicar conhecimento que já tem fonte oficial.
3. Preferir o menor contexto suficiente para o próximo passo correto.
4. Distinguir decisão arquitetural de detalhe de ferramenta.
5. Não expandir escopo sob o pretexto de “melhorar de passagem”.
6. Preservar o fluxo cognitivo principal da parceria em curso.
7. Preferir conhecimento estabilizado a reconstruir o que já foi estabelecido.

### Da Arquitetura de Parceria (como camada)

1. Nomear a gramática da colaboração entre parceiros — sem antecipar catálogos operacionais.
2. Descrever o fluxo de conhecimento sem impor formato.
3. Proteger a continuidade entre sessões e parceiros.
4. Remeter à Entrada tudo o que for boot, roteamento ou carregamento inicial.
5. Remeter à governança operacional e ao protocolo arquitetural o que for aprovação, commit e método de produção documental.

### O que a Parceria não assume

- Orquestrar Core / Engines (domínio e plataforma).
- Validar schemas ou serializações (futuro).
- Substituir a Decision Tree.
- Definir o catálogo formal de papéis (documentos derivados).

---

## 11. Fluxo de conhecimento (conceitual)

O conhecimento na parceria percorre estados conceituais — **não** filas nem formatos:

```text
Intenção da tarefa
    ↓
Contexto mínimo (via Arquitetura de Entrada)
    ↓
Conhecimento de trabalho (produzido durante a execução)
    ↓
Conhecimento estabilizado (decisões e artefatos alinhados às fontes oficiais)
    ↓
[opcional] Registro institucional via PROJECT_RULES
           (somente se a mudança estabilizada deve ser oficializada)
```

| Estado | Significado |
|---|---|
| **Intenção** | Objetivo e restrições declarados para a tarefa |
| **Contexto mínimo** | Subconjunto roteado pela Entrada — não a documentação completa |
| **Conhecimento de trabalho** | Entendimento e artefatos ainda locais à tarefa em curso |
| **Conhecimento estabilizado** | Conteúdo já coerente com autoridades; pronto para integração ou aceite |
| **Registro institucional** | Persistência em fontes oficiais — **somente** via governança operacional (`PROJECT_RULES`), quando a mudança estabilizada deve ser oficialmente registrada |

### Regras do fluxo

1. **Entrada primeiro** — sem contexto mínimo governado, a parceria improvisa.
2. **Mandato mínimo suficiente** — o mandato contém somente a tarefa ou o resultado esperado; o ponto de entrada para descoberta, quando necessário; informações novas ainda não institucionalizadas; e exceções, limites ou critérios específicos da execução. Não repete regras, fluxos, papéis ou conhecimentos já alcançáveis pela arquitetura documental. Toda informação nova deve ser autônoma e compreensível sem acesso à conversa que a originou; a concisão não pode eliminar conteúdo que altere o sentido, o escopo ou o resultado esperado.
3. **Trabalho não é registro** — conhecimento de trabalho não implica HISTORY, CHANGELOG, stage, commit ou push.
4. **Estabilizado ≠ versionado** — conhecimento estabilizado pode existir sem registro institucional imediato; o registro é ato de governança operacional, não de parceria.
5. **Preferência pelo estabilizado** — conhecimento estabilizado deve **sempre** ser preferido ao conhecimento reconstruído; retomar a partir do que já foi estabelecido, não reabrir a intenção do zero sem necessidade.
6. **Continuidade** — ao retomar uma tarefa, preferir conhecimento estabilizado (e registro institucional **se** já existir) à reconstrução improvisada.
7. **Economia** — promover para a sessão seguinte apenas o necessário à continuidade; o restante permanece nas fontes.
8. **Fonte oficial vence** — se o conhecimento de trabalho contradisser o domínio, o contrato ou a constituição, o trabalho está errado.

Detalhes de handoff, envelopes e estados operacionais: **documentos derivados** deste ciclo — que especializam este modelo, sem redefini-lo.

---

## 12. Relação com a Arquitetura de Entrada

| Tema | Entrada | Parceria |
|---|---|---|
| Boot | Oficial (`PROJECT_INDEX`) | Consome o resultado; não redefine |
| Decision Tree | Oficial | Usa o ramo adequado; não cria árvore paralela |
| Economia de tokens/contexto | Oficial no carregamento | Estende o princípio à continuidade e ao compartilhamento |
| AI_CONTEXT / PROJECT_RULES | Regras de agente e operação | Não duplica; referencia |
| Continuidade entre parceiros | Fora do foco principal | **Foco deste modelo** |
| Preservação de fluxo | Parcial (boot sequence) | Filosofia transversal deste ciclo |

> A Entrada responde: *o que ler agora?*
> A Parceria responde: *como seguimos juntos sem perder o que já importa?*

Qualquer documento futuro de Parceria que reescreva Boot, Decision Tree ou índices de descoberta estará **fora de escopo** e em conflito com este modelo.

---

## 13. Relação com o restante do MOBS

| Documento / grupo | Relação |
|---|---|
| `DOMAIN_MODEL` | Autoridade sobre entidades da plataforma; este modelo não as redefine |
| `CONFIGURATION_CONTRACTS` + contratos concretos | Autoridade sobre acordos de configuração; parceria não é contrato de Projeto/Marca |
| `ARCHITECTURE_TASK_PROTOCOL` | Método de produção de documentos arquiteturais; a Parceria pode orientar colaboração **durante** esse método, sem substituí-lo |
| `PROJECT_RULES` | Contrato operacional do repositório (aprovação, commits, identidade) |
| `AUTOMATION_RULES` / Engines | Automação executável e contexto de plataforma — distinta da colaboração entre parceiros |
| `DOCUMENT_ARCHITECTURE` / `DOCUMENT_STRUCTURE_PLAN` | Path e nascimento: modelos em `docs/mobs/models/` |

---

## 14. Evolução futura

Este documento é a **fundação**.

Documentos derivados deste ciclo **devem especializar este modelo — nunca redefini-lo**.
Se um documento derivado contradisser o fundador, o derivado está errado — salvo decisão arquitetural explícita que revise o próprio fundador sob o protocolo oficial.

Direções esperadas de especialização (ilustrativas — **não** antecipam criação de arquivos):

| Direção | Papel futuro |
|---|---|
| Continuidade operacional | Detalhar preservação de fluxo sem formatos |
| Handoff conceitual | Expectativas ao transferir responsabilidade — sem protocolo de mensagem |
| Economia de conhecimento na sessão | O que permanece local vs. o que sobe ao registro |
| Papéis de colaboração | Perfis derivados: [`AYLA_ARCHITECTURAL_PARTNER.md`](AYLA_ARCHITECTURAL_PARTNER.md), [`PROGRAMMER_PARTNER.md`](PROGRAMMER_PARTNER.md) |
| Integração com descoberta | Index/AI_CONTEXT roteiam Partnership e perfis — sem redefinir este fundador |

### Ordem relativa a outros modelos

`CAPABILITY_MODEL` e `RESOLUTION_MODEL` permanecem na trilha de contratos → schemas → runtime.
`PARTNERSHIP_MODEL` abre um **ciclo paralelo** de colaboração entre parceiros.
Os ciclos **não** competem; convergência futura exige tarefa arquitetural explícita.

### Questões em aberto

| Questão | Onde resolver |
|---|---|
| “Parceiro” como conceito de domínio | `DOMAIN_MODEL` — se um dia for necessário |
| Relação formal com agentes de automação (Helpers do roadmap) | Documentos derivados + `AUTOMATION_ROADMAP` |
| Critérios métricos de “economia de conhecimento” | Fora do fundador; evitar KPIs inventados |

---

## 15. Critérios de qualidade deste modelo

**Sinais positivos:**

- um novo parceiro compreende Entrada × Parceria sem confundir as duas;
- a gramática da colaboração não depende de ferramenta;
- nenhum princípio reabre Boot ou Decision Tree;
- o fundador não cristaliza catálogos operacionais de papéis;
- questões abertas estão nomeadas, não inventadas;
- documentos derivados têm fundação estável e regra clara: especializar, não redefinir.

**Sinais de alerta:**

- formatos de mensagem ou state machines neste arquivo;
- “parceiro” tratado como sinônimo de Projeto ou Marca;
- duplicação da Decision Tree;
- arquitetura amarrada a Cursor ou a um agente nomeado;
- implementação disfarçada de fundamento;
- documento derivado que redefine o fundador em silêncio.

---

## 16. Encerramento

A Arquitetura de Entrada ensinou o ecossistema a **começar certo**.
A Arquitetura de Parceria deve ensinar a **continuar certo**.

Ferramentas mudarão — são transitórias.
Parceiros mudarão.
O que deve permanecer é a possibilidade de colaborar com previsibilidade, economia, preservação de fluxo e respeito à hierarquia documental — para que o conhecimento da tarefa sobreviva à sessão que o produziu.

> Entre sem carregar o mundo inteiro.
> Continue sem perder o que já importa.
> Prefira o estabilizado ao reconstruído.
> Registre o que deve sobreviver a você.

---

## Referências

- [`WHY_MOBS.md`](../foundation/WHY_MOBS.md)
- [`project/automation/MOBS.md`](../../../project/automation/MOBS.md)
- [`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md)
- [`CONFIGURATION_CONTRACTS.md`](../contracts/CONFIGURATION_CONTRACTS.md)
- [`PROJECT_CONTRACT.md`](../contracts/PROJECT_CONTRACT.md)
- [`BRAND_CONTRACT.md`](../contracts/BRAND_CONTRACT.md)
- [`ARCHITECTURE_TASK_PROTOCOL.md`](../governance/ARCHITECTURE_TASK_PROTOCOL.md)
- [`DOCUMENT_ARCHITECTURE.md`](../governance/DOCUMENT_ARCHITECTURE.md)
- [`DOCUMENT_STRUCTURE_PLAN.md`](../governance/DOCUMENT_STRUCTURE_PLAN.md)
- [`PROJECT_INDEX.md`](../../../PROJECT_INDEX.md)
- [`AI_CONTEXT.md`](../../../AI_CONTEXT.md)
- [`PROJECT_RULES.md`](../../../PROJECT_RULES.md)
