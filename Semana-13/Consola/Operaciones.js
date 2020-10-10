const readline = require('readline-sync');

const Operaciones = {}

var a;
var b;


function suma(a, b) {
    a = readline.question('Dame el primer numero: ')
    b = readline.question('Dame el segundo numero: ')

    var resultado = parseFloat(a) + parseFloat(b);
    console.log('El resultado de la suma es ', resultado);
}


function resta(a, b) {
    a = readline.question('Dame el primer numero: ')
    b = readline.question('Dame el segundo numero: ')

    var resultado = parseFloat(a) - parseFloat(b);
    console.log('El resultado de la suma es ', resultado);
}

function multiplicacion(a, b) {
    a = readline.question('Dame el primer numero: ')
    b = readline.question('Dame el segundo numero: ')

    var resultado = parseFloat(a) * parseFloat(b);
    console.log('El resultado de la suma es ', resultado);
}

function division(a, b) {
    a = readline.question('Dame el primer numero: ')
    b = readline.question('Dame el segundo numero: ')

    var resultado = parseFloat(a) / parseFloat(b);
    console.log('El resultado de la suma es ', resultado);
}

module.exports = Operaciones;
Operaciones.suma = suma;
Operaciones.resta = resta;
Operaciones.multiplicacion = multiplicacion;
Operaciones.division = division;