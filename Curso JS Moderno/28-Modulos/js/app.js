import nuevaFuncion,{ nombreCliente , ahorro, mostrarInformacion, Cliente } from "./cliente.js"; //importamos la constante de cliente.js
import { Empresa } from "./empresa.js";

nuevaFuncion()

console.log(nombreCliente)
console.log(ahorro)

//Exportanto e importando una funcion.
console.log(mostrarInformacion('Juan', 400))

const cliente = new Cliente(nombreCliente, ahorro)

console.log(cliente)

console.log(cliente.mostrarInformacion())

//Importar Empresa -> SOLO PUEDES TENER UNO ASI QUE LE PODREMOS COLOCAR ALGUN ALIAS AL IMPORTARLO FUERA DE LAS LLAVES
const empresa = new Empresa('Codigo con Juan', 300, 'Aprendizaje en linea')
console.log(empresa)