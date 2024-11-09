"use strict"
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

//Sellar el Objeto- No se pueden agregar ni eliminar propiedades pero si se pueden modificar
Object.seal( producto )
producto.nombre = "Carro de juego"

console.log(producto)
console.log(Object.isSealed(producto)) //producto sellado