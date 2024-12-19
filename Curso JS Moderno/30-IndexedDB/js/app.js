//Api en javascript para almacenar grandes cantidades de datos estructurados (base de datos) -> soporta todos los tipos de datos
//al funcionar en el navegador no se tiene que almacenar informacion sensible
//podemos entrar an Application e ir a indexedDB
document.addEventListener('DOMContentLoaded', () =>{
    crmDB();

    setTimeout(() =>{
        crearCliente()
    }, 5000)
})

let DB;

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

        DB = crmDB.result // resultado de la creacion
    }
    //configuracion de la base de datos
    crmDB.onupgradeneeded = function(e){
        const db = e.target.result

        const objectStore = db.createObjectStore('crm',{
            keyPath: 'crm',
            autoIncrement: true //incremental como en base de datos
        })

        objectStore.createIndex('nombre', 'nombre', {unique: false})
        objectStore.createIndex('email', 'email', {unique: true})
        objectStore.createIndex('telefono', 'telefono', {unique: false})

        console.log('Columnas creadas')
    }
}

//se utiliza transacciones
function crearCliente(){
    let transaction = DB.transaction(['crm'],'readwrite');

    transaction.oncomplete = function(){
        console.log('transaccion completada')
    }

    transaction.onerror = function(){
        console.log('Hubo un error en la transaccion')
    }

    const objectStore = transaction.objectStore('crm')

    const nuevoCliente ={
        nombre: 'Juan',
        telefono: 23432432,
        email: 'correo@gmail.com'
    }

    const peticion = objectStore.add(nuevoCliente) //añadir nuevo cliente
    console.log( peticion)
}