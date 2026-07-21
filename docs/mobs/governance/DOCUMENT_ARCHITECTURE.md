# Arquitetura Física da Documentação do MOBS

> A arquitetura lógica define o significado.
> A arquitetura física define como esse significado permanece organizado durante toda a evolução do projeto.

Este documento é a **autoridade oficial** sobre a organização física da documentação do MOBS.

Ele **não** redefine o domínio, contratos, governança operacional nem o método de tarefas arquiteturais.

Ele **não** move, renomeia nem reorganiza arquivos.
Ele **governa** como futuras reorganizações devem ocorrer — e onde novos documentos devem nascer.

Analogia institucional:

| Camada | Autoridade sobre |
|---|---|
| [`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md) | Significado lógico do domínio |
| [`DOCUMENT_ARCHITECTURE.md`](DOCUMENT_ARCHITECTURE.md) | Organização física da documentação |

---

## 1. Objetivo

Garantir que a documentação do MOBS permaneça:

- **descobrível** — qualquer colaborador ou agente encontra a fonte certa;
- **estável** — crescimento não exige reorganização a cada novo documento;
- **escalável** — suporta anos de evolução sem perda de clareza;
- **coerente** — papel arquitetural independe de path ou convenção momentânea;
- **separada do significado** — mover um arquivo não altera o que o documento significa.

Sem arquitetura física explícita, cada crescimento vira improviso de pastas.
Com ela, novos documentos **encontram lugar** antes de exigir nova teoria de organização.

---

## 2. Filosofia

Princípios derivados da trilha MOBS 0.2 e da organização já existente:

| Princípio | Significado |
|---|---|
| **Significado antes da localização** | O papel arquitetural de um documento precede sua pasta |
| **Um grupo, uma responsabilidade** | Cada categoria documental possui fronteira clara |
| **Descoberta por índice, não por memória** | Navegação oficial via [`PROJECT_INDEX.md`](../../../PROJECT_INDEX.md) e mapas afins |
| **Crescimento por classificação** | Novo documento = classificar → posicionar → integrar descoberta |
| **Estabilidade preferida** | Reorganização física é evento raro e governado |
| **Independência física** | Path não redefine papel; papel não exige path único para sempre |
| **Conservação** | Reorganizar só quando a arquitetura física aprovada exigir |
| **Separação Ecossistema × Plataforma × Produto** | MOBS não se mistura com documentação de produto sem fronteira |

Este documento **projeta** permanência.
Não executa migração.

---

## 3. Arquitetura lógica × arquitetura física

### Arquitetura lógica

Responde: **o que significa**, **quem manda em quê**, **como as ideias se relacionam**.

Governada por:

```text
WHY_MOBS → MOBS → DOMAIN_MODEL → CONFIGURATION_CONTRACTS
    → contratos concretos → modelos → schemas → implementação
```

Documentos lógicos **não dependem** de estarem na raiz ou em subpasta para terem autoridade.

### Arquitetura física

Responde: **onde vive**, **como se descobre**, **como o repositório escala**.

Governada por este documento.

### Regra de separação

| Dimensão | Pergunta | Alteração |
|---|---|---|
| **Lógica** | Qual é o papel e a autoridade deste documento? | Exige revisão arquitetural |
| **Física** | Em qual grupo e path este documento reside? | Exige conformidade com `DOCUMENT_ARCHITECTURE` |

> Mover um documento **não** muda seu papel.
> Mudar o papel **não** se resolve apenas renomeando ou relocando.

---

## 4. Relação entre documentos arquiteturais

Os documentos abaixo governam **dimensões independentes** da arquitetura MOBS.
Não há sobreposição de responsabilidade entre eles.

| Documento | Dimensão que governa | O que responde |
|---|---|---|
| [`WHY_MOBS.md`](../foundation/WHY_MOBS.md) | **Propósito e direção** | Por que o MOBS existe; princípios estratégicos; bússola de decisão |
| [`project/automation/MOBS.md`](../../../project/automation/MOBS.md) | **Plataforma** | O que é a plataforma; escopo; organização documental de alto nível |
| [`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md) | **Domínio lógico** | O que existe no universo MOBS; entidades, relações e fronteiras |
| [`CONFIGURATION_CONTRACTS.md`](../contracts/CONFIGURATION_CONTRACTS.md) | **Constituição dos contratos** | Como contratos existem, evoluem e se relacionam com a plataforma |
| [`ARCHITECTURE_TASK_PROTOCOL.md`](ARCHITECTURE_TASK_PROTOCOL.md) | **Processo arquitetural** | Como tarefas arquiteturais são planejadas, revisadas e aprovadas |
| [`DOCUMENT_ARCHITECTURE.md`](DOCUMENT_ARCHITECTURE.md) | **Organização física** | Onde documentos vivem; como o repositório escala e se descobre |

Regras:

1. Nenhum destes documentos **substitui** outro.
2. Alterar o **significado** do domínio não é papel deste documento — é de `DOMAIN_MODEL`.
3. Alterar o **processo** de produção arquitetural não é papel deste documento — é de `ARCHITECTURE_TASK_PROTOCOL`.
4. Alterar **paths e descoberta** sem fundamento lógico é erro — a evolução segue a seção 5.

Contratos concretos (`PROJECT_CONTRACT`, `BRAND_CONTRACT`, futuros) especializam o domínio sob a constituição — dimensão distinta, já coberta pela hierarquia lógica (seção 3).

---

## 5. Princípios de evolução da arquitetura documental

A evolução da documentação **nunca** começa pela movimentação de arquivos.

Ordem obrigatória:

```text
1. Alteração arquitetural do domínio (quando existir)
2. Atualização da arquitetura documental (quando necessária)
3. Planejamento da migração
4. Execução da migração
5. Atualização dos mecanismos de descoberta
6. Registro histórico
```

| Passo | Responsável conceitual | Exemplo |
|---|---|---|
| **1** | Domínio / contratos | Nova entidade em `DOMAIN_MODEL`; novo contrato concreto |
| **2** | Arquitetura documental | Atualizar grupos, regras ou fases em `DOCUMENT_ARCHITECTURE` |
| **3** | Tarefa arquitetural dedicada | Definir escopo, fase e paths alvo |
| **4** | Migração aprovada | Mover arquivos; atualizar links |
| **5** | Descoberta | `PROJECT_INDEX`, `AI_CONTEXT`, mapas em `MOBS.md` |
| **6** | Histórico | `HISTORY.md`, `CHANGELOG.md` |

Pular passos — especialmente executar **4** antes de **1**, **2** ou **3** — é reorganização oportunista e **anti-padrão**.

Toda migração física segue também [`ARCHITECTURE_TASK_PROTOCOL.md`](ARCHITECTURE_TASK_PROTOCOL.md).

---

## 6. Grupos documentais

Categorias permanentes **derivadas** da arquitetura existente — não arbitrárias.

| Grupo | Papel | Documentos representativos (estado atual) |
|---|---|---|
| **Fundação** | Propósito, visão e direção estratégica do MOBS | `WHY_MOBS.md` |
| **Plataforma** | Visão e escopo da plataforma de engenharia | `project/automation/MOBS.md` |
| **Domínio** | Gramática conceitual; entidades e relações | `DOMAIN_MODEL.md` |
| **Constituição de contratos** | Regras gerais de todo contrato de configuração | `CONFIGURATION_CONTRACTS.md` |
| **Contratos concretos** | Especialização por entidade do domínio | `PROJECT_CONTRACT.md`, `BRAND_CONTRACT.md` |
| **Modelos arquiteturais** | Formalização de aspectos transversais (resolução, capabilities, etc.) | *futuros:* `RESOLUTION_MODEL`, `CAPABILITY_MODEL` |
| **Schemas** | Recortes mecanicamente validáveis derivados de contratos | *futuro* |
| **Engines** | Responsabilidade documental de cada Engine | `PROJECT_ENGINE.md`, `BRAND_ENGINE.md`, `BUILD_SYSTEM.md` |
| **Governança arquitetural** | Como tarefas arquiteturais são executadas e aprovadas | `ARCHITECTURE_TASK_PROTOCOL.md` |
| **Governança documental** | Como a documentação se organiza fisicamente | `DOCUMENT_ARCHITECTURE.md` (este) |
| **Governança operacional** | Fluxo de trabalho, commits, regras do repositório | `PROJECT_RULES.md` |
| **Descoberta** | Bootloader, roteamento de contexto, onboarding | `PROJECT_INDEX.md`, `AI_CONTEXT.md` |
| **Evolução e planejamento** | Roadmaps e marcos de módulos | `AUTOMATION_ROADMAP.md`, `project/automation/future/` |
| **Regras de automação** | Permanentes para toda automação executável | `AUTOMATION_RULES.md` |
| **Histórico** | Narrativa e registro técnico versionável | `HISTORY.md`, `CHANGELOG.md` |
| **Produto** | Documentação de oferta, requisitos e jornada por produto | `docs/product/` |
| **Marca institucional (produto)** | Brand Book, voz, copy por produto/marca comercial | `docs/brand/` |
| **Design System** | Guia visual e componentes por produto | `DESIGN_GUIDE.md`, `UI_KIT.md` |
| **Assets** | Source of Truth visual materializada | `assets/brand/` (estado atual do primeiro produto) |

### Fronteira MOBS × Ecossistema × Produto

| Escopo | O que documenta | Onde tende a viver |
|---|---|---|
| **MOBS (plataforma)** | Engenharia reutilizável do Ecossistema Missão | Raiz + `project/automation/` |
| **Produto** | Uma oferta concreta (ex.: Missão OAB) | `docs/product/`, landing, design do produto |
| **Marca (domínio MOBS)** | Contrato e Engine de identidade da plataforma | Contratos + `BRAND_ENGINE` |
| **Marca (institucional produto)** | Discurso, voz, brand book | `docs/brand/` |

Confundir **marca como entidade do domínio** com **documentação de brand book** é erro de classificação — não de pasta.

---

## 7. Responsabilidade de cada grupo

Cada grupo possui **uma** responsabilidade arquitetural:

| Grupo | Responsabilidade única |
|---|---|
| Fundação | Explicar **por que** o MOBS existe |
| Plataforma | Explicar **o que** é a plataforma e seu escopo |
| Domínio | Nomear **o mundo** que a plataforma compreende |
| Constituição de contratos | Definir **como** contratos existem |
| Contratos concretos | Especializar **uma entidade** do domínio |
| Modelos arquiteturais | Formalizar **um aspecto transversal** (não uma entidade) |
| Schemas | Materializar **validação mecânica** de parte de um contrato |
| Engines | Documentar **papel** de um módulo resolvedor ou de taxonomia |
| Governança arquitetural | Governar **processo** de produção arquitetural |
| Governança documental | Governar **organização física** da documentação |
| Governança operacional | Governar **trabalho diário** no repositório |
| Descoberta | **Rotear** para fontes oficiais sem duplicar conteúdo |
| Evolução e planejamento | **Planejar** versões e módulos futuros |
| Regras de automação | **Permanentes** para código/automação executável |
| Histórico | **Registrar** decisões e alterações |
| Produto | Documentar **oferta e negócio** de um produto |
| Marca institucional (produto) | Documentar **identidade comunicacional** de uma marca comercial |
| Design System | Documentar **sistema visual** de um produto |
| Assets | **Materializar** mestres e derivados visuais |

Um documento **não** deve acumular responsabilidades de grupos distintos.
Se acumular, a arquitetura física futura deve separá-lo — não o contrário.

---

## 8. Regras de descoberta

A documentação deve permanecer navegável com crescimento significativo.

### Pontos de entrada oficiais

| Papel | Documento |
|---|---|
| Bootloader humano/IA | [`PROJECT_INDEX.md`](../../../PROJECT_INDEX.md) |
| Contexto para agentes | [`AI_CONTEXT.md`](../../../AI_CONTEXT.md) |
| Mapa da plataforma MOBS | [`project/automation/MOBS.md`](../../../project/automation/MOBS.md) |

### Regras

1. **Todo documento novo** deve ser alcançável a partir de pelo menos um ponto de entrada — direta ou transitivamente.
2. **Índices não duplicam** conteúdo; apenas roteiam.
3. **Nomenclatura previsível** — nomes refletem grupo e papel (`*_CONTRACT`, `*_MODEL`, `*_ENGINE`, `*_PROTOCOL`, `DOCUMENT_ARCHITECTURE`).
4. **Referências cruzadas** apontam para fonte oficial — não para cópias.
5. **Profundidade de pastas** deve refletir grupo — não preferência pessoal de organização.

### Anti-padrões de descoberta

- documento órfão (existe no repo, não existe no índice);
- conhecimento duplicado em índice e fonte;
- nomes genéricos (`notes.md`, `misc.md`) fora de `future/` com propósito explícito;
- dependência de “todo mundo sabe que está na raiz”.

---

## 9. Regras de crescimento

Todo novo documento passa por:

```text
1. Classificar — qual grupo documental?
2. Verificar — papel já existe ou é extensão legítima?
3. Posicionar — path conforme arquitetura física (atual ou alvo)
4. Integrar — ponto de descoberta atualizado (em tarefa própria)
5. Registrar — HISTORY / CHANGELOG quando marco relevante
```

### Por tipo de documento

| Tipo | Grupo | Pré-requisito lógico |
|---|---|---|
| Novo contrato concreto | Contratos concretos | Domínio + constituição + protocolo |
| Novo modelo | Modelos arquiteturais | Domínio; não duplicar contrato |
| Nova Engine documental | Engines | `MOBS.md`, `BUILD_SYSTEM.md` |
| Novo schema | Schemas | Contrato concreto aprovado |
| Novo guia de produto | Produto / Design | Escopo de produto definido |
| Espéc futura | Evolução (`future/`) | Não substituir documento oficial |

### Regra de ouro

> Se não é possível classificar o documento em um grupo, **não** é possível posicioná-lo na arquitetura.
> Resolver a classificação antes da criação.

---

## 10. Regras de extensibilidade

Um **novo grupo documental** só pode surgir quando:

1. a arquitetura lógica **exige** fronteira que nenhum grupo existente cobre;
2. a necessidade é **recorrente**, não pontual;
3. a proposta é **aprovada** como tarefa arquitetural;
4. este documento é **atualizado** antes da adoção em massa.

### Nunca criar grupo por

- quantidade de arquivos numa pasta;
- preferência estética de organização;
- conveniência temporária de um sprint;
- vontade de “limpar a raiz” sem mudança de responsabilidade.

Extensão legítima **dentro** de um grupo (novo contrato, novo modelo, nova Engine) **não** exige novo grupo.

---

## 11. Regras de estabilidade

Mover documentos é **evento raro**.

### Quando mover é aceitável

- implementação de fase aprovada da estratégia de migração (seção 14);
- correção de classificação errada com aprovação arquitetural;
- novo documento nasce já no path alvo — sem mover legado imediatamente.

### Quando mover é proibido sem processo

- “ficou grande demais na raiz”;
- reorganização oportunista durante outra tarefa;
- alinhamento físico sem atualizar descoberta e referências.

### Estabilidade esperada

A arquitetura física deve permanecer estável **mesmo** quando:

- novos contratos, modelos e schemas surgem;
- novos produtos entram no ecossistema;
- novas Engines são documentadas;
- o volume de `docs/` cresce por produto.

Crescimento **vertical** (mais documentos no grupo certo) é preferido a crescimento **horizontal** (novas pastas ad hoc).

---

## 12. Independência física

| Afirmação | Consequência |
|---|---|
| Papel arquitetural é lógico | Definido por tipo de documento e hierarquia de autoridade |
| Path é físico | Pode mudar sem alterar significado |
| Referências quebradas | Efeito colateral de migração — não mudança de arquitetura lógica |

Regras:

1. Nenhuma decisão de **domínio** ou **contrato** se justifica apenas por “onde o arquivo está”.
2. Engines e implementação **não** devem depender de path para compreender significado — alinhado ao domínio.
3. Migração física exige atualização de descoberta e links — em tarefa dedicada.

---

## 13. Escalabilidade

A arquitetura física alvo deve suportar:

| Dimensão | Mecanismo |
|---|---|
| Mais contratos | Grupo **Contratos concretos** — irmãos sob constituição |
| Mais modelos | Grupo **Modelos arquiteturais** |
| Mais Engines | Grupo **Engines** em `project/automation/` |
| Mais produtos | `docs/product/<produto>/`, design e assets por produto |
| Mais marcas (domínio) | Contratos + schemas + `assets/brands/<id>/` (alvo conceitual já em `BRAND_ENGINE`) |
| Mais specs futuras | `project/automation/future/` até promoção |
| Mais histórico | `HISTORY.md` / `CHANGELOG.md` — crescimento cronológico, não estrutural |

### Direção de maturidade (conceitual)

Estado atual mistura documentos MOBS na **raiz** por maturidade histórica da trilha 0.2.
Estado alvo **agrupa por responsabilidade**, não por data de criação.

Isso **não** invalida documentos na raiz hoje.
Define para onde o crescimento **deve** convergir.

---

## 14. Estratégia de migração

> Nenhuma movimentação ocorre neste documento.
> Esta seção apenas propõe implementação incremental futura.

### Princípios da migração

1. **Aprovação explícita** por fase — tarefa arquitetural dedicada.
2. **Incremental** — um grupo ou fronteira por vez.
3. **Descoberta primeiro** — atualizar índices antes ou junto da movimentação.
4. **Links em seguida** — referências cruzadas verificadas.
5. **Sem big bang** — raiz pode conviver com estrutura alvo durante transição.
6. **Registro** — HISTORY e CHANGELOG por fase.

### Fases propostas (ordem sugestiva)

| Fase | Escopo | Risco se antecipar |
|---|---|---|
| **0** | Adotar e consolidar `DOCUMENT_ARCHITECTURE.md` como autoridade | **Concluída** |
| **1** | Novos documentos MOBS já nascem no path alvo | **Concluída** (institucionalizada) |
| **2** | Agrupar fundação, domínio e contratos sob `docs/mobs/` | **Concluída** |
| **3** | Consolidar governança em `docs/mobs/governance/` | **Concluída** |
| **4** | Separar claramente **MOBS** vs **produto** em `docs/` | Mistura de escopos |
| **5** | Migrar **assets** para modelo multi-marca (`assets/brands/`) | Já previsto em `BRAND_ENGINE` — tarefa própria |

Cada fase segue [`ARCHITECTURE_TASK_PROTOCOL.md`](ARCHITECTURE_TASK_PROTOCOL.md).

Paths alvo específicos: **decisão da fase correspondente** — não fixados aqui para não antecipar implementação física.

---

## 15. Manifesto

A arquitetura lógica do MOBS levou anos de disciplina para nascer em semanas de documentação cuidadosa.

Perder essa clareza em um mar de pastas seria desperdiçar o que foi construído.

A arquitetura física existe para que:

- cada novo documento saiba onde pertence;
- cada migração tenha justificativa;
- cada colaborador encontre a fonte sem perguntar;
- cada agente de IA carregue contexto mínimo e correto;
- o repositório cresça **sem** exigir nova teoria a cada trimestre.

Organizar não é burocracia.
É o mecanismo permanente de preservação da clareza.

> Nomeie o papel.
> Classifique o grupo.
> Posicione com intenção.
> Migre com raridade.
> Preserve o significado.

---

## Referências

- [`WHY_MOBS.md`](../foundation/WHY_MOBS.md)
- [`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md)
- [`CONFIGURATION_CONTRACTS.md`](../contracts/CONFIGURATION_CONTRACTS.md)
- [`ARCHITECTURE_TASK_PROTOCOL.md`](ARCHITECTURE_TASK_PROTOCOL.md)
- [`PROJECT_INDEX.md`](../../../PROJECT_INDEX.md)
- [`project/automation/MOBS.md`](../../../project/automation/MOBS.md)
- [`project/automation/BUILD_SYSTEM.md`](../../../project/automation/BUILD_SYSTEM.md)
- [`project/automation/BRAND_ENGINE.md`](../../../project/automation/BRAND_ENGINE.md)
