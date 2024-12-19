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

//Herencia
class Empresa extends Cliente{ //Empresa es clase hijo de cliente- hereda metodos y atributos
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo) //busca a la clase padre
        this.telefono = telefono
        this.categoria = categoria
    }

     //Propiedades estaticas -> no requieren una instancia
     static bienvenida(){
        return `Bienvenido al cajero de Empresas`
    }

     //Metodo Especifico para el cliente
     mostrarInformacion(){
        return `Cliente: ${this.nombre} con Saldo: ${this.saldo} con telefono ${this.telefono} y de categoria ${this.categoria} `
    }
}

//Instanciando la Clase
const juan = new Cliente('Juan', 400);
console.log(juan)
console.log(juan.mostrarInformacion()) //Acceder al metodo de la clase.
console.log(Cliente.bienvenida()) //Usando la Propiedad estatica, pertenece a la clase y no al objeto. 

const empresa = new Empresa('CCJ', 199, 31334323, 'Computacion');
console.log(empresa)
console.log(empresa.mostrarInformacion()) //Acceder al metodo de la clase.
console.log(Empresa.bienvenida()) //Usando la Propiedad estatica, pertenece a la clase y no al objeto. 

