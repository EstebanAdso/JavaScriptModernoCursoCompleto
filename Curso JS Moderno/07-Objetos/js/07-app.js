//Object Literal (Json)
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

console.log(producto)

//Los objetos se pueden reasignar
producto.disponible = false
delete producto.precio;

console.log(producto)