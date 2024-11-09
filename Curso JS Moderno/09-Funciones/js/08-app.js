//Funciones que retornan valores.
function sumar(a,b){
    return a + b
}

//Ahora resultado tiene el valor
const resultado = sumar(2,4)
console.log(resultado)

//Ejemplo mas avanzado
let total = 0;
function agregarCarrito(precio){
    return total += precio
}

function calcularImpuesto(total){
    return total *  1.15
}

total = agregarCarrito(400)
total = agregarCarrito(100)

const totalPagar = calcularImpuesto(total);

console.log('El total sin impuesto es de: ' + total)
console.log('El total a pagar con impuesto es : ' + totalPagar)