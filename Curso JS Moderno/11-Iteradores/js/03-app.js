//El ejercicio de Fizz Buzz
//todos los multiplos de 3 deben imprimir fizz
//todos los multiplos de 5 deben imprimir buzz
//si son de 3 y de 5 deben imprimir fizz buzz


for(let i = 1; i <= 100; i++){

    if(i%3 === 0 && i%5 === 0){
        console.log(`${i} fizz buzz`)
    }
    if(i%5 === 0){
        console.log(`${i} buzz`)
    }
    if(i%3 === 0){
        console.log(`${i} fizz`)
    }
}