//Promises
const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false;

    if(descuento){
        resolve('Descuento aplicado');
    } else {
        reject('No se pudo aplicar el descuento');
    }
});

aplicarDescuento
    .then(resultado =>{
        console.log(resultado);
    })
    .catch(error => {
        console.log(error);
    })

//Hay 3 valores posibles en los promises
//Fulfilled - El promise se cumplió
//Rejected - El promise no se cumplió
//Pending - Aún no se ha cumplido y tampoco fue rechazado