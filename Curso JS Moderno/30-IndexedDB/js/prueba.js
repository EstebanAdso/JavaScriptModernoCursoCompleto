//Api en javascript para almacenar grandes cantidades de datos estructurados (base de datos) -> soporta todos los tipos de datos
//al funcionar en el navegador no se tiene que almacenar informacion sensible
//podemos entrar an Application e ir a indexedDB
document.addEventListener('DOMContentLoaded', () =>{
    crmDB();
})

//crear base de datos y darle un nombre
function crmDB(){
    //Crear version de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // si hay un error
    crmDB.onerror = function(){
        console.log('Hubo un error al crear la base de datos')
    }
    // si se creo bien
    crmDB.onsuccess = function(){
        console.log('Base de datos creada con exito!')
    }
    //configuracion de la base de datos
    crmDB.onupgradeneeded = function(){
        //buen metodo para definir las columna y base de datos del proyecto.
        console.log('Este metodo solo se ejecuta una vez')
    }
}