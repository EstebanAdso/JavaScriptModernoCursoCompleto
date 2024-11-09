const producto = 'Monitor 20 Pulgadas' 
const precio = '30 USD'

//Concatenar variables
console.log(producto.concat(' precio: ').concat(precio))

//Otra forma de concatenar
console.log( producto + " precio: " + precio)

console.log("El producto " + producto + " tiene un precio de " + precio)

//concatenacion  con coma
console.log("El producto " , producto , " tiene un precio de " , precio)

//Concatenacion mas poderosa con backtick - las variables se usan con ${}
console.log(`El producto ${producto} tiene un precio de ${precio}`)