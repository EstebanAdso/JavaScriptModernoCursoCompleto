//Variables y Selectores
const formulario = document.querySelector('#agregar-gasto')
const gastoListado = document.querySelector('#gastos ul')

//Eventos
eventListeners()
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto)

    formulario.addEventListener('submit', agregarGasto)
}

//Clases
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto)
        this.restante = Number(presupuesto) //al incio el restante sera igual que presupuesto
        this.gastos = []
    }
 
    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto] //tomamos la copia del arreglo gastos y le pasamos el gasto al arreglo 
        this.calcularRestante()
    }

    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante()
    }
}

class UI{
    insertarPresupusto(cantidad){
        //Extrayendo los valores
        const {presupuesto, restante} = cantidad;
        //Insertar en el Hmtl
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        //crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert')

        if(tipo ==='error'){
            divMensaje.classList.add('alert-danger')
        }else{
            divMensaje.classList.add('alert-success')
        }

        //Mensaje de error
        divMensaje.textContent = mensaje

        //Insertar en el Html
        document.querySelector('.primario').insertBefore(divMensaje, formulario) //en que parte lo vamos a colocar | la referencia de donde se asignara

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
    mostrarGastos(gastos){
        
        this.limpiarHtml()//Elimina el Html previo

        //Iterar sobre los gastos
        gastos.forEach(gasto => {
            const {cantidad, nombre, id} = gasto;

            //Crear un Li
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center'
            nuevoGasto.setAttribute('data-id', id);

            console.log(nuevoGasto)
            //Agregar el html del gasto
            nuevoGasto.innerHTML =`${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad}</span> `

            //Boton para borrar el gasto
            const btnBorrar = document.createElement('button')
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto' )
            btnBorrar.onclick = () =>{
                eliminarGasto(id);
            }
            btnBorrar.textContent = 'Borrar'

            nuevoGasto.appendChild(btnBorrar)

            //Agregar el boton al html
            gastoListado.appendChild(nuevoGasto)
        });
    }

    limpiarHtml(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild)
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante; 
    }

    comprobarPresupuesto(presupuestoObj){
        const {presupuesto, restante} = presupuestoObj;
        const restanteDiv = document.querySelector('.restante')

        //comprobar 25%
        if((presupuesto  / 4) > restante){
            restanteDiv.classList.remove('alert-success', 'alert-warning')
            restanteDiv.classList.add('alert-danger')
        }else if((presupuesto / 2) > restante){
            restanteDiv.classList.remove('alert-success')
            restanteDiv.classList.add('alert-warning')
        }else{
            restanteDiv.classList.remove('alert-danger', 'alert-warning')
            restanteDiv.classList.add('alert-success')
        }

        //Si el total es cero o menos
        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error')
            formulario.querySelector('button[type="submit"]').disabled = true
        }
    }
}

const ui = new UI;
let presupuesto;

//Funciones
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu Presupuesto?')

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload() //recargar la pagina.
    }

    //Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario)
    ui.insertarPresupusto(presupuesto)
}

//Añade gasto
function agregarGasto(e){
    e.preventDefault()

    //Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value //valor del input
    const cantidad = Number(document.querySelector('#cantidad').value) //valor del input

    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error')
        return
    } else if( cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida', 'error')
        return //si hay errores no seguira con el codigo de abajo.
    }

    //Generar un objeto con el gasto
    const gasto = {nombre, cantidad, id: Date.now()} //el id sera la fecha en la que se agrego el gasto en milisegundos asi que no se repetira
    
    //añade el nuevo gasto
    presupuesto.nuevoGasto(gasto)

    //Mensaje Correcto
    ui.imprimirAlerta('Gasto agregado correctamente')

    //Imprimir los gastos
    const {gastos, restante} = presupuesto
    ui.mostrarGastos(gastos)

    ui.actualizarRestante(restante)
    //Reinicia el formulario
    formulario.reset()
}

function eliminarGasto(id){
    presupuesto.eliminarGasto(id)
    const {gastos, restante} = presupuesto
    ui.mostrarGastos(gastos)

    ui.actualizarRestante(restante)

    ui.comprobarPresupuesto(presupuesto)
}