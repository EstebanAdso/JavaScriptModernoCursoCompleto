//Closures
//un closure es una función que recuerda el estado de las variables al momento de ser invocada, y conserva este estado a través de re

const obtenerCliente = () => {
    const nombre = 'Juan';

    function muestraNombre(){ //de esta manera podremos usar la variable nombre de manera global
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente(); //Juan