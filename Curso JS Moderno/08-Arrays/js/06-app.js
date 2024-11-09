//Agregar elementos al carrito con Spread Operator

const carrito = []


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

//De esta forma declarativa no modificacmos el carrito sino el resultado.
//a Diferencia de push que es imperativa si modifica el carrito.
let resultado = [...carrito, producto, producto2, producto3]

console.table(resultado)