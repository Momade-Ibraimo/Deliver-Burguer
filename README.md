
# Deliver Burguer 🍔

Aplicação web de delivery de hamburguer desenvolvida com React e Vite.
Possui autenticação com JWT, área administrativa completa e carrinho de compras.

## 🔗 Acesse o app

👉 [momade-ibraimo.github.io/Deliver-Burguer](https://momade-ibraimo.github.io/Deliver-Burguer/login)

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
