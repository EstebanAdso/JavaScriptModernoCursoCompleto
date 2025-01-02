//Funciones que retornan una funcion
const obtenerCliente = () => () => console.log('Juan');

const fn = obtenerCliente();

fn(); //Juan