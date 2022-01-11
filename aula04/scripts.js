var jogador1 = 0;
var jogador2 = 1;
var placar;

if (jogador1 != -1) {

    if (jogador1 > 0) {
        console.log('jogador 1 marcou ponto!');
    } else if (jogador2 > 0) {
        console.log('jogador 2 marcou ponto!');
    } else {
        console.log('ninguém marcou ponto!');
    }
}

//if ternário
(jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores são válidos.'): console.log('jogadores inválidos!'));
if (jogador1 > 0) {
    console.log('jogador 1 marcou ponto!');
} else if (jogador2 > 0) {
    console.log('jogador 2 marcou ponto!');
} else {
    console.log('ninguém marcou ponto!');
}

//switch/case
switch(placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 venceu!')
        break;
    case placar = jogador1 < jogador2:
        console.log('jogador 2 venceu!')
        break
    default: 
        console.log('Jogo empatado.')
}

//Estruturas de Repetição


let array = [1,2,3,4,5];
let object = {prop1: 'valor1', prop2: 2, prop3: 3}

//For
for(let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}

//for/in
for(let i in array) {
    console.log(i)
}

for(i in object) {
    console.log(i)
}

//for/of
for (i of array) {
    console.log(i)
}

for (i of object.prop1) {
    console.log(i)
}

//while
var a = 0;

while (a < 10) {
    a++;
    console.log(a)
}

//do/while

do {
    a++;
    console.log(a)
} while (a < 10);