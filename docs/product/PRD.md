# PRD — Product Requirements Document

> **Produto:** Missão OAB  
> **Versão do documento:** 1.0  
> **Status:** Documento interno — fase de crescimento  
> **Última atualização:** Julho de 2026  
> **Responsável:** Product  
> **Classificação:** Confidencial — uso interno

---

## Índice

1. [Missão do produto](#1-missão-do-produto)
2. [Problema que resolve](#2-problema-que-resolve)
3. [Visão](#3-visão)
4. [Objetivos](#4-objetivos)
5. [Público-alvo](#5-público-alvo)
6. [Personas](#6-personas)
7. [MVP](#7-mvp)
8. [Funcionalidades atuais](#8-funcionalidades-atuais)
9. [Funcionalidades futuras](#9-funcionalidades-futuras)
10. [Requisitos funcionais](#10-requisitos-funcionais)
11. [Requisitos não funcionais](#11-requisitos-não-funcionais)
12. [Arquitetura de alto nível](#12-arquitetura-de-alto-nível)
13. [Estratégia de IA](#13-estratégia-de-ia)
14. [Estratégia de conhecimento](#14-estratégia-de-conhecimento)
15. [Métricas de sucesso](#15-métricas-de-sucesso)
16. [Critérios de qualidade](#16-critérios-de-qualidade)
17. [Riscos](#17-riscos)
18. [Fora do escopo](#18-fora-do-escopo)
19. [Glossário](#19-glossário)

---

## 1. Missão do produto

**A Missão OAB existe para transformar a preparação para o Exame de Ordem em uma jornada organizada, mensurável e sustentável — até a aprovação.**

Não somos um repositório de PDFs nem um grupo de mensagens dispersas. Somos uma plataforma de preparação que combina:

- **Organização** — o aluno sempre sabe o que estudar hoje
- **Disciplina** — rotinas e metas que respeitam a realidade de quem trabalha e estuda
- **Tecnologia** — ferramentas inteligentes que aceleram aprendizado e revisão
- **Comunidade** — apoio entre pares sem ruído ou distração

### Filtro de decisão de produto

Toda funcionalidade deve responder **sim** a pelo menos uma destas perguntas:

| # | Pergunta | Exemplo válido | Exemplo inválido |
|---|---|---|---|
| 1 | Ajuda a **captar** alunos? | Landing otimizada para conversão | Widget de clima na home |
| 2 | Ajuda o aluno a **estudar melhor**? | Banco de questões comentadas | Feed social genérico |
| 3 | Ajuda o aluno a **permanecer estudando**? | Streak + missões semanais | Minigame sem relação com OAB |

Se a resposta for **não** para todas, a funcionalidade **não entra no roadmap**.

---

## 2. Problema que resolve

### 2.1 Contexto do mercado (sem citar players)

O Exame de Ordem (OAB) é um dos maiores desafios acadêmicos-profissionais do Brasil. Milhares de bacharéis e estudantes de Direito se preparam anualmente, enfrentando:

- Volume massivo de conteúdo (18 disciplinas na 1ª fase)
- Edital amplo e atualizações legislativas frequentes
- Pressão emocional e financeira
- Concorrência por tempo (trabalho, estágio, família)

### 2.2 Dores mapeadas

```
┌─────────────────────────────────────────────────────────────────┐
│                    MAPA DE DORES DO ALUNO OAB                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  DESORGANIZAÇÃO          "Não sei por onde começar"             │
│       │                                                         │
│       ▼                                                         │
│  PROCRASTINAÇÃO          "Deixo para amanhã sempre"             │
│       │                                                         │
│       ▼                                                         │
│  ISOLAMENTO              "Estudo sozinho, sem referência"       │
│       │                                                         │
│       ▼                                                         │
│  FALTA DE FEEDBACK       "Não sei se estou evoluindo"           │
│       │                                                         │
│       ▼                                                         │
│  DESMOTIVAÇÃO            "Já tentei e desisti"                  │
│       │                                                         │
│       ▼                                                         │
│  REPROVAÇÃO / ABANDONO   Ciclo se repete                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 2.3 Problema central (Problem Statement)

> **Estudantes preparando-se para a OAB não conseguem manter consistência, organização e mensuração de progresso ao longo de meses de estudo — o que resulta em abandono, estudo ineficiente e reprovação.**

### 2.4 Como resolvemos

| Dor | Solução Missão OAB |
|---|---|
| Desorganização | Cronograma adaptativo + trilha de estudos por fase |
| Procrastinação | Missões diárias, streak e lembretes inteligentes |
| Isolamento | Comunidade curada (WhatsApp → plataforma) |
| Falta de feedback | Simulados, analytics de desempenho, IA de diagnóstico |
| Desmotivação | Gamificação profissional + marcos de progresso reais |
| Conteúdo disperso | Base de conhecimento unificada, versionada e indexada |

---

## 3. Visão

### 3.1 Visão de produto (3–5 anos)

**Ser a plataforma de referência em preparação inteligente para a OAB no Brasil — reconhecida pela taxa de aprovação dos alunos, pela qualidade do conteúdo e pela experiência de estudo.**

### 3.2 Visão de experiência

O aluno abre a Missão OAB e encontra:

```
┌──────────────────────────────────────────────────┐
│  Bom dia, Ana.                                   │
│  ─────────────────────────────────────────────   │
│  📋 Missão de hoje: 12 questões de Penal         │
│  📅 Dia 47 do cronograma · Faltam 89 dias        │
│  🔥 Streak: 14 dias · Liga: Prata                │
│  📊 Seu ponto fraco: Processo Civil (62%)        │
│  ─────────────────────────────────────────────   │
│  [ Iniciar estudo ]                              │
└──────────────────────────────────────────────────┘
```

### 3.3 Princípios inegociáveis

| Princípio | Significado operacional |
|---|---|
| Aprovação acima de tudo | Feature que não contribui para aprovação → descartada |
| Qualidade > quantidade | 100 questões excelentes > 10.000 mediocres |
| Experiência > monetização | Paywall nunca bloqueia o essencial do estudo |
| Simplicidade | Menos cliques, menos telas, mais estudo |
| Evolução contínua | Produto melhora a cada ciclo de exame |
| Disciplina, não diversão | Gamificação como ferramenta, não entretenimento |

---

## 4. Objetivos

### 4.1 Objetivos estratégicos (2026–2027)

| ID | Objetivo | Horizonte | Indicador principal |
|---|---|---|---|
| O1 | Validar canal de aquisição (Meta Ads → Landing → WhatsApp) | Q3 2026 | CAC < R$ 15 |
| O2 | Lançar área do aluno com cadastro e perfil | Q4 2026 | 1.000 cadastros ativos |
| O3 | Entregar motor de questões + cronograma | Q1 2027 | 500 MAU estudando |
| O4 | Implementar camada de IA (diagnóstico + recomendação) | Q2 2027 | NPS ≥ 50 |
| O5 | Ativar gamificação e retenção | Q3 2027 | Retenção D30 ≥ 40% |
| O6 | Lançar plano Premium sustentável | Q4 2027 | MRR ≥ R$ 30.000 |

### 4.2 Objetivos por trimestre (detalhamento Q3–Q4 2026)

| Trimestre | Foco | Entregáveis |
|---|---|---|
| Q3 2026 | Aquisição | Landing otimizada, tracking Meta Pixel, link WhatsApp, primeiros 500 leads |
| Q4 2026 | Fundação | Auth, perfil, dashboard básico, migração parcial do WhatsApp |

### 4.3 OKRs exemplo — Q3 2026

**Objetivo:** Estabelecer funil de aquisição mensurável

| Key Result | Meta | Atual |
|---|---|---|
| KR1 — Visitantes únicos/mês na landing | 5.000 | — |
| KR2 — Taxa de clique no CTA WhatsApp | ≥ 8% | — |
| KR3 — Entradas no grupo WhatsApp via landing | 400 | — |
| KR4 — Tempo médio na página | ≥ 45s | — |

---

## 5. Público-alvo

### 5.1 Segmentação primária

| Segmento | Descrição | % estimado | Prioridade |
|---|---|---|---|
| **Recém-formado** | Bacharel há ≤ 2 anos, 1ª ou 2ª tentativa | 35% | Alta |
| **Estudante finalista** | 8º/9º período, antecipando OAB | 25% | Alta |
| **Retorno aos estudos** | Já tentou OAB, parou, quer retomar | 20% | Alta |
| **Concurseiro híbrido** | Prepara OAB + concursos jurídicos | 10% | Média |
| **Profissional em transição** | Advogado de outra área retomando | 10% | Média |

### 5.2 Critérios de qualificação (ICP — Ideal Customer Profile)

```
┌─────────────────────────────────────────┐
│         PERFIL IDEAL (ICP)              │
├─────────────────────────────────────────┤
│ ✓ Idade: 22–35 anos                     │
│ ✓ Formação: Direito (cursando ou formado)│
│ ✓ Intenção: prestar OAB em ≤ 12 meses   │
│ ✓ Comportamento digital: alto           │
│ ✓ Dor principal: falta de organização   │
│ ✓ Disposição: estudar ≥ 1h/dia          │
│ ✗ Não busca: "atalhos" ou "garantia"    │
└─────────────────────────────────────────┘
```

### 5.3 Anti-persona (quem NÃO priorizamos)

| Anti-persona | Motivo |
|---|---|
| Quem busca "passar sem estudar" | Incompatível com valores do produto |
| Quem quer apenas PDFs piratas | Não gera retenção nem receita saudável |
| Quem não pretende prestar OAB em 18 meses | Ciclo longo demais para engajamento |

---

## 6. Personas

### 6.1 Persona 1 — Ana, a Organizada Iniciante

| Atributo | Detalhe |
|---|---|
| **Idade** | 24 anos |
| **Contexto** | Formou há 6 meses, trabalha em escritório pequeno |
| **Objetivo** | Passar na 1ª fase na próxima edição |
| **Dor principal** | "Tenho material, mas não sei montar cronograma" |
| **Comportamento** | Estuda 1,5h/dia após trabalho; usa celular |
| **Canais** | Instagram, WhatsApp, YouTube |
| **Frase típica** | "Preciso de alguém que me diga o que fazer hoje." |
| **Como a Missão OAB ajuda** | Cronograma + missões diárias + comunidade |

**Jornada resumida:**
```
Instagram Ad → Landing → WhatsApp → Cadastro → 1º simulado → Premium (mês 3)
```

---

### 6.2 Persona 2 — Rafael, o Retorno Determinado

| Atributo | Detalhe |
|---|---|
| **Idade** | 29 anos |
| **Contexto** | 3ª tentativa; reprovou por 2 pontos na 1ª fase |
| **Objetivo** | Identificar lacunas e corrigir estratégia |
| **Dor principal** | "Estudo muito, mas não melhoro onde preciso" |
| **Comportamento** | 3h/dia; quer dados, não motivação vazia |
| **Canais** | Google, grupos de estudo, LinkedIn |
| **Frase típica** | "Quero saber exatamente onde estou errando." |
| **Como a Missão OAB ajuda** | IA de diagnóstico + analytics + simulados |

---

### 6.3 Persona 3 — Camila, a Estudante Conciliadora

| Atributo | Detalhe |
|---|---|
| **Idade** | 26 anos |
| **Contexto** | 9º período + estágio + filho pequeno |
| **Objetivo** | Aprovar sem abandonar estágio |
| **Dor principal** | "Não tenho tempo; preciso de estudo eficiente" |
| **Comportamento** | 45min–1h/dia; estuda no intervalo |
| **Canais** | WhatsApp, app mobile (futuro) |
| **Frase típica** | "Preciso do máximo de resultado no mínimo de tempo." |
| **Como a Missão OAB ajuda** | Micro-missões + resumos + modo offline (V6) |

---

### 6.4 Persona 4 — Lucas, o Competitivo

| Atributo | Detalhe |
|---|---|
| **Idade** | 23 anos |
| **Contexto** | Formando; estuda em grupo na faculdade |
| **Objetivo** | Ser top 1 no ranking da turma |
| **Dor principal** | "Preciso de estímulo para não relaxar" |
| **Comportamento** | 2h+/dia; gamificação funciona nele |
| **Frase típica** | "Quero ver meu progresso comparado com outros." |
| **Como a Missão OAB ajuda** | Ranking, ligas, conquistas, eventos |

---

## 7. MVP

### 7.1 Definição de MVP

> **MVP = Landing Page de alta conversão + entrada no grupo WhatsApp + operação manual de conteúdo.**

O MVP **não** inclui plataforma logada. Valida:

1. Demanda real (pessoas querem entrar?)
2. Canal de aquisição (Meta Ads funciona?)
3. Proposta de valor (mensagem ressoa?)
4. Operação (conseguimos entregar valor no WhatsApp?)

### 7.2 Escopo do MVP (V1)

| Incluído | Excluído |
|---|---|
| Landing responsiva (HTML/CSS/JS) | Cadastro na plataforma |
| SEO básico + meta tags | Banco de questões |
| CTAs para WhatsApp | IA |
| Seções: Hero, Benefícios, Como Funciona, FAQ, CTA | Pagamentos |
| Design System documentado | App mobile |
| Política de privacidade | Gamificação |

### 7.3 Hipóteses a validar no MVP

| # | Hipótese | Como medir | Critério de sucesso |
|---|---|---|---|
| H1 | Estudantes OAB clicam em anúncios sobre "organização" | CTR Meta Ads | CTR ≥ 1,5% |
| H2 | Landing converte visitantes em leads WhatsApp | Taxa CTA | ≥ 8% |
| H3 | Grupo WhatsApp retém membros | Retenção 7 dias | ≥ 60% permanecem |
| H4 | Conteúdo gratuito gera confiança para Premium futuro | Pesquisa NPS grupo | NPS ≥ 40 |

### 7.4 Critérios de saída do MVP (Go/No-Go para V2)

```
┌────────────────────────────────────────────────────────────┐
│              CHECKLIST GO/NO-GO — MVP → V2                 │
├────────────────────────────────────────────────────────────┤
│ [ ] ≥ 300 membros no grupo WhatsApp via landing            │
│ [ ] CAC comprovado < R$ 20                                 │
│ [ ] Taxa de conversão landing → WhatsApp ≥ 6%              │
│ [ ] ≥ 3 ciclos de conteúdo entregues no grupo              │
│ [ ] Feedback qualitativo positivo (≥ 20 respostas)         │
│ [ ] Infraestrutura técnica definida para V2                │
│ [ ] Equipe mínima operacional (conteúdo + produto + dev)   │
└────────────────────────────────────────────────────────────┘
```

---

## 8. Funcionalidades atuais

### 8.1 Estado atual — V1 (Julho 2026)

| Módulo | Status | Descrição |
|---|---|---|
| Landing Page | ✅ Ativo | Página estática em `index.html` |
| Design System | ✅ Documentado | `DESIGN_GUIDE.md`, `UI_KIT.md`, `css/variables.css` |
| Hero + CTA | ✅ Ativo | "Sua aprovação começa hoje" |
| Seção Benefícios | ✅ Ativo | 6 cards: Cronograma, PDFs, Questões, Simulados, Resumos, Atualizações |
| Como Funciona | ✅ Ativo | Timeline 4 passos |
| FAQ | ✅ Ativo | 4 perguntas |
| CTA Final | ✅ Ativo | Link WhatsApp (placeholder `#`) |
| Footer | ✅ Ativo | Contato, Instagram, Política de Privacidade |
| WhatsApp (grupo) | 🟡 Operacional manual | Conteúdo e moderação fora da plataforma |
| Analytics | 🔴 Pendente | Meta Pixel, eventos de conversão |
| Backend | 🔴 Inexistente | Sem API, banco ou auth |

### 8.2 Fluxo atual do usuário

```
Meta Ads / Orgânico / Indicação
         │
         ▼
   ┌─────────────┐
   │  Landing    │  missaooab.com.br
   │  Page       │
   └──────┬──────┘
          │ CTA "Quero Entrar na Missão"
          ▼
   ┌─────────────┐
   │  WhatsApp   │  Grupo de estudos
   │  Grupo      │  (conteúdo manual)
   └─────────────┘
```

### 8.3 Limitações conhecidas (V1)

| Limitação | Impacto | Resolução planejada |
|---|---|---|
| Sem cadastro estruturado | Não sabemos quem entrou | V2 — Auth |
| Sem tracking de conversão | CAC desconhecido | V1.1 — Meta Pixel |
| Conteúdo no WhatsApp | Não escalável | V2/V3 — Plataforma |
| CTA com `href="#"` | Link WhatsApp não configurado | V1.1 — URL real |
| Sem A/B test | Otimização lenta | V1.2 — Testes de headline |

---

## 9. Funcionalidades futuras

### 9.1 Mapa de funcionalidades por versão

```
V1 ─── Landing + WhatsApp
 │
V2 ─── Cadastro + Área do Aluno + Perfil
 │
V3 ─── IA + Questões + Cronograma
 │
V4 ─── Gamificação (XP, Missões, Ranking, Conquistas)
 │
V5 ─── Assinaturas Premium + Marketplace + Parcerias
 │
V6 ─── App Mobile + Notificações + Offline + Sync
```

### 9.2 Detalhamento por versão

#### V2 — Fundação da plataforma

| Feature | Descrição | Prioridade |
|---|---|---|
| Cadastro (email + Google) | Conta única Missão OAB | P0 |
| Perfil do aluno | Nome, foto, fase OAB, meta de prova | P0 |
| Dashboard inicial | "O que fazer hoje" | P0 |
| Migração WhatsApp → plataforma | Onboarding para membros existentes | P1 |

#### V3 — Motor de estudo

| Feature | Descrição | Prioridade |
|---|---|---|
| Banco de questões | Filtro por disciplina, banca, dificuldade | P0 |
| Cronograma adaptativo | Plano semanal/mensal personalizado | P0 |
| Simulados | Provas completas com gabarito | P0 |
| IA — diagnóstico | Identifica pontos fracos por disciplina | P1 |
| IA — tutor | Explica questões erradas | P1 |
| Biblioteca de PDFs | Organizada por disciplina, versionada | P1 |

#### V4 — Engajamento e retenção

| Feature | Descrição | Prioridade |
|---|---|---|
| Sistema de XP | Pontos por estudo real | P0 |
| Níveis e ligas | Progressão profissional | P0 |
| Missões diárias/semanais | Tarefas acionáveis | P0 |
| Ranking | Por liga, amigos, geral | P1 |
| Conquistas e badges | Marcos de progresso | P1 |
| Streak | Dias consecutivos de estudo | P0 |
| Temporadas | Ciclos alinhados ao calendário OAB | P2 |

#### V5 — Monetização sustentável

| Feature | Descrição | Prioridade |
|---|---|---|
| Plano Free | Conteúdo essencial sempre gratuito | P0 |
| Plano Premium | IA avançada, simulados ilimitados, analytics | P0 |
| Marketplace | Cursos/mentorias de parceiros curados | P2 |
| Parcerias B2B | Faculdades, OABs estaduais | P2 |

#### V6 — Mobilidade

| Feature | Descrição | Prioridade |
|---|---|---|
| App iOS/Android | React Native ou Flutter | P0 |
| Push notifications | Lembretes de missão, streak | P0 |
| Modo offline | Questões e PDFs baixados | P1 |
| Sincronização | Progresso cross-device | P0 |

---

## 10. Requisitos funcionais

### 10.1 V1 — Landing Page

| ID | Requisito | Prioridade | Status |
|---|---|---|---|
| RF-V1-001 | Exibir hero com headline, subtítulo e CTA primário | P0 | ✅ |
| RF-V1-002 | Listar 6 benefícios em grid responsivo | P0 | ✅ |
| RF-V1-003 | Exibir timeline "Como Funciona" (4 passos) | P0 | ✅ |
| RF-V1-004 | FAQ com accordion nativo (`<details>`) | P0 | ✅ |
| RF-V1-005 | CTA final com link para WhatsApp | P0 | 🟡 |
| RF-V1-006 | Header fixo com navegação âncora | P0 | ✅ |
| RF-V1-007 | Footer com links legais e contato | P0 | ✅ |
| RF-V1-008 | Responsividade mobile-first (320px+) | P0 | ✅ |
| RF-V1-009 | Meta tags SEO (title, description, OG) | P1 | 🟡 |
| RF-V1-010 | Meta Pixel com evento Lead no CTA | P1 | 🔴 |

### 10.2 V2 — Cadastro e área do aluno

| ID | Requisito | Prioridade |
|---|---|---|
| RF-V2-001 | Cadastro com email + senha (validação forte) | P0 |
| RF-V2-002 | Login social (Google) | P1 |
| RF-V2-003 | Recuperação de senha por email | P0 |
| RF-V2-004 | Perfil editável (nome, foto, fase, data prova) | P0 |
| RF-V2-005 | Dashboard com resumo do dia | P0 |
| RF-V2-006 | Onboarding em ≤ 3 telas | P0 |
| RF-V2-007 | LGPD — consentimento e exclusão de conta | P0 |

### 10.3 V3 — Estudo e IA

| ID | Requisito | Prioridade |
|---|---|---|
| RF-V3-001 | Resolver questão com feedback imediato | P0 |
| RF-V3-002 | Filtrar questões por disciplina/assunto/ano | P0 |
| RF-V3-003 | Gerar cronograma baseado em data da prova | P0 |
| RF-V3-004 | Simulado cronometrado com relatório | P0 |
| RF-V3-005 | IA explica resposta errada em linguagem clara | P1 |
| RF-V3-006 | IA recomenda próximo tópico baseado em desempenho | P1 |
| RF-V3-007 | Histórico de questões resolvidas | P0 |

### 10.4 V4 — Gamificação

| ID | Requisito | Prioridade |
|---|---|---|
| RF-V4-001 | Atribuir XP por ações de estudo verificáveis | P0 |
| RF-V4-002 | Exibir nível e progresso para próximo nível | P0 |
| RF-V4-003 | Missões diárias geradas automaticamente | P0 |
| RF-V4-004 | Streak com grace period de 1 dia/semana | P0 |
| RF-V4-005 | Ranking semanal por liga | P1 |
| RF-V4-006 | Conquistas desbloqueáveis com critérios claros | P1 |
| RF-V4-007 | Anti-fraude: XP só com interação real | P0 |

---

## 11. Requisitos não funcionais

### 11.1 Performance

| ID | Requisito | Meta | Versão |
|---|---|---|---|
| RNF-001 | LCP (Largest Contentful Paint) | < 2,5s | V1+ |
| RNF-002 | FID (First Input Delay) | < 100ms | V1+ |
| RNF-003 | CLS (Cumulative Layout Shift) | < 0,1 | V1+ |
| RNF-004 | Time to Interactive (landing) | < 3s em 4G | V1 |
| RNF-005 | API response time (p95) | < 300ms | V2+ |
| RNF-006 | Questão carrega em | < 1s | V3 |

### 11.2 Segurança

| ID | Requisito | Versão |
|---|---|---|
| RNF-010 | HTTPS obrigatório | V1+ |
| RNF-011 | Senhas com bcrypt/argon2 | V2+ |
| RNF-012 | JWT com refresh token rotation | V2+ |
| RNF-013 | Rate limiting em APIs | V2+ |
| RNF-014 | LGPD — DPO designado, política publicada | V1+ |
| RNF-015 | Dados sensíveis criptografados at rest | V2+ |
| RNF-016 | OWASP Top 10 mitigado | V2+ |

### 11.3 Disponibilidade e escalabilidade

| ID | Requisito | Meta |
|---|---|---|
| RNF-020 | Uptime plataforma | 99,5% |
| RNF-021 | Suportar usuários simultâneos | 10.000 (V5) |
| RNF-022 | Backup diário automatizado | V2+ |
| RNF-023 | Disaster recovery | RTO < 4h, RPO < 1h |

### 11.4 Acessibilidade

| ID | Requisito | Padrão |
|---|---|---|
| RNF-030 | WCAG 2.1 AA | V1+ |
| RNF-031 | Navegação por teclado completa | V1+ |
| RNF-032 | Contraste mínimo 4.5:1 | V1+ |
| RNF-033 | Screen reader compatível | V2+ |
| RNF-034 | Textos alternativos em imagens | V1+ |

### 11.5 Observabilidade

| ID | Requisito | Versão |
|---|---|---|
| RNF-040 | Logging estruturado (JSON) | V2+ |
| RNF-041 | Error tracking (Sentry ou similar) | V2+ |
| RNF-042 | Analytics de produto (Mixpanel/Amplitude) | V2+ |
| RNF-043 | Dashboards de saúde (Grafana/Datadog) | V3+ |

---

## 12. Arquitetura de alto nível

### 12.1 Visão evolutiva

```
FASE ATUAL (V1)                    FASE ALVO (V3+)
─────────────────                  ─────────────────

┌──────────────┐                   ┌──────────────────────────────────┐
│   CDN/Host   │                   │           CDN (Cloudflare)        │
│  (estático)  │                   └───────────────┬──────────────────┘
└──────┬───────┘                                   │
       │                                           ▼
       ▼                               ┌────────────────────────┐
┌──────────────┐                        │   Frontend (Next.js)   │
│ Landing HTML │                        │   Web + PWA            │
└──────┬───────┘                        └───────────┬────────────┘
       │                                            │
       ▼                                            ▼
┌──────────────┐                        ┌────────────────────────┐
│  WhatsApp    │                        │   API Gateway          │
│  (manual)    │                        │   (Node.js / NestJS)   │
└──────────────┘                        └───────────┬────────────┘
                                                     │
                              ┌──────────────────────┼──────────────────────┐
                              │                      │                      │
                              ▼                      ▼                      ▼
                    ┌─────────────┐        ┌─────────────┐        ┌─────────────┐
                    │  Auth       │        │  Study      │        │  AI         │
                    │  Service    │        │  Engine     │        │  Service    │
                    └──────┬──────┘        └──────┬──────┘        └──────┬──────┘
                           │                      │                      │
                           ▼                      ▼                      ▼
                    ┌─────────────┐        ┌─────────────┐        ┌─────────────┐
                    │ PostgreSQL  │        │ PostgreSQL  │        │ Vector DB   │
                    │ (users)     │        │ (questions) │        │ (RAG)       │
                    └─────────────┘        └─────────────┘        └─────────────┘
```

### 12.2 Stack tecnológica recomendada

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Frontend Web | Next.js 15 + TypeScript | SSR, SEO, ecossistema React |
| Mobile (V6) | React Native ou Flutter | Code sharing, time pequeno |
| Backend API | NestJS (Node.js) | Modular, TypeScript end-to-end |
| Banco relacional | PostgreSQL | Questões, usuários, progresso |
| Cache | Redis | Sessions, ranking, streak |
| Busca | Elasticsearch ou Meilisearch | Questões, conteúdo |
| Vector DB | Pinecone ou pgvector | RAG para IA |
| IA/LLM | OpenAI API + fine-tuning | Tutor, diagnóstico |
| Storage | S3-compatible (R2/S3) | PDFs, imagens |
| CDN | Cloudflare | Performance global |
| Auth | NextAuth / Clerk | Rápido para V2 |
| Pagamentos | Stripe + Pix (V5) | Assinaturas recorrentes |
| Analytics | Mixpanel + Meta Pixel | Produto + aquisição |
| Infra | Vercel (front) + Railway/Fly (API) | Custo baixo inicial |

### 12.3 Modelo de dados (conceitual — V3)

```
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│    User     │──────<│  Progress   │>──────│  Question   │
├─────────────┤       ├─────────────┤       ├─────────────┤
│ id          │       │ user_id     │       │ id          │
│ email       │       │ question_id │       │ discipline  │
│ name        │       │ answer      │       │ statement   │
│ phase       │       │ is_correct  │       │ options     │
│ exam_date   │       │ answered_at │       │ correct     │
│ xp          │       └─────────────┘       │ explanation │
│ level       │                             └─────────────┘
│ streak      │
└──────┬──────┘       ┌─────────────┐       ┌─────────────┐
       │              │  Mission    │       │ Achievement │
       │              ├─────────────┤       ├─────────────┤
       └─────────────<│ user_id     │       │ id          │
                      │ type        │       │ name        │
                      │ status      │       │ criteria    │
                      │ xp_reward   │       │ badge_icon  │
                      └─────────────┘       └─────────────┘
```

### 12.4 Integrações externas

| Integração | Uso | Versão |
|---|---|---|
| Meta Ads / Pixel | Aquisição e remarketing | V1 |
| WhatsApp Business API | Notificações, suporte | V2 |
| Google OAuth | Login social | V2 |
| SendGrid / Resend | Emails transacionais | V2 |
| OpenAI API | Tutor IA, diagnóstico | V3 |
| Stripe | Assinaturas Premium | V5 |
| Firebase Cloud Messaging | Push mobile | V6 |

---

## 13. Estratégia de IA

### 13.1 Princípios de IA na Missão OAB

| Princípio | Descrição |
|---|---|
| **IA a serviço da aprovação** | Toda feature de IA deve melhorar estudo ou retenção |
| **Transparência** | Aluno sabe quando interage com IA |
| **Precisão jurídica** | Respostas revisadas; IA não inventa jurisprudência |
| **Human-in-the-loop** | Conteúdo crítico validado por especialista |
| **Privacidade** | Dados de estudo não treinam modelos públicos |

### 13.2 Casos de uso por fase

```
V3 — IA Fundacional
├── Tutor de questões ("Por que errei?")
├── Diagnóstico de lacunas por disciplina
└── Recomendação de próximo tópico

V4 — IA + Gamificação
├── Missões personalizadas por perfil
└── Previsão de prontidão para prova

V5 — IA Avançada (Premium)
├── Simulado adaptativo (dificuldade dinâmica)
├── Resumos personalizados por ponto fraco
├── Chat jurídico contextualizado (RAG)
└── Planejamento de revisão espaçada
```

### 13.3 Arquitetura RAG (Retrieval-Augmented Generation)

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Pergunta    │────>│  Embedding   │────>│  Vector DB   │
│  do aluno    │     │  (query)     │     │  (busca)     │
└──────────────┘     └──────────────┘     └──────┬───────┘
                                                  │
                                                  ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Resposta    │<────│  LLM         │<────│  Contexto    │
│  ao aluno    │     │  (GPT-4o)    │     │  recuperado  │
└──────────────┘     └──────────────┘     └──────────────┘
                            │
                            ▼
                     ┌──────────────┐
                     │  Validação   │
                     │  (guardrails)│
                     └──────────────┘
```

### 13.4 Fontes de conhecimento para RAG

| Fonte | Tipo | Atualização |
|---|---|---|
| Questões comentadas (próprias) | Estruturado | Contínua |
| Resumos por disciplina | Documento | Por edital |
| Legislação consolidada | Referência | Quando alterada |
| Jurisprudência STF/STJ (selecionada) | Referência | Curada |
| Simulados e gabaritos | Estruturado | Por edição OAB |

### 13.5 Guardrails de IA

| Regra | Implementação |
|---|---|
| Não inventar artigos de lei | RAG obrigatório; citation required |
| Sinalizar incerteza | "Consulte a legislação atualizada" quando aplicável |
| Limite de escopo | IA responde apenas sobre OAB/Direito |
| Rate limit | Free: 10 interações/dia; Premium: ilimitado |
| Feedback loop | Aluno pode reportar resposta incorreta |

### 13.6 Métricas de IA

| Métrica | Meta |
|---|---|
| Taxa de resposta útil (thumbs up) | ≥ 85% |
| Precisão factual (amostra auditada) | ≥ 95% |
| Tempo médio de resposta | < 5s |
| Adoção (% MAU que usa IA/semana) | ≥ 40% (V3) |

---

## 14. Estratégia de conhecimento

### 14.1 Visão

A Missão OAB deve possuir a **base de conhecimento OAB mais organizada e atualizada do mercado** — não pelo volume, mas pela **curadoria, estrutura e relevância**.

### 14.2 Pilares do conhecimento

```
                    ┌─────────────────┐
                    │   CONHECIMENTO  │
                    │   MISSÃO OAB    │
                    └────────┬────────┘
           ┌─────────────────┼─────────────────┐
           │                 │                 │
           ▼                 ▼                 ▼
    ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
    │  QUESTÕES   │   │  TEORIA     │   │  ESTRATÉGIA │
    │  (prática)  │   │  (resumos)  │   │  (método)   │
    └─────────────┘   └─────────────┘   └─────────────┘
```

### 14.3 Taxonomia de conteúdo (1ª fase OAB)

| Disciplina | Subtemas prioritários | Questões meta |
|---|---|---|
| Ética Profissional | Estatuto OAB, prerrogativas, publicidade | 500+ |
| Direito Civil | Obrigações, contratos, família, sucessões | 800+ |
| Processo Civil | Recursos, execução, tutela provisória | 700+ |
| Direito Penal | Parte geral, crimes em espécie | 600+ |
| Processo Penal | Recursos, nulidades, júri | 500+ |
| Direito Constitucional | Direitos fundamentais, controle | 600+ |
| Direito Administrativo | Atos, licitações, improbidade | 500+ |
| Direito Tributário | CTN, impostos federais | 400+ |
| Direito do Trabalho | CLT, reforma, processo | 500+ |
| Direito Empresarial | Sociedades, títulos, falência | 400+ |
| Direitos Humanos | Tratados, Sistema Interamericano | 300+ |
| Direito Internacional | Tratados, cooperação | 200+ |
| Filosofia do Direito | Escolas, conceitos | 200+ |
| Direito Financeiro | Orçamento, dívida pública | 200+ |
| ECA | Proteção integral, medidas | 300+ |
| Direito Ambiental | Licenciamento, crimes | 200+ |
| Direito Previdenciário | Benefícios, segurados | 300+ |
| Direito Consumerista | CDC, práticas abusivas | 300+ |

### 14.4 Pipeline de produção de conteúdo

```
Ideia/Revisão edital
        │
        ▼
┌───────────────┐
│  Roteiro      │  Especialista define escopo
└───────┬───────┘
        ▼
┌───────────────┐
│  Produção     │  Redator / IA assistida
└───────┬───────┘
        ▼
┌───────────────┐
│  Revisão      │  Advogado + pedagogo
└───────┬───────┘
        ▼
┌───────────────┐
│  Publicação   │  Versionamento + indexação
└───────┬───────┘
        ▼
┌───────────────┐
│  Monitoramento│  Feedback alunos + atualização
└───────────────┘
```

### 14.5 Critérios de qualidade de conteúdo

| Critério | Descrição | Peso |
|---|---|---|
| Precisão jurídica | Legislação e jurisprudência corretas | 40% |
| Clareza pedagógica | Linguagem acessível sem perder rigor | 25% |
| Relevância para OAB | Alinhado ao edital e histórico de provas | 20% |
| Atualização | Reflete legislação vigente | 10% |
| Formato | Estruturado para plataforma (não PDF solto) | 5% |

### 14.6 Versionamento

| Evento | Ação |
|---|---|
| Nova edição OAB | Revisão completa da taxonomia |
| Alteração legislativa | Atualização pontual + flag "atualizado em" |
| Feedback de erro | Correção em ≤ 48h + notificação |
| Conteúdo desatualizado | Arquivado, não deletado |

---

## 15. Métricas de sucesso

### 15.1 North Star Metric

> **Horas de estudo qualificadas por semana (HSQ)** — tempo em que o aluno resolve questões, faz simulados ou consome conteúdo estruturado na plataforma.

Justificativa: correlaciona engajamento real com probabilidade de aprovação.

### 15.2 Métricas por fase

#### V1 — Aquisição

| Métrica | Definição | Meta Q3 2026 |
|---|---|---|
| Visitantes únicos | Sessões únicas/mês na landing | 5.000 |
| Taxa de conversão CTA | Cliques CTA / visitantes | ≥ 8% |
| Leads WhatsApp | Entradas no grupo via landing | 400 |
| CAC | Custo ads / leads | < R$ 15 |
| Bounce rate | Saída sem interação | < 55% |

#### V2 — Ativação

| Métrica | Definição | Meta Q4 2026 |
|---|---|---|
| Cadastros | Contas criadas | 1.000 |
| Taxa de ativação | Completou onboarding / cadastros | ≥ 70% |
| D1 retenção | Retorno no dia seguinte | ≥ 30% |
| D7 retenção | Retorno em 7 dias | ≥ 20% |

#### V3 — Engajamento

| Métrica | Definição | Meta Q1 2027 |
|---|---|---|
| MAU | Usuários ativos/mês | 500 |
| Questões/usuário/semana | Média de questões resolvidas | ≥ 50 |
| Simulados/usuário/mês | Simulados completos | ≥ 2 |
| HSQ (North Star) | Horas de estudo qualificado/semana | ≥ 3h/usuário |

#### V4 — Retenção

| Métrica | Definição | Meta Q3 2027 |
|---|---|---|
| D30 retenção | Ativo 30 dias após cadastro | ≥ 40% |
| Streak médio | Dias consecutivos | ≥ 7 |
| Missões completadas/semana | % missões concluídas | ≥ 60% |
| NPS | Net Promoter Score | ≥ 50 |

#### V5 — Monetização

| Métrica | Definição | Meta Q4 2027 |
|---|---|---|
| Conversão Free → Premium | % que assina | ≥ 5% |
| MRR | Receita recorrente mensal | R$ 30.000 |
| LTV | Lifetime value médio | > 3× CAC |
| Churn mensal Premium | Cancelamentos/mês | < 8% |

### 15.3 Dashboard de produto (estrutura)

```
┌─────────────────────────────────────────────────────────────┐
│  MISSÃO OAB — Product Dashboard                             │
├──────────────┬──────────────┬──────────────┬────────────────┤
│  Aquisição   │  Ativação    │  Engajamento │  Retenção      │
│  ──────────  │  ──────────  │  ──────────  │  ──────────    │
│  Visitantes  │  Cadastros   │  MAU         │  D7 / D30      │
│  CAC         │  Onboarding  │  HSQ ★       │  Streak médio  │
│  Conv. CTA   │  D1          │  Questões/sem│  NPS           │
├──────────────┴──────────────┴──────────────┴────────────────┤
│  Receita (V5+)                                              │
│  MRR · ARPU · LTV · Churn · Conversão Premium               │
└─────────────────────────────────────────────────────────────┘
```

---

## 16. Critérios de qualidade

### 16.1 Checklist de qualidade — Feature nova

```
┌────────────────────────────────────────────────────────────┐
│           CHECKLIST DE QUALIDADE — NOVA FEATURE              │
├────────────────────────────────────────────────────────────┤
│ PRODUTO                                                    │
│ [ ] Responde ao filtro (captar / estudar / reter)?         │
│ [ ] Persona primária validada?                             │
│ [ ] Critérios de aceite escritos?                          │
│ [ ] Métrica de sucesso definida?                           │
│                                                            │
│ UX                                                         │
│ [ ] Fluxo testado com ≥ 3 usuários                         │
│ [ ] Mobile-first verificado                                │
│ [ ] Estados vazio/erro/carregamento desenhados             │
│ [ ] Copy alinhada ao BRAND_VOICE.md                        │
│                                                            │
│ TÉCNICO                                                    │
│ [ ] Testes automatizados (unit + integration)              │
│ [ ] Performance dentro dos RNFs                            │
│ [ ] Acessibilidade WCAG AA                                 │
│ [ ] Review de código aprovado                              │
│                                                            │
│ CONTEÚDO (se aplicável)                                    │
│ [ ] Revisão jurídica aprovada                              │
│ [ ] Alinhado à taxonomia OAB                               │
└────────────────────────────────────────────────────────────┘
```

### 16.2 Definition of Done (DoD)

Uma feature está **Done** quando:

1. Código mergeado na branch principal
2. Testes passando (CI green)
3. Deploy em staging validado
4. Critérios de aceite verificados pelo PM
5. Documentação atualizada (se API ou fluxo novo)
6. Analytics/eventos instrumentados
7. Deploy em produção

### 16.3 Critérios de qualidade de conteúdo

| Nível | Critério | Aprovador |
|---|---|---|
| Questão nova | Enunciado claro + 4 alternativas + gabarito + comentário | Advogado + revisor |
| Resumo | ≤ 2.000 palavras + mapa mental + referências | Especialista disciplina |
| Simulado | 80 questões + gabarito + relatório por disciplina | Coordenação pedagógica |
| Material IA | Revisão humana obrigatória antes de publicar | Especialista |

---

## 17. Riscos

### 17.1 Matriz de riscos

| ID | Risco | Prob. | Impacto | Mitigação |
|---|---|---|---|---|
| R01 | Baixa conversão landing → WhatsApp | Média | Alto | A/B tests, otimizar copy, Meta Pixel |
| R02 | Grupo WhatsApp perde membros | Média | Alto | Conteúdo consistente, migrar para V2 |
| R03 | Conteúdo jurídico incorreto | Baixa | Crítico | Revisão dupla, disclaimers, feedback |
| R04 | IA gera resposta errada | Média | Alto | RAG + guardrails + human review |
| R05 | CAC insustentável | Média | Alto | Orgânico, SEO, indicação, conteúdo |
| R06 | Time pequeno, escopo grande | Alta | Médio | Roadmap faseado, priorização rigorosa |
| R07 | Concorrente lança feature similar | Média | Médio | Foco em qualidade e comunidade |
| R08 | Mudança no edital OAB | Baixa | Médio | Taxonomia flexível, atualização rápida |
| R09 | LGPD — vazamento de dados | Baixa | Crítico | Security by design, auditorias |
| R10 | Gamificação gera comportamento tóxico | Média | Médio | Anti-fraude, ligas justas, tom profissional |
| R11 | Monetização prejudica experiência | Média | Alto | Free tier generoso, princípio documentado |
| R12 | Dependência de API de IA (custo) | Média | Médio | Cache, limites Free, modelo próprio futuro |

### 17.2 Plano de contingência — R03 (conteúdo incorreto)

```
Detecção (aluno reporta ou auditoria)
        │
        ▼
Correção imediata (< 48h)
        │
        ▼
Notificação aos afetados (se simulado/questão)
        │
        ▼
Post-mortem interno
        │
        ▼
Atualização de processo de revisão
```

---

## 18. Fora do escopo

### 18.1 Explicitamente excluído

| Item | Motivo |
|---|---|
| Rede social genérica (feed, stories) | Não ajuda aprovação; distrai |
| Marketplace de PDFs piratas | Legal e reputacional |
| Garantia de aprovação | Antiético e ilegal |
| Conteúdo de outras provas (concursos não-jurídicos) | Dilui foco |
| Streaming de aulas ao vivo (V1–V4) | Complexidade operacional alta |
| Criptomoedas / NFTs como recompensa | Irrelevante para OAB |
| Chat aberto entre alunos (sem moderação) | Risco de desinformação |
| Funcionalidades "porque o concorrente tem" | Viola princípio de foco |
| 2ª fase OAB (peça prática) | Escopo futuro, não V1–V6 inicial |

### 18.2 Escopo futuro (pós-V6, não comprometido)

- Preparação para 2ª fase (peça prática com correção IA)
- Expansão para concursos jurídicos (MP, magistratura)
- Certificações complementares (compliance, LGPD)
- API pública para integrações B2B

---

## 19. Glossário

| Termo | Definição |
|---|---|
| **OAB** | Ordem dos Advogados do Brasil; organiza o Exame de Ordem |
| **Exame de Ordem** | Prova necessária para obter inscrição na OAB |
| **1ª fase** | Prova objetiva (80 questões, 18 disciplinas) |
| **2ª fase** | Prova prático-profissional (peça + 4 questões) |
| **FGV** | Fundação Getúlio Vargas; banca organizadora habitual |
| **Edital** | Documento oficial com disciplinas, datas e regras |
| **MAU** | Monthly Active Users — usuários ativos no mês |
| **HSQ** | Horas de Estudo Qualificadas — North Star Metric |
| **CAC** | Customer Acquisition Cost — custo para adquirir um lead/usuário |
| **LTV** | Lifetime Value — receita total esperada por usuário |
| **MRR** | Monthly Recurring Revenue — receita recorrente mensal |
| **NPS** | Net Promoter Score — métrica de satisfação e indicação |
| **RAG** | Retrieval-Augmented Generation — IA com base de conhecimento |
| **XP** | Experience Points — pontos de experiência (gamificação) |
| **Streak** | Sequência de dias consecutivos de estudo |
| **Liga** | Divisão competitiva na gamificação (Bronze, Prata, Ouro...) |
| **Missão** | Tarefa diária/semanal com recompensa de XP |
| **Premium** | Plano pago com features avançadas |
| **ICP** | Ideal Customer Profile — perfil ideal de cliente |
| **DoD** | Definition of Done — critérios para considerar feature concluída |
| **LGPD** | Lei Geral de Proteção de Dados |
| **PWA** | Progressive Web App — web app com capacidades nativas |

---

## Histórico de revisões

| Versão | Data | Autor | Alteração |
|---|---|---|---|
| 1.0 | Jul/2026 | Product | Documento inicial |

---

*Documento confidencial — Missão OAB. Distribuição restrita à equipe interna.*
