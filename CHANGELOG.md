# Changelog

Todas as mudanças relevantes deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/),
e o projeto utiliza versionamento semântico quando aplicável.

## [Unreleased]

### Added

- Sistema permanente de histórico institucional (`HISTORY.md`).
- Seção de governança de histórico e changelog em `AI_CONTEXT.md`.
- Estrutura definitiva de Brand Assets em `assets/brand/` (`source`, `exports`, `favicon`, `social`, `og`, `app`) e `assets/brand/README.md`.
- Seção “Brand Assets Oficiais” em `AI_CONTEXT.md`.
- Contrato operacional permanente do repositório (`PROJECT_RULES.md`).
- Seção Governança em `AI_CONTEXT.md`, com `PROJECT_RULES.md` como leitura obrigatória.
- Bootloader oficial da documentação (`PROJECT_INDEX.md` v1.0.0): Decision Tree, Boot Sequence e carregamento inteligente de contexto.
- Seção “Inicialização do Projeto” e regra permanente de carregamento seletivo em `AI_CONTEXT.md`.
- Seção “Gerenciamento de Contexto” em `PROJECT_RULES.md`.

### Changed

- Reestruturação do `CHANGELOG.md` para o padrão Keep a Changelog.
- Nomenclatura dos SVGs Inkscape (`*_INK.svg`) sem prefixos numéricos.
- Landing passa a consumir `assets/brand/source/master-logo-horizontal.svg` no header e footer.
- Árvore de organização de arquivos atualizada em `DESIGN_GUIDE.md`.
- `PROJECT_INDEX.md` evolui de índice mestre para orquestrador de contexto (onboarding seletivo por categoria de tarefa).
- Leitura obrigatória em `PROJECT_RULES.md` e STOP em `AI_CONTEXT.md` alinhados ao boot via Decision Tree (sem carregar documentação completa por padrão).
- Processo de trabalho em `PROJECT_RULES.md` alinhado à Boot Sequence.
- Fase 7 de `HISTORY.md` atualizada com o marco do `PROJECT_INDEX`.

## [0.1.0] - 2026-07-20

Primeiro marco versionado do repositório, correspondente ao commit Git `ef37433`
(`chore: initialize Missao OAB project`).

### Added

- Estrutura inicial do projeto Missão OAB.
- Landing page em `index.html` com base CSS (`reset`, `variables`, `style`, `responsive`, `animations`) e `js/app.js`.
- Documentação de produto: `PRD.md`, `ROADMAP.md`, `USER_JOURNEY.md`, `BUSINESS_MODEL.md`, `GAMIFICATION.md`.
- Documentação de marca: `BRAND_BOOK.md`, `BRAND_VOICE.md`, `COPYWRITING.md`.
- Design System documental: `DESIGN_GUIDE.md` e `UI_KIT.md`.
- Tokens e arquitetura visual inicial em `css/variables.css` e demais folhas de estilo.
- Identidade visual source: `assets/brand/source/master-symbol.svg`.
- Artefatos de marca adicionais versionados no commit inicial (incluindo pasta “Missão OAB Design System” e `Logo.png`).
- Placeholders de mídia em `img/logo/` e `img/hero/`.
- `AI_CONTEXT.md` para orientação de agentes de IA, metáfora mapa/caminho e regras de uso da marca.
- `README.md` (arquivo criado; conteúdo vazio no estado versionado).
- Registro inicial de changelog (versão v0.1.0), posteriormente reorganizado neste formato.
