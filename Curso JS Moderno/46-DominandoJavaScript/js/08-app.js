//Self
//En el contexto global, this hace referencia al objeto global, en el caso de un navegador, window es el objeto global 

window.onload =() =>{
    console.log('Ventana lista')
}

window.nombre = 'Monitor 20 Pulgadas'; //lo llamaremos con self en lugar de this

const producto = {
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        return (`El producto: ${self.nombre} tiene un precio de: ${this.precio}`);
    }
}

console.log(producto.mostrarInfo())