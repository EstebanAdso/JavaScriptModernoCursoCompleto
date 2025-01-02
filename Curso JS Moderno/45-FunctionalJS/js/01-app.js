//Programación funcional
//La programación funcional es un paradigma de programación que trata de minimizar los cambios de estado y los datos mutables.
//En la programación funcional, los datos son inmutables y los cambios se realizan mediante la aplicación de funciones puras.

const suma = function (a,b){
    return a + b;
}

const resultado = suma;

console.log(resultado(1,2));