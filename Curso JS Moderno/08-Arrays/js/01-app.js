//Agrupar elementos de un mismo tipo. (solo tiene valores)
const numeros = [1,2,3,4,5,6,7,8,9]

console.log(numeros)

//Segunda manera de crear arreglos
const meses = new Array('Enero','Febrero','Marzo')
console.log(meses)


//RECORRER EL INDICE
console.log(numeros[2])

//Recorrer un arreglo mediante un For
for(i=0; i < numeros.length; i++){
    console.log(numeros[i])
}

//Tambien hay arreglos con diferente tipo de datos
const deTodo = ['Hola', 10, true, "si", null]
console.log(deTodo)