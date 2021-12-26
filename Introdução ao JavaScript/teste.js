//var x = 0; Comentário de uma linha
/*var x = 0; Comentário de várias linhas
var y = 1;*/ 
/*var total = 0.00; // Variáveis podem ser alteradas em runtime
var desconto = 0.20;
const PRECO = 2.00; //Constantes Não podem ser alteradas em runtime
total = PRECO - desconto;*/

function calculaDesconto(preco,desconto){
    console.log = preco - desconto;
return preco - desconto;
}

var total = calculaDesconto(2.00 , 0.20); //chamando a função