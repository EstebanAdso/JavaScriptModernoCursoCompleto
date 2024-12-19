//Creando Prototype
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

//Instanciarlo
const pedro = new Cliente('Pedro',6000)
console.log(pedro.tipoCliente())
console.log(pedro.nombreClienteSaldo())
pedro.retiraSaldo(1000)
console.log(pedro.nombreClienteSaldo())





