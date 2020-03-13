/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var myArr = [true, false, 'string', {a: 10}, null];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function getArr(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
getArr(myArr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myFunction(arr, num) {
    return arr[num];
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVar = [true, false, 'string', {a: 10}, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

myFunction(myVar, 2);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(name) {

    var books = {
        'JS Ninja': {
            pages: 35,
            author: 'João Pedro',
            lib: 'ASV Digital'
        },
        'Design Pattern': {
            pages: 55,
            author: 'Fernando Fontes',
            lib: 'Rabisco Visual'
        },
        'Marketing Digital': {
            pages: 10,
            author: 'Caio Flores',
            lib: 'Smart Digital'
        }
    }

    if(!name) {
        return books;
    }

    return books[name];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log( 'O livro JS Ninja tem ' + book('JS Ninja').pages + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro JS Ninja é ' + book('JS Ninja').author + '!' );


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro JS Ninja foi publicado pela editora ' + book('JS Ninja').lib + '!' );

