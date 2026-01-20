
# Blog Pessoal (Frontend)

## Descrição

Este repositório contém o frontend do projeto "Blog Pessoal", uma aplicação web construída com React + Vite e TypeScript. A aplicação fornece interface para gerenciar postagens, temas e perfis de usuário, consumindo uma API backend separada (veja seção "Integração Backend").

O frontend foi desenvolvido para funcionar em conjunto com o backend localizado em: C:\\Users\\beatr\\Documents\\Projetos\\nest\\blogpessoal_backend

## Objetivo

Fornecer uma interface amigável para criação, edição, listagem e exclusão de postagens e temas, com autenticação e controle de acesso por usuário.

## Funcionalidades

- Cadastro de usuário (registro).
- Login / autenticação (persistência de token).
- Visualização de feed de postagens.
- Criação, edição e exclusão de postagens (por usuário autenticado).
- Criação e listagem de temas (categorias) para postagens.
- Edição e exclusão de temas (com regras de negócio aplicadas).
- Visualização e edição do perfil do usuário.
- Modais e confirmações para ações de exclusão.

## Regras de Negócio

- Apenas usuários autenticados podem criar, editar ou excluir postagens.
- Usuários só podem editar ou excluir suas próprias postagens.
- Exclusão de um tema deve respeitar a lógica do backend (ex.: impedir exclusão se houver postagens relacionadas), conforme implementado no serviço backend.
- Campos obrigatórios devem ser validados no frontend antes do envio (título, conteúdo e tema para postagens).
- O frontend envia o token JWT (ou similar) nas requisições que exigem autenticação.

> Observação: as regras definitivas e validações críticas (consistência, integridade referencial, permissões avançadas) são responsabilidade do backend; o frontend faz validações e interface com o usuário.

## Tecnologias usadas

- Frontend: React 19, TypeScript, Vite.
- Estilização: Tailwind CSS.
- Requisições HTTP: Axios.
- Roteamento: React Router.
- Ícones: Phosphor Icons.
- Componentes/UX: reactjs-popup, react-spinners.
- Build / bundler: Vite.

Dependências (principais) encontradas em `package.json`:

- react
- react-dom
- react-router-dom
- axios
- tailwindcss
- @phosphor-icons/react
- react-spinners
- reactjs-popup

## Como rodar (desenvolvimento)

1. Instalar dependências:

```bash
npm install
```

2. Iniciar aplicação em modo desenvolvimento:

```bash
npm run dev
```

3. A API backend deve estar rodando para funcionalidades que exigem autenticação e persistência. Backend esperado em: C:\\Users\\beatr\\Documents\\Projetos\\nest\\blogpessoal_backend

## Observações finais

Este README é um resumo do frontend. Para detalhes sobre as rotas de API, modelos de dados e regras de negócio implementadas no servidor, consulte o repositório backend mencionado acima.


