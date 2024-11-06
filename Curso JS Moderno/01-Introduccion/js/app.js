//lo que escribamos se asignara a la variable
const nombre = prompt('¿Cual es tu Nombre?')
//limpiar el contenido con innerHtml y asignarle uno nuevo
document.querySelector('.contenido').innerHTML = `Hola ${nombre}, estás aprendiendo javascript moderno`