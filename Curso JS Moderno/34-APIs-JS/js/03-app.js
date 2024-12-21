//Detectar si tenemos conexión a internet
window.addEventListener('online', actualizarEstado); // con conexión
window.addEventListener('offline', actualizarEstado); // sin conexión

function actualizarEstado() {
    if (navigator.onLine) {
        console.log('Si estas conectado');
    } else {
        console.log('No estas conectado');
    }
}