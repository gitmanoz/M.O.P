# PROJECT RULES

## 1. Objetivo

Este documento define as regras permanentes de desenvolvimento da Missão OAB.

Ele é o contrato operacional do repositório: padroniza como IAs, desenvolvedores e colaboradores devem trabalhar neste projeto.

Sempre que houver conflito entre decisões momentâneas e estas regras, **estas regras prevalecem** até que sejam oficialmente alteradas pelo responsável do projeto.

---

## 2. Leitura obrigatória

Antes de iniciar qualquer tarefa:

1. Ler `PROJECT_INDEX.md` (bootloader / orquestrador de contexto).
2. Identificar a categoria da tarefa pela Decision Tree.
3. Carregar **somente** os documentos exigidos por aquele ramo.

Base mínima frequente:

- `AI_CONTEXT.md`
- `PROJECT_RULES.md`

Demais fontes (`docs/brand/`, `docs/product/`, `DESIGN_GUIDE.md`, `UI_KIT.md`, `HISTORY.md`, `CHANGELOG.md`, assets, código) entram **apenas quando necessário**.

Sempre utilizar as fontes oficiais do projeto.

Não iniciar implementação com base em memória, suposição ou prática genérica quando houver orientação documental específica.

Não carregar a documentação completa por padrão.

---

## 2.1. Gerenciamento de Contexto

Toda IA deve minimizar o consumo de contexto.

Sempre utilizar o `PROJECT_INDEX.md` para decidir quais documentos precisam ser carregados.

Evitar leitura desnecessária de documentação.

Objetivos: menos tokens, mais velocidade e maior precisão — sem sacrificar a fonte oficial correta para a área afetada.

---

## 2.2. Engenharia do Ecossistema

Toda automação deve ser **genérica**.

Nunca desenvolver soluções específicas para apenas um projeto quando uma solução reutilizável for possível.

Sempre pensar primeiro no **Ecossistema Missão**.  
Depois no **Projeto**.

A plataforma oficial de engenharia é o **MOBS** (`project/automation/`).

Antes de implementar automações, scripts, build, deploy ou geração automática:

1. Consultar `project/automation/MOBS.md`.
2. Consultar `project/automation/AUTOMATION_RULES.md`.
3. Consultar a Engine e o roadmap afetados.
4. Documentar e obter aprovação antes de código.

Configuração acima de código. Um motor para muitos projetos e marcas.

---

## 3. Identidade Visual

- Nunca redesenhar logotipos.
- Nunca alterar geometrias aprovadas.
- Nunca modificar proporções.
- Nunca substituir SVG oficial por PNG quando SVG puder ser utilizado.
- Sempre utilizar os arquivos oficiais presentes em:

`assets/brand/source/`

- Os arquivos `*_INK.svg` são os únicos destinados à edição.
- Os demais SVG em `source/` são considerados assets finais.
- Consultar também `assets/brand/README.md` para nomenclatura e fluxo de uso.

---

## 4. Arquitetura

- Sempre preservar a organização do projeto.
- Antes de criar novos arquivos, verificar se já existe uma estrutura apropriada.
- Evitar duplicação.
- Manter nomes consistentes.
- Preferir evoluir pastas e convenções existentes a inventar estruturas paralelas.

---

## 5. Documentação

Sempre manter coerência entre:

- PRD
- ROADMAP
- USER JOURNEY
- BUSINESS MODEL
- GAMIFICATION
- BRAND BOOK
- BRAND VOICE
- COPYWRITING
- AI_CONTEXT
- PROJECT_RULES
- DESIGN_GUIDE
- UI_KIT
- HISTORY
- CHANGELOG
- PROJECT_INDEX
- MOBS / documentação em `project/automation/`

Nunca criar documentação conflitante.

Se uma mudança de produto, marca ou processo exigir ajuste documental, alinhar os documentos afetados — ou propor o alinhamento ao responsável antes de gravar.

---

## 6. Mudanças relevantes

History, Changelog e Git **não** são etapas universais de toda colaboração.
Acionar esta seção **somente** quando houver **mudança estabilizada** que deva ser oficialmente registrada no repositório.

Nesse caso:

1. Avaliar se `HISTORY.md` precisa ser atualizado.
2. Avaliar se `CHANGELOG.md` precisa ser atualizado.
3. Apresentar a proposta ao responsável.
4. Aguardar aprovação explícita.
5. Somente depois atualizar os arquivos.

Alterações pequenas, temporárias, experimentais, incompletas ou ainda em fluxo de trabalho colaborativo não devem ser registradas.

Nunca inventar datas, versões, decisões, horários ou acontecimentos.

Utilizar Git, arquivos atuais e documentação como fontes de verdade.

---

## 6.1. History e Changelog

`HISTORY.md` e `CHANGELOG.md` possuem responsabilidades diferentes e **não** devem duplicar integralmente o mesmo conteúdo.

### HISTORY.md

- É **cronológico** (mais antigo → mais recente).
- Registra **data** e **hora** quando comprováveis.
- Usa o fuso **America/Sao_Paulo**.
- Explica contexto, objetivo, decisões, impacto, áreas envolvidas e próximos passos.
- **Não aceita horários inventados** — se a hora não for comprovável, registrar apenas a data (ou o mês conhecido) e indicar horário não registrado.
- Funciona como **diário** de produto e engenharia.
- Não substitui documentação técnica permanente de origem.

### CHANGELOG.md

- É **técnico** e orientado a **alterações** e **versões**.
- Usa categorias Keep a Changelog: Added, Changed, Fixed, Removed, Deprecated, Security (somente as necessárias).
- Diferencia documentação criada, documentação atualizada, arquitetura conceitual e funcionalidades implementadas.
- **Não** apresenta arquitetura conceitual como implementação executável.
- **Não** substitui o `HISTORY.md`.

---

## 7. Git

Acionar esta seção **somente** quando houver mudança estabilizada a versionar oficialmente (em geral após a avaliação da seção 6).
Não iniciar stage, commit ou push durante o fluxo cognitivo principal da colaboração.

Nesse caso:

1. Validar a integridade do projeto.
   - verificar referências quebradas;
   - verificar caminhos alterados;
   - verificar possíveis erros;
   - confirmar consistência geral.

2. Apresentar um resumo das alterações.

3. Sugerir uma mensagem de commit utilizando Conventional Commits.

4. Perguntar explicitamente se o commit está aprovado.

5. Somente após aprovação executar:

```bash
git add .
git commit -m "<mensagem aprovada>"
```

6. Informar:
   - hash do commit;
   - branch utilizada;
   - resumo do commit.

Nunca executar commits automaticamente sem aprovação explícita.

Nunca usar `--no-verify`, force push em main/master, ou alterar git config, salvo solicitação explícita do responsável.

---

## 8. Processo de trabalho

Fluxo padrão:

```
Boot (PROJECT_INDEX)
    ↓
Identificar categoria da tarefa
    ↓
Carregar contexto mínimo
    ↓
Planejar
    ↓
Executar
    ↓
Validar
    ↓
[se houver mudança estabilizada a registrar oficialmente]
    ↓
Propor History / Changelog (seção 6)
    ↓
Propor commit (seção 7)
    ↓
Aguardar aprovação
    ↓
Executar commit
```

Não pular etapas de leitura seletiva ou validação.
Não tratar History/Changelog/Git como continuação obrigatória de toda tarefa.

---

## 9. Princípios

Priorizar:

- clareza
- consistência
- escalabilidade
- reutilização
- documentação
- governança
- manutenibilidade

Nunca tomar atalhos que prejudiquem a qualidade futura do projeto.

---

## 10. Objetivo Final

Todas essas regras existem para permitir que diferentes IAs e desenvolvedores trabalhem no projeto mantendo a mesma qualidade, organização e identidade ao longo do tempo.

A Missão OAB deve evoluir com coerência institucional: mesma marca, mesma ética de produto, mesma disciplina de documentação e mesma previsibilidade operacional.

---

## 11. Critério de decisão entre soluções

Quando houver múltiplas soluções possíveis, priorizar, nesta ordem:

1. Clareza
2. Simplicidade
3. Reutilização
4. Escalabilidade
5. Performance
6. Otimizações prematuras somente quando justificadas

Sempre preferir soluções fáceis de entender e manter.

Evitar complexidade desnecessária.

Construir pensando na evolução do projeto nos próximos anos, e não apenas na tarefa atual.
