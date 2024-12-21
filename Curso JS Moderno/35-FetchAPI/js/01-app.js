//Descargar contenido de txt
const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'data/datos.txt';

    //Dentro de fetch se pone la ruta del archivo -> fetch utiliza promesas
    fetch(url)
        .then(respuesta =>{
            console.log(respuesta);
            console.log(respuesta.status); //estado de la respuesta (200, 404, 500)
            console.log(respuesta.statusText); //texto de la respuesta (OK, Not Found, Internal Server Error)
            console.log(respuesta.url); //URL de la respuesta
            console.log(respuesta.type); //tipo de respuesta (basic, cors, error, opaque)

            return respuesta.text(); //retorna el contenido del archivo
        })
        .then(datos => { //datos es el contenido del archivo
            console.log(datos);
        })
        .catch(error => {
            console.error(error);
        });
}