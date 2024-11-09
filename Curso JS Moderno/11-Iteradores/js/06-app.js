//For Each y Map

const pendientes = ['Tare','Comer','Trabajar','Estudiar']

//Necesitamos darle un parametro
pendientes.forEach((p) =>{
    console.log(p)
})

const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200, descuento: true},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

carrito.forEach(producto => console.log(producto.nombre))

//Map - crea un nuevo arreglo 
const carritoMap = carrito.map(producto => producto.nombre)
console.log(carritoMap)