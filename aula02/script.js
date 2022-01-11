//Tipos primitivos

//boolean
var vouf = false;
console.log(typeof(vouf));

//number
var num = 1;
console.log(typeof(num));

//string
var string = 'Hello, world!';
console.log(typeof(string));

//var -> variável genérica. escopo local e global. Pode ser alterada. Não tendo valor inicial será null;
var nome = 'Lucas';
nome = 'Barbieri';
console.log(nome);

//let -> escopo local de bloco, pode ser alterada. Não tendo valor inicial será null;
let variavel2 = 'Lucas';
variavel2 = 'Barbieri';
console.log(variavel2);

//const -> escopo local de bloco, somente leitura. Valor inicial é obrigatório e não pode ser alterado.
// const nome2 = 'Lucas';
// nome2 = 'Barbieri';
// console.log(nome2);

//ESCOPO
//Global -> quando a variável é declarada fora de qualquer bloco, visibilidade disponível para todo o código.
var global = 'global';
console.log(global);

//Local -> quando a variável é declarada dentro de um bloco, visibilidade disponível ou não.
//boas práticas: declarar as variáveis no topo do bloco de código.
function escopolocal() {
    let escopolocalinterno = 'local';
    console.log(escopolocalinterno);
}

escopolocal();
// console.log(escopolocalinterno);

//Atribuição: sinal de igualde: '=' (recebe)
//Comparação: '==' compara valores.
//Comparação idêntica: '===' compara valores e tipos.

//Operadores aritméticos
//Adição: +
//Subtração: -
//Multiplicação: *
//Divisão real: /
//DIvisão inteira ou resto da divisão: %
//Potenciação: **

//Operadores relacionais
//maior que >
// menor que <
// maior ou igual >= 
// menor ou igual <=

//Operadores Lógicos
//&& -> e : todos os valores sejam true
// || -> ou : qualquer valor seja true
// ! -> não : inverte os valores de true para false e false para true

// Hoisting: Apenas var pode ser atribuída antes da declaração. 
number1 = 1;
console.log(number1 + 2);

var number1;

var firstName = 'Lucas';
let lastName = 'Barbieri';

if (firstName === 'Lucas') {
    var firstName = 'Outro nome';
    let lastName = 'Outro sobrenome';
}

console.log(firstName, lastName);

const FIRST_NAME = 'Lucas';
