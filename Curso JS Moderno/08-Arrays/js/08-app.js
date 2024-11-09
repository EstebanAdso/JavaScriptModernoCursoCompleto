const producto ={
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}


const{nombre} = producto

console.log(nombre)

//Destructuring en Arreglos
const numeros = [10,20,30,40,50];

//Nosotros definimos el nombre por que su valor esta definido en la posicion
const [primero, segundo, tercero]  = numeros;

console.log(primero, tercero)

//Si solo queremos uno en especifico - por cada numero que no queramos definir necesitamos usar la coma. 
const [, , , cuarto] = numeros
console.log(cuarto)