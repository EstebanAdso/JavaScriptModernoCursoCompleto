//Event Loop
//Es un ciclo de eventos que se ejecutan en el navegador

console.log('Primero');

setTimeout(() => {
    console.log('Segundo')
}, 0);

console.log('Tercero');

setTimeout(() => {
    console.log('Cuarto')
}, 0);

new Promise(function(resolve) {
    resolve('Quinto');
}).then(console.log);

function hola() {
    console.log('Penultimo');
}
hola(); 
    
    
console.log('Ultimo')
