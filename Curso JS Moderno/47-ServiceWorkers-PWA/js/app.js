//Registrar un Service Worker
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
        .then(regitrado => console.log('Se instalo correctamente', regitrado))
        .catch(error => console.log('Falló la instalacion...', error))
}else{
    console.log('Service workers no soportados.')
}