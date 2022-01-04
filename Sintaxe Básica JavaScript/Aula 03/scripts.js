//o que são vetores e arrays

//como declarar

// let array = ['Manoel', 1, true];
// console.log(array);

// let array = ['Manoel', 1, true, ['Array1'], ['Array2'], ['Array3']];
// console.log(array[0]);

let array = ['Manoel', 1, true, ['Array1'], ['Array2'], ['Array3']];
//foreach varre o array
// array.forEach(function(item,index){console.log(item,index)});

//push adicina um item no final do array
// array.push("Maria");

//pop remove um item do final do array
// array.pop();

// shift remove um item do inicio do array
// array.shift();

// unshift coloca um item no inicio do array
//array.unshift("Pedro");

//indexof mostra o indice de um item do array
// console.log(array.indexOf(true));
//splice apaga ou substitui um range de itens do array
//array.splice(0,3);

//slice retorna parte de um array existente
// let novoarray = array.slice(0,3);
// console.log(novoarray);
// console.log(array);

 // o que são objetos
// como declarar um objeto
let object = { propriedade1: 'valor1', propriedade2: 'valor2' }
// deve ser declarado entre chaves "{}";
console.log(object);

// assim como arrays as propriedades de objetos podem guardar quaisquer valores
// let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: { objetoInterno: 'objeto Interno' } };

/* // como acessar propriedades de objetos
// usando ponto "."
console.log(object.objectInterno); */

// manipulando objeto
// desestruturando objeto
/* let string = object.string;
let number = object.number;
let boolean = object.boolean; */


// desestruturando usando chaves
// let { string, number, boolean } = object;
// console.log(string, number, boolean);
