function retornarParametros(nombre, ci, email) {
    return " ".concat(nombre, " ").concat(ci, " ").concat(email);
}
var nombre = "jose ";
var ci = "142477 ";
var email = "arguet@gmail.com";
var retornar = retornarParametros(nombre, ci, email);
console.log(retornar);
