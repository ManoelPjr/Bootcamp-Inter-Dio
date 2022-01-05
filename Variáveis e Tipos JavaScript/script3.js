// arrays e abjetos

var meuArray=[1,2,3,4];
let pessoa = {
    nome: 'Manoel',
    sobrenome: 'Pedro',
    idade: 51,
    mostraObjeto(){
        console.log(pessoa.nome, pessoa.sobrenome);
    }
}
pessoa.mostraObjeto();
console.log(meuArray[0]);
console.log(pessoa.idade);