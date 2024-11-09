//Undefined
//al no definit un valor seria indefinido, su variable esta definida pero su valor no
let numero;
console.log(numero)

//Null
let numero2 = null
console.log(numero2)

//Nos dice que true a pesar de que sea uno null y el otro undefined
console.log(numero == numero2)

//Por eso es recomendable siempre usar el comparador estricto y en algunos casos especificos el otro
console.log(numero === numero2)