# Biblioteca de Livros e Autores

## Instalação

1. Certifique-se de ter o Node.js e o MongoDB instalados em sua máquina.
2. Clone o repositório do projeto.
3. Navegue até o diretório do projeto e execute o comando `npm install` para instalar as dependências.
4. Configure as variáveis de ambiente necessárias, como a conexão com o banco de dados MongoDB.
5. Execute o comando `npm start` para iniciar o servidor.

## Uso

A aplicação fornece uma API RESTful para gerenciar livros e autores. Você pode realizar as seguintes operações:

### Autores
- `GET /autores`: Listar todos os autores.
- `GET /autores/:id`: Obter um autor pelo ID.
- `POST /autores`: Cadastrar um novo autor.
- `PUT /autores/:id`: Atualizar um autor pelo ID.
- `DELETE /autores/:id`: Excluir um autor pelo ID.

### Livros
- `GET /livros`: Listar todos os livros.
- `GET /livros/:id`: Obter um livro pelo ID.
- `POST /livros`: Cadastrar um novo livro.
- `PUT /livros/:id`: Atualizar um livro pelo ID.
- `DELETE /livros/:id`: Excluir um livro pelo ID.
- `GET /livros/busca`: Buscar livros por filtros (título, editora, número de páginas, nome do autor).

## API

A API fornece os seguintes endpoints:

| Método | Endpoint | Descrição |
| ------ | -------- | --------- |
| GET    | /autores | Listar todos os autores |
| GET    | /autores/:id | Obter um autor pelo ID |
| POST   | /autores | Cadastrar um novo autor |
| PUT    | /autores/:id | Atualizar um autor pelo ID |
| DELETE | /autores/:id | Excluir um autor pelo ID |
| GET    | /livros | Listar todos os livros |
| GET    | /livros/:id | Obter um livro pelo ID |
| POST   | /livros | Cadastrar um novo livro |
| PUT    | /livros/:id | Atualizar um livro pelo ID |
| DELETE | /livros/:id | Excluir um livro pelo ID |
| GET    | /livros/busca | Buscar livros por filtros |

## Contribuição

1. Faça um fork do repositório.
2. Crie uma nova branch com suas alterações: `git checkout -b minha-feature`.
3. Commit suas alterações: `git commit -m 'Adicionando nova feature'`.
4. Envie para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## Testes

Para executar os testes, utilize o comando `npm test`.
