//Metodos especificos para nuestras clases
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    //Metodo Especifico para el cliente
    mostrarInformacion(){
        return `Cliente: ${this.nombre} con Saldo: ${this.saldo}`
    }

    //Propiedades estaticas -> no requieren una instancia
    static bienvenida(){
        return `Bienvenido al cajero`
    }
}

//Instanciando la Clase
const juan = new Cliente('Juan', 400);
console.log(juan)
console.log(juan.mostrarInformacion()) //Acceder al metodo de la clase.
console.log(Cliente.bienvenida()) //Usando la Propiedad estatica, pertenece a la clase y no al objeto. 

