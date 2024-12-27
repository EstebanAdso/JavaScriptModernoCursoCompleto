let cliente = {
    mesa: '',
    hora: '',
    pedido: []
}

const categorias = {
    1: 'Comidas',
    2: 'Bebidas',
    3: 'Postres'
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
    cliente = { ...cliente, mesa, hora };

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

function obtenerPlatillos() {
    const url = 'http://localhost:3000/platillos';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarPlatillos(resultado))
        .catch(error => console.log(error));
}

function mostrarPlatillos(platillos) {
    const contenido = document.querySelector('#platillos .contenido');

    platillos.forEach(platillo => {
        const row = document.createElement('DIV')
        row.classList.add('row', 'border-top', 'py-3')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-4')
        nombre.textContent = platillo.nombre;

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-3', 'fw-bold')
        precio.textContent = `$${platillo.precio}`;

        const categoria = document.createElement('DIV')
        categoria.classList.add('col-md-3')
        categoria.textContent = categorias[platillo.categoria];

        const inputCantidad = document.createElement('INPUT');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.value = 0
        inputCantidad.id = `producto-${platillo.id}`;
        inputCantidad.classList.add('form-control');

        //Funcion que detecta la cantidad y el platillo que se esta agregando.
        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value);
            agregarPlatillo({ ...platillo, cantidad })
        };

        const agregar = document.createElement('DIV');
        agregar.classList.add('col-md-2');
        agregar.appendChild(inputCantidad);

        row.appendChild(nombre)
        row.appendChild(precio)
        row.appendChild(categoria)
        row.appendChild(agregar)
        contenido.appendChild(row)
    })
}

function agregarPlatillo(producto) {
    //Extraer el pedido actual
    let { pedido } = cliente;

    //Revisar que la cantidad sea mayor a cero
    if (producto.cantidad > 0) {
        //Revisar si el producto ya esta en el pedido
        if (pedido.some(platillo => platillo.id === producto.id)) {
            //El articulo ya existe, actualizar la cantidad
            const pedidoActualizado = pedido.map(articulo => {
                if (articulo.id === producto.id) {
                    articulo.cantidad = producto.cantidad;
                }
                return articulo;
            });
            //Se asigna el pedido actualizado al cliente
            cliente.pedido = [...pedidoActualizado];
        } else {
            //El articulo no existe, agregarlo al pedido
            cliente.pedido = [...pedido, producto];
        }
    } else {
        //Eliminar elementos cuando la cantidad sea cero
        const resultado = pedido.filter(articulo => articulo.id !== producto.id);
        cliente.pedido = [...resultado];
    }
    limpiarHtml();
    if (cliente.pedido.length) {
        actualizarResumen();
    } else {
        mensajePedidoVacio();
    }

}

function actualizarResumen() {
    const contenido = document.querySelector('#resumen .contenido');

    const resumen = document.createElement('DIV');
    resumen.classList.add('col-md-12', 'card', 'py-5', 'mx-auto', 'text-center');

    const mesa = document.createElement('P');
    mesa.textContent = `Mesa: `;
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('SPAN');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');

    const hora = document.createElement('P');
    hora.textContent = `hora: `;
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('SPAN');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    //Agregar a los elementos padres
    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);

    //Titulo de la seccion
    const heading = document.createElement('H3');
    heading.textContent = 'Platillos consumidos';
    heading.classList.add('text-center', 'my-4');

    //Iterar sobre el array de pedidos.
    const grupo = document.createElement('UL');
    grupo.classList.add('list-group');
    const { pedido } = cliente;
    pedido.forEach(articulo => {
        const { nombre, precio, cantidad, id } = articulo;

        const lista = document.createElement('LI');
        lista.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        const nombreEL = document.createElement('H4');
        nombreEL.classList.add('my-4')
        nombreEL.textContent = nombre;

        //Cantidad del articulo
        const cantidadEl = document.createElement('P')
        cantidadEl.classList.add('my-4', 'fw-bold')
        cantidadEl.textContent = `Cantidad: ${cantidad}`;

        //Precio del articulo
        const precioEl = document.createElement('P');
        precioEl.classList.add('my-4', 'fw-bold')
        precioEl.textContent = `Precio: $${precio}`;

        //Subtotal del articulo
        const subtotalEl = document.createElement('P');
        subtotalEl.classList.add('my-4', 'fw-bold')
        subtotalEl.textContent = `Subtotal: ${calcularSubtotal(precio, cantidad)}`;

        //Boton para eliminar el articulo
        const btnEliminar = document.createElement('BUTTON')
        btnEliminar.classList.add('btn', 'btn-danger', 'fw-bold', 'my-4')
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = () => {
            eliminarProducto(id);
        }

        //Agregar elementos al li
        lista.appendChild(nombreEL);
        lista.appendChild(cantidadEl);
        lista.appendChild(precioEl);
        lista.appendChild(subtotalEl);
        lista.appendChild(btnEliminar);

        //Agregar lista al grupo principal
        grupo.appendChild(lista);
    })

    //Agregar al cotenido
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(heading);
    resumen.appendChild(grupo);

    contenido.appendChild(resumen);

    //Mostrar al formulario de propinas
    formularioPropinas();
}

function limpiarHtml() {
    const contenido = document.querySelector('#resumen .contenido');
    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
}

function calcularSubtotal(num1, num2) {
    const resultado = num1 * num2;
    return `$${resultado}`;
}

function eliminarProducto(id) {
    const { pedido } = cliente;
    const resultado = pedido.filter(articulo => articulo.id !== id);
    cliente.pedido = [...resultado];

    limpiarHtml();

    if (cliente.pedido.length) {
        actualizarResumen();
    } else {
        mensajePedidoVacio();
    }

    //El producto se elimino por lo tanto regresar la cantidad a cero en el formulario
    const productoEliminado = `#producto-${id}`;
    const inputEliminado = document.querySelector(productoEliminado);
    inputEliminado.value = 0;
}

function mensajePedidoVacio() {
    const contenido = document.querySelector('#resumen .contenido');
    const texto = document.createElement('DIV');
    texto.classList.add('col-md-12', 'card', 'py-5', 'mx-auto', 'text-center');
    texto.textContent = 'Aun no hay platillos en el pedido';
    contenido.appendChild(texto);
}

function formularioPropinas() {
    const contenido = document.querySelector('#resumen .contenido');

    const formulario = document.createElement('DIV');
    formulario.classList.add('col-md-6', 'card', 'py-5', 'mx-auto', 'text-center', 'card', 'shadow');
    const heading = document.createElement('H3');
    heading.textContent = 'Propinas';
    heading.classList.add('text-center', 'my-4');

    //Radio Button 10%
    const radio10 = document.createElement('INPUT');
    radio10.type = 'radio';
    radio10.name = 'propina';
    radio10.value = "10";
    radio10.classList.add('form-check-input', 'me-2');
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement('LABEL');
    radio10Label.textContent = '10%';
    radio10Label.classList.add('form-check-label', 'me-4');

    const radio10Div = document.createElement('DIV');
    radio10Div.classList.add('form-check');

    //Radio Button 25%
    const radio25 = document.createElement('INPUT');
    radio25.type = 'radio';
    radio25.name = 'propina';
    radio25.value = "25";
    radio25.classList.add('form-check-input', 'me-2');
    radio25.onclick = calcularPropina;

    const radio25Label = document.createElement('LABEL');
    radio25Label.textContent = '25%';
    radio25Label.classList.add('form-check-label', 'me-4');

    const radio25Div = document.createElement('DIV');
    radio25Div.classList.add('form-check');

    //Radio Button 50%
    const radio50 = document.createElement('INPUT');
    radio50.type = 'radio';
    radio50.name = 'propina';
    radio50.value = "50";
    radio50.classList.add('form-check-input', 'me-2');
    radio50.onclick = calcularPropina;

    const radio50Label = document.createElement('LABEL');
    radio50Label.textContent = '50%';
    radio50Label.classList.add('form-check-label', 'me-4');

    const radio50Div = document.createElement('DIV');
    radio50Div.classList.add('form-check');


    radio10Div.appendChild(radio10);
    radio10Div.appendChild(radio10Label);
    radio25Div.appendChild(radio25);
    radio25Div.appendChild(radio25Label);
    radio50Div.appendChild(radio50);
    radio50Div.appendChild(radio50Label);

    formulario.appendChild(heading);
    contenido.appendChild(formulario);
    formulario.appendChild(radio10Div);
    formulario.appendChild(radio25Div);
    formulario.appendChild(radio50Div);
}


function calcularPropina(){

    const {pedido} = cliente;
    let subtotal = 0;

    //Calcular el subtotal a pagar
    pedido.forEach(articulo =>{
        subtotal += articulo.precio * articulo.cantidad;
    });

    //seleccionar el radio con la propina seleccionada
    const propinaSeleccionada = document.querySelector('input[name="propina"]:checked').value;

    //Calcular la propina
    const propina = ((subtotal * parseInt(propinaSeleccionada)) / 100);

    //Calcular el total a pagar
    const total = subtotal + propina;

    mostrarTotalHtml(subtotal, total, propina);
}

function mostrarTotalHtml(subtotal, total, propina){
    const contenido = document.querySelector('#resumen .contenido');

    const totalHtml = document.createElement('DIV');
    totalHtml.classList.add('col-md-6', 'card', 'py-5', 'mx-auto', 'text-center', 'card', 'shadow');

    const subtotalHtml = document.createElement('P');
    subtotalHtml.classList.add('fw-bold');
    subtotalHtml.textContent = `Subtotal: $${subtotal}`;

    const propinaHtml = document.createElement('P');
    propinaHtml.classList.add('fw-bold');
    propinaHtml.textContent = `Propina: $${propina}`;

    const totalHtmlElement = document.createElement('P');
    totalHtmlElement.classList.add('fw-bold');
    totalHtmlElement.textContent = `Total: $${total}`;

    totalHtml.appendChild(subtotalHtml);
    totalHtml.appendChild(propinaHtml);
    totalHtml.appendChild(totalHtmlElement);

    contenido.appendChild(totalHtml);
}