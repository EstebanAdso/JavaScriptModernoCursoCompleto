//Scope
//Scope es el alcance que tienen las variables en JavaScript

const cliente = 'Juan'; //Variable global
const clienteNombre = 'Janer'; //Variable global

function mostrarCliente() {
    console.log(cliente); //Variable global
    const clienteNombre = 'Pedro'; //Variable local
    console.log(clienteNombre); //Variable local -> tiene un prioridad mas alta la local aunque haya una global.
}

mostrarCliente();