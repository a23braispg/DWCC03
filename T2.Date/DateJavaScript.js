function diasRestantes() {
    const hoy = new Date();
    let finDeCurso = new Date(hoy.getFullYear(), 5, 25); 
    
    if (hoy > finDeCurso) {
        finDeCurso = new Date(hoy.getFullYear() + 1, 5, 25);
    }

    const milisegundosPorDia = 24 * 60 * 60 * 1000; 
    const diasRestantes = Math.ceil((finDeCurso - hoy) / milisegundosPorDia);

    console.log(`Quedan ${diasRestantes} días hasta el final del curso.`);
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findFinesDeSemana() {
    rl.question('Introduce o día e mes do teu aniversario (por exemplo, "17/08"): ', (respuesta) => {
        const partesFecha = respuesta.split('/');
        const dia = parseInt(partesFecha[0], 10);
        const mes = parseInt(partesFecha[1], 10) - 1; 

        const anioActual = new Date().getFullYear();
        let fechaAniversario = new Date(anioActual, mes, dia);
        let añosEnFinDeSemana = '';

        for (let i = anioActual; i <= 2100; i++) {
            fechaAniversario.setFullYear(i);

            const diaSemana = fechaAniversario.getDay();
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
    const opcionesFormato = {
        1: 'DD/MM/YYYY',
        2: 'dddd, DD [de] MMMM [de] YYYY',
        3: 'dddd, MMMM DD, YYYY'
    };

    const fechaActual = new Date();
    const formatoFecha = opcionesFormato[formato] || opcionesFormato[1];

    const dia = fechaActual.getDate().toString().padStart(2, '0');
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    const anio = fechaActual.getFullYear();

    let fechaFormateada;

    switch (formato) {
        case 1:
            fechaFormateada = `${dia}/${mes}/${anio}`;
            break;
        case 2:
            fechaFormateada = `${obtenerNombreDiaSemana(fechaActual.getDay())}, ${dia} de ${obtenerNombreMes(fechaActual.getMonth())} de ${anio}`;
            break;
        case 3:
            fechaFormateada = `${obtenerNombreDiaSemana(fechaActual.getDay())}, ${obtenerNombreMes(fechaActual.getMonth())} ${dia}, ${anio}`;
            break;
        default:
            fechaFormateada = 'Formato no válido';
    }

    console.log(`${formato}. ${fechaFormateada}`);
}

function obtenerNombreDiaSemana(diaSemana) {
    const diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    return diasSemana[diaSemana];
}

function obtenerNombreMes(mes) {
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return meses[mes];
}

function mostrarHora(formato) {
    const opcionesFormato = {
        1: 'HH:mm:ss',
        2: 'hh:mm A'
    };

    const horaActual = new Date();
    const formatoHora = opcionesFormato[formato] || opcionesFormato[1];

    const horaFormateada = Intl.DateTimeFormat('es-ES', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: formato === 2 })
        .formatToParts(horaActual)
        .map(part => {
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
