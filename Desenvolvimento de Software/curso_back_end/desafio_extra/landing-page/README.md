# Landing Page Pessoal — Luiz Cruz

Landing page pessoal desenvolvida com HTML, CSS e JavaScript puro, sem dependências externas.

## Visão Geral

Um site de página única (single-page) com design moderno e tema escuro, criado para servir como portfólio e ponto de contato profissional.

Utilizando nvim um novo desafio para aumentar a produtividade. Curva de aprendizagem dolorosa, mais a cada dia me sinto mais feliz em

empoeirar meu mouse.

## Estrutura do Projeto

```
landing-page/
├── index.html   → Estrutura e conteúdo da página
├── style.css    → Estilos, layout responsivo e animações
├── script.js    → Interatividade e comportamentos dinâmicos
└── README.md    → Documentação do projeto
```

## Seções

- **Hero** — Apresentação com nome, título e chamada para ação
- **Sobre Mim** — Biografia e espaço para foto
- **Habilidades** — Grade com 4 cards (Frontend, Backend, Design, Outros)
- **Projetos** — 3 cards de projetos com tags de tecnologia e links
- **Contato** — Formulário com campos de nome, e-mail e mensagem
- **Rodapé** — Links para redes sociais

## Funcionalidades JavaScript

- **Navbar com sombra no scroll** — A barra de navegação ganha sombra ao rolar a página
- **Menu mobile (hambúrguer)** — Navegação responsiva para telas menores
- **Scroll reveal** — Elementos aparecem com animação ao entrar na viewport
- **Destaque do link ativo** — O link da seção visível é destacado automaticamente
- **Formulário de contato** — Feedback visual ao enviar (sem backend configurado)

## Design

- **Tema:** Escuro com acentos em roxo (`#6c63ff`) e verde-água (`#64ffda`)
- **Responsivo:** Adaptado para desktop, tablet e mobile
- **Tipografia:** Inter (sans-serif) e Fira Code (monospace)
- **Animações:** Fade-in no hero, hover nos cards e botões, scroll reveal nas seções

## Como Usar

1. Abra o arquivo `index.html` no navegador
2. Personalize o conteúdo editando o `index.html`
3. Ajuste cores e estilos no `style.css` (variáveis CSS no `:root`)

## Personalização

As cores e fontes podem ser alteradas facilmente através das variáveis CSS:

```css
:root {
  --color-bg: #0a0a0f;
  --color-primary: #6c63ff;
  --color-accent: #64ffda;
  --color-text: #e2e2e8;
  --font-sans: "Inter", system-ui, sans-serif;
}
```

## Próximos Passos

- Substituir o placeholder de imagem por uma foto real
- Atualizar os projetos com informações e links reais
- Conectar o formulário a um serviço de e-mail (ex: Formspree, EmailJS)
- Adicionar links reais para GitHub, LinkedIn e Twitter no rodapé
