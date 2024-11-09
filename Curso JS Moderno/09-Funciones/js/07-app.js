//Como se comunican las funciones.

iniciarApp()

function iniciarApp(){
    console.log('Iniciando App.')
    segundaFuncion(); //llamar una funcion dentro de otra función.
}

function segundaFuncion(){
    console.log('Desde la segunda Funcion')
    usuarioAutenticado('Pablo')
}


function usuarioAutenticado(usuario){
    console.log('Autenticando usuario... espere')
    console.log('Usuario ' + usuario+  ' Autenticado exitosamente')
}