//Module.

const modulo1 =(function(){
    const nombre = 'Juan';

    function hola(){
        console.log('Hola')
    }

    return{
        nombre,
        hola
    }
})();

//Module pattern

console.log(modulo1.nombre)
console.log(modulo1.hola())
