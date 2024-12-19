//Iteradores en Javascript
const ciudades = ['Londres','New york','Madrid','Paris'];
const ordenes = new Set([123,231,131,102]) // solo son valores no tienen llave
const datos = new Map();

datos.set('nombre','Juan')
datos.set('profesion','Desarrollador Web')

//Iterador entries -> llave y valor
for(let entry of ciudades.entries()){
    console.log(entry)
}

for(let entry of ordenes.entries()){
    console.log(entry)
}

for(let entry of datos.entries()){
    console.log(entry)
}

//Iterador Values -> itera sobre los valores
for(let value of ciudades.values()){
    console.log(value)
}

for(let value of ordenes.values()){
    console.log(value)
}

for(let value of datos.values()){
    console.log(value)
}

//Iterador Keys -> itera sobre las llaves
for(let keys of ciudades.keys()){
    console.log(keys)
}

for(let keys of ordenes.keys()){
    console.log(keys)
}

for(let keys of datos.keys()){
    console.log(keys)
}

//Default
for(let ciudad of ciudades){
    console.log(ciudad)
}