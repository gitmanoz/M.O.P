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

Nunca criar documentação conflitante.

Se uma mudança de produto, marca ou processo exigir ajuste documental, alinhar os documentos afetados — ou propor o alinhamento ao responsável antes de gravar.

---

## 6. Mudanças relevantes

Ao finalizar uma tarefa relevante:

1. Avaliar se `HISTORY.md` precisa ser atualizado.
2. Avaliar se `CHANGELOG.md` precisa ser atualizado.
3. Apresentar a proposta ao responsável.
4. Aguardar aprovação explícita.
5. Somente depois atualizar os arquivos.

Alterações pequenas, temporárias, experimentais ou incompletas não devem ser registradas.

Nunca inventar datas, versões, decisões ou acontecimentos.

Utilizar Git, arquivos atuais e documentação como fontes de verdade.

---

## 7. Git

Ao finalizar qualquer tarefa relevante:

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
Propor atualização de documentação
    ↓
Propor commit
    ↓
Aguardar aprovação
    ↓
Executar commit
```

Não pular etapas de leitura seletiva, validação ou aprovação.

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
