const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio']

//Tenemos que conocer cuanto mide el arreglo (length)
console.table(meses)

//Modificar el valor de un array
meses[0] = 'Nuevo Mes'
//Agregar un valor, no tiene que estar definida en el array
meses[6] = 'Ultimo mes'

console.table(meses)