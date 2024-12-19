//Creacion de objetos

//Object Literal
const cliente = {
    nombre: 'Juan',
    precio: 400
}

console.log(cliente)

//Object Constructor
function Cliente (nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const esteban = new Cliente('esteban', 1000)
console.log(esteban)