let cliente = {
    mesa: '',
    hora: '',
    pedido: []
}

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente)

function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    //Revisar si hay campos vacios
    const camposVacios = [mesa, hora].some(campo => campo === '');


    if (camposVacios) {
        //Verificar si hay una alerta
        const existeAlerta = document.querySelector('.invalid-feedback');

        if (!existeAlerta) {
            const alerta = document.createElement('div');
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
            alerta.textContent = 'Todos los campos son obligatorios';
            document.querySelector('.modal-body form').appendChild(alerta);

            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }
        return;
    }

    //Asignar datos del formulario al cliente
    cliente = {...cliente, mesa, hora };

    //Ocultar el modal
    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();

    mostrarSecciones();

    //Obtener platillos de la api JSON-SERVER
    obtenerPlatillos();
}

function mostrarSecciones() {
    const seleccionesOculatas = document.querySelectorAll('.d-none');
    seleccionesOculatas.forEach(seccion => seccion.classList.remove('d-none')); 
}

function obtenerPlatillos(){
    const url = 'http://localhost:3000/platillos';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarPlatillos(resultado))
        .catch(error => console.log(error));
}

function mostrarPlatillos(platillos){
    const contenido = document.querySelector('#platillos .contenido');

    platillos.forEach(platillo =>{
        const row = document.createElement('DIV')
        row.classList.add('row')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-4')
        nombre.textContent = platillo.nombre;

        row.appendChild(nombre)
        contenido.appendChild(row)
    })
}