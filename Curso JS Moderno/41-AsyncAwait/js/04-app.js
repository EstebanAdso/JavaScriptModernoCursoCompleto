function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

function descargarNuevosPedidos(){
    return new Promise(resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    });
}

//llamar a dos funciones asincronas
const app = async () =>{
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarNuevosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        //Mejorar el tiempo de respuesta
        const resultado = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

