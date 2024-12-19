//Symbols -> permite crear una propiedad unica, no hay dos iguales
const sym = Symbol()
const sym2 = Symbol()

if(sym === sym2){
    console.log('Son iguales!')
}else{
    console.log('Son diferentes') // -> nunca seran iguales
}

const nombre = Symbol()
const apellido = Symbol()

const persona = {}

//Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Juan'
persona[apellido] = 'De la Torre'
persona.tipoCliente = 'Premium'
persona.saldo = 50

console.log(persona)
console.log(persona[nombre]) // para acceder tenemos que usar los corchetes cuando es symbol en lugar de .

//Las propiedades que utilizan un symbol no son iterables
for(let i in persona){
    console.log(i)
}

//Podemos definir una descripcion del symbol
const nombreCliente = Symbol('Nombre del cliente')
const cliente = {}

cliente[nombreCliente] = 'Pedro'

console.log(cliente) // aparecera en la consola con la descripcion y el nombre.