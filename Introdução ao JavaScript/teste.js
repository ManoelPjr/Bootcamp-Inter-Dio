//var x = 0; Comentário de uma linha
/*var x = 0; Comentário de várias linhas
var y = 1;*/ 
/*var total = 0.00; // Variáveis podem ser alteradas em runtime
var desconto = 0.20;
const PRECO = 2.00; //Constantes Não podem ser alteradas em runtime
total = PRECO - desconto;*/

function retornaNumerosPares(array){
    let numerosPares = [];
    for(let i = 0; i<array.length; i++){
        if (array[i] % 2 === 0){
            numerosPares.push(array[i]);
        }else {
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log('Os números pares são: ', numerosPares);
}
let array = [1, 2, 4, 5, 7, 8];
retornaNumerosPares(array);