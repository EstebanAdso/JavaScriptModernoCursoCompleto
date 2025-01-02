//Partials y currying
//Currying es una técnica en la que una función recibe un argumento y regresa otra función que espera el siguiente argumento, y así sucesivamente, hasta que todos los argumentos han sido pasados.
//Un partial es una función que recibe una función y argumentos, y regresa otra función que espera los argumentos restantes.

//Currying
const suma = (a,b,c ) => a + b + c;

//lo divide la funcion en partes
const parcial = a => b => c => suma(a,b,c);

const primerNumero = parcial(5);
const segundoNumero = primerNumero(4);
const resultado = segundoNumero(3);

//manera mas resumida
const resultado2 = parcial(5)(4)(3);

console.log(resultado);
console.log(resultado2);