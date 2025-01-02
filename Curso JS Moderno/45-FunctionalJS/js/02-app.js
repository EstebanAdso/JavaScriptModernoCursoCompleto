//Pasar funciones como argumentos   
const suma = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

const sumarOMultiplicar = fn => fn(3, 4);

console.log(sumarOMultiplicar(suma)); //funcion como argumento.
console.log(sumarOMultiplicar(multiplicar)); //funcion como argumento.