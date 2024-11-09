//Switch para revisar multiples condiciones.
const metodoPago = 'Nequi'

switch(metodoPago){
    case 'Efectivo':
        console.log(`Pagaste con ${metodoPago}`)
        pagar();
        break // no ejecutar las demas lineas.
    case 'Nequi':
        console.log(`Pagaste con ${metodoPago}`)
        pagar();
        break
    default: 
        console.log('Aun no has seleccionado un metodo de pago.');
        break
}

function pagar(){
    console.log('pagando...')
}