//Variables con Var
var producto = 'Monitor de 24 Pulgadas';
console.log(producto)

//podemos Reescribir la variable con Var y Let
producto = 'Monitor de 19 Pulgadas' 
console.log(producto)

//JavaScript es Dinamico asi que no es Tipado.
producto = 20; //cambiamos de un String a un entero y no arrojara un error por ser dinamico.
console.log(producto)


//Se pueden inicializar sin valor y asignarlo despues
var disponible;
disponible = tru;

disponible = false

//Inicializar multiples variables.
var categoria = 'Computadoras',
    marcar = 'Marca Famosa',
    calificacion = 5;

//No se pueden inicializar con un numero

//Recomendable usar Snake_case o camelCase