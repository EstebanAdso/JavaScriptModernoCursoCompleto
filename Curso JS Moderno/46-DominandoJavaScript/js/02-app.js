//Hoisting
//En JavaScript se puede llamar a una función antes de que esta sea declarada
//Esto se debe a que JavaScript primero busca las funciones y luego ejecuta el código

obtenerCliente('Juan'); //Se puede llamar antes de declarar la función

function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}



obtenerCliente2('Pedro');  //No se puede llamar antes de declarar la función

const obtenerCliente2 = function(nombre) { //al usarlo como variable no se puede llamar antes de declarar la función
    console.log(`El nombre del cliente es ${nombre}`);
}
