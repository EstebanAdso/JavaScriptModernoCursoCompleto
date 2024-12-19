//WeakMap -> Map Debil -> no se puede acceder a la llave, ni el tamaño con el size
const producto = {
    idProducto : 10
}

const weakMap = new WeakMap()

weakMap.set(producto,'Monitor')

console.log(weakMap.has(producto)) // comprobar si existe
console.log(weakMap.get(producto)) // revisar el valor
weakMap.delete(producto)