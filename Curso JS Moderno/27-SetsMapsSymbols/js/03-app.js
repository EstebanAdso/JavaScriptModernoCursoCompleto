//Listas ordenadas con llave y valor
const cliente = new Map();

//Agregar elementos a un Map en lugar de add se usa Set
cliente.set('nombre','Karen')
cliente.set('tipo','premium')
cliente.set('saldo',3000)

console.log(cliente)
console.log(cliente.size) // tamaño del map
console.log(cliente.has('nombre')) //si tiene la llave
console.log(cliente.get('nombre')) //devuelve el valor

cliente.delete('saldo') // eliminar un dato
cliente.clear() //limpia todos los elementos


//Podemos crearlo de esta manera tambien
const paciente = new Map([['nombre', 'paciente'],['cuarto','No definido']])
paciente.set('dr','dr Asignado')

//reescribir un valor usando el mismo valor
paciente.set('nombre','Antonio')

//tambien se pueden iterar
paciente.forEach(datos =>{
    console.log(datos)
})