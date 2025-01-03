// Implicit Binding  
// es cuando se llama a una función y el this se refiere al objeto que la contiene

const usuario = {
    nombre: 'Juan',
    edad: 20,
    presentacion() {
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    },
    mascota: {
        nombre: 'Hook',
        edad: 1,
        presentacion() {
            console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
        }
    }
}

usuario.presentacion();
usuario.mascota.presentacion(); //En este caso el this se refiere al objeto mascota