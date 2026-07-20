# ROADMAP — Missão OAB

> **Versão:** 1.0  
> **Última atualização:** Julho de 2026  
> **Horizonte:** V1 (atual) → V6 (18–24 meses)  
> **Status:** Documento interno de planejamento

---

## Índice

1. [Visão geral](#1-visão-geral)
2. [Princípios de priorização](#2-princípios-de-priorização)
3. [Timeline visual](#3-timeline-visual)
4. [V1 — Landing Page + WhatsApp](#v1--landing-page--whatsapp)
5. [V2 — Cadastro + Área do Aluno + Perfil](#v2--cadastro--área-do-aluno--perfil)
6. [V3 — IA + Questões + Cronograma](#v3--ia--questões--cronograma)
7. [V4 — Gamificação](#v4--gamificação)
8. [V5 — Assinaturas + Premium + Marketplace](#v5--assinaturas--premium--marketplace)
9. [V6 — Aplicativo Mobile](#v6--aplicativo-mobile)
10. [Dependências entre versões](#10-dependências-entre-versões)
11. [Riscos de roadmap](#11-riscos-de-roadmap)

---

## 1. Visão geral

O roadmap da Missão OAB segue uma lógica de **validação progressiva**:

```
Captar → Cadastrar → Estudar → Reter → Monetizar → Mobilizar
  V1        V2         V3       V4        V5          V6
```

Cada versão entrega valor mensurável antes de avançar para a próxima.

| Versão | Nome codinome | Foco | Trimestre alvo |
|---|---|---|---|
| V1 | **Porta** | Aquisição e validação | Q3 2026 |
| V2 | **Base** | Identidade e plataforma | Q4 2026 |
| V3 | **Motor** | Estudo inteligente | Q1–Q2 2027 |
| V4 | **Impulso** | Retenção e engajamento | Q3 2027 |
| V5 | **Sustentação** | Monetização saudável | Q4 2027 |
| V6 | **Mobilidade** | Estudo anywhere | Q1–Q2 2028 |

---

## 2. Princípios de priorização

### Framework RICE adaptado

| Critério | Peso | Pergunta |
|---|---|---|
| **Reach** (Alcance) | 25% | Quantos alunos isso impacta? |
| **Impact** (Impacto na aprovação) | 35% | Quanto melhora estudo/retenção? |
| **Confidence** (Confiança) | 20% | Temos dados ou é suposição? |
| **Effort** (Esforço) | 20% | Quanto tempo/recursos custa? |

### Regra de ouro

> **Nunca iniciar V(n+1) sem atingir os critérios de conclusão de V(n).**

Exceção: trabalho preparatório (spike técnico, design) pode começar em paralelo, mas **sem deploy em produção**.

---

## 3. Timeline visual

```
2026                          2027                          2028
Q3        Q4        Q1        Q2        Q3        Q4        Q1        Q2
│         │         │         │         │         │         │         │
├─ V1 ────┤         │         │         │         │         │         │
│ Landing │         │         │         │         │         │         │
│ WhatsApp│         │         │         │         │         │         │
│         ├─ V2 ────┤         │         │         │         │         │
│         │ Cadastro│         │         │         │         │         │
│         │ Perfil  │         │         │         │         │         │
│         │         ├──── V3 ──────────┤         │         │         │
│         │         │ Questões         │         │         │         │
│         │         │ Cronograma       │         │         │         │
│         │         │ IA               │         │         │         │
│         │         │                  ├─ V4 ────┤         │         │
│         │         │                  │ Gamif.  │         │         │
│         │         │                  │ XP      │         │         │
│         │         │                  │         ├─ V5 ────┤         │
│         │         │                  │         │ Premium │         │
│         │         │                  │         │ Market. │         │
│         │         │                  │         │         ├─ V6 ────┤
│         │         │                  │         │         │ App     │
│         │         │                  │         │         │ Offline │
```

---

## V1 — Landing Page + WhatsApp

> **Codinome:** Porta  
> **Status:** 🟢 Em produção  
> **Período:** Q3 2026

### Objetivo

Validar demanda e estabelecer funil de aquisição mensurável: **Meta Ads → Landing → WhatsApp**.

### Benefícios

| Benefício | Para quem | Impacto |
|---|---|---|
| Presença profissional online | Marca | Credibilidade imediata |
| Funil de leads mensurável | Growth | CAC calculável |
| Comunidade ativa no WhatsApp | Alunos | Valor gratuito desde dia 1 |
| Design System documentado | Engenharia | Base para V2+ |
| SEO inicial | Orgânico | Tráfego de longo prazo |

### Escopo detalhado

| Entrega | Descrição | Status |
|---|---|---|
| Landing responsiva | Hero, Benefícios, Como Funciona, FAQ, CTA | ✅ |
| Design System | Cores, tipografia, componentes | ✅ |
| Link WhatsApp real | URL do grupo no CTA | 🔴 |
| Meta Pixel | Eventos PageView + Lead | 🔴 |
| Política de Privacidade | LGPD compliance | 🟡 |
| Operação WhatsApp | Calendário editorial, moderação | 🟡 |
| Campanhas Meta Ads | 3 criativos, 2 audiences | 🔴 |

### Dependências

| Dependência | Tipo | Status |
|---|---|---|
| Domínio missaooab.com.br | Infra | Necessário |
| Conta Meta Business | Marketing | Necessário |
| Grupo WhatsApp criado | Operação | Necessário |
| Conta de anúncios configurada | Marketing | Necessário |
| Política de privacidade publicada | Legal | Necessário |

### Critérios para iniciar

```
┌────────────────────────────────────────────────────────────┐
│  CRITÉRIOS PARA INICIAR V1                                 │
├────────────────────────────────────────────────────────────┤
│  [✓] Proposta de valor definida                            │
│  [✓] Design System aprovado                                │
│  [✓] Landing page desenvolvida                             │
│  [ ] Domínio configurado e SSL ativo                       │
│  [ ] Grupo WhatsApp operacional                            │
│  [ ] Budget de ads definido (≥ R$ 1.500/mês)             │
│  [ ] Responsável por conteúdo WhatsApp designado           │
└────────────────────────────────────────────────────────────┘
```

### Critérios para concluir

```
┌────────────────────────────────────────────────────────────┐
│  CRITÉRIOS PARA CONCLUIR V1                                │
├────────────────────────────────────────────────────────────┤
│  [ ] ≥ 300 membros no grupo via landing                    │
│  [ ] Meta Pixel instalado e eventos validados              │
│  [ ] CAC < R$ 20 comprovado (≥ 4 semanas de dados)         │
│  [ ] Taxa conversão landing → WhatsApp ≥ 6%                │
│  [ ] ≥ 8 semanas de conteúdo entregue no grupo             │
│  [ ] NPS do grupo ≥ 40 (pesquisa com ≥ 30 respostas)       │
│  [ ] Lighthouse Performance ≥ 90                           │
│  [ ] Zero bugs críticos em produção                        │
└────────────────────────────────────────────────────────────┘
```

### Métricas de sucesso V1

| Métrica | Meta | Mínimo aceitável |
|---|---|---|
| Visitantes únicos/mês | 5.000 | 2.000 |
| Taxa conversão CTA | 8% | 5% |
| Leads WhatsApp | 400 | 200 |
| CAC | R$ 15 | R$ 25 |
| Retenção grupo (7 dias) | 70% | 50% |

### Riscos V1

| Risco | Mitigação |
|---|---|
| CTA sem link WhatsApp | Prioridade imediata — configurar URL |
| Conteúdo WhatsApp inconsistente | Calendário editorial semanal |
| Ads com CTR baixo | Testar 3+ criativos, 2 copies |

---

## V2 — Cadastro + Área do Aluno + Perfil

> **Codinome:** Base  
> **Status:** 🔵 Planejado  
> **Período:** Q4 2026

### Objetivo

Migrar de "comunidade no WhatsApp" para **plataforma com identidade de usuário** — cadastro, perfil e dashboard mínimo.

### Benefícios

| Benefício | Impacto |
|---|---|
| Saber quem são nossos alunos | Segmentação, personalização |
| Base para questões e progresso | Pré-requisito V3 |
| Onboarding estruturado | Ativação ≥ 70% |
| Redução de dependência do WhatsApp | Escalabilidade |
| Dados para IA futura | Histórico desde o início |

### Escopo detalhado

| Módulo | Features | Prioridade |
|---|---|---|
| **Auth** | Email/senha, Google OAuth, recuperação senha | P0 |
| **Perfil** | Nome, foto, fase OAB, data prova alvo, horas/dia | P0 |
| **Onboarding** | 3 telas: boas-vindas → perfil → 1ª missão | P0 |
| **Dashboard** | "O que fazer hoje" (placeholder até V3) | P0 |
| **Configurações** | Notificações, privacidade, excluir conta | P1 |
| **Migração WhatsApp** | Fluxo para membros existentes se cadastrarem | P1 |
| **Admin básico** | Painel para ver usuários cadastrados | P2 |

### Arquitetura V2

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Next.js    │────>│  NestJS API │────>│ PostgreSQL  │
│  Frontend   │     │  + Auth     │     │  (users)    │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │   Redis     │
                    │  (sessions) │
                    └─────────────┘
```

### Dependências

| Dependência | Origem | Bloqueante? |
|---|---|---|
| V1 concluída (≥ 300 leads) | V1 | Sim |
| Stack definida (Next.js + NestJS) | Engenharia | Sim |
| Infra cloud provisionada | DevOps | Sim |
| Fluxos de onboarding desenhados | Design | Sim |
| Política LGPD com DPO | Legal | Sim |

### Critérios para iniciar

```
┌────────────────────────────────────────────────────────────┐
│  CRITÉRIOS PARA INICIAR V2                                 │
├────────────────────────────────────────────────────────────┤
│  [ ] V1 critérios de conclusão atingidos (≥ 80%)           │
│  [ ] Stack técnica aprovada e documentada                  │
│  [ ] Repositório backend criado com CI/CD                  │
│  [ ] Designs de onboarding e dashboard aprovados           │
│  [ ] ≥ 1 dev backend + 1 dev frontend alocados             │
│  [ ] Ambiente staging funcional                            │
│  [ ] Fluxo de migração WhatsApp → plataforma definido      │
└────────────────────────────────────────────────────────────┘
```

### Critérios para concluir

```
┌────────────────────────────────────────────────────────────┐
│  CRITÉRIOS PARA CONCLUIR V2                                │
├────────────────────────────────────────────────────────────┤
│  [ ] Cadastro e login funcionando (email + Google)         │
│  [ ] Onboarding completado por ≥ 70% dos cadastros         │
│  [ ] ≥ 1.000 usuários cadastrados                          │
│  [ ] ≥ 50% membros WhatsApp migraram para plataforma       │
│  [ ] Dashboard exibe conteúdo do dia (mesmo que estático)  │
│  [ ] LGPD: exclusão de conta funcional                     │
│  [ ] Uptime ≥ 99% durante 30 dias                          │
│  [ ] Zero vulnerabilidades críticas (audit)                │
│  [ ] D7 retenção ≥ 20%                                     │
└────────────────────────────────────────────────────────────┘
```

### Métricas de sucesso V2

| Métrica | Meta |
|---|---|
| Cadastros totais | 1.000 |
| Taxa conclusão onboarding | ≥ 70% |
| D1 retenção | ≥ 30% |
| D7 retenção | ≥ 20% |
| Migração WhatsApp → plataforma | ≥ 50% |
| Tempo médio de cadastro | < 2 min |

---

## V3 — IA + Questões + Cronograma

> **Codinome:** Motor  
> **Status:** 🔵 Planejado  
> **Período:** Q1–Q2 2027

### Objetivo

Entregar o **core do produto**: banco de questões, cronograma adaptativo, simulados e primeira camada de IA.

### Benefícios

| Benefício | Impacto |
|---|---|
| Estudo mensurável | Aluno vê progresso real |
| Cronograma elimina "o que estudar?" | Reduz procrastinação |
| Simulados no formato OAB | Preparação realista |
| IA diagnostica lacunas | Estudo direcionado |
| Diferencial competitivo | Produto vs. grupo WhatsApp |

### Escopo detalhado

| Módulo | Features | Prioridade |
|---|---|---|
| **Questões** | Banco 2.000+ questões, filtros, comentários | P0 |
| **Simulados** | Prova completa 80Q, cronômetro, relatório | P0 |
| **Cronograma** | Geração automática baseada em data prova | P0 |
| **Progresso** | Histórico, acertos por disciplina, gráficos | P0 |
| **Biblioteca** | PDFs e resumos por disciplina | P1 |
| **IA — Tutor** | Explica questão errada | P1 |
| **IA — Diagnóstico** | Mapa de lacunas por disciplina | P1 |
| **IA — Recomendação** | Próximo tópico sugerido | P2 |

### Fluxo principal V3

```
Login → Dashboard → Missão do dia
                        │
            ┌───────────┼───────────┐
            ▼           ▼           ▼
       Questões    Cronograma   Simulado
            │           │           │
            └───────────┼───────────┘
                        ▼
                  Relatório + IA
                  (diagnóstico)
```

### Dependências

| Dependência | Origem | Bloqueante? |
|---|---|---|
| V2 concluída (≥ 1.000 users) | V2 | Sim |
| Banco de questões (≥ 2.000) | Conteúdo | Sim |
| Taxonomia OAB definida | Pedagogia | Sim |
| OpenAI API contratada | Infra | Sim (para IA) |
| Vector DB provisionado | Infra | Sim (para RAG) |

### Critérios para iniciar

```
┌────────────────────────────────────────────────────────────┐
│  CRITÉRIOS PARA INICIAR V3                                 │
├────────────────────────────────────────────────────────────┤
│  [ ] V2 critérios de conclusão atingidos (≥ 80%)           │
│  [ ] ≥ 2.000 questões produzidas e revisadas               │
│  [ ] Taxonomia de 18 disciplinas publicada                 │
│  [ ] ≥ 5 simulados completos prontos                     │
│  [ ] API de IA integrada em staging                        │
│  [ ] Designs de questão, simulado e cronograma aprovados   │
│  [ ] ≥ 2 devs + 1 revisor de conteúdo alocados             │
└────────────────────────────────────────────────────────────┘
```

### Critérios para concluir

```
┌────────────────────────────────────────────────────────────┐
│  CRITÉRIOS PARA CONCLUIR V3                                │
├────────────────────────────────────────────────────────────┤
│  [ ] ≥ 2.000 questões publicadas com comentários           │
│  [ ] Simulado completo funcional (80Q + relatório)         │
│  [ ] Cronograma gera plano personalizado                   │
│  [ ] IA tutor responde em < 5s com ≥ 85% satisfação        │
│  [ ] IA diagnóstico identifica top 3 lacunas               │
│  [ ] ≥ 500 MAU resolvendo questões                         │
│  [ ] Média ≥ 50 questões/usuário/semana                    │
│  [ ] NPS ≥ 45                                              │
│  [ ] Zero questões com gabarito errado (audit 100%)        │
└────────────────────────────────────────────────────────────┘
```

### Métricas de sucesso V3

| Métrica | Meta |
|---|---|
| MAU | 500 |
| Questões resolvidas/semana (média) | 50/usuário |
| Simulados completados/mês | 2/usuário |
| HSQ (North Star) | 3h/semana/usuário |
| Adoção IA (% MAU) | ≥ 30% |
| NPS | ≥ 45 |

---

## V4 — Gamificação

> **Codinome:** Impulso  
> **Status:** 🔵 Planejado  
> **Período:** Q3 2027

### Objetivo

Aumentar retenção e consistência através de **gamificação profissional** — XP, missões, ranking, conquistas e streak.

### Benefícios

| Benefício | Impacto |
|---|---|
| Retenção D30 ≥ 40% | Alunos permanecem estudando |
| Consistência diária (streak) | Hábito de estudo |
| Competição saudável (ligas) | Motivação extrínscica controlada |
| Missões guiam o estudo | Elimina paralisia de escolha |
| Dados de engajamento | Input para IA e produto |

### Escopo detalhado

| Módulo | Features | Prioridade |
|---|---|---|
| **XP** | Pontos por questão, simulado, streak | P0 |
| **Níveis** | 50 níveis com títulos profissionais | P0 |
| **Missões** | Diárias (3) + semanais (1) + especiais | P0 |
| **Streak** | Dias consecutivos + grace period | P0 |
| **Ligas** | Bronze → Prata → Ouro → Diamante → Elite | P1 |
| **Ranking** | Semanal por liga + geral | P1 |
| **Conquistas** | 30+ badges com critérios claros | P1 |
| **Temporadas** | Ciclos de 3 meses alinhados ao calendário OAB | P2 |
| **Eventos** | Desafios temáticos (ex: "Semana Penal") | P2 |
| **Anti-fraude** | Detecção de farming de XP | P0 |

### Dependências

| Dependência | Origem | Bloqueante? |
|---|---|---|
| V3 concluída (≥ 500 MAU) | V3 | Sim |
| Sistema de XP documentado | GAMIFICATION.md | Sim |
| Ações de estudo rastreáveis | V3 | Sim |
| Redis para ranking em tempo real | Infra | Sim |

### Critérios para iniciar

```
┌────────────────────────────────────────────────────────────┐
│  CRITÉRIOS PARA INICIAR V4                                 │
├────────────────────────────────────────────────────────────┤
│  [ ] V3 critérios de conclusão atingidos (≥ 80%)           │
│  [ ] GAMIFICATION.md aprovado pela equipe                  │
│  [ ] Designs de XP, missões, ranking e conquistas prontos  │
│  [ ] Sistema anti-fraude especificado                      │
│  [ ] ≥ 500 MAU ativos                                      │
│  [ ] D7 retenção baseline medida (V3)                      │
└────────────────────────────────────────────────────────────┘
```

### Critérios para concluir

```
┌────────────────────────────────────────────────────────────┐
│  CRITÉRIOS PARA CONCLUIR V4                                │
├────────────────────────────────────────────────────────────┤
│  [ ] XP atribuído corretamente para todas ações            │
│  [ ] Missões diárias geradas automaticamente               │
│  [ ] Streak funcional com grace period                     │
│  [ ] Ranking semanal atualizado em tempo real              │
│  [ ] ≥ 30 conquistas disponíveis                           │
│  [ ] Anti-fraude bloqueia farming (testado)                │
│  [ ] D30 retenção ≥ 40% (vs. baseline V3)                  │
│  [ ] ≥ 60% missões diárias completadas                     │
│  [ ] Streak médio ≥ 7 dias                                 │
│  [ ] Zero incidentes de ranking manipulado                 │
└────────────────────────────────────────────────────────────┘
```

### Métricas de sucesso V4

| Métrica | Meta | Baseline V3 |
|---|---|---|
| D30 retenção | ≥ 40% | ~25% |
| Streak médio | ≥ 7 dias | N/A |
| Missões completadas/semana | ≥ 60% | N/A |
| MAU | 800 | 500 |
| NPS | ≥ 50 | 45 |

---

## V5 — Assinaturas + Premium + Marketplace

> **Codinome:** Sustentação  
> **Status:** 🔵 Planejado  
> **Período:** Q4 2027

### Objetivo

Estabelecer **monetização sustentável** sem prejudicar a experiência gratuita — Premium, marketplace curado e parcerias.

### Benefícios

| Benefício | Impacto |
|---|---|
| Receita recorrente (MRR) | Sustentabilidade financeira |
| Premium financia conteúdo gratuito | Modelo freemium saudável |
| Marketplace expande oferta | Receita compartilhada |
| Parcerias B2B | Escala via faculdades |

### Princípio inegociável

```
┌────────────────────────────────────────────────────────────┐
│  FREE TIER SEMPRE INCLUI:                                  │
│  ✓ Questões (limite diário generoso)                       │
│  ✓ Cronograma básico                                       │
│  ✓ 1 simulado/mês                                          │
│  ✓ Comunidade                                              │
│  ✓ Missões e XP                                            │
│                                                            │
│  PREMIUM ADICIONA:                                         │
│  + Questões ilimitadas                                     │
│  + Simulados ilimitados                                    │
│  + IA avançada (tutor + diagnóstico + chat)                │
│  + Analytics detalhado                                     │
│  + Cronograma adaptativo IA                                │
│  + Conteúdo exclusivo                                      │
└────────────────────────────────────────────────────────────┘
```

### Escopo detalhado

| Módulo | Features | Prioridade |
|---|---|---|
| **Planos** | Free + Premium (mensal/anual) | P0 |
| **Pagamentos** | Stripe + Pix recorrente | P0 |
| **Premium — IA** | Tutor ilimitado, chat jurídico | P0 |
| **Premium — Simulados** | Ilimitados + adaptativos | P0 |
| **Premium — Analytics** | Dashboard avançado de progresso | P1 |
| **Marketplace** | Cursos/mentorias de parceiros curados | P2 |
| **Parcerias B2B** | Licenças para faculdades | P2 |
| **Programa de indicação** | Desconto por indicação | P2 |

### Pricing proposto (sujeito a validação)

| Plano | Preço | Inclui |
|---|---|---|
| **Free** | R$ 0 | Questões (30/dia), 1 simulado/mês, cronograma básico |
| **Premium Mensal** | R$ 49,90/mês | Tudo ilimitado + IA + analytics |
| **Premium Anual** | R$ 399,90/ano (~R$ 33/mês) | Idem mensal, 33% desconto |

### Dependências

| Dependência | Origem | Bloqueante? |
|---|---|---|
| V4 concluída (≥ 800 MAU, D30 ≥ 40%) | V4 | Sim |
| Stripe/conta de pagamentos | Financeiro | Sim |
| Valor Premium claro e testado | Product | Sim |
| Conteúdo exclusivo Premium pronto | Conteúdo | Sim |
| BUSINESS_MODEL.md aprovado | Product | Sim |

### Critérios para iniciar

```
┌────────────────────────────────────────────────────────────┐
│  CRITÉRIOS PARA INICIAR V5                                 │
├────────────────────────────────────────────────────────────┤
│  [ ] V4 critérios de conclusão atingidos (≥ 80%)           │
│  [ ] ≥ 800 MAU com D30 ≥ 40%                               │
│  [ ] Pesquisa de willingness-to-pay (≥ 100 respostas)      │
│  [ ] Conta Stripe/Pagamentos configurada                   │
│  [ ] Conteúdo exclusivo Premium pronto                     │
│  [ ] Pricing validado com ≥ 20 entrevistas                 │
│  [ ] NPS ≥ 50                                              │
└────────────────────────────────────────────────────────────┘
```

### Critérios para concluir

```
┌────────────────────────────────────────────────────────────┐
│  CRITÉRIOS PARA CONCLUIR V5                                │
├────────────────────────────────────────────────────────────┤
│  [ ] Pagamentos funcionando (Stripe + Pix)                 │
│  [ ] Upgrade Free → Premium em ≤ 3 cliques                 │
│  [ ] Conversão Free → Premium ≥ 5%                         │
│  [ ] MRR ≥ R$ 30.000                                       │
│  [ ] Churn mensal Premium < 8%                             │
│  [ ] LTV > 3× CAC                                          │
│  [ ] Zero reclamações de "paywall no essencial"            │
│  [ ] Marketplace com ≥ 3 parceiros (se lançado)            │
│  [ ] NPS Premium ≥ 60                                      │
└────────────────────────────────────────────────────────────┘
```

### Métricas de sucesso V5

| Métrica | Meta |
|---|---|
| MRR | R$ 30.000 |
| Conversão Free → Premium | ≥ 5% |
| Churn mensal Premium | < 8% |
| LTV | > R$ 450 |
| ARPU (Average Revenue Per User) | ≥ R$ 8 |
| NPS Premium | ≥ 60 |

---

## V6 — Aplicativo Mobile

> **Codinome:** Mobilidade  
> **Status:** 🔵 Planejado  
> **Período:** Q1–Q2 2028

### Objetivo

Levar a experiência de estudo para **mobile nativo** — app com notificações, modo offline e sincronização.

### Benefícios

| Benefício | Impacto |
|---|---|
| Estudo no celular (principal device) | Acessibilidade |
| Push notifications | Retorno diário |
| Modo offline | Estudo em transporte/sem internet |
| Sincronização cross-device | Continuidade web ↔ app |
| Presença nas app stores | Canal de aquisição orgânico |

### Escopo detalhado

| Módulo | Features | Prioridade |
|---|---|---|
| **App** | iOS + Android (React Native ou Flutter) | P0 |
| **Auth** | Login compartilhado com web | P0 |
| **Questões** | Resolver offline + sync | P0 |
| **Push** | Missão do dia, streak, simulado | P0 |
| **Offline** | Download de PDFs e questões | P1 |
| **Sync** | Progresso, XP, streak cross-device | P0 |
| **Widget** | Streak e missão do dia na home screen | P2 |
| **Deep links** | Meta Ads → app direto | P1 |

### Dependências

| Dependência | Origem | Bloqueante? |
|---|---|---|
| V5 concluída (MRR ≥ R$ 30k) | V5 | Sim |
| API estável e documentada | V3–V5 | Sim |
| Contas Apple Developer + Google Play | Infra | Sim |
| Designs mobile aprovados | Design | Sim |

### Critérios para iniciar

```
┌────────────────────────────────────────────────────────────┐
│  CRITÉRIOS PARA INICIAR V6                                 │
├────────────────────────────────────────────────────────────┤
│  [ ] V5 critérios de conclusão atingidos (≥ 80%)           │
│  [ ] MRR ≥ R$ 30.000 (sustenta custo de dev mobile)        │
│  [ ] ≥ 1.500 MAU                                           │
│  [ ] Stack mobile definida (RN vs Flutter)                 │
│  [ ] ≥ 60% usuários acessam via mobile web (dado)          │
│  [ ] API REST documentada (OpenAPI)                        │
│  [ ] Contas app stores criadas                             │
└────────────────────────────────────────────────────────────┘
```

### Critérios para concluir

```
┌────────────────────────────────────────────────────────────┐
│  CRITÉRIOS PARA CONCLUIR V6                                │
├────────────────────────────────────────────────────────────┤
│  [ ] App publicado na App Store e Google Play              │
│  [ ] Login, questões e sync funcionando                    │
│  [ ] Push notifications entregues (≥ 95% delivery)         │
│  [ ] Modo offline funcional (≥ 100 questões cache)         │
│  [ ] Rating ≥ 4.5 nas stores                               │
│  [ ] ≥ 30% MAU usando app (vs. web)                        │
│  [ ] Crash rate < 1%                                       │
│  [ ] Tempo de abertura < 2s                                │
└────────────────────────────────────────────────────────────┘
```

### Métricas de sucesso V6

| Métrica | Meta |
|---|---|
| Downloads | 5.000 |
| MAU app | ≥ 30% do total |
| Rating App Store / Google Play | ≥ 4.5 |
| Retenção D7 app | ≥ 35% |
| Push opt-in rate | ≥ 60% |

---

## 10. Dependências entre versões

```
V1 ──────────────────────────────────────────────────>
     │
     └──> V2 ────────────────────────────────────────>
               │
               └──> V3 ──────────────────────────────>
                         │
                         └──> V4 ────────────────────>
                                   │
                                   └──> V5 ──────────>
                                             │
                                             └──> V6
```

### Matriz de dependências

| Versão | Depende de | Habilita |
|---|---|---|
| V1 | — | V2 (leads, validação) |
| V2 | V1 (≥ 300 leads) | V3 (users, auth) |
| V3 | V2 (≥ 1.000 users) | V4 (ações rastreáveis) |
| V4 | V3 (≥ 500 MAU) | V5 (retenção, valor) |
| V5 | V4 (D30 ≥ 40%) | V6 (receita) |
| V6 | V5 (MRR ≥ R$ 30k) | Escala |

---

## 11. Riscos de roadmap

| Risco | Versão afetada | Probabilidade | Mitigação |
|---|---|---|---|
| V1 não atinge 300 leads | V2 atrasa | Média | Aumentar budget ads, SEO, indicação |
| Conteúdo insuficiente para V3 | V3 atrasa | Alta | Pipeline de produção desde V2 |
| Time pequeno para V3+V4 | Ambas atrasam | Alta | Contratar ou reduzir escopo V4 |
| IA cara demais para Free | V5 pricing | Média | Limites claros Free vs Premium |
| App stores rejeitam app | V6 atrasa | Baixa | Seguir guidelines desde design |
| Mudança edital OAB | V3 conteúdo | Baixa | Taxonomia flexível |

---

## Histórico de revisões

| Versão | Data | Alteração |
|---|---|---|
| 1.0 | Jul/2026 | Roadmap inicial V1–V6 |

---

*Documento confidencial — Missão OAB.*
