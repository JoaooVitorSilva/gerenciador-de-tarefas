# 📚 Gerenciador de Tarefas

Projeto da disciplina **Desenvolvimento de Sistemas Web** — UniSENAI.

* **Estudante:** João Vitor da Silva
* **Professor:** Alexandre Bendlin

## 🎯 Objetivo do Projeto

Desenvolver um gerenciador de tarefas completo e multi-usuário, com autenticação e persistência de dados em SQLite, aplicando na prática conceitos de HTML semântico, estilização com Tailwind CSS, responsividade (Mobile-First) e controle de versão com Git.

## 🚀 Funcionalidades

- [x] Tela de acesso ao sistema (login)
- [x] Cadastro de novas tarefas com título e prioridade
- [x] Listagem de tarefas em grid responsivo (Bento Grid)
- [ ] Persistência dos dados em SQLite
- [ ] Autenticação de múltiplos usuários
- [ ] Marcar tarefas como concluídas

## 🛠️ Tecnologias Utilizadas

- **HTML5** — estruturação semântica das páginas
- **Tailwind CSS** (via CDN) — estilização, Box Model e responsividade
- **CSS Grid / Flexbox** — layout Mobile-First com breakpoints (`md:`, `lg:`)
- **Git & GitHub** — versionamento e histórico do projeto
- **SQLite** *(planejado)* — persistência dos dados de usuários e tarefas

## 🏗️ Arquitetura (planejada)

```
Frontend (Web App)
        │
   API Gateway
    ┌───┴────┐
Serviço de   Serviço de
Usuários     Tarefas
(Auth)
    │            │
 SQLite       SQLite
```

## 📁 Estrutura do Projeto

```
gerenciador-de-tarefas/
├── .gitignore
├── index.html          # Versão atual (Grid/Bento Grid)
├── desafio_aulas_3e4.html
└── README.md
```

## ▶️ Como Executar

1. Clone o repositório ou abra no GitHub Codespaces.
2. Instale a extensão **Live Server** (se estiver rodando localmente no VS Code).
3. Clique com o botão direito no `index.html` → **Open with Live Server**.

## 📌 Status

🚧 Em desenvolvimento — projeto acadêmico em construção ao longo das aulas da disciplina.