//Heredar Un Prototype
function Cliente (nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

//Metodo exclusico de Cliente.
Cliente.prototype.tipoCliente = function(){
    let tipo;
    if(this.saldo > 10000){
        tipo = 'Gold'
    }else if(this.saldo > 5000){
        tipo = 'Platinum'
    }else{
        tipo = 'Normal'
    }

    return tipo;
}

//Metodo exclusico de Cliente.
Cliente.prototype.nombreClienteSaldo = function(){
    //podemos llamar un prototype dentro de uno
    return `Nombre ${this.nombre}, Saldo ${this.saldo}, Tipo Cliente ${this.tipoCliente()}`
}

//Metodo exclusico de Cliente.
Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}



function Persona(nombre, saldo, telefono){
    //Heredamos nombre y saldo de Cliente.
    Cliente.call(this, nombre, saldo)
    this.telefono = telefono; //Telefono es una propiedad nueva.
}

//Heredar las funciones de un prototype, esto es necesario antes de instanciar
Persona.prototype = Object.create(Cliente.prototype)

Persona.prototype.constructor = Cliente

const juan = new Persona('Juan', 5000, 313789678)
console.log(juan.tipoCliente()) //Estamos usando un metodo de Cliente a pesar de ser persona porque lo hederamos