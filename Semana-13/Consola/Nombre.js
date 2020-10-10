const readline = require('readline-sync');

function pedirNombre() {
    let nombre = readline.question('Escribe tu nombre: ');
    console.log('Hola', nombre);
}

exports.pedirNombre = pedirNombre;