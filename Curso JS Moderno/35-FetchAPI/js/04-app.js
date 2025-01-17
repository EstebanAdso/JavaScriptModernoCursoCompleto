//CARGAR UNA API
const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'https://picsum.photos/list';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHtml(resultado))
        .catch(error => console.log(error))
}

function mostrarHtml(imagenes){
    const contenido = document.querySelector('.contenido');
    let html = '';

    imagenes.forEach(imagen => {
        const {author, post_url} = imagen;
        html += `
            <p>Autor: ${author}</p>
            <a href="${post_url}" target="_blank">Ver imagen</a>
        `;
    });

    contenido.innerHTML = html;
}