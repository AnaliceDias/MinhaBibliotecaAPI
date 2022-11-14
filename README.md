# minhaBibliotecaAPI

### Como usar
<br></br>
1. Antes de usar a API crie um arquivo `.env` baseando-se no modelo presente no arquivo `.env.example` 
<br></br>
2. Execute o comando `npm run build` e se certifique de que o banco de dados "minhaBiblioteca foi criado"
<br></br>
3. Para subir o servidor execute o comando `npm start` 
<br></br>
### Consumindo a API <p></p>

Essa API dispôes das seguintes rotas:<p></p>

### `(.post) "/estante/cadastrar"`
Para cadastrar um novo livro na estante, envie uma requisição com o corpo no formato

{<p></p>
    nomeDoLivro: "O sol é para todos",<p></p>
    autor: "Harper Lee",<p></p>
    edicao: "49ª edição"<p></p>
}<br></br>
### `(.post) "/estante/remover/:idLivro)"` 
Passe o id de um livro como parâmetro nesta rota para removê-lo de sua estante.<br></br>

### `(.post) "/estante/emprestar/:idLivro"`
Passe o id de um livro como parâmetro nestra rota para registar um empréstimo.

O corpo da requisição deve conter um objeto no formato

{<p></p>
quemPegou: "Fulano"<p></p>
}<br></br>

### `(.put) "/estante/devolver/:idEmprestimo"`
Passe o id de um empréstimo como parâmetro nesta rota para registrar a devolução do livro.<br></br>

### `(.get) "/estante/livros"`
Faça uma requição para esta rota para obter a lista de todos os livros da estante<br></br>

### `(.get) "/estante/emprestimos"`
Faça uma requisição para esta rota para obter a lista de todos os livros emprestados