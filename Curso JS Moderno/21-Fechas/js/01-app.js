const diaHoy = new Date()

let valor = diaHoy; //Tue Nov 19 2024 10:10:49 GMT-0500 (hora estándar de Colombia)
valor = diaHoy.getFullYear// 2024
valor = diaHoy.getMinutes // minuto en el que estamos
valor = diaHoy.getMonth //mes en el que estamos
valor = diaHoy.getTime // milisegundos que recorre desde el 1 de enero de 1970


console.log(valor)