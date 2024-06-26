# API de Gerenciamento de Finanças Pessoais 💰

## Descrição 📄

Esta é uma API de Gerenciamento de Finanças Pessoais construída com Node.js. Ela ajuda os usuários a acompanharem despesas, criarem orçamentos, categorizarem transações e receberem alertas para gastos excessivos. A API suporta autenticação e autorização de usuários, garantindo que os dados de cada usuário sejam seguros e privados.

## Funcionalidades 🚀

- Registro e autenticação de usuários
- Operações CRUD para transações e orçamentos
- Categorização de transações
- Monitoramento de orçamentos e alertas para gastos excessivos
- Acesso a dados específicos do usuário

## Tecnologias 🛠️

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens) para autenticação
- bcryptjs (para hash de senhas)
- Joi (para validação de dados)

## Instalação 💻

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
   cd NOME_DO_REPOSITORIO
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Crie um arquivo `.env` no diretório raiz e adicione as seguintes variáveis:**
   ```env
   PORT=3000
   MONGO_URI=sua_conexao_mongodb
   JWT_SECRET=seu_segredo_jwt
   ```

4. **Inicie o servidor:**
   ```bash
   npm start
   ```

## Endpoints 📌

### Autenticação 🔐

- **Registrar**
  - **POST** `/api/auth/register`
  - Corpo da requisição:
    ```json
    {
      "name": "Luluzin do mel",
      "email": "luluzindomel@example.com",
      "password": "password123"
    }
    ```

- **Login**
  - **POST** `/api/auth/login`
  - Corpo da requisição:
    ```json
    {
      "email": "luluzindomel@example.com",
      "password": "password123"
    }
    ```

- **Obter Usuário Autenticado**
  - **GET** `/api/auth/user`
  - Cabeçalhos: `x-auth-token: seu_token_jwt`

### Transações 💸

- **Criar Transação**
  - **POST** `/api/transactions`
  - Cabeçalhos: `x-auth-token: seu_token_jwt`
  - Corpo da requisição:
    ```json
    {
      "amount": 100,
      "type": "expense",
      "category": "food",
      "description": "groceries"
    }
    ```

- **Obter Todas as Transações**
  - **GET** `/api/transactions`
  - Cabeçalhos: `x-auth-token: seu_token_jwt`

- **Atualizar Transação**
  - **PUT** `/api/transactions/:id`
  - Cabeçalhos: `x-auth-token: seu_token_jwt`
  - Corpo da requisição:
    ```json
    {
      "amount": 120,
      "category": "food",
      "description": "groceries and snacks"
    }
    ```

- **Excluir Transação**
  - **DELETE** `/api/transactions/:id`
  - Cabeçalhos: `x-auth-token: seu_token_jwt`

### Orçamentos 📊

- **Criar Orçamento**
  - **POST** `/api/budgets`
  - Cabeçalhos: `x-auth-token: seu_token_jwt`
  - Corpo da requisição:
    ```json
    {
      "totalAmount": 500,
      "category": "food",
      "period": "monthly"
    }
    ```

- **Obter Todos os Orçamentos**
  - **GET** `/api/budgets`
  - Cabeçalhos: `x-auth-token: seu_token_jwt`

- **Atualizar Orçamento**
  - **PUT** `/api/budgets/:id`
  - Cabeçalhos: `x-auth-token: seu_token_jwt`
  - Corpo da requisição:
    ```json
    {
      "totalAmount": 600,
      "category": "food",
      "period": "monthly"
    }
    ```

- **Excluir Orçamento**
  - **DELETE** `/api/budgets/:id`
  - Cabeçalhos: `x-auth-token: seu_token_jwt`

## Executando Testes 🧪

Para executar os testes, use o seguinte comando:

```bash
npm test
```

## Contribuindo 🤝

Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request para qualquer alteração.

## Licença 📄

Este projeto está licenciado sob a licença MIT.
