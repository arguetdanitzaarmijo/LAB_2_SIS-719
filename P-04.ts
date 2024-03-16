function retornarParametros(nombre, ci, email) {
    return   ` ${nombre} ${ci} ${email}`;
}
const nombre = "jose ";
const ci= "142477 ";
const email = "arguet@gmail.com";
const retornar= retornarParametros(nombre,ci,email);
console.log(retornar);