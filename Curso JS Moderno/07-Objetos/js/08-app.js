//Object Literal (Json)

//Para no poder modificar un objeto tenemos que hacer esto 
"use strict" //Habilitar el modo estricto

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

Object.freeze( producto) //congelado el objeto no se puede modificar. 

console.log(producto)
