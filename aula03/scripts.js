//Arrays

let array = ['string', 1, true];
console.log(array);

let array2 = [[1,2,3],[4,5,6],['Lucas','Barbieri', true]];
console.log(array2[0]);

//Manipulando Arrays
//forEach() = executa uma função para cada índice de um array;
array.forEach(function(item, index){console.log(item, index)});
//push() = adiciona um item ao final do array;
array.push('novo item');
console.log(array);
//pop() = remove item no final do array;
array.pop();
console.log(array);
// shift() = remove item no início do array;
array.shift();
console.log(array);
// unshift() = add item no início do array;
array.unshift('mais um item novo');
console.log(array);
// indexOf() = retorna índice de um valor;
console.log(array2.indexOf(true));
//splice() = remove ou substitui um item pelo índice;
array.splice(1,1);
console.log(array);
//slice() = retorna uma parte de um arrayexistente.
array2.slice(1,2);
console.log(array2);

//Objects

let object = {string:'string', number:1, boolean:true, arrayinterno:[1,2,3], objetoInterno:{objeto:{outroobjetointerno:{string:'oi'}}}};

console.log(object);
var string = object.string;
console.log(string);
var arrayinterno = object.arrayinterno;
console.log(arrayinterno);

var {string, boolean, objetoInterno} = object;
console.log(string, boolean, objetoInterno);