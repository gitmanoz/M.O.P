# Contratos de Configuração do MOBS

> Um conceito do domínio só governa a plataforma quando se torna um contrato: expectativas formais, com dono, limites e regras de evolução — ainda independentes de qualquer arquivo.

Este documento é a **constituição dos contratos de configuração** do MOBS.
Todo contrato futuro (Projeto, Marca, Capability ou outros) **deve** obedecer às regras aqui definidas.

Ele **deriva** de [`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md), que permanece a **fonte da verdade conceitual**.
Ele **não** define contratos concretos, schemas nem serializações.

Trilha permanente:

```text
WHY_MOBS → MOBS → DOMAIN_MODEL → CONFIGURATION_CONTRACTS
  → contratos concretos → schemas → implementação
```

---

## Filosofia dos Contratos

O MOBS escolhe **contratos** como unidade de engenharia porque a plataforma precisa de fronteiras oficiais entre o que o domínio significa e o que a implementação faz.

Contratos:

- **isolam conhecimento** — o acordo fica no repositório, não só na memória de pessoas;
- **reduzem acoplamento** — produtores e consumidores dependem de expectativas, não de detalhes internos uns dos outros;
- **permitem evolução independente** — um lado pode mudar implementação sem redefinir o significado do outro;
- **tornam mudanças governáveis** — incompatibilidade e depreciação são atos explícitos;
- **tornam o comportamento previsível** para humanos e agentes de IA que leem as mesmas regras;
- **estabelecem a fronteira** entre domínio (significado) e implementação (como se cumpre).

Sem contratos, a plataforma improvisa. Com contratos, a plataforma **promete**.

---

## 1. Estado do documento

| Dimensão | Situação |
|---|---|
| **Autoridade conceitual** | [`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md) |
| **Este documento** | Regras gerais de existência, ownership, validação, consumo e evolução de contratos |
| **Contratos concretos aprovados** | [`PROJECT_CONTRACT.md`](PROJECT_CONTRACT.md), [`BRAND_CONTRACT.md`](BRAND_CONTRACT.md) — irmãos; sem schemas ainda |
| **Ainda não criado** | `CAPABILITY_MODEL.md`, schemas, serializações |
| **Implementação** | Não iniciada |

### O que este documento não faz

- Não define campos de Projeto, Marca ou Capability.
- Não escolhe JSON, YAML, TOML ou tecnologia de schema.
- Não define paths, layouts de arquivo ou runtime.
- Não altera a taxonomia Core / Engine / Generator / Validator.
- Não move regras de domínio para o Core.

---

## 2. Hierarquia obrigatória

A ordem da verdade **nunca** se inverte:

```text
Modelo de Domínio
    ↓
Contratos
    ↓
Schemas (futuros)
    ↓
Serializações (futuras)
    ↓
Contextos Resolvidos
    ↓
Execução
```

- Se um contrato contradisser o domínio, o contrato está errado.
- Se um schema contradisser o contrato (ou o domínio), o schema ou o contrato derivado está errado — não o domínio aprovado.
- Serialização **não** cria significado; apenas transporta ou persiste instâncias.

---

## 3. O que é um Contrato de Configuração

No MOBS, um **Contrato de Configuração** é o acordo formal que transforma um **conceito do domínio** em expectativas verificáveis entre partes da plataforma.

### Contratos são promessas

Um contrato é uma **promessa** entre produtores e consumidores.

Consumidores devem poder confiar que:

- o **significado** permanece estável enquanto a versão do contrato for a mesma;
- **incompatibilidades** são explícitas;
- a **evolução** é governada;
- **exceções** não aparecem em silêncio.

> Contratos descrevem **expectativas**.
> Não implementações.

### Contrato não descreve implementação

Um contrato **nunca** existe por causa de uma tecnologia.
Existe porque há necessidade de **comunicação formal** entre partes.

JSON, YAML, banco, API ou qualquer outra representação apenas **materializam** o contrato.
O contrato continua existindo mesmo que todas as tecnologias mudem.

### O que um contrato responde

- o que **deve** existir;
- o que **pode** existir;
- o que **deve ser verdadeiro** (invariantes);
- quem **garante**, quem **valida**, quem **resolve**, quem **consome**;
- como o acordo **evolui** sem destruir o significado.

### Um contrato não é

- um arquivo (serialização possível);
- um schema (recorte mecanicamente validável — futuro);
- uma instância (valores concretos);
- uma Engine (resolve/consome; não substitui o acordo);
- código (obedece ao contrato; não o define);
- feature de um único produto.

> Um contrato não é um arquivo — vinculante para toda a linha MOBS 0.2.

---

## 4. Por que contratos existem

Sem contratos, conceitos ficam implícitos, módulos inventam expectativas locais, o Core vira depósito de exceções e schemas nascem sem dono.

Com contratos, o domínio ganha fronteiras operacionais: Engines e Validators compartilham o mesmo acordo; evolução e compatibilidade têm linguagem comum; humanos e IAs leem as mesmas regras no repositório.

Alinhado a [`WHY_MOBS.md`](../foundation/WHY_MOBS.md): configuração acima de duplicação; documentação antes da implementação; Core genérico.

---

## 5. O que todo contrato deve possuir

Todo Contrato de Configuração do MOBS **deve** declarar, de forma explícita (em documentação normativa futura do contrato concreto):

| Elemento | Função |
|---|---|
| **Conceito de domínio** | Qual entidade ou relação do [`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md) representa |
| **Identidade do contrato** | Nome estável e propósito em uma frase |
| **Escopo** | O que cobre e o que deliberadamente não cobre |
| **Invariantes** | O que deve permanecer verdadeiro |
| **Obrigatoriedade** | O que é exigido vs. opcional no acordo |
| **Proprietário (Owner)** | Quem responde pela evolução e manutenção do contrato |
| **Autoridade (Authority)** | Quem define oficialmente o significado do conceito representado |
| **Produtor** | Quem gera ou mantém instâncias alinhadas |
| **Validador responsável** | Quem verifica conformidade (papel; não implementação) |
| **Resolvedor** | Qual Engine (ou papel) interpreta a instância em contexto |
| **Consumidores** | Quem pode usar o contexto resultante |
| **Falha** | O que acontece quando o contrato é violado (princípio: falhar com clareza) |
| **Evolução** | Como mudanças compatíveis/incompatíveis serão tratadas (política geral abaixo) |
| **Extensões** | Se e como extensões são permitidas sem corromper o núcleo |

O **formato** dessa declaração será definido nos documentos de contrato concreto — não aqui.

---

## 6. O que nunca pertence a um contrato

Um contrato de configuração **não deve** conter:

- regras específicas de um único produto embutidas como se fossem da plataforma;
- lógica que pertence ao **Core** (orquestração);
- geração de artefatos (responsabilidade de Generators);
- redesenho ou alteração de Source of Truth de marca;
- dependência obrigatória de path, extensão ou tecnologia de arquivo;
- overrides ilimitados;
- conhecimento que só existe fora do repositório;
- campos sem conceito correspondente no domínio;
- exceções locais disfarçadas de “flexibilidade”.

---

## 7. Propriedade (Owner) e Autoridade (Authority)

> Contratos sem proprietário tornam-se dependências implícitas.

### Owner e Authority

| Conceito | Significado |
|---|---|
| **Owner** | Quem **responde** pela evolução e manutenção do contrato |
| **Authority** | Quem **define oficialmente** o significado do conceito no domínio |

Na maioria dos casos, Owner e Authority **podem** coincidir.
O MOBS **não** pressupõe que sejam sempre a mesma entidade.

Authority sem Owner gera contratos órfãos.
Owner sem Authority gera manutenção sem legitimidade conceitual.

### Demais papéis

| Papel | Responsabilidade |
|---|---|
| **Produtor** | Garante que instâncias respeitam o acordo |
| **Validador** | Detecta violações de forma explícita |
| **Resolvedor** | Transforma instância válida em contexto resolvido |
| **Consumidor** | Usa apenas o que o contrato autoriza |

Os papéis **devem** estar nomeados em cada contrato concreto.
Atribuições a Project/Brand Contract serão feitas nos documentos futuros, respeitando a arquitetura (ex.: contexto de projeto → Project Engine).

### Quem pode evoluir

Somente o **Owner** (ou processo de aprovação do ecossistema alinhado a [`PROJECT_RULES.md`](../../../PROJECT_RULES.md) e [`AUTOMATION_RULES.md`](../../../project/automation/AUTOMATION_RULES.md)), em harmonia com a **Authority** quando distinta, pode alterar o significado de um contrato.
Consumidores **não** redefinem o contrato ad hoc.

---

## 8. Validação

Validar um contrato significa verificar se uma **instância** (e, no futuro, se um **schema**) está em conformidade com as expectativas do acordo.

Princípios:

- validação **semântica** importa tanto quanto estrutural;
- falha deve ser **clara** (o que violou, qual invariante);
- validação **não** escreve Source of Truth;
- Validators verificam; **não** substituem o contrato nem o domínio;
- validação apenas sintática de arquivo é **insuficiente**.

Detalhe de formatos de erro e implementação: decisão futura (`RESOLUTION_MODEL` / Validators no roadmap).

---

## 9. Consumo

Consumir um contrato significa depender das **garantias** do acordo — preferencialmente via **contexto resolvido**, não via leitura crua de serialização.

Consumidores **devem**:

- conhecer apenas o necessário;
- respeitar o escopo do contrato;
- não assumir campos ou extensões não documentados.

Consumidores **não devem**:

- acoplar-se a representação física;
- contornar Validators;
- exigir do Core regras de domínio.

---

## 10. Relação com Core, Engines, Generators e Validators

| Componente | Relação com contratos |
|---|---|
| **Core** | Carrega configuração inicial e orquestra; **não** interpreta regras profundas de contrato de domínio; **não** embute exceções de produto |
| **Project Engine** | Resolvedor típico do contexto de **Projeto** (quando o contrato de projeto existir) |
| **Brand Engine** | Resolvedor típico do contexto de **Marca** (quando o contrato de marca existir) |
| **Demais Engines** | Consomem contextos autorizados; podem ser proprietárias de contratos de seu domínio |
| **Generators** | Consomem contexto resolvido; produzem artefatos; **não** definem o contrato de configuração |
| **Validators** | Verificam conformidade com contratos/domínio; emitem pass/fail e diagnósticos |

Fluxo preservado:

```text
Core carrega instância declarativa
    ↓
Validação (conforme contrato)
    ↓
Engine resolvedora → contexto resolvido
    ↓
Core orquestra módulos
    ↓
Generators / Engines / Validators conforme papéis
```

Project Engine permanece a **primeira** Engine de contexto acionada pelo Core.

---

## 11. Relação com Contextos Resolvidos

| Artefato | Papel |
|---|---|
| Contrato | Expectativas formais |
| Instância / configuração | Valores declarados |
| Contexto resolvido | Interpretação validada e normalizada, pronta para execução |

O contexto resolvido **deriva** do contrato + instância + resolução.
Ele **não** substitui o contrato.
Ele **não** deve carregar significado que o contrato não autoriza.

Independência física: trocar a serialização da instância não deve alterar o significado do contexto, se o contrato e a resolução forem preservados.

---

## 12. Evolução, compatibilidade e depreciação

### Princípios

- Toda evolução de contrato deve ser **explícita** e documentada.
- Preferir mudanças que **preservem significado** para consumidores existentes.
- Mudanças que alterem invariantes ou obrigatoriedade de forma incompatível exigem processo claro de migração e comunicação.
- Defaults **não** devem alterar significado em silêncio.
- Extensões **não** devem corromper o núcleo do contrato.

### Compatibilidade (definição conceitual)

| Tipo | Ideia |
|---|---|
| **Compatível** | Consumidores antigos continuam corretos sob as mesmas garantias |
| **Incompatível** | Garantias mudam; exige versão nova e plano de transição |

Mecanismos concretos (numeração, ferramentas de migração): **não** definidos aqui — cabem aos contratos concretos e a etapas posteriores.

### Deprecação

Deprecar é anunciar que uma parte do acordo deixará de ser suportada, com:

- motivo;
- substituto (se houver);
- janela de transição;
- proibição de uso em novos produtores após a data definida.

Remoção silenciosa é **anti-padrão**.

---

## 13. Extensões

Extensões **podem** existir para diferenças legítimas entre projetos/marcas, desde que:

- não violem invariantes do núcleo;
- tenham proprietário;
- sejam documentáveis e validáveis;
- não sirvam para esconder acoplamento ou regras de produto no Core.

Extensão sem contrato (ou sem registro no contrato-base) é dívida estrutural.

---

## 14. Acoplamentos a evitar

- contrato ↔ path de arquivo;
- contrato ↔ produto específico;
- Engine A lendo serialização “privada” da Engine B sem mediação;
- Core conhecendo invariantes profundos de Marca/Projeto;
- schema como substituto do domínio;
- consumidor dependente de extensão não documentada.

---

## 15. Ciclo de vida documental de um contrato concreto

Antes de implementar qualquer contrato específico, a sequência **deve** ser:

1. Conceito existente (ou formalmente adicionado) em [`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md).
2. Conformidade com **este** documento.
3. Documento do contrato concreto (ex.: `PROJECT_CONTRACT.md`) — ainda sem schema obrigatório na primeira redação, se assim for aprovado.
4. Schema(s) futuros derivados do contrato.
5. Serialização e exemplos.
6. Validators / resolução / implementação.
7. Registro em HISTORY/CHANGELOG conforme [`PROJECT_RULES.md`](../../../PROJECT_RULES.md).

Alinhado a [`AUTOMATION_RULES.md`](../../../project/automation/AUTOMATION_RULES.md): documentação e aprovação antes do código.

---

## 16. Bússola obrigatória (checklist)

Antes de aprovar qualquer contrato concreto:

1. Qual conceito do domínio ele representa?
2. Está subordinado a este documento e ao DOMAIN_MODEL?
3. Quem é o **Owner** e quem é a **Authority** (coincidem ou não)?
4. Quem produz, valida, resolve e consome?
5. Quais invariantes protege?
6. O que ocorre na violação?
7. Como evolui e como se depreca?
8. Extensões estão limitadas e nomeadas?
9. Há acoplamento a serialização, path ou tecnologia?
10. O Core permanece genérico?
11. Expressa diferença legítima ou exceção local?
12. Um novo colaborador compreenderia o acordo só pelo repositório?

---

## 17. Questões em aberto (não bloqueantes deste documento)

| Questão | Onde resolver |
|---|---|
| Conteúdo de Capability contracts | Documento concreto futuro |
| Tecnologia de schema | Após contratos concretos |
| Formato de serialização e localização | Após schemas |
| Numeração de versão e ferramenta de migração | Políticas por contrato + governança |
| Formato canônico de erros | RESOLUTION_MODEL / Validators |
| Catálogo de capabilities | CAPABILITY_MODEL (se necessário) |

---

## 18. Próximos documentos

1. ~~`PROJECT_CONTRACT.md`~~ — **aprovado** (`docs/mobs/contracts/PROJECT_CONTRACT.md`)
2. ~~`BRAND_CONTRACT.md`~~ — **aprovado** (`docs/mobs/contracts/BRAND_CONTRACT.md`)
3. `CAPABILITY_MODEL.md` — se o domínio de capabilities exigir formalização
4. Schemas e exemplos
5. Implementação e Validators

O roadmap de módulos (`AUTOMATION_ROADMAP.md`) permanece válido; este eixo documental **precede** schemas e runtime de configuração.

---

## 19. Encerramento

Contratos são a forma pela qual o domínio deixa de ser apenas vocabulário e passa a ser **promessa operacional**.

Tecnologias mudarão. Serializações mudarão. Schemas virão e irão.
As leis deste documento — expectativas claras, Owner e Authority nomeados, evolução governada, Core genérico — devem permanecer.

> Configure depois.
> Concorde primeiro.
> Prometa com precisão.

---

## Referências

- [`DOMAIN_MODEL.md`](../domain/DOMAIN_MODEL.md)
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
