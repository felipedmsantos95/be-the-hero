Métodos HTTP:

 GET: Buscar/listar informação do back-end
 POST: Criar uma informação no back-end
 PUT: Alterar informação no back-end
 DELETE: Deletar em informação no back-end



Tipos de Parêmtros
 
 Query Params: Parâmetros nomeados enviados na rota após "?" (Filtro, Paginação)
 Route Params: Parâmetros utilizados para identificar recursos
 Request Body: 


Tipos de Bancos de Dados

 SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 NoSQL: MongoDB, CouchDB, etc...

 Driver: SELECT * FROM users
 Query Builder: table('users').select('*').where()


Knex Commands:

Init Knex In Repository: 'npx knex intit'
Create new migration: 'npx knex migrate:make create_ongs'
Run Migration: 'npx knex migrate:latest'
Rollback last migration: 'npx knex migrate:rollback'
