document.write("Ejemplo de If");

var fecha = new Date();
document.write("<br>");
document.write(fecha);

var diaSemana = fecha.getDay();
document.write("<br>");
document.write(diaSemana);

document.write("<br>");
var lunes = new Date(2020, 07, 03);
document.write("<br>");
document.write(lunes);
document.write("<br>");
document.write(lunes.getDay());

document.write("<br>");
var domingo = new Date(2020, 07, 09);
document.write("<br>");
document.write(domingo);
document.write("<br>");
document.write(domingo.getDay());

var a = 5;
a = '5';
var b = 'Mari';
document.write("<br>");
document.write("<br>");
document.write("<br>");

// = Asignar valor
// == Comparar contenido
// === Comparar contenido + Tipo de dato

if (a === '5') {
    document.write("El valor es 5 ");
}
if (b == 'Mari') {
    document.write('El nombre es Mari');
} else {
    document.write("Es otro valor");
}
document.write("<br>");
document.write("<br>");
document.write("<br>");


//Ejercicio

var diasSemana = new Date();
document.write(diasSemana);
document.write("<br>");
var diaActual = fecha.getDay();
document.write(diaActual);
document.write("<br>");
var hora = fecha.getHours();
document.write(hora);

document.write("<br>");
document.write("<br>");
document.write("<br>");

if (diaActual != 6) {
    document.write("Hoy no es día de curso");
} else {
    if (hora >= 11.30 && hora <= 12 && diaActual == 6) {
        document.write("Es la hora de la comida");
    } else {
        if (hora >= 09 && hora <= 14 && diaActual == 6) {
            document.write("Estoy clase");
        } else {
            document.write("Ya acabe el curso");
        }
    }
}