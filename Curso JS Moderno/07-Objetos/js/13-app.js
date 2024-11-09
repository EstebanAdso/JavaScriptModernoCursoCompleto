//METODOS PARA OBJETOS
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
}

console.log(Object.keys(producto)) //nos trae las llaves del objeto.
console.log(Object.values(producto)) // nos trae los valores de las llaves
console.log(Object.entries(producto)) //nos trae llave y valor en pares 