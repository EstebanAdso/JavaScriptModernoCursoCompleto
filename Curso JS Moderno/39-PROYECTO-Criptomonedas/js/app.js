const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

//esta función se encarga de llenar el select con las criptomonedas
const obtenerCriptomonedas = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas);
});

document.addEventListener('DOMContentLoaded', () =>{
    consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario);

    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
})

function consultarCriptomonedas(){
    //las 10 criptomonedas más populares
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'; 

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => obtenerCriptomonedas(resultado.Data))
        .then(criptomonedas => selectCriptomonedas(criptomonedas))
}

function selectCriptomonedas(criptomonedas){
    criptomonedas.forEach(cripto =>{
        const {FullName, Name} = cripto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;

        criptomonedasSelect.appendChild(option);
    })
}

function leerValor(e){
    objBusqueda[e.target.name] = e.target.value;
    console.log(objBusqueda);
}

function submitFormulario(e){
    e.preventDefault();

    //validar
    const {moneda, criptomoneda} = objBusqueda;

    if(moneda === '' || criptomoneda === ''){
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    //consultar la API con los resultados
    consultarApi();
}

function mostrarAlerta(mensaje){
    const existeError = document.querySelector('.error');

    if(!existeError){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
    
        divMensaje.textContent = mensaje;
    
        formulario.appendChild(divMensaje);
    
        setTimeout(() =>{
            divMensaje.remove();
        }, 3000);
    }
}

function consultarApi(){
    const {moneda, criptomoneda} = objBusqueda;

    const url =  `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            mostrarCotizacionHTML(resultado.DISPLAY[criptomoneda][moneda]);
        })
}

function mostrarCotizacionHTML(cotizacion){
    limpiarHtml();

    const  {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `Precio más alto del día: <span>${HIGHDAY}</span>`;

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `Precio más bajo del día: <span>${LOWDAY}</span>`;

    const UltimasHoras = document.createElement('p');
    UltimasHoras.innerHTML = `Ultimas horas: <span>${CHANGEPCT24HOUR}%</span>`;

    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `Ultima actualización: <span>${LASTUPDATE}</span>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimaActualizacion);
}

function limpiarHtml(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpinner(){
    limpiarHtml();

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;

    resultado.appendChild(spinner);
}