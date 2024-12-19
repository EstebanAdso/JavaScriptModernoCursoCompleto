//Modificadores de Acceso Publico y Privado
//Publico -> podemos acceder en la clase y el objeto
//Privado -> podemos acceder unicamente dentro de la clase
class Cliente{
    #nombre; //atributo privado

    constructor(nombre, saldo){
        this.#nombre = nombre; //atributo privado
        this.saldo = saldo;
    }

    //Podemos obtenerlo de esta manera 
    setNombre(nombre){
        this.#nombre = nombre
    }

    // y devolverlo de esta otra
    getNombre(){
        return this.#nombre
    }
    //Metodo Especifico para el cliente
    mostrarInformacion(){
        return `Cliente: ${this.#nombre} con Saldo: ${this.saldo}`
    }

    //Propiedades estaticas -> no requieren una instancia
    static bienvenida(){
        return `Bienvenido al cajero`
    }
}

const juan = new Cliente('juan', 340)
console.log(juan.mostrarInformacion())

juan.setNombre('Juan')
console.log(juan.getNombre())