// Lista de valores sin duplicado -> como Un array pero sin registros duplicados
const carrito = new Set();
//Agregar elementos al Set -> con add
carrito.add('Camisa')
carrito.add('Disco #1')
carrito.add('Disco #2')
carrito.add('Disco #1') //No agregara este porque ya existe, tenemos que tener en cuenta que es sencible a mayusculas y contaria como algo nuevo
carrito.add('Disco #3')

console.log(carrito.has('Camisa')) //revisa si existe ese elemento.
carrito.delete('Disco #3') //Eliminar un elemento del Set

carrito.clear() //Vacia todos los elementos del Set

carrito.add('Camisa')
carrito.add('Disco #1')
carrito.add('Disco #2')
carrito.add('Disco #1') //No agregara este porque ya existe, tenemos que tener en cuenta que es sencible a mayusculas y contaria como algo nuevo
carrito.add('Disco #3')

//lOS SET son iterables
carrito.forEach(producto =>{
    console.log(producto)
})

console.log(carrito.size) //Tamaño total del Set

//Del siguiente arreglo eliminar los duplicados
const numeros = [10,20,30,40,50,10,20]

const noDuplicados = new Set(numeros)
console.log(noDuplicados)