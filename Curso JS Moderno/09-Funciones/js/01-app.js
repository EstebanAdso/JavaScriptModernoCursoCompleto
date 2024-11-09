//Las funciones son reutilizables

//declaracion de funcion(Function Declaraction)
//              PARAMETROS
function sumar (num1, num2) {
    let resultado = num1 + num2
    console.log(resultado)
}

sumar(2,3)
sumar(10,20)

//Expresion de Funcion (Function Expression) - Con una variable
const restar = function(num1, num2){
    let resultado = num1 -  num2
    console.log(resultado)
}

restar(10,3)