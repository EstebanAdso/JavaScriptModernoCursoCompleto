//Crear un objeto dentro de otro objeto
//Object Literal (Json)
const producto = {
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

//Usar Destructuring en un objeto mas grande

const {nombre, informacion:{medida}} = producto

console.log(nombre, medida)