//Coercion
//Coercion es la forma en la que JavaScript convierte un tipo de dato en otro
const numero1 = 20;
const numero2 = "40";

console.log(numero1 + numero2); //JavaScript convierte el número 20 en un string y lo concatena con el string "40"

console.log(Number(numero2) + numero1); //Convierte el string "40" en un número y lo suma con el número 20


const pedido = [1, 2, 3, 4];
console.log(pedido.toString()); //Convierte el array en un string