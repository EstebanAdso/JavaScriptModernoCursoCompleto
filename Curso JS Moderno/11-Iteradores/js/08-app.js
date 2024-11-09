//For ... In
//Como el for pero mas simplificaco.

const automovil = {
   modelo: 'Camaro',
   year: 1969,
   motor: '6.8'
}

//For in itera sobre objetos y no sobre arreglos
for(let propiedad in automovil){
    console.log(`${automovil[propiedad]}`)
}

