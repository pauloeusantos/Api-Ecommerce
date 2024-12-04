# API de E-commerce Genérica

Este projeto é uma API de e-commerce genérica construída com Node.js e Express, utilizando Sequelize para ORM. Ele foi desenvolvido como um trabalho escolar e é projetado para ser flexível, permitindo a adaptação a diferentes tipos de produtos e categorias.

## Estrutura do Projeto

- `config/`: Configurações de banco de dados e outras configurações gerais.
- `middlewares/`: Middlewares para autenticação e outras funcionalidades.
- `models/`: Modelos Sequelize para representar entidades como Usuários, Produtos, Pedidos e Itens de Pedido.
- `routes/`: Rotas para gerenciar autenticação, produtos e pedidos.
- `sync.js`: Script para sincronizar o banco de dados com os modelos definidos.

## Dependências

- `express`: Framework para construir a API.
- `sequelize`: ORM para interagir com o banco de dados.
- `mysql2`: Driver para conectar ao banco de dados MySQL.
- `bcrypt`: Para hashing de senhas.
- `jsonwebtoken`: Para autenticação baseada em tokens.
- `sqlite3`: Alternativa para banco de dados SQLite.

## Como Executar

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Configure o banco de dados em `config/config.js`.
4. Sincronize o banco de dados executando `node sync.js`.
5. Inicie o servidor com `node index.js`.

## Rotas Principais

- **Autenticação**: `/api/auth`
- **Produtos**: `/api/products`
- **Pedidos**: `/api/orders`

## Melhorias Futuras

- Implementar testes automatizados.
- Adicionar documentação detalhada da API usando Swagger.
- Melhorar a segurança e validação de dados.

## Licença

Este projeto é licenciado sob a Licença ISC.
