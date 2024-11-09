const producto = 'Monitor 20 Pulgadas' 
console.log(producto)
//Remplazar una palabra por otra
console.log(producto.replace('Pulgadas','"'))

//Cortar una parte de una cadena de texto (indicamos el caracter de inicio y el de final)
console.log(producto.slice(4,9))

//Alternativa a slice 
console.log(producto.substring(0,10))

const usuario = 'Juan'
console.log(usuario.charAt(1)) //Nos trae el numero de caracter asignado - comienza desde el cero