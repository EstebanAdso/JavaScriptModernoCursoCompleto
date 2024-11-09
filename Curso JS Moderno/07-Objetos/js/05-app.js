//Object Literal (Json)
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

console.log(producto)


//Crear un objeto dentro de otro objeto
//Object Literal (Json)
const producto2 = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        peso: '1Kg',
        medida: '1M'
    },
    fabricacion:{
        pais: 'China'
    }
}

console.log(producto2)
console.log(producto2.informacion)
console.log(producto2.informacion.medida)
console.log(producto2.fabricacion.pais)
