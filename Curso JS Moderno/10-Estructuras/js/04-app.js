//Mayor o Igual y ElseIf
//Operador Mayor que y Menor que.
const dinero = 9000;
const totalAPagar = 500;
const tarjeta = true;

//El if va en order y se detiene en cuanto cumpla la condicion
if (dinero >= totalAPagar){
    console.log('Si puedes pagarlo')
}
else if(tarjeta){ //true por defecto.
    console.log('Puedes pagar con la tarjeta de credito.')
}
else{
    console.log('No puedes pagarlo')
}

//Si queremos tener multiples condiciones.
if (dinero >= totalAPagar){
    console.log('Si puedes pagarlo')
}

if(tarjeta){ //true por defecto.
    console.log('Puedes pagar con la tarjeta de credito.')
}