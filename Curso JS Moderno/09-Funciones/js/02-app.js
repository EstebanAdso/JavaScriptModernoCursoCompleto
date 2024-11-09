//declaracion de funcion(Function Declaraction)
function sumar (num1, num2) {
    let resultado = num1 + num2
    console.log(resultado)
}

sumar(2,3)

//Expresion de Funcion (Function Expression) - Con una variable
const restar = function(num1, num2){
    let resultado = num1 -  num2
    console.log(resultado)
}

restar(10,3)

//Diferencia en ambas
//en la declaracion de funciones podemos llamarla antes de crearla
//en la expresion de funciones tenemos que crearla primero y despues llamarla.