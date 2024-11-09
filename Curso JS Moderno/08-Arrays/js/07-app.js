const carrito = [] //El carrito al inicio siempre estara vacio

//Agregar productos al carrito
const producto ={
    nombre: "Monitor 22 pulgadas",
    precio: 400
}

const producto2 ={
    nombre: "Monitor 27 pulgadas",
    precio: 900
}

const producto3 ={
    nombre: "Monitor 24 pulgadas",
    precio: 600
}

//Imperativa - modifica el carrito
carrito.push(producto, producto2, producto3)

console.table(carrito)

//Como eliminar ultimo elemento de un arreglo
carrito.pop()

console.table(carrito)

//Eliminar del inicio del arreglo
carrito.shift()

console.table(carrito)

//Eliminar un elemento especifico.
//pide dos elemetos, desde donde inicia a cortar y desde donde finaliza
carrito.splice(1,1)
console.table(carrito)