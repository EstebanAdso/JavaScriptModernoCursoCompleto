function iniciarApp(){
    const resultado = document.querySelector('#resultado');
    const modal = new bootstrap.Modal('#modal',{})
    const selectCategorias = document.querySelector('#categorias');
    if(selectCategorias){
        selectCategorias.addEventListener('change', seleccionarCategoria);
        obtenerCategorias();
    }
    const favoritosDiv = document.querySelector('.favoritos');
    if(favoritosDiv){
        obtenerFavoritos();
    }

    

    function obtenerCategorias(){
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarCategorias(resultado.categories));
    }

    function mostrarCategorias(categorias = []){
        categorias.forEach(categoria =>{
            const option = document.createElement('option');
            option.value = categoria.strCategory;
            option.textContent = categoria.strCategory;
            selectCategorias.appendChild(option);
        })
    }

    function seleccionarCategoria(e){
        e.preventDefault();
        const categoria = e.target.value; // leer el contenido del evento
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarRecetas(resultado.meals));
    }

    function mostrarRecetas(recetas = []){
        limpiarHtml(resultado);

        const heading = document.createElement('h2');
        heading.classList.add('text-center', 'text-black', 'my-5');
        heading.textContent =  recetas.length ? 'Recetas' : 'No hay recetas, intenta con otra categoría';
        resultado.appendChild(heading);
        //Iterar en los resultados
        recetas.forEach(receta => {
            const {strMeal, strMealThumb, idMeal} = receta;
            const recetaContenedor = document.createElement('div');
            recetaContenedor.classList.add('col-md-4');

            const recetaCard = document.createElement('div');
            recetaCard.classList.add('card', 'mb-4');

            const recetaImagen = document.createElement('img');
            recetaImagen.classList.add('card-img-top');
            recetaImagen.alt = `Imagen de ${strMeal ?? receta.titulo}`;
            recetaImagen.src = strMealThumb ?? receta.img;

            const recetaCardBody = document.createElement('div');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('h3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent = strMeal ?? receta.titulo; 

            const recetaButton = document.createElement('button');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100');
            recetaButton.textContent = 'Ver Receta';
            recetaButton.onclick = () => {
                seleccionarReceta(idMeal ?? receta.id);
            }

            //Inyectar en el código Html
            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);
            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaCardBody);
            recetaContenedor.appendChild(recetaCard);

            resultado.appendChild(recetaContenedor);

        })
    }

    function seleccionarReceta(id){
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarRecetaModal(resultado.meals[0]));
    }

    function mostrarRecetaModal(receta){
        const {idMeal, strInstructions, strMeal, strMealThumb} = receta;
        //Añadir contenido al modal
        const modalTitle = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTitle.textContent = strMeal;
        modalBody.innerHTML = `
            <img src="${strMealThumb}" alt="${strMeal}" class="img-fluid mb-2">
            <p>${strInstructions}</p>
        `;

        //Mostrar cantidades e ingredientes
        for(let i = 1; i <= 20; i++){
            if(receta[`strIngredient${i}`]){
                const ingrediente = receta[`strIngredient${i}`];
                const cantidad = receta[`strMeasure${i}`];
                const ingredienteParrafo = document.createElement('p');
                ingredienteParrafo.innerHTML = `${cantidad} ${ingrediente}`;
                modalBody.appendChild(ingredienteParrafo);
            }
        }

        const modalFooter = document.querySelector('.modal .modal-footer');
        limpiarHtml(modalFooter);

        //Botones de cerrar y favoritos
        const btnFavorito = document.createElement('button');
        btnFavorito.classList.add('btn', 'btn-danger', 'col');
        btnFavorito.textContent = existeStorage(idMeal) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos';

        //Almacenar en local storage 
        btnFavorito.onclick = function(){

            if(existeStorage()){ //no agrega mas si ya existe
                eliminarFavorito(idMeal);
                btnFavorito.textContent = 'Agregar a Favoritos';
                mostrarToast('Receta eliminada de favoritos');
                return;
            }
            agregarFavorite({
                id: idMeal,
                titulo: strMeal,
                img: strMealThumb
            });
            mostrarToast('Receta agregada a favoritos');
            btnFavorito.textContent = 'Eliminar de Favoritos';
        };

        const btnCerrarModal = document.createElement('button');
        btnCerrarModal.classList.add('btn', 'btn-secondary', 'col');
        btnCerrarModal.textContent = 'Cerrar';
        btnCerrarModal.onclick = () => {
            modal.hide();
        }

        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrarModal);

        // Muestra el modal
        modal.show();
    }

    function agregarFavorite(receta){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        localStorage.setItem('favoritos', JSON.stringify([...favoritos, receta]));
    }

    function existeStorage(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        return favoritos.some(favorito => favorito.id === id); // con que uno cumpla la condicion retornara un true
    }

    function eliminarFavorito(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        const nuevosFavoritos = favoritos.filter(favorito => favorito.id !== id);
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    }

    function mostrarToast(mensaje){
        const toastDiv = document.querySelector('#toast');
        const toastBody = document.querySelector('.toast-body');
        const toast = new bootstrap.Toast(toastDiv);
        toastBody.textContent = mensaje;
        toast.show();
    }

    function limpiarHtml(selector){
        while(selector.firstChild){
            selector.removeChild(selector.firstChild);
        }
    }

    function obtenerFavoritos(){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        if(favoritos.length){
            mostrarRecetas(favoritos);
            return
        }

        const noFavoritos = document.createElement('p');
        noFavoritos.classList.add('text-center', 'text-black', 'fs-4');
        noFavoritos.textContent = 'No hay recetas favoritas';
        favoritosDiv.appendChild(noFavoritos);
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp);