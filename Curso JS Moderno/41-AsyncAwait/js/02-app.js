function descargarClientes(){
    //resolve cuando todo esta bien y reject cuando hay un error
    return new Promise((resolve, reject) =>{
        const error = false;

        setTimeout(() => {
            if(!error){
                resolve('El listado de clientes se descargo correctamente');
            }else{
                reject('Error en la conexion');
            }
        }, 3000);
    })
}

//Async await
//async -> indica que una funcion es asincrona
//await -> espera a que una linea de codigo termine de ejecutarse
async function ejecutar(){
    try {
        const respuesta = await descargarClientes();
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}