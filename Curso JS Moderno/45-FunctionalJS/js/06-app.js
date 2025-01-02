//Funciones puras
//Una función pura es una función que, dado el mismo input, siempre retornará el mismo output y no tiene efectos secundarios.

const duplicar = (numero) =>{
    return numero * 2;
}

const numero1 = 20;

const resultado = duplicar(numero1)

console.log(resultado);