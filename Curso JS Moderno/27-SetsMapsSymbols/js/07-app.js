//Generadores en JavaScript
//Una funcon que usa el iterador

//siempre toca colocarle un * antes del nombre de la funcion para que sea un generador
function *crearGenerador(){
    //Valores a los cuales nuestro generador va a iterar
    yield 1;
    yield 'Juan';
    yield 3+3;
    yield true;
}

//CADA VEZ QUE HAGAMOS NEXT SEGUIRA AL SIGUIENTE ELEMENTO ITERANDO POR CADA CAMPO
const iterador = crearGenerador();
console.log(iterador)
console.log(iterador.next()) // funcion de el generador
console.log(iterador.next().value) // podemos revisar el valor
console.log(iterador.next().done) // podemos revisar el valor
console.log(iterador.next().value) // podemos revisar el valor
console.log(iterador.next().value) // podemos revisar el valor
console.log(iterador)
//Marcada como Closes cuando itere sobre todos

function *generadorCarrito(carrito){
    for(let i = 0; i < carrito.length; i++){
        yield carrito[i];
    }
}

const carrito =['Producto1', 'Producto2', 'Producto3']

const iterador2 = generadorCarrito(carrito)
console.log(iterador2.next())
console.log(iterador2.next())
console.log(iterador2.next())
console.log(iterador2.next())