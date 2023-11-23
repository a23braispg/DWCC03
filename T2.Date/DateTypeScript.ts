function diasRestantes(): void {
    const hoy: Date = new Date();
    let finDeCurso: Date = new Date(hoy.getFullYear(), 5, 25);

    if (hoy > finDeCurso) {
        finDeCurso = new Date(hoy.getFullYear() + 1, 5, 25);
    }

    const milisegundosPorDia: number = 24 * 60 * 60 * 1000;
    const diasRestantes: number = Math.ceil((finDeCurso.getTime() - hoy.getTime()) / milisegundosPorDia);

    console.log(`Quedan ${diasRestantes} días hasta el final del curso.`);
}

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findFinesDeSemana(): void {
    rl.question('Introduce o día e mes do teu aniversario (por exemplo, "17/08"): ', (respuesta: string) => {
        const partesFecha: string[] = respuesta.split('/');
        const dia: number = parseInt(partesFecha[0], 10);
        const mes: number = parseInt(partesFecha[1], 10) - 1;

        const anioActual: number = new Date().getFullYear();
        let fechaAniversario: Date = new Date(anioActual, mes, dia);
        let añosEnFinDeSemana: string = '';

        for (let i = anioActual; i <= 2100; i++) {
            fechaAniversario.setFullYear(i);

            const diaSemana: number = fechaAniversario.getDay();
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

function mostrarFecha(formato: number): void {
    const opcionesFormato: { [key: number]: string } = {
        1: 'DD/MM/YYYY',
        2: 'dddd, DD [de] MMMM [de] YYYY',
        3: 'dddd, MMMM DD, YYYY'
    };

    const fechaActual: Date = new Date();
    const formatoFecha: string = opcionesFormato[formato] || opcionesFormato[1];

    const dia: string = fechaActual.getDate().toString().padStart(2, '0');
    const mes: string = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    const anio: number = fechaActual.getFullYear();

    let fechaFormateada: string;

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

function obtenerNombreDiaSemana(diaSemana: number): string {
    const diasSemana: string[] = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    return diasSemana[diaSemana];
}

function obtenerNombreMes(mes: number): string {
    const meses: string[] = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return meses[mes];
}

function mostrarHora(formato: number): void {
    const opcionesFormato: { [key: number]: string } = {
        1: 'HH:mm:ss',
        2: 'hh:mm A'
    };

    const horaActual: Date = new Date();
    const formatoHora: string = opcionesFormato[formato] || opcionesFormato[1];

    const horaFormateada: string = Intl.DateTimeFormat('es-ES', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: formato === 2
    })
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
