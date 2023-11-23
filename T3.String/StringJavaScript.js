const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function questionAsync(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

(async function () {
  const nombreCompleto = await questionAsync("Introduce tu nombre y apellidos:");

  const tamanoNombre = nombreCompleto.length;
  const tamanoSinEspacios = nombreCompleto.replace(/\s/g, '').length;
  const nombreMinusculas = nombreCompleto.toLowerCase();
  const nombreMayusculas = nombreCompleto.toUpperCase();

  const partesNombre = nombreCompleto.split(' ');
  const nombre = partesNombre[0];
  const apellido1 = partesNombre[1] || '';
  const apellido2 = partesNombre[2] || '';

  const propuestaUsuario = nombre.toLowerCase() + (apellido1.length > 0 ? apellido1[0].toUpperCase() : '') + (apellido2.length > 0 ? apellido2[0].toUpperCase() : '');

  const contrasena = await questionAsync("Introduce tu contraseña:");

  const cumpleContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_\-@$%&])[A-Za-z\d_\-@$%&]{8,16}$/.test(contrasena);

  console.log(`Tamaño del nombre y apellidos: ${tamanoNombre}`);
  console.log(`Tamaño sin espacios: ${tamanoSinEspacios}`);
  console.log(`Nombre en minúsculas: ${nombreMinusculas}`);
  console.log(`Nombre en mayúsculas: ${nombreMayusculas}`);
  console.log(`Nombre: ${nombre}, Apellido1: ${apellido1}, Apellido2: ${apellido2}`);
  console.log(`Propuesta de nombre de usuario: ${propuestaUsuario}`);
  console.log(`La contraseña cumple con las premisas: ${cumpleContrasena ? 'Sí' : 'No'}`);

  rl.close();
})();
