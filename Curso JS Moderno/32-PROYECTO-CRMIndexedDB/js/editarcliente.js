(function(){
    let DB;
    let idCliente;
    const formulario = document.getElementById('formulario');
    const nombreInput = document.querySelector('#nombre').value = nombre;
    const emailInput = document.querySelector('#email').value = email;
    const telefonoInput = document.querySelector('#telefono').value = telefono;
    const empresaInput = document.querySelector('#empresa').value = empresa;

    document.addEventListener('DOMContentLoaded', ()=>{
        conectarDB();

        //Actualiza el registro
        formulario.addEventListener('submit', actualizarCliente);

        //Verificar el id de la url
        const parametrosURL = new URLSearchParams(window.location.search); //mirar parametros de la url

        idCliente = parametrosURL.get('id');

        if(idCliente){
            setTimeout(() => {
                obtenerCliente(idCliente)
            }, 1000);
        } 
    });

    function actualizarCliente(e){
        e.preventDefault();

        if(nombreInput.value === '' || emailInput.value === '' || telefonoInput.value === '' || empresaInput.value === '' ){
            imprimirAlerta('Todos los campos son obligatorios', 'error')
            return;
        }

        //actualizar cliente
        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: Number(idCliente)
        }

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        objectStore.put(clienteActualizado);

        transaction.oncomplete = function(){
            imprimirAlerta('Editado correctamente')

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        }

        transaction.onerror = function(){
            console.log('Hubo un error')
        }
    }



    function obtenerCliente(id){
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        
        const cliente = objectStore.openCursor();
        cliente.onsuccess = function(e){
            const cursor = e.target.result;

            if(cursor){
                if(cursor.value.id === Number(id)){
                    llenarFormulario(cursor.value)
                }
                cursor.continue();
            }
        }
    }

    function llenarFormulario(datosCliente){
        const {nombre, email, telefono, empresa} = datosCliente;

        document.querySelector('#nombre').value = nombre;
        document.querySelector('#email').value = email;
        document.querySelector('#telefono').value = telefono;
        document.querySelector('#empresa').value = empresa;
    }

    function conectarDB(){
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function(){
            console.log('hubo un error')
        }

        abrirConexion.onsuccess = function(){
            DB = abrirConexion.result; //Instancia de la conexion de la base de datos.
            console.log('exitoso')
        }
    }
})();