//Acceder valores del objeto y asignarles una variable
//Object Literal (Json)
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

console.log(producto.nombre)

//Forma anterior.
const nombre = producto.nombre
console.log(nombre)

//Nueva forma, Destructuring
const {precio, disponible} = producto
console.log(precio, disponible)
