
//SIRVE PARA LAS VARIABLES SEAN PRIVADAS Y NO LAS LLAMEN EN OTRO JS, YA QUE SI EL HTML TIENE 3 JS NORMALMENTE LAS CONSTANTES
//LAS PODREMOS LLAMAR EN CUALQUIR JS VINCULADO A MENOS QUE TENGA IIFE HACIENDOLAS PRIVADAS SOLO DEL ARCHIVO JS
(function(){
    window.nombreCliente = 'Juan';
    console.log('Desde un IIFE')
})()

export const nombreCliente = 'Juan' //podemos exportar las variables para llamarlas en otros archivos -> para que funcione en el js tenemos que asignarle type module o importarlo normal en otro y eliminar el js ya que igual se comunicaran
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro){
    return `Cliente : ${nombre} tiene un ahorro de: ${ahorro}`
}


export class Cliente{
    constructor(nombre, ahorro){
        this.nombre  = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return `Cliente : ${this.nombre} tiene un ahorro de: ${this.ahorro}`
    }
}

//EXPORT DEFAULT -> no necesita estar dentro de las laves
export default function nuevaFuncion(){
    console.log('Este es el export default')
}