//POO
//CREAR CLASE NUMERO 1 -> Mas Popular
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

//Instanciando la Clase
const juan = new Cliente('Juan', 400);
console.log(juan)

//Crear Clase numero 2 
const Cliente2 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

//Instanciando la clase numero 2
const juan2 = new Cliente2('Juan2', 300);
console.log(juan2)