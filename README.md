```markdow
# Deliver Burguer 🍔

Aplicação web de delivery de hamburguer desenvolvida com React e Vite.
Possui autenticação com JWT, área administrativa completa e carrinho de compras.

## Funcionalidades

- Autenticação e cadastro de usuários com JWT
- Rotas privadas por nível de acesso (cliente e admin)
- Listagem e busca de produtos com carrossel
- Carrinho de compras
- Painel administrativo com gestão de pedidos e produtos
- Cadastro, edição e remoção de produtos
- Validação de formulários com React Hook Form e Yup
- Notificações com React Toastify
- Interface com Material UI

## Tecnologias

- React 19
- Vite
- React Router DOM
- Axios
- Styled Components
- Material UI (MUI)
- React Hook Form + Yup
- React Toastify
- React Select
- React Elastic Carousel
- ESLint + Prettier
- GitHub Pages

## Como rodar

Clone o repositório e instale as dependências:

```bash
yarn install
```

Certifique-se de que a API está rodando em `http://localhost:3000`.

```bash
yarn dev
```

## Deploy

```bash
yarn deploy
```

## Estrutura do projeto

```
src/
├── assets/
├── components/
├── Constants/
├── containers/
│   ├── Admin/
│   ├── Cart/
│   ├── Home/
│   ├── Login/
│   ├── Products/
│   └── Registre/
├── Global-Styles/
├── hooks/
├── routes/
│   ├── private-routes.jsx
│   └── routes.jsx
├── services/
│   └── api.jsx
└── utils/
```

## Rotas

| Rota | Acesso | Descrição |
|------|--------|-----------|
| /login | Público | Tela de login |
| /cadastro | Público | Cadastro de usuário |
| / | Privado | Home |
| /produtos | Privado | Listagem de produtos |
| /carrinho | Privado | Carrinho de compras |
| /admin/* | Admin | Painel administrativo |
```

---

## 💬 Commits (em ordem natural)

```
commit inicial - setup do projeto com vite e react
```
```
configura eslint e prettier
```
```
adiciona dependências principais: axios, react-router-dom, mui, styled-components
```
```
configura instância do axios com interceptor de autenticação jwt
```
```
cria constantes de rotas e paths
```
```
configura react router com createBrowserRouter e basename para github pages
```
```
cria estrutura de rotas privadas por nível de acesso
```
```
cria container de login com validação de formulário
```
```
cria container de cadastro de usuário
```
```
adiciona autenticação jwt e armazenamento no localstorage
```
```
cria home com carrossel de produtos
```
```
cria container de listagem de produtos
```
```
cria container do carrinho de compras
```
```
cria painel administrativo com data grid de pedidos
```
```
adiciona gestão de produtos no admin: listagem e cadastro
```
```
adiciona edição e remoção de produtos no admin
```
```
cria componentes reutilizáveis de layout e navegação
```
```
adiciona notificações com react toastify
```
```
adiciona validação de formulários com react hook form e yup
```
```
configura estilos globais com styled-components
```
```
configura vite build e ajusta chunk size
```
```
configura gh-pages para deploy no github pages
```
```
ajusta basename da rota para funcionar no github pages
