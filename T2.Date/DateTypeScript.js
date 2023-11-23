"use strict";
exports.__esModule = true;
function diasRestantes() {
    var hoy = new Date();
    var finDeCurso = new Date(hoy.getFullYear(), 5, 25);
    if (hoy > finDeCurso) {
        finDeCurso = new Date(hoy.getFullYear() + 1, 5, 25);
    }
    var milisegundosPorDia = 24 * 60 * 60 * 1000;
    var diasRestantes = Math.ceil((finDeCurso.getTime() - hoy.getTime()) / milisegundosPorDia);
    console.log("Quedan ".concat(diasRestantes, " d\u00EDas hasta el final del curso."));
}
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function findFinesDeSemana() {
    rl.question('Introduce o día e mes do teu aniversario (por exemplo, "17/08"): ', function (respuesta) {
        var partesFecha = respuesta.split('/');
        var dia = parseInt(partesFecha[0], 10);
        var mes = parseInt(partesFecha[1], 10) - 1;
        var anioActual = new Date().getFullYear();
        var fechaAniversario = new Date(anioActual, mes, dia);
        var añosEnFinDeSemana = '';
        for (var i = anioActual; i <= 2100; i++) {
            fechaAniversario.setFullYear(i);
            var diaSemana = fechaAniversario.getDay();
            if (diaSemana === 0 || diaSemana === 6) {
                if (añosEnFinDeSemana !== '') {
                    añosEnFinDeSemana += '-';
                }
                añosEnFinDeSemana += i;
            }
        }
        console.log('Anos no que o teu aniversario vai caer en fin de semana:');
        console.log(añosEnFinDeSemana);
        rl.close();
    });
}
function mostrarFecha(formato) {
    var opcionesFormato = {
        1: 'DD/MM/YYYY',
        2: 'dddd, DD [de] MMMM [de] YYYY',
        3: 'dddd, MMMM DD, YYYY'
    };
    var fechaActual = new Date();
    var formatoFecha = opcionesFormato[formato] || opcionesFormato[1];
    var dia = fechaActual.getDate().toString().padStart(2, '0');
    var mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    var anio = fechaActual.getFullYear();
    var fechaFormateada;
    switch (formato) {
        case 1:
            fechaFormateada = "".concat(dia, "/").concat(mes, "/").concat(anio);
            break;
        case 2:
            fechaFormateada = "".concat(obtenerNombreDiaSemana(fechaActual.getDay()), ", ").concat(dia, " de ").concat(obtenerNombreMes(fechaActual.getMonth()), " de ").concat(anio);
            break;
        case 3:
            fechaFormateada = "".concat(obtenerNombreDiaSemana(fechaActual.getDay()), ", ").concat(obtenerNombreMes(fechaActual.getMonth()), " ").concat(dia, ", ").concat(anio);
            break;
        default:
            fechaFormateada = 'Formato no válido';
    }
    console.log("".concat(formato, ". ").concat(fechaFormateada));
}
function obtenerNombreDiaSemana(diaSemana) {
    var diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    return diasSemana[diaSemana];
}
function obtenerNombreMes(mes) {
    var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return meses[mes];
}
function mostrarHora(formato) {
    var opcionesFormato = {
        1: 'HH:mm:ss',
        2: 'hh:mm A'
    };
    var horaActual = new Date();
    var formatoHora = opcionesFormato[formato] || opcionesFormato[1];
    var horaFormateada = Intl.DateTimeFormat('es-ES', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: formato === 2
    })
        .formatToParts(horaActual)
        .map(function (part) {
        switch (part.type) {
            case 'hour':
                return (formato === 2) ? (parseInt(part.value) % 12 || 12).toString() : part.value;
            default:
                return part.value;
        }
    })
        .join('');
    console.log(horaFormateada);
}
diasRestantes();
mostrarFecha(1);
mostrarFecha(2);
mostrarFecha(3);
mostrarHora(1);
mostrarHora(2);
findFinesDeSemana();
