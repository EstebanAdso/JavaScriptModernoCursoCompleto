//Object Literal (Json)
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

console.log(producto)

//Agregar mas propiedades al objeto
producto.imagen = 'Imagen.Jpg'

console.log(producto)

//Eliminar alguna propiedad
delete producto.disponible

console.log(producto)