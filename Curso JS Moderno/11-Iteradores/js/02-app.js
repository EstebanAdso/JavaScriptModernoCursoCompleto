//For que detiene la ejecucion de un elemento

for(let i = 0; i < 10; i++){

    if(i === 5){
        break //detenemos la ejecucion
    }
    console.log(i)
}

//Saltar un numero
for(let i = 0; i < 10; i++){

    if(i === 5){
        continue //saltamos este numero pero sigue el codigo 
    }
    console.log(i)
}

const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200, descuento: true},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

for(let i = 0;  i < carrito.length; i++){

    if(carrito[i].descuento){
        console.log( `El articulo ${carrito[i].nombre} Tiene Descuento`)
        continue
    }
    console.log(carrito[i].nombre)
}