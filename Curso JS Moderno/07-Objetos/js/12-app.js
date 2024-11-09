//Otra forma de declarar objetos

//OBJECT LITERAL
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
}

//OBJECT CONSTRUCTOR - CONSTUCTOR PARECIDO AL DE JAVA
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true; //default
}

const producto2 = new Producto('Monitor 24 pulgadas', 4500)
console.log(producto2)