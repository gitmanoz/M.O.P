# AI Context — Missão OAB

Este arquivo orienta agentes de IA que trabalham neste repositório.

# STOP

Antes de escrever qualquer linha de código:

1. Se for o início de uma nova conversa, leia primeiro `PROJECT_INDEX.md`.
2. Identifique a categoria da tarefa (Decision Tree do `PROJECT_INDEX`).
3. Carregue **apenas** os documentos necessários — nunca a documentação completa sem necessidade.
4. Leia este arquivo quando a Decision Tree (ou a tarefa) exigir.
5. Leia `PROJECT_RULES.md` quando a Decision Tree (ou a tarefa) exigir.
6. Consulte os demais documentos indicados pelo ramo da tarefa.
7. Somente depois proponha alterações.

Este documento tem prioridade sobre suposições do agente.

## Inicialização do Projeto

Sempre que uma nova conversa for iniciada, caso exista um `PROJECT_INDEX.md`, ele deve ser o **primeiro documento lido** antes de qualquer outro.

O `PROJECT_INDEX.md` é a **porta de entrada oficial** e o **orquestrador de contexto** do projeto.

### Regra permanente de carregamento

Sempre que uma conversa começar:

1. Ler `PROJECT_INDEX.md`.
2. Identificar a categoria da tarefa.
3. Carregar apenas os documentos necessários.

Nunca carregar a documentação completa sem necessidade.

O `PROJECT_INDEX` organiza a ordem de leitura e o subconjunto de contexto. Não substitui os demais documentos — apenas roteia para eles.

## MOBS — Engenharia do Ecossistema

Sempre que uma tarefa envolver:

- automações;
- scripts;
- assets (geração, exportação, pipelines);
- build;
- deploy;
- geração automática;

consultar **primeiro** a documentação do MOBS em `project/automation/`, começando por `MOBS.md` e `AUTOMATION_RULES.md`, e em seguida a Engine afetada.

Nunca implementar automações sem arquitetura documentada e aprovada.

O MOBS é a plataforma de engenharia do **Ecossistema Missão** (não apenas da Missão OAB). Automações devem ser genéricas e configuráveis por marca/projeto.

Para decisões estruturais, posicionamento, novos módulos ou arquitetura MOBS relevante, consultar também `docs/mobs/foundation/WHY_MOBS.md` (propósito, valor e bússola de decisão).

Para modelagem de conceitos, relações e fronteiras **antes** de contratos concretos ou schemas (MOBS 0.2), consultar `docs/mobs/domain/DOMAIN_MODEL.md`.

Para as regras gerais de ownership, validação, evolução e depreciação de contratos, consultar `docs/mobs/contracts/CONFIGURATION_CONTRACTS.md`.

Para o contrato concreto da entidade Projeto (sem schemas), consultar `docs/mobs/contracts/PROJECT_CONTRACT.md`.

Para o contrato concreto da entidade Marca (sem schemas), consultar `docs/mobs/contracts/BRAND_CONTRACT.md`.

Para a governança oficial de tarefas arquiteturais do MOBS (planejamento, revisão, validação e aprovação), consultar `ARCHITECTURE_TASK_PROTOCOL.md`.

Para a arquitetura física permanente da documentação MOBS (grupos, descoberta, crescimento e migração), consultar `DOCUMENT_ARCHITECTURE.md`.

Para a estrutura física alvo, convenção de paths (`product-id`, `brand-id`, `contract-id`) e política de nascimento de novos documentos (MOBS 0.2 — Fase 1), consultar `DOCUMENT_STRUCTURE_PLAN.md`.

## Governança

`PROJECT_RULES.md` passa a ser **leitura obrigatória** antes da execução de qualquer tarefa.

Ele é o contrato operacional do repositório e define o fluxo de trabalho, regras de identidade visual, documentação, changelog/history e commits.

Em caso de dúvida operacional, consultar `PROJECT_RULES.md` em conjunto com este arquivo e com `PROJECT_INDEX.md`.

## Visão do produto

A Missão OAB é uma EdTech voltada à preparação para o Exame da OAB.

A marca representa direção, evolução e aprovação.

A metáfora central do produto é:

> Missão OAB é o mapa.  

> Método CAPA é o caminho percorrido sobre esse mapa.



## Documentação obrigatória

Antes de realizar mudanças relevantes, consulte os arquivos adequados:

### Governança operacional

- `PROJECT_INDEX.md`
- `PROJECT_RULES.md`
- `AI_CONTEXT.md`

### Engenharia (Ecossistema / MOBS)

- `docs/mobs/foundation/WHY_MOBS.md`
- `docs/mobs/domain/DOMAIN_MODEL.md`
- `docs/mobs/contracts/CONFIGURATION_CONTRACTS.md`
- `docs/mobs/contracts/PROJECT_CONTRACT.md`
- `docs/mobs/contracts/BRAND_CONTRACT.md`
- `ARCHITECTURE_TASK_PROTOCOL.md`
- `DOCUMENT_ARCHITECTURE.md`
- `DOCUMENT_STRUCTURE_PLAN.md`
- `project/automation/MOBS.md`
- `project/automation/BUILD_SYSTEM.md`
- `project/automation/PROJECT_ENGINE.md`
- `project/automation/BRAND_ENGINE.md`
- `project/automation/AUTOMATION_ROADMAP.md`
- `project/automation/AUTOMATION_RULES.md`

### Marca

- `docs/brand/BRAND_BOOK.md`
- `docs/brand/BRAND_VOICE.md`
- `docs/brand/COPYWRITING.md`



### Produto

- `docs/product/PRD.md`
- `docs/product/ROADMAP.md`
- `docs/product/USER_JOURNEY.md`
- `docs/product/BUSINESS_MODEL.md`
- `docs/product/GAMIFICATION.md`

### Design

- `DESIGN_GUIDE.md`
- `UI_KIT.md`



## Identidade visual oficial

Os arquivos oficiais da marca estão em:

`assets/brand/source/`

Arquivos mestres finais (Source of Truth), entre outros:

- `assets/brand/source/master-symbol.svg`
- `assets/brand/source/master-symbol-black.svg`
- `assets/brand/source/master-symbol-white.svg`
- `assets/brand/source/master-typography.svg`
- `assets/brand/source/master-logo-horizontal.svg`
- `assets/brand/source/master-logo-horizontal-black.svg`
- `assets/brand/source/master-logo-horizontal-white.svg`
- `assets/brand/source/master-logo-vertical.svg`
- `assets/brand/source/master-logo-vertical-black.svg`
- `assets/brand/source/master-logo-vertical-white.svg`

Arquivos editáveis Inkscape (únicos permitidos para edição):

- `assets/brand/source/master-symbol_INK.svg`
- `assets/brand/source/master-typography_INK.svg`
- `assets/brand/source/master-logo-horizontal_INK.svg`
- `assets/brand/source/master-logo-vertical_INK.svg`

Consulte também `assets/brand/README.md`.

O arquivo disponível deve ser tratado como a fonte oficial da identidade visual.

## Brand Assets Oficiais

Os arquivos oficiais da identidade visual ficam em:

`assets/brand/source/`

Regras permanentes:

- Sempre utilizar esses arquivos.
- Nunca redesenhar logotipos.
- Nunca substituir por PNG quando houver SVG.
- Sempre preferir SVG em HTML.
- Os arquivos `*_INK.svg` são os únicos destinados à edição.
- Os demais SVG em `source/` são considerados arquivos finais.
- Ao criar novas páginas, componentes ou materiais institucionais, utilizar exclusivamente esses assets.

Estrutura complementar:

- `assets/brand/exports/` — exportações derivadas
- `assets/brand/favicon/` — favicons
- `assets/brand/social/` — peças sociais
- `assets/brand/og/` — Open Graph
- `assets/brand/app/` — assets de aplicativo
- `assets/brand/reference/` — referências raster históricas (não Source of Truth)

## Regras obrigatórias da marca

- Nunca redesenhar o símbolo ou a logo.
- Nunca alterar proporções, curvas ou geometria.
- Nunca recriar a marca manualmente em HTML ou CSS.
- Nunca usar screenshots ou PNGs como fonte principal quando houver SVG oficial.
- Nunca inventar novas cores sem consultar o Brand Book.
- Nunca alterar tipografia sem consultar a documentação da marca.
- Sempre preservar a proporção original dos SVGs.
- Sempre utilizar os arquivos oficiais existentes em `assets/brand/source/`.



## Uso na landing page

Ao implementar ou atualizar a landing:

- Utilizar os SVGs oficiais diretamente no HTML.
- Preferir a tag `<img>` para logos estáticas.
- Definir dimensões pelo CSS sem distorcer a proporção.
- Usar `height: auto` quando a largura for definida.
- Não converter o SVG em base64 sem necessidade.
- Não copiar manualmente o conteúdo interno do SVG para o HTML, salvo necessidade técnica justificada.
- Não substituir a marca por texto, emoji, ícone genérico ou símbolo criado por CSS.

Exemplo recomendado:

```html

<img

  src="assets/brand/source/master-logo-horizontal.svg"

  alt="Missão OAB"

  class="header__logo-image"

/>



```

## Governança de histórico e changelog

O projeto mantém dois documentos complementares:

- `CHANGELOG.md` — mudanças técnicas e de entrega relevantes, no padrão Keep a Changelog.
- `HISTORY.md` — marcos, fases e decisões institucionais do projeto.

### Regras obrigatórias

1. Sempre que uma tarefa produzir uma mudança relevante e concluída no projeto, o agente deve preparar uma proposta de atualização para `CHANGELOG.md`.

2. O agente não deve alterar `CHANGELOG.md` automaticamente sem aprovação explícita do responsável pelo projeto.

3. Antes de editar o `CHANGELOG.md`, o agente deve apresentar no chat:
   - a versão ou seção que será atualizada;
   - a categoria utilizada: Added, Changed, Fixed, Removed, Deprecated ou Security;
   - o texto exato proposto;
   - uma pergunta objetiva solicitando aprovação.

4. Somente após uma resposta explícita de aprovação o agente poderá escrever a alteração no `CHANGELOG.md`.

5. Alterações pequenas, temporárias, experimentais ou ainda não concluídas não devem ser registradas.

6. Toda mudança relevante aprovada para o `CHANGELOG.md` também deve ser considerada para o `HISTORY.md`.

7. O `HISTORY.md` deve registrar marcos, fases e decisões relevantes do projeto, não cada alteração técnica pequena.

8. Antes de modificar o `HISTORY.md`, o agente também deve apresentar a entrada proposta e pedir aprovação explícita.

9. Quando uma nova entrega representar apenas evolução técnica dentro de uma fase já existente, o agente deve atualizar a fase correspondente, evitando criar seções redundantes.

10. Nunca inventar datas, versões, decisões ou acontecimentos.

11. Utilizar o Git, os arquivos atuais e a documentação como fontes de verdade.

12. Ao final de cada tarefa relevante, o agente deve informar:
    - se recomenda atualização do `CHANGELOG.md`;
    - se recomenda atualização do `HISTORY.md`;
    - quais entradas propõe;
    - e aguardar aprovação antes de gravá-las.

