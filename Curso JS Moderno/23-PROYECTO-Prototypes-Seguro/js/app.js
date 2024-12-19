//Constuctores
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//Reliza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function(){
    /*
        1 = Americano incrementa en 1.15
        2 = Asiatico incrementa en 1.05
        1 = Europeo incrementa en 1.35
    */ 

    let cantidad;
    const base = 2000
 
   switch(this.marca){
        case '1':
            cantidad = base * 1.15
            break;
        case '2':
            cantidad = base * 1.05
            break;
        case '3':
            cantidad = base * 1.35
            break;
        default:
            break;
   }

   //leer el año
   const diferencia = 2020 - this.year;

   //Cada año que la diferencia es mayor, el costo va a reducirse un 3% el valor del seguro
   cantidad -= ((diferencia * 3) * cantidad) / 100;

   /*
        Si el seguro es basico se multiplica por un 30% mas
        Si el seguro es Completo se multiplica por un 50% mas
   */

    if(this.tipo === 'basico'){
        cantidad *= 1.30
    }else{
        cantidad *= 1.50
    }

    return cantidad
}

function UI(){}

//Llena las opciones de los años
UI.prototype.llenarOpciones = () =>{
    const max = 2020;
    const min = max - 20;

    const selectYear = document.querySelector('#year');
    
    for(let i = max; i > min; i--){
        let option = document.createElement('option')
        option.value = i;
        option.textContent = i
        selectYear.appendChild(option)
    }
    
}

//Muestra alertas en Pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo)=>{
    const div = document.createElement('div');
    if(tipo === 'error'){
        div.classList.add('error')
    }else{
        div.classList.add('correcto')
    }

    div.classList.add('mensaje', 'mt-10')
    div.textContent = mensaje;

    //Insertar en el Html
    const formulario = document.querySelector('#cotizar-seguro')
    //primero es donde lo vamos a insertar y despues la referencia
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove()
    }, 3000);
}

UI.prototype.mostrarResultado = (total, seguro) =>{
    const {year, tipo} = seguro
    //Crear el resultado
    const div = document.createElement('div')
    div.classList.add('mt-10')

    div.innerHTML = `
        <p class="header">Tu Resumen</p>
        <p class="font-bold">Total: ${total}, Año: ${year}, tipo: ${tipo}</p>
    `;

    const resultadoDiv = document.querySelector('#resultado')

    const spinner = document.querySelector('#cargando')
    //Mostrar el spinner
    if(seguro.marca === ''){
        spinner.style.display = 'none'// se borra el spinner
    }else{
        spinner.style.display = 'block'
        setTimeout(() => {
            spinner.style.display = 'none'// se borra el spinner
            resultadoDiv.appendChild(div) // se muestra el resultado 
        }, 3000);
    }
    
    
}

//Instanciar UI
const ui = new UI();
console.log(ui)

document.addEventListener('DOMContentLoaded', () =>{
    ui.llenarOpciones(); //LLENA EL SELECT OCN LOS AÑOS
})

//FUNCIONES
eventListener()

function eventListener(){
    const formulario = document.querySelector('#cotizar-seguro')
    formulario.addEventListener('submit', cotizarSeguro)
}

function cotizarSeguro(e){
    e.preventDefault()

    //Leer la marca seleccionada
    const marca = document.querySelector('#marca').value
    //Leer el año  seleccionada
    const year = document.querySelector('#year').value
    //Leer el tipo de cobertura seleccionada
    const tipo = document.querySelector('input[name="tipo"]:checked').value; //leer el input checkeado
    
    if(marca === '' || year === '' || tipo === ''){
       ui.mostrarMensaje('Todos los campos son obligatorios', 'error')
    }else{
        ui.mostrarMensaje('Cotizando...', 'correcto')
    }

    //Eliminar las cotizaciones previas
    const resultados = document.querySelector('#resultado div')
    if(resultados != null){
        resultados.remove()
    }

    //Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo)
    const total = seguro.cotizarSeguro()

    //Utilizar el prototype que va a cotizar.
    ui.mostrarResultado(total, seguro)
}