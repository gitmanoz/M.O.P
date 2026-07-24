# Contrato de Marca do MOBS

> Uma Marca é a identidade oficial do domínio; seus recursos e regras constituem o Source of Truth visual e institucional.
> Este documento especializa essa promessa — sem inventar o conceito, sem escolher o arquivo.

Este é o **segundo Contrato Concreto** do MOBS.
Ele **não** cria a entidade Marca.
Ele **formaliza** o que o domínio já define e o que a constituição dos contratos exige.

Autoridade, nesta ordem:

1. [`WHY_MOBS.md`](../foundation/WHY_MOBS.md) — propósito e princípios
2. [`project/automation/MOBS.md`](../../../project/automation/MOBS.md) — arquitetura da plataforma
3. [`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md) — significado de Marca e relações
4. [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) — regras gerais de todo contrato

Este documento **obedece** a essa cadeia.
Não a substitui. Não a reescreve. Não move responsabilidades entre elas.

[`PROJECT_CONTRACT.md`](PROJECT_CONTRACT.md) é **contrato irmão** — referência editorial e relação de domínio com Projeto.
Não é autoridade sobre o significado de Marca.
Este contrato **não** deriva conceitualmente dele.

Arquitetura dos contratos concretos:

```text
WHY_MOBS → MOBS → DOMAIN_MODEL → CONFIGURATION_CONTRACTS
                                      ├── PROJECT_CONTRACT
                                      └── BRAND_CONTRACT
```

---

## 1. Estado do documento

| Dimensão | Situação |
|---|---|
| **Tipo** | Contrato concreto de configuração |
| **Conceito de domínio** | Marca ([`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md)) |
| **Constituição aplicável** | [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) |
| **Contrato irmão** | [`PROJECT_CONTRACT.md`](PROJECT_CONTRACT.md) (sem autoridade sobre Marca) |
| **Schemas / serializações** | Não definidos aqui |
| **Implementação** | Runtime da fatia v1 (Projeto → Marca associado) existe fora deste documento; este contrato não descreve runtime |

### O que este documento não faz

- Não define campos, schemas, formatos nem paths.
- Não escolhe tecnologia de representação.
- Não redefine o significado de Marca no domínio.
- Não transforma Marca em extensão ou propriedade interna de Projeto.
- Não altera a taxonomia Core / Engine / Generator / Validator.
- Não descreve algoritmos, APIs, layouts físicos ou runtime.
- Não substitui [`BRAND_ENGINE.md`](../../../project/automation/BRAND_ENGINE.md) (papel da Engine).
- Não cataloga assets, tokens, temas ou variantes.

---

## 2. Objetivo

Formalizar o **acordo** entre quem declara uma Marca e quem a resolve ou consome, de modo que:

- o significado de Marca permaneça estável;
- responsabilidades e limites fiquem explícitos;
- evolução e depreciação sejam governáveis;
- a plataforma possa orquestrar identidade a partir de um contexto resolvido — sem embutir regras de marca no Core;
- a reutilização de identidade entre soluções ocorra sem duplicação nem hardcode.

Alinhado a [`WHY_MOBS.md`](../foundation/WHY_MOBS.md): configuração acima de duplicação; documentação antes da implementação; Core genérico.

---

## 3. Princípios

Este contrato **deriva** dos princípios de [`WHY_MOBS.md`](../foundation/WHY_MOBS.md). Não os repete — aplica-os à entidade Marca:

| Princípio | Como se manifesta aqui |
|---|---|
| **Domínio antes da implementação** | O acordo formaliza o conceito já nomeado no domínio; não antecipa código |
| **Contratos antes de schemas** | Expectativas e invariantes vêm antes de qualquer recorte mecanicamente validável |
| **Configuração antes da duplicação** | Identidade compartilhada entre soluções expressa-se por declaração, não por cópia de mestres |
| **Identidade independente da representação física** | Assets e serializações materializam; não constituem sozinhos a entidade |
| **Core genérico** | Regras de Marca não migram para o orquestrador |
| **Especialização por camadas** | A constituição define a regra geral; este documento apenas especializa para Marca |
| **Reutilização sem acoplamento** | N Projetos podem compartilhar uma Marca sem fundir as entidades |
| **Relações declarativas** | Associação Projeto↔Marca é declaração — nunca hardcode no Core |

A hierarquia WHY_MOBS → … → CONFIGURATION_CONTRACTS → BRAND_CONTRACT é a forma institucional dessa especialização.

---

## 4. Posição na arquitetura

```text
Modelo de Domínio          →  o que Marca significa
    ↓
CONFIGURATION_CONTRACTS    →  como todo contrato deve existir
    ↓
BRAND_CONTRACT             →  especialização para Marca (este documento)
    ↓
Schemas / serializações    →  materializam instâncias (fora deste documento; perfil mínimo da v1 em `docs/mobs/schemas/`)
    ↓
Contexto resolvido         →  resultado da resolução atribuída à Brand Engine
    ↓
Execução                   →  Core, Generators e módulos
```

Contratos concretos sob a mesma constituição:

```text
CONFIGURATION_CONTRACTS
        ├── PROJECT_CONTRACT  →  entidade Projeto
        └── BRAND_CONTRACT    →  entidade Marca
```

Se este contrato contradisser o domínio ou a constituição, **este contrato** está errado.

---

## 5. Filosofia

Uma Marca existe para **preservar e reutilizar identidade** — visual e institucional — cujos recursos e regras constituem o Source of Truth da plataforma.

Ela estabelece o **contexto de identidade** que a plataforma interpretará.
Não executa. Não orquestra a fila global. Não organiza a entrega de engenharia (isso é Projeto). Não redesenha mestres.

| Camada | Responsabilidade |
|---|---|
| **Marca** | Declara a identidade oficial no domínio |
| **Contrato** | Promete o que essa declaração deve garantir |
| **Engines** | Cumprem a resolução e a interpretação atribuídas pelo contrato |
| **Generators** | Produzem derivados a partir de fontes oficiais + contexto |
| **Plataforma (Core + módulos)** | Orquestra e executa |

Sem Marca formal, cada automação inventa “qual é a identidade”.
Com Marca formal, a plataforma **promete** identidade compartilhada e governável, ancorada em recursos e regras oficiais.

---

## 6. O que é uma Marca

Conforme [`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md):

> Uma **Marca** é a identidade oficial (recursos e regras) que a plataforma resolve para qualquer consumidor que precise de Source of Truth visual/institucional.

Neste contrato, “Marca” designa essa **entidade do domínio** — não um pacote de arquivos, não um tema, não um episódio de renderização.

### Por que uma Marca existe

- dar à plataforma uma unidade estável de identidade;
- permitir a coexistência de múltiplas Marcas no ecossistema e o compartilhamento entre Projetos, sem hardcode no Core;
- separar identidade (Marca) de entrega (Projeto);
- evitar duplicação de mestres e exceções locais disfarçadas de “flexibilidade”.

### Qual problema resolve

Sem Marca como contrato, identidade vira pasta implícita, nome de produto no código ou cópia de assets.
Com Marca como contrato, produtores e consumidores compartilham expectativas verificáveis sobre a identidade oficial e seu Source of Truth.

---

## 7. O que uma Marca representa

Uma Marca representa, no domínio:

- a **identidade oficial** reutilizável (visual e institucional) no ecossistema;
- os **recursos e regras** que constituem o Source of Truth de identidade (a Marca é a entidade; o SoT é o que esses recursos e regras estabelecem);
- a **base** sobre a qual Generators e módulos consomem identidade de forma autorizada;
- a **entrada** cuja resolução de contexto este contrato atribui à Brand Engine.

Detalhe de quais atributos concretos existirão: schemas derivados **fora** deste documento — o perfil mínimo da fatia v1 não esgota a entidade.

---

## 8. O que uma Marca não representa

Uma Marca **não é**:

| Não confundir com | Motivo |
|---|---|
| Projeto | Entrega vs. identidade — entidades independentes |
| Produto | Produto usa marca; não a define por si só |
| Organização | Hipótese de domínio; não faz parte do modelo mínimo atual |
| Aplicação / frontend / runtime | Superfície ou episódio de execução |
| Tema / skin | Podem derivar; os recursos e regras da Marca constituem o Source of Truth |
| Diretório / pacote de assets | Representação física, não a entidade |
| Um único logotipo ou paleta | Recursos da marca; não a identidade completa |
| Design System | Pode consumir ou expressar a marca; não a substitui |
| Engine, Generator ou Validator | Componentes da plataforma; não a entidade |
| Capability | Capacidade reutilizável da plataforma; distinta de identidade |
| Configuração / serialização / schema | Descrevem ou transportam; não **são** a Marca |
| Contrato (este documento) | O contrato governa; a instância declara uma Marca concreta |

Não reduzir Marca a um único artefato visual.

---

## 9. Responsabilidades

### Pertencem à Marca (como entidade sob este contrato)

- declarar-se como identidade oficial do ecossistema;
- delimitar os recursos e regras que constituem o Source of Truth visual/institucional a respeitar;
- permitir associação **declarativa e opcional** a Projeto(s), quando houver;
- expressar diferenças legítimas de identidade sem violar o núcleo deste contrato;
- permanecer estável como conceito enquanto instâncias, assets e serializações mudam.

### Nunca pertencem à Marca

- orquestração global (Core);
- resolução de contexto (responsabilidade atribuída à Brand Engine);
- organização da unidade de engenharia (Projeto);
- geração de artefatos derivados (Generators);
- verificação de conformidade como Source of Truth (Validators verificam; não definem);
- redesenho ou alteração de mestres de identidade;
- regras específicas de um único produto embutidas como se fossem da plataforma;
- lógica de implementação, paths obrigatórios ou escolha de tecnologia.

O que **nunca** pertence a um contrato em geral permanece em [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) §6.

---

## 10. Escopo e limites

### Escopo deste contrato

Cobre o acordo formal sobre a entidade **Marca**: expectativas, papéis, invariantes, evolução e relações com o restante do domínio e da plataforma.

### Limites deliberados

- **Projeto** — contrato irmão (`PROJECT_CONTRACT.md`); aqui só a relação.
- **Capability** — modelo/contrato futuros; aqui só a relação conceitual admitida.
- **Resolução** — detalhe de algoritmo e erros em `RESOLUTION_MODEL` / Engines (futuro).
- **Serialização, schema, paths, catálogo de assets/tokens** — fora deste documento; perfil mínimo da fatia v1 materializado em `docs/mobs/schemas/`; catálogo de assets/tokens e demais perfis permanecem abertos.
- **Herança, variantes, temas, override por projeto, múltiplas marcas por projeto** — abertos no domínio; não fechados aqui.
- **Produto / Organização** — fronteiras do domínio; não fechadas aqui.

---

## 11. Garantias

Consumidores deste contrato podem confiar que, enquanto a versão conceitual do acordo for a mesma:

### Garantias estruturais

Estabilidade conceitual do acordo:

1. **Significado** — “Marca” continua sendo a identidade oficial do domínio, não um path, pasta, tema ou runtime.
2. **Independência** — Marca e Projeto permanecem entidades distintas.
3. **Não redução** — Marca não se reduz a um arquivo, logotipo, paleta ou pacote de assets.
4. **Associação** — vínculo Projeto↔Marca, quando existir, é declarativo e opcional — nunca hardcoded no Core.
5. **Evolução governada** — incompatibilidade e depreciação seguem [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) §12, especializadas abaixo.
6. **Independência física** — mudanças na representação física não alteram automaticamente o significado conceitual da entidade.

### Garantias operacionais

Comportamento esperado da plataforma sob este acordo:

1. **Resolução** — este contrato estabelece que a resolução do contexto de Marca é responsabilidade da **Brand Engine**.
2. **Core genérico** — o Core permanece responsável pela orquestração; não interpreta profundamente Marca nem embute regras de uma única solução.
3. **Consumo** — consumidores trabalham preferencialmente sobre o **contexto resolvido**, não sobre a representação física da instância.
4. **Generators** — produzem derivados; **não** redefinem a Marca nem alteram mestres como Source of Truth.
5. **Validators** — verificam conformidade; **não** se tornam Authority.
6. **Falha explícita** — violações relevantes (incluindo operações que ferem regras permanentes de identidade) devem ser detectáveis e comunicáveis; não silenciosas.

> Contratos descrevem expectativas.
> Não implementações.

---

## 12. Invariantes

Enquanto este contrato vigorar, deve permanecer verdadeiro:

1. Toda Marca sob o MOBS é uma **entidade do domínio**, não uma pasta nem um conjunto de arquivos.
2. Uma Marca **pode** existir sem Projeto; um Projeto **pode** existir sem Marca.
3. A associação a Projeto, se houver, é **declarativa** — formato da referência: decisão futura.
4. N Projetos **podem** compartilhar uma Marca; 1:1 também é válido — entidades continuam separadas.
5. O Core **não** embute associação Projeto↔Marca nem regras profundas de identidade.
6. A resolução do contexto de Marca é **atribuída** à Brand Engine; a Engine **não** orquestra a fila global nem redesenha mestres.
7. Consumidores preferem o **contexto resolvido** ao acoplamento à representação física da instância.
8. Extensões **não** corrompem o núcleo deste contrato nem introduzem regras de produto no Core.
9. Nada neste contrato obriga uma tecnologia, path ou schema específicos.

Violação de invariante: a **instância**, a **operação** ou a **integração** responsável pela violação é **inválida** até correção ou mudança explícita do contrato.
Princípios de validação: [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) §8.

---

## 13. Owner e Authority

Definições gerais: [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) §7.

| Papel | Atribuição neste contrato |
|---|---|
| **Authority** | [`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md) — define oficialmente o significado de Marca |
| **Owner** | Governança documental do MOBS (arquitetura do Ecossistema Missão) — responde pela evolução e manutenção **deste** contrato |

Owner e Authority **não** são o mesmo tipo de responsabilidade.
Podem alinhar-se na prática; o modelo **não** pressupõe identidade.

A Brand Engine **não** é Authority.
Alterar o significado de Marca no domínio exige a Authority (domínio).
Alterar as expectativas formais deste acordo exige o Owner, em harmonia com a Authority e com [`PROJECT_RULES.md`](../../../PROJECT_RULES.md) / [`AUTOMATION_RULES.md`](../../../project/automation/AUTOMATION_RULES.md).

---

## 14. Produtor, Validador, Resolvedor e Consumidores

| Papel | Atribuição para Marca |
|---|---|
| **Produtor** | Quem declara ou mantém **instâncias** de Marca alinhadas a este contrato (configuração / declaração autorizada) |
| **Validador** | Validators — verificam conformidade; não redefinem o acordo |
| **Resolvedor** | **Brand Engine** — este contrato atribui a ela a interpretação da instância válida em **contexto de marca** |
| **Consumidores** | **MOBS Core** (orquestração) e módulos autorizados (Engines, Generators, Validators) que recebem o contexto via Core |

A Marca permanece entidade do domínio.
A Engine **cumpre** a responsabilidade de resolução definida pelo contrato — não cria a entidade nem define seu significado.

Conforme o domínio: a Brand Engine pode ser acionada pelo Core **após** o contexto de projeto (quando houver vínculo), ou de forma **independente** quando só a marca estiver em jogo.

Consumidores **não** redefinem o contrato ad hoc.
Consumidores **não** devem acoplar-se à serialização física.
Detalhe: [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) §9–§10.

---

## 15. Relação com o Domain Model

| Direção | Conteúdo |
|---|---|
| **Depende de** | Conceito Marca, relações Projeto↔Marca, Core, Engines, contexto resolvido |
| **Não redefine** | Vocabulário nem fronteiras já aprovadas no domínio |
| **Não fecha** | Múltiplas marcas por projeto; herança; override de tokens; composição de packs; Produto/Organização |

O domínio permanece a **fonte da verdade conceitual**.
Este contrato é a **promessa operacional** sobre Marca.

---

## 16. Relação com Configuration Contracts

| Direção | Conteúdo |
|---|---|
| **Depende de** | Constituição inteira: ownership, validação, consumo, evolução, depreciação, extensões, anti-acoplamentos |
| **Especializa** | Elementos obrigatórios de todo contrato ([`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) §5) para a entidade Marca |
| **Não duplica** | Regras gerais — referencia e aplica |

`CONFIGURATION_CONTRACTS.md` continua sendo a **constituição**.
`BRAND_CONTRACT.md` é **cidadão** dessa constituição.

---

## 17. Relação com Project Contract

| Direção | Conteúdo |
|---|---|
| **Tipo** | Contratos concretos **irmãos** sob a mesma constituição |
| **Permitido** | Referência cruzada; alinhamento editorial; coerência na relação Projeto↔Marca |
| **Proibido** | Derivar significado de Marca de `PROJECT_CONTRACT`; tornar Marca subestrutura de Projeto; depender estruturalmente do contrato de Projeto |

`PROJECT_CONTRACT.md` não possui autoridade sobre Marca.
Este documento não possui autoridade sobre Projeto.

---

## 18. Relação com Projeto

Projeto ⊥ Marca (independência oficial no domínio).

| Dependência | Status |
|---|---|
| Projeto **pode** referenciar Marca | Opcional, declarativo |
| Projeto **exige** Marca | Não |
| Marca **exige** Projeto | Não |
| N Projetos ↔ 1 Marca | Oficial |
| Projeto ↔ Marca 1:1 | Oficial (entidades ainda separadas) |
| Formato da referência | Futuro (schema / políticas) |
| Hardcode Projeto↔Marca no Core | Proibido |
| Uma entidade como propriedade interna da outra | Proibido |

Este contrato **não** redefine Projeto.

---

## 19. Relação com Core

| Core faz | Core não faz |
|---|---|
| Aciona a Brand Engine no fluxo adequado (após contexto de projeto, se houver vínculo; ou de forma independente) | Embutir regras profundas de Marca |
| Recebe o contexto resolvido e orquestra módulos | Ser Resolvedor da Marca |
| Permanece genérico ao ecossistema | Conhecer identidade “por hardcode” de um produto |

Dependência: Marca → Core **não** é de interpretação de domínio; é de **orquestração** após resolução.

---

## 20. Relação com Brand Engine

| Direção | Conteúdo |
|---|---|
| **Atribuição deste contrato** | Resolução do **contexto de Marca** |
| **Cumpre** | Interpretação de instância válida; exposição do contexto oficial necessário aos consumidores; recusa de operações que violem regras permanentes de identidade |
| **Não faz** | Definir o significado de Marca; ser Authority; orquestrar a fila global; redesenhar mestres; conhecer landing como regra de marca |

Este contrato estabelece que a resolução do contexto de Marca é responsabilidade da Brand Engine.
A Engine interpreta instâncias válidas em conformidade com este contrato.
O significado de Marca permanece sob Authority do [`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md).

Detalhe de responsabilidades de Engine: [`BRAND_ENGINE.md`](../../../project/automation/BRAND_ENGINE.md) — não redefinidas aqui.

---

## 21. Relação com demais Engines

| Engine | Relação com Marca |
|---|---|
| **Project Engine** | Resolve contexto de Projeto; pode expor associação declarativa a Marca quando houver — não resolve Marca |
| **Demais Engines** | Consomem o que o contrato e o contexto de marca autorizam; não substituem a Marca nem a Brand Engine |

---

## 22. Relação com Generators e Validators

| Componente | Relação |
|---|---|
| **Generators** | Consomem contexto resolvido + fontes oficiais; produzem derivados; **não** redefinem Marca; **não** alteram Source of Truth de mestres |
| **Validators** | Verificam conformidade com este contrato / domínio; emitem pass/fail e diagnósticos; **não** são Authority |

---

## 23. Relação com Capabilities

| Relação | Conteúdo |
|---|---|
| **Conceitual** | O domínio admite que capabilities futuras possam exigir contexto de marca |
| **Não é** | Capability = Marca; Marca = feature de produto |
| **Modelo detalhado** | Em aberto (`CAPABILITY_MODEL` / contratos futuros) |

Enquanto o catálogo não existir, este contrato **não** inventa requisitos de capability.
Só registra a relação admitida pelo domínio.

---

## 24. Relação com Resolved Context

| Artefato | Papel |
|---|---|
| Este contrato | Expectativas sobre Marca |
| Instância de Marca | Valores declarados (futura serialização) |
| Contexto resolvido de marca | Interpretação validada na resolução atribuída à Brand Engine |
| Assets / mestres / derivados | Materializam aspectos da identidade; não substituem o contrato nem o contexto |

O contexto resolvido **deriva** do contrato + instância + resolução.
Não substitui este contrato.
Não carrega significado que este contrato não autoriza.

Independência física: trocar a serialização da instância não deve alterar o significado do contexto, se contrato e resolução forem preservados
([`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) §11).

---

## 25. Compatibilidade e versionamento conceitual

Política geral: [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) §12.

### Neste contrato

| Tipo | Ideia |
|---|---|
| **Compatível** | Consumidores antigos do contexto de Marca permanecem corretos sob as mesmas garantias e invariantes |
| **Incompatível** | Mudança de significado de Marca, de invariante, de obrigatoriedade essencial, de relação fundamental ou de expectativa assumida por consumidores — exige versão conceitual nova e transição explícita |

**Versionamento conceitual** deste documento (e do acordo) é independente de:

- schema;
- nome de arquivo;
- formato;
- numeração de serialização;
- implementação da Brand Engine.

Defaults futuros **não** devem alterar significado em silêncio.

**Independência da serialização:** um contrato nunca pode depender de detalhes de sua futura serialização.
A representação física materializa o acordo; não o define.

Aplicado a Marca: a entidade não é arquivo, pasta, conjunto de assets, formato ou schema.
Trocar a representação física não altera necessariamente o significado da entidade.
Arquivos e assets materializam aspectos da Marca, mas não constituem sozinhos sua identidade conceitual.

---

## 26. Evolução

Evoluir este contrato significa alterar expectativas formais sobre Marca de forma **explícita** e documentada.

Distinguir:

| Evento | O que muda |
|---|---|
| **Evolução do contrato** | Garantias, invariantes ou papéis do acordo |
| **Evolução de uma instância** | Declaração concreta de uma Marca |
| **Evolução da representação física** | Assets, serialização, paths futuros |
| **Evolução da Brand Engine** | Implementação da resolução — não o significado da entidade |

- Preferir mudanças que preservem garantias aos consumidores.
- Mudanças incompatíveis exigem comunicação, migração e alinhamento Owner ↔ Authority.
- Consumidores e Engines **não** evoluem o contrato por uso local.
- Evolução do acordo **não** se ancora em detalhes de serialização futura.

Registro em HISTORY/CHANGELOG conforme governança do repositório.

---

## 27. Depreciação

Deprecar parte deste acordo (ou o acordo inteiro, em hipótese extrema) exige:

- motivo;
- substituto (se houver);
- janela de transição;
- proibição de uso em novos produtores após a data definida.

Remoção silenciosa de expectativas sobre Marca é **anti-padrão**.

Distinguir:

| Evento | Natureza |
|---|---|
| Depreciação do **contrato** (ou parte) | Mudança do acordo formal |
| Depreciação de uma **instância** de Marca | Ciclo de vida de uma identidade concreta |
| Substituição de **assets** / representações | Materialização — não equivale a deprecar o conceito |
| Remoção de uma **serialização** | Transporte/persistência — não equivale a deprecar a entidade |

Esses eventos **não** são equivalentes.

---

## 28. Extensões

Extensões específicas de uma Marca **podem** existir para diferenças legítimas, desde que:

- não violem os invariantes deste núcleo;
- tenham proprietário;
- sejam documentáveis e validáveis;
- não escondam acoplamento nem regras de produto no Core;
- não redefinam Marca em silêncio;
- não acoplem o contrato a uma tecnologia;
- não transformem exceção local em regra constitucional.

Extensão sem registro no acordo-base é dívida estrutural
([`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md) §13).

Mecanismo físico de extensões: **não** definido nesta etapa.

---

## 29. Glossário (escopo Marca)

| Termo | Neste documento |
|---|---|
| **Marca** | Entidade do domínio — identidade oficial (recursos e regras) |
| **Contrato de Marca** | Este acordo (BRAND_CONTRACT) |
| **Instância de Marca** | Declaração concreta alinhada ao contrato |
| **Contexto de marca** | Contexto resultante da resolução atribuída à Brand Engine |
| **Source of Truth de identidade** | O que os recursos e regras da Marca constituem para a plataforma — distinto da entidade Marca em si |
| **Owner** | Quem mantém este contrato |
| **Authority** | Quem define o significado de Marca (domínio) |
| **Associação declarativa** | Vínculo opcional Projeto↔Marca sem hardcode |

Demais termos oficiais: [`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md) e [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md).

---

## 30. Questões em aberto (não bloqueantes)

| Questão | Onde resolver |
|---|---|
| Atributos concretos de uma instância de Marca | Schema mínimo do perfil v1 em `docs/mobs/schemas/`; perfis adicionais e schema universal permanecem abertos |
| Formato e localização da serialização | Após schema / políticas de serialização |
| Formato da referência Projeto↔Marca | Políticas / schemas futuros |
| Representação e catálogo de assets / tokens | Após contrato + schema; não aqui |
| Múltiplas marcas por projeto além da primária | Domínio / aprovação explícita |
| Herança ou composição entre Marcas | Domínio / aprovação explícita |
| Variantes, temas, override de tokens por projeto | Domínio / aprovação explícita |
| Composição de packs de export | Domínio / aprovação explícita |
| Requisitos de Capability que exijam marca | `CAPABILITY_MODEL` |
| Formato canônico de erros de validação | `RESOLUTION_MODEL` / Validators |
| Numeração e ferramentas de migração | Política + governança |

Nenhuma dessas é decisão oficial até contrato/aprovação explícita — alinhado ao domínio.

---

## 31. Próximos documentos

1. `CAPABILITY_MODEL.md` — se necessário
2. `RESOLUTION_MODEL.md`
3. Perfis/schemas adicionais e exemplos (além do mínimo da v1)
4. Validators institucionais e demais módulos do roadmap

O roadmap de módulos permanece em [`AUTOMATION_ROADMAP.md`](../../../project/automation/AUTOMATION_ROADMAP.md). A v1 está concluída no alcance Projeto → Marca associado.

---

## 32. Encerramento

O domínio nomeou a Marca.
A constituição exigiu um contrato.
Este documento **promete** o que uma Marca deve significar para a plataforma.

Assets mudarão. Pastas mudarão. Serializações virão.
A identidade oficial — e as garantias deste acordo — devem permanecer.

Uma Marca não existe porque há arquivos.
Há arquivos porque existe uma identidade a preservar.

Generators materializam.
A Engine interpreta.
O Core orquestra.
O domínio guarda o significado.

> Preserve a identidade.
> Não confunda entidade com pasta.
> Atribua a resolução à Engine.
> Deixe o Core orquestrar.

---

## Referências

- [`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md)
- [`CONFIGURATION_CONTRACTS.md`](CONFIGURATION_CONTRACTS.md)
- [`PROJECT_CONTRACT.md`](PROJECT_CONTRACT.md)
- [`WHY_MOBS.md`](../foundation/WHY_MOBS.md)
- [`project/automation/MOBS.md`](../../../project/automation/MOBS.md)
- [`project/automation/BRAND_ENGINE.md`](../../../project/automation/BRAND_ENGINE.md)
- [`project/automation/PROJECT_ENGINE.md`](../../../project/automation/PROJECT_ENGINE.md)
- [`project/automation/BUILD_SYSTEM.md`](../../../project/automation/BUILD_SYSTEM.md)
- [`project/automation/AUTOMATION_RULES.md`](../../../project/automation/AUTOMATION_RULES.md)
- [`project/automation/AUTOMATION_ROADMAP.md`](../../../project/automation/AUTOMATION_ROADMAP.md)
- [`PROJECT_INDEX.md`](../../../PROJECT_INDEX.md)
- [`PROJECT_RULES.md`](../../../PROJECT_RULES.md)
- [`AI_CONTEXT.md`](../../../AI_CONTEXT.md)
