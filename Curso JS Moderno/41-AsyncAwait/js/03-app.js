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

//Con declaration
const ejectutar = async () => {
    try {
        console.log(1 + 1);
        const respuesta = await descargarClientes();
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();