//Iteradores en Javascript
//Crear nuestro propio iterador

function crearIterador(carrito){
    let i = 0;
    return{
        siguiente: () =>{
            const fin = ( i >= carrito.length);
            const valor = !fin ? carrito[i++] : undefined ; // si no llega al fin sumara uno mas al index sino sera undefined
            
            return{
                fin,
                valor
            }
        }
    }
}

const carrito = ['Producto1','Producto2','Producto 3'];

//Utilizar el iterador
const recorrerCarrito = crearIterador(carrito);
console.log(recorrerCarrito.siguiente()) //producto 1
console.log(recorrerCarrito.siguiente()) //producto 2
console.log(recorrerCarrito.siguiente()) //producto 3
console.log(recorrerCarrito.siguiente()) // undefined