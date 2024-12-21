//Cargar un JSON que es un array

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatosArray);

function obtenerDatosArray(){
    const url = 'data/empleados.json';

    fetch(url)
        .then(respuesta => respuesta.json()
        .then(resultado => mostrarHtmlArray(resultado))
        .catch(error => console.log(error))
    )    
}

function mostrarHtmlArray(empleados){
    const contenido = document.querySelector('.contenido');

    let html = '';

    empleados.forEach(empleado => {
        const {id, nombre, empresa, trabajo} = empleado; // destructuring
        html += `
            <p>Empleado: ${nombre}</p>
            <p>ID: ${id}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
        `;
    });

    contenido.innerHTML = html;
}