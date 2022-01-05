var firstName = 'Manoel'; //VAR pode ser lida no escopo global
var lastName = 'Pedro'; //VAR pode ser lida no escopo global

if(firstName === 'Manoel'){
    var firstName = 'João';
    let lastName = 'Silva'; //LET pode ser lida apenas no escopo interno
    console.log(firstName,lastName);
}

console.log(firstName,lastName);