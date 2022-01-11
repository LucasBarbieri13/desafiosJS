//função declarativa
function funcao() {
    console.log('Hello, world!')
}

funcao();

function msg(primeiro, segundo) {
    console.log(primeiro, segundo)
}

msg('Olá,', 'Mundo!');

//expressões de funções
var funcao1 = function funcao1(){
    console.log('mensagem de uma função de expressão')
}

funcao1();

var funcao2 = function() {
    console.log('outra mensagem de função de expressão')
}

funcao2();

//Arrow function
var funcao3 = () => {
    console.log('mensagem de uma arrow function')
}

funcao3();
