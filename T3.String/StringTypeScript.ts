import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function questionAsync(prompt: string): Promise<string> {
  return new Promise<string>((resolve) => {
    rl.question(prompt, resolve);
  });
}

(async function () {
  const nombreCompleto: string = await questionAsync("Introduce tu nombre y apellidos:");

  const tamanoNombre: number = nombreCompleto.length;
  const tamanoSinEspacios: number = nombreCompleto.replace(/\s/g, '').length;
  const nombreMinusculas: string = nombreCompleto.toLowerCase();
  const nombreMayusculas: string = nombreCompleto.toUpperCase();

  const partesNombre: string[] = nombreCompleto.split(' ');
  const nombre: string = partesNombre[0];
  const apellido1: string = partesNombre[1] || '';
  const apellido2: string = partesNombre[2] || '';

  const propuestaUsuario: string = nombre.toLowerCase() + (apellido1.length > 0 ? apellido1[0].toUpperCase() : '') + (apellido2.length > 0 ? apellido2[0].toUpperCase() : '');

  const contrasena: string = await questionAsync("Introduce tu contraseña:");

  const cumpleContrasena: boolean = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_\-@$%&])[A-Za-z\d_\-@$%&]{8,16}$/.test(contrasena);

  console.log(`Tamaño del nombre y apellidos: ${tamanoNombre}`);
  console.log(`Tamaño sin espacios: ${tamanoSinEspacios}`);
  console.log(`Nombre en minúsculas: ${nombreMinusculas}`);
  console.log(`Nombre en mayúsculas: ${nombreMayusculas}`);
  console.log(`Nombre: ${nombre}, Apellido1: ${apellido1}, Apellido2: ${apellido2}`);
  console.log(`Propuesta de nombre de usuario: ${propuestaUsuario}`);
  console.log(`La contraseña cumple con las premisas: ${cumpleContrasena ? 'Sí' : 'No'}`);

  rl.close();
})();
