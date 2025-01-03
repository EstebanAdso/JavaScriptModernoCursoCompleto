//Explicit Binding
// es cuando se llama a una función y se le dice a que objeto se refiere el this

function persona(el1, el2){
    console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const informacion = {
    nombre: 'Juan'
}

const musicaFavorita = ['Heavy Metal', 'Rock'];

// call es para llamar a la función y pasarle los argumentos
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

//segunda forma con apply -> es igual a call pero los argumentos se pasan en un array
persona.apply(informacion, musicaFavorita);

//tercera forma con bind -> es igual a call pero crea una nueva función
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();