//Buenas practicas utilizando el ciclo if

const autenticado = true;

if(autenticado){ //No es necesario poner el true ya que por defecto lo es
    console.log('Esta autenticado')
}
const puntaje = 500

//Tiene que llevar un order el if en este caso tiene que estar el 400 de primero
if(puntaje > 300){
    console.log('Buen puntaje felicidades')
}else if(puntaje > 400){
    console.log('Excelente')
}