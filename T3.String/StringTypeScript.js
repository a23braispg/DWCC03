"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function questionAsync(prompt) {
    return new Promise(function (resolve) {
        rl.question(prompt, resolve);
    });
}
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var nombreCompleto, tamanoNombre, tamanoSinEspacios, nombreMinusculas, nombreMayusculas, partesNombre, nombre, apellido1, apellido2, propuestaUsuario, contrasena, cumpleContrasena;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, questionAsync("Introduce tu nombre y apellidos:")];
                case 1:
                    nombreCompleto = _a.sent();
                    tamanoNombre = nombreCompleto.length;
                    tamanoSinEspacios = nombreCompleto.replace(/\s/g, '').length;
                    nombreMinusculas = nombreCompleto.toLowerCase();
                    nombreMayusculas = nombreCompleto.toUpperCase();
                    partesNombre = nombreCompleto.split(' ');
                    nombre = partesNombre[0];
                    apellido1 = partesNombre[1] || '';
                    apellido2 = partesNombre[2] || '';
                    propuestaUsuario = nombre.toLowerCase() + (apellido1.length > 0 ? apellido1[0].toUpperCase() : '') + (apellido2.length > 0 ? apellido2[0].toUpperCase() : '');
                    return [4 /*yield*/, questionAsync("Introduce tu contraseña:")];
                case 2:
                    contrasena = _a.sent();
                    cumpleContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_\-@$%&])[A-Za-z\d_\-@$%&]{8,16}$/.test(contrasena);
                    console.log("Tama\u00F1o del nombre y apellidos: ".concat(tamanoNombre));
                    console.log("Tama\u00F1o sin espacios: ".concat(tamanoSinEspacios));
                    console.log("Nombre en min\u00FAsculas: ".concat(nombreMinusculas));
                    console.log("Nombre en may\u00FAsculas: ".concat(nombreMayusculas));
                    console.log("Nombre: ".concat(nombre, ", Apellido1: ").concat(apellido1, ", Apellido2: ").concat(apellido2));
                    console.log("Propuesta de nombre de usuario: ".concat(propuestaUsuario));
                    console.log("La contrase\u00F1a cumple con las premisas: ".concat(cumpleContrasena ? 'Sí' : 'No'));
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
})();
