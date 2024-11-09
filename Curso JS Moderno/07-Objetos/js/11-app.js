const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

console.log(producto)

producto.mostrarInfo()

//This se refiere a la propiedad dentro del objeto que fue declarado y se refiere a el.