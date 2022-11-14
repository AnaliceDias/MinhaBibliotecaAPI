# minhaBibliotecaAPI

### Como usar

1. Antes de usar a API crie um arquivo <.env> baseando-se no modelo presente no arquivo <.env.example>

2. Execute o comando `npm run build` e se certifique de que o banco de dados "minhaBiblioteca foi criado"

3. Para subir o servidor execute o comando `npm start` 

### Consumindo a API

Essa API dispôes das seguintes rotas:

#### (.post) "/estante/cadastrar"
Para cadastrar um novo livro na estante, envie uma requisição com o corpo no formato

{
    nomeDoLivro: "O sol é para todos",
    autor: "Harper Lee",
    edicao: "49ª edição"
}

#### (.post) "/estante/remover/:idLivro)"
Passe o id de um livro como parâmetro nesta rota para removê-lo de sua estante.

#### (.post) "/estante/emprestar/:idLivro"
Passe o id de um livro como parâmetro nestra rota para registar um empréstimo.

O corpo da requisição deve conter um objeto no formato

{
    quemPegou: "Fulano"
}

#### (.put) "/estante/devolver/:idEmprestimo"
Passe o id de um empréstimo como parâmetro nesta rota para registrar a devolução do livro.

#### (.get) "/estante/livros"
Faça uma requição para esta rota para obter a lista de todos os livros da estante

#### (.get) "/estante/emprestimos"
Faça uma requisição para esta rota para obter a lista de todos os livros emprestados