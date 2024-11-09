//Operador OR

const efectivo = 200;
const credito = 400;
const disponible = efectivo + credito;
const totalAPagar = 600;

if(efectivo >= totalAPagar || credito >= totalAPagar){
    console.log('Si puedes pagar solo con un metodo')
}
else if(disponible >= totalAPagar){
    console.log('Puedes pagar con ambos metodos')
}
else{
    console.log('No puedes pagar.')
}