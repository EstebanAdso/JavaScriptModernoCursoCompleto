//Operador Y (And)
const usuario = false;
const puedePagar = true;

//Si es usuario y Puede pagar.
if(usuario && puedePagar){
    console.log('Si es usuario y puede pagar')
}
else if(usuario){
    console.log('Solo eres usuario pero no puedes pagar')
}
else{
    console.log('Necesitas registrarte.')
}