//CALLBACk
const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra', 'Irlanda'];

function nuevoPais(pais, callback){
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises(){
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        });
    }, 1000);
}

mostrarPaises();

//Refresca y agrega el nuevo valor
nuevoPais('Alemania', mostrarPaises);
