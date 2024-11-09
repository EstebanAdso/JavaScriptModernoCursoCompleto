const meses = ['Enero','Febrero','Marzo']

//Añadir nuevos elementos al final del arreglo de forma dinamica sin conocer el final del arreglo

meses.push('Abril') //Añade el elemento en el ultimo lugar
meses.push('Mayo')

console.table(meses)

//------------------------------------------------------------------------------------------------
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

carrito.push(producto, producto2, producto3)

console.table(carrito)