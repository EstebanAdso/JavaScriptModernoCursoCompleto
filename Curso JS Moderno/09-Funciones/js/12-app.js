//Arror Function en un forEach  y un map
//Map
const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Television', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

//Forma con un metodo forEach
carrito.forEach( producto =>
    console.log(producto.nombre,producto.precio)
)

//La diferencia es que map crea un nuevo arrelo
carrito.map( producto =>
    console.log(producto.nombre,producto.precio)
)


